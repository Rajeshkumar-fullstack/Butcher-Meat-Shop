/**
 * Butcher & Meat Shop - Form Validation & Live Cut Ticket Generator
 * Handles: Custom cut live ticket update, contact form validation, and submission feedback
 */

(function () {
  'use strict';

  // Dynamic Cut Style options based on Meat Type selection
  const CUT_STYLES_BY_MEAT = {
    beef: [
      { id: 'ribeye', name: 'Prime Bone-In Ribeye' },
      { id: 'wagyu-strip', name: 'Wagyu Striploin' },
      { id: 'porterhouse', name: 'Porterhouse / T-Bone' },
      { id: 'filet', name: 'Center-Cut Tenderloin (Filet Mignon)' },
      { id: 'brisket', name: 'Full Packer Brisket' },
      { id: 'short-ribs', name: 'English-Cut Short Ribs' },
      { id: 'tomahawk', name: 'Artisan Long-Bone Tomahawk' }
    ],
    chicken: [
      { id: 'whole-roast', name: 'Whole Roaster Chicken' },
      { id: 'breast-fillet', name: 'Boneless Skinless Breast' },
      { id: 'thighs', name: 'Bone-In Thighs' },
      { id: 'spatchcock', name: 'Flattened Spatchcock' },
      { id: 'wings', name: 'Party Wings & Drumettes' },
      { id: 'drumsticks', name: 'Plump Drumsticks' }
    ],
    mutton: [
      { id: 'lamb-rack', name: 'French-Trimmed Rack of Lamb' },
      { id: 'lamb-shank', name: 'Hind Lamb Shanks' },
      { id: 'curry-cut', name: 'Bone-In Curry Stew Cut' },
      { id: 'loin-chops', name: 'Artisan Loin Chops' },
      { id: 'leg-roast', name: 'Bone-In Whole Leg of Lamb' },
      { id: 'shoulder', name: 'Slow-Roast Boneless Shoulder' }
    ],
    pork: [
      { id: 'kurobuta-chops', name: 'Kurobuta Thick-Cut Chops' },
      { id: 'spare-ribs', name: 'St. Louis Spare Ribs' },
      { id: 'tenderloin', name: 'Whole Center Tenderloin' },
      { id: 'pork-belly', name: 'Crispy Crackling Pork Belly Slab' },
      { id: 'sausage-blend', name: 'House Coarse-Ground Sausage' },
      { id: 'shoulder-butt', name: 'Boston Butt for Pulled Pork' }
    ]
  };

  // Helper validation regexes
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PHONE_REGEX = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

  // Validate a single field
  function validateField(input, testFn, errorMsg) {
    const parent = input.closest('.form-group-custom') || input.parentElement;
    let feedback = parent.querySelector('.invalid-feedback-custom');

    if (!feedback) {
      feedback = document.createElement('div');
      feedback.className = 'invalid-feedback-custom text-xs text-red-600 mt-1';
      parent.appendChild(feedback);
    }

    const isValid = testFn(input.value.trim());
    if (!isValid) {
      input.classList.add('is-invalid', 'border-red-500');
      feedback.textContent = errorMsg;
      feedback.style.display = 'block';
      return false;
    } else {
      input.classList.remove('is-invalid', 'border-red-500');
      feedback.style.display = 'none';
      return true;
    }
  }

  // --------------------------------------------------------------------------
  // Custom Cuts Page Handler
  // --------------------------------------------------------------------------
  function initCustomCutsForm() {
    const form = document.getElementById('customCutOrderForm');
    if (!form) return;

    // Elements for Live Ticket
    const meatTypeSelect = document.getElementById('cutMeatType');
    const cutStyleSelect = document.getElementById('cutStyle');
    const weightSelect = document.getElementById('cutWeight');
    const customWeightInput = document.getElementById('customWeightInput');
    const thicknessSelect = document.getElementById('cutThickness');
    const boneOptions = document.getElementsByName('bonePreference');
    const prepOptions = document.getElementsByName('prepStyle');
    const seasoningSelect = document.getElementById('cutSeasoning');
    const instructionsInput = document.getElementById('cutInstructions');

    // Live Ticket Display Fields
    const ticketNo = document.getElementById('ticketNumber');
    const ticketDate = document.getElementById('ticketDate');
    const ticketMeat = document.getElementById('ticketMeatType');
    const ticketCut = document.getElementById('ticketCutStyle');
    const ticketWeight = document.getElementById('ticketWeight');
    const ticketThickness = document.getElementById('ticketThickness');
    const ticketBone = document.getElementById('ticketBone');
    const ticketPrep = document.getElementById('ticketPrep');
    const ticketSeasoning = document.getElementById('ticketSeasoning');
    const ticketNotes = document.getElementById('ticketNotes');

    // Generate random Ticket ID
    if (ticketNo) {
      const randNum = Math.floor(1000 + Math.random() * 9000);
      ticketNo.textContent = `#PC-${randNum}`;
    }

    // Set today's date on ticket
    if (ticketDate) {
      const today = new Date();
      ticketDate.textContent = today.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    }

    // Update Cut Style options when Meat Type changes
    function updateCutStyleOptions() {
      if (!meatTypeSelect || !cutStyleSelect) return;
      const selectedMeat = meatTypeSelect.value || 'beef';
      const styles = CUT_STYLES_BY_MEAT[selectedMeat] || CUT_STYLES_BY_MEAT.beef;

      cutStyleSelect.innerHTML = styles.map(s => `
        <option value="${s.id}">${s.name}</option>
      `).join('');

      updateLiveTicket();
    }

    // Live Ticket update function
    function updateLiveTicket() {
      if (ticketMeat && meatTypeSelect) {
        const meatOption = meatTypeSelect.options[meatTypeSelect.selectedIndex];
        ticketMeat.textContent = meatOption ? meatOption.text : 'Prime Beef';
      }

      if (ticketCut && cutStyleSelect) {
        const cutOption = cutStyleSelect.options[cutStyleSelect.selectedIndex];
        ticketCut.textContent = cutOption ? cutOption.text : 'Ribeye';
      }

      if (ticketWeight && weightSelect) {
        if (weightSelect.value === 'custom' && customWeightInput && customWeightInput.value) {
          ticketWeight.textContent = `${customWeightInput.value} kg`;
        } else {
          ticketWeight.textContent = weightSelect.value;
        }
      }

      if (ticketThickness && thicknessSelect) {
        const thickOption = thicknessSelect.options[thicknessSelect.selectedIndex];
        ticketThickness.textContent = thickOption ? thickOption.text : '1.5" Standard';
      }

      if (ticketBone) {
        const selectedBone = Array.from(boneOptions).find(r => r.checked);
        ticketBone.textContent = selectedBone ? selectedBone.value : 'Bone-In';
      }

      if (ticketPrep) {
        const selectedPrep = Array.from(prepOptions).find(r => r.checked);
        ticketPrep.textContent = selectedPrep ? selectedPrep.value : 'Whole Cut';
      }

      if (ticketSeasoning && seasoningSelect) {
        const seasonOption = seasoningSelect.options[seasoningSelect.selectedIndex];
        ticketSeasoning.textContent = seasonOption ? seasonOption.text : 'Natural (Unseasoned)';
      }

      if (ticketNotes && instructionsInput) {
        const notes = instructionsInput.value.trim();
        ticketNotes.textContent = notes.length > 0 ? `"${notes}"` : 'None specified';
      }
    }

    // Bind input change events for live preview
    if (meatTypeSelect) {
      meatTypeSelect.addEventListener('change', updateCutStyleOptions);
    }
    if (cutStyleSelect) {
      cutStyleSelect.addEventListener('change', updateLiveTicket);
    }
    if (weightSelect) {
      weightSelect.addEventListener('change', () => {
        if (customWeightInput) {
          if (weightSelect.value === 'custom') {
            customWeightInput.classList.remove('hidden');
            customWeightInput.focus();
          } else {
            customWeightInput.classList.add('hidden');
          }
        }
        updateLiveTicket();
      });
    }
    if (customWeightInput) {
      customWeightInput.addEventListener('input', updateLiveTicket);
    }
    if (thicknessSelect) {
      thicknessSelect.addEventListener('change', updateLiveTicket);
    }
    boneOptions.forEach(opt => opt.addEventListener('change', updateLiveTicket));
    prepOptions.forEach(opt => opt.addEventListener('change', updateLiveTicket));
    if (seasoningSelect) {
      seasoningSelect.addEventListener('change', updateLiveTicket);
    }
    if (instructionsInput) {
      instructionsInput.addEventListener('input', updateLiveTicket);
    }

    // Run initial population
    updateCutStyleOptions();
    updateLiveTicket();

    // Form Submission & Validation
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('customerName');
      const phoneInput = document.getElementById('customerPhone');
      const emailInput = document.getElementById('customerEmail');
      const addressInput = document.getElementById('customerAddress');
      const dateInput = document.getElementById('preferredDeliveryDate');

      let isValid = true;

      isValid = validateField(nameInput, val => val.length >= 2, 'Please enter your full name (at least 2 characters)') && isValid;
      isValid = validateField(phoneInput, val => PHONE_REGEX.test(val) || val.length >= 8, 'Please enter a valid phone number') && isValid;
      isValid = validateField(emailInput, val => EMAIL_REGEX.test(val), 'Please enter a valid email address') && isValid;
      isValid = validateField(addressInput, val => val.length >= 6, 'Please enter your complete delivery address') && isValid;
      if (dateInput) {
        isValid = validateField(dateInput, val => val.length > 0, 'Please select your preferred delivery date') && isValid;
      }

      if (!isValid) {
        if (window.showToast) {
          window.showToast('Please correct the highlighted fields on the form.', 'error');
        }
        return;
      }

      // Successful order enquiry submission!
      const ticketId = ticketNo ? ticketNo.textContent : '#PC-9042';
      const successModalEl = document.getElementById('cutSuccessModal');
      const successRefEl = document.getElementById('successOrderRef');

      if (successRefEl) successRefEl.textContent = ticketId;

      if (successModalEl && window.bootstrap) {
        const bsModal = new window.bootstrap.Modal(successModalEl);
        bsModal.show();
      } else {
        alert(`Thank you! Your custom cut enquiry (${ticketId}) has been received by our master butcher. We will contact you at ${phoneInput.value} shortly.`);
      }

      // Reset form
      form.reset();
      updateCutStyleOptions();
      updateLiveTicket();
    });
  }

  // --------------------------------------------------------------------------
  // Contact Page Form Handler
  // --------------------------------------------------------------------------
  function initContactForm() {
    const form = document.getElementById('contactEnquiryForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contactName');
      const phoneInput = document.getElementById('contactPhone');
      const emailInput = document.getElementById('contactEmail');
      const meatType = document.getElementById('contactMeatType');
      const quantity = document.getElementById('contactQuantity');
      const messageInput = document.getElementById('contactMessage');

      let isValid = true;

      isValid = validateField(nameInput, val => val.length >= 2, 'Please provide your full name') && isValid;
      isValid = validateField(phoneInput, val => PHONE_REGEX.test(val) || val.length >= 8, 'Please provide a valid phone number') && isValid;
      isValid = validateField(emailInput, val => EMAIL_REGEX.test(val), 'Please provide a valid email address') && isValid;
      isValid = validateField(messageInput, val => val.length >= 10, 'Please write a message of at least 10 characters') && isValid;

      if (!isValid) {
        if (window.showToast) {
          window.showToast('Please fix the errors before sending.', 'error');
        }
        return;
      }

      // Show confirmation
      const successAlert = document.getElementById('contactSuccessAlert');
      if (successAlert) {
        successAlert.classList.remove('hidden');
        successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      if (window.showToast) {
        window.showToast('Your message has been sent to our butcher counter!', 'success');
      }

      form.reset();
    });
  }

  // --------------------------------------------------------------------------
  // Products Basket Enquiry Modal Form Handler
  // --------------------------------------------------------------------------
  function initEnquiryModalForm() {
    const form = document.getElementById('cartEnquiryModalForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('modalCustName');
      const phone = document.getElementById('modalCustPhone');
      const email = document.getElementById('modalCustEmail');
      const address = document.getElementById('modalCustAddress');

      let isValid = true;
      isValid = validateField(name, val => val.length >= 2, 'Enter your name') && isValid;
      isValid = validateField(phone, val => PHONE_REGEX.test(val) || val.length >= 8, 'Enter your phone number') && isValid;
      isValid = validateField(email, val => EMAIL_REGEX.test(val), 'Enter a valid email') && isValid;
      isValid = validateField(address, val => val.length >= 5, 'Enter your delivery address') && isValid;

      if (!isValid) return;

      // Close modal
      const modalEl = document.getElementById('enquiryModal');
      if (modalEl && window.bootstrap) {
        const bsModal = window.bootstrap.Modal.getInstance(modalEl) || new window.bootstrap.Modal(modalEl);
        if (bsModal) bsModal.hide();
      }

      // Clear basket and notify
      if (window.ProductCatalog) {
        window.ProductCatalog.clearCart();
      }

      if (window.showToast) {
        window.showToast('Enquiry received! Our butcher team will confirm your order within 30 minutes.', 'success');
      }

      form.reset();
    });
  }

  // Init on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    initCustomCutsForm();
    initContactForm();
    initEnquiryModalForm();
  });
})();
