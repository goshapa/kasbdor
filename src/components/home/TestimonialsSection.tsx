"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Container } from "../ui/Container";
import { Avatar } from "../ui/Avatar";
import { Rating } from "../ui/Rating";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  const { lang, t } = useLang();

  return (
    <section className="bg-ink-50/60 py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            {t.testimonials.title}
          </h2>
          <p className="mt-3 text-ink-500">{t.testimonials.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink-100"
            >
              <Quote size={28} className="text-brand-200" />
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">
                {item.text[lang]}
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-ink-50 pt-4">
                <Avatar initials={item.initials} color={item.avatarColor} size="sm" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ink-900">{item.name}</p>
                  <p className="truncate text-xs text-ink-400">{item.role[lang]}</p>
                </div>
                <Rating value={item.rating} className="ml-auto" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
