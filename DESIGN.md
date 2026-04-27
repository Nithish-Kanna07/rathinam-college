# Design Brief

## Overview
Rathinam College university website — vibrant, professional marketing site for showcase. Light theme primary; dark mode supported. Responsive mobile-first (375px) to desktop (1400px+). Emphasis on placements, salary packages (LPA), international collaboration, realistic imagery.

## Tone & Purpose
Bold, prestigious, approachable. University marketing platform that builds trust through design quality, emphasizes placement success as key differentiator. Professional yet energetic — reflects ambition and modern education.

## Color Palette

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| **Primary** | `0.34 0.14 250` (Deep Royal Blue) | `0.58 0.16 250` | Navigation, CTAs, hero overlay, authority |
| **Secondary** | `0.58 0.18 30` (Energetic Orange) | `0.68 0.18 30` | Accents, badges, highlight stats, energy |
| **Accent** | `0.52 0.16 120` (Vibrant Green) | `0.68 0.16 120` | International collab, achievements, growth |
| **Muted** | `0.90 0.02 250` (Soft Neutral) | `0.22 0.01 250` | Secondary text, borders, subtle backgrounds |
| **Destructive** | `0.58 0.2 22` (Red-Orange) | `0.68 0.18 22` | Warnings, alerts |
| **Background** | `0.99 0 0` (Pure White) | `0.11 0.01 250` | Page base |

## Typography

| Layer | Font | Usage | Weight |
|-------|------|-------|--------|
| **Display** | Fraunces (Serif) | Hero headlines, section titles, prestige | 600–700 |
| **Body** | DM Sans (Sans-serif) | Body text, buttons, UI, clarity | 400–600 |
| **Mono** | Geist Mono | Code, technical labels, stats numbers | 400 |

**Type Scale**: 12px, 14px, 16px (body), 18px, 20px, 24px, 32px, 48px (hero)

## Structural Zones

| Zone | Surface | Border | Purpose |
|------|---------|--------|---------|
| **Header/Nav** | `bg-primary` | None | Navigation, logo, CTA buttons |
| **Hero** | Gradient overlay (primary to transparent) over image | None | Full-width hero with background image |
| **Stat Section** | `bg-background` | None | 4-column stats grid with cards |
| **Content Sections** | `bg-background` or `bg-card` (alternating) | `border-b` separators | Programs, facilities, placements, international |
| **Cards** | `bg-card shadow-card` | Subtle border | Program cards, testimonials, placement partners |
| **Footer** | `bg-primary` or `bg-card` | `border-t` | Links, contact, college info |

## Spacing & Rhythm
- Base: 8px grid
- Compact: 4px, 8px, 12px
- Standard: 16px, 24px
- Generous: 32px, 48px, 64px (sections)

## Component Patterns
- **Hero Header**: Full-width image with blue gradient overlay, white serif headline, orange CTA button, stats bar below
- **Stat Cards**: Centered numbers in orange/accent, descriptive text, minimal elevation, hover scale up
- **Program/Card**: Image thumbnail, title (serif), description, "Learn More" button (primary)
- **Placement Badge**: Orange background, white text, LPA package highlighted in accent green
- **CTA Buttons**: Primary (blue bg, white text), Secondary (orange bg, white text), Outline (blue border, blue text)

## Elevation & Depth
- **Flat**: No shadow, border only
- **Subtle**: `shadow-subtle` for cards on light backgrounds
- **Card**: `shadow-card` for program/facility cards
- **Elevated**: `shadow-elevated` for hover states

## Motion
- **Default**: `transition-smooth` (0.3s cubic-bezier) on interactive elements
- **Fade-in**: `animate-fade-in` (0.3s ease-out) for section reveals on scroll
- **Slide-up**: `animate-slide-up` for card stagger effects
- **Hover**: Scale 1.05 on stat cards, shadow elevation on program cards

## Responsive Breakpoints
- **Mobile**: 375px–640px (sm)
- **Tablet**: 640px–1024px (md)
- **Desktop**: 1024px–1280px (lg)
- **Large**: 1280px–1400px (xl/2xl)

## Differentiation
Deep royal blue primary + energetic orange secondary creates distinctive, non-generic university aesthetic. Serif display (Fraunces) conveys prestige; sans body (DM Sans) ensures clarity. Emphasis on real photography with gradient overlays. Stat cards and placement packages are hero design elements, not afterthoughts. Hover scale/elevation provides subtle interactivity.

## Dark Mode Strategy
Lighter primary blue (0.58) and orange (0.68) maintain vibrance on dark backgrounds. Card backgrounds lift vs. page background for depth. All contrast ratios AA+ verified.

## Constraints
- Hero sections only use image + gradient overlay (no artificial blur/bloom effects)
- Rounded corners: 8px standard, 0px on sections
- All colors OKLCH only — no hex/rgb
- Shadows max 12px blur; card hover +4px elevation
- Animation durations: 0.2s–0.3s; no bouncing or elastic easing
- Realistic photography throughout; no stock photo watermarks visible
