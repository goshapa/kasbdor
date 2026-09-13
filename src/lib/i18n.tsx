"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ru" | "uz";

const dictionaries = {
  ru: {
    nav: {
      categories: "Категории услуг",
      howItWorks: "Как это работает",
      becomePro: "Стать исполнителем",
      help: "Помощь",
      login: "Войти",
      signup: "Регистрация",
      postTask: "Оставить заявку",
    },
    city: "Ташкент",
    hero: {
      badge: "№1 сервис поиска мастеров в Узбекистане",
      title: "Найдите проверенного мастера за 5 минут",
      titleAccent: "проверенного мастера",
      subtitle:
        "Более 12 000 специалистов по ремонту, уборке, репетиторству, красоте и другим услугам рядом с вами",
      searchPlaceholder: "Какая услуга вам нужна? Например, «уборка квартиры»",
      searchButton: "Найти",
      popularLabel: "Часто ищут:",
      trust: [
        { title: "Проверенные исполнители", desc: "Паспорт и отзывы клиентов" },
        { title: "Гарантия качества", desc: "Возврат средств, если что-то не так" },
        { title: "Оплата после работы", desc: "Платите, когда всё устраивает" },
      ],
    },
    stats: [
      { value: "12 400+", label: "проверенных мастеров" },
      { value: "48 900+", label: "выполненных заказов" },
      { value: "4.9", label: "средний рейтинг" },
      { value: "126", label: "городов Узбекистана" },
    ],
    categoriesSection: {
      title: "Популярные категории услуг",
      subtitle: "Выберите нужную категорию из более чем 500 видов услуг",
      viewAll: "Смотреть все категории",
      specialists: "мастеров",
    },
    howItWorks: {
      title: "Как это работает",
      subtitle: "Четыре простых шага от заявки до результата",
      steps: [
        {
          title: "Оставьте заявку",
          desc: "Опишите, что нужно сделать, укажите сроки и бюджет — это бесплатно и займёт пару минут",
        },
        {
          title: "Получите отклики",
          desc: "Специалисты сами предложат цену и условия — обычно в течение 15 минут",
        },
        {
          title: "Выберите мастера",
          desc: "Сравните рейтинг, отзывы и портфолио, пообщайтесь в чате перед заказом",
        },
        {
          title: "Оплатите результат",
          desc: "Рассчитайтесь напрямую после того, как убедитесь в качестве работы",
        },
      ],
      cta: "Оставить заявку бесплатно",
    },
    top: {
      title: "Топ исполнители недели",
      subtitle: "Мастера с самым высоким рейтингом и количеством заказов",
      ordersLabel: "заказов",
      from: "от",
      sum: "сум",
      viewProfile: "Посмотреть профиль",
      verified: "Проверен",
      online: "Онлайн",
    },
    testimonials: {
      title: "Что говорят наши клиенты",
      subtitle: "Более 48 000 клиентов уже нашли своего мастера",
    },
    becomePro: {
      title: "Зарабатывайте на своих навыках",
      subtitle:
        "Присоединяйтесь к тысячам мастеров, которые находят новых клиентов каждый день на Kasbdor",
      bullets: [
        "Бесплатная регистрация за 3 минуты",
        "Заказы рядом с вами уже сегодня",
        "Прямое общение с клиентами без посредников",
        "Выводите заработанные деньги в любое время",
      ],
      cta: "Стать исполнителем",
      statLabel: "в среднем зарабатывают мастера в месяц",
      statValue: "3 200 000 сум",
    },
    appPromo: {
      title: "Kasbdor всегда под рукой",
      subtitle:
        "Скачайте приложение, чтобы получать отклики мгновенно и общаться с мастерами в чате",
      store1: "Скачать в",
      store1b: "App Store",
      store2: "Доступно в",
      store2b: "Google Play",
    },
    footer: {
      about:
        "Kasbdor — сервис, который соединяет клиентов с проверенными мастерами по всему Узбекистану.",
      categoriesTitle: "Категории",
      companyTitle: "Компания",
      company: ["О нас", "Блог", "Вакансии", "Контакты"],
      proTitle: "Исполнителям",
      pro: ["Стать исполнителем", "Как это работает", "Тарифы", "Блог мастера"],
      supportTitle: "Поддержка",
      support: ["Центр помощи", "Безопасность сделок", "Условия использования", "Политика конфиденциальности"],
      rights: "Все права защищены.",
    },
    common: {
      searchCta: "Найти мастера",
      readMore: "Подробнее",
      showAll: "Показать все",
      filters: "Фильтры",
      sortBy: "Сортировка",
      close: "Закрыть",
      send: "Отправить заявку",
      city: "Город",
      back: "Назад",
      reviews: "отзывов",
      experience: "лет опыта",
      priceFrom: "Цена от",
      description: "Описание",
      services: "Услуги",
      reviewsTitle: "Отзывы клиентов",
      similar: "Похожие мастера",
    },
    category: {
      heroTitle: "Найдите мастера в категории",
      resultsCount: "исполнителей найдено",
      filterCity: "Город",
      filterPrice: "Цена",
      filterRating: "Рейтинг",
      filterVerified: "Только проверенные",
      filterOnline: "Онлайн сейчас",
      sortRating: "По рейтингу",
      sortPriceAsc: "Сначала дешевле",
      sortPriceDesc: "Сначала дороже",
      sortOrders: "По количеству заказов",
      noResults: "По вашему запросу ничего не найдено",
    },
    request: {
      title: "Оставить заявку",
      subtitle: "Опишите задачу — мастера сами предложат цену и время",
      nameLabel: "Ваше имя",
      namePlaceholder: "Введите имя",
      phoneLabel: "Номер телефона",
      phonePlaceholder: "+998 90 123 45 67",
      categoryLabel: "Категория услуги",
      taskLabel: "Что нужно сделать",
      taskPlaceholder: "Опишите задачу подробнее...",
      cityLabel: "Город",
      submit: "Отправить заявку",
      success: "Заявка отправлена! Мастера свяжутся с вами в ближайшее время.",
      done: "Понятно",
    },
    specialistPage: {
      contact: "Написать мастеру",
      call: "Показать телефон",
      about: "О себе",
      portfolio: "Портфолио работ",
      skills: "Навыки и услуги",
    },
    proPage: {
      badge: "Для мастеров и специалистов",
      title: "Превратите свои навыки в стабильный доход",
      subtitle:
        "Kasbdor помогает мастерам находить новых клиентов каждый день — без комиссии за отклики и с прямыми платежами",
      cta: "Зарегистрироваться как исполнитель",
      stats: [
        { value: "3 200 000 сум", label: "средний доход мастера в месяц" },
        { value: "15 мин", label: "среднее время до первого отклика" },
        { value: "0%", label: "комиссия за отклики на заказы" },
      ],
      benefitsTitle: "Почему мастера выбирают Kasbdor",
      benefits: [
        {
          title: "Заказы рядом с вами",
          desc: "Видите только те заявки, которые подходят по категории и городу",
        },
        {
          title: "Честный рейтинг",
          desc: "Отзывы клиентов формируют вашу репутацию и приводят новых заказчиков",
        },
        {
          title: "Прямые платежи",
          desc: "Никаких скрытых комиссий — рассчитываетесь с клиентом напрямую",
        },
        {
          title: "Удобное приложение",
          desc: "Отвечайте на заявки и общайтесь с клиентами прямо с телефона",
        },
      ],
      stepsTitle: "Как начать работать",
      steps: [
        { title: "Заполните анкету", desc: "Расскажите о себе, опыте и услугах — это займёт 3 минуты" },
        { title: "Пройдите проверку", desc: "Подтвердите документы, чтобы получить бейдж «Проверен»" },
        { title: "Получайте заявки", desc: "Откликайтесь на подходящие заказы в вашем городе" },
        { title: "Выполняйте и зарабатывайте", desc: "Стройте репутацию отзывами и увеличивайте доход" },
      ],
      formTitle: "Оставьте заявку на регистрацию",
      formSubtitle: "Мы свяжемся с вами в течение дня и поможем заполнить профиль",
      nameLabel: "Имя и фамилия",
      phoneLabel: "Номер телефона",
      categoryLabel: "Основная категория услуг",
      cityLabel: "Город",
      experienceLabel: "Опыт работы",
      experienceOptions: ["Менее 1 года", "1–3 года", "3–5 лет", "Более 5 лет"],
      submit: "Отправить заявку",
      success: "Спасибо! Заявка отправлена — мы свяжемся с вами в ближайшее время.",
    },
  },
  uz: {
    nav: {
      categories: "Xizmat turkumlari",
      howItWorks: "Bu qanday ishlaydi",
      becomePro: "Ijrochi bo'lish",
      help: "Yordam",
      login: "Kirish",
      signup: "Ro'yxatdan o'tish",
      postTask: "Buyurtma qoldirish",
    },
    city: "Toshkent",
    hero: {
      badge: "O'zbekistondagi №1 usta qidirish xizmati",
      title: "5 daqiqada ishonchli ustani toping",
      titleAccent: "ishonchli ustani",
      subtitle:
        "Ta'mirlash, tozalash, repetitorlik, go'zallik va boshqa xizmatlar bo'yicha 12 000 dan ortiq mutaxassis",
      searchPlaceholder: "Qanday xizmat kerak? Masalan, «uy tozalash»",
      searchButton: "Qidirish",
      popularLabel: "Ko'p qidirilmoqda:",
      trust: [
        { title: "Tekshirilgan ustalar", desc: "Pasport va mijozlar sharhlari" },
        { title: "Sifat kafolati", desc: "Agar biror narsa noto'g'ri bo'lsa — pul qaytariladi" },
        { title: "Ish tugagach to'lov", desc: "Sizga yoqqandan keyingina to'laysiz" },
      ],
    },
    stats: [
      { value: "12 400+", label: "tekshirilgan usta" },
      { value: "48 900+", label: "bajarilgan buyurtma" },
      { value: "4.9", label: "o'rtacha reyting" },
      { value: "126", label: "O'zbekiston shahri" },
    ],
    categoriesSection: {
      title: "Ommabop xizmat turkumlari",
      subtitle: "500 dan ortiq xizmat turidan keragini tanlang",
      viewAll: "Barcha turkumlarni ko'rish",
      specialists: "usta",
    },
    howItWorks: {
      title: "Bu qanday ishlaydi",
      subtitle: "Buyurtmadan natijagacha to'rtta oddiy qadam",
      steps: [
        {
          title: "Buyurtma qoldiring",
          desc: "Nima qilish kerakligini, muddat va byudjetni yozing — bu bepul va bir necha daqiqa vaqt oladi",
        },
        {
          title: "Takliflarni oling",
          desc: "Ustalar o'zlari narx va shartlarni taklif qilishadi — odatda 15 daqiqa ichida",
        },
        {
          title: "Ustani tanlang",
          desc: "Reyting, sharhlar va portfolioni solishtiring, buyurtmadan oldin chatda gaplashing",
        },
        {
          title: "Natija uchun to'lang",
          desc: "Ish sifatiga ishonch hosil qilgach, to'g'ridan-to'g'ri hisob-kitob qiling",
        },
      ],
      cta: "Bepul buyurtma qoldirish",
    },
    top: {
      title: "Haftaning top ustalari",
      subtitle: "Eng yuqori reyting va buyurtmalar soniga ega ustalar",
      ordersLabel: "buyurtma",
      from: "dan",
      sum: "so'm",
      viewProfile: "Profilni ko'rish",
      verified: "Tasdiqlangan",
      online: "Onlayn",
    },
    testimonials: {
      title: "Mijozlarimiz nima deyishadi",
      subtitle: "48 000 dan ortiq mijoz allaqachon o'z ustasini topgan",
    },
    becomePro: {
      title: "Ko'nikmalaringiz bilan pul toping",
      subtitle:
        "Kasbdor'da har kuni yangi mijozlar topayotgan minglab ustalarga qo'shiling",
      bullets: [
        "3 daqiqada bepul ro'yxatdan o'tish",
        "Bugundanoq yaqiningizdagi buyurtmalar",
        "Vositachilarsiz mijozlar bilan bevosita muloqot",
        "Ishlab topgan pulingizni istalgan vaqtda yeching",
      ],
      cta: "Ijrochi bo'lish",
      statLabel: "ustalarning o'rtacha oylik daromadi",
      statValue: "3 200 000 so'm",
    },
    appPromo: {
      title: "Kasbdor doim yoningizda",
      subtitle:
        "Takliflarni darhol olish va ustalar bilan chatda muloqot qilish uchun ilovani yuklab oling",
      store1: "Yuklab oling",
      store1b: "App Store",
      store2: "Mavjud",
      store2b: "Google Play",
    },
    footer: {
      about:
        "Kasbdor — O'zbekiston bo'ylab mijozlarni tekshirilgan ustalar bilan bog'laydigan xizmat.",
      categoriesTitle: "Turkumlar",
      companyTitle: "Kompaniya",
      company: ["Biz haqimizda", "Blog", "Vakansiyalar", "Kontaktlar"],
      proTitle: "Ijrochilarga",
      pro: ["Ijrochi bo'lish", "Bu qanday ishlaydi", "Tariflar", "Usta blogi"],
      supportTitle: "Yordam",
      support: ["Yordam markazi", "Bitimlar xavfsizligi", "Foydalanish shartlari", "Maxfiylik siyosati"],
      rights: "Barcha huquqlar himoyalangan.",
    },
    common: {
      searchCta: "Usta topish",
      readMore: "Batafsil",
      showAll: "Barchasini ko'rsatish",
      filters: "Filtrlar",
      sortBy: "Saralash",
      close: "Yopish",
      send: "Buyurtma yuborish",
      city: "Shahar",
      back: "Orqaga",
      reviews: "sharh",
      experience: "yillik tajriba",
      priceFrom: "Narxi",
      description: "Tavsif",
      services: "Xizmatlar",
      reviewsTitle: "Mijozlar sharhlari",
      similar: "O'xshash ustalar",
    },
    category: {
      heroTitle: "Turkumdagi ustani toping",
      resultsCount: "ta ijrochi topildi",
      filterCity: "Shahar",
      filterPrice: "Narx",
      filterRating: "Reyting",
      filterVerified: "Faqat tasdiqlanganlar",
      filterOnline: "Hozir onlayn",
      sortRating: "Reyting bo'yicha",
      sortPriceAsc: "Avval arzoni",
      sortPriceDesc: "Avval qimmati",
      sortOrders: "Buyurtmalar soni bo'yicha",
      noResults: "So'rovingiz bo'yicha hech narsa topilmadi",
    },
    request: {
      title: "Buyurtma qoldirish",
      subtitle: "Vazifani tavsiflang — ustalar o'zlari narx va vaqtni taklif qilishadi",
      nameLabel: "Ismingiz",
      namePlaceholder: "Ismingizni kiriting",
      phoneLabel: "Telefon raqami",
      phonePlaceholder: "+998 90 123 45 67",
      categoryLabel: "Xizmat turkumi",
      taskLabel: "Nima qilish kerak",
      taskPlaceholder: "Vazifani batafsil tavsiflang...",
      cityLabel: "Shahar",
      submit: "Buyurtmani yuborish",
      success: "Buyurtma yuborildi! Ustalar tez orada siz bilan bog'lanishadi.",
      done: "Tushunarli",
    },
    specialistPage: {
      contact: "Ustaga yozish",
      call: "Telefonni ko'rsatish",
      about: "O'zi haqida",
      portfolio: "Ishlar portfolio",
      skills: "Ko'nikma va xizmatlar",
    },
    proPage: {
      badge: "Ustalar va mutaxassislar uchun",
      title: "Ko'nikmalaringizni barqaror daromadga aylantiring",
      subtitle:
        "Kasbdor ustalarga har kuni yangi mijozlar topishga yordam beradi — takliflar uchun komissiyasiz va to'g'ridan-to'g'ri to'lovlar bilan",
      cta: "Ijrochi sifatida ro'yxatdan o'ting",
      stats: [
        { value: "3 200 000 so'm", label: "ustaning o'rtacha oylik daromadi" },
        { value: "15 daqiqa", label: "birinchi taklifgacha o'rtacha vaqt" },
        { value: "0%", label: "buyurtmalarga taklif uchun komissiya" },
      ],
      benefitsTitle: "Nega ustalar Kasbdor'ni tanlaydi",
      benefits: [
        {
          title: "Yaqiningizdagi buyurtmalar",
          desc: "Faqat turkum va shahringizga mos keladigan arizalarni ko'rasiz",
        },
        {
          title: "Halol reyting",
          desc: "Mijozlar sharhlari obro'ingizni shakllantiradi va yangi buyurtmalar keltiradi",
        },
        {
          title: "To'g'ridan-to'g'ri to'lovlar",
          desc: "Hech qanday yashirin komissiya yo'q — mijoz bilan bevosita hisob-kitob qilasiz",
        },
        {
          title: "Qulay ilova",
          desc: "Arizalarga javob bering va mijozlar bilan telefoningizdan muloqot qiling",
        },
      ],
      stepsTitle: "Qanday boshlash kerak",
      steps: [
        { title: "Anketani to'ldiring", desc: "O'zingiz, tajribangiz va xizmatlaringiz haqida yozing — bu 3 daqiqa vaqt oladi" },
        { title: "Tekshiruvdan o'ting", desc: "«Tasdiqlangan» belgisini olish uchun hujjatlaringizni tasdiqlang" },
        { title: "Buyurtmalar oling", desc: "Shahringizdagi mos buyurtmalarga javob bering" },
        { title: "Bajaring va daromad oling", desc: "Sharhlar orqali obro' oshiring va daromadingizni ko'paytiring" },
      ],
      formTitle: "Ro'yxatdan o'tish uchun ariza qoldiring",
      formSubtitle: "Biz kun davomida siz bilan bog'lanamiz va profilni to'ldirishga yordam beramiz",
      nameLabel: "Ism va familiya",
      phoneLabel: "Telefon raqami",
      categoryLabel: "Asosiy xizmat turkumi",
      cityLabel: "Shahar",
      experienceLabel: "Ish tajribasi",
      experienceOptions: ["1 yildan kam", "1–3 yil", "3–5 yil", "5 yildan ko'p"],
      submit: "Arizani yuborish",
      success: "Rahmat! Ariza yuborildi — tez orada siz bilan bog'lanamiz.",
    },
  },
};

export type Dictionary = typeof dictionaries.ru;

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    const stored = window.localStorage.getItem("kasbdor-lang");
    if (stored === "ru" || stored === "uz") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration of persisted preference after mount
      setLangState(stored);
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("kasbdor-lang", next);
  };

  const value = useMemo(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
