/* =========================================================
   SANYAL DENTAL CARE & POLYCLINIC — main.js
   ========================================================= */
'use strict';

// ── HEADER SCROLL ──────────────────────────────────────────
const header = document.getElementById('site-header');
if (header) {
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── MOBILE NAV ─────────────────────────────────────────────
const hamburger   = document.getElementById('hamburger');
const mobileNav   = document.getElementById('mobile-nav');
const mobileOver  = document.getElementById('mobile-overlay');
const mobileClose = document.getElementById('mobile-close');

function openNav() {
  mobileNav?.classList.add('open');
  mobileOver?.classList.add('open');
  hamburger?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeNav() {
  mobileNav?.classList.remove('open');
  mobileOver?.classList.remove('open');
  hamburger?.classList.remove('open');
  document.body.style.overflow = '';
}
hamburger?.addEventListener('click', openNav);
mobileClose?.addEventListener('click', closeNav);
mobileOver?.addEventListener('click', closeNav);

// ── AREA TABS ──────────────────────────────────────────────
document.querySelectorAll('.area-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    document.querySelectorAll('.area-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.area-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(target)?.classList.add('active');
  });
});

// ── FAQ ACCORDION ──────────────────────────────────────────
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const isOpen = q.classList.contains('active');
    document.querySelectorAll('.faq-q').forEach(x => x.classList.remove('active'));
    document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
    if (!isOpen) {
      q.classList.add('active');
      q.nextElementSibling?.classList.add('open');
    }
  });
});

// ── FORM SUBMIT ────────────────────────────────────────────
document.querySelectorAll('form[data-booking]').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    if (!btn) return;
    const orig = btn.innerHTML;
    btn.innerHTML = '✓ Appointment Request Sent!';
    btn.style.background = '#0C7B4E';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 4500);
  });
});

// ── SCROLL REVEAL ──────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── SMOOTH SCROLL ──────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 86;
      window.scrollTo({ top, behavior: 'smooth' });
      closeNav();
    }
  });
});

// ── SET MIN DATE ───────────────────────────────────────────
document.querySelectorAll('input[type=date]').forEach(input => {
  const today = new Date().toISOString().split('T')[0];
  input.setAttribute('min', today);
  if (!input.value) input.value = '';
});
