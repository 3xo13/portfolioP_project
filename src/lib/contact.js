export const CONTACT_LIMITS = {
  name: 80,
  email: 160,
  phone: 30,
  message: 2000,
};

export const CONTACT_DAILY_LIMIT = 3;
export const CONTACT_ERROR_CODES = {
  nameRequired: 'name_required',
  emailInvalid: 'email_invalid',
  phoneInvalid: 'phone_invalid',
  messageShort: 'message_short',
  rateLimited: 'rate_limited',
  invalidBody: 'invalid_body',
  configuration: 'telegram_not_configured',
  sendFailed: 'send_failed',
};

const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

function toSafeString(value) {
  return typeof value === 'string' ? value : '';
}

function normalizeWhitespace(value) {
  return value
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function clip(value, maxLength) {
  return value.slice(0, maxLength);
}

function sanitizeDraftValue(value, maxLength) {
  return clip(toSafeString(value).replace(CONTROL_CHARS, '').replace(/\r\n/g, '\n'), maxLength);
}

export function sanitizeContactDraft(rawInput) {
  return {
    name: sanitizeDraftValue(rawInput?.name, CONTACT_LIMITS.name),
    email: sanitizeDraftValue(rawInput?.email, CONTACT_LIMITS.email),
    phone: sanitizeDraftValue(rawInput?.phone, CONTACT_LIMITS.phone),
    message: sanitizeDraftValue(rawInput?.message, CONTACT_LIMITS.message),
  };
}

export function sanitizeContactInput(rawInput) {
  const name = clip(normalizeWhitespace(toSafeString(rawInput?.name).replace(CONTROL_CHARS, '')), CONTACT_LIMITS.name);
  const email = clip(normalizeWhitespace(toSafeString(rawInput?.email).replace(CONTROL_CHARS, '')).toLowerCase(), CONTACT_LIMITS.email);
  const phone = clip(normalizeWhitespace(toSafeString(rawInput?.phone).replace(CONTROL_CHARS, '').replace(/[^\d+()\-\s]/g, '')), CONTACT_LIMITS.phone);
  const message = clip(normalizeWhitespace(toSafeString(rawInput?.message).replace(CONTROL_CHARS, '')), CONTACT_LIMITS.message);

  return { name, email, phone, message };
}

export function validateContactInput(input) {
  const errors = {};

  if (input.name.length < 2) {
    errors.name = CONTACT_ERROR_CODES.nameRequired;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    errors.email = CONTACT_ERROR_CODES.emailInvalid;
  }

  if (input.phone && !/^\+?[\d()\-\s]{7,30}$/.test(input.phone)) {
    errors.phone = CONTACT_ERROR_CODES.phoneInvalid;
  }

  if (input.message.length < 10) {
    errors.message = CONTACT_ERROR_CODES.messageShort;
  }

  return errors;
}

export function formatUtcPlus3Timestamp(date = new Date()) {
  const utcTime = date.getTime() + date.getTimezoneOffset() * 60_000;
  const utcPlus3Date = new Date(utcTime + 3 * 60 * 60 * 1000);

  const year = utcPlus3Date.getUTCFullYear();
  const month = String(utcPlus3Date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(utcPlus3Date.getUTCDate()).padStart(2, '0');
  const hours = String(utcPlus3Date.getUTCHours()).padStart(2, '0');
  const minutes = String(utcPlus3Date.getUTCMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes} UTC+3`;
}

export function getUtcPlus3DayKey(date = new Date()) {
  return formatUtcPlus3Timestamp(date).slice(0, 10);
}

export function getSecondsUntilNextUtcPlus3Day(date = new Date()) {
  const utcTime = date.getTime() + date.getTimezoneOffset() * 60_000;
  const utcPlus3Time = utcTime + 3 * 60 * 60 * 1000;
  const elapsedSecondsToday = Math.floor((utcPlus3Time % (24 * 60 * 60 * 1000)) / 1000);

  return 24 * 60 * 60 - elapsedSecondsToday;
}

export function formatTelegramMessage(input, meta = {}) {
  const submittedAt = meta.submittedAt ?? new Date().toISOString();
  const source = meta.source ?? 'Portfolio contact form';

  return [
    'New Contact Request',
    '',
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `WhatsApp: ${input.phone || 'Not provided'}`,
    `Submitted: ${submittedAt}`,
    `Source: ${source}`,
    '',
    'Message:',
    input.message,
  ].join('\n');
}