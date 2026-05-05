"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials, transformations } from "@/lib/constants";
import { fadeUp, stagger } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Results() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", update);
    update();
  }, [emblaApi]);

  return (
    <section id="results" className="bg-brand-charcoal">
      {/* Transformations */}
      <div className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
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
              Client Results
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl text-brand-white mt-3 mb-4"
            >
              Real people.
              <br />
              Real transformations.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-brand-ash text-lg max-w-md mx-auto">
              These aren&rsquo;t highlight reels. They&rsquo;re what consistent
              work looks like.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {transformations.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                className="rounded-2xl overflow-hidden bg-brand-black border border-brand-slate/20 flex flex-col"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={t.image}
                    alt={`${t.name} transformation`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute bottom-4 left-4 bg-brand-green text-brand-black text-xs font-bold px-3 py-1 rounded-full">
                    {t.result}
                  </span>
                </div>
                <div className="p-6 flex flex-col gap-1">
                  <p className="text-brand-white font-semibold">{t.name}</p>
                  <p className="text-brand-ash text-sm">{t.timeframe} transformation</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="pb-24 md:pb-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <motion.h2
              className="font-serif text-4xl md:text-5xl text-brand-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What clients say.
            </motion.h2>

            {/* Carousel controls */}
            <div className="flex gap-3">
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className={cn(
                  "w-10 h-10 rounded-full border flex items-center justify-center transition-all",
                  canScrollPrev
                    ? "border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black"
                    : "border-brand-slate text-brand-slate cursor-not-allowed"
                )}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className={cn(
                  "w-10 h-10 rounded-full border flex items-center justify-center transition-all",
                  canScrollNext
                    ? "border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black"
                    : "border-brand-slate text-brand-slate cursor-not-allowed"
                )}
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                >
                  <div className="bg-brand-black rounded-2xl p-8 border border-brand-slate/20 h-full flex flex-col gap-6">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="text-brand-green fill-brand-green"
                        />
                      ))}
                    </div>

                    <blockquote className="text-brand-white text-sm leading-relaxed flex-1">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-green/20 border border-brand-green/30 flex items-center justify-center shrink-0">
                        <span className="text-brand-green text-xs font-bold">
                          {t.initials}
                        </span>
                      </div>
                      <div>
                        <p className="text-brand-white text-sm font-semibold">{t.name}</p>
                        <p className="text-brand-ash text-xs">{t.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
