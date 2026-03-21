"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const serviceLinks = [
  {
    label: "Wedding Planning & Core Services",
    href: "/services/wedding-planning",
  },
  {
    label: "Decor & Experience Design",
    href: "/services/decor-experience-design",
  },
  {
    label: "Photography & Videography",
    href: "/services/photography-videography",
  },
  {
    label: "Catering & Culinary Experience",
    href: "/services/catering-culinary",
  },
  {
    label: "Entertainment Curation",
    href: "/services/entertainment-curation",
  },
  { label: "Wardrobe & Styling", href: "/services/wardrobe-styling" },
  { label: "Dance & Choreography", href: "/services/dance-choreography" },
  { label: "Mehendi Storytelling Designs", href: "/services/mehendi-designs" },
  { label: "& More", href: "/services" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Founder", href: "/about-founder" },
  { label: "Blogs", href: "/blogs" },
  { label: "Feature Media", href: "/feature-media" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const WHATSAPP_NUMBER = "919999999999"; // replace with actual number
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20services.`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDesktopDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDesktopDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDesktopDropdownOpen(false);
    }, 200);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0d0d14] ${
        scrolled ? "shadow-lg backdrop-blur-md bg-opacity-95 py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <Image
            src="/logo/logo-2.png"
            alt="Forever Fuzed"
            width={120}
            height={120}
            className="object-contain h-12 w-auto"
            priority
          />
        </Link>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <li
                key={link.href}
                ref={dropdownRef}
                className="relative flex items-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setDesktopDropdownOpen((prev) => !prev)}
                  className="relative flex items-center gap-1 text-white/70 hover:text-[#f472b6] text-[11px] tracking-[0.18em] uppercase font-medium transition-colors duration-300 cursor-pointer"
                >
                  {link.label}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-300 ${
                      desktopDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* ── Desktop Dropdown ── */}
                <AnimatePresence>
                  {desktopDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                      <div className="bg-[#0d0d14] border border-white/10 shadow-2xl w-72">
                        {/* View All Services link */}
                        <Link
                          href="/services"
                          onClick={() => setDesktopDropdownOpen(false)}
                          className="flex items-center justify-between px-5 py-3 border-b border-white/10 text-white text-[10px] tracking-[0.25em] uppercase font-semibold hover:text-[#f472b6] hover:bg-white/5 transition-colors duration-200"
                        >
                          All Services
                          <span className="text-white/30 text-[9px]">
                            {serviceLinks.length}
                          </span>
                        </Link>

                        {/* Service Links */}
                        <div className="py-1 max-h-[70vh] overflow-y-auto">
                          {serviceLinks.map((service, i) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setDesktopDropdownOpen(false)}
                              className="group flex items-center gap-3 px-5 py-2.5 text-white/60 hover:text-[#f472b6] hover:bg-white/5 transition-all duration-200"
                            >
                              <span className="text-white/20 text-[9px] font-mono shrink-0">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="text-[11px] tracking-wide font-medium">
                                {service.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-white/70 hover:text-[#f472b6] text-[11px] tracking-[0.18em] uppercase font-medium transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-[#f472b6] after:transition-all after:duration-300 hover:after:w-full pb-1"
                >
                  {link.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        {/* Desktop WhatsApp CTA */}
        <div className="hidden lg:block shrink-0">
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-[10px] tracking-[0.18em] uppercase font-semibold px-5 py-3 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            Enquiry
          </Link>
        </div>

        {/* ── Mobile Hamburger ── */}
        <div className="lg:hidden">
          {mounted && (
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 hover:text-white"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[#0d0d14] border-l border-white/10 w-80 flex flex-col p-0 overflow-y-auto"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                {/* Logo in sheet */}
                <div className="flex items-center gap-3 p-8 pb-6 border-b border-white/10">
                  <Image
                    src="/logo/logo-1.png"
                    alt="Forever Fuzed"
                    width={44}
                    height={44}
                    className="object-contain"
                  />
                </div>

                {/* Mobile Nav Links */}
                <div className="flex flex-col px-8 py-6 flex-1">
                  {navLinks.map((link) =>
                    link.hasDropdown ? (
                      <div key={link.href} className="flex flex-col">
                        <button
                          onClick={() =>
                            setMobileServicesOpen((prev) => !prev)
                          }
                          className="flex items-center justify-between text-white font-serif text-xl font-medium tracking-wide py-3 cursor-pointer hover:text-[#f472b6] transition-colors duration-300"
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-white/40 transition-transform duration-300 ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                duration: 0.3,
                                ease: [0.76, 0, 0.24, 1],
                              }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col border-l border-white/10 ml-2 pl-4 pb-2">
                                <Link
                                  href="/services"
                                  onClick={() => setOpen(false)}
                                  className="text-white/70 text-xs tracking-[0.2em] uppercase font-semibold py-2 hover:text-[#f472b6] transition-colors duration-200"
                                >
                                  View All Services
                                </Link>

                                <div className="w-full h-px bg-white/10 my-1" />

                                {serviceLinks.map((service, i) => (
                                  <Link
                                    key={service.href}
                                    href={service.href}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-3 text-white/50 hover:text-[#f472b6] text-sm py-2 transition-colors duration-200"
                                  >
                                    <span className="text-white/20 text-[9px] font-mono shrink-0">
                                      {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="font-light">
                                      {service.label}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="text-white font-serif text-xl font-medium hover:text-[#f472b6] transition-colors duration-300 tracking-wide py-3"
                      >
                        {link.label}
                      </Link>
                    ),
                  )}
                </div>

                {/* Mobile WhatsApp CTA */}
                <div className="p-8 pt-0">
                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-[10px] tracking-[0.22em] uppercase font-semibold px-6 py-4 transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Enquiry
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </nav>
  );
}
