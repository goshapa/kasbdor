"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronRight, SlidersHorizontal, BadgeCheck, Wifi } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { SpecialistCard } from "@/components/SpecialistCard";
import { useRequestModal } from "@/components/RequestModal";
import { getCategory, getSpecialistsByCategory, cities } from "@/lib/data";
import { formatNumber } from "@/lib/format";

type SortKey = "rating" | "priceAsc" | "priceDesc" | "orders";

export default function CategoryPageClient({ slug }: { slug: string }) {
  const { lang, t } = useLang();
  const { open } = useRequestModal();

  const category = getCategory(slug);
  const allSpecialists = useMemo(() => getSpecialistsByCategory(slug), [slug]);

  const [sort, setSort] = useState<SortKey>("rating");
  const [onlyVerified, setOnlyVerified] = useState(false);
  const [onlyOnline, setOnlyOnline] = useState(false);
  const [city, setCity] = useState("all");

  if (!category) {
    return null;
  }

  const Icon = category.icon;

  const filtered = allSpecialists
    .filter((s) => (onlyVerified ? s.verified : true))
    .filter((s) => (onlyOnline ? s.online : true))
    .filter((s) => (city === "all" ? true : s.city.ru === city))
    .sort((a, b) => {
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "priceAsc") return a.priceFrom - b.priceFrom;
      if (sort === "priceDesc") return b.priceFrom - a.priceFrom;
      return b.ordersCount - a.ordersCount;
    });

  return (
    <div className="bg-ink-50/40">
      <div className="border-b border-ink-100 bg-white">
        <Container className="py-10">
          <div className="mb-4 flex items-center gap-1.5 text-xs text-ink-400">
            <Link href="/" className="transition hover:text-brand-600">
              Kasbdor
            </Link>
            <ChevronRight size={13} />
            <Link href="/categories" className="transition hover:text-brand-600">
              {t.categoriesSection.title}
            </Link>
            <ChevronRight size={13} />
            <span className="font-medium text-ink-600">{category.title[lang]}</span>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-md ${category.color}`}
              >
                <Icon size={26} />
              </span>
              <div>
                <h1 className="font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
                  {category.title[lang]}
                </h1>
                <p className="mt-1 text-sm text-ink-500">
                  {formatNumber(filtered.length)} {t.category.resultsCount}
                </p>
              </div>
            </div>

            <button
              onClick={() => open(category.slug)}
              className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-500/25 transition hover:bg-brand-600 active:scale-95"
            >
              {t.nav.postTask}
            </button>
          </div>
        </Container>
      </div>

      <Container className="grid grid-cols-1 gap-8 py-10 lg:grid-cols-[260px_1fr]">
        <aside className="h-fit space-y-6 rounded-2xl border border-ink-100 bg-white p-5 lg:sticky lg:top-24">
          <div className="flex items-center gap-2 text-sm font-semibold text-ink-900">
            <SlidersHorizontal size={16} className="text-brand-500" />
            {t.common.filters}
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink-400">
              {t.category.filterCity}
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full rounded-xl border border-ink-100 bg-ink-50/50 px-3 py-2.5 text-sm text-ink-900 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            >
              <option value="all">{t.common.showAll}</option>
              {cities.map((c) => (
                <option key={c.ru} value={c.ru}>
                  {c[lang]}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-3">
            <label className="flex cursor-pointer items-center justify-between text-sm text-ink-700">
              <span className="flex items-center gap-2">
                <BadgeCheck size={16} className="text-sky-500" />
                {t.category.filterVerified}
              </span>
              <input
                type="checkbox"
                checked={onlyVerified}
                onChange={(e) => setOnlyVerified(e.target.checked)}
                className="h-4 w-4 accent-brand-500"
              />
            </label>
            <label className="flex cursor-pointer items-center justify-between text-sm text-ink-700">
              <span className="flex items-center gap-2">
                <Wifi size={16} className="text-emerald-500" />
                {t.category.filterOnline}
              </span>
              <input
                type="checkbox"
                checked={onlyOnline}
                onChange={(e) => setOnlyOnline(e.target.checked)}
                className="h-4 w-4 accent-brand-500"
              />
            </label>
          </div>
        </aside>

        <div>
          <div className="mb-5 flex items-center justify-end">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-xl border border-ink-100 bg-white px-3 py-2.5 text-sm text-ink-900 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            >
              <option value="rating">{t.category.sortRating}</option>
              <option value="priceAsc">{t.category.sortPriceAsc}</option>
              <option value="priceDesc">{t.category.sortPriceDesc}</option>
              <option value="orders">{t.category.sortOrders}</option>
            </select>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((specialist) => (
                <SpecialistCard key={specialist.id} specialist={specialist} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-ink-200 bg-white py-16 text-center text-ink-400">
              {t.category.noResults}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
