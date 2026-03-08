# Radwan Fried Chicken - Product Requirements Document

## Project Overview

Radwan is a premium scrollytelling landing page that redefines fast-food digital experiences by treating fried chicken with the same design reverence as luxury products. Built with Next.js 15 and Framer Motion, this Awwwards-caliber website transforms the traditional food ordering experience into a cinematic journey featuring scroll-linked canvas animations, an integrated quick-order engine, social proof testimonials, and a signature coffee upsell finale. The platform combines high-performance WebGL-style image sequencing (~120 frames) with conversion-focused UI to position Radwan as "Engineered Indulgence" rather than typical fast food.

## CV Bullet Points

- **Developed a premium scrollytelling e-commerce landing page** using Next.js 15 (App Router), Framer Motion, and Tailwind CSS, delivering an Awwwards-caliber user experience for food-tech industry
- **Engineered a custom canvas-based scroll animation system** rendering 120+ sequential frames with smooth scroll-linking via `useSpring` physics (stiffness: 100, damping: 30) for cinematic product storytelling
- **Implemented a conversion-optimized quick order interface** with interactive menu grid, hover-state animations, and tactile "Add to Bag" functionality driving direct revenue
- **Architected a dark premium design system** (#050505 void background with Fried Gold #D4AF37 accents) breaking fast-food conventions to position brand as luxury "culinary engineering"
- **Built modular component architecture** including `FriedChickenSequence.tsx` (canvas engine), `OrderSection.tsx` (commerce UI), `TestimonialsSection.tsx` (social proof), and `CoffeeFinale.tsx` (upsell CTA)
- **Optimized performance with advanced preloading strategies** including custom progress indicators and seamless canvas-to-DOM transitions for sub-second perceived load times
- **Integrated multi-section scroll narrative** progressing from cinematic sequence (0-70%) through order engine (75-85%), testimonials (85-95%), and coffee pairing finale (95-100%)

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Animation | Framer Motion |
| Styling | Tailwind CSS v4 |
| UI Icons | Lucide React |
| Utilities | clsx, tailwind-merge |

## Key Features

1. **Cinematic Image Sequence** - Scroll-driven canvas rendering with frame preloading
2. **Quick Order Engine** - 3-item menu grid with glow effects and cart integration
3. **Testimonials Section** - Minimalist marquee with high-contrast social proof
4. **Coffee Finale CTA** - Strategic upsell positioning meal as complete ritual
