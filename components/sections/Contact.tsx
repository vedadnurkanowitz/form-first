"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeUp, stagger } from "@/lib/animations";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  goal: z.string().min(1, "Please select a goal"),
  message: z.string().min(10, "Please tell me a bit more"),
});

type FormData = z.infer<typeof schema>;

const goalOptions = [
  { value: "", label: "Select your main goal" },
  { value: "lose-weight", label: "Lose weight" },
  { value: "build-muscle", label: "Build muscle" },
  { value: "improve-fitness", label: "Improve fitness" },
  { value: "athletic-performance", label: "Athletic performance" },
  { value: "general-health", label: "General health" },
  { value: "not-sure", label: "Not sure yet" },
];

const inputBase =
  "w-full bg-brand-charcoal border border-brand-slate/40 rounded-xl px-4 py-3.5 text-sm text-brand-white placeholder:text-brand-ash focus:outline-none focus:border-brand-green transition-colors duration-150";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSending(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-black">
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
            Get Started
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl text-brand-white mt-3 mb-4"
          >
            Ready to change
            <br />
            how you train?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-brand-ash text-lg max-w-lg mx-auto">
            Book a free discovery call or send me a message. No pressure, no hard
            sell — just an honest conversation about your goals.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Book directly */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-brand-charcoal rounded-2xl p-8 border border-brand-slate/20 flex flex-col gap-6"
          >
            <div>
              <h3 className="text-brand-white font-semibold text-xl mb-2">
                Book directly
              </h3>
              <p className="text-brand-ash text-sm leading-relaxed">
                Schedule your free 20-minute discovery call. Come as you are —
                this is just a conversation.
              </p>
            </div>

            <Button href="/book" size="lg" className="w-full justify-center">
              Book a Free Discovery Call
              <ArrowRight size={16} className="ml-2" />
            </Button>

            <p className="text-brand-ash text-xs text-center">
              20 minutes · Free · No commitment
            </p>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-brand-white font-semibold text-xl mb-6">
              Or send a message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <CheckCircle2 size={40} className="text-brand-green" />
                <p className="text-brand-white font-semibold text-lg">
                  Thanks for reaching out.
                </p>
                <p className="text-brand-ash text-sm">
                  I&rsquo;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <div>
                  <input
                    {...register("name")}
                    placeholder="Full Name"
                    className={cn(inputBase, errors.name && "border-red-500")}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Email Address"
                    className={cn(inputBase, errors.email && "border-red-500")}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <select
                    {...register("goal")}
                    className={cn(
                      inputBase,
                      "appearance-none",
                      errors.goal && "border-red-500"
                    )}
                  >
                    {goalOptions.map((o) => (
                      <option key={o.value} value={o.value} disabled={o.value === ""}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                  {errors.goal && (
                    <p className="text-red-400 text-xs mt-1">{errors.goal.message}</p>
                  )}
                </div>

                <div>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Tell me a bit about yourself and what you're looking for..."
                    className={cn(inputBase, "resize-none", errors.message && "border-red-500")}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full justify-center mt-2"
                  disabled={sending}
                >
                  {sending ? "Sending…" : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
