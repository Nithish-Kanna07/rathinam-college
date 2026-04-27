# Design Brief

## Overview
Rathinam Group of Institutions, Eachanari, Coimbatore — prestigious university website with vibrant, saturated colors and 3D-ready design tokens. Light theme primary; dark mode supported. Responsive mobile-first (375px) to desktop (1400px+). Emphasis on placements, salary packages (LPA), international collaboration, realistic imagery, and 3D animations.

## Tone & Purpose
Bold, prestigious, ambitious. University marketing platform that builds authority through rich color presence and design craft. Vibrant yet sophisticated — reflects excellence, global reach, and career transformation. 3D animations reinforce modernity and innovation.

## Color Palette

| Token | Light (Enhanced) | Dark (Enhanced) | Usage |
|-------|-------|------|-------|
| **Primary** | `0.32 0.18 250` (Deep Royal Blue) | `0.62 0.2 250` | Navigation, CTAs, hero overlay, authority, prestige |
| **Secondary** | `0.58 0.22 28` (Energetic Orange +Sat) | `0.7 0.22 28` | Accents, badges, highlight stats, energy, vibrancy |
| **Accent** | `0.54 0.2 125` (Bright Green +Sat) | `0.7 0.2 125` | International collab, achievements, growth |
| **Muted** | `0.90 0.02 250` (Soft Neutral) | `0.22 0.01 250` | Secondary text, borders, subtle backgrounds |
| **Destructive** | `0.58 0.22 20` (Red-Orange +Sat) | `0.7 0.22 20` | Warnings, alerts |
| **Background** | `0.99 0 0` (Pure White) | `0.11 0.01 250` | Page base |

## Typography

| Layer | Font | Usage | Weight |
|-------|------|-------|--------|
| **Display** | Fraunces (Serif) | Hero headlines, section titles, prestige, authority | 600–700 |
| **Body** | DM Sans (Sans-serif) | Body text, buttons, UI, clarity, accessibility | 400–600 |
| **Mono** | Geist Mono | Code, technical labels, stats numbers | 400 |

**Type Scale**: 12px, 14px, 16px (body), 18px, 20px, 24px, 32px, 48px (hero)

## Structural Zones

| Zone | Surface | Border | Purpose |
|------|---------|--------|---------|
| **Header/Nav** | `bg-primary` with increased saturation | None | Navigation, logo, CTA buttons, prestige |
| **Hero** | Enhanced gradient overlay (richer primary to transparent) over image | None | Full-width hero with 3D-layered background imagery |
| **Stat Section** | `bg-background` | None | 4-column stats grid with vibrant cards |
| **Content Sections** | `bg-background` or `bg-card` (alternating) | `border-b` separators | Programs, facilities, placements, international |
| **Cards** | `bg-card shadow-elevated` | Subtle border | Program cards, testimonials, placement partners, 3D-hover ready |
| **Footer** | `bg-primary` or `bg-card` | `border-t` | Links, contact, college info |

## Spacing & Rhythm
- Base: 8px grid
- Compact: 4px, 8px, 12px
- Standard: 16px, 24px
- Generous: 32px, 48px, 64px (sections)

## Component Patterns
- **Hero Header**: Full-width image with enhanced blue gradient overlay (0.32 chroma primary), white serif headline, vibrant orange CTA button, stats bar below
- **Stat Cards**: Centered numbers in vibrant orange/accent, descriptive text, elevated shadow, hover scale up 1.05
- **Program/Card**: Image thumbnail, title (serif), description, "Learn More" button (primary gradient)
- **Placement Badge**: Vibrant orange background (0.22 chroma), white text, LPA package highlighted in bright green accent
- **CTA Buttons**: Primary (deep blue bg, white text), Secondary (vibrant orange bg, white text), Outline (blue border, blue text)
- **3D Integration**: Design tokens support react-three-fiber rendering with deeper color values for WebGL lighting

## Elevation & Depth
- **Flat**: No shadow, border only
- **Subtle**: `shadow-subtle` for cards on light backgrounds
- **Card**: `shadow-card` for program/facility cards
- **Elevated**: `shadow-elevated` for hover states, 3D interactive elements

## Motion
- **Default**: `transition-smooth` (0.3s cubic-bezier) on interactive elements
- **Fade-in**: `animate-fade-in` (0.3s ease-out) for section reveals on scroll
- **Slide-up**: `animate-slide-up` for card stagger effects
- **3D Hover**: Scale 1.05 on stat cards, shadow elevation on program cards, transform-gpu for 3D animations
- **Choreography**: AnimatePresence mode='wait' for clean filter transitions without layout jump

## Responsive Breakpoints
- **Mobile**: 375px–640px (sm)
- **Tablet**: 640px–1024px (md)
- **Desktop**: 1024px–1280px (lg)
- **Large**: 1280px–1400px (xl/2xl)

## Differentiation
Enhanced saturation on deep royal blue primary (0.18 chroma) and vibrant orange secondary (0.22 chroma) creates distinctive, non-generic university aesthetic. Bright green accent (0.2 chroma) emphasizes international collaboration and achievement. Serif display (Fraunces) conveys prestige; sans body (DM Sans) ensures clarity and accessibility. Emphasis on real photography with rich gradient overlays. Stat cards and placement packages are hero design elements. 3D animation support through design token depth. Hover scale/elevation provides subtle, sophisticated interactivity.

## Dark Mode Strategy
Enhanced chroma values maintained in dark mode: primary blue (0.62L, 0.2C), orange (0.7L, 0.22C), green (0.7L, 0.2C) ensure vibrance on dark backgrounds. Card backgrounds lift vs. page background for depth. All contrast ratios AA+ verified. 3D elements render with enhanced color depth.

## Constraints
- Hero sections only use image + gradient overlay (no artificial blur/bloom effects)
- Rounded corners: 8px standard, 0px on sections
- All colors OKLCH only — no hex/rgb
- Shadows max 12px blur; card hover +4px elevation
- Animation durations: 0.2s–0.3s; no bouncing or elastic easing
- Realistic photography throughout; no stock photo watermarks visible
- 3D animations use react-three-fiber/drei with design token color values
