"use client";

import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/constants";
import { fadeUp, stagger } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-brand-sand">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16">
          {/* Left — header */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-4"
          >
            <motion.span
              variants={fadeUp}
              className="text-brand-green text-xs font-semibold uppercase tracking-widest"
            >
              Questions
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl text-brand-black leading-tight"
            >
              Answers to the most
              <br />
              common questions.
            </motion.h2>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <Accordion.Root type="single" collapsible className="flex flex-col gap-2">
              {faqs.map((faq, i) => (
                <Accordion.Item
                  key={i}
                  value={`item-${i}`}
                  className="bg-brand-white rounded-xl border border-brand-sand overflow-hidden"
                >
                  <Accordion.Header>
                    <Accordion.Trigger
                      className={cn(
                        "group flex w-full items-center justify-between px-6 py-5 text-left",
                        "text-brand-black font-medium text-sm leading-snug",
                        "hover:text-brand-green transition-colors duration-150",
                        "data-[state=open]:text-brand-green"
                      )}
                    >
                      {faq.question}
                      <ChevronDown
                        size={18}
                        className="shrink-0 ml-4 text-brand-ash transition-transform duration-200 group-data-[state=open]:rotate-180"
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <p className="px-6 pb-5 text-brand-slate text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
