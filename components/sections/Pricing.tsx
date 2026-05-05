"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { pricing } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { fadeUp, stagger } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-brand-white">
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
            Investment
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl text-brand-black mt-3 mb-4"
          >
            Choose your plan.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-brand-slate text-lg max-w-xl mx-auto">
            All plans include a free discovery call, a personalised program, and
            direct access to me throughout your journey.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {pricing.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={cn(
                "relative flex flex-col rounded-2xl p-8 border",
                plan.featured
                  ? "bg-brand-black border-brand-green shadow-[0_0_50px_rgba(46,204,113,0.15)]"
                  : "bg-brand-white border-brand-sand hover:border-brand-green/30 transition-colors"
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-green text-brand-black text-xs font-bold px-4 py-1.5 rounded-full">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <h3
                  className={cn(
                    "font-semibold text-lg mb-1",
                    plan.featured ? "text-brand-white" : "text-brand-black"
                  )}
                >
                  {plan.name}
                </h3>
                <p
                  className={cn(
                    "text-xs",
                    plan.featured ? "text-brand-ash" : "text-brand-slate"
                  )}
                >
                  {plan.bestFor}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-2">
                <span
                  className={cn(
                    "font-serif text-5xl",
                    plan.featured ? "text-brand-white" : "text-brand-black"
                  )}
                >
                  £{plan.price}
                </span>
                <span
                  className={cn(
                    "text-sm",
                    plan.featured ? "text-brand-ash" : "text-brand-slate"
                  )}
                >
                  / {plan.period}
                </span>
              </div>
              <p
                className={cn(
                  "text-xs mb-8",
                  plan.featured ? "text-brand-ash" : "text-brand-slate"
                )}
              >
                {plan.billingNote}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div
                      className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                        plan.featured ? "bg-brand-green/20" : "bg-brand-green-light"
                      )}
                    >
                      <Check size={11} className="text-brand-green" strokeWidth={3} />
                    </div>
                    <span
                      className={cn(
                        "text-sm leading-snug",
                        plan.featured ? "text-brand-ash" : "text-brand-slate"
                      )}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href="/book"
                variant={plan.featured ? "primary" : "outline-dark"}
                size="md"
                className="w-full justify-center"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Below cards */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="/book"
            className="inline-flex items-center gap-2 text-brand-slate hover:text-brand-black text-sm font-medium transition-colors group"
          >
            Not sure which plan is right for you? Book a free 20-minute discovery
            call and we&rsquo;ll figure it out together.
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="mt-6 text-brand-ash text-xs">
            All plans come with a 2-week satisfaction guarantee. If you&rsquo;re not
            happy, I&rsquo;ll refund the difference — no questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
