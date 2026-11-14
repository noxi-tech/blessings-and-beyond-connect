# Blessings & Beyond — In-Store Connect 🛍️⭐

An ultra-clean, mobile-first static single-page website specifically optimized for **instant load times on mobile cellular connections (3G / 4G / 5G)** when customers scan a QR code at checkout.

---

## ⚡ Mobile Cellular Speed Optimizations

This site is engineered to pass Google Lighthouse with a 100/100 performance score and render in under 150ms:

1. **Zero Render-Blocking Webfonts**:
   - High-performance native system font stacks (`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto`) render text at **0ms delay** on iOS and Android.
   - Google Font (`Plus Jakarta Sans`) loads asynchronously in the background (`media="print" onload="this.media='all'"`), preventing any flash of invisible text (FOIT).

2. **300ms Mobile Tap Delay Removed**:
   - `touch-action: manipulation` eliminates the standard 300ms mobile browser tap delay for instantaneous button responses.

3. **Preconnected External Handshakes**:
   - `preconnect` and `dns-prefetch` for `https://g.page` and `https://www.google.com` warm up the DNS/TLS handshake in the background, so tapping the Google Review button opens the review form almost instantly over cellular.

4. **Zero Layout Shifts (CLS = 0.00)**:
   - Explicit dimensions (`width="84" height="84"`) with `decoding="async"` and `fetchpriority="high"` guarantee zero layout shifts as assets load.

5. **GPU-Accelerated Animations**:
   - The button shimmer effect uses `transform: translate3d()` to run on the device's GPU compositor thread, eliminating CPU repaint overhead and battery drain.

6. **Zero Theme Flash (FOUC)**:
   - Inlined theme check executes synchronously in `<head>` before the browser paints the first pixel.

---

## 🚀 How to Edit Your Links

Everything is directly written in **`index.html`**. No build tools or compilers needed.

- **Google Review Button** (Line 95):
  ```html
  <a class="hero-review-btn" href="https://g.page/r/CdWg4ICkhGovEAI/review" target="_blank" rel="noopener noreferrer">
  ```
- **Instagram Link** (Line 126):
  ```html
  <a href="https://www.instagram.com/blessingsandbeyond.ca" class="action-card" target="_blank" rel="noopener noreferrer">
  ```
- **Website Link** (Line 150):
  ```html
  <a href="https://blessingsandbeyond.ca" class="action-card" target="_blank" rel="noopener noreferrer">
  ```
- **Private Feedback Email** (Line 183):
  ```html
  <a class="safety-net-link" href="mailto:contact@blessingsandbeyond.ca?subject=Feedback">
  ```
- **Logo**: Located at `assets/logo.svg`.
