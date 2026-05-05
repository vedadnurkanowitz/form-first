import type { Service, ProcessStep, Transformation, Testimonial, PricingPlan, FAQ } from "./types";

export const services: Service[] = [
  {
    id: "one-on-one",
    title: "1-on-1 Personal Training",
    description:
      "Fully personalised sessions built around your goals. I'll coach your form, push you at the right moments, and track your progress session by session.",
    details: "60 min · In-person · London",
    icon: "dumbbell",
    cta: "Book a Session",
    href: "/book",
  },
  {
    id: "online-coaching",
    title: "Online Coaching",
    description:
      "All the structure and accountability of in-person training — from anywhere in the world. Custom program, weekly check-ins, and direct messaging support.",
    details: "Monthly · Fully remote",
    icon: "wifi",
    cta: "Apply for Online Coaching",
    href: "/book",
  },
  {
    id: "group-training",
    title: "Small Group Training",
    description:
      "Train with 2–5 people in a focused, coached environment. High energy, lower cost, same results.",
    details: "60 min · In-person · London",
    icon: "users",
    cta: "Join a Group Session",
    href: "/book",
  },
  {
    id: "nutrition",
    title: "Nutrition Guidance",
    description:
      "Sustainable eating strategies that support your training and fit your lifestyle. No extreme diets. No calorie-counting obsession.",
    details: "Add-on to any plan",
    icon: "apple",
    cta: "Learn More",
    href: "/book",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We talk about your goals, lifestyle, and what's worked (or hasn't) before. No commitment — just clarity.",
  },
  {
    number: "02",
    title: "Custom Program",
    description:
      "I design a training plan built specifically for you — your schedule, your body, your goals.",
  },
  {
    number: "03",
    title: "Start Training",
    description:
      "We get to work. You train, I coach. Every session moves you forward.",
  },
  {
    number: "04",
    title: "Track & Adjust",
    description:
      "I monitor your progress and adapt the program as you improve. Nothing stays static.",
  },
];

export const transformations: Transformation[] = [
  {
    name: "James R.",
    timeframe: "16 weeks",
    result: "Lost 18kg",
    image: "/images/results-james.png",
  },
  {
    name: "Priya K.",
    timeframe: "12 weeks",
    result: "Gained 6kg lean muscle",
    image: "/images/results-priya.png",
  },
  {
    name: "Tom W.",
    timeframe: "8 weeks",
    result: "Deadlifted 140kg for the first time",
    image: "/images/results-tom.png",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    location: "London",
    initials: "SM",
    quote:
      "I came to Form First not knowing where to start. Four months later I've lost 15kg and genuinely enjoy going to the gym for the first time in my life. The coaching style is firm but incredibly supportive.",
    rating: 5,
  },
  {
    name: "Daniel O.",
    location: "Manchester",
    initials: "DO",
    quote:
      "The accountability is what got me. Weekly check-ins, video form reviews, WhatsApp support — it genuinely feels like having a coach in your pocket. Results have been outstanding.",
    rating: 5,
  },
  {
    name: "Claire T.",
    location: "Edinburgh",
    initials: "CT",
    quote:
      "I was sceptical at first — I'd tried three PTs before with no lasting results. But the approach here is completely different. It's not just about workouts, it's about changing how you think about your body. Six months in and I'm a different person.",
    rating: 5,
  },
  {
    name: "Marcus B.",
    location: "Bristol",
    initials: "MB",
    quote:
      "The nutrition guidance changed everything. No meal plans I couldn't stick to, no obsessing over calories — just practical habits that fit my life. Lost 10kg and kept it off.",
    rating: 5,
  },
  {
    name: "Amara J.",
    location: "Birmingham",
    initials: "AJ",
    quote:
      "As a busy mum of two, I was convinced I had no time. The sessions are efficient, effective, and actually fit around my schedule. First time I've felt strong and energetic in years.",
    rating: 5,
  },
  {
    name: "Ryan F.",
    location: "Remote — Dublin",
    initials: "RF",
    quote:
      "Online coaching with Form First is seamless. The programs are structured, the feedback is quick, and there's zero wasted time. I've made more progress remotely than I ever did with a gym membership.",
    rating: 5,
  },
];

export const pricing: PricingPlan[] = [
  {
    name: "Starter",
    price: 149,
    period: "month",
    billingNote: "Monthly, cancel anytime",
    bestFor: "Getting started with structure and accountability",
    featured: false,
    cta: "Get Started",
    features: [
      "4 × 1-on-1 sessions per month",
      "Personalised training program",
      "Weekly progress check-in",
      "Form feedback via video",
      "WhatsApp support (Mon–Fri)",
    ],
  },
  {
    name: "Core",
    price: 249,
    period: "month",
    billingNote: "Monthly, cancel anytime",
    bestFor: "Consistent progress with full coaching support",
    featured: true,
    cta: "Start Core Plan",
    features: [
      "8 × 1-on-1 sessions per month",
      "Personalised training + nutrition plan",
      "Weekly progress check-in + call",
      "Form feedback via video",
      "WhatsApp support (7 days)",
      "Access to workout library",
      "Monthly body composition review",
    ],
  },
  {
    name: "Elite",
    price: 399,
    period: "month",
    billingNote: "Monthly, cancel anytime",
    bestFor: "Maximum results with full accountability",
    featured: false,
    cta: "Apply for Elite",
    features: [
      "Unlimited 1-on-1 sessions",
      "Full training + nutrition + lifestyle plan",
      "Twice-weekly coaching calls",
      "Priority WhatsApp support",
      "Weekly body composition review",
      "Guest pass for partner/friend",
      "Access to all group sessions",
    ],
  },
];

export const faqs: FAQ[] = [
  {
    question: "Do I need to be fit already to start?",
    answer:
      "Not at all. I work with clients at every level — from complete beginners to experienced athletes. My programs are designed to meet you exactly where you are and build from there.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most clients notice real changes within 4–6 weeks — improved energy, better sleep, and visible physical changes. Significant transformation typically happens over 12–16 weeks of consistent training and nutrition.",
  },
  {
    question: "What does online coaching involve?",
    answer:
      "You get a custom training program updated every 4 weeks, weekly check-in calls, daily messaging support, and video form reviews. Everything I do in person, adapted for remote delivery.",
  },
  {
    question: "Do I need a gym membership?",
    answer:
      "For in-person sessions, we train at a fully equipped private gym in central London. For online coaching, I'll design your program around whatever equipment you have — gym, home, or minimal kit.",
  },
  {
    question: "How is Form First different from a regular gym PT?",
    answer:
      "I work with a small number of clients at any one time. That means you get my full attention — programs that are genuinely personalised, not templates. I'm also reachable between sessions, not just during them.",
  },
  {
    question: "Can I do nutrition coaching without the training?",
    answer:
      "Yes. Nutrition guidance is available as a standalone service or as an add-on to any training plan. Get in touch and we'll work out what makes most sense for your goals.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "Monthly plans can be cancelled any time with 7 days notice before the next billing date. I don't lock you into long contracts — I'd rather earn your trust month to month.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free 20-minute discovery call using the button below. We'll talk through your goals, answer any questions, and decide together which plan is the best fit.",
  },
];
