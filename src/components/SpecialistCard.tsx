"use client";

import Link from "next/link";
import { BadgeCheck, Briefcase } from "lucide-react";
import { useLang } from "@/lib/i18n";
import type { Specialist } from "@/lib/data";
import { formatNumber, formatPrice } from "@/lib/format";
import { Avatar } from "./ui/Avatar";
import { Rating } from "./ui/Rating";

export function SpecialistCard({ specialist }: { specialist: Specialist }) {
  const { lang, t } = useLang();

  return (
    <Link
      href={`/specialist/${specialist.id}`}
      className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-ink-900/5"
    >
      <div className="flex items-center gap-3">
        <Avatar
          initials={specialist.initials}
          color={specialist.avatarColor}
          online={specialist.online}
        />
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="truncate font-display text-sm font-bold text-ink-900">
              {specialist.name}
            </h3>
            {specialist.verified && (
              <BadgeCheck size={15} className="shrink-0 fill-sky-500 text-white" />
            )}
          </div>
          <p className="truncate text-xs text-ink-400">{specialist.title[lang]}</p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <Rating value={specialist.rating} />
        <span className="text-xs font-semibold text-ink-700">{specialist.rating}</span>
        <span className="text-xs text-ink-300">
          ({formatNumber(specialist.reviewsCount)})
        </span>
      </div>

      <div className="mt-3 flex items-center gap-1.5 text-xs text-ink-400">
        <Briefcase size={13} />
        {formatNumber(specialist.ordersCount)} {t.top.ordersLabel}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-ink-50 pt-3">
        <div>
          <p className="text-[11px] text-ink-400">{t.top.from}</p>
          <p className="text-sm font-bold text-ink-900">
            {formatPrice(specialist.priceFrom, lang)}
          </p>
        </div>
        <span className="rounded-full bg-ink-50 px-3 py-1.5 text-xs font-semibold text-ink-700 transition group-hover:bg-brand-500 group-hover:text-white">
          {t.top.viewProfile}
        </span>
      </div>
    </Link>
  );
}
