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
});

/**
 * Highlights current page in navigation menus automatically
 */
function initNavbarActiveLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .nav-link-custom, .dropdown-item, .mobile-nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    let isMatch = (href === currentPath || (currentPath === '' && href === 'index.html'));

    // Associate sub-pages with parent single page link
    if (!isMatch && href === 'products.html' && (currentPath === 'product-details.html' || currentPath === 'custom-cuts.html' || currentPath === 'pricing.html')) {
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
