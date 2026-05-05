"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeUp, stagger } from "@/lib/animations";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-black"
    >
      {/* Hero photo */}
      <Image
        src="/images/hero.jpg"
        alt="Athlete performing a deadlift in a dark gym"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay — heavier on left for text legibility, lighter on right to show athlete */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      {/* Bottom fade to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black to-transparent" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-brand-white) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-white) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content — left-aligned to keep clear of the athlete on the right */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-5 max-w-xl"
        >
          <motion.span
            variants={fadeUp}
            className="text-brand-green text-xs font-semibold uppercase tracking-wider"
          >
            Personal Training &amp; Coaching
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-[clamp(2.2rem,4.5vw,3.75rem)] leading-[1.1] text-brand-white"
          >
            Your best body
            <br />
            <span className="text-brand-green">starts with form.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-brand-ash text-sm md:text-base max-w-md leading-relaxed"
          >
            Expert 1-on-1 training and online coaching for people who are serious
            about results. No fads. No guesswork. Just proven methods that work.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-start gap-4 mt-2"
          >
            <Button href="/book" size="lg">
              Book a Free Discovery Call
            </Button>
            <Button href="/#services" variant="ghost" size="lg">
              See How It Works
            </Button>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-brand-ash/70 text-sm mt-2"
          >
            Trusted by 100+ clients across London &amp; online
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-ash"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
