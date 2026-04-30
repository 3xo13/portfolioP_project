import { NextResponse } from 'next/server';

import {
  CONTACT_DAILY_LIMIT,
  CONTACT_ERROR_CODES,
  formatTelegramMessage,
  formatUtcPlus3Timestamp,
  getSecondsUntilNextUtcPlus3Day,
  getUtcPlus3DayKey,
  sanitizeContactInput,
  validateContactInput,
} from '../../../lib/contact';

const CONTACT_LIMIT_COOKIE = 'contact_submission_limit';

function readContactLimitCookie(request, dayKey) {
  const rawValue = request.cookies.get(CONTACT_LIMIT_COOKIE)?.value;

  if (!rawValue) {
    return { day: dayKey, count: 0 };
  }

  try {
    const parsed = JSON.parse(rawValue);

    if (parsed?.day === dayKey && Number.isInteger(parsed?.count) && parsed.count >= 0) {
      return parsed;
    }
  } catch {
    return { day: dayKey, count: 0 };
  }

  return { day: dayKey, count: 0 };
}

export async function POST(request) {
  const botToken = process.env.BOT_TOKEN;
  const chatId = process.env.CHAT_ID;
  const dayKey = getUtcPlus3DayKey();
  const rateLimitState = readContactLimitCookie(request, dayKey);

  if (!botToken || !chatId) {
    return NextResponse.json(
      { code: CONTACT_ERROR_CODES.configuration },
      { status: 500 }
    );
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ code: CONTACT_ERROR_CODES.invalidBody }, { status: 400 });
  }

  const input = sanitizeContactInput(body);
  const errors = validateContactInput(input);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  if (rateLimitState.count >= CONTACT_DAILY_LIMIT) {
    return NextResponse.json(
      {
        code: CONTACT_ERROR_CODES.rateLimited,
      },
      { status: 429 }
    );
  }

  const message = formatTelegramMessage(input, {
    submittedAt: formatUtcPlus3Timestamp(),
    source: request.headers.get('origin') ?? 'Portfolio contact form',
  });

  const telegramResponse = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        disable_web_page_preview: true,
      }),
    }
  );

  if (!telegramResponse.ok) {
    return NextResponse.json(
      { code: CONTACT_ERROR_CODES.sendFailed },
      { status: 502 }
    );
  }

  const response = NextResponse.json({
    ok: true,
    remaining: Math.max(0, CONTACT_DAILY_LIMIT - (rateLimitState.count + 1)),
  });

  response.cookies.set(CONTACT_LIMIT_COOKIE, JSON.stringify({
    day: dayKey,
    count: rateLimitState.count + 1,
  }), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: getSecondsUntilNextUtcPlus3Day(),
  });

  return response;
}