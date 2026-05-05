"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

const credentials = [
  "NASM Certified PT",
  "8 Years Experience",
  "200+ Clients Trained",
  "Precision Nutrition Coach",
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-brand-sand">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Offset accent block */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-brand-green-light rounded-2xl" />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] flex items-end">
              <Image
                src="/images/your-coach.png"
                alt="Your coach"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="relative z-10 p-8 w-full">
                <blockquote className="font-serif text-lg text-brand-white leading-snug border-l-4 border-brand-green pl-4">
                  &ldquo;I don&rsquo;t believe in quick fixes. I believe in
                  building habits that last — and I&rsquo;ll be with you every
                  step of the way.&rdquo;
                </blockquote>
              </div>
            </div>
          </motion.div>

          {/* Copy side */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-6"
          >
            <motion.span
              variants={fadeUp}
              className="text-brand-green text-xs font-semibold uppercase tracking-widest"
            >
              Your Coach
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl text-brand-black leading-tight"
            >
              I&rsquo;ve been where
              <br />
              you are.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-brand-slate leading-relaxed text-lg">
              Alex Chen is a certified personal trainer with 8 years of experience
              helping real people build strength, lose weight, and feel confident
              in their bodies.
            </motion.p>

            <motion.p variants={fadeUp} className="text-brand-slate leading-relaxed">
              After training as a competitive athlete and then struggling with my
              own health in my early twenties, I built Form First around one simple
              idea: technique and consistency beat everything else.
            </motion.p>

            <motion.p variants={fadeUp} className="text-brand-slate leading-relaxed">
              I work with clients in London and online — guiding them through
              personalised programs that fit their life, not the other way around.
            </motion.p>

            {/* Credential pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-2">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="text-xs font-semibold text-brand-black bg-brand-white border border-brand-black/10 rounded-full px-4 py-2 tracking-wide"
                >
                  {c}
                </span>
              ))}
            </motion.div>

            <motion.a
              variants={fadeUp}
              href="/#services"
              className="inline-flex items-center gap-2 text-brand-black font-semibold text-sm hover:text-brand-green transition-colors mt-2 group"
            >
              Learn More About My Approach
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
