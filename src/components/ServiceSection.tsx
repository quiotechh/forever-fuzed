"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Wedding Styling & Design",
    description:
      "From concept to execution, every element—color palettes, décor, floral artistry, tablescapes, and ambiance—is thoughtfully curated to create a seamless and luxurious setting. Blending modern elegance with timeless traditions.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    accent: "#9CA195",
    href: "/services/wedding-styling",
  },
  {
    number: "02",
    title: "Luxury Gifting & Wedding Hampers",
    description:
      "Bespoke gifting experiences that leave a lasting impression. From curated welcome hampers to elegant wedding favors, each piece is tailored to your theme with premium packaging and personalized details.",
    image:
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800&q=80",
    accent: "#F2A7B0",
    href: "/services/luxury-gifting",
  },
  {
    number: "03",
    title: "Curated Entertainment Experiences",
    description:
      "From live performers and celebrity artists to immersive cultural acts and high-energy productions, we design moments that elevate every event. Each experience is tailored to your audience.",
    image:
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80",
    accent: "#C9A96E",
    href: "/services/entertainment",
  },
  {
    number: "04",
    title: "Seamless Event Logistics & Guest Management",
    description:
      "We manage all logistical elements—from guest coordination and transportation to timelines and on-ground execution—ensuring everything flows effortlessly so you enjoy every moment without concern.",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    accent: "#9CA195",
    href: "/services/event-logistics",
  },
  {
    number: "05",
    title: "Premium Vendor Curation & Management",
    description:
      "A trusted network of top-tier vendors across India and Canada. From venues and décor to catering and production, every partner is carefully selected. We handle sourcing, negotiation, and coordination.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    accent: "#F2A7B0",
    href: "/services/vendor-curation",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ServicesOverview() {
  const firstRow = services.slice(0, 3);
  const secondRow = services.slice(3, 5);

  return (
    <section className="bg-[#FAF8F5] py-24 md:py-36 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-[#C9A96E]" />
            <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.35em] uppercase">
              What We Offer
            </span>
            <div className="h-px w-12 bg-[#C9A96E]" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cormorant text-[#3a2e2a] font-light text-4xl sm:text-5xl md:text-[56px] leading-[1.1]"
          >
            Every Detail,
            <span className="italic text-[#9CA195]"> Thoughtfully Crafted</span>
          </motion.h2>
        </div>

        {/* Row 1 — 3 cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8ddd5] mb-px"
        >
          {firstRow.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </motion.div>

        {/* Row 2 — 2 cards centered */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e8ddd5] lg:w-2/3 lg:mx-auto"
        >
          {secondRow.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <Link href="/services">
            <button className="relative overflow-hidden group font-lato text-[10.5px] tracking-[0.3em] uppercase px-10 py-4 border border-[#C9A96E] text-[#C9A96E] transition-all duration-300">
              <span className="absolute inset-0 bg-[#C9A96E] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative group-hover:text-white transition-colors duration-300">
                View All Services
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <motion.div variants={fadeUp}>
      <Link
        href={service.href}
        className="group block bg-white overflow-hidden"
      >
        {/* Image */}
        <div className="relative h-60 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.div>

          {/* Dark hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500 z-10" />

          {/* Number */}
          <motion.span
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            className="absolute top-4 left-4 z-20 font-cormorant text-4xl font-light leading-none"
            style={{ color: `${service.accent}dd` }}
          >
            {service.number}
          </motion.span>

          {/* Hover label center */}
          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            <span className="font-lato text-white text-[10px] tracking-[0.3em] uppercase border-b border-white/60 pb-0.5">
              Explore
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-7 relative overflow-hidden">
          {/* Background fill on hover */}
          <div className="absolute inset-0 bg-[#faf8f5] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

          <div className="relative z-10">
            {/* Accent line */}
            <motion.div
              className="h-px mb-5"
              style={{ backgroundColor: service.accent }}
              initial={{ width: "2rem" }}
              whileInView={{ width: "2rem" }}
              whileHover={{ width: "3.5rem" }}
              transition={{ duration: 0.3 }}
            />

            <h3 className="font-cormorant text-[#3a2e2a] font-light text-2xl leading-snug mb-3 group-hover:text-[#C9A96E] transition-colors duration-300">
              {service.title}
            </h3>

            <p className="font-lato text-[#6b5f5a] text-sm leading-relaxed">
              {service.description}
            </p>

            <motion.div
              className="flex items-center gap-2 mt-5"
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 0 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-lato text-[10px] tracking-[0.2em] uppercase text-[#C9A96E]">
                Learn More
              </span>
              <span className="text-[#C9A96E] text-xs">→</span>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
