"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Results", href: "/#results" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-brand-black/95 backdrop-blur-md shadow-lg"
            : "bg-transparent",
        )}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-18 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-white.png"
              alt="Form First"
              width={100}
              height={32}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-white hover:text-brand-green text-sm font-medium transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <Button href="/book" size="sm" className="hidden md:inline-flex">
              Book a Session
            </Button>
            <button
              className="md:hidden text-brand-white p-1"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[100] flex flex-col bg-brand-black transition-transform duration-300 md:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between px-6 h-18">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/images/logo-white.png"
              alt="Form First"
              width={96}
              height={30}
            />
          </Link>
          <button
            className="text-brand-white p-1"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-6 py-8 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-brand-white text-2xl font-serif py-3 border-b border-brand-slate/30 hover:text-brand-green transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="px-6 pb-12">
          <Button
            href="/book"
            size="lg"
            className="w-full"
            onClick={() => setMobileOpen(false)}
          >
            Book a Session
          </Button>
        </div>
      </div>
    </>
  );
}
