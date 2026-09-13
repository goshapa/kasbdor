"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/lib/data";

export default function CategoriesPage() {
  const { lang, t } = useLang();
  const [query, setQuery] = useState("");

  const filtered = categories.filter((c) =>
    c.title[lang].toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-ink-50/40">
      <div className="border-b border-ink-100 bg-white">
        <Container className="py-12">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            {t.categoriesSection.title}
          </h1>
          <p className="mt-2 max-w-xl text-ink-500">{t.categoriesSection.subtitle}</p>

          <div className="mt-6 flex max-w-md items-center gap-2 rounded-xl border border-ink-100 bg-ink-50/60 px-4 py-3">
            <Search size={18} className="text-ink-300" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder={t.hero.searchPlaceholder}
              className="w-full bg-transparent text-sm text-ink-900 outline-none placeholder:text-ink-300"
            />
          </div>
        </Container>
      </div>

      <Container className="py-12">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-16 text-center text-ink-400">{t.category.noResults}</p>
        )}
      </Container>
    </div>
  );
}
