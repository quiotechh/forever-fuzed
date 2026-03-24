// No "use client" or "use server" — importable by both server and client components

export type ServiceData = {
  number: string;
  title: string;
  tagline: string;
  accent: string;
  heroImage: string;
  overviewImage: string;
  intro: string;
  paragraphs: string[];
  highlights: string[];
  galleryImages: { src: string; alt: string; category: string }[];
  ctaHeading: string;
  ctaItalic: string;
  ctaSubtext: string;
  ctaBgImage: string;
  nextSlug: string;
  nextTitle: string;
};

export const servicesData: Record<string, ServiceData> = {
  "wedding-styling": {
    number: "01",
    title: "Wedding Styling & Design",
    tagline: "Where Vision Meets Artistry",
    accent: "#9CA195",
    heroImage:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80",
    overviewImage:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80",
    intro:
      "We craft visually stunning wedding experiences that reflect your story, culture, and aesthetic.",
    paragraphs: [
      "From concept to execution, every element—color palettes, décor, floral artistry, tablescapes, and ambiance—is thoughtfully curated to create a seamless and luxurious setting.",
      "Our approach blends modern elegance with timeless traditions, ensuring every celebration feels personal, immersive, and unforgettable.",
    ],
    highlights: [
      "Custom color palette & mood board creation",
      "Floral artistry & statement installations",
      "Tablescape & centrepiece design",
      "Ceremony & reception ambiance styling",
      "Cultural tradition integration",
      "On-day styling supervision",
    ],
    galleryImages: [
      { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=700&q=80", alt: "Wedding decor", category: "Décor" },
      { src: "https://images.unsplash.com/photo-1519657337289-077653f724ed?w=700&q=80", alt: "Floral arrangement", category: "Florals" },
      { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=700&q=80", alt: "Reception styling", category: "Reception" },
      { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80", alt: "Ceremony setup", category: "Ceremony" },
      { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=700&q=80", alt: "Couple portrait", category: "Portraits" },
      { src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=700&q=80", alt: "Table setting", category: "Details" },
      { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=700&q=80", alt: "Ceremony aisle", category: "Ceremony" },
      { src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=700&q=80", alt: "Wedding details", category: "Details" },
    ],
    ctaHeading: "Your Wedding, Designed",
    ctaItalic: "to Perfection",
    ctaSubtext:
      "Let us craft a visual world that tells your unique story — every petal, every candle, every moment.",
    ctaBgImage:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80",
    nextSlug: "luxury-gifting",
    nextTitle: "Luxury Gifting & Wedding Hampers",
  },

  "luxury-gifting": {
    number: "02",
    title: "Luxury Gifting & Wedding Hampers",
    tagline: "Gifting That Leaves an Impression",
    accent: "#F2A7B0",
    heroImage:
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=1920&q=80",
    overviewImage:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=900&q=80",
    intro:
      "We design bespoke gifting experiences that leave a lasting impression.",
    paragraphs: [
      "From curated welcome hampers to elegant wedding favors, each piece is tailored to your theme and thoughtfully sourced. Expect premium packaging, personalized details, and globally inspired concepts.",
      "Every gift reflects sophistication and gratitude for your guests—crafted to be remembered long after the celebrations end.",
    ],
    highlights: [
      "Bespoke welcome hampers for guests",
      "Custom-branded luxury packaging",
      "Globally inspired gifting concepts",
      "Wedding favors & take-home mementos",
      "Personalized notes & monogramming",
      "Bulk ordering & logistics coordination",
    ],
    galleryImages: [
      { src: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=700&q=80", alt: "Gift hamper", category: "Hampers" },
      { src: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=700&q=80", alt: "Luxury packaging", category: "Packaging" },
      { src: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=700&q=80", alt: "Gift boxes", category: "Gifts" },
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80", alt: "Wedding favors", category: "Favors" },
      { src: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=700&q=80", alt: "Ribbons & details", category: "Details" },
      { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=700&q=80", alt: "Couple with gifts", category: "Moments" },
      { src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=700&q=80", alt: "Gift details", category: "Details" },
      { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&q=80", alt: "Styled gifting", category: "Styling" },
    ],
    ctaHeading: "Leave a Lasting",
    ctaItalic: "Impression",
    ctaSubtext:
      "Thoughtfully curated gifts that speak louder than words — because gratitude deserves to be beautiful.",
    ctaBgImage:
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=1920&q=80",
    nextSlug: "entertainment",
    nextTitle: "Curated Entertainment Experiences",
  },

  entertainment: {
    number: "03",
    title: "Curated Entertainment Experiences",
    tagline: "Moments That Captivate",
    accent: "#C9A96E",
    heroImage:
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1920&q=80",
    overviewImage:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=900&q=80",
    intro:
      "We bring your celebrations to life with carefully curated entertainment that captivates and engages.",
    paragraphs: [
      "From live performers and celebrity artists to immersive cultural acts and high-energy productions, we design moments that elevate every event.",
      "Each experience is tailored to your audience, ensuring energy, elegance, and unforgettable memories that resonate for years to come.",
    ],
    highlights: [
      "Live performers & celebrity artist booking",
      "Immersive cultural & folk acts",
      "High-energy dance & choreography",
      "Themed entertainment productions",
      "Interactive guest experiences",
      "Seamless AV & stage coordination",
    ],
    galleryImages: [
      { src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=700&q=80", alt: "Live performance", category: "Performance" },
      { src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=700&q=80", alt: "Stage production", category: "Production" },
      { src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=700&q=80", alt: "Concert lights", category: "Lighting" },
      { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=700&q=80", alt: "Dance performance", category: "Dance" },
      { src: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=700&q=80", alt: "Celebration energy", category: "Celebration" },
      { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=700&q=80", alt: "Cultural act", category: "Cultural" },
      { src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=700&q=80", alt: "Guest experience", category: "Guests" },
      { src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=700&q=80", alt: "Show details", category: "Details" },
    ],
    ctaHeading: "Bring Your Celebration",
    ctaItalic: "to Life",
    ctaSubtext:
      "From the first beat to the last bow — we create entertainment that your guests will never forget.",
    ctaBgImage:
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1920&q=80",
    nextSlug: "event-logistics",
    nextTitle: "Seamless Event Logistics & Guest Management",
  },

  "event-logistics": {
    number: "04",
    title: "Seamless Event Logistics & Guest Management",
    tagline: "Precision Behind Every Perfect Moment",
    accent: "#9CA195",
    heroImage:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80",
    overviewImage:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=900&q=80",
    intro: "Behind every flawless celebration is precise planning.",
    paragraphs: [
      "We manage all logistical elements—from guest coordination and transportation to timelines and on-ground execution—ensuring everything flows effortlessly.",
      "Our team ensures a stress-free experience, allowing you and your guests to enjoy every moment without concern.",
    ],
    highlights: [
      "End-to-end guest coordination",
      "Transportation & accommodation logistics",
      "Detailed event timeline management",
      "On-ground execution team",
      "RSVP & guest communication",
      "Day-of operations & contingency planning",
    ],
    galleryImages: [
      { src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=700&q=80", alt: "Venue coordination", category: "Venue" },
      { src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=700&q=80", alt: "Event setup", category: "Setup" },
      { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&q=80", alt: "Guest arrival", category: "Guests" },
      { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=700&q=80", alt: "Ceremony flow", category: "Ceremony" },
      { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=700&q=80", alt: "Reception setup", category: "Reception" },
      { src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=700&q=80", alt: "Guest experience", category: "Experience" },
      { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80", alt: "Event moments", category: "Moments" },
      { src: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=700&q=80", alt: "Celebration", category: "Celebration" },
    ],
    ctaHeading: "Flawless From",
    ctaItalic: "Start to Finish",
    ctaSubtext:
      "Leave every detail to us so you can be fully present — in every laugh, every dance, every memory.",
    ctaBgImage:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80",
    nextSlug: "vendor-curation",
    nextTitle: "Premium Vendor Curation & Management",
  },

  "vendor-curation": {
    number: "05",
    title: "Premium Vendor Curation & Management",
    tagline: "Only the Best, Every Time",
    accent: "#F2A7B0",
    heroImage:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80",
    overviewImage:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
    intro:
      "We collaborate with a trusted network of top-tier vendors across India and Canada to deliver exceptional quality.",
    paragraphs: [
      "From venues and décor to catering and production, every partner is carefully selected to align with our luxury standards.",
      "We handle sourcing, negotiation, and coordination—ensuring excellence, reliability, and a cohesive event experience.",
    ],
    highlights: [
      "Curated vendor network across India & Canada",
      "Venue sourcing & site visits",
      "Catering & culinary partner selection",
      "Contract negotiation & management",
      "Quality assurance & oversight",
      "Multi-vendor coordination on the day",
    ],
    galleryImages: [
      { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&q=80", alt: "Premium venue", category: "Venue" },
      { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80", alt: "Culinary excellence", category: "Catering" },
      { src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=700&q=80", alt: "Event production", category: "Production" },
      { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=700&q=80", alt: "Décor vendor", category: "Décor" },
      { src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=700&q=80", alt: "Vendor styling", category: "Styling" },
      { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=700&q=80", alt: "Venue setup", category: "Venue" },
      { src: "https://images.unsplash.com/photo-1519657337289-077653f724ed?w=700&q=80", alt: "Floral vendor", category: "Florals" },
      { src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=700&q=80", alt: "Guest experience", category: "Experience" },
    ],
    ctaHeading: "Only the Best",
    ctaItalic: "for Your Big Day",
    ctaSubtext:
      "Every vendor hand-picked, every partnership carefully managed — because your celebration deserves nothing less.",
    ctaBgImage:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80",
    nextSlug: "wedding-styling",
    nextTitle: "Wedding Styling & Design",
  },
};
