"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ShieldCheck, BadgeCheck, Wallet, Star, CheckCircle2 } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Container } from "../ui/Container";
import { useRequestModal } from "../RequestModal";
import { categories } from "@/lib/data";

const trustIcons = [ShieldCheck, BadgeCheck, Wallet];

export function Hero() {
  const { lang, t } = useLang();
  const { open } = useRequestModal();
  const [query, setQuery] = useState("");

  const popularTags = categories.slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-ink-900">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />

      <Container className="relative py-20 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-brand-300 ring-1 ring-white/10"
            >
              <Star size={13} className="fill-brand-400 text-brand-400" />
              {t.hero.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
            >
              {t.hero.title.split(t.hero.titleAccent).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="text-brand-400">{t.hero.titleAccent}</span>
                  )}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 max-w-xl text-lg text-ink-300"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              onSubmit={(e) => {
                e.preventDefault();
                open();
              }}
              className="mt-8 flex flex-col gap-2 rounded-2xl bg-white p-2 shadow-2xl shadow-black/20 sm:flex-row"
            >
              <div className="flex flex-1 items-center gap-2 px-3 py-2">
                <Search size={20} className="shrink-0 text-ink-300" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  placeholder={t.hero.searchPlaceholder}
                  className="w-full bg-transparent text-sm text-ink-900 outline-none placeholder:text-ink-300"
                />
              </div>
              <button
                type="submit"
                className="shrink-0 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600 active:scale-[0.98]"
              >
                {t.hero.searchButton}
              </button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 flex flex-wrap items-center gap-2 text-sm"
            >
              <span className="text-ink-400">{t.hero.popularLabel}</span>
              {popularTags.map((c) => (
                <button
                  key={c.slug}
                  onClick={() => open(c.slug)}
                  className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-ink-200 transition hover:bg-white/20"
                >
                  {c.title[lang]}
                </button>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {t.hero.trust.map((item, i) => {
                const Icon = trustIcons[i];
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-brand-300">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="text-xs text-ink-400">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <div className="relative hidden h-[480px] lg:block">
            <FloatingCards />
          </div>
        </div>
      </Container>
    </section>
  );
}

function FloatingCards() {
  const { lang, t } = useLang();

  return (
    <div className="relative h-full w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute left-4 top-6 w-64 rounded-2xl bg-white p-4 shadow-2xl"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-500 font-display font-bold text-white">
            AK
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-900">Aziz Karimov</p>
            <p className="text-xs text-ink-400">Сантехник, электрик</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1 text-gold">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={13} className="fill-gold" />
          ))}
          <span className="ml-1 text-xs font-medium text-ink-500">4.9 (312)</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="absolute right-2 top-40 w-56 rounded-2xl bg-white p-4 shadow-2xl"
      >
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
            {t.top.verified}
          </span>
          <CheckCircle2 size={18} className="text-emerald-500" />
        </div>
        <p className="mt-3 text-sm font-semibold text-ink-900">
          {lang === "ru" ? "Заказ выполнен" : "Buyurtma bajarildi"}
        </p>
        <p className="text-xs text-ink-400">
          {lang === "ru" ? "Уборка квартиры · сегодня" : "Kvartira tozalash · bugun"}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-16 left-10 w-60 rounded-2xl bg-white p-4 shadow-2xl"
      >
        <p className="text-xs font-medium text-ink-400">
          {lang === "ru" ? "Новый отклик" : "Yangi taklif"}
        </p>
        <p className="mt-1 text-sm font-semibold text-ink-900">
          {lang === "ru" ? "от 150 000 сум" : "150 000 so'mdan"}
        </p>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-ink-50">
          <div className="h-full w-4/5 rounded-full bg-brand-500" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute bottom-0 right-0 flex h-32 w-32 items-center justify-center rounded-full bg-brand-500/90 text-center shadow-2xl"
      >
        <div>
          <p className="font-display text-2xl font-extrabold text-white">4.9</p>
          <p className="text-[11px] text-brand-50">
            {lang === "ru" ? "средний рейтинг" : "o'rtacha reyting"}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
