"use client";

import { motion } from "framer-motion";
import { ClipboardList, MessagesSquare, UserCheck, HandCoins } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Container } from "../ui/Container";
import { useRequestModal } from "../RequestModal";

const icons = [ClipboardList, MessagesSquare, UserCheck, HandCoins];

export function HowItWorks() {
  const { t } = useLang();
  const { open } = useRequestModal();

  return (
    <section id="how-it-works" className="bg-ink-50/60 py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            {t.howItWorks.title}
          </h2>
          <p className="mt-3 text-ink-500">{t.howItWorks.subtitle}</p>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent lg:block" />
          {t.howItWorks.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative flex flex-col items-center text-center"
              >
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
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => open()}
            className="rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600 active:scale-95"
          >
            {t.howItWorks.cta}
          </button>
        </div>
      </Container>
    </section>
  );
}
