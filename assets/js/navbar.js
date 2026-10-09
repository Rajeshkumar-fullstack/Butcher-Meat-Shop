/**
 * ==========================================================================
 * PRIME & CUT — NAVBAR & NAVIGATION MANAGER
 * Manages active link states, mobile navigation toggles, multi-level dropdowns,
 * keyboard accessibility, and page URL matching.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarActiveLink();
  initMobileMenuHandler();
  initDropdownKeyboardAccess();
  initNavbarDropdowns();
});

/**
 * Highlights current page in navigation menus automatically
 */
function initNavbarActiveLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.desktop-nav-menu .nav-link, .desktop-nav-menu .nav-link-custom, .desktop-nav-menu .dropdown-item');

  // Reset all desktop active states
  navLinks.forEach(link => {
    link.classList.remove('active');
    link.removeAttribute('aria-current');
  });
  document.querySelectorAll('.desktop-nav-menu .dropdown-toggle').forEach(dt => dt.classList.remove('active'));

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    let isMatch = (href === currentPath || (currentPath === '' && href === 'index.html'));

    // Associate sub-pages with parent single page link
    if (!isMatch && href === 'products.html' && (currentPath === 'product-details.html' || currentPath === 'custom-cuts.html')) {
      isMatch = true;
    }
    if (!isMatch && href === 'blog.html' && currentPath === 'blog-details.html') {
      isMatch = true;
    }

    if (isMatch) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
      
      // If it's inside a dropdown, highlight the parent dropdown toggle as well
      const parentDropdown = link.closest('.dropdown');
      if (parentDropdown) {
        const toggle = parentDropdown.querySelector('.dropdown-toggle');
        if (toggle) {
          toggle.classList.add('active');
        }
      }
    }
  });

  // Also highlight matching link in mobile navigation drawer
  const mobileLinks = document.querySelectorAll('#mobileNavMenu a');
  mobileLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    let isMatch = (href === currentPath || (currentPath === '' && href === 'index.html'));
    if (!isMatch && href === 'products.html' && (currentPath === 'product-details.html' || currentPath === 'custom-cuts.html')) {
      isMatch = true;
    }
    if (!isMatch && href === 'blog.html' && currentPath === 'blog-details.html') {
      isMatch = true;
    }

    if (isMatch) {
      link.classList.add('bg-red-100/70', 'dark:bg-red-950/50', 'text-red-900', 'dark:text-red-300', 'font-semibold');
      link.classList.remove('text-stone-800', 'dark:text-stone-200', 'hover:bg-stone-100', 'font-medium');
    } else {
      link.classList.remove('bg-red-100/70', 'dark:bg-red-950/50', 'text-red-900', 'dark:text-red-300', 'font-semibold');
      link.classList.add('text-stone-800', 'dark:text-stone-200', 'hover:bg-stone-100', 'font-medium');
    }
  });
}

/**
 * Mobile drawer and offcanvas navigation helper
 */
function initMobileMenuHandler() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const closeMobileNavBtn = document.getElementById('closeMobileNavBtn');

  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNavDrawer.classList.toggle('show');
      document.body.classList.toggle('overflow-hidden');
    });
  }

  if (closeMobileNavBtn && mobileNavDrawer) {
    closeMobileNavBtn.addEventListener('click', () => {
      mobileNavDrawer.classList.remove('show');
      document.body.classList.remove('overflow-hidden');
    });
  }

  // Close when clicking outside drawer
  document.addEventListener('click', (e) => {
    if (mobileNavDrawer && mobileNavDrawer.classList.contains('show')) {
      if (!mobileNavDrawer.contains(e.target) && mobileMenuBtn && !mobileMenuBtn.contains(e.target)) {
        mobileNavDrawer.classList.remove('show');
        document.body.classList.remove('overflow-hidden');
      }
    }
  });
}

/**
 * Enhanced keyboard accessibility for dropdown menus
 */
function initDropdownKeyboardAccess() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openDropdowns = document.querySelectorAll('.dropdown-menu.show');
      openDropdowns.forEach(menu => {
        menu.classList.remove('show');
        const toggle = menu.closest('.dropdown')?.querySelector('.dropdown-toggle');
        if (toggle) {
          toggle.setAttribute('aria-expanded', 'false');
          toggle.focus();
        }
      });
    }
  });
}

/**
 * Robust dropdown interaction handler for desktop hover and universal click
 */
function initNavbarDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');
    if (!toggle || !menu) return;

    let timeoutId;

    // Helper to position account/end-aligned dropdown cleanly inside viewport
    function alignDropdownMenu() {
      if (dropdown.classList.contains('nav-account-dropdown') || menu.classList.contains('dropdown-menu-end')) {
        const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
        if (isRtl) {
          menu.style.setProperty('right', 'auto', 'important');
          menu.style.setProperty('left', '0px', 'important');
          menu.style.setProperty('inset', 'auto auto auto 0px', 'important');
        } else {
          menu.style.setProperty('left', 'auto', 'important');
          menu.style.setProperty('right', '0px', 'important');
          menu.style.setProperty('inset', 'auto 0px auto auto', 'important');
        }
        menu.style.setProperty('transform', 'translateY(0)', 'important');
      }
    }

    // Desktop / Tablet hover handling
    dropdown.addEventListener('mouseenter', () => {
      if (window.innerWidth >= 720) {
        clearTimeout(timeoutId);
        alignDropdownMenu();
        menu.classList.add('show');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });

    dropdown.addEventListener('mouseleave', () => {
      if (window.innerWidth >= 720) {
        timeoutId = setTimeout(() => {
          menu.classList.remove('show');
          toggle.setAttribute('aria-expanded', 'false');
        }, 150);
      }
    });

    // Universal click toggle
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menu.classList.contains('show');

      // Close other open dropdowns
      document.querySelectorAll('.dropdown-menu.show').forEach(m => {
        if (m !== menu) {
          m.classList.remove('show');
          const otherToggle = m.closest('.dropdown')?.querySelector('.dropdown-toggle');
          if (otherToggle) otherToggle.setAttribute('aria-expanded', 'false');
        }
      });

      if (isOpen) {
        menu.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        alignDropdownMenu();
        menu.classList.add('show');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Close open dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
        menu.classList.remove('show');
        const toggle = menu.closest('.dropdown')?.querySelector('.dropdown-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      });
    }
  });
}

