"use client";

import { useLang } from "@/lib/i18n";
import { Container } from "../ui/Container";
import { SpecialistCard } from "../SpecialistCard";
import { specialists } from "@/lib/data";

export function TopSpecialists() {
  const { t } = useLang();

  const top = [...specialists].sort((a, b) => b.rating - a.rating || b.ordersCount - a.ordersCount).slice(0, 8);

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            {t.top.title}
          </h2>
          <p className="mt-3 text-ink-500">{t.top.subtitle}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {top.map((specialist) => (
            <SpecialistCard key={specialist.id} specialist={specialist} />
          ))}
        </div>
      </Container>
    </section>
  );
}
