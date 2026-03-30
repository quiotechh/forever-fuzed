"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost as BlogPostType } from "@/app/blogs/data";
import CTABanner from "@/components/Cta";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

// ── Shared hero used by both layouts ──────────────────────────────────────────
function BlogHero({ post }: { post: BlogPostType }) {
  return (
    <section className="relative h-screen min-h-150 flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `linear-gradient(135deg, ${post.accent}55 0%, transparent 60%)`,
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/40 to-transparent" />
      </div>

      {/* Corner flourishes */}
      <div
        className="absolute top-24 left-6 md:left-10 w-14 h-14 border-l border-t pointer-events-none z-20"
        style={{ borderColor: `${post.accent}55` }}
      />
      <div
        className="absolute top-24 right-6 md:right-10 w-14 h-14 border-r border-t pointer-events-none z-20"
        style={{ borderColor: `${post.accent}55` }}
      />

      {/* Vertical scroll indicator */}
      <div className="absolute right-8 bottom-24 z-20 hidden md:flex flex-col items-center gap-3">
        <div className="h-14 w-px bg-white/25" />
        <span className="font-lato text-white/40 text-[9px] tracking-[0.35em] uppercase [writing-mode:vertical-lr]">
          Scroll
        </span>
      </div>

      {/* Bottom-anchored copy */}
      <div className="relative z-10 w-full pb-20 md:pb-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-4 mb-5"
        >
          <div className="h-px w-12" style={{ backgroundColor: post.accent }} />
          <span
            className="font-lato text-[10px] tracking-[0.35em] uppercase"
            style={{ color: post.accent }}
          >
            The Journal &mdash; {post.number}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-cormorant text-white font-light leading-[1.06] text-5xl sm:text-6xl md:text-7xl lg:text-[80px] max-w-3xl"
        >
          {post.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-4 font-cormorant italic text-white/70 text-2xl md:text-3xl font-light"
        >
          {post.subtitle}
        </motion.p>
      </div>
    </section>
  );
}

// ── Shared breadcrumb ─────────────────────────────────────────────────────────
function Breadcrumb({ post }: { post: BlogPostType }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <Link
        href="/blogs"
        className="font-lato text-[#9a8f8a] hover:text-[#3a2e2a] text-[10px] tracking-[0.3em] uppercase transition-colors duration-300"
      >
        &larr; Journal
      </Link>
      <div className="w-px h-3 bg-[#e8e2da]" />
      <span
        className="font-lato text-[10px] tracking-[0.3em] uppercase"
        style={{ color: post.accent }}
      >
        {post.category}
      </span>
    </div>
  );
}

// ── Shared next-read + separator + CTA ───────────────────────────────────────
function BlogFooter({ post }: { post: BlogPostType }) {
  return (
    <>
      {/* Next Read */}
      <section className="relative h-[55vh] min-h-96 overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src={post.heroImage}
            alt={post.nextTitle}
            fill
            className="object-cover object-center scale-110"
          />
          <div className="absolute inset-0 bg-black/72" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `linear-gradient(135deg, ${post.accent}55 0%, transparent 70%)`,
            }}
          />
        </div>
        <div className="absolute top-8 left-8 w-14 h-14 border-l border-t border-[#C9A96E]/25 pointer-events-none z-10" />
        <div className="absolute bottom-8 right-8 w-14 h-14 border-r border-b border-[#C9A96E]/25 pointer-events-none z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col sm:flex-row items-center justify-between gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-lato text-white/40 text-[9px] tracking-[0.4em] uppercase mb-3">
              Next Read
            </p>
            <h3 className="font-cormorant text-white font-light text-3xl sm:text-4xl md:text-5xl leading-[1.1] max-w-xl">
              {post.nextTitle}
            </h3>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <Link
              href={`/blogs/${post.nextSlug}`}
              className="relative overflow-hidden group shrink-0 inline-block border px-10 py-4 transition-all duration-300"
              style={{ borderColor: post.accent, color: post.accent }}
            >
              <span
                className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                style={{ backgroundColor: post.accent }}
              />
              <span className="relative font-lato text-[10px] tracking-[0.3em] uppercase group-hover:text-white transition-colors duration-300">
                Read Next &rarr;
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Separator */}
      <section className="bg-[#FAF8F5] py-14 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-0 w-full max-w-xs">
            <div className="flex-1 h-px bg-[#F2A7B0]" />
            <div className="flex-1 h-px bg-[#9CA195]" />
            <div className="flex-1 h-px bg-[#C9A96E]" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rotate-45 bg-[#F2A7B0]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A96E]" />
            <div className="w-1 h-1 rotate-45 bg-[#9CA195]" />
          </div>
          <p className="font-cormorant italic text-[#9a8f8a] text-lg text-center tracking-wide">
            Every love story deserves to be celebrated.
          </p>
          <div className="flex items-center gap-0 w-full max-w-xs">
            <div className="flex-1 h-px bg-[#C9A96E]" />
            <div className="flex-1 h-px bg-[#9CA195]" />
            <div className="flex-1 h-px bg-[#F2A7B0]" />
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}

// ── SECTIONS-BASED LAYOUT (case studies / real weddings) ─────────────────────
function SectionsBlogLayout({ post }: { post: BlogPostType }) {
  const sections = post.sections!;
  const introSection = sections[0];       // no heading — poetic lede
  const contentSections = sections.slice(1);

  return (
    <main>
      <BlogHero post={post} />

      {/* ── Lede ── */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb post={post} />

          {/* Decorative open-quote mark */}
          <div
            className="font-cormorant font-light leading-none select-none mb-2"
            style={{ fontSize: "clamp(80px,12vw,140px)", color: post.accent + "28" }}
          >
            &ldquo;
          </div>

          <div className="-mt-6 sm:-mt-10 space-y-4">
            {introSection.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className={
                  para.length <= 85
                    ? "font-cormorant italic text-[#3a2e2a] font-light leading-[1.4]"
                    : "font-cormorant text-[#3a2e2a] font-light text-2xl sm:text-3xl leading-normal"
                }
                style={{ fontSize: para.length <= 85 ? "clamp(1.6rem,4vw,2.8rem)" : undefined }}
              >
                {para}
              </motion.p>
            ))}
          </div>

          <div className="mt-12 h-px w-20" style={{ backgroundColor: post.accent }} />
        </div>
      </section>

      {/* ── Section content ── */}
      <section className="bg-[#FAF8F5] py-20 md:py-28 px-6 relative overflow-hidden">
        {/* Watermark number */}
        <div
          className="absolute right-0 top-8 font-cormorant font-light leading-none select-none pointer-events-none opacity-[0.04] translate-x-1/4"
          style={{ fontSize: "clamp(160px,22vw,320px)", color: post.accent }}
        >
          {post.number}
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          {contentSections.map((section, si) => (
            <div key={si} className={si > 0 ? "mt-14" : ""}>
              {/* Section heading */}
              {section.heading && (
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center gap-4 mb-6"
                >
                  <div
                    className="w-1 h-7 shrink-0 rounded-sm"
                    style={{ backgroundColor: post.accent }}
                  />
                  <h2 className="font-cormorant text-[#3a2e2a] font-light text-2xl sm:text-[28px] leading-snug">
                    {section.heading}
                  </h2>
                </motion.div>
              )}

              {/* Section paragraphs */}
              <div className="space-y-5">
                {section.paragraphs.map((para, pi) => (
                  <motion.p
                    key={pi}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.65, delay: pi * 0.05 }}
                    className={
                      para.length <= 65
                        ? "font-cormorant italic text-[#3a2e2a] font-light text-xl sm:text-2xl leading-normal"
                        : "font-lato text-[#4a3f3a] text-sm sm:text-base leading-loose"
                    }
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <BlogFooter post={post} />
    </main>
  );
}

// ── PARAGRAPHS-BASED LAYOUT (narrative articles) ─────────────────────────────
function ParagraphsBlogLayout({ post }: { post: BlogPostType }) {
  const firstPara = post.paragraphs[0];

  // Detect closing block: consecutive short lines (≤100 chars) from the end
  let closingStart = post.paragraphs.length;
  for (let i = post.paragraphs.length - 1; i > 0; i--) {
    if (post.paragraphs[i].length <= 100) {
      closingStart = i;
    } else {
      break;
    }
  }
  const bodyParas = post.paragraphs.slice(1, closingStart);
  const closingParas = post.paragraphs.slice(closingStart);

  return (
    <main>
      <BlogHero post={post} />

      {/* ── Opening lede ── */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb post={post} />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="font-cormorant font-light leading-none select-none mb-2"
              style={{ fontSize: "clamp(80px,12vw,140px)", color: post.accent + "28" }}
            >
              &ldquo;
            </div>
            <p className="font-cormorant text-[#3a2e2a] font-light text-2xl sm:text-3xl md:text-[34px] leading-normal -mt-6 sm:-mt-8">
              {firstPara}
            </p>
          </motion.div>

          <div className="mt-12 h-px w-20" style={{ backgroundColor: post.accent }} />
        </div>
      </section>

      {/* ── Body ── */}
      <section className="bg-[#FAF8F5] py-20 md:py-28 px-6 relative overflow-hidden">
        {/* Watermark number */}
        <div
          className="absolute right-0 top-8 font-cormorant font-light leading-none select-none pointer-events-none opacity-[0.04] translate-x-1/4"
          style={{ fontSize: "clamp(160px,22vw,320px)", color: post.accent }}
        >
          {post.number}
        </div>

        <div className="max-w-3xl mx-auto relative z-10 space-y-7">
          {bodyParas.map((para, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="font-lato text-[#4a3f3a] text-sm sm:text-base leading-loose"
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* Mid-article image break */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9 }}
          className="max-w-5xl mx-auto mt-20 relative"
        >
          <div className="relative h-[45vh] min-h-72 overflow-hidden">
            <Image
              src={post.heroImage}
              alt={post.subtitle}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 80vw"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div
              className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2"
              style={{ borderColor: post.accent }}
            />
            <div
              className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2"
              style={{ borderColor: post.accent }}
            />
          </div>
          <div className="flex items-center gap-3 mt-5">
            <div className="h-px w-6" style={{ backgroundColor: post.accent }} />
            <span className="font-lato text-[10px] tracking-[0.3em] uppercase text-[#9a8f8a]">
              {post.category}
            </span>
          </div>
        </motion.div>
      </section>

      {/* ── Closing lines ── */}
      <section className="bg-white py-20 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-16"
          >
            <div className="h-px w-14" style={{ backgroundColor: post.accent + "50" }} />
            <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: post.accent }} />
            <div className="h-px w-14" style={{ backgroundColor: post.accent + "50" }} />
          </motion.div>

          {closingParas.map((para, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.18 }}
              className="font-cormorant italic text-[#3a2e2a] font-light leading-[1.45] mb-5 last:mb-0"
              style={{ fontSize: "clamp(1.4rem,3.5vw,2.4rem)" }}
            >
              {para}
            </motion.p>
          ))}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-3 mt-16"
          >
            <div className="h-px w-8 bg-[#F2A7B0]/50" />
            <div className="w-1 h-1 rotate-45 bg-[#F2A7B0]/50" />
            <div className="h-px w-8 bg-[#9CA195]/50" />
            <div className="w-1 h-1 rotate-45 bg-[#9CA195]/50" />
            <div className="h-px w-8 bg-[#C9A96E]/50" />
          </motion.div>
        </div>
      </section>

      <BlogFooter post={post} />
    </main>
  );
}

// ── Root export — picks layout based on data ──────────────────────────────────
export default function BlogPost({ post }: { post: BlogPostType }) {
  if (post.sections && post.sections.length > 0) {
    return <SectionsBlogLayout post={post} />;
  }
  return <ParagraphsBlogLayout post={post} />;
}
