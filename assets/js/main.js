/**
 * Butcher & Meat Shop - Main Application Script
 * Handles: Mobile Navigation, Sticky Header, Scroll-To-Top, Toast Notifications
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // Sticky Navbar Effect on Scroll
  // --------------------------------------------------------------------------
  function initStickyNavbar() {
    const navbar = document.querySelector('.navbar-glass');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        navbar.classList.add('navbar-scrolled', 'shadow-md');
      } else {
        navbar.classList.remove('navbar-scrolled', 'shadow-md');
      }
    }, { passive: true });
  }

  // --------------------------------------------------------------------------
  // Mobile Navigation Drawer (Demo Format)
  // --------------------------------------------------------------------------
  function initMobileNav() {
    const toggleBtn = document.getElementById('mobileNavToggle');
    const mobileMenu = document.getElementById('mobileNavMenu');
    const backdrop = document.getElementById('mobileNavBackdrop');
    const closeBtn = document.getElementById('mobileNavClose');
    if (!toggleBtn || !mobileMenu) return;

    function setMenuState(open) {
      toggleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) {
        mobileMenu.classList.remove('hidden');
        if (backdrop) backdrop.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      } else {
        mobileMenu.classList.add('hidden');
        if (backdrop) backdrop.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.className = open ? 'bi bi-x-lg text-lg sm:text-xl' : 'bi bi-list text-lg sm:text-xl';
      }
    }

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      setMenuState(!isExpanded);
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        setMenuState(false);
      });
    }

    if (backdrop) {
      backdrop.addEventListener('click', () => {
        setMenuState(false);
      });
    }

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.classList.contains('hidden') && !mobileMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        setMenuState(false);
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        setMenuState(false);
      }
    });

    // Close on resize above mobile breakpoint
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024 && !mobileMenu.classList.contains('hidden')) {
        setMenuState(false);
      }
    }, { passive: true });

    // Close mobile nav when clicking any link or the cart button inside drawer
    mobileMenu.querySelectorAll('a, button.open-cart-btn').forEach(item => {
      item.addEventListener('click', () => {
        setMenuState(false);
      });
    });
  }

  // --------------------------------------------------------------------------
  // Scroll To Top Button
  // --------------------------------------------------------------------------
  function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTopBtn');
    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
      }
    }, { passive: true });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // Global Toast Notification Manager
  // --------------------------------------------------------------------------
  function createToastContainer() {
    let container = document.querySelector('.toast-container-custom');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container-custom';
      document.body.appendChild(container);
    }
    return container;
  }

  window.showToast = function (message, type = 'info') {
    const container = createToastContainer();
    const toast = document.createElement('div');
    toast.className = 'toast-custom';

    let iconHtml = '<i class="bi bi-info-circle-fill text-blue-600 me-2 text-lg"></i>';
    if (type === 'success') {
      iconHtml = '<i class="bi bi-check-circle-fill text-emerald-600 me-2 text-lg"></i>';
    } else if (type === 'error') {
      iconHtml = '<i class="bi bi-exclamation-octagon-fill text-red-600 me-2 text-lg"></i>';
    }

    toast.innerHTML = `
      <div class="flex items-center">
        ${iconHtml}
        <span class="text-xs font-semibold leading-snug text-stone-800 dark:text-stone-100">${message}</span>
      </div>
      <button type="button" class="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 ms-3" aria-label="Close">
        <i class="bi bi-x text-lg"></i>
      </button>
    `;

    // Close button
    toast.querySelector('button').addEventListener('click', () => {
      toast.remove();
    });

    container.appendChild(toast);

    // Auto dismiss after 4.5 seconds
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  };

  // --------------------------------------------------------------------------
  // Dynamic Year in Footer
  // --------------------------------------------------------------------------
  function initDynamicYear() {
    const yearEls = document.querySelectorAll('.dynamic-year');
    const currentYear = new Date().getFullYear();
    yearEls.forEach(el => {
      el.textContent = currentYear;
    });
  }

  // --------------------------------------------------------------------------
  // Initialize Bootstrap Offcanvas trigger for Cart
  // --------------------------------------------------------------------------
  function initCartTriggers() {
    const openCartBtns = document.querySelectorAll('.open-cart-btn');
    const cartDrawerEl = document.getElementById('cartDrawer');

    if (cartDrawerEl && window.bootstrap) {
      const bsDrawer = new bootstrap.Offcanvas(cartDrawerEl);
      openCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          bsDrawer.show();
        });
      });
    }
  }

  // --------------------------------------------------------------------------
  // Global Image Lightbox Modal for Responsive HD Inspection
  // --------------------------------------------------------------------------
  function initImageLightbox() {
    const trigger = document.getElementById('heroImageContainer');
    const modalEl = document.getElementById('imageLightboxModal');
    if (!modalEl || !window.bootstrap) return;

    const bsModal = window.bootstrap.Modal.getOrCreateInstance(modalEl);

    if (trigger) {
      function openHeroModal() {
        const img = trigger.querySelector('img');
        const modalImg = document.getElementById('imageLightboxImg');
        const modalTitle = document.getElementById('imageLightboxTitle');
        if (img && modalImg) {
          modalImg.src = img.src;
          modalImg.alt = img.alt;
        }
        if (modalTitle) {
          modalTitle.textContent = "Dry-Aged Tomahawk Ribeye";
        }
        bsModal.show();
      }

      trigger.addEventListener('click', openHeroModal);
      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openHeroModal();
        }
      });
    }

    // Support any element with data-lightbox-src
    document.querySelectorAll('[data-lightbox-src]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const src = el.getAttribute('data-lightbox-src');
        const title = el.getAttribute('data-lightbox-title') || 'Artisan Cut Inspection';
        const caption = el.getAttribute('data-lightbox-caption') || '';
        const modalImg = document.getElementById('imageLightboxImg');
        const modalTitle = document.getElementById('imageLightboxTitle');
        const modalCaption = document.getElementById('imageLightboxCaption');
        if (modalImg) modalImg.src = src;
        if (modalTitle) modalTitle.textContent = title;
        if (modalCaption) modalCaption.textContent = caption;
        bsModal.show();
      });
    });
  }

  // --------------------------------------------------------------------------
  // Animated Stat Counters (Count-up from 0 to end value on scroll)
  // --------------------------------------------------------------------------
  function initStatCounters() {
    const counterEls = document.querySelectorAll('.stat-counter, [data-counter-target]');
    if (!counterEls.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function animateCounter(el) {
      let target = el.getAttribute('data-counter-target') || el.getAttribute('data-target');
      let prefix = el.getAttribute('data-counter-prefix') || el.getAttribute('data-prefix') || '';
      let suffix = el.getAttribute('data-counter-suffix') || el.getAttribute('data-suffix') || '';
      const duration = parseInt(el.getAttribute('data-counter-duration') || '1800', 10);
      const decimals = parseInt(el.getAttribute('data-counter-decimals') || '0', 10);

      if (target === null || target === undefined) {
        const text = el.textContent.trim();
        const match = text.match(/^(.*?)(\d+(?:\.\d+)?)([^0-9]*)$/);
        if (match) {
          prefix = match[1];
          target = parseFloat(match[2]);
          suffix = match[3];
        } else {
          return;
        }
      } else {
        target = parseFloat(target);
      }

      if (prefersReducedMotion) {
        el.textContent = `${prefix}${decimals > 0 ? target.toFixed(decimals) : Math.round(target)}${suffix}`;
        return;
      }

      // Initialize starting display to 0
      el.textContent = `${prefix}0${suffix}`;

      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out cubic: fast start, soft deceleration
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = easeOut * target;

        const formattedVal = decimals > 0 ? currentVal.toFixed(decimals) : Math.round(currentVal);
        el.textContent = `${prefix}${formattedVal}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = `${prefix}${decimals > 0 ? target.toFixed(decimals) : Math.round(target)}${suffix}`;
        }
      }

      requestAnimationFrame(update);
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2, rootMargin: '0px 0px -30px 0px' });

      counterEls.forEach(el => observer.observe(el));
    } else {
      counterEls.forEach(el => animateCounter(el));
    }
  }

  // --------------------------------------------------------------------------
  // Global Phone Number Input Protection (Disallow Alphabets)
  // --------------------------------------------------------------------------
  function initPhoneInputs() {
    function restrictPhoneInput(input) {
      if (!input) return;
      input.setAttribute('inputmode', 'tel');
      input.setAttribute('autocomplete', 'tel');

      if (input.dataset.phoneRestricted) return;
      input.dataset.phoneRestricted = 'true';

      // Disallow alphabetic characters on beforeinput (modern keyboards & mobile)
      input.addEventListener('beforeinput', (e) => {
        if (e.data && /[a-zA-Z]/.test(e.data)) {
          e.preventDefault();
        }
      });

      // Disallow alphabetic characters on keydown
      input.addEventListener('keydown', (e) => {
        // Allow control keys (backspace, delete, tab, arrows, enter, escape, ctrl/cmd combos)
        if (
          e.key === 'Backspace' ||
          e.key === 'Delete' ||
          e.key === 'Tab' ||
          e.key === 'Escape' ||
          e.key === 'Enter' ||
          e.key.startsWith('Arrow') ||
          e.key === 'Home' ||
          e.key === 'End' ||
          e.ctrlKey ||
          e.metaKey
        ) {
          return;
        }

        // Strictly reject alphabetic characters
        if (/^[a-zA-Z]$/.test(e.key)) {
          e.preventDefault();
        }
      });

      // Sanitize input in real-time (removes any pasted/entered letters)
      input.addEventListener('input', (e) => {
        const originalVal = e.target.value;
        const cleaned = originalVal.replace(/[^0-9+\-()\s]/g, '');
        if (originalVal !== cleaned) {
          e.target.value = cleaned;
        }
      });

      // Handle paste explicitly to strip letters before insertion
      input.addEventListener('paste', (e) => {
        const pastedText = (e.clipboardData || window.clipboardData)?.getData('text') || '';
        if (/[a-zA-Z]/.test(pastedText)) {
          e.preventDefault();
          const cleanText = pastedText.replace(/[^0-9+\-()\s]/g, '');
          const start = input.selectionStart || 0;
          const end = input.selectionEnd || 0;
          input.value = input.value.substring(0, start) + cleanText + input.value.substring(end);
          input.selectionStart = input.selectionEnd = start + cleanText.length;
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
    }

    document.querySelectorAll('input[type="tel"], #modalCustPhone, #customerPhone, #contactPhone, #serviceCustPhone, #regPhone').forEach(restrictPhoneInput);

    // Watch for dynamically loaded inputs (e.g. modals)
    if ('MutationObserver' in window) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach(m => {
          m.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              if (node.matches && (node.matches('input[type="tel"]') || node.id === 'modalCustPhone')) {
                restrictPhoneInput(node);
              }
              if (node.querySelectorAll) {
                node.querySelectorAll('input[type="tel"], #modalCustPhone, #customerPhone, #contactPhone, #serviceCustPhone, #regPhone').forEach(restrictPhoneInput);
              }
            }
          });
        });
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }

  // Run phone protection immediately if document is already ready
  if (document.readyState !== 'loading') {
    initPhoneInputs();
  }

  // Document Ready
  document.addEventListener('DOMContentLoaded', () => {
    initPhoneInputs();
    initStickyNavbar();
    initMobileNav();
    initScrollToTop();
    initDynamicYear();
    initCartTriggers();
    initImageLightbox();
    initStatCounters();
  });
})();
