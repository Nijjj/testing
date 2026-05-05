# Premium UPI-style Mobile App UI

A sleek, high-quality, and modern UPI-style payment app interface inspired by iOS design, built for speed and a premium feel.

## Features
- **Premium Design:** Soft gradients, modern typography, glassmorphism UI, and clean layouts.
- **Fast & Lightweight:** Built with SvelteKit, Vite, and Vanilla CSS.
- **India-Specific:** Correct Indian currency formatting (₹) and localized UX flow.
- **Responsive:** Optimized for mobile viewports.

## Screens
- **Home:** Premium balance card and quick financial actions.
- **Scan:** Instant camera access for QR scanning.
- **Pay:** Streamlined, intuitive UPI payment flow.
- **History:** Transaction history with clean formatting.
- **Profile:** User settings and account management.

## How to Run in Termux

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev -- --host
   ```

3. **Access the App:**
   Open the provided URL (e.g., `http://localhost:5173`) in your mobile browser.

## Project Structure
- `src/lib/components/screens/`: Individual screen components.
- `src/app.css`: Design system and global variables.
- `src/lib/utils.ts`: Utility functions (e.g., currency formatting).
- `src/lib/components/BottomNav.svelte`: Shared glassmorphism navigation.
