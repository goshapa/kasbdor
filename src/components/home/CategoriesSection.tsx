"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Container } from "../ui/Container";
import { CategoryCard } from "../CategoryCard";
import { categories } from "@/lib/data";

export function CategoriesSection() {
  const { t } = useLang();

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              {t.categoriesSection.title}
            </h2>
            <p className="mt-2 max-w-xl text-ink-500">{t.categoriesSection.subtitle}</p>
          </div>
          <Link
            href="/categories"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-600"
          >
            {t.categoriesSection.viewAll}
            <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
