"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

interface BaseProps {
  variant?: "primary" | "ghost" | "outline-dark";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
}

interface ButtonAsButton extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  href?: undefined;
}

interface ButtonAsLink extends BaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ variant = "primary", size = "md", children, className, href, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-none transition-all duration-150 cursor-pointer uppercase tracking-wider text-xs";

  const variants = {
    primary:
      "bg-brand-green text-brand-black hover:bg-brand-green-dark active:brightness-90",
    ghost:
      "border border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black",
    "outline-dark":
      "border border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-white",
  };

  const sizes = {
    sm: "px-5 py-2.5",
    md: "px-7 py-3.5",
    lg: "px-8 py-4",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
