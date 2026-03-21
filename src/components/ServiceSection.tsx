"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Decor & Experience Design",
    description:
      "From mandap to majestic stage — every visual element is conceptualized and executed to tell your story.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    accent: "#9CA195",
    href: "/services#decor",
  },
  {
    number: "02",
    title: "Photography & Videography",
    description:
      "Cinematic films and candid photography that capture every stolen glance, every tear, every laugh.",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
    accent: "#F2A7B0",
    href: "/services#photography",
  },
  {
    number: "03",
    title: "Guest Logistics & Hospitality",
    description:
      "Flights, hotels, transfers, and concierge — your guests experience seamless luxury from arrival to farewell.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    accent: "#C9A96E",
    href: "/services#logistics",
  },
  {
    number: "04",
    title: "Entertainment Curation",
    description:
      "Celebrity artists, live bands, Sangeet direction — we choreograph every moment of joy.",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80",
    accent: "#9CA195",
    href: "/services#entertainment",
  },
  {
    number: "05",
    title: "Wardrobe & Styling",
    description:
      "Custom bridal outfits, family coordination, and designer collaborations — dressed to perfection.",
    image: "https://images.unsplash.com/photo-1519657337289-077653f724ed?w=800&q=80",
    accent: "#F2A7B0",
    href: "/services#wardrobe",
  },
  {
    number: "06",
    title: "Luxury Wedding Hampers",
    description:
      "Thoughtfully curated hampers for guests, family, and VIPs — with custom packaging and personalized branding.",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800&q=80",
    accent: "#C9A96E",
    href: "/services#hampers",
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

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8ddd5]"
        >
          {services.map((service, i) => (
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
      <Link href={service.href} className="group block bg-white overflow-hidden">

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