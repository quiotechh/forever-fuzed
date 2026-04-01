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
    heroImage: "/DEEP7090.jpg",
    overviewImage: "/DEEP7089.jpg",
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
      { src: "/DEEP7085.jpg", alt: "Wedding decor", category: "Décor" },
      { src: "/DEEP7084.jpg", alt: "Floral arrangement", category: "Florals" },
      { src: "/DEEP7089.jpg", alt: "Reception styling", category: "Reception" },
      { src: "/DEEP7059.jpg", alt: "Ceremony setup", category: "Ceremony" },
      { src: "/009A0511.jpg", alt: "Couple portrait", category: "Portraits" },
      { src: "/_UB_2694.jpg", alt: "Table setting", category: "Details" },
      { src: "/_UB_1459.jpg", alt: "Ceremony aisle", category: "Ceremony" },
      { src: "/009A0514.jpg", alt: "Wedding details", category: "Details" },
    ],
    ctaHeading: "Your Wedding, Designed",
    ctaItalic: "to Perfection",
    ctaSubtext:
      "Let us craft a visual world that tells your unique story — every petal, every candle, every moment.",
    ctaBgImage: "/009A2081.jpg",
    nextSlug: "luxury-gifting",
    nextTitle: "Luxury Gifting & Wedding Hampers",
  },

  "luxury-gifting": {
    number: "02",
    title: "Luxury Gifting & Wedding Hampers",
    tagline: "Gifting That Leaves an Impression",
    accent: "#F2A7B0",
    heroImage: "/009A2302.jpg",
    overviewImage: "/009A2350.jpg",
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
      { src: "/009A2341.jpg", alt: "Gift hamper", category: "Hampers" },
      { src: "/009A2353.jpg", alt: "Luxury packaging", category: "Packaging" },
      { src: "/009A2360.jpg", alt: "Gift boxes", category: "Gifts" },
      { src: "/009A2365.jpg", alt: "Wedding favors", category: "Favors" },
      { src: "/DEEP7480.jpg", alt: "Ribbons & details", category: "Details" },
      { src: "/DEEP8535.jpg", alt: "Couple with gifts", category: "Moments" },
      { src: "/DEEP9500.jpg", alt: "Gift details", category: "Details" },
      { src: "/DEEP7059.jpg", alt: "Styled gifting", category: "Styling" },
    ],
    ctaHeading: "Leave a Lasting",
    ctaItalic: "Impression",
    ctaSubtext:
      "Thoughtfully curated gifts that speak louder than words — because gratitude deserves to be beautiful.",
    ctaBgImage: "/009A2350.jpg",
    nextSlug: "entertainment",
    nextTitle: "Curated Entertainment Experiences",
  },

  entertainment: {
    number: "03",
    title: "Curated Entertainment Experiences",
    tagline: "Moments That Captivate",
    accent: "#C9A96E",
    heroImage: "/009A2087.jpg",
    overviewImage: "/009A0518.jpg",
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
      {
        src: "/009A2089.jpg",
        alt: "Live performance",
        category: "Performance",
      },
      { src: "/009A2090.jpg", alt: "Stage production", category: "Production" },
      { src: "/DEEP7067.jpg", alt: "Concert lights", category: "Lighting" },
      { src: "/DEEP7464.jpg", alt: "Dance performance", category: "Dance" },
      {
        src: "/DEEP7490.jpg",
        alt: "Celebration energy",
        category: "Celebration",
      },
      { src: "/DEEP8524.jpg", alt: "Cultural act", category: "Cultural" },
      { src: "/DEEP9445.jpg", alt: "Guest experience", category: "Guests" },
      { src: "/DEEP9491.jpg", alt: "Show details", category: "Details" },
    ],
    ctaHeading: "Bring Your Celebration",
    ctaItalic: "to Life",
    ctaSubtext:
      "From the first beat to the last bow — we create entertainment that your guests will never forget.",
    ctaBgImage: "/DEEP9441.jpg",
    nextSlug: "event-logistics",
    nextTitle: "Seamless Event Logistics & Guest Management",
  },

  "event-logistics": {
    number: "04",
    title: "Seamless Event Logistics & Guest Management",
    tagline: "Precision Behind Every Perfect Moment",
    accent: "#9CA195",
    heroImage: "/DEEP9447.jpg",
    overviewImage: "/DEEP9443.jpg",
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
      { src: "/DEEP9441.jpg", alt: "Venue coordination", category: "Venue" },
      { src: "/DEEP9439.jpg", alt: "Event setup", category: "Setup" },
      { src: "/DEEP8532.jpg", alt: "Guest arrival", category: "Guests" },
      { src: "/DEEP9463.jpg", alt: "Ceremony flow", category: "Ceremony" },
      { src: "/DEEP7489.jpg", alt: "Reception setup", category: "Reception" },
      { src: "/DEEP8511.jpg", alt: "Guest experience", category: "Experience" },
      { src: "/DEEP7480.jpg", alt: "Event moments", category: "Moments" },
      { src: "/009A2076.jpg", alt: "Celebration", category: "Celebration" },
    ],
    ctaHeading: "Flawless From",
    ctaItalic: "Start to Finish",
    ctaSubtext:
      "Leave every detail to us so you can be fully present — in every laugh, every dance, every memory.",
    ctaBgImage: "/009A2077.jpg",
    nextSlug: "vendor-curation",
    nextTitle: "Premium Vendor Curation & Management",
  },

  "vendor-curation": {
    number: "05",
    title: "Premium Vendor Curation & Management",
    tagline: "Only the Best, Every Time",
    accent: "#F2A7B0",
    heroImage: "/009A2077.jpg",
    overviewImage: "/009A0506.jpg",
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
      { src: "/_UB_1459.jpg", alt: "Premium venue", category: "Venue" },
      {
        src: "/009A0514.jpg",
        alt: "Culinary excellence",
        category: "Catering",
      },
      { src: "/009A2088.jpg", alt: "Event production", category: "Production" },
      { src: "/009A2365.jpg", alt: "Vendor styling", category: "Styling" },
      { src: "/DEEP7459.jpg", alt: "Décor vendor", category: "Décor" },
      { src: "/09A2089.jpg", alt: "Venue setup", category: "Venue" },
      { src: "/009A2099.jpg", alt: "Floral vendor", category: "Florals" },
      { src: "/009A2353.jpg", alt: "Guest experience", category: "Experience" },
    ],
    ctaHeading: "Only the Best",
    ctaItalic: "for Your Big Day",
    ctaSubtext:
      "Every vendor hand-picked, every partnership carefully managed — because your celebration deserves nothing less.",
    ctaBgImage: "/DEEP8513.jpg",
    nextSlug: "wedding-styling",
    nextTitle: "Wedding Styling & Design",
  },
};
