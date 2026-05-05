import type { Metadata } from "next";
import { DM_Sans, Oxanium } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Form First | Personal Trainer & Fitness Coach",
  description:
    "Expert personal training and online fitness coaching. Build strength, lose weight, and transform your body with Form First. Book your free discovery call today.",
  openGraph: {
    title: "Form First | Train Smarter. Live Better.",
    description:
      "Personal training and online coaching for people serious about results. Real programs. Real coaching. Real change.",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${oxanium.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
