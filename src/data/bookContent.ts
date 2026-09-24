export type PhotoRef = {
  src: string;
  alt: string;
  caption?: string;
};

export type MediaItem = {
  id: string;
  kind: "photo" | "video";
  src: string;
  alt: string;
};

export type BookMeta = {
  herNickName: string;
  hisNickName: string;
  herAge: number;
  yearsTogether: number;
  startDateLabel: string;
  meetingPlace: string;
  meetingCity: string;
};

export type ChangeItem = {
  icon: string;
  text: string;
};

export type Quality = {
  id: number;
  label: string;
};

export type TimelineItem = {
  year: string;
  photo: PhotoRef;
  caption: string;
};

export type CoverPageContent = {
  type: "cover";
  title: string;
  subtitle: string;
  footer: string;
};

export type LetterPageContent = {
  type: "letter";
  body: string;
  signature: string;
};

export type CarouselPageContent = {
  type: "carousel";
  title: string;
  photos: PhotoRef[];
  caption?: string;
  style?: "default" | "polaroid";
};

export type EarlyPhotosPageContent = {
  type: "earlyPhotos";
  title: string;
  photos: PhotoRef[];
  caption: string;
};

export type IllustrationPageContent = {
  type: "illustration";
  title: string;
  dateLine: string;
  subtitle: string;
};

export type StoryPageContent = {
  type: "story";
  title: string;
  body: string;
  photo: PhotoRef;
};

export type MapPageContent = {
  type: "map";
  title: string;
  placeLabel: string;
  query: string;
};

export type TimelinePageContent = {
  type: "timeline";
  title: string;
  items: TimelineItem[];
};

export type ChangesPageContent = {
  type: "changes";
  title: string;
  items: ChangeItem[];
};

export type RecentPhotosPageContent = {
  type: "recentPhotos";
  title: string;
  items: MediaItem[];
};

export type QualitiesPageContent = {
  type: "qualities";
  title: string;
  buttonLabel: string;
  qualities: Quality[];
};

export type FuturePageContent = {
  type: "future";
  title: string;
  text: string;
};

export type GiftWrapContent = {
  title: string;
  hint: string;
};

export type AudioPageContent = {
  type: "audio";
  title: string;
  message: string;
  credits: string;
  audioSrc: string;
};

export type BookPageContent =
  | CoverPageContent
  | LetterPageContent
  | CarouselPageContent
  | EarlyPhotosPageContent
  | IllustrationPageContent
  | StoryPageContent
  | MapPageContent
  | TimelinePageContent
  | ChangesPageContent
  | RecentPhotosPageContent
  | QualitiesPageContent
  | FuturePageContent
  | AudioPageContent;

export const bookMeta: BookMeta = {
  herNickName: "Mi Amor",
  hisNickName: "Tu Novio",
  herAge: 29,
  yearsTogether: 9,
  startDateLabel: "28 de noviembre de 2017",
  meetingPlace: "Universidad El Bosque",
  meetingCity: "Bogotá",
};

export const bookContent = {
  meta: bookMeta,

  cover: {
    type: "cover",
    title: "Felices 29",
    subtitle: bookMeta.herNickName,
    footer: "9 años juntos, infinito por delante",
  } satisfies CoverPageContent,

  letter: {
    type: "letter",
    body: `Buenos días, mi amor ❤️ Hoy quiero mandarte un saludo desde la distancia y recordarte cuánto te quiero. Ya son 9 años compartiendo momentos, historias y tantos recuerdos, y aunque ahora no pueda estar cerquita de ti, siempre estás presente en mi corazón. Te extraño mucho, extraño tus abrazos y esa sonrisa que tanto me encanta. Espero que tengas un hermoso día, mi niña. Te mando un beso enorme y un abrazo de esos que pronto espero poder darte en persona. ❤️🥰`,
    signature: `Con todo mi amor, ${bookMeta.hisNickName}`,
  } satisfies LetterPageContent,

  earlyPhotos: {
    type: "earlyPhotos",
    title: "Antes de conocerte...",
    photos: [
      {
        src: "/images/pau-1.jpeg",
        alt: "Foto de ella antes de conocernos",
      },
      {
        src: "/images/pau-2.jpeg",
        alt: "Otra foto de ella antes de conocernos",
      },
    ],
    caption: "Ella, siempre radiante",
  } satisfies EarlyPhotosPageContent,

  momentZero: {
    type: "illustration",
    title: "El día que todo empezó",
    dateLine: "28 de noviembre de 2017 — Universidad El Bosque, Bogotá",
    subtitle: "Ella tenía 20 años, yo la miraba y no lo sabía todavía.",
  } satisfies IllustrationPageContent,

  story: {
    type: "story",
    title: "Cómo nos conocimos",
    body: "Nos conocimos en la universidad, entre clases y pasillos. No recuerdo el momento exacto, pero sí recuerdo que desde entonces algo cambió. Poco a poco te fuiste volviendo mi persona favorita.",
    photo: {
      src: "/images/novios2016.jpeg",
      alt: "Recuerdo de cuando nos conocimos",
    },
  } satisfies StoryPageContent,

  map: {
    type: "map",
    title: "Aquí fue",
    placeLabel: "Universidad El Bosque — Bogotá",
    query: "Universidad El Bosque, Bogotá",
  } satisfies MapPageContent,

  timeline: {
    type: "timeline",
    title: "Nuestra historia en imágenes",
    items: [
      {
        year: "2016",
        photo: {
          src: "/images/novios2016.jpeg",
          alt: "Nosotros en 2016",
        },
        caption: "Antes de ser novios",
      },
      {
        year: "2017",
        photo: {
          src: "/images/novios2017.jpeg",
          alt: "Nosotros en 2017",
        },
        caption: "El año en que todo cambió",
      },
      {
        year: "2017",
        photo: {
          src: "/images/novios2017-2.jpeg",
          alt: "Otro recuerdo de 2017",
        },
        caption: "Juntos desde entonces",
      },
      {
        year: "2018",
        photo: {
          src: "/images/novios2018.jpeg",
          alt: "Nosotros en 2018",
        },
        caption: "Nuestro primer año",
      },
      {
        year: "2020",
        photo: {
          src: "/images/novios2020.jpeg",
          alt: "Nosotros en 2020",
        },
        caption: "Sobrevivimos juntos",
      },
      {
        year: "2021",
        photo: {
          src: "/images/novios2021.jpeg",
          alt: "Nosotros en 2021",
        },
        caption: "Un año más contigo",
      },
      {
        year: "2023",
        photo: {
          src: "/images/novios2023-1.jpeg",
          alt: "Nosotros en 2023",
        },
        caption: "Cada vez más nosotros",
      },
      {
        year: "2023",
        photo: {
          src: "/images/novios2023-2.jpeg",
          alt: "Otro recuerdo de 2023",
        },
        caption: "Seguimos eligiéndonos",
      },
      {
        year: "2026",
        photo: {
          src: "/images/novios2026.jpeg",
          alt: "Nosotros hoy, 2026",
        },
        caption: "Hoy",
      },
    ],
  } satisfies TimelinePageContent,

  changes: {
    type: "changes",
    title: "9 años, resumidos en",
    items: [
      { icon: "🎓", text: "2 carreras" },
      { icon: "🏠", text: "1 hogar" },
      { icon: "✈️", text: "Muchos viajes" },
      { icon: "🏨", text: "Hoteles de lujo" },
      { icon: "✨", text: "Experiencias inolvidables" },
      { icon: "🎂", text: "9 cumpleaños juntos" },
      { icon: "📸", text: "Miles de recuerdos" },
      { icon: "🤣", text: "Anecdotas infinitas" },
      { icon: "❤️", text: "1 amor eterno" },
    ],
  } satisfies ChangesPageContent,

  recentPhotos: {
    type: "recentPhotos",
    title: "Hoy",
    items: [
      {
        id: "2026-3",
        kind: "photo",
        src: "/images/2026-3.jpeg",
        alt: "Nosotros en 2026",
      },
      {
        id: "2026-video-1",
        kind: "video",
        src: "/images/2026-video-1.mp4",
        alt: "Un momento de hoy",
      },
      {
        id: "2026-1",
        kind: "photo",
        src: "/images/2026-1.jpeg",
        alt: "Caminata en Monserrate",
      },
      {
        id: "2026-5",
        kind: "photo",
        src: "/images/2026-5.jpeg",
        alt: "Un recuerdo de este año",
      },
      {
        id: "2026-video-2",
        kind: "video",
        src: "/images/2026-video-2.mp4",
        alt: "Otro momento de hoy",
      },
      {
        id: "2026-2",
        kind: "photo",
        src: "/images/2026-2.jpeg",
        alt: "Juntos en 2026",
      },
      {
        id: "2026-4",
        kind: "photo",
        src: "/images/2026-4.jpeg",
        alt: "Hoy, juntos",
      },
    ],
  } satisfies RecentPhotosPageContent,

  qualities: {
    type: "qualities",
    title: "29 razones",
    buttonLabel: "¡Mira por qué te amo!",
    qualities: [
      { id: 1, label: "Amorosa 💙" },
      { id: 2, label: "Tierna 🥰" },
      { id: 3, label: "Cariñosa" },
      { id: 4, label: "Comprensiva" },
      { id: 5, label: "Paciente" },
      { id: 6, label: "Sincera" },
      { id: 7, label: "Fiel" },
      { id: 8, label: "Detallista" },
      { id: 9, label: "Divertida" },
      { id: 10, label: "Atenta" },
      { id: 11, label: "Respetuosa" },
      { id: 12, label: "Dulce" },
      { id: 13, label: "Especial" },
      { id: 14, label: "Admirable" },
      { id: 15, label: "Generosa" },
      { id: 16, label: "Noble" },
      { id: 17, label: "Bondadosa" },
      { id: 18, label: "Valiente" },
      { id: 19, label: "Inteligente" },
      { id: 20, label: "Alegre" },
      { id: 21, label: "Responsable" },
      { id: 22, label: "Leal" },
      { id: 23, label: "Apasionada" },
      { id: 24, label: "Encantadora" },
      { id: 25, label: "Incondicional" },
      { id: 26, label: "Maravillosa" },
      { id: 27, label: "Única" },
      { id: 28, label: "Hermosa ❤️" },
      { id: 29, label: "Inolvidable 🥹❤️" },
    ],
  } satisfies QualitiesPageContent,

  future: {
    type: "future",
    title: "Próximos 29 años...",
    text: "Contigo, siempre",
  } satisfies FuturePageContent,

  gift: {
    title: "Es un regalo",
    hint: "Toca para abrir este lindo regalo para la más linda cumpleañera",
  } satisfies GiftWrapContent,

  audio: {
    type: "audio",
    title: "Para tu amor",
    message:
      "Juanes escribió esta canción pensando en un amor. Yo se la dedico al mío.\n\nQue suene de fondo mientras hojeas este libro: es mi forma de estar cerquita, de abrazarte con una melodía cuando no puedo hacerlo con los brazos.\n\nEstos 9 años, tus 29 y todos los que vienen… esta canción es para tu amor. Para ti.",
    credits: `Hecho con amor por ${bookMeta.hisNickName}`,
    audioSrc: "/audio/cancion.mpeg",
  } satisfies AudioPageContent,
} as const;

export type BookContent = typeof bookContent;
