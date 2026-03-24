"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";

const services = [
  {
    emoji: "🌸",
    label: "Wedding Styling & Design",
    href: "/services/wedding-styling",
  },
  {
    emoji: "🎁",
    label: "Luxury Gifting & Wedding Hampers",
    href: "/services/luxury-gifting",
  },
  {
    emoji: "🎭",
    label: "Curated Entertainment Experiences",
    href: "/services/entertainment",
  },
  {
    emoji: "✈️",
    label: "Seamless Event Logistics & Guest Management",
    href: "/services/event-logistics",
  },
  {
    emoji: "💎",
    label: "Premium Vendor Curation & Management",
    href: "/services/vendor-curation",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Feature Media", href: "/media" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Ribbon */}
      <div className="fixed top-0 left-0 right-0 z-50 h-0.75 bg-linear-to-r from-[#C9A96E] via-[#F2A7B0] to-[#9CA195]" />

      <header
        className={cn(
          "fixed top-0.75 left-0 right-0 z-40 transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
            : "bg-transparent py-4",
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo — left */}
          <Link href="/" className="group shrink-0">
            <div
              className={cn(
                "relative transition-all duration-500",
                scrolled ? "w-24 h-12" : "w-28 h-14",
              )}
            >
              <Image
                src="/logo/logo-2.png"
                alt="Forever Fuzed"
                fill
                sizes="128px"
                className="object-contain transition-transform scale-125 duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav — all on right */}
          <div className="hidden lg:flex items-center gap-7">
            <NavLink href="/" scrolled={scrolled}>
              Home
            </NavLink>
            <NavLink href="/about" scrolled={scrolled}>
              About Us
            </NavLink>

            {/* Services dropdown */}
            <div className="relative group/services">
              <button
                className={cn(
                  "flex items-center gap-1 text-[11.5px] tracking-[0.15em] uppercase font-lato transition-colors duration-300",
                  scrolled
                    ? "text-[#4a3f3a] hover:text-[#C9A96E]"
                    : "text-white/90 hover:text-white",
                )}
              >
                Services
                <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover/services:rotate-180" />
              </button>

              <div className="absolute top-full right-0 mt-4 w-72 bg-white/98 backdrop-blur-sm border border-[#e8ddd5] shadow-lg opacity-0 invisible group-hover/services:opacity-100 group-hover/services:visible translate-y-2 group-hover/services:translate-y-0 transition-all duration-300 z-50">
                <div className="h-0.5 bg-linear-to-r from-[#F2A7B0] via-[#C9A96E] to-[#9CA195]" />
                <div className="py-3 px-1">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#faf8f5] group/item transition-colors duration-200"
                    >
                      <span className="text-base w-5 shrink-0">{s.emoji}</span>
                      <span className="text-[11px] tracking-widest uppercase text-[#4a3f3a] group-hover/item:text-[#C9A96E] transition-colors duration-200 font-lato">
                        {s.label}
                      </span>
                    </Link>
                  ))}
                  <div className="mx-4 mt-2 mb-1 pt-2 border-t border-[#ede6df]">
                    <Link
                      href="/services"
                      className="flex items-center justify-center gap-2 py-2 text-[10px] tracking-[0.2em] uppercase text-[#C9A96E] hover:text-[#b8975e] transition-colors font-lato"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <NavLink href="/blogs" scrolled={scrolled}>
              Blogs
            </NavLink>
            <NavLink href="/media" scrolled={scrolled}>
              Feature Media
            </NavLink>
            <NavLink href="/gallery" scrolled={scrolled}>
              Gallery
            </NavLink>
            <NavLink href="/contact" scrolled={scrolled}>
              Contact Us
            </NavLink>
          </div>

          {/* Mobile hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className={cn(
                  "lg:hidden p-2 transition-colors",
                  scrolled ? "text-[#3a2e2a]" : "text-white",
                )}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-75 bg-[#faf9f7] border-l border-[#e8ddd5] p-0 overflow-y-auto"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              {/* Mobile logo */}
              <div className="flex items-center px-7 py-5 border-b border-[#ede6df]">
                <div className="relative w-32 h-12">
                  <Image
                    src="/logo/logo-2.png"
                    alt="Forever Fuzed"
                    fill
                    sizes="128px"
                    className="object-contain object-left"
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="mx-7 my-4 flex items-center gap-2">
                <div className="h-px flex-1 bg-linear-to-r from-[#F2A7B0] via-[#C9A96E] to-[#9CA195]" />
                <span className="text-[#C9A96E] text-xs">✦</span>
                <div className="h-px flex-1 bg-linear-to-r from-[#9CA195] via-[#C9A96E] to-[#F2A7B0]" />
              </div>

              {/* Links */}
              <ul className="flex flex-col px-7">
                <MobileNavLink href="/" onClose={() => setMobileOpen(false)}>
                  Home
                </MobileNavLink>
                <MobileNavLink
                  href="/about"
                  onClose={() => setMobileOpen(false)}
                >
                  About Us
                </MobileNavLink>

                {/* Services accordion */}
                <li className="border-b border-[#ede6df]">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between py-4 text-[11.5px] tracking-[0.18em] uppercase text-[#4a3f3a] font-lato"
                  >
                    Services
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 text-[#C9A96E] transition-transform duration-300",
                        servicesOpen && "rotate-180",
                      )}
                    />
                  </button>
                  {servicesOpen && (
                    <ul className="pb-3 flex flex-col gap-0.5">
                      {services.map((s) => (
                        <li key={s.href}>
                          <Link
                            href={s.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2.5 py-2 px-2 rounded hover:bg-[#f5f0eb] transition-colors"
                          >
                            <span className="text-sm w-5">{s.emoji}</span>
                            <span className="text-[10.5px] tracking-widest uppercase text-[#5a4f4a] font-lato">
                              {s.label}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <MobileNavLink
                  href="/blogs"
                  onClose={() => setMobileOpen(false)}
                >
                  Blogs
                </MobileNavLink>
                <MobileNavLink
                  href="/media"
                  onClose={() => setMobileOpen(false)}
                >
                  Feature Media
                </MobileNavLink>
                <MobileNavLink
                  href="/gallery"
                  onClose={() => setMobileOpen(false)}
                >
                  Gallery
                </MobileNavLink>
                <MobileNavLink
                  href="/contact"
                  onClose={() => setMobileOpen(false)}
                >
                  Contact Us
                </MobileNavLink>
              </ul>

              {/* Decorative dots */}
              <div className="flex justify-center gap-2 mt-8 pb-6">
                <div className="w-2 h-2 rounded-full bg-[#F2A7B0]" />
                <div className="w-2 h-2 rounded-full bg-[#C9A96E]" />
                <div className="w-2 h-2 rounded-full bg-[#9CA195]" />
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
    </>
  );
}

function NavLink({
  href,
  scrolled,
  children,
}: {
  href: string;
  scrolled: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative text-[11.5px] tracking-[0.15em] uppercase font-lato transition-colors duration-300 group/link pb-0.5",
        scrolled
          ? "text-[#4a3f3a] hover:text-[#C9A96E]"
          : "text-white/90 hover:text-white",
      )}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C9A96E] transition-all duration-300 group-hover/link:w-full" />
    </Link>
  );
}

function MobileNavLink({
  href,
  onClose,
  children,
}: {
  href: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <li className="border-b border-[#ede6df]">
      <Link
        href={href}
        onClick={onClose}
        className="flex items-center justify-between py-4 group/ml"
      >
        <span className="text-[11.5px] tracking-[0.18em] uppercase text-[#4a3f3a] group-hover/ml:text-[#C9A96E] transition-colors duration-200 font-lato">
          {children}
        </span>
        <span className="text-[#C9A96E] opacity-0 group-hover/ml:opacity-100 transition-opacity duration-200 text-xs">
          →
        </span>
      </Link>
    </li>
  );
}
