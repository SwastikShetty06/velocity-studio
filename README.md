# 🏁 Velocity Studio - Interactive 3D Multi-Vehicle Showroom

🔗 **Live Demo**: [https://velocity-studio-iota.vercel.app](https://velocity-studio-iota.vercel.app)

An ultra-premium, scroll-driven interactive 3D WebGL vehicle showroom engineered in **Next.js (App Router)** utilizing **React Three Fiber (R3F)** and **GSAP (ScrollTrigger)**. 

Initially showcasing a highly calibrated 1967 Ford Mustang GT Fastback resting on an elegant, rotating circular pedestal stage, the architecture is designed from the ground up to be highly modular, lightweight, and extensible for adding a menu bar and multiple vehicles in the future.

---

## 🏎️ Core Interactive Features

* **Scroll-Driven Storytelling**: A seamless, interactive story flow scrubbing physical properties, 3D coordinates, and text overlays fluidly as the user scrolls.
* **Cinematic Mouse Parallax Camera**: An immersive camera rig that smoothly shifts focus and angles based on pointer movements, creating a sense of physical depth.
* **Responsive Layout Spacing**: Tailored R3F viewport layouts with dual logic branches for smartphones and desktop viewports, preventing clipping in vertical portrait displays.
* **Pristine Local environment reflections**: Powered by a locally served, 100% offline high-contrast studio environment map (`potsdamer_platz_1k.hdr`), providing gorgeous chrome highlights and window glass reflections.
* **Heritage Timeline Highway Drive**: The car transitions into a bird's-eye view centered on an asphalt road track, with yellow dashed lines scrolling under the tires to simulate driving.
* **Concentric Pedestal Stage Climax**: A high-gloss rotating turntable pedestal base that emerges in the final section, spinning the Mustang 360° continuously in visual synchronization.
* **Touch-Optimized Responsive Outro**: Centered, spacious mobile tap-target badges that seamlessly adapt on smaller screens, matching the desktop's curved circular SVG developer credentials.

---

## 🛠️ Modular Component Architecture

The codebase has been refactored to achieve complete separation of concerns, keeping `src/app/page.tsx` extremely lightweight (~260 lines) and optimized for adding more vehicles:

* **[ShowroomCanvas.tsx](file:///Users/swastik/New%20project/src/components/ShowroomCanvas.tsx)**: Standalone 3D viewport containing R3F Canvas settings, cameras, directional key/fill lights, point lights, contact shadows, environment maps, and mouse parallax controls.
* **[Mustang.tsx](file:///Users/swastik/New%20project/src/components/Mustang.tsx)**: High-fidelity 1967 Mustang 3D model traversal mesh, runtime physical material overrides (metallic paint, reflective glass, chrome spokes), and architectural turntable meshes. Exposes refs for mesh animations.
* **[HeroSection.tsx](file:///Users/swastik/New%20project/src/components/HeroSection.tsx)**: Section 0 intro title overlay.
* **[AboutSection.tsx](file:///Users/swastik/New%20project/src/components/AboutSection.tsx)**: Section 1 aerodynamics drag gauge card overlay with a sweeping mechanical needle.
* **[SpecsSection.tsx](file:///Users/swastik/New%20project/src/components/SpecsSection.tsx)**: Section 2 powertrain V8 tachometer dial overlay with an animated RPM needle.
* **[TimelineSection.tsx](file:///Users/swastik/New%20project/src/components/TimelineSection.tsx)**: Section 3 history highway milestone cards.
* **[FinaleSection.tsx](file:///Users/swastik/New%20project/src/components/FinaleSection.tsx)**: Section 4 climax screen featuring the interactive concentric signature paths (desktop) and stacked badge interfaces (mobile).

---

## ⚡ Tech Stack

* **Core**: Next.js 16.2.7 (Turbopack, App Router), TypeScript, TailwindCSS
* **3D Graphics**: Three.js, React Three Fiber (`@react-three/fiber`), React Three Drei (`@react-three/drei`)
* **Animations**: GSAP (GreenSock Animation Platform) & GSAP ScrollTrigger
* **Styling**: Modern CSS variables & custom Le Mans paper-noise magazine overlays

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) (or the port specified in your console) to view the showroom.

### 3. Build for Production
```bash
npm run build
```

---

## 💼 Developer Profile

Designed, engineered, and deployed by:

### **SWASTIK RAVI SHETTY**
* **Role**: Full Stack Developer • MERN & Java Specialist
* **Specialties**: Next.js, React, Node.js, Java, Spring Boot, WebGL, 3D Web Architectures

#### 📬 Get in Touch
* **Email**: [swastikshetty06ss@gmail.com](mailto:swastikshetty06ss@gmail.com)
* **LinkedIn**: [linkedin.com/in/swastik-shetty-186802235](https://linkedin.com/in/swastik-shetty-186802235)
* **GitHub**: [github.com/SwastikShetty06](https://github.com/SwastikShetty06)
