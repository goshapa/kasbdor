"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import { useLang } from "@/lib/i18n";
import type { Category } from "@/lib/data";
import { formatNumber } from "@/lib/format";

export function CategoryCard({ category }: { category: Category }) {
  const { lang, t } = useLang();
  const Icon = category.icon;

  return (
    <Link
      href={`/category/${category.slug}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-ink-100 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-ink-900/5"
    >
      <div className="flex items-start justify-between">
        <span
          className={clsx(
            "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm",
            category.color
          )}
        >
          <Icon size={22} />
        </span>
        <ArrowUpRight
          size={18}
          className="text-ink-200 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-500"
        />
      </div>

      <div className="mt-5">
        <h3 className="font-display text-base font-bold text-ink-900">
          {category.title[lang]}
        </h3>
        <p className="mt-1 text-sm text-ink-400">{category.description[lang]}</p>
      </div>

      <div className="mt-4 border-t border-ink-50 pt-3 text-xs font-medium text-ink-400">
        {formatNumber(category.specialistsCount)} {t.categoriesSection.specialists}
      </div>
    </Link>
  );
}
