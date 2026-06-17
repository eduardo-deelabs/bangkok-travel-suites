# Bangkok Travel Suites Hotel — Modern Website Rebuild

## Project Goal
Build a modern, responsive, single-page hotel website using the content extracted from the old Joomla 1.5 site. The site should look professional, load fast, and work on mobile.

## Tech Stack
- HTML5 + CSS3 (no frameworks needed, keep it lightweight)
- Vanilla JavaScript (minimal, for smooth scroll and mobile menu)
- Google Fonts (elegant serif + clean sans-serif combination)
- Font Awesome icons
- CSS Grid + Flexbox for layout

## Design Direction
- **Color palette:** Warm gold (#D4AF37) + deep navy (#1a1a2e) + clean white (#ffffff) + warm gray (#f5f5f0)
- **Typography:** Playfair Display (headings) + Inter (body text)
- **Vibe:** Boutique hotel elegance, Thai hospitality warmth, modern minimalism
- **Hero section:** Full-width with subtle gradient overlay, compelling headline, CTA button
- **Sections:** Hero → About → Rooms → Services → Location → Nearby Attractions → Gallery → Contact → Footer

## Content (from extracted data)

### Hotel Info
- Name: Bangkok Travel Suites Hotel
- Address: 86/3 Moo.9 Ngamwongwan Rd, Bangkhen, Muang, Nonthaburi 11000
- Phone: 02-965-9661-2, 092-261-4394
- Fax: 02-965-9800
- Line: bangkoktravelsuites
- 40 rooms, 20 min from Don Mueang Airport

### Room Types
1. Standard Double (ห้องเตียงเดี่ยว)
2. Standard Twin (ห้องเตียงคู่)
3. Family Room (ห้องแฟมิลี่)

### Services
- Fitness center
- Free WiFi throughout
- Breakfast (7:00-10:00 AM)
- 24-hour CCTV monitoring
- Shuttle service
- Laundry service
- Parking
- Minimart

### Nearby
- The Mall Ngamwongwan
- IMPACT Muang Thong Thani
- Ministry of Public Health
- MRT Purple Line / Pink Line (10 min walk)
- Esplanade, Central Chaengwattana

### Attractions
- Koh Kred (เกาะเกร็ด)
- Wat Leng Noei Yi 2 (วัดเล่งเน่ยยี่ 2)
- Tha Nam Non (ท่าน้ำนนท์)
- IMPACT

## Image Strategy
Since we don't have the original images, create:
1. CSS-based decorative elements (geometric patterns, gradient backgrounds)
2. SVG icons for services (WiFi, fitness, breakfast, CCTV, parking, etc.)
3. Placeholder image containers with elegant styling and "Image Placeholder" text
4. A hero background using CSS gradients + subtle pattern
5. Room cards with color-coded accents instead of photos (gold for Standard Double, teal for Standard Twin, rose for Family)

## Structure
```
index.html          (single page, all sections)
css/
  styles.css        (all styles, responsive)
js/
  main.js           (mobile menu, smooth scroll, simple interactions)
images/
  (placeholder structure for future images)
```

## Features to Include
- Smooth scroll navigation
- Mobile-responsive hamburger menu
- Room cards with hover effects
- Service icons grid
- Embedded Google Maps
- Contact form (styled, non-functional since no backend)
- Floating "Book Now" CTA button
- Language toggle UI (EN/TH) — content in both languages where possible
- Back-to-top button

## Specific Requirements
1. Hero headline: "Your Home in Bangkok" or similar warm welcome
2. Subheadline emphasizing Thai hospitality + modern comfort
3. Trust signals: "40 Rooms" · "Free WiFi" · "Breakfast Included" · "20 min to Airport"
4. Room section: 3 cards with pricing placeholder ("From ฿X,XXX/night")
5. Services: 6-icon grid with labels
6. Location: Embedded map + address + transport info (MRT lines)
7. Contact: Phone (click-to-call), Line ID copy button, address
8. Footer: Copyright, quick links, social placeholders

## Quality Standards
- Semantic HTML5
- WCAG accessible (good contrast, alt text, keyboard nav)
- Mobile-first responsive design
- Fast loading (minimal dependencies, no heavy frameworks)
- Clean, well-commented code
- Cross-browser compatible
