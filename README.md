# Dana St. Hill — Artist & Developer Portfolio

A personal portfolio website built with **SvelteKit** and **Tailwind CSS (DaisyUI)** for Dana St. Hill — a multidisciplinary artist and game developer.  
The site is designed to showcase a wide range of creative work through an interactive, visually distinctive experience.

---

## ✨ Overview

This portfolio highlights work across six creative categories:

- 3D Environments  
- Graphic Design  
- Game Development  
- 3D Assets  
- Illustrations & Digital Art  
- Paintings & Sculptures  

The experience blends playful interaction with a clean, structured layout to reflect both artistic personality and technical precision.

---

## 🏠 Homepage Experience

The homepage opens with:

- A **large name header** and specialty title  
- **Six interactive billiard balls**, each representing a category  
  - Acts as both a visual element and navigation  
  - Routes directly to a **pre-filtered gallery view**  

Additional sections include:

- About Me  
- Skills & Knowledge graphic  
- Contact form  
- Social links (ArtStation, LinkedIn, Instagram)

---

## 🧭 Navigation

- **Sticky black navbar** with a dashed border  
- Desktop:
  - Pill-style navigation links  
- Mobile:
  - Full-screen sidebar  
  - Slides in from the left  
  - Large numbered menu items with a bold editorial feel  

---

## 🖼️ Gallery System

The portfolio gallery is designed for both performance and visual rhythm:

- **CSS columns masonry layout**
- Deterministic size variation (some cards are taller)
- **URL-driven filtering**
  - `/portfolio/[category]` loads a pre-filtered view
  - Filter state stays synced with the address bar

### Image Loading Strategy

- Images load **eagerly** for immediate visibility  
- **Shimmer skeleton placeholders**:
  - Reserve layout space from first paint  
  - Prevent layout shift  
- Each image:
  - Fades in individually after decoding  
- Layout stability:
  - Skeleton + image use `position: absolute`  
  - Wrapped in a fixed aspect-ratio container  
  - Ensures **zero reflow or background bleed** at any scroll speed  

---

## 🎨 Design System

The visual identity combines handmade charm with structured design:

- **Typography**:
  - Gaegu  
  - Patrick Hand SC  

- **Styling**:
  - Black-and-white brutalist card system  
  - Offset box shadows  
  - Dashed borders  
  - Tiled inverted texture background  

- **Tone**:
  - Playful yet polished  
  - Editorial and tactile  

---

## 🛠️ Tech Stack

- **Framework:** SvelteKit  
- **Styling:** Tailwind CSS + DaisyUI  
- **Routing:** File-based (SvelteKit)  
- **State:** URL-driven filtering  
- **Performance Focus:**
  - Zero layout shift image loading  
  - Deterministic layout rendering  

---

## 🚀 Key Features

- Interactive homepage navigation via billiard balls  
- Deep-linkable, pre-filtered gallery views  
- Fully responsive navigation system  
- Stable, high-performance image rendering  
- Strong visual identity with consistent design language  

---

## 📬 Contact

Includes a built-in contact form and links to:

- ArtStation  
- LinkedIn  
- Instagram  

---

## 📄 License

This project is a custom portfolio build for Dana St. Hill.  
All artwork and content belong to their respective owner.# DanaPortfolio
