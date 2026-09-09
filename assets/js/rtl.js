/**
 * Butcher & Meat Shop - RTL Support Switcher
 * Supports: LTR / RTL toggle, localStorage persistence, icon flipping, directional alignment
 */

(function () {
  'use strict';

  const RTL_STORAGE_KEY = 'primecut_direction';
  const html = document.documentElement;

  // Retrieve saved direction - defaults strictly to 'ltr'
  function getSavedDirection() {
    // Reset any legacy stuck 'rtl' state so the website opens cleanly in LTR mode
    if (!sessionStorage.getItem('primecut_ltr_enforced')) {
      sessionStorage.setItem('primecut_ltr_enforced', 'true');
      localStorage.setItem(RTL_STORAGE_KEY, 'ltr');
      return 'ltr';
    }
    const saved = localStorage.getItem(RTL_STORAGE_KEY);
    return saved === 'rtl' ? 'rtl' : 'ltr';
  }

  // Apply direction to DOM
  function applyDirection(dir) {
    if (dir === 'rtl') {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
    } else {
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', 'en');
    }
    localStorage.setItem(RTL_STORAGE_KEY, dir);
    updateToggleButtons(dir);

    // Dispatch custom event for layout adjustments
    window.dispatchEvent(new CustomEvent('dirChanged', { detail: { direction: dir } }));
  }

  // Update UI toggles
  function updateToggleButtons(dir) {
    const toggles = document.querySelectorAll('.rtl-toggle-btn');
    toggles.forEach(btn => {
      const textSpan = btn.querySelector('.rtl-label');
      if (dir === 'rtl') {
        if (textSpan) textSpan.textContent = 'LTR';
        btn.setAttribute('aria-label', 'Switch to Left to Right layout');
        btn.setAttribute('title', 'Switch to Left to Right layout');
        btn.classList.add('active-rtl');
      } else {
        if (textSpan) textSpan.textContent = 'RTL';
        btn.setAttribute('aria-label', 'Switch to Right to Left layout');
        btn.setAttribute('title', 'Switch to Right to Left layout');
        btn.classList.remove('active-rtl');
      }
    });
  }

  // Toggle function
  function toggleDirection() {
    const currentDir = html.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
    applyDirection(newDir);
  }

  // Apply direction immediately before render to avoid reflow - Default LTR
  const initialDir = getSavedDirection();
  if (initialDir === 'rtl') {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'ar');
  } else {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', 'en');
  }

  // Setup DOM listeners
  document.addEventListener('DOMContentLoaded', () => {
    updateToggleButtons(html.getAttribute('dir') || 'ltr');

    document.querySelectorAll('.rtl-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleDirection();
      });
    });
  });

  // Global expose
  window.RtlManager = {
    toggle: toggleDirection,
    set: applyDirection,
    get: () => html.getAttribute('dir') || 'ltr'
  };
})();
