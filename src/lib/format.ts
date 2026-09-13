import type { Lang } from "./i18n";

export function formatPrice(value: number, lang: Lang) {
  const formatted = new Intl.NumberFormat("ru-RU").format(value);
  const currency = lang === "ru" ? "сум" : "so'm";
  return `${formatted} ${currency}`;
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat("ru-RU").format(value);
}
