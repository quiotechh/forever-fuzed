import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Youtube, Mail, Phone, Clock, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  { label: "Decor & Experience Design", href: "/services#decor" },
  { label: "Photography & Videography", href: "/services#photography" },
  { label: "Guest Logistics", href: "/services#logistics" },
  { label: "Entertainment Curation", href: "/services#entertainment" },
  { label: "Wardrobe & Styling", href: "/services#wardrobe" },
  { label: "Surprise Proposals", href: "/services#proposals" },
];

const socials = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1f1a] text-white">

      {/* Top ribbon */}
      <div className="h-[3px] bg-gradient-to-r from-[#C9A96E] via-[#F2A7B0] to-[#9CA195]" />

      {/* Logo + tagline */}
      <div className="flex flex-col items-center text-center pt-16 pb-12 px-6 border-b border-white/8">
        <div className="relative w-40 h-16 mb-6">
          <Image
            src="/logo/logo-2.png"
            alt="Forever Fuzed"
            fill
            sizes="160px"
            loading="eager"
            className="object-contain scale-3d scale-200 brightness-110"
          />
        </div>
        {/* <p className="font-cormorant italic text-white/50 text-lg md:text-xl font-light max-w-md leading-relaxed">
          An experience that lasts a lifetime.
        </p> */}
        {/* Decorative */}
        <div className="flex items-center gap-3 mt-6">
          <div className="h-px w-10 bg-[#F2A7B0]/40" />
          <div className="w-1 h-1 rotate-45 bg-[#C9A96E]/60" />
          <div className="h-px w-10 bg-[#9CA195]/40" />
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

        {/* Quick Links */}
        <div>
          <h4 className="font-lato text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] mb-6">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-lato text-sm text-white/55 hover:text-[#F2A7B0] transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-lato text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] mb-6">
            Services
          </h4>
          <ul className="flex flex-col gap-3">
            {services.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="font-lato text-sm text-white/55 hover:text-[#F2A7B0] transition-colors duration-200"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-lato text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] mb-6">
            Get In Touch
          </h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <Phone className="w-3.5 h-3.5 text-[#C9A96E] mt-0.5 shrink-0" />
              <div className="flex flex-col gap-0.5">
                <span className="font-lato text-[9px] tracking-[0.15em] uppercase text-white/35">
                  Canada
                </span>
                <a
                  href="tel:+16479019915"
                  className="font-lato text-sm text-white/55 hover:text-[#F2A7B0] transition-colors"
                >
                  +1 647 901 9915
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-3.5 h-3.5 text-[#C9A96E] mt-0.5 shrink-0" />
              <a
                href="mailto:hello@foreverfuzed.com"
                className="font-lato text-sm text-white/55 hover:text-[#F2A7B0] transition-colors"
              >
                hello@foreverfuzed.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-3.5 h-3.5 text-[#C9A96E] mt-0.5 shrink-0" />
              <div className="flex flex-col gap-0.5">
                <span className="font-lato text-[9px] tracking-[0.15em] uppercase text-white/35">
                  Hours
                </span>
                <span className="font-lato text-sm text-white/55">
                  11:00 AM – 8:00 PM
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-3.5 h-3.5 text-[#C9A96E] mt-0.5 shrink-0" />
              <span className="font-lato text-sm text-white/55 leading-relaxed">
                Suite-56, 6733 Mississauga Road,<br />
                Mississauga, Ontario, L5N 6J5
              </span>
            </li>
          </ul>
        </div>

        {/* Follow */}
        <div>
          <h4 className="font-lato text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] mb-6">
            Follow Us
          </h4>
          <div className="flex items-center gap-3 mb-8">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/45 hover:border-[#F2A7B0] hover:text-[#F2A7B0] transition-all duration-300"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Enquiry CTA — desktop only here */}
          <Link href="/contact" className="hidden lg:block">
            <button className="relative overflow-hidden group font-lato text-[9.5px] tracking-[0.25em] uppercase px-6 py-3 border border-[#C9A96E]/60 text-[#C9A96E] transition-all duration-300 w-full">
              <span className="absolute inset-0 bg-[#C9A96E] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative group-hover:text-white transition-colors duration-300">
                Book a Consultation
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* Enquiry CTA — mobile full width */}
      <div className="lg:hidden px-6 pb-10">
        <Link href="/contact">
          <button className="relative overflow-hidden group font-lato text-[9.5px] tracking-[0.25em] uppercase px-6 py-4 border border-[#C9A96E]/60 text-[#C9A96E] transition-all duration-300 w-full">
            <span className="absolute inset-0 bg-[#C9A96E] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <span className="relative group-hover:text-white transition-colors duration-300">
              Book a Consultation
            </span>
          </button>
        </Link>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 px-6 lg:px-10 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-lato text-[11px] text-white/30 tracking-wide">
            © {new Date().getFullYear()} Forever Fuzed. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="font-lato text-[11px] text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-lato text-[11px] text-white/30 hover:text-white/60 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Made by Quiotech */}
      <div className="pb-6 flex items-center justify-center gap-1.5">
        <span className="font-lato text-[10px] text-white/20 tracking-wide">
          Made with
        </span>
        <span className="text-[#F2A7B0] text-xs">♥</span>
        <span className="font-lato text-[10px] text-white/20 tracking-wide">
          by
        </span>
        <Link
          href="https://www.quiotech.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-lato text-[10px] text-white/35 hover:text-[#C9A96E] transition-colors tracking-wide underline underline-offset-2"
        >
          Quiotech
        </Link>
      </div>

    </footer>
  );
}