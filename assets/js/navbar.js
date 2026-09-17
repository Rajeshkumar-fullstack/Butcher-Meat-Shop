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

    // Desktop hover handling
    dropdown.addEventListener('mouseenter', () => {
      if (window.innerWidth >= 992) {
        clearTimeout(timeoutId);
        menu.classList.add('show');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });

    dropdown.addEventListener('mouseleave', () => {
      if (window.innerWidth >= 992) {
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

