"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Wallet,
  Timer,
  Percent,
  ClipboardCheck,
  ShieldCheck,
  Inbox,
  Hammer,
  CheckCircle2,
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { categories, cities } from "@/lib/data";

const statIcons = [Wallet, Timer, Percent];
const benefitIcons = [Inbox, ShieldCheck, Wallet, Sparkles];
const stepIcons = [ClipboardCheck, ShieldCheck, Inbox, Hammer];

export default function BecomeProPage() {
  const { lang, t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="relative overflow-hidden bg-ink-900">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl" />

        <Container className="relative py-20 text-center lg:py-24">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-brand-300 ring-1 ring-white/10">
            <Sparkles size={13} />
            {t.proPage.badge}
          </div>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            {t.proPage.title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-300">{t.proPage.subtitle}</p>
          <a
            href="#pro-form"
            className="mt-8 inline-flex rounded-full bg-brand-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600 active:scale-95"
          >
            {t.proPage.cta}
          </a>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
            {t.proPage.stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10"
                >
                  <Icon size={22} className="mx-auto text-brand-400" />
                  <p className="mt-3 font-display text-xl font-extrabold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-ink-400">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <h2 className="text-center font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            {t.proPage.benefitsTitle}
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.proPage.benefits.map((benefit, i) => {
              const Icon = benefitIcons[i];
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl border border-ink-100 bg-white p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-ink-50/60 py-20 sm:py-24">
        <Container>
          <h2 className="text-center font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            {t.proPage.stepsTitle}
          </h2>
          <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent lg:block" />
            {t.proPage.steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <div key={step.title} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand-500 shadow-lg shadow-ink-900/5 ring-1 ring-ink-100">
                    <Icon size={26} />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-ink-900 text-[11px] font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="pro-form" className="py-20 sm:py-24">
        <Container className="max-w-xl">
          <div className="rounded-3xl border border-ink-100 bg-white p-8 shadow-xl shadow-ink-900/5 sm:p-10">
            {!submitted ? (
              <>
                <h2 className="font-display text-2xl font-extrabold text-ink-900">
                  {t.proPage.formTitle}
                </h2>
                <p className="mt-2 text-sm text-ink-500">{t.proPage.formSubtitle}</p>

                <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-700">
                      {t.proPage.nameLabel}
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-xl border border-ink-100 bg-ink-50/50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-700">
                      {t.proPage.phoneLabel}
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+998 90 123 45 67"
                      className="w-full rounded-xl border border-ink-100 bg-ink-50/50 px-4 py-3 text-sm text-ink-900 outline-none transition placeholder:text-ink-300 focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink-700">
                        {t.proPage.categoryLabel}
                      </label>
                      <select className="w-full rounded-xl border border-ink-100 bg-ink-50/50 px-3 py-3 text-sm text-ink-900 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100">
                        {categories.map((c) => (
                          <option key={c.slug} value={c.slug}>
                            {c.title[lang]}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink-700">
                        {t.proPage.cityLabel}
                      </label>
                      <select className="w-full rounded-xl border border-ink-100 bg-ink-50/50 px-3 py-3 text-sm text-ink-900 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100">
                        {cities.map((c) => (
                          <option key={c.ru} value={c.ru}>
                            {c[lang]}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-700">
                      {t.proPage.experienceLabel}
                    </label>
                    <select className="w-full rounded-xl border border-ink-100 bg-ink-50/50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100">
                      {t.proPage.experienceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-brand-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600 active:scale-[0.98]"
                  >
                    {t.proPage.submit}
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center py-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                  <CheckCircle2 size={36} className="text-emerald-500" />
                </div>
                <h3 className="font-display text-xl font-bold text-ink-900">
                  {t.proPage.success}
                </h3>
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
