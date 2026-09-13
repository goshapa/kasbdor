"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import {
  ChevronRight,
  BadgeCheck,
  MessageCircle,
  Phone,
  MapPin,
  Briefcase,
  CalendarClock,
  ImageIcon,
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { Avatar } from "@/components/ui/Avatar";
import { Rating } from "@/components/ui/Rating";
import { SpecialistCard } from "@/components/SpecialistCard";
import { useRequestModal } from "@/components/RequestModal";
import { getSpecialist, getCategory, getSpecialistsByCategory, testimonials } from "@/lib/data";
import { formatNumber, formatPrice } from "@/lib/format";

export default function SpecialistPage() {
  const params = useParams<{ id: string }>();
  const { lang, t } = useLang();
  const { open } = useRequestModal();

  const specialist = getSpecialist(params.id);
  if (!specialist) notFound();

  const category = getCategory(specialist.categorySlug);
  const similar = getSpecialistsByCategory(specialist.categorySlug)
    .filter((s) => s.id !== specialist.id)
    .slice(0, 3);
  const reviews = testimonials.slice(0, 3);

  return (
    <div className="bg-ink-50/40">
      <div className="border-b border-ink-100 bg-white">
        <Container className="py-8">
          <div className="mb-6 flex items-center gap-1.5 text-xs text-ink-400">
            <Link href="/" className="transition hover:text-brand-600">
              Kasbdor
            </Link>
            {category && (
              <>
                <ChevronRight size={13} />
                <Link
                  href={`/category/${category.slug}`}
                  className="transition hover:text-brand-600"
                >
                  {category.title[lang]}
                </Link>
              </>
            )}
            <ChevronRight size={13} />
            <span className="font-medium text-ink-600">{specialist.name}</span>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <Avatar
                initials={specialist.initials}
                color={specialist.avatarColor}
                size="xl"
                online={specialist.online}
              />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
                    {specialist.name}
                  </h1>
                  {specialist.verified && (
                    <span className="flex items-center gap-1 rounded-full bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-600">
                      <BadgeCheck size={14} />
                      {t.top.verified}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-ink-500">{specialist.title[lang]}</p>

                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-ink-500">
                  <span className="flex items-center gap-1.5">
                    <Rating value={specialist.rating} />
                    <b className="text-ink-800">{specialist.rating}</b>
                    <span>
                      ({formatNumber(specialist.reviewsCount)} {t.common.reviews})
                    </span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={15} /> {specialist.city[lang]}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase size={15} /> {formatNumber(specialist.ordersCount)}{" "}
                    {t.top.ordersLabel}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CalendarClock size={15} /> {specialist.experienceYears}{" "}
                    {t.common.experience}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex shrink-0 flex-col gap-2 sm:w-56">
              <button
                onClick={() => open(specialist.categorySlug)}
                className="flex items-center justify-center gap-2 rounded-xl bg-brand-500 py-3 text-sm font-semibold text-white shadow-md shadow-brand-500/25 transition hover:bg-brand-600 active:scale-[0.98]"
              >
                <MessageCircle size={16} />
                {t.specialistPage.contact}
              </button>
              <button className="flex items-center justify-center gap-2 rounded-xl border border-ink-200 py-3 text-sm font-semibold text-ink-700 transition hover:bg-ink-50">
                <Phone size={16} />
                {t.specialistPage.call}
              </button>
            </div>
          </div>
        </Container>
      </div>

      <Container className="grid grid-cols-1 gap-8 py-10 lg:grid-cols-[1fr_320px]">
        <div className="space-y-8">
          <section className="rounded-2xl border border-ink-100 bg-white p-6">
            <h2 className="font-display text-lg font-bold text-ink-900">
              {t.specialistPage.about}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">{specialist.bio[lang]}</p>
          </section>

          <section className="rounded-2xl border border-ink-100 bg-white p-6">
            <h2 className="font-display text-lg font-bold text-ink-900">
              {t.specialistPage.skills}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {specialist.skills.map((skill) => (
                <span
                  key={skill.ru}
                  className="rounded-full bg-brand-50 px-3.5 py-2 text-sm font-medium text-brand-700"
                >
                  {skill[lang]}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-ink-100 bg-white p-6">
            <h2 className="font-display text-lg font-bold text-ink-900">
              {t.specialistPage.portfolio}
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="flex aspect-square items-center justify-center rounded-xl border border-ink-100 bg-ink-50 text-ink-300"
                >
                  <ImageIcon size={26} />
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-ink-100 bg-white p-6">
            <h2 className="font-display text-lg font-bold text-ink-900">
              {t.common.reviewsTitle}
            </h2>
            <div className="mt-4 space-y-5">
              {reviews.map((review) => (
                <div key={review.id} className="flex gap-3 border-b border-ink-50 pb-5 last:border-0 last:pb-0">
                  <Avatar initials={review.initials} color={review.avatarColor} size="sm" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-ink-900">{review.name}</p>
                      <Rating value={review.rating} />
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                      {review.text[lang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="h-fit space-y-5 rounded-2xl border border-ink-100 bg-white p-6 lg:sticky lg:top-24">
          <div className="flex items-center justify-between">
            <span className="text-sm text-ink-400">{t.common.priceFrom}</span>
            <span className="font-display text-xl font-extrabold text-ink-900">
              {formatPrice(specialist.priceFrom, lang)}
            </span>
          </div>
          <button
            onClick={() => open(specialist.categorySlug)}
            className="w-full rounded-xl bg-brand-500 py-3 text-sm font-semibold text-white shadow-md shadow-brand-500/25 transition hover:bg-brand-600 active:scale-[0.98]"
          >
            {t.nav.postTask}
          </button>
          <div className="space-y-3 border-t border-ink-50 pt-4 text-sm text-ink-500">
            <div className="flex items-center justify-between">
              <span>{t.common.city}</span>
              <span className="font-medium text-ink-800">{specialist.city[lang]}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>{t.common.experience}</span>
              <span className="font-medium text-ink-800">{specialist.experienceYears}</span>
            </div>
          </div>
        </aside>
      </Container>

      {similar.length > 0 && (
        <Container className="pb-16">
          <h2 className="mb-5 font-display text-xl font-bold text-ink-900">
            {t.common.similar}
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {similar.map((s) => (
              <SpecialistCard key={s.id} specialist={s} />
            ))}
          </div>
        </Container>
      )}
    </div>
  );
}
