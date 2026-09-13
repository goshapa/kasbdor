import type { LucideIcon } from "lucide-react";
import {
  Hammer,
  Sparkles,
  GraduationCap,
  Scissors,
  PartyPopper,
  Laptop,
  Camera,
  Scale,
  Truck,
  Wrench,
  Car,
  Palette,
} from "lucide-react";

export type Localized = { ru: string; uz: string };

export type Category = {
  slug: string;
  icon: LucideIcon;
  title: Localized;
  description: Localized;
  specialistsCount: number;
  priceFrom: number;
  color: string;
};

export const categories: Category[] = [
  {
    slug: "remont-i-stroika",
    icon: Hammer,
    title: { ru: "Ремонт и строительство", uz: "Ta'mirlash va qurilish" },
    description: {
      ru: "Отделка, сантехника, электрика",
      uz: "Pardozlash, santexnika, elektrika",
    },
    specialistsCount: 2140,
    priceFrom: 50000,
    color: "from-orange-400 to-brand-600",
  },
  {
    slug: "uborka",
    icon: Sparkles,
    title: { ru: "Уборка", uz: "Tozalash" },
    description: {
      ru: "Квартиры, офисы, после ремонта",
      uz: "Kvartira, ofis, ta'mirdan keyin",
    },
    specialistsCount: 980,
    priceFrom: 80000,
    color: "from-sky-400 to-blue-600",
  },
  {
    slug: "repetitory",
    icon: GraduationCap,
    title: { ru: "Репетиторы", uz: "Repetitorlar" },
    description: {
      ru: "Языки, школьные предметы, ЕГЭ",
      uz: "Tillar, maktab fanlari, DTM",
    },
    specialistsCount: 1560,
    priceFrom: 40000,
    color: "from-emerald-400 to-teal-600",
  },
  {
    slug: "krasota-i-zdorove",
    icon: Scissors,
    title: { ru: "Красота и здоровье", uz: "Go'zallik va salomatlik" },
    description: {
      ru: "Стрижки, массаж, маникюр",
      uz: "Soch turmagi, massaj, manikyur",
    },
    specialistsCount: 1320,
    priceFrom: 60000,
    color: "from-pink-400 to-rose-600",
  },
  {
    slug: "meropriyatiya",
    icon: PartyPopper,
    title: { ru: "Мероприятия и праздники", uz: "Tadbirlar va bayramlar" },
    description: {
      ru: "Ведущие, фото, декор",
      uz: "Tomoshabop, foto, dekor",
    },
    specialistsCount: 640,
    priceFrom: 150000,
    color: "from-violet-400 to-purple-600",
  },
  {
    slug: "kompyuternaya-pomosch",
    icon: Laptop,
    title: { ru: "Компьютерная помощь", uz: "Kompyuter yordami" },
    description: {
      ru: "Настройка, ремонт, установка ПО",
      uz: "Sozlash, ta'mirlash, dastur o'rnatish",
    },
    specialistsCount: 510,
    priceFrom: 40000,
    color: "from-indigo-400 to-blue-700",
  },
  {
    slug: "foto-i-video",
    icon: Camera,
    title: { ru: "Фото и видео", uz: "Foto va video" },
    description: {
      ru: "Съёмка, монтаж, обработка",
      uz: "Suratga olish, montaj, qayta ishlash",
    },
    specialistsCount: 430,
    priceFrom: 200000,
    color: "from-amber-400 to-orange-600",
  },
  {
    slug: "yuridicheskie-uslugi",
    icon: Scale,
    title: { ru: "Юридические услуги", uz: "Yuridik xizmatlar" },
    description: {
      ru: "Консультации, документы, суды",
      uz: "Maslahat, hujjatlar, sud ishlari",
    },
    specialistsCount: 290,
    priceFrom: 100000,
    color: "from-slate-400 to-slate-700",
  },
  {
    slug: "kurery-i-pereezdy",
    icon: Truck,
    title: { ru: "Курьеры и переезды", uz: "Kuryer va ko'chirish" },
    description: {
      ru: "Доставка, грузчики, переезд",
      uz: "Yetkazib berish, yuk tashish, ko'chirish",
    },
    specialistsCount: 720,
    priceFrom: 60000,
    color: "from-cyan-400 to-sky-600",
  },
  {
    slug: "remont-tehniki",
    icon: Wrench,
    title: { ru: "Ремонт техники", uz: "Texnika ta'mirlash" },
    description: {
      ru: "Бытовая техника, электроника",
      uz: "Maishiy texnika, elektronika",
    },
    specialistsCount: 460,
    priceFrom: 50000,
    color: "from-red-400 to-red-700",
  },
  {
    slug: "avtoservis",
    icon: Car,
    title: { ru: "Автосервис", uz: "Avtoservis" },
    description: {
      ru: "Диагностика, ремонт, шиномонтаж",
      uz: "Diagnostika, ta'mirlash, shinamontaj",
    },
    specialistsCount: 380,
    priceFrom: 70000,
    color: "from-zinc-400 to-zinc-700",
  },
  {
    slug: "dizayn-i-reklama",
    icon: Palette,
    title: { ru: "Дизайн и реклама", uz: "Dizayn va reklama" },
    description: {
      ru: "Логотипы, сайты, полиграфия",
      uz: "Logotip, saytlar, poligrafiya",
    },
    specialistsCount: 350,
    priceFrom: 150000,
    color: "from-fuchsia-400 to-pink-600",
  },
];

export const cities: Localized[] = [
  { ru: "Ташкент", uz: "Toshkent" },
  { ru: "Самарканд", uz: "Samarqand" },
  { ru: "Бухара", uz: "Buxoro" },
  { ru: "Андижан", uz: "Andijon" },
  { ru: "Наманган", uz: "Namangan" },
  { ru: "Фергана", uz: "Farg'ona" },
];

export type Specialist = {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  categorySlug: string;
  title: Localized;
  bio: Localized;
  skills: Localized[];
  city: Localized;
  rating: number;
  reviewsCount: number;
  ordersCount: number;
  priceFrom: number;
  experienceYears: number;
  verified: boolean;
  online: boolean;
};

const avatarColors = [
  "bg-brand-500",
  "bg-ink-600",
  "bg-emerald-500",
  "bg-sky-500",
  "bg-violet-500",
  "bg-rose-500",
  "bg-amber-500",
  "bg-teal-500",
];

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const rawSpecialists: Omit<Specialist, "initials" | "avatarColor">[] = [
  {
    id: "1",
    name: "Aziz Karimov",
    categorySlug: "remont-i-stroika",
    title: { ru: "Сантехник, электрик", uz: "Santexnik, elektrik" },
    bio: {
      ru: "Более 10 лет занимаюсь ремонтом квартир под ключ. Специализируюсь на сантехнике и электрике, работаю аккуратно и в срок.",
      uz: "10 yildan ortiq vaqt kvartiralarni «kalit topshirish» tizimida ta'mirlayman. Santexnika va elektrika bo'yicha ixtisoslashganman, aniq va o'z vaqtida ishlayman.",
    },
    skills: [
      { ru: "Замена труб", uz: "Quvurlarni almashtirish" },
      { ru: "Установка розеток", uz: "Rozetka o'rnatish" },
      { ru: "Сборка мебели", uz: "Mebel yig'ish" },
    ],
    city: cities[0],
    rating: 4.9,
    reviewsCount: 312,
    ordersCount: 480,
    priceFrom: 80000,
    experienceYears: 10,
    verified: true,
    online: true,
  },
  {
    id: "2",
    name: "Dilnoza Yusupova",
    categorySlug: "uborka",
    title: { ru: "Клининг квартир и офисов", uz: "Kvartira va ofis tozalash" },
    bio: {
      ru: "Провожу генеральную и поддерживающую уборку. Использую профессиональную химию, работаю в команде из 2 человек.",
      uz: "Umumiy va kundalik tozalash xizmatlarini ko'rsataman. Professional kimyoviy vositalardan foydalanaman, 2 kishilik jamoada ishlayman.",
    },
    skills: [
      { ru: "Генеральная уборка", uz: "Umumiy tozalash" },
      { ru: "Мытьё окон", uz: "Deraza yuvish" },
      { ru: "Химчистка мебели", uz: "Mebelni kimyoviy tozalash" },
    ],
    city: cities[0],
    rating: 4.8,
    reviewsCount: 214,
    ordersCount: 390,
    priceFrom: 120000,
    experienceYears: 6,
    verified: true,
    online: true,
  },
  {
    id: "3",
    name: "Sardor Rashidov",
    categorySlug: "repetitory",
    title: { ru: "Репетитор по математике", uz: "Matematika repetitori" },
    bio: {
      ru: "Готовлю школьников к поступлению и олимпиадам. Объясняю сложные темы простым языком, есть авторские материалы.",
      uz: "O'quvchilarni universitetga kirish va olimpiadalarga tayyorlayman. Murakkab mavzularni sodda tilda tushuntiraman, o'z materiallarim bor.",
    },
    skills: [
      { ru: "Подготовка к экзаменам", uz: "Imtihonlarga tayyorlash" },
      { ru: "Алгебра и геометрия", uz: "Algebra va geometriya" },
      { ru: "Онлайн-занятия", uz: "Onlayn darslar" },
    ],
    city: cities[1],
    rating: 5.0,
    reviewsCount: 178,
    ordersCount: 260,
    priceFrom: 60000,
    experienceYears: 8,
    verified: true,
    online: false,
  },
  {
    id: "4",
    name: "Malika Tosheva",
    categorySlug: "krasota-i-zdorove",
    title: { ru: "Мастер маникюра и педикюра", uz: "Manikyur va pedikyur ustasi" },
    bio: {
      ru: "Работаю на дому и с выездом. Использую только стерильные инструменты и качественные материалы.",
      uz: "Uyda va tashrif buyurib ishlayman. Faqat steril asboblar va sifatli materiallardan foydalanaman.",
    },
    skills: [
      { ru: "Маникюр", uz: "Manikyur" },
      { ru: "Наращивание ногтей", uz: "Tirnoq uzaytirish" },
      { ru: "Педикюр", uz: "Pedikyur" },
    ],
    city: cities[0],
    rating: 4.9,
    reviewsCount: 405,
    ordersCount: 610,
    priceFrom: 70000,
    experienceYears: 7,
    verified: true,
    online: true,
  },
  {
    id: "5",
    name: "Bekzod Aliyev",
    categorySlug: "kompyuternaya-pomosch",
    title: { ru: "Настройка и ремонт компьютеров", uz: "Kompyuter sozlash va ta'mirlash" },
    bio: {
      ru: "Устраняю неполадки ПК и ноутбуков, настраиваю сети и Windows, удаляю вирусы, помогаю удалённо.",
      uz: "Kompyuter va noutbuklardagi nosozliklarni bartaraf etaman, tarmoq va Windows sozlayman, viruslarni o'chiraman, masofadan yordam beraman.",
    },
    skills: [
      { ru: "Установка Windows", uz: "Windows o'rnatish" },
      { ru: "Удаление вирусов", uz: "Viruslarni tozalash" },
      { ru: "Настройка сети", uz: "Tarmoq sozlash" },
    ],
    city: cities[0],
    rating: 4.7,
    reviewsCount: 156,
    ordersCount: 300,
    priceFrom: 50000,
    experienceYears: 5,
    verified: false,
    online: true,
  },
  {
    id: "6",
    name: "Nodira Xolmatova",
    categorySlug: "meropriyatiya",
    title: { ru: "Ведущая праздников", uz: "Bayram tadbirlari boshlovchisi" },
    bio: {
      ru: "Провожу свадьбы, юбилеи и корпоративы. Индивидуальный сценарий под ваше мероприятие.",
      uz: "To'y, yubiley va korporativ tadbirlarni olib boraman. Tadbiringiz uchun individual ssenariy tayyorlayman.",
    },
    skills: [
      { ru: "Свадьбы", uz: "To'ylar" },
      { ru: "Корпоративы", uz: "Korporativ tadbirlar" },
      { ru: "Детские праздники", uz: "Bolalar bayramlari" },
    ],
    city: cities[0],
    rating: 4.9,
    reviewsCount: 89,
    ordersCount: 140,
    priceFrom: 400000,
    experienceYears: 9,
    verified: true,
    online: false,
  },
  {
    id: "7",
    name: "Jasur Nematov",
    categorySlug: "avtoservis",
    title: { ru: "Автомеханик, диагностика", uz: "Avtomexanik, diagnostika" },
    bio: {
      ru: "Компьютерная диагностика, ремонт ходовой части и двигателя любой сложности с выездом на дом.",
      uz: "Kompyuter diagnostikasi, xodovoy qism va dvigatelni istalgan murakkablikda ta'mirlash, uyingizga tashrif bilan.",
    },
    skills: [
      { ru: "Диагностика двигателя", uz: "Dvigatel diagnostikasi" },
      { ru: "Замена масла", uz: "Moy almashtirish" },
      { ru: "Ремонт подвески", uz: "Osma ta'mirlash" },
    ],
    city: cities[0],
    rating: 4.8,
    reviewsCount: 231,
    ordersCount: 350,
    priceFrom: 90000,
    experienceYears: 12,
    verified: true,
    online: true,
  },
  {
    id: "8",
    name: "Feruza Saidova",
    categorySlug: "foto-i-video",
    title: { ru: "Фотограф, видеооператор", uz: "Fotograf, videooperator" },
    bio: {
      ru: "Снимаю свадьбы, лукбуки и коммерческие проекты. Быстрая обработка, современный стиль.",
      uz: "To'y, lukbuk va tijorat loyihalarini suratga olaman. Tez qayta ishlash, zamonaviy uslub.",
    },
    skills: [
      { ru: "Свадебная съёмка", uz: "To'y suratga olish" },
      { ru: "Видеомонтаж", uz: "Video montaj" },
      { ru: "Фотостудия", uz: "Fotostudiya" },
    ],
    city: cities[1],
    rating: 5.0,
    reviewsCount: 132,
    ordersCount: 190,
    priceFrom: 350000,
    experienceYears: 6,
    verified: true,
    online: true,
  },
  {
    id: "9",
    name: "Otabek Yo'ldoshev",
    categorySlug: "remont-tehniki",
    title: { ru: "Ремонт бытовой техники", uz: "Maishiy texnika ta'mirlash" },
    bio: {
      ru: "Ремонтирую стиральные машины, холодильники и кондиционеры на дому. Гарантия на работы 6 месяцев.",
      uz: "Kir yuvish mashinasi, muzlatgich va konditsionerlarni uyda ta'mirlayman. Ishlarga 6 oy kafolat.",
    },
    skills: [
      { ru: "Стиральные машины", uz: "Kir yuvish mashinalari" },
      { ru: "Холодильники", uz: "Muzlatgichlar" },
      { ru: "Кондиционеры", uz: "Konditsionerlar" },
    ],
    city: cities[0],
    rating: 4.8,
    reviewsCount: 267,
    ordersCount: 420,
    priceFrom: 60000,
    experienceYears: 11,
    verified: true,
    online: false,
  },
  {
    id: "10",
    name: "Gulnora Ergasheva",
    categorySlug: "repetitory",
    title: { ru: "Репетитор английского языка", uz: "Ingliz tili repetitori" },
    bio: {
      ru: "Сертифицированный преподаватель IELTS. Готовлю к экзаменам и разговорному английскому для всех возрастов.",
      uz: "IELTS bo'yicha sertifikatlangan o'qituvchi. Imtihonlar va barcha yosh uchun so'zlashuv ingliz tiliga tayyorlayman.",
    },
    skills: [
      { ru: "Подготовка к IELTS", uz: "IELTS ga tayyorlash" },
      { ru: "Разговорный английский", uz: "So'zlashuv ingliz tili" },
      { ru: "Бизнес-английский", uz: "Biznes ingliz tili" },
    ],
    city: cities[0],
    rating: 4.9,
    reviewsCount: 198,
    ordersCount: 270,
    priceFrom: 90000,
    experienceYears: 7,
    verified: true,
    online: true,
  },
  {
    id: "11",
    name: "Sherzod Mirzayev",
    categorySlug: "kurery-i-pereezdy",
    title: { ru: "Грузчик, услуги переезда", uz: "Yuk tashuvchi, ko'chirish xizmati" },
    bio: {
      ru: "Организую квартирные и офисные переезды с грузчиками и транспортом любого размера.",
      uz: "Har qanday hajmdagi transport va yuk tashuvchilar bilan kvartira va ofis ko'chirishini tashkil qilaman.",
    },
    skills: [
      { ru: "Квартирный переезд", uz: "Kvartira ko'chirish" },
      { ru: "Погрузка мебели", uz: "Mebel yuklash" },
      { ru: "Междугородние перевозки", uz: "Shaharlararo tashish" },
    ],
    city: cities[0],
    rating: 4.7,
    reviewsCount: 143,
    ordersCount: 260,
    priceFrom: 100000,
    experienceYears: 5,
    verified: false,
    online: true,
  },
  {
    id: "12",
    name: "Zarina Abdullayeva",
    categorySlug: "dizayn-i-reklama",
    title: { ru: "Графический дизайнер", uz: "Grafik dizayner" },
    bio: {
      ru: "Разрабатываю логотипы, фирменный стиль и дизайн для соцсетей. Более 100 реализованных проектов.",
      uz: "Logotip, korporativ uslub va ijtimoiy tarmoqlar uchun dizayn ishlab chiqaman. 100 dan ortiq amalga oshirilgan loyiha.",
    },
    skills: [
      { ru: "Логотипы", uz: "Logotiplar" },
      { ru: "Фирменный стиль", uz: "Korporativ uslub" },
      { ru: "SMM-дизайн", uz: "SMM-dizayn" },
    ],
    city: cities[0],
    rating: 5.0,
    reviewsCount: 121,
    ordersCount: 180,
    priceFrom: 250000,
    experienceYears: 6,
    verified: true,
    online: true,
  },
  {
    id: "13",
    name: "Ozodbek Rahimov",
    categorySlug: "remont-i-stroika",
    title: { ru: "Маляр-штукатур", uz: "Bo'yoqchi-shtukaturchi" },
    bio: {
      ru: "Выполняю выравнивание стен, шпаклёвку и покраску любой сложности. Работаю чисто, без пыли благодаря профессиональному оборудованию.",
      uz: "Devorlarni tekislash, shpaklyovka va istalgan murakkablikdagi bo'yash ishlarini bajaraman. Professional asboblar tufayli chang chiqarmasdan ishlayman.",
    },
    skills: [
      { ru: "Штукатурка стен", uz: "Devor shtukaturkasi" },
      { ru: "Покраска", uz: "Bo'yash" },
      { ru: "Поклейка обоев", uz: "Oboy yopishtirish" },
    ],
    city: cities[0],
    rating: 4.8,
    reviewsCount: 176,
    ordersCount: 240,
    priceFrom: 45000,
    experienceYears: 9,
    verified: true,
    online: false,
  },
  {
    id: "14",
    name: "Sevara Nazarova",
    categorySlug: "uborka",
    title: { ru: "Химчистка ковров и мебели", uz: "Gilam va mebelni kimyoviy tozalash" },
    bio: {
      ru: "Выезжаю на дом с профессиональным оборудованием для глубокой чистки ковров, диванов и матрасов.",
      uz: "Gilam, divan va matraslarni chuqur tozalash uchun professional uskunalar bilan uyingizga tashrif buyuraman.",
    },
    skills: [
      { ru: "Чистка ковров", uz: "Gilam tozalash" },
      { ru: "Чистка мягкой мебели", uz: "Yumshoq mebelni tozalash" },
      { ru: "Удаление пятен", uz: "Dog'larni ketkazish" },
    ],
    city: cities[0],
    rating: 4.7,
    reviewsCount: 98,
    ordersCount: 160,
    priceFrom: 100000,
    experienceYears: 4,
    verified: true,
    online: true,
  },
  {
    id: "15",
    name: "Ulug'bek Sattorov",
    categorySlug: "krasota-i-zdorove",
    title: { ru: "Массажист", uz: "Massajchi" },
    bio: {
      ru: "Лечебный и расслабляющий массаж с выездом на дом. Медицинское образование, индивидуальный подход.",
      uz: "Uyga tashrif buyurib davolash va dam oldiruvchi massaj qilaman. Tibbiy ta'lim, individual yondashuv.",
    },
    skills: [
      { ru: "Лечебный массаж", uz: "Davolash massaji" },
      { ru: "Спортивный массаж", uz: "Sport massaji" },
      { ru: "Массаж спины", uz: "Orqa massaji" },
    ],
    city: cities[0],
    rating: 4.9,
    reviewsCount: 143,
    ordersCount: 220,
    priceFrom: 90000,
    experienceYears: 8,
    verified: true,
    online: false,
  },
  {
    id: "16",
    name: "Shahzod Yusupov",
    categorySlug: "avtoservis",
    title: { ru: "Шиномонтаж, развал-схождение", uz: "Shinamontaj, g'ildirak sozlash" },
    bio: {
      ru: "Выполняю шиномонтаж, балансировку и развал-схождение на современном оборудовании с гарантией.",
      uz: "Zamonaviy uskunalarda kafolat bilan shinamontaj, balanslash va g'ildirak burchaklarini sozlayman.",
    },
    skills: [
      { ru: "Шиномонтаж", uz: "Shinamontaj" },
      { ru: "Развал-схождение", uz: "G'ildirak sozlash" },
      { ru: "Балансировка колёс", uz: "G'ildirak balanslash" },
    ],
    city: cities[0],
    rating: 4.6,
    reviewsCount: 87,
    ordersCount: 150,
    priceFrom: 40000,
    experienceYears: 6,
    verified: false,
    online: true,
  },
  {
    id: "17",
    name: "Nigora Ahmedova",
    categorySlug: "meropriyatiya",
    title: { ru: "Организатор мероприятий", uz: "Tadbirlar tashkilotchisi" },
    bio: {
      ru: "Организую мероприятия под ключ: от идеи и декора до подрядчиков. Более 60 успешных проектов.",
      uz: "Tadbirlarni «kalit topshirish» tizimida tashkil qilaman: g'oyadan dekorgacha, pudratchilargacha. 60 dan ortiq muvaffaqiyatli loyiha.",
    },
    skills: [
      { ru: "Декор мероприятий", uz: "Tadbir dekori" },
      { ru: "Координация в день события", uz: "Tadbir kunini muvofiqlashtirish" },
      { ru: "Подбор подрядчиков", uz: "Pudratchilarni tanlash" },
    ],
    city: cities[0],
    rating: 4.9,
    reviewsCount: 64,
    ordersCount: 95,
    priceFrom: 500000,
    experienceYears: 5,
    verified: true,
    online: true,
  },
  {
    id: "18",
    name: "Davron Islomov",
    categorySlug: "remont-tehniki",
    title: { ru: "Ремонт телевизоров и электроники", uz: "Televizor va elektronika ta'miri" },
    bio: {
      ru: "Ремонтирую телевизоры, аудиотехнику и мелкую электронику. Диагностика бесплатно.",
      uz: "Televizor, audio texnika va mayda elektronikani ta'mirlayman. Diagnostika bepul.",
    },
    skills: [
      { ru: "Ремонт телевизоров", uz: "Televizor ta'miri" },
      { ru: "Замена матриц", uz: "Matritsa almashtirish" },
      { ru: "Настройка приставок", uz: "Pristavka sozlash" },
    ],
    city: cities[2],
    rating: 4.7,
    reviewsCount: 112,
    ordersCount: 180,
    priceFrom: 55000,
    experienceYears: 10,
    verified: true,
    online: false,
  },
  {
    id: "19",
    name: "Aziza Rahmonova",
    categorySlug: "dizayn-i-reklama",
    title: { ru: "Дизайнер интерьера", uz: "Interyer dizayneri" },
    bio: {
      ru: "Разрабатываю дизайн-проекты квартир и коммерческих помещений с 3D-визуализацией.",
      uz: "Kvartira va tijorat maydonlari uchun 3D vizualizatsiya bilan dizayn loyihalarini ishlab chiqaman.",
    },
    skills: [
      { ru: "3D-визуализация", uz: "3D vizualizatsiya" },
      { ru: "Дизайн-проект", uz: "Dizayn loyihasi" },
      { ru: "Подбор мебели", uz: "Mebel tanlash" },
    ],
    city: cities[0],
    rating: 4.8,
    reviewsCount: 76,
    ordersCount: 110,
    priceFrom: 300000,
    experienceYears: 6,
    verified: true,
    online: true,
  },
  {
    id: "20",
    name: "Bahrom Qodirov",
    categorySlug: "kurery-i-pereezdy",
    title: { ru: "Курьер, доставка документов", uz: "Kuryer, hujjat yetkazish" },
    bio: {
      ru: "Быстрая доставка документов и посылок по городу. Работаю с юрлицами и частными клиентами.",
      uz: "Shahar bo'ylab hujjat va pochta jo'natmalarini tez yetkazib beraman. Yuridik va jismoniy shaxslar bilan ishlayman.",
    },
    skills: [
      { ru: "Доставка документов", uz: "Hujjat yetkazish" },
      { ru: "Доставка посылок", uz: "Pochta yetkazish" },
      { ru: "Срочная доставка", uz: "Tezkor yetkazish" },
    ],
    city: cities[0],
    rating: 4.6,
    reviewsCount: 54,
    ordersCount: 130,
    priceFrom: 25000,
    experienceYears: 3,
    verified: false,
    online: true,
  },
];

export const specialists: Specialist[] = rawSpecialists.map((s, idx) => ({
  ...s,
  initials: initialsOf(s.name),
  avatarColor: avatarColors[idx % avatarColors.length],
}));

export function getSpecialistsByCategory(slug: string) {
  return specialists.filter((s) => s.categorySlug === slug);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getSpecialist(id: string) {
  return specialists.find((s) => s.id === id);
}

export type Testimonial = {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  role: Localized;
  text: Localized;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Anvar Rustamov",
    initials: "AR",
    avatarColor: "bg-brand-500",
    role: { ru: "Заказал ремонт ванной", uz: "Vanna xonasi ta'mirini buyurtma bergan" },
    text: {
      ru: "Нашёл мастера за 20 минут после публикации заявки. Сделали качественно и даже дешевле, чем я ожидал. Буду обращаться ещё.",
      uz: "E'lon joylashtirgandan 20 daqiqa o'tib usta topdim. Sifatli va men kutganimdan ham arzonroq qilib berishdi. Yana murojaat qilaman.",
    },
    rating: 5,
  },
  {
    id: "t2",
    name: "Kamola Nurmatova",
    initials: "KN",
    avatarColor: "bg-emerald-500",
    role: { ru: "Заказала уборку офиса", uz: "Ofis tozalashni buyurtma bergan" },
    text: {
      ru: "Очень удобно сравнивать отзывы и цены разных исполнителей в одном месте. Клининг приехал вовремя, всё блестит.",
      uz: "Turli ijrochilarning sharh va narxlarini bir joyda solishtirish juda qulay. Tozalash guruhi o'z vaqtida keldi, hammasi yaltiraydi.",
    },
    rating: 5,
  },
  {
    id: "t3",
    name: "Ravshan Tursunov",
    initials: "RT",
    avatarColor: "bg-sky-500",
    role: { ru: "Нашёл репетитора для сына", uz: "O'g'li uchun repetitor topgan" },
    text: {
      ru: "Ребёнок стал гораздо увереннее по математике всего за месяц занятий. Хороший подбор преподавателей с отзывами.",
      uz: "Bola bir oylik darslardan so'ng matematikadan ancha ishonchli bo'lib qoldi. Sharhli o'qituvchilarni tanlash ham qulay.",
    },
    rating: 5,
  },
  {
    id: "t4",
    name: "Madina Yusupova",
    initials: "MY",
    avatarColor: "bg-rose-500",
    role: { ru: "Заказала фотосъёмку", uz: "Fotosuratga olishni buyurtma bergan" },
    text: {
      ru: "Фотограф оказался очень творческим человеком, фото получились шикарные. Отдельное спасибо за оперативность.",
      uz: "Fotograf juda ijodkor inson ekan, suratlar ajoyib chiqdi. Tezkorlik uchun alohida rahmat.",
    },
    rating: 5,
  },
  {
    id: "t5",
    name: "Farrux Islomov",
    initials: "FI",
    avatarColor: "bg-violet-500",
    role: { ru: "Ремонт кондиционера", uz: "Konditsioner ta'miri" },
    text: {
      ru: "Мастер приехал в тот же день, быстро нашёл поломку и всё починил. Цена соответствовала заявленной.",
      uz: "Usta o'sha kuniyoq keldi, tezda nosozlikni topib, hammasini tuzatdi. Narx e'lon qilingandek bo'ldi.",
    },
    rating: 4,
  },
  {
    id: "t6",
    name: "Nilufar Karimova",
    initials: "NK",
    avatarColor: "bg-amber-500",
    role: { ru: "Организация дня рождения", uz: "Tug'ilgan kunni tashkil qilish" },
    text: {
      ru: "Ведущая праздника сделала мероприятие незабываемым, все гости были в восторге. Рекомендую всем!",
      uz: "Tadbir boshlovchisi bayramni unutilmas qilib berdi, barcha mehmonlar juda mamnun bo'lishdi. Hammaga tavsiya qilaman!",
    },
    rating: 5,
  },
];
