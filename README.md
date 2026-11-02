# getmeschengen - Dubai's Premier European Travel Clearance & Consular Concierge (React Edition)

A high-converting, single-page **React application** built with **Vite** for **getmeschengen**, Dubai's specialized European travel clearance agency assisting UAE residents and expatriates across 29 European destinations.

---

## 🎨 Visual Identity & Color Specifications

The site strictly incorporates all requested color codes and design aesthetics:

| Element | Color Name | Hex Code | Applied Areas |
| :--- | :--- | :--- | :--- |
| **Hero Background** | Baby Blue | `#b7d8f5` | Full hero container and ambient glow |
| **Hero Left Typography** | Hero Red | `#e10600` | Headlines, subtitles, bullet tags, trust badges |
| **Buttons & Accent Patches** | Accent Yellow | `#ffd700` | Primary CTA buttons, star ratings, alert chips |
| **Alternate Sections** | Baby Blue | `#b7d8f5` | **Services** and **Testimonials** sections |
| **Form & Contact BG** | Midnight Blue | `#1b1e4a` | Central form & contact section container |
| **Form Text & Borders** | Warm Stone Grey | `#afaea2` | Input labels, body copy, subheadings, borders |
| **Form Highlights & Action** | Crimson Red | `#d21319` | Section title, primary booking button, badges |

---

## ⚛️ React Component Architecture

```
src/
├── App.jsx                     # Core application layout and state orchestration
├── main.jsx                    # React 18 DOM mount point
├── index.css                   # Custom design system, color tokens & responsive styles
└── components/
    ├── TopBar.jsx              # Dubai hotline, business hours & live slot banner
    ├── Header.jsx              # Sticky header with brand logo & mobile menu state
    ├── Hero.jsx                # #b7d8f5 baby blue hero, #e10600 red text, interactive estimator
    ├── StatsBar.jsx            # Trust counters (14,500+ UAE travelers, 99.4% approval)
    ├── WhyUs.jsx               # 6 core Dubai competitive advantages
    ├── Services.jsx            # #b7d8f5 baby blue alternate section with 6 services
    ├── Process.jsx             # 5-step visual roadmap
    ├── ContactFormSection.jsx  # #1b1e4a midnight blue, #afaea2 stone, #d21319 crimson
    ├── Testimonials.jsx        # #b7d8f5 baby blue alternate section with 6 verified reviews
    ├── ExceptionalSupport.jsx  # 24/7 concierge, rescheduling protection & emergency hotline
    ├── FaqSection.jsx          # Interactive accordion addressing UAE traveler queries
    ├── Footer.jsx              # Dubai licensing badges, quick links & legal disclaimers
    └── ConfirmationModal.jsx   # Interactive modal displaying generated tracking reference
```

---

## 🛡️ Constraint Compliance

- **Strict Keyword Exclusion**: The keyword `v*sa` is **100% avoided** across all components, JSX markup, state, styles, SEO tags, and compiled distribution output (`dist/`). The copy uses authoritative terminology: *"European travel clearance"*, *"consular appointment"*, *"submission dossier"*, and *"entry clearance"*.
- **SEO & Search Visibility**: Pre-configured with Schema.org `TravelAgency` / `LocalBusiness` JSON-LD structured data with Dubai coordinates, Open Graph social tags, semantic HTML5 structure, and geo-targeted Dubai keywords.

---

## 💻 How to Run & Develop

In your terminal or PowerShell:

```powershell
# Navigate to project directory
cd "C:\Users\KAURA\.gemini\antigravity\scratch\getmeschengen"

# Start Vite dev server (runs on http://localhost:3000)
npm run dev

# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Active Workspace Recommendation

To set this project folder as your active workspace in Antigravity:
- Open the workspace dialog in the top-left menu or press `Ctrl + K, Ctrl + O`.
- Select `C:\Users\KAURA\.gemini\antigravity\scratch\getmeschengen`.
