/* ============================================================
   SANYAL DENTAL CARE — Main JS
   ============================================================ */

// ── Navbar scroll effect ──────────────────────────────────────
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ── Mobile hamburger ──────────────────────────────────────────
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// ── Active nav link ───────────────────────────────────────────
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ── Fade-in on scroll ─────────────────────────────────────────
const fadeEls = document.querySelectorAll('.fade-in');
if (fadeEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => observer.observe(el));
}

// ── Form submission (demo) ────────────────────────────────────
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = form.querySelector('.success-msg');
    if (msg) { msg.classList.add('visible'); }
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.textContent = '✓ Appointment Request Sent!';
      btn.style.background = '#28A745';
      btn.disabled = true;
    }
    setTimeout(() => {
      if (msg) msg.classList.remove('visible');
      if (btn) { btn.textContent = 'Book Appointment'; btn.style.background = ''; btn.disabled = false; }
      form.reset();
    }, 5000);
  });
});

// ── Set min date on date inputs ───────────────────────────────
document.querySelectorAll('input[type="date"]').forEach(input => {
  const today = new Date().toISOString().split('T')[0];
  input.setAttribute('min', today);
});

// ── Show hero booking card on mobile ─────────────────────────
const heroCard = document.querySelector('.hero-card');
if (heroCard && window.innerWidth <= 768) {
  heroCard.classList.add('mobile-visible');
}
