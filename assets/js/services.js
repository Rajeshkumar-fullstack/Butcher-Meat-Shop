/**
 * Prime & Cut - Butcher Services Module
 * Manages 8 specialized counter services, protocol modal details,
 * direct quote pre-filling, and service quote form submissions.
 */

(function () {
  'use strict';

  const SERVICES_DATA = {
    'carcass': {
      id: 'carcass',
      serviceNumber: 'Service 01',
      title: 'Carcass Breakdown & Portioning',
      subtitle: 'Whole & Quarter Beef, Lamb & Heritage Pork Sides',
      tag: 'Cut Sheets Available',
      badge: 'Primal Breaking • Zero Machinery Crush',
      image: 'assets/images/carcass-portioning.jpg',
      overview: 'Full primal seam breakdown of ethically raised pasture beef, spring lamb, and Berkshire pork sides. We hand-cleave, seam-separate, and portion according to custom cutting sheets allocating table steaks, slow braises, broth marrow bones, and burger grind trimmings.',
      specs: [
        { label: 'Carcass Types', value: 'Beef (Quarter/Side), Whole Lamb, Whole Berkshire Hog' },
        { label: 'Turnaround Time', value: '24–48 Hours (Dry-aging vaults available)' },
        { label: 'Allocation Sheet', value: 'Choice of bone-in vs boneless & custom steak thickness' },
        { label: 'Packaging', value: 'Peach butcher paper wrapped or vacuum barrier sealed' }
      ],
      defaultNote: 'Interested in half-beef portioning with 1.75" bone-in ribeyes, braising shanks kept whole, and remaining trimmings ground 80/20.'
    },

    'frenching': {
      id: 'frenching',
      serviceNumber: 'Service 02',
      title: 'Seam Butchery & Bone Frenching',
      subtitle: 'Polished Bone Rib Racks, Chining & Hand Tying',
      tag: 'Culinary Presentation',
      badge: 'Michelin Standard • Scraped Clean',
      image: 'assets/images/seam-frenching.jpg',
      overview: 'Precision culinary preparation for high-end dining centerpieces. Our master cutters cleanly scrape and polish bone tips on tomahawk steaks and 8-bone lamb racks, remove feather bones and chine backbones, and hand-truss rolled roasts with unbleached linen twine for uniform horizontal oven cooking.',
      specs: [
        { label: 'Applicable Cuts', value: 'Tomahawk Ribeyes, Lamb Racks, Pork Crown Roasts' },
        { label: 'Knife Craft', value: 'Clean bone scraping, chine backbone removal' },
        { label: 'Twine Trussing', value: 'Natural linen butcher knots every 1.5 inches' },
        { label: 'Turnaround Time', value: 'Same-day counter service (1–2 hours)' }
      ],
      defaultNote: 'Need 4x 8-bone lamb racks frenched to clean bone tips and 2 rolled beef rib roasts trussed for a holiday dinner.'
    },

    'grind': {
      id: 'grind',
      serviceNumber: 'Service 03',
      title: 'Custom Fat-Ratio Burger & Sausage Grinds',
      subtitle: 'Chilled 80/20, 75/25 & 70/30 Artisan Blends',
      tag: 'Cold Grinder Protocol',
      badge: 'Whole Muscle Only • Sub-2°C Plates',
      image: 'assets/images/custom-grind.jpg',
      overview: 'Single and double coarse grinds blended to your exact target ratio (80/20, 75/25, or 70/30). We grind fresh exclusively from whole muscles—brisket flat and deckle, short rib, and chuck—chilled to 0°C to guarantee zero fat smear and airy, tender burger patties with incredible crusting potential.',
      specs: [
        { label: 'Meat Primals', value: 'Whole Brisket, Chuck, Short Rib, Dry-Aged Trim' },
        { label: 'Grinder Die Size', value: 'Coarse 6mm or Medium 4.5mm stainless steel' },
        { label: 'Temperature', value: 'Strict sub-2°C cold chain to eliminate fat melting' },
        { label: 'Batch Sizes', value: '5 lbs minimum up to 150 lbs commercial batches' }
      ],
      defaultNote: 'Require 25 lbs of 75/25 brisket & short-rib coarse 6mm grind for a private smash burger event.'
    },

    'rubs': {
      id: 'rubs',
      serviceNumber: 'Service 04',
      title: 'House Rubs, Seasoning & Herb Marinades',
      subtitle: 'Coarse Peppercorn Crusts, Garlic Tallow & Texas BBQ',
      tag: 'Chef-Grade Spices',
      badge: 'Zero Additives • Deep Tallow Massage',
      image: 'assets/images/salt.png',
      overview: 'House-formulated spice rubs, whole cracked tellicherry peppercorns, crushed pink Himalayan salt blocks, and roasted garlic beef tallow rubs massaged directly into your cut fibers. Infuses deep aromatic flavor while forming an extraordinary caramelized bark when seared.',
      specs: [
        { label: 'House Blends', value: 'Montreal Peppercorn, Rosemary Garlic Tallow, Texas Oak BBQ' },
        { label: 'Application', value: 'Hand massaged and vacuum-infused' },
        { label: 'Ingredients', value: '100% whole spices, zero msg, zero artificial preservatives' },
        { label: 'Cooking Ready', value: 'Straight to hot cast iron skillet, smoker, or grill' }
      ],
      defaultNote: 'Please rub 6 Prime Tomahawk steaks with rosemary garlic tallow and coarse tellicherry pepper crust.'
    },

    'hospitality': {
      id: 'hospitality',
      serviceNumber: 'Service 05',
      title: 'Hospitality & Commercial Chef Supply',
      subtitle: 'Wholesale Portion Control for Bistros & Caterers',
      tag: 'Wholesale Pricing',
      badge: 'Calibrated Weights • Daily Cold Dispatch',
      image: 'assets/images/hospitality-supply.jpg',
      overview: 'Dedicated wholesale butchery contracts for boutique bistros, steakhouses, private yacht chefs, and banquet venues. We deliver calibrated portion consistency (within 10 grams), vacuum packaging, scheduled morning cold transport, and volume tier pricing.',
      specs: [
        { label: 'Client Types', value: 'Restaurants, Hotels, Yacht Chefs, Catering Teams' },
        { label: 'Portion Control', value: 'Laser-checked scale precision to target oz/grams' },
        { label: 'Delivery Schedule', value: 'Scheduled 6:00 AM – 9:00 AM express cold van' },
        { label: 'Account Terms', value: 'Net-15 and Net-30 commercial billing available' }
      ],
      defaultNote: 'Inquiring about weekly recurring delivery of 40x 12oz Wagyu striploins and 30x frenched lamb racks for our restaurant.'
    },

    'cryovac': {
      id: 'cryovac',
      serviceNumber: 'Service 06',
      title: 'Cryovac Vacuum Packing & Blast Chilling',
      subtitle: 'Commercial Oxygen-Barrier Barrier Protection',
      tag: 'Extended Shelf Life',
      badge: 'Heavy 4-Mil Pouches • Sous-Vide Ready',
      image: 'assets/images/cryovac-packing.jpg',
      overview: 'Commercial chamber vacuum packaging in durable 4-mil barrier pouches. Eliminates oxygen contact to safeguard natural meat juices, prevents freezer crystallization burn for up to 18 months, and allows direct bath immersion for water-bath sous-vide cooking.',
      specs: [
        { label: 'Pouch Gauge', value: '4-mil heavy-gauge BPA-free puncture resistant' },
        { label: 'Freezer Life', value: 'Up to 18 months zero oxidation or freezer burn' },
        { label: 'Sous-Vide Compatible', value: 'Heat-sealed for water bath cooking up to 90°C' },
        { label: 'Labeling', value: 'Includes animal breed, cut date, weight, and lot SKU' }
      ],
      defaultNote: 'Need my entire order vacuum sealed individually in 4-mil pouches with cut labels for sous-vide cooking.'
    },

    'roast': {
      id: 'roast',
      serviceNumber: 'Service 07',
      title: 'Whole-Animal Event Roasts (Spit Ready)',
      subtitle: 'Suckling Pigs, Whole Lambs & Organic Turkeys',
      tag: 'Spit-Roast Ready',
      badge: 'Trussed & Balanced • Charcoal Spit Ready',
      image: 'assets/images/whole-roasts.jpg',
      overview: 'Custom provisioning of whole suckling pigs (15–35 lbs), milk-fed spring lambs (25–45 lbs), and whole turkeys. Trussed, spine-wired, seasoned, and balanced on stainless spit skewers ready for open-flame rotisserie cooking at weddings and garden banquets.',
      specs: [
        { label: 'Animal Selection', value: 'Suckling Berkshire Pig, Grass-fed Lamb, Free-Range Broilers' },
        { label: 'Preparation', value: 'Internal cavity seasoned with herbs, salt, and citrus' },
        { label: 'Hardware', value: 'Spit rod spine clamp wiring upon request' },
        { label: 'Lead Time', value: '72 hours notice required' }
      ],
      defaultNote: 'Planning an event for 40 guests on next Saturday; requesting a 30 lb whole suckling pig trussed and seasoned for rotisserie.'
    },

    'knives': {
      id: 'knives',
      serviceNumber: 'Service 08',
      title: 'Waterstone Knife Sharpening & Masterclasses',
      subtitle: 'Japanese Whetstone Honing & Weekend Butchery Demos',
      tag: 'Weekend Bookings',
      badge: '1000/6000 Grit Waterstones • Razor Edge',
      image: 'assets/images/knife-sharpening.jpg',
      overview: 'Professional hand sharpening on Japanese Naniwa waterstones (400, 1000, 3000, 8000 grit) followed by leather stropping to restore razor-sharp 15° cutting bevels to boning, chef, and cimeter knives. We also host intimate weekend evening workshops on pig breakdown and sausage linking.',
      specs: [
        { label: 'Sharpening Tech', value: '100% hand waterstone grinding, zero electric heat burn' },
        { label: 'Turnaround', value: 'Drop off Friday morning, pickup Saturday 10:00 AM' },
        { label: 'Butchery Workshops', value: '3-hour Saturday hands-on masterclasses (max 8 seats)' },
        { label: 'Tools Covered', value: 'Boning knives, cleavers, chef knives, carving blades' }
      ],
      defaultNote: 'I have 4 carbon steel Japanese kitchen knives requiring hand waterstone edge sharpening and reprofiling.'
    }
  };

  // Populate and open Service Details Modal
  function openServiceModal(serviceKey) {
    const s = SERVICES_DATA[serviceKey];
    if (!s) return;

    const modalTitle = document.getElementById('srvModalTitle');
    const modalBadge = document.getElementById('srvModalBadge');
    const modalSubtitle = document.getElementById('srvModalSubtitle');
    const modalImg = document.getElementById('srvModalImg');
    const modalOverview = document.getElementById('srvModalOverview');
    const modalSpecs = document.getElementById('srvModalSpecs');
    const bookBtn = document.getElementById('srvModalBookBtn');

    if (modalTitle) modalTitle.textContent = s.title;
    if (modalBadge) modalBadge.textContent = s.badge;
    if (modalSubtitle) modalSubtitle.textContent = s.subtitle;
    if (modalImg) {
      modalImg.src = s.image;
      modalImg.alt = s.title;
    }
    if (modalOverview) modalOverview.textContent = s.overview;

    if (modalSpecs && Array.isArray(s.specs)) {
      modalSpecs.innerHTML = s.specs.map(spec => `
        <div class="p-3 rounded-xl bg-stone-100 dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700">
          <span class="text-[10px] uppercase font-bold text-red-700 dark:text-red-400 block mb-0.5">${spec.label}</span>
          <span class="text-xs font-semibold text-stone-900 dark:text-stone-100 block">${spec.value}</span>
        </div>
      `).join('');
    }

    if (bookBtn) {
      bookBtn.onclick = () => {
        // Close modal
        const modalEl = document.getElementById('serviceDetailModal');
        if (modalEl && window.bootstrap) {
          const bs = window.bootstrap;
          const modalInstance = bs.Modal.getInstance(modalEl) || new bs.Modal(modalEl);
          modalInstance.hide();
        }
        // Select service in quote form and scroll smoothly
        selectServiceInForm(s.id);
      };
    }

    // Show modal
    const modalEl = document.getElementById('serviceDetailModal');
    if (modalEl && window.bootstrap) {
      const bs = window.bootstrap;
      const modalInstance = bs.Modal.getInstance(modalEl) || new bs.Modal(modalEl);
      modalInstance.show();
    }
  }

  // Pre-select service in enquiry form and scroll down
  function selectServiceInForm(serviceKey) {
    const s = SERVICES_DATA[serviceKey];
    const select = document.getElementById('serviceSelect');
    const reqTextarea = document.getElementById('serviceCustRequirements');
    const formSection = document.getElementById('serviceEnquirySection');

    if (select && s) {
      select.value = s.id;
    }
    if (reqTextarea && s && !reqTextarea.value.trim()) {
      reqTextarea.value = s.defaultNote;
    }

    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Add temporary highlight pulse to the form card
      const formCard = formSection.querySelector('.bg-white');
      if (formCard) {
        formCard.classList.add('ring-4', 'ring-red-700/40', 'transition-all');
        setTimeout(() => {
          formCard.classList.remove('ring-4', 'ring-red-700/40');
        }, 2000);
      }

      // Focus first input
      const nameInput = document.getElementById('serviceCustName');
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 600);
      }
    }
  }

  // Bind service cards and buttons
  function initServiceCards() {
    // Service Cards & Links click handlers
    document.querySelectorAll('[data-service]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const serviceKey = el.getAttribute('data-service');
        if (serviceKey) {
          openServiceModal(serviceKey);
        }
      });
    });

    // Direct "Quick Request Quote" buttons
    document.querySelectorAll('[data-quick-quote]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const serviceKey = btn.getAttribute('data-quick-quote');
        if (serviceKey) {
          selectServiceInForm(serviceKey);
        }
      });
    });

    // Form Submission Handling
    const form = document.getElementById('serviceEnquiryForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('serviceCustName');
        const phoneInput = document.getElementById('serviceCustPhone');
        const emailInput = document.getElementById('serviceCustEmail');
        const serviceSelect = document.getElementById('serviceSelect');

        if (!nameInput || !nameInput.value.trim()) {
          if (window.showToast) window.showToast('Please enter your full name.', 'error');
          return;
        }
        if (!phoneInput || !phoneInput.value.trim()) {
          if (window.showToast) window.showToast('Please enter your phone number.', 'error');
          return;
        }
        if (!emailInput || !emailInput.value.trim()) {
          if (window.showToast) window.showToast('Please enter your email address.', 'error');
          return;
        }

        const selectedServiceTitle = serviceSelect && serviceSelect.options[serviceSelect.selectedIndex] 
          ? serviceSelect.options[serviceSelect.selectedIndex].text 
          : 'Custom Butcher Service';

        // Generate realistic quote ticket reference
        const refCode = 'SRV-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
        const refEl = document.getElementById('serviceRefCode');
        if (refEl) refEl.textContent = refCode;

        // Display success confirmation alert
        const alertBox = document.getElementById('serviceSuccessAlert');
        if (alertBox) {
          alertBox.classList.remove('hidden');
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        if (window.showToast) {
          window.showToast(`Service request ${refCode} submitted! Our head butcher will contact you within 2 hours.`, 'success');
        }

        form.reset();
      });
    }
  }

  // Expose globally
  window.ButcherServices = {
    openModal: openServiceModal,
    requestService: selectServiceInForm,
    getService: (k) => SERVICES_DATA[k]
  };

  document.addEventListener('DOMContentLoaded', initServiceCards);
})();
