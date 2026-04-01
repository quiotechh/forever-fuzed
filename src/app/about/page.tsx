"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// ── Design tokens ──────────────────────────────────────────────────────────────
const gold = "#C9A96E";
const rose = "#F2A7B0";
const sage = "#9CA195";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

// ─────────────────────────────────────────────────────────────────────────────
// 1. HERO — Ridge-Studio-inspired: full-screen dark image, bottom-anchored copy
// ─────────────────────────────────────────────────────────────────────────────
function AboutHero() {
  return (
    <section className="relative h-screen min-h-170 flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/DEEP9447.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/62" />
        <div className="absolute inset-0 bg-[#3D4F3C]/28" />
        {/* Bottom gradient to soften into next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/35 to-transparent" />
      </div>

      {/* Corner flourishes */}
      <div className="absolute top-24 left-6 md:left-10 w-14 h-14 border-l border-t border-[#C9A96E]/30 pointer-events-none z-20" />
      <div className="absolute top-24 right-6 md:right-10 w-14 h-14 border-r border-t border-[#C9A96E]/30 pointer-events-none z-20" />

      {/* Vertical "SCROLL" label — right side, desktop only */}
      <div className="absolute right-8 bottom-24 z-20 hidden md:flex flex-col items-center gap-3">
        <div className="h-14 w-px bg-white/25" />
        <span className="font-lato text-white/40 text-[9px] tracking-[0.35em] uppercase [writing-mode:vertical-lr]">
          Scroll
        </span>
      </div>

      {/* Hero copy — bottom-left aligned (Ridge Studio style) */}
      <div className="relative z-10 w-full pb-20 md:pb-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-4 mb-7"
        >
          <div className="h-px w-12 bg-[#C9A96E]" />
          <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.38em] uppercase">
            Our Story
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-cormorant font-light text-white leading-[0.93]
                     text-[clamp(3.2rem,9vw,7.5rem)] max-w-4xl mb-7"
        >
          The Vision Behind
          <br />
          Every {/* Outlined / stroke word — like Ridge Studio's "Spaces." */}
          <span
            className="font-cormorant italic"
            style={{
              WebkitTextStroke: "1.5px #C9A96E",
              color: "transparent",
            }}
          >
            Celebration.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.58 }}
          className="font-lato text-white/55 text-sm md:text-base leading-relaxed max-w-md tracking-wide"
        >
          A decade of global experience, cultural roots, and one defining
          journey — all in service of your perfect celebration.
        </motion.p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. FOUNDER — Full story, sticky image placeholder, floating stat cards
// ─────────────────────────────────────────────────────────────────────────────
function FounderSection() {
  const bio = [
    `Surbhi Singh is the visionary behind Forever Fuzed — a luxury event curator with a global perspective and deep cultural roots. With a foundation in Mass Communication and a specialization in Event Management, Surbhi began her journey in India, working with established event companies before independently curating 50+ weddings, engagements, and receptions at her own banquet space. Her early experience shaped her understanding of scale, emotion, and flawless execution.`,
    `Driven to refine her craft on a global level, she moved to Canada nearly a decade ago to pursue advanced studies in Event Management. While working with multiple event companies in Canada, she gained international exposure, modern aesthetics, and a deeper understanding of client experience in multicultural settings.`,
    `Her true turning point came with her own grand destination wedding in Jaipur — a multi-crore celebration that she conceptualized and executed from overseas. What should have been a joyful journey turned into a two-year challenge of coordination gaps, trust issues, time zone struggles, and lack of reliable end-to-end services for NRIs.`,
  ];

  return (
    <section className="bg-white py-24 md:py-36 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* ── Image side ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative lg:sticky lg:top-28"
          >
            {/* Decorative sage background */}
            <div className="absolute -top-8 -left-8 w-3/4 h-[105%] bg-[#9CA195]/8 -z-10 rounded-3xl" />

            {/* Photo — Next.js Image component (photo drops in as /founder.jpg) */}
            <div className="relative aspect-3/4 w-full max-w-sm mx-auto lg:mx-0 rounded-[2rem] overflow-hidden bg-[#f0ebe5]">
              <Image
                src="/founder.jpg"
                alt="Surbhi Singh — Founder, Forever Fuzed"
                fill
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover object-top"
              />
              {/* Gold shimmer at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#C9A96E]/22 to-transparent" />
            </div>

            {/* Floating stat — bottom right */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -right-2 lg:-right-10 bg-white border border-[#e8ddd5] px-7 py-5 shadow-sm"
            >
              <p className="font-cormorant text-[#C9A96E] text-4xl font-light">
                50+
              </p>
              <p className="font-lato text-[#6b5f5a] text-[10px] tracking-[0.22em] uppercase mt-1">
                Weddings Curated
              </p>
            </motion.div>

            {/* Floating stat — top right */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="absolute -top-4 -right-2 lg:-right-10 bg-white border border-[#e8ddd5] px-7 py-5 shadow-sm"
            >
              <p className="font-cormorant text-[#9CA195] text-4xl font-light">
                10+
              </p>
              <p className="font-lato text-[#6b5f5a] text-[10px] tracking-[0.22em] uppercase mt-1">
                Years Experience
              </p>
            </motion.div>
          </motion.div>

          {/* ── Text side ──────────────────────────────────────── */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-10 bg-[#C9A96E]" />
              <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.35em] uppercase">
                The Founder
              </span>
            </motion.div>

            {/* Name */}
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="font-cormorant text-[#3a2e2a] font-light text-5xl sm:text-6xl leading-[1.05]"
            >
              Surbhi Singh
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="font-lato text-[#C9A96E] text-[11px] tracking-[0.25em] uppercase mt-3"
            >
              Luxury Event Curator · Canada &amp; India
            </motion.p>

            {/* Growing divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ originX: 0 }}
              className="mt-8 mb-10 h-px w-14 bg-[#9CA195]"
            />

            {/* Bio paragraphs */}
            {bio.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: 0.08 * i }}
                className="font-lato text-[#6b5f5a] text-base leading-relaxed mb-6"
              >
                {para}
              </motion.p>
            ))}

            {/* Defining quote */}
            <motion.blockquote
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-2 mb-10 pl-6 border-l-2 border-[#F2A7B0]"
            >
              <p className="font-cormorant italic text-[#9CA195] text-2xl leading-snug">
                &ldquo;That experience didn&rsquo;t just inspire me — it defined
                my purpose.&rdquo;
              </p>
              <cite className="font-lato text-[10px] tracking-[0.22em] uppercase text-[#b8a99a] not-italic mt-3 block">
                — Surbhi Singh
              </cite>
            </motion.blockquote>

            {/* Credential tags */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="flex flex-wrap gap-3"
            >
              {[
                "Mass Communication",
                "Event Management",
                "Global Perspective",
                "NRI Specialist",
              ].map((tag) => (
                <span
                  key={tag}
                  className="font-lato text-[10px] tracking-[0.15em] uppercase border border-[#e8ddd5] text-[#6b5f5a] px-4 py-2.5"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. VISION — Cream bg, centred, large italic quote
// ─────────────────────────────────────────────────────────────────────────────
function VisionSection() {
  return (
    <section className="bg-[#FAF8F5] py-24 md:py-36 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Ornamental eyebrow */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <div className="h-px w-14 bg-[#C9A96E]" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A96E]" />
          <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.38em] uppercase mx-1">
            Our Vision
          </span>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A96E]" />
          <div className="h-px w-14 bg-[#C9A96E]" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="font-cormorant text-[#3a2e2a] font-light
                     text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.06] mb-10"
        >
          Redefining Luxury
          <br />
          for a{" "}
          <span className="font-cormorant italic text-[#9CA195]">
            Global Generation
          </span>
        </motion.h2>

        {/* Body copy */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.18 }}
          className="font-lato text-[#6b5f5a] text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-14"
        >
          At Forever Fuzed, we specialize in high-end, fully customized
          destination weddings in India, designed especially for NRIs and
          globally based couples who want to celebrate their love in their
          homeland — without the stress, uncertainty, or compromise.
        </motion.p>

        {/* Vision statement — framed with vertical gradient lines */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.28 }}
          className="relative inline-block max-w-3xl"
        >
          <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#C9A96E]/60 to-transparent" />
          <p className="font-cormorant italic text-[#3a2e2a] text-2xl md:text-3xl leading-normal px-4 md:px-10">
            &ldquo;To create once-in-a-lifetime celebrations that seamlessly
            fuse love, culture, tradition, and modern luxury.&rdquo;
          </p>
          <div className="absolute -right-4 md:-right-8 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#F2A7B0]/60 to-transparent" />
        </motion.div>

        {/* Bridging continents */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.38 }}
          className="font-lato text-[#6b5f5a] text-base leading-relaxed mt-14 max-w-2xl mx-auto"
        >
          We bridge continents — personally connecting with our clients in
          Canada and the USA, understanding their story, and transforming it
          into an unforgettable experience executed flawlessly in destinations
          like{" "}
          <span className="text-[#C9A96E] font-medium">Rajasthan, Goa,</span>{" "}
          and beyond.
        </motion.p>

        {/* Destination + origin pills */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.48 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {[
            { label: "Canada", accent: sage },
            { label: "India", accent: gold },
            { label: "USA", accent: rose },
          ].map(({ label, accent }) => (
            <span
              key={label}
              className="font-lato text-[10px] tracking-[0.2em] uppercase bg-white border px-5 py-2.5"
              style={{ borderColor: `${accent}50`, color: "#6b5f5a" }}
            >
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. SERVICES — What Makes Us Different. Dark solid bg, elegant list
// ─────────────────────────────────────────────────────────────────────────────
const services = [
  { num: "01", name: "Venue Selection & Destination Planning", accent: rose },
  {
    num: "02",
    name: "Save-the-Dates, Invitations & Digital Experiences",
    accent: gold,
  },
  {
    num: "03",
    name: "Personalized Wedding Songs & Storytelling",
    accent: sage,
  },
  { num: "04", name: "Pre-Wedding Shoots & Creative Direction", accent: rose },
  { num: "05", name: "Décor Design & Luxury Styling", accent: gold },
  { num: "06", name: "Catering & Hospitality Management", accent: sage },
  { num: "07", name: "Guest Logistics & Travel Coordination", accent: rose },
  { num: "08", name: "Entertainment Curation", accent: gold },
  {
    num: "09",
    name: "Makeup, Styling & Designer Collaborations",
    accent: sage,
  },
];

function ServicesSection() {
  return (
    <section className="bg-[#1a1f1a] py-24 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header: two-col — headline left, descriptor right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-16 md:mb-24">
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-10 bg-[#C9A96E]" />
              <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.38em] uppercase">
                What We Offer
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className="font-cormorant text-white font-light
                         text-[clamp(2.6rem,6vw,4.5rem)] leading-[1.06]"
            >
              We Don&rsquo;t Just Plan
              <br />
              <span className="italic text-[#F2A7B0]">We Curate</span>
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="font-lato text-white/55 text-base leading-relaxed self-end"
          >
            From the first idea to the final farewell, every detail is
            thoughtfully crafted to reflect your story, your culture, and your
            vision — blending traditions, families, and emotions into one
            seamless celebration.
          </motion.p>
        </div>

        {/* Service list */}
        <div className="divide-y divide-white/10">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.04 }}
              className="group flex items-center justify-between py-5 md:py-6 cursor-default"
            >
              <div className="flex items-center gap-5 md:gap-10">
                {/* Faded number */}
                <span
                  className="font-cormorant text-sm md:text-base tracking-[0.12em] font-light shrink-0 w-7"
                  style={{ color: `${svc.accent}50` }}
                >
                  {svc.num}
                </span>

                {/* Service name */}
                <h3
                  className="font-cormorant text-white font-light
                             text-lg md:text-2xl lg:text-[1.7rem] leading-snug
                             group-hover:text-[#C9A96E] transition-colors duration-300"
                >
                  {svc.name}
                </h3>
              </div>

              {/* Growing accent line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "2rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.04 }}
                className="h-px hidden md:block shrink-0 ml-8"
                style={{ backgroundColor: svc.accent }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-lato text-white/40 text-[11px] tracking-[0.18em] uppercase mt-14 text-center"
        >
          Every detail thoughtfully crafted to reflect your story
        </motion.p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. PROMISE — White bg, 4-col bordered card grid
// ─────────────────────────────────────────────────────────────────────────────
const promises = [
  {
    title: "Trust Across Borders",
    desc: "We personally meet every client in Canada and the USA. You'll always have a real person in your corner — across every time zone.",
    accent: gold,
    num: "01",
  },
  {
    title: "Luxury Without Compromise",
    desc: "Every vendor, venue, and experience is hand-curated to the highest standard. Never templated. Never generic. Always extraordinary.",
    accent: rose,
    num: "02",
  },
  {
    title: "Personalized Attention",
    desc: "Your wedding is as unique as your love story. We listen, understand, and craft an experience that is entirely, unmistakably you.",
    accent: sage,
    num: "03",
  },
  {
    title: "Seamless Fusion",
    desc: "Cultures, families, timelines, logistics — all woven together flawlessly, so you can be fully present in every magical moment.",
    accent: gold,
    num: "04",
  },
];

function PromiseSection() {
  return (
    <section className="bg-[#FAF8F5] py-24 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <div className="h-px w-12 bg-[#C9A96E]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A96E]" />
            <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.38em] uppercase mx-1">
              Our Promise
            </span>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A96E]" />
            <div className="h-px w-12 bg-[#C9A96E]" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
            className="font-cormorant text-[#3a2e2a] font-light
                       text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.06] mb-8"
          >
            What You Can
            <br />
            Always <span className="italic text-[#9CA195]">Count On</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="font-lato text-[#6b5f5a] text-base leading-relaxed max-w-xl mx-auto"
          >
            We understand the emotional and logistical challenges of planning a
            destination wedding from abroad — because we&rsquo;ve lived it.
            That&rsquo;s why we bring you:
          </motion.p>
        </div>

        {/* Promise cards — bordered grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#e8ddd5]">
          {promises.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={[
                "group p-8 md:p-10 bg-white hover:bg-white transition-colors duration-300 relative",
                // right border for all except last in each row
                i < 3
                  ? "border-b border-[#e8ddd5] lg:border-b-0 lg:border-r"
                  : "border-b border-[#e8ddd5] lg:border-b-0",
                // sm: 2-col adjustments
                i % 2 === 0
                  ? "sm:border-r sm:border-[#e8ddd5]"
                  : "sm:border-r-0",
                // override sm border for lg
                i < 3 ? "lg:border-r lg:border-[#e8ddd5]" : "lg:border-r-0",
              ].join(" ")}
            >
              {/* Faded large number */}
              <p
                className="font-cormorant text-[72px] font-light leading-none mb-4 select-none"
                style={{ color: `${p.accent}15` }}
              >
                {p.num}
              </p>

              {/* Growing accent line */}
              <div
                className="h-px w-8 mb-6 transition-all duration-500 group-hover:w-14"
                style={{ backgroundColor: p.accent }}
              />

              <h3
                className="font-cormorant text-[#3a2e2a] font-light text-2xl mb-4 leading-snug
                           group-hover:text-[#3a2e2a] transition-colors duration-300"
              >
                {p.title}
              </h3>
              <p className="font-lato text-[#6b5f5a] text-sm leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. CTA — Dark image, gold primary + white secondary buttons
// ─────────────────────────────────────────────────────────────────────────────
function AboutCTA() {
  return (
    <section className="relative py-32 md:py-44 px-6 flex items-center justify-center text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/DEEP7495.jpg"
          alt=""
          fill
          className="object-cover object-center"
          quality={85}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[#3D4F3C]/35" />
      </div>

      {/* Corner flourishes */}
      <div className="absolute top-8 left-8 w-14 h-14 border-l border-t border-[#C9A96E]/25 pointer-events-none" />
      <div className="absolute top-8 right-8 w-14 h-14 border-r border-t border-[#C9A96E]/25 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-14 h-14 border-l border-b border-[#C9A96E]/25 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-14 h-14 border-r border-b border-[#C9A96E]/25 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Gold ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="h-px w-10 bg-[#C9A96E]" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A96E]" />
          <div className="h-px w-10 bg-[#C9A96E]" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="font-cormorant text-white font-light
                     text-[clamp(2.8rem,8vw,5.5rem)] leading-[1.06] mb-8"
        >
          Your Celebration
          <br />
          <span className="italic text-[#F2A7B0]">Awaits</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="font-lato text-white/55 text-sm leading-relaxed mb-12 tracking-wide"
        >
          Let&rsquo;s begin your journey together. Share your story with us and
          we&rsquo;ll craft a celebration that lasts a lifetime.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary */}
          <Link href="/contact">
            <button className="relative overflow-hidden group font-lato text-[11px] tracking-[0.28em] uppercase px-10 py-4 bg-[#C9A96E] text-white transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A96E]/30">
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/25 to-transparent skew-x-12" />
              <span className="relative">Begin Your Journey</span>
            </button>
          </Link>

          {/* Secondary */}
          <Link href="/gallery">
            <button className="relative overflow-hidden group font-lato text-[11px] tracking-[0.28em] uppercase px-10 py-4 border border-white/50 text-white transition-all duration-300 hover:border-[#F2A7B0]">
              <span className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative">View Our Work</span>
            </button>
          </Link>
        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mt-14"
        >
          <div className="h-px w-8 bg-[#F2A7B0]/45" />
          <div className="w-1 h-1 rotate-45 bg-[#F2A7B0]/45" />
          <div className="h-px w-8 bg-[#9CA195]/45" />
          <div className="w-1 h-1 rotate-45 bg-[#9CA195]/45" />
          <div className="h-px w-8 bg-[#C9A96E]/45" />
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <FounderSection />
      <VisionSection />
      <ServicesSection />
      <PromiseSection />
      <AboutCTA />
    </main>
  );
}
