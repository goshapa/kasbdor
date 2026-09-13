"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Container } from "../ui/Container";

export function StatsBar() {
  const { t } = useLang();

  return (
    <section className="relative -mt-10 z-10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-6 rounded-2xl bg-white p-8 shadow-xl shadow-ink-900/5 ring-1 ring-ink-100 sm:grid-cols-4"
        >
          {t.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-ink-400 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
