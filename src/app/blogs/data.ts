export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  excerpt: string;
  accent: string;
  heroImage: string;
  cardImage: string;
  category: string;
  paragraphs: string[]; // Used for narrative blogs (no section headings)
  sections?: BlogSection[]; // Used for case-study / story blogs with section headings
  nextSlug: string;
  nextTitle: string;
};

export const blogs: BlogPost[] = [
  // ── 01 · REAL WEDDING STORY ────────────────────────────────────────────
  {
    slug: "surbhi-and-raj-royal-wedding-jaipur",
    number: "01",
    title: "Surbhi & Raj\u2019s Royal Wedding",
    subtitle: "in Jaipur",
    excerpt:
      "From Toronto to Jaipur \u2014 a love story that crossed continents, navigated real-life challenges, and unfolded into a five-day palace celebration unlike any other.",
    accent: "#C9A96E",
    heroImage: "/DEEP9472.JPG",
    cardImage: "/DEEP9476.JPG",
    category: "Real Wedding",
    paragraphs: [], // content lives in sections below
    sections: [
      {
        // Intro — no heading, rendered as poetic lede
        paragraphs: [
          "Some weddings are planned.",
          "Some are designed.",
          "And then there are weddings like Surbhi & Raj\u2019s \u2014 where every moment is felt.",
        ],
      },
      {
        heading: "\u2764\ufe0f The Story: A Love That Crossed Continents",
        paragraphs: [
          "Surbhi and Raj\u2019s journey began in Toronto \u2014 a story built over time, shaped by ambition, distance, and unwavering commitment.",
          "Their wedding wasn\u2019t just about celebrating love. It was about honoring everything they had navigated to get there \u2014 careers, distance, and the realities of building a life far from home.",
          "So when it came to their big day, they wanted more than just a wedding.",
          "They wanted an experience.",
        ],
      },
      {
        heading: "\u2728 The Journey: Planning Through Challenges",
        paragraphs: [
          "Planning a destination wedding from Canada to India is never simple \u2014 but for Surbhi & Raj, it came with real challenges.",
          "Between demanding work schedules and the uncertainty of taking time off, even committing to travel wasn\u2019t easy. At one point, stepping away meant risking job security.",
          "On top of that, navigating vendors remotely brought its own concerns \u2014 promises that didn\u2019t match delivery, and the constant fear of not getting what was envisioned.",
          "And yet, despite it all, they made it happen.",
          "Over the course of two years, they traveled to India three times \u2014 refining, finalizing, and ensuring that every detail aligned with their vision.",
          "Because for them, this wasn\u2019t just a wedding.",
          "It was once in a lifetime.",
        ],
      },
      {
        heading: "\ud83c\udf3f Mehendi: A Story Told in Art",
        paragraphs: [
          "The celebrations began with a vibrant mehendi, designed not just as an event \u2014 but as a narrative.",
          "Through intricate, storytelling mehendi designs, Surbhi\u2019s journey with Raj was brought to life \u2014 a visual story etched into every detail.",
          "The setting reflected warmth and celebration, with thoughtfully curated elements that made guests feel part of something deeply personal.",
        ],
      },
      {
        heading: "\ud83c\udfa4 Sangeet: Where Emotion Took Center Stage",
        paragraphs: [
          "The sangeet was more than just performances \u2014 it was storytelling through music and movement.",
          "Choreographed dances brought together friends and family, creating an atmosphere filled with energy, laughter, and nostalgia.",
          "But the moment that defined the evening was something no one expected.",
          "A surprise song from the bride.",
          "Raw, emotional, and deeply personal \u2014 it left the entire room in tears.",
          "And as if that wasn\u2019t enough, the couple\u2019s journey was further immortalized through a custom-written song, created after understanding their story \u2014 a piece that belonged only to them.",
        ],
      },
      {
        heading: "\ud83d\udc51 The Wedding: A Palace Affair",
        paragraphs: [
          "Set within the grandeur of a royal palace in Jaipur, the wedding unfolded like a timeless dream.",
          "With over 200 guests in attendance and celebrations spanning five days, each event carried its own unique identity \u2014 expressed through distinct color palettes, themes, and experiences.",
          "The ceremony itself was elegant and powerful \u2014 where tradition met refined luxury.",
          "Surrounded by heritage architecture and loved ones who had traveled across continents, Surbhi & Raj took their vows in a setting that felt nothing short of magical.",
        ],
      },
      {
        heading: "\ud83c\udf89 The Experience: Five Days, Five Stories",
        paragraphs: [
          "Every day of the wedding was intentionally designed to feel different.",
          "From vibrant daytime celebrations to elegant evening affairs, each function carried its own mood, energy, and visual identity \u2014 ensuring guests were constantly immersed in a new experience.",
          "This wasn\u2019t just a sequence of events.",
          "It was a journey.",
        ],
      },
      {
        heading: "\ud83c\udf81 The Forever Fuzed Touch",
        paragraphs: [
          "What made this wedding truly unforgettable were the personalized experiences woven into every detail.",
          "Guests were welcomed with luxury curated hampers, designed to reflect the couple\u2019s personality and journey.",
          "From storytelling mehendi to custom-written music and fully choreographed performances, every element was crafted with intention.",
          "Behind the scenes, every challenge \u2014 from cross-continental logistics to vendor coordination \u2014 was handled seamlessly, allowing Surbhi & Raj to simply be present.",
          "Because at Forever Fuzed, we don\u2019t just plan weddings.",
          "We design experiences that feel personal, effortless, and unforgettable.",
        ],
      },
      {
        heading: "\u2728 Planning Your Wedding From Abroad?",
        paragraphs: [
          "If you\u2019re planning your wedding from Canada or anywhere across the globe, your journey doesn\u2019t have to be overwhelming.",
          "Let\u2019s create something that\u2019s not just beautiful \u2014 but truly yours.",
        ],
      },
    ],
    nextSlug: "designing-emotions-not-just-weddings",
    nextTitle: "From \u201cYes\u201d to \u201cI Do\u201d",
  },

  // ── 02 ─────────────────────────────────────────────────────────────────
  {
    slug: "designing-emotions-not-just-weddings",
    number: "02",
    title: "From \u201cYes\u201d to \u201cI Do\u201d",
    subtitle: "Designing Emotions, Not Just Weddings",
    excerpt:
      "A wedding is not a single day. It is a journey \u2014 one that begins with a \u201cyes\u201d and unfolds into a lifetime of memories.",
    accent: "#F2A7B0",
    heroImage: "/009A2350.jpg",
    cardImage: "/DEEP7060.jpg",
    category: "Wedding Philosophy",
    paragraphs: [
      "A wedding is not a single day. It is a journey \u2014 one that begins with a \u201cyes\u201d and unfolds into a lifetime of memories.",
      "At Forever Fuzed, we believe weddings are not about d\u00e9cor, venues, or timelines alone. They are about emotions. The nervous excitement of the proposal, the laughter of shared moments, the quiet glances, the overwhelming joy \u2014 these are the elements that truly define a celebration.",
      "Designing a wedding, therefore, is not about assembling vendors. It is about curating feelings.",
      "Every couple carries a unique story \u2014 how they met, what they overcame, what they dream of. Our role is to translate that invisible narrative into a tangible experience. From the way your guests are welcomed, to the music that plays during your first step together, every detail is intentionally crafted to evoke emotion.",
      "We design transitions, not just events. The build-up of anticipation, the crescendo of celebration, and the lingering warmth that stays long after the final goodbye.",
      "Because years later, you won\u2019t remember the exact shade of the flowers \u2014 but you will remember how it all felt.",
      "And that is what we design.",
    ],
    nextSlug: "why-your-wedding-should-tell-a-story",
    nextTitle: "Why Your Wedding Should Tell a Story",
  },

  // ── 03 ─────────────────────────────────────────────────────────────────
  {
    slug: "why-your-wedding-should-tell-a-story",
    number: "03",
    title: "Why Your Wedding Should Tell a Story",
    subtitle: "Not Just Be an Event",
    excerpt:
      "A truly unforgettable wedding is not defined by how grand it is, but by how personal it feels.",
    accent: "#9CA195",
    heroImage: "/DEEP7050.jpg",
    cardImage: "/DEEP7056.jpg",
    category: "Storytelling",
    paragraphs: [
      "In a world of Pinterest boards and Instagram trends, weddings are starting to look beautiful \u2014 but increasingly similar.",
      "But your love story is not generic. So why should your wedding be?",
      "A truly unforgettable wedding is not defined by how grand it is, but by how personal it feels. It should reflect your journey \u2014 your quirks, your culture, your shared moments, and your future together.",
      "At Forever Fuzed, we approach every wedding as a narrative waiting to be told.",
      "Your story could unfold through subtle details \u2014 a mehendi design that illustrates your journey, a choreographed performance that brings your memories to life, or a carefully curated playlist that marks every phase of your relationship.",
      "Even the smallest elements \u2014 invitations, d\u00e9cor accents, or guest experiences \u2014 can become storytelling tools when designed intentionally.",
      "When your wedding tells a story, your guests don\u2019t just attend \u2014 they feel involved. They connect. They remember.",
      "Because they\u2019re not just witnessing an event.",
      "They\u2019re experiencing your story.",
    ],
    nextSlug: "behind-the-scenes-luxury-wedding-planner",
    nextTitle: "Behind the Scenes of a Luxury Wedding Planner",
  },

  // ── 04 ─────────────────────────────────────────────────────────────────
  {
    slug: "behind-the-scenes-luxury-wedding-planner",
    number: "04",
    title: "Behind the Scenes of a",
    subtitle: "Luxury Wedding Planner",
    excerpt:
      "Luxury weddings may look effortless \u2014 but behind every seamless celebration lies months of meticulous planning, coordination, and precision.",
    accent: "#C9A96E",
    heroImage: "/DEEP7495.jpg",
    cardImage: "/DEEP7492.JPG",
    category: "Our Process",
    paragraphs: [
      "Luxury weddings may look effortless \u2014 but behind every seamless celebration lies months of meticulous planning, coordination, and precision.",
      "At Forever Fuzed, what you see is elegance. What you don\u2019t see is the orchestration behind it.",
      "From the very first consultation, our focus is to understand not just what you want, but how you want to feel. This becomes the foundation for every decision that follows.",
      "We collaborate with carefully selected vendors, manage complex logistics, and anticipate challenges before they arise. Timelines are crafted down to the minute, ensuring every transition flows naturally without disrupting the experience.",
      "On the wedding day, while you are immersed in celebration, we are managing hundreds of moving parts \u2014 from vendor coordination to guest experience to last-minute adjustments that ensure perfection.",
      "Luxury is not just about how something looks.",
      "It is about how effortlessly it unfolds.",
      "And that effortlessness is never accidental \u2014 it is designed.",
    ],
    nextSlug: "designing-personal-not-generic-weddings",
    nextTitle: "How We Design Weddings That Feel Personal",
  },

  // ── 05 ─────────────────────────────────────────────────────────────────
  {
    slug: "designing-personal-not-generic-weddings",
    number: "05",
    title: "How We Design Weddings That Feel",
    subtitle: "Personal, Not Generic",
    excerpt:
      "No two love stories are the same \u2014 and no two weddings should be either. True luxury lies in originality, not repetition.",
    accent: "#F2A7B0",
    heroImage: "/DEEP9490.JPG",
    cardImage: "/DEEP8535.JPG",
    category: "Our Approach",
    paragraphs: [
      "No two love stories are the same \u2014 and at Forever Fuzed, no two weddings should be either.",
      "In an era where inspiration is everywhere, it is easy to replicate trends. But true luxury lies in originality.",
      "Our design process begins with you.",
      "We take the time to understand your personalities, your journey, your preferences, and even the smallest details that define your relationship. This allows us to create a celebration that feels deeply personal rather than visually repetitive.",
      "Instead of asking, \u201cWhat\u2019s trending?\u201d, we ask, \u201cWhat represents you?\u201d",
      "From custom-designed experiences like storytelling mehendi and personalized performances, to curated d\u00e9cor concepts and guest interactions, every element is tailored to reflect your identity.",
      "We don\u2019t believe in templates.",
      "We believe in transformation.",
      "The result is a wedding that doesn\u2019t just look beautiful \u2014 it feels authentic.",
      "Because when a wedding is truly personal, it doesn\u2019t just impress.",
      "It resonates.",
    ],
    nextSlug: "surbhi-and-raj-royal-wedding-jaipur",
    nextTitle: "Surbhi & Raj\u2019s Royal Wedding in Jaipur",
  },
];
