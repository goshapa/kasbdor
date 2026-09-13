"use client";

import Link from "next/link";
import { Sparkles, Send, Globe, MessageCircle, Phone, Mail } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Container } from "./ui/Container";
import { categories } from "@/lib/data";

export function Footer() {
  const { lang, t } = useLang();

  return (
    <footer className="border-t border-ink-100 bg-ink-900 text-ink-200">
      <Container className="py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-white">
                <Sparkles size={18} strokeWidth={2.5} />
              </span>
              <span className="font-display text-xl font-extrabold text-white">
                Kasbdor
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              {t.footer.about}
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[Send, MessageCircle, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-ink-300 transition hover:bg-brand-500 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              {t.footer.categoriesTitle}
            </h4>
            <ul className="space-y-2.5">
              {categories.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/category/${c.slug}`}
                    className="text-sm text-ink-400 transition hover:text-brand-400"
                  >
                    {c.title[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              {t.footer.companyTitle}
            </h4>
            <ul className="space-y-2.5">
              {t.footer.company.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-ink-400 transition hover:text-brand-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">{t.footer.proTitle}</h4>
            <ul className="space-y-2.5">
              {t.footer.pro.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-ink-400 transition hover:text-brand-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              {t.footer.supportTitle}
            </h4>
            <ul className="space-y-2.5">
              {t.footer.support.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-ink-400 transition hover:text-brand-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} Kasbdor. {t.footer.rights}
          </p>
          <div className="flex items-center gap-5 text-xs text-ink-400">
            <span className="flex items-center gap-1.5">
              <Phone size={14} /> +998 71 200 00 00
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={14} /> hello@kasbdor.uz
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
