"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MapPin, ChevronDown, Sparkles } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Container } from "./ui/Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useRequestModal } from "./RequestModal";

export function Header() {
  const { t } = useLang();
  const { open } = useRequestModal();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/categories", label: t.nav.categories },
    { href: "/#how-it-works", label: t.nav.howItWorks },
    { href: "/become-pro", label: t.nav.becomePro },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100/70 bg-white/85 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between py-3">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-white shadow-md shadow-brand-500/30">
              <Sparkles size={18} strokeWidth={2.5} />
            </span>
            <span className="font-display text-xl font-extrabold tracking-tight text-ink-900">
              Kasbdor
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-600 transition hover:text-brand-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-ink-600 transition hover:bg-ink-50">
            <MapPin size={16} className="text-brand-500" />
            {t.city}
            <ChevronDown size={14} />
          </button>

          <LanguageSwitcher />

          <div className="mx-1 h-6 w-px bg-ink-100" />

          <button className="rounded-full px-4 py-2 text-sm font-semibold text-ink-700 transition hover:bg-ink-50">
            {t.nav.login}
          </button>
          <button
            onClick={() => open()}
            className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-500/25 transition hover:bg-brand-600 active:scale-95"
          >
            {t.nav.postTask}
          </button>
        </div>

        <button
          className="rounded-full p-2 text-ink-700 md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Menu"
        >
          <Menu size={24} />
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[110] bg-ink-900/50 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-white p-6 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-lg font-extrabold text-ink-900">
                  Kasbdor
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full p-2 text-ink-400 hover:bg-ink-50"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="mb-6 flex items-center justify-between rounded-xl bg-ink-50 px-4 py-3">
                <span className="flex items-center gap-2 text-sm font-medium text-ink-700">
                  <MapPin size={16} className="text-brand-500" />
                  {t.city}
                </span>
                <LanguageSwitcher />
              </div>

              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-ink-700 transition hover:bg-ink-50"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3">
                <button className="w-full rounded-xl border border-ink-200 py-3 text-sm font-semibold text-ink-700">
                  {t.nav.login}
                </button>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    open();
                  }}
                  className="w-full rounded-xl bg-brand-500 py-3 text-sm font-semibold text-white shadow-md shadow-brand-500/25"
                >
                  {t.nav.postTask}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
