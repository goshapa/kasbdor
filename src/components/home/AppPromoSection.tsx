"use client";

import { Apple, PlayCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Container } from "../ui/Container";

export function AppPromoSection() {
  const { t } = useLang();

  return (
    <section className="pb-20 sm:pb-24">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-ink-100 bg-white px-6 py-10 sm:flex-row sm:px-12">
          <div className="text-center sm:text-left">
            <h3 className="font-display text-2xl font-extrabold text-ink-900">
              {t.appPromo.title}
            </h3>
            <p className="mt-2 max-w-md text-sm text-ink-500">{t.appPromo.subtitle}</p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <button className="flex items-center gap-3 rounded-xl bg-ink-900 px-5 py-3 text-left transition hover:bg-ink-800">
              <Apple size={26} className="text-white" />
              <span className="leading-tight">
                <span className="block text-[10px] text-ink-300">{t.appPromo.store1}</span>
                <span className="block text-sm font-semibold text-white">
                  {t.appPromo.store1b}
                </span>
              </span>
            </button>
            <button className="flex items-center gap-3 rounded-xl bg-ink-900 px-5 py-3 text-left transition hover:bg-ink-800">
              <PlayCircle size={26} className="text-white" />
              <span className="leading-tight">
                <span className="block text-[10px] text-ink-300">{t.appPromo.store2}</span>
                <span className="block text-sm font-semibold text-white">
                  {t.appPromo.store2b}
                </span>
              </span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
