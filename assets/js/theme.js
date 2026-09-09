/**
 * Butcher & Meat Shop - Theme Switcher (Light / Dark Mode)
 * Supports: localStorage persistence, system preference fallback, smooth transitions
 */

(function () {
  'use strict';

  const THEME_STORAGE_KEY = 'primecut_theme';
  const html = document.documentElement;

  // Detect preferred or saved theme
  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Apply theme to DOM
  function applyTheme(theme) {
    if (theme === 'dark') {
      html.classList.add('dark');
      html.setAttribute('data-bs-theme', 'dark');
    } else {
      html.classList.remove('dark');
      html.setAttribute('data-bs-theme', 'light');
    }
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    updateToggleIcons(theme);

    // Dispatch event for other modules
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  }

  // Update theme toggle buttons in header/mobile
  function updateToggleIcons(theme) {
    const toggles = document.querySelectorAll('.theme-toggle-btn');
    toggles.forEach(btn => {
      const sunIcon = btn.querySelector('.theme-icon-sun');
      const moonIcon = btn.querySelector('.theme-icon-moon');
      const label = btn.querySelector('.theme-label');

      if (theme === 'dark') {
        if (sunIcon) sunIcon.classList.remove('hidden');
        if (moonIcon) moonIcon.classList.add('hidden');
        if (label) label.textContent = 'Light Mode';
        btn.setAttribute('aria-label', 'Switch to Light Mode');
        btn.setAttribute('title', 'Switch to Light Mode');
      } else {
        if (sunIcon) sunIcon.classList.add('hidden');
        if (moonIcon) moonIcon.classList.remove('hidden');
        if (label) label.textContent = 'Dark Mode';
        btn.setAttribute('aria-label', 'Switch to Dark Mode');
        btn.setAttribute('title', 'Switch to Dark Mode');
      }
    });
  }

  // Toggle current theme
  function toggleTheme() {
    const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Add temporary class to prevent snappy CSS transition artifacts if needed
    document.body.classList.add('theme-transition');
    applyTheme(newTheme);

    setTimeout(() => {
      document.body.classList.remove('theme-transition');
    }, 350);
  }

  // Run immediately on page load to prevent flash of wrong theme
  const initialTheme = getPreferredTheme();
  if (initialTheme === 'dark') {
    html.classList.add('dark');
    html.setAttribute('data-bs-theme', 'dark');
  } else {
    html.classList.remove('dark');
    html.setAttribute('data-bs-theme', 'light');
  }

  // Bind click listeners once DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    updateToggleIcons(html.classList.contains('dark') ? 'dark' : 'light');

    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleTheme();
      });
    });

    // Listen for OS system theme change if no explicit override
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem(THEME_STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  });

  // Expose global helper if needed
  window.ThemeManager = {
    toggle: toggleTheme,
    set: applyTheme,
    get: () => html.classList.contains('dark') ? 'dark' : 'light'
  };
})();
