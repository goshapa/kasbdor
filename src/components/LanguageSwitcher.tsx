"use client";

import { useLang } from "@/lib/i18n";
import clsx from "clsx";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div
      className={clsx(
        "inline-flex items-center rounded-full bg-ink-50 p-1 text-xs font-semibold",
        className
      )}
    >
      {(["ru", "uz"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={clsx(
            "rounded-full px-3 py-1.5 transition",
            lang === l ? "bg-white text-ink-900 shadow-sm" : "text-ink-400 hover:text-ink-600"
          )}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
