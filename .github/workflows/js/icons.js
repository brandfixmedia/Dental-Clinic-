/* ============================================================
   SANYAL DENTAL — SVG Icon System
   Replaces all emoji icons with scalable SVG for cross-browser support
   ============================================================ */

const ICONS = {
  tooth: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M12 2C9.5 2 7.5 3.5 6 5C4.5 6.5 4 8 4 9.5C4 11 4.5 13 5 15C5.5 17 6 19 6.5 20.5C7 22 7.5 22 8 22C8.5 22 9 21 9.5 19C10 17 10.5 15 12 15C13.5 15 14 17 14.5 19C15 21 15.5 22 16 22C16.5 22 17 22 17.5 20.5C18 19 18.5 17 19 15C19.5 13 20 11 20 9.5C20 8 19.5 6.5 18 5C16.5 3.5 14.5 2 12 2Z" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
  </svg>`,

  star: `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,

  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,

  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,

  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 013 3 2 2 0 014.11 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>`,

  email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
};

// Replace emoji placeholders with SVG on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Already handled via inline SVG — this file is a fallback registry
});
