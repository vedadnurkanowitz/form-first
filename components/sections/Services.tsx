"use client";

import { motion } from "framer-motion";
import { Dumbbell, Wifi, Users, Apple, ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/constants";
import { fadeUp, stagger } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  dumbbell: Dumbbell,
  wifi: Wifi,
  users: Users,
  apple: Apple,
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-brand-black">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="text-brand-green text-xs font-semibold uppercase tracking-widest"
          >
            What I Offer
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl text-brand-white mt-3 mb-4"
          >
            Training that fits
            <br />
            your life.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-brand-ash text-lg max-w-lg mx-auto">
            Whether you want to train in person or online, I have a format that
            works for you.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Dumbbell;
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="group relative flex flex-col gap-5 bg-brand-charcoal rounded-2xl p-7 border border-brand-slate/20 hover:border-brand-green/30 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(46,204,113,0.1)] transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center">
                  <Icon size={20} className="text-brand-green" />
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-brand-white font-semibold text-base leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-brand-ash text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <p className="text-brand-green/70 text-xs font-medium mt-1">
                    {service.details}
                  </p>
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green hover:text-brand-green-dark transition-colors group/link"
                >
                  {service.cta}
                  <ArrowRight
                    size={14}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
