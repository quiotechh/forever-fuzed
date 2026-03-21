"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Send,
  ChevronDown,
} from "lucide-react";

// ── Design tokens ──────────────────────────────────────────────────────────
const gold = "#C9A96E";
const rose = "#F2A7B0";
const sage = "#9CA195";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

// ── Google Maps embed URL (Mississauga, ON) ────────────────────────────────
const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.328!2d-79.74060319999999!3d43.60279639999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b6a82723a7a1f%3A0x455ff38c547a85de!2s6733+Mississauga+Rd+%2356%2C+Mississauga%2C+ON+L5N+6J5%2C+Canada!5e0!3m2!1sen!2sca!4v1711234567890!5m2!1sen!2sca";

// ──────────────────────────────────────────────────────────────────────────
// 1. HERO — compact, image-backed, centred
// ──────────────────────────────────────────────────────────────────────────
function ContactHero() {
  return (
    <section className="relative h-[65vh] md:h-screen min-h-[520px] md:min-h-[680px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80"
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-[#3D4F3C]/25" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/30 to-transparent" />
      </div>

      {/* Corner flourishes */}
      <div className="absolute top-24 left-6 md:left-10 w-14 h-14 border-l border-t border-[#C9A96E]/30 pointer-events-none z-20" />
      <div className="absolute top-24 right-6 md:right-10 w-14 h-14 border-r border-t border-[#C9A96E]/30 pointer-events-none z-20" />

      <div className="relative z-10 w-full pb-16 md:pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-4 mb-7"
        >
          <div className="h-px w-12 bg-[#C9A96E]" />
          <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.38em] uppercase">
            Get In Touch
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-cormorant font-light text-white leading-[0.93]
                     text-[clamp(3rem,8.5vw,7rem)] max-w-4xl mb-7"
        >
          Let&rsquo;s Start
          <br />
          Planning Your{" "}
          <span
            className="font-cormorant italic"
            style={{ WebkitTextStroke: "1.5px #C9A96E", color: "transparent" }}
          >
            Dream.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.58 }}
          className="font-lato text-white/55 text-sm md:text-base leading-relaxed max-w-md tracking-wide"
        >
          Share your vision and we&rsquo;ll respond within 24 hours to begin crafting
          your once-in-a-lifetime celebration.
        </motion.p>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// 2. CONTACT INFO STRIP — 4 cards on cream bg
// ──────────────────────────────────────────────────────────────────────────
const infoCards = [
  {
    icon: Phone,
    label: "Call Us",
    primary: "+1 647 901 9915",
    secondary: "Canada",
    href: "tel:+16479019915",
    accent: gold,
  },
  {
    icon: Mail,
    label: "Email Us",
    primary: "hello@foreverfuzed.com",
    secondary: "We reply within 24 hrs",
    href: "mailto:hello@foreverfuzed.com",
    accent: rose,
  },
  {
    icon: Clock,
    label: "Office Hours",
    primary: "11:00 AM – 8:00 PM",
    secondary: "Monday – Saturday",
    href: null,
    accent: sage,
  },
  {
    icon: MapPin,
    label: "Our Office",
    primary: "Suite-56, 6733 Mississauga Rd",
    secondary: "Mississauga, ON L5N 6J5",
    href: "https://www.google.com/maps/place/6733+Mississauga+Rd+%2356,+Mississauga,+ON+L5N+6J5,+Canada",
    accent: gold,
  },
];

function InfoStrip() {
  return (
    <div className="bg-[#FAF8F5] px-6 py-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 -mt-10 relative z-20 gap-0 border border-[#e8ddd5]">
        {infoCards.map((card, i) => {
          const Icon = card.icon;
          const inner = (
            <div
              className={[
                "group bg-white p-8 flex flex-col gap-3 h-full",
                "border-b border-[#e8ddd5]",
                i < 3 ? "lg:border-r lg:border-[#e8ddd5]" : "",
                i % 2 === 0 ? "sm:border-r sm:border-[#e8ddd5]" : "",
                i < 3 ? "lg:border-r" : "lg:border-r-0",
                "hover:bg-[#fdf9f5] transition-colors duration-300 cursor-default",
              ].join(" ")}
            >
              {/* Accent top line */}
              <div
                className="h-px w-8 transition-all duration-500 group-hover:w-14 mb-2"
                style={{ backgroundColor: card.accent }}
              />
              <Icon className="w-5 h-5" style={{ color: card.accent }} />
              <p className="font-lato text-[10px] tracking-[0.25em] uppercase text-[#9a8f8a]">
                {card.label}
              </p>
              <p className="font-cormorant text-[#3a2e2a] text-xl font-light leading-snug">
                {card.primary}
              </p>
              <p className="font-lato text-[#9a8f8a] text-xs tracking-wide">
                {card.secondary}
              </p>
            </div>
          );

          return (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="h-full"
            >
              {card.href ? (
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block h-full"
                >
                  {inner}
                </a>
              ) : (
                inner
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// 3. FORM + SIDE INFO — two-column
// ──────────────────────────────────────────────────────────────────────────

// Reusable input component (luxury bottom-border style)
function Field({
  label,
  id,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-lato text-[10px] tracking-[0.25em] uppercase text-[#9a8f8a]"
      >
        {label}
        {required && <span className="text-[#C9A96E] ml-1">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border-b border-[#e8ddd5] pb-3 pt-1 font-lato text-[#3a2e2a] text-sm placeholder:text-[#c4b8b0] outline-none
                   focus:border-[#C9A96E] transition-colors duration-300"
      />
    </div>
  );
}

// Reusable select component
function SelectField({
  label,
  id,
  options,
  required = false,
}: {
  label: string;
  id: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-lato text-[10px] tracking-[0.25em] uppercase text-[#9a8f8a]"
      >
        {label}
        {required && <span className="text-[#C9A96E] ml-1">*</span>}
      </label>
      <div className="relative">
        <select
          id={id}
          name={id}
          required={required}
          defaultValue=""
          className="w-full appearance-none bg-transparent border-b border-[#e8ddd5] pb-3 pt-1 font-lato text-[#3a2e2a] text-sm outline-none
                     focus:border-[#C9A96E] transition-colors duration-300 cursor-pointer pr-6"
        >
          <option value="" disabled className="text-[#c4b8b0]">
            Select…
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-0 top-2 w-4 h-4 text-[#C9A96E] pointer-events-none" />
      </div>
    </div>
  );
}

function FormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Functional integration to be added later
    setSubmitted(true);
  };

  return (
    <section className="bg-[#FAF8F5] py-24 md:py-36 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 lg:gap-20 items-start">

        {/* ── Left: Enquiry Form ─────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-10 bg-[#C9A96E]" />
            <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.38em] uppercase">
              Enquiry Form
            </span>
          </div>

          <h2 className="font-cormorant text-[#3a2e2a] font-light text-4xl sm:text-5xl leading-[1.05] mb-4">
            Tell Us About
            <br />
            <span className="italic text-[#9CA195]">Your Celebration</span>
          </h2>
          <p className="font-lato text-[#6b5f5a] text-sm leading-relaxed mb-14 max-w-lg">
            Fill in the details below and our team will reach out within 24 hours
            to schedule a complimentary consultation call.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-[#C9A96E]/40 bg-white px-10 py-14 text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#C9A96E]" />
                <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A96E]" />
                <div className="h-px w-10 bg-[#C9A96E]" />
              </div>
              <p className="font-cormorant text-[#3a2e2a] text-3xl font-light mb-4">
                Thank You, We&rsquo;ll Be In Touch
              </p>
              <p className="font-lato text-[#6b5f5a] text-sm leading-relaxed max-w-sm mx-auto">
                Your enquiry has been received. Our team will reach out within 24 hours
                to begin crafting your perfect celebration.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-9">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-9">
                <Field label="Full Name" id="name" placeholder="Your full name" required />
                <Field label="Email Address" id="email" type="email" placeholder="your@email.com" required />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-9">
                <Field label="Phone / WhatsApp" id="phone" type="tel" placeholder="+1 000 000 0000" required />
                <SelectField
                  label="Country of Residence"
                  id="country"
                  required
                  options={["Canada", "USA", "United Kingdom", "Australia", "India", "Other"]}
                />
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-9">
                <SelectField
                  label="Type of Event"
                  id="event_type"
                  required
                  options={[
                    "Wedding",
                    "Engagement Ceremony",
                    "Reception",
                    "Pre-Wedding Shoot",
                    "Destination Celebration",
                    "Other",
                  ]}
                />
                <Field label="Approximate Wedding Date" id="wedding_date" type="date" />
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-9">
                <SelectField
                  label="Preferred Destination"
                  id="destination"
                  options={["Rajasthan", "Goa", "Mumbai", "Kerala", "Delhi / NCR", "Other in India", "Still Deciding"]}
                />
                <SelectField
                  label="Estimated Guest Count"
                  id="guests"
                  options={["Under 100", "100 – 250", "250 – 500", "500 – 1000", "1000+"]}
                />
              </div>

              {/* Row 5 */}
              <SelectField
                label="Approximate Budget"
                id="budget"
                options={[
                  "₹25 – 50 Lakhs",
                  "₹50 Lakhs – 1 Crore",
                  "₹1 – 2 Crore",
                  "₹2 – 5 Crore",
                  "₹5 Crore+",
                  "Let's Discuss",
                ]}
              />

              {/* Row 6 — How did you hear */}
              <SelectField
                label="How Did You Hear About Us?"
                id="referral"
                options={[
                  "Instagram",
                  "Facebook",
                  "Google Search",
                  "Word of Mouth",
                  "Previous Client",
                  "Wedding Blog / Magazine",
                  "Other",
                ]}
              />

              {/* Row 7 — Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-lato text-[10px] tracking-[0.25em] uppercase text-[#9a8f8a]"
                >
                  Your Vision &amp; Message <span className="text-[#C9A96E]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your dream wedding — the vibe, the scale, the emotions you want to capture…"
                  className="w-full bg-transparent border-b border-[#e8ddd5] pb-3 pt-1 font-lato text-[#3a2e2a] text-sm
                             placeholder:text-[#c4b8b0] outline-none resize-none
                             focus:border-[#C9A96E] transition-colors duration-300"
                />
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="relative overflow-hidden group font-lato text-[11px] tracking-[0.28em] uppercase
                             px-12 py-4 bg-[#3a2e2a] text-white transition-all duration-300
                             hover:shadow-xl hover:shadow-[#3a2e2a]/20 flex items-center gap-3"
                >
                  <span className="absolute inset-0 bg-[#C9A96E] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                  <span className="relative flex items-center gap-3">
                    Send Enquiry
                    <Send className="w-3.5 h-3.5" />
                  </span>
                </button>
                <p className="font-lato text-[10px] text-[#9a8f8a] tracking-wide mt-4">
                  We respect your privacy. Your information is never shared with third parties.
                </p>
              </div>
            </form>
          )}
        </motion.div>

        {/* ── Right: Info sidebar ────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-10 lg:sticky lg:top-28"
        >
          {/* Contact details card */}
          <div className="bg-white border border-[#e8ddd5] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#C9A96E]" />
              <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.35em] uppercase">
                Contact Details
              </span>
            </div>

            <ul className="flex flex-col gap-7">
              <li className="flex items-start gap-4">
                <div className="w-9 h-9 border border-[#e8ddd5] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#C9A96E]" />
                </div>
                <div>
                  <p className="font-lato text-[9px] tracking-[0.2em] uppercase text-[#9a8f8a] mb-1">
                    Call / WhatsApp
                  </p>
                  <a
                    href="tel:+16479019915"
                    className="font-cormorant text-[#3a2e2a] text-xl font-light hover:text-[#C9A96E] transition-colors"
                  >
                    +1 647 901 9915
                  </a>
                  <p className="font-lato text-[10px] text-[#9a8f8a] mt-0.5">Canada</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-9 h-9 border border-[#e8ddd5] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#F2A7B0]" />
                </div>
                <div>
                  <p className="font-lato text-[9px] tracking-[0.2em] uppercase text-[#9a8f8a] mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:hello@foreverfuzed.com"
                    className="font-cormorant text-[#3a2e2a] text-xl font-light hover:text-[#C9A96E] transition-colors break-all"
                  >
                    hello@foreverfuzed.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-9 h-9 border border-[#e8ddd5] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-[#9CA195]" />
                </div>
                <div>
                  <p className="font-lato text-[9px] tracking-[0.2em] uppercase text-[#9a8f8a] mb-1">
                    Office Hours
                  </p>
                  <p className="font-cormorant text-[#3a2e2a] text-xl font-light">
                    11:00 AM – 8:00 PM
                  </p>
                  <p className="font-lato text-[10px] text-[#9a8f8a] mt-0.5">
                    Monday – Saturday
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-9 h-9 border border-[#e8ddd5] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#C9A96E]" />
                </div>
                <div>
                  <p className="font-lato text-[9px] tracking-[0.2em] uppercase text-[#9a8f8a] mb-1">
                    Office
                  </p>
                  <p className="font-cormorant text-[#3a2e2a] text-xl font-light leading-snug">
                    Suite-56, 6733 Mississauga Road
                  </p>
                  <p className="font-lato text-[10px] text-[#9a8f8a] mt-0.5">
                    Mississauga, Ontario, L5N 6J5, Canada
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div className="bg-white border border-[#e8ddd5] p-8">
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-8 bg-[#F2A7B0]" />
              <span className="font-lato text-[#9a8f8a] text-[10px] tracking-[0.35em] uppercase">
                Follow Our Journey
              </span>
            </div>
            <div className="flex items-center gap-3">
              {[
                { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 border border-[#e8ddd5] flex items-center justify-center text-[#9a8f8a] hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="font-lato text-[10px] text-[#9a8f8a] tracking-wide mt-5 leading-relaxed">
              Follow us on Instagram for real weddings, behind-the-scenes moments, and décor inspiration.
            </p>
          </div>

          {/* WhatsApp quick connect */}
          <a
            href="https://wa.me/16479019915"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group flex items-center justify-center gap-3 border border-[#9CA195]/60 bg-white py-4 px-6 transition-all duration-300 hover:shadow-md"
          >
            <span className="absolute inset-0 bg-[#9CA195] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <span className="relative flex items-center gap-3">
              {/* WhatsApp icon */}
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#9CA195] group-hover:fill-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="font-lato text-[10.5px] tracking-[0.25em] uppercase text-[#9CA195] group-hover:text-white transition-colors duration-300">
                Chat on WhatsApp
              </span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// 4. WHAT HAPPENS NEXT — 3-step process
// ──────────────────────────────────────────────────────────────────────────
const steps = [
  {
    num: "01",
    title: "We Receive Your Enquiry",
    desc: "As soon as you submit, our team is notified. We review every enquiry personally — no bots, no auto-responders.",
    accent: gold,
  },
  {
    num: "02",
    title: "Complimentary Consultation Call",
    desc: "Within 24 hours we schedule a one-on-one call to understand your vision, timeline, and what makes your story unique.",
    accent: rose,
  },
  {
    num: "03",
    title: "Your Journey Begins",
    desc: "We craft a personalized proposal aligned with your dream, your culture, and your budget — and we take it from there.",
    accent: sage,
  },
];

function NextStepsSection() {
  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
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
              What Happens Next
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
                       text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.08]"
          >
            Your Journey to{" "}
            <span className="italic text-[#9CA195]">Forever</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#e8ddd5]">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className={[
                "group p-10 md:p-12 bg-[#FAF8F5] hover:bg-white transition-colors duration-300 relative",
                i < 2 ? "border-b border-[#e8ddd5] md:border-b-0 md:border-r" : "",
              ].join(" ")}
            >
              {/* Faded large number */}
              <p
                className="font-cormorant text-[96px] font-light leading-none mb-4 select-none"
                style={{ color: `${step.accent}18` }}
              >
                {step.num}
              </p>

              {/* Accent line */}
              <div
                className="h-px w-8 mb-7 transition-all duration-500 group-hover:w-16"
                style={{ backgroundColor: step.accent }}
              />

              <h3 className="font-cormorant text-[#3a2e2a] font-light text-2xl md:text-3xl leading-snug mb-4">
                {step.title}
              </h3>
              <p className="font-lato text-[#6b5f5a] text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// 5. MAP SECTION — embedded Google Maps + address details
// ──────────────────────────────────────────────────────────────────────────
function MapSection() {
  return (
    <section className="bg-[#FAF8F5] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-10 bg-[#C9A96E]" />
          <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.38em] uppercase">
            Find Us
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.08 }}
          className="font-cormorant text-[#3a2e2a] font-light
                     text-[clamp(2.2rem,5vw,4rem)] leading-[1.08] mb-14"
        >
          Visit Our{" "}
          <span className="italic text-[#9CA195]">Mississauga Office</span>
        </motion.h2>

        {/* Map + address grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-0 border border-[#e8ddd5] overflow-hidden">

          {/* Map iframe */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[360px] md:h-[460px] lg:h-auto min-h-[400px]"
          >
            <iframe
              src={MAP_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Forever Fuzed Office Location"
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>

          {/* Address sidebar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-[#1a1f1a] p-10 flex flex-col justify-between gap-10"
          >
            <div>
              {/* Gold ribbon top */}
              <div className="h-px w-full bg-linear-to-r from-[#C9A96E] via-[#F2A7B0] to-[#9CA195] mb-10" />

              <p className="font-lato text-[9px] tracking-[0.3em] uppercase text-[#C9A96E] mb-5">
                Office Address
              </p>

              <p className="font-cormorant text-white font-light text-2xl leading-snug mb-2">
                Suite-56, 6733 Mississauga Road
              </p>
              <p className="font-lato text-white/55 text-sm leading-relaxed">
                Mississauga, Ontario
                <br />
                L5N 6J5, Canada
              </p>

              {/* Divider */}
              <div className="my-8 h-px bg-white/10" />

              {/* Hours */}
              <p className="font-lato text-[9px] tracking-[0.3em] uppercase text-[#9CA195] mb-4">
                Office Hours
              </p>
              <p className="font-cormorant text-white font-light text-xl">
                11:00 AM – 8:00 PM
              </p>
              <p className="font-lato text-white/45 text-xs mt-1">
                Monday – Saturday
              </p>

              {/* Divider */}
              <div className="my-8 h-px bg-white/10" />

              {/* Phone */}
              <p className="font-lato text-[9px] tracking-[0.3em] uppercase text-[#F2A7B0] mb-4">
                Phone
              </p>
              <a
                href="tel:+16479019915"
                className="font-cormorant text-white font-light text-xl hover:text-[#C9A96E] transition-colors"
              >
                +1 647 901 9915
              </a>
            </div>

            {/* Get Directions CTA */}
            <a
              href="https://www.google.com/maps/place/6733+Mississauga+Rd+%2356,+Mississauga,+ON+L5N+6J5,+Canada"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group font-lato text-[10px] tracking-[0.28em] uppercase
                         px-6 py-3.5 border border-[#C9A96E]/50 text-[#C9A96E] text-center
                         transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span className="absolute inset-0 bg-[#C9A96E] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <MapPin className="w-3.5 h-3.5 relative group-hover:text-white transition-colors duration-300" />
              <span className="relative group-hover:text-white transition-colors duration-300">
                Get Directions
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// 6. CLOSING CTA STRIP — trust + social proof
// ──────────────────────────────────────────────────────────────────────────
function ClosingStrip() {
  return (
    <section className="relative py-32 md:py-40 px-6 flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80"
          alt=""
          fill
          className="object-cover object-center"
          quality={85}
        />
        <div className="absolute inset-0 bg-black/63" />
        <div className="absolute inset-0 bg-[#3D4F3C]/30" />
      </div>

      {/* Corner flourishes */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-[#C9A96E]/25 pointer-events-none" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-[#C9A96E]/25 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-[#C9A96E]/25 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-[#C9A96E]/25 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Trust stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-10 md:gap-16 mb-16"
        >
          {[
            { val: "30+", label: "Celebrations Curated" },
            { val: "10+", label: "Years Experience" },
            { val: "100%", label: "Client Satisfaction" },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <p className="font-cormorant text-[#C9A96E] text-5xl font-light">{val}</p>
              <p className="font-lato text-white/50 text-[10px] tracking-[0.25em] uppercase mt-1">
                {label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Divider ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="h-px w-10 bg-[#C9A96E]/50" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A96E]/50" />
          <div className="h-px w-10 bg-[#C9A96E]/50" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="font-cormorant text-white font-light
                     text-[clamp(2.5rem,7vw,5rem)] leading-[1.08] mb-8"
        >
          Not Sure Yet?
          <br />
          <span className="italic text-[#F2A7B0]">Let&rsquo;s Just Talk.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="font-lato text-white/55 text-sm leading-relaxed mb-12 tracking-wide max-w-lg mx-auto"
        >
          No commitments, no pressure. A simple conversation about your dream
          celebration — and what&rsquo;s possible when you have the right team behind you.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.32 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="tel:+16479019915">
            <button className="relative overflow-hidden group font-lato text-[11px] tracking-[0.28em] uppercase px-10 py-4 bg-[#C9A96E] text-white transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A96E]/30">
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" /> Call Us Now
              </span>
            </button>
          </a>
          <Link href="/about">
            <button className="relative overflow-hidden group font-lato text-[11px] tracking-[0.28em] uppercase px-10 py-4 border border-white/50 text-white transition-all duration-300 hover:border-[#F2A7B0]">
              <span className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative">Our Story</span>
            </button>
          </Link>
        </motion.div>

        {/* Bottom tri-color ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mt-14"
        >
          <div className="h-px w-8 bg-[#F2A7B0]/40" />
          <div className="w-1 h-1 rotate-45 bg-[#F2A7B0]/40" />
          <div className="h-px w-8 bg-[#9CA195]/40" />
          <div className="w-1 h-1 rotate-45 bg-[#9CA195]/40" />
          <div className="h-px w-8 bg-[#C9A96E]/40" />
        </motion.div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// PAGE EXPORT
// ──────────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <InfoStrip />
      <FormSection />
      <NextStepsSection />
      <MapSection />
      <ClosingStrip />
    </main>
  );
}
