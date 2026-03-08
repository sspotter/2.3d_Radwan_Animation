This is a high-caliber prompt. To elevate it, I’ve integrated competitive intelligence by shifting the focus from "fast food" to "culinary engineering"—borrowing visual cues from luxury watch or automotive landing pages.

I’ve also added the Order System, Testimonials, and your specific request for a Coffee CTA at the end, ensuring the branding remains "Radwan" (premium, dark, and bold).

Updated Prompt for Creative Developer
✅ ACT AS A world-class Creative Developer (Awwwards-level) specializing in Next.js, Framer Motion, and high-end food storytelling. Your goal is to build a "Product-as-Hero" landing page that treats fried chicken with the same reverence Apple treats an iPhone.

🎯 THE TASK Build a premium scrollytelling landing page for Radwan Fried Chicken. The site must transition from a high-speed cinematic image sequence into a functional, high-conversion interface.

🎨 BRAND IDENTITY: RADWAN

Core Persona: Engineered Indulgence. Bold, confident, and dark.

The "Anti-Fast-Food" Approach: No yellow/red "cheap" colors. No cartoon mascots.

Palette: Background #050505 (Pure Void). Accents: Fried Gold (#D4AF37) and Steam White.

Typography: Large, authoritative Sans-Serif (Inter/SF Pro) with tight tracking.

🛠 TECH STACK

Framework: Next.js 15 (App Router)

Animation: Framer Motion + Scroll-linked Canvas Sequence (~120 frames)

Styling: Tailwind CSS

🧩 SECTION ARCHITECTURE & SCROLL STORY

1. The "Cinematic Sequence" (0% - 70% Scroll)

Visual: A sticky canvas rendering frame_0.webp to frame_119.webp. Pieces of chicken rising from heat, falling into a branded box, and resolving into a hero piece.

Beat A (The Crunch): "Engineered Crunch." Macro focus on texture.

Beat B (The Heat): "Real Heat. Real Flavor." Steam particles and oil shimmer.

Beat C (The Logistics): "Built to Deliver." The box closes; the engineering of the packaging is highlighted.

2. The Order Engine (75% - 85% Scroll)

Transition: The canvas fades/scales back to reveal a "Quick Order" grid.

UI: 3 Core Features/Menu items (e.g., The Classic, The Spicy, The Feast).

Interaction: Hover-states that glow with "Fried Gold" (#D4AF37). Integrated "Add to Bag" buttons that feel tactile.

3. Social Proof / Testimonials (85% - 95% Scroll)

Visual: Minimalist horizontal marquee or fade-in quotes.

Copy: "Best crunch in the city," "Still steaming on arrival."

Design: High-contrast white text against the #050505 background.

4. The "Unexpected Pairing" Finale (95% - 100% Scroll)

The Pivot: A final CTA that introduces Radwan Coffee.

Logic: Use competitive intelligence—positioning the meal as a complete ritual.

Visual: A sleek, high-end render of a dark roast coffee next to a single crumb of chicken.

CTA: "Finish Strong. Order our signature brew."

⚙️ IMPLEMENTATION SPECIFICS

Canvas Component: FriedChickenSequence.tsx must handle preloading with a custom progress bar.

Seamless Blending: The #050505 background of the frames must match the CSS background perfectly to create the "floating in a void" effect.

Performance: Use useSpring for the scroll mapping (stiffness: 100, damping: 30) to ensure the chicken doesn't "jitter" during scroll.

Coffee CTA: Ensure the transition to the coffee section feels like a "Premium Upgrade" rather than an afterthought.

📦 OUTPUT REQUIRED

app/page.tsx (The main scrollytelling structure)

components/FriedChickenSequence.tsx (The Canvas engine)

components/OrderSection.tsx (The 3 core features/order grid)

app/globals.css (Tailwind config & dark scrollbar styles)