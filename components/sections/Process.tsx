"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { processSteps } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { fadeUp, stagger } from "@/lib/animations";

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-brand-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-20"
        >
          <motion.span
            variants={fadeUp}
            className="text-brand-green text-xs font-semibold uppercase tracking-widest"
          >
            How It Works
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl text-brand-black mt-3"
          >
            Simple process.
            <br />
            Real results.
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-brand-sand mx-[calc(12.5%+1.5rem)]" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-4 gap-8"
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="flex flex-col gap-4 relative"
              >
                {/* Number */}
                <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-3">
                  <div className="w-16 h-16 rounded-full bg-brand-black flex items-center justify-center shrink-0 relative z-10">
                    <span className="font-serif text-xl text-brand-green">
                      {step.number}
                    </span>
                  </div>
                  {/* Mobile connector */}
                  {i < processSteps.length - 1 && (
                    <div className="flex-1 h-px bg-brand-sand md:hidden" />
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-brand-black font-semibold text-lg">
                    {step.title}
                  </h3>
                  <p className="text-brand-slate text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <Button href="/book" size="lg" variant="outline-dark">
            Ready to start? Book your discovery call
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
