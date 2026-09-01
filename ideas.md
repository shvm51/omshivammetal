# OM SHIVAM METAL — Design Direction

## Three directions considered

### 1. Foundry Monolith
**Very Brief Intro:** A restrained, architectural industrial experience in near-black graphite, using monumental type, silver material studies, and a sculptural ingot field. It makes aluminium feel engineered, substantial, and precise.

**Probability:** 0.06

### 2. Material Lab
**Very Brief Intro:** A light, research-led editorial identity that frames aluminium as a studied material through microscopic textures, measured annotations, and bright technical surfaces.

**Probability:** 0.03

### 3. Signal Furnace
**Very Brief Intro:** A cinematic, warm-dark digital foundry where refined amber heat signals cut through shadowed steel and reveal the journey from molten metal to finished form.

**Probability:** 0.08

---

## Chosen direction: Foundry Monolith

### Design Movement
**Industrial minimalism with editorial art-direction.** The site uses the economy, compositional drama, and material honesty of contemporary architecture publications rather than a conventional manufacturing brochure.

### Core Principles
1. **The ingot is the protagonist.** A procedural 3D ingot assembly, not photography, carries the brand's visual narrative.
2. **Weight over decoration.** Every line, animation, and interaction should feel deliberate, damped, and physically controlled.
3. **High contrast, low noise.** Near-black fields and silvery highlights create focus without corporate-blue color clutter.
4. **Technical clarity.** Short labels, systematic indices, and generous whitespace make manufacturing information feel considered and legible.

### Color Philosophy
The foundation is **Furnace Black** (`#08090A`): a nearly neutral black that lets brushed metal read as luminous rather than decorative. Graphite layers establish depth, while a muted aluminium spectrum provides tactile differentiation. **Ingot Silver** (`#D9DEE1`) is the signature color, used sparingly for material highlights, key rules, and focal actions. A restrained safety-orange heat marker is only used as a micro-accent for process indices, implying controlled energy rather than generic danger.

### Layout Paradigm
Use a **vertical editorial sequence** whose sections feel like frames in a material study. The hero is a tall pinning stage with a 3D stack crossing the composition; later sections alternate between a narrow index rail and broad typographic planes. This avoids a centered card-grid layout and creates a deliberate sense of progression.

### Signature Elements
1. **Sculptural ingot field:** A responsive, procedural WebGL assembly of tapered, bevelled ingots that reconfigures through the scroll journey.
2. **Precision index rail:** Small numeric labels, hairline rules, and material-state captions anchor each section like a specification sheet.
3. **Brushed-surface light sweep:** A faint, slow moving metallic gradient and grain overlay convey the aluminium finish without relying on decorative chrome effects.

### Interaction Philosophy
Interactions respond with controlled momentum. The ingot assembly separates incrementally as the visitor moves down the page, navigation changes from transparent to grounded once it crosses the hero, and cards react with a subtle lift and tracked-line reveal. CTAs provide immediate tactile feedback, never bouncy spectacle.

### Animation
The page uses scroll-scrubbed interpolation, not repeating attention-seeking motion. The hero’s 3D ingots rotate by only a few degrees, translate along controlled arcs, and settle into new compositions with cinematic easing. Text rises a few pixels under masks while opacity resolves; lighting shifts are slow and diffuse. All non-essential motion is reduced when `prefers-reduced-motion` is enabled, with the hero retaining a clear static material composition.

### Typography System
**Space Grotesk** is used as the expressive display face: wide, capital-led, and confident at large scale. **Manrope** provides quiet, precise body copy and metadata. Headings use tight tracking, compact line-height, and a deliberate size contrast; labels use uppercase Manrope with generous letter spacing. No default Inter styling is used.

### Brand Essence
**OM SHIVAM METAL produces aluminium ingots for industrial partners who value controlled material, consistent output, and a direct manufacturing relationship.**

**Personality:** Exacting, grounded, assured.

### Brand Voice
Headlines are declarative and material-led. CTAs are direct and commercially useful. Microcopy reads as a specification, not promotional filler.

Examples:

> “Metal, made measurable.”

> “Discuss your alloy requirement.”

### Wordmark & Logo
The wordmark is built around a squared, tracked uppercase logotype paired with a **three-plane cast-ingot symbol**: an abstract silver form made of staggered trapezoidal planes. The mark works independently as a favicon and at a strong header scale; it does not contain text.

### Signature Brand Color
**Ingot Silver — `#D9DEE1`**

### Content Boundaries
No production capacity, alloy-grade claims, certification, factory location, company history, or contact details are fabricated. The site uses clear bracketed placeholders wherever that information is required, while keeping the structural story and industry-general process descriptions intact.

### Technical Direction
The production experience will use the provided React/TypeScript static application scaffold, with reusable components and an optimized procedural Three.js ingot geometry. The WebGL canvas is constrained to a single hero scene, uses a mobile-reduced instance count and lower rendering cost, and synchronizes object/camera interpolation to scroll progress. GSAP/ScrollTrigger manages the document sequence and Lenis handles smoother scroll behavior where supported.

## Style Decisions

- Long dark stages must always carry a Foundry Monolith signal: a sculptural ingot form, a material caption, a technical index rail, or a brushed-surface light sweep.
- Photography is subordinate evidence, never the main identity. It remains dark, desaturated, tightly annotated, and offset by the ingot system.
- Light sections must read as Ingot Silver material sheets through brushed texture, dark hairlines, and technical specification rhythm rather than generic pale webpage panels.
