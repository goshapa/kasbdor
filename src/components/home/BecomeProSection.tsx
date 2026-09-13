"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Container } from "../ui/Container";

export function BecomeProSection() {
  const { t } = useLang();

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-6 py-14 sm:px-14">
          <div className="bg-grid absolute inset-0 opacity-30" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {t.becomePro.title}
              </h2>
              <p className="mt-3 max-w-lg text-ink-300">{t.becomePro.subtitle}</p>

              <ul className="mt-7 space-y-3">
                {t.becomePro.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm text-ink-200">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-400" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <Link
                href="/become-pro"
                className="mt-8 inline-flex rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600 active:scale-95"
              >
                {t.becomePro.cta}
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mx-auto w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <TrendingUp size={20} />
                </span>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                  +18%
                </span>
              </div>
              <p className="mt-4 text-xs font-medium text-ink-400">{t.becomePro.statLabel}</p>
              <p className="mt-1 font-display text-3xl font-extrabold text-ink-900">
                {t.becomePro.statValue}
              </p>
              <div className="mt-5 flex items-end gap-1.5">
                {[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-brand-500 to-brand-300"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
