# Premium UPI-style Mobile App UI

A sleek, high-quality, and modern UPI-style payment app interface built for speed and premium feel.

## Features
- **PWA Ready:** Install it on your phone for a native app experience.
- **Premium Design:** Soft gradients, modern typography, and clean layouts.
- **Fast & Lightweight:** Built with React + Vite + Vanilla CSS.
- **Responsive:** Optimized for mobile viewports.

## Screens
- **Home:** Balance visualization and quick actions.
- **Scan:** Simulated QR scanner with animation.
- **Pay:** Contact-based payment flow with amount entry.
- **History:** Categorized transaction logs.
- **Profile:** User settings and profile management.

## How to Run in Termux

1. **Install Dependencies:**
   If you see any errors, use the "force" command:
   ```bash
   npm install --force --legacy-peer-deps
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```

3. **Access the App:**
   Vite will provide a URL (usually `http://localhost:5173`). Open this in your mobile browser.

## How to use as an "App" (PWA)

1. Open the URL in your browser (Chrome/Safari).
2. Tap the **Menu** (or Share) icon.
3. Select **"Add to Home Screen"**.
4. The app will now appear on your home screen with its own icon and will run full-screen without browser bars.

## Project Structure
- `src/App.tsx`: Main application logic and screens.
- `src/index.css`: Premium styles and global variables.
- `vite.config.ts`: PWA and build configuration.
- `public/favicon.svg`: High-resolution app icon.
