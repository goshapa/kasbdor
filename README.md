# Kasbdor

Сайт-агрегатор услуг: клиенты находят проверенных мастеров (ремонт, уборка, репетиторы, красота и здоровье и т.д.), мастера — новых клиентов. Интерфейс доступен на русском и узбекском языках.

## Стек

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) — анимации
- [lucide-react](https://lucide.dev) — иконки

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Сборка

```bash
npm run build
npm run start
```

## Структура

- `src/app` — страницы (главная, каталог категорий, категория, профиль мастера, «Стать исполнителем»)
- `src/components` — переиспользуемые компоненты интерфейса
- `src/lib/data.ts` — демонстрационные данные категорий и мастеров
- `src/lib/i18n.tsx` — переключение языка (RU/UZ)
