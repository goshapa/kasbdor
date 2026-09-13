"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type FormEvent,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { categories, cities } from "@/lib/data";

type RequestModalContextValue = {
  open: (categorySlug?: string) => void;
};

const RequestModalContext = createContext<RequestModalContextValue | null>(null);

export function useRequestModal() {
  const ctx = useContext(RequestModalContext);
  if (!ctx) throw new Error("useRequestModal must be used within RequestModalProvider");
  return ctx;
}

export function RequestModalProvider({ children }: { children: ReactNode }) {
  const { lang, t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [presetCategory, setPresetCategory] = useState<string | undefined>();
  const [submitted, setSubmitted] = useState(false);

  const open = (categorySlug?: string) => {
    setPresetCategory(categorySlug);
    setSubmitted(false);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <RequestModalContext.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end justify-center bg-ink-900/50 backdrop-blur-sm sm:items-center sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl sm:p-8"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {!submitted ? (
                <>
                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-ink-900">
                        {t.request.title}
                      </h3>
                      <p className="mt-1 text-sm text-ink-500">{t.request.subtitle}</p>
                    </div>
                    <button
                      onClick={close}
                      className="rounded-full p-2 text-ink-400 transition hover:bg-ink-50 hover:text-ink-900"
                      aria-label={t.common.close}
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink-700">
                        {t.request.nameLabel}
                      </label>
                      <input
                        required
                        type="text"
                        placeholder={t.request.namePlaceholder}
                        className="w-full rounded-xl border border-ink-100 bg-ink-50/50 px-4 py-3 text-sm text-ink-900 outline-none transition placeholder:text-ink-300 focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink-700">
                        {t.request.phoneLabel}
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder={t.request.phonePlaceholder}
                        className="w-full rounded-xl border border-ink-100 bg-ink-50/50 px-4 py-3 text-sm text-ink-900 outline-none transition placeholder:text-ink-300 focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink-700">
                        {t.request.categoryLabel}
                      </label>
                      <select
                        defaultValue={presetCategory ?? ""}
                        className="w-full rounded-xl border border-ink-100 bg-ink-50/50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                      >
                        <option value="" disabled>
                          {t.request.categoryLabel}
                        </option>
                        {categories.map((c) => (
                          <option key={c.slug} value={c.slug}>
                            {c.title[lang]}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink-700">
                        {t.request.cityLabel}
                      </label>
                      <select className="w-full rounded-xl border border-ink-100 bg-ink-50/50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100">
                        {cities.map((c) => (
                          <option key={c.ru} value={c.ru}>
                            {c[lang]}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink-700">
                        {t.request.taskLabel}
                      </label>
                      <textarea
                        required
                        rows={3}
                        placeholder={t.request.taskPlaceholder}
                        className="w-full resize-none rounded-xl border border-ink-100 bg-ink-50/50 px-4 py-3 text-sm text-ink-900 outline-none transition placeholder:text-ink-300 focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-brand-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600 active:scale-[0.98]"
                    >
                      {t.request.submit}
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                    <CheckCircle2 size={36} className="text-emerald-500" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink-900">
                    {t.request.success}
                  </h3>
                  <button
                    onClick={close}
                    className="mt-6 w-full rounded-xl bg-ink-900 py-3.5 text-sm font-semibold text-white transition hover:bg-ink-800"
                  >
                    {t.request.done}
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </RequestModalContext.Provider>
  );
}
