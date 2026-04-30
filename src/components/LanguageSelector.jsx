"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { locales } from "../i18n/config";

export default function LanguageSelector({ currentLang, label, localeNames }) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    function handlePointerDown(event) {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const switchLanguage = (nextLang) => {
    const segments = pathname.split("/").filter(Boolean);
    const hash = window.location.hash;

    if (segments.length > 0 && locales.includes(segments[0])) {
      segments[0] = nextLang;
    } else {
      segments.unshift(nextLang);
    }

    router.push(`/${segments.join("/")}${hash}`);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:border-[#915eff]/60 hover:bg-white/10"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#915eff]/20 text-[#c4b5fd]">
          {currentLang.toUpperCase()}
        </span>
        <span className="hidden md:block">{localeNames[currentLang]}</span>
        <span className={`text-xs text-secondary transition ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {open ? (
        <div className="absolute right-0 top-[calc(100%+12px)] z-30 min-w-[220px] overflow-hidden rounded-2xl border border-white/10 bg-[#120d27]/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <p className="px-3 pb-2 pt-1 text-xs uppercase tracking-[0.2em] text-secondary">
            {label}
          </p>
          <ul role="listbox" className="space-y-1">
            {locales.map((locale) => {
              const active = locale === currentLang;

              return (
                <li key={locale}>
                  <button
                    type="button"
                    onClick={() => switchLanguage(locale)}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition ${
                      active
                        ? "bg-[#915eff]/20 text-white"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className="font-medium">{localeNames[locale]}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-secondary">
                      {locale}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}