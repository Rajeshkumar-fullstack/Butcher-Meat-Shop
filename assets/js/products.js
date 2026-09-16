/**
 * Butcher & Meat Shop - Products Catalog & Enquiry Cart Management
 * Handles: Category filtering, search, sorting, cart drawer, and enquiry submission
 */

(function () {
  'use strict';

  // Master product database: 20 unique premium meat items
  const PRODUCTS = [
    // BEEF
    {
      id: 'beef-1',
      name: '28-Day Dry-Aged Ribeye',
      titleLine1: '28-Day Dry-Aged',
      titleLine2: 'Prime Ribeye',
      category: 'beef',
      categoryLabel: 'Prime Beef',
      price: 34.99,
      unit: '500g',
      tag: 'Dry-Aged 28 Days',
      badgeClass: 'badge-beef',
      image: 'assets/images/salt.png',
      description: 'Hand-selected Angus beef, dry-aged on Himalayan salt blocks for concentrated savory umami flavor and melt-in-your-mouth tenderness.'
    },
    {
      id: 'beef-2',
      name: 'Japanese Wagyu A5 Striploin',
      titleLine1: 'Japanese Wagyu A5',
      titleLine2: 'Striploin Steak',
      category: 'beef',
      categoryLabel: 'Prime Beef',
      price: 89.50,
      unit: '300g',
      tag: 'Miyazaki A5 Certified',
      badgeClass: 'badge-beef',
      image: 'assets/images/beef/wagyu-a5.jpg',
      description: 'Exquisite snowflake marbling with a buttery texture that melts at room temperature. The pinnacle of luxury butchery.'
    },
    {
      id: 'beef-3',
      name: 'Prime Porterhouse (T-Bone)',
      titleLine1: 'Prime Porterhouse',
      titleLine2: 'T-Bone Steak',
      category: 'beef',
      categoryLabel: 'Prime Beef',
      price: 42.00,
      unit: '750g',
      tag: 'Butcher’s Reserve',
      badgeClass: 'badge-beef',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
      description: 'The ultimate steak lover’s cut featuring both tender filet mignon and full-flavored New York strip connected by the bone.'
    },
    {
      id: 'beef-4',
      name: 'Center-Cut Filet Mignon',
      titleLine1: 'Center-Cut Prime',
      titleLine2: 'Filet Mignon',
      category: 'beef',
      categoryLabel: 'Prime Beef',
      price: 38.00,
      unit: '400g',
      tag: 'Grass-Fed Angus',
      badgeClass: 'badge-beef',
      image: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=800&q=80',
      description: 'Extremely lean yet exceptionally tender tenderloin medallions, hand-trimmed to pure perfection by our head butcher.'
    },
    {
      id: 'beef-5',
      name: 'Whole Texas Smoker Brisket',
      titleLine1: 'Whole Texas Smoker',
      titleLine2: 'Packer Brisket',
      category: 'beef',
      categoryLabel: 'Prime Beef',
      price: 68.00,
      unit: '2.5kg',
      tag: 'Pitmaster Choice',
      badgeClass: 'badge-beef',
      image: 'assets/images/blog/hardwood-smoked-brisket.jpg',
      description: 'Packer cut brisket with intact fat cap, ideal for slow 14-hour hardwood smoke. Rich, collagenous, and deeply flavorful.'
    },
    {
      id: 'tomahawk',
      name: 'Dry-Aged Prime Tomahawk Ribeye',
      titleLine1: 'Dry-Aged Prime',
      titleLine2: 'Tomahawk Ribeye',
      category: 'beef',
      categoryLabel: 'Prime Beef',
      price: 64.00,
      unit: '45oz',
      portion: 'Showpiece Cut',
      tag: "Today's Reserve Cut",
      badgeClass: 'badge-beef',
      image: 'assets/images/image.png',
      description: 'Massive long-bone bone-in ribeye frenched by hand to expose the pristine rib bone handle. Exceptional BMS 7+ marbling aged 35 days for deep nutty steakhouse flavor.'
    },
    {
      id: 'beef-ribs',
      name: 'Prime Dinosaur Beef Plate Short Ribs',
      titleLine1: 'Prime Dinosaur',
      titleLine2: 'Beef Short Ribs',
      category: 'beef',
      categoryLabel: 'Prime Beef',
      price: 38.50,
      unit: '1.2kg',
      portion: '3-Bone Plate',
      tag: 'Pitmaster Cut',
      badgeClass: 'badge-beef',
      image: 'assets/images/Decoding Beef Rib.jpg',
      description: 'Massive 3-bone plate section (Bones 6, 7, 8) with deep intramuscular fat that renders into silky gelatin during slow smoking.'
    },

    // CHICKEN
    {
      id: 'chk-1',
      name: 'Free-Range Whole Roaster Chicken',
      titleLine1: 'Free-Range Whole',
      titleLine2: 'Roaster Chicken',
      category: 'chicken',
      categoryLabel: 'Pasture Poultry',
      badge1: 'Pasture Poultry • 100% Organic Pastured',
      badge2: 'Pasture Raised & Certified',
      price: 16.50,
      unit: '1.8kg',
      tag: '100% Organic Pastured',
      badgeClass: 'badge-chicken',
      image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=800&q=80',
      description: 'Air-chilled, pasture-raised whole chicken with crispy skin potential and juicy, natural chicken flavor. Never fed hormones.'
    },
    {
      id: 'chk-2',
      name: 'Artisan Chicken Breast Fillets',
      titleLine1: 'Artisan Boneless',
      titleLine2: 'Chicken Breasts',
      category: 'chicken',
      categoryLabel: 'Pasture Poultry',
      price: 13.50,
      unit: '1kg',
      tag: 'Boneless & Skinless',
      badgeClass: 'badge-chicken',
      image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=800&q=80',
      description: 'Precision-trimmed boneless breasts with zero excess fat. Plump, versatile, and chilled fresh daily without water injection.'
    },
    {
      id: 'chk-3',
      name: 'Bone-In Farm Chicken Thighs',
      titleLine1: 'Farm-Fresh Bone-In',
      titleLine2: 'Chicken Thighs',
      category: 'chicken',
      categoryLabel: 'Pasture Poultry',
      price: 11.00,
      unit: '1kg',
      tag: 'Farm Direct',
      badgeClass: 'badge-chicken',
      image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80',
      description: 'Succulent dark meat with skin intact, ideal for pan-searing or braising. Rich flavor with superior moisture retention.'
    },
    {
      id: 'chk-4',
      name: 'Crispy Party Chicken Wings',
      titleLine1: 'Crispy Fresh Party',
      titleLine2: 'Chicken Wings',
      category: 'chicken',
      categoryLabel: 'Pasture Poultry',
      price: 12.00,
      unit: '1kg',
      tag: 'Party Pack',
      badgeClass: 'badge-chicken',
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: 'Split drumettes and flats, hand-inspected for uniform size so every piece fries or bakes to deep golden crunchiness.'
    },
    {
      id: 'chk-5',
      name: 'Herb-Marinated Spatchcock Chicken',
      titleLine1: 'Herb-Marinated',
      titleLine2: 'Spatchcock Chicken',
      category: 'chicken',
      categoryLabel: 'Pasture Poultry',
      price: 21.00,
      unit: '1.6kg',
      tag: 'Ready to Grill',
      badgeClass: 'badge-chicken',
      image: 'assets/images/chicken/spatchcock-chicken.jpg',
      description: 'Backbone removed and flattened for even, rapid grilling. Infused with fresh rosemary, garlic confit, and cracked tellicherry pepper.'
    },

    // MUTTON / LAMB
    {
      id: 'mut-1',
      name: 'French-Trimmed Rack of Lamb',
      titleLine1: 'French-Trimmed',
      titleLine2: 'Rack of Lamb',
      category: 'mutton',
      categoryLabel: 'Spring Mutton',
      price: 46.00,
      unit: '800g',
      tag: 'Grass-Fed Heritage',
      badgeClass: 'badge-mutton',
      image: 'assets/images/mutton/rack-of-lamb.jpg',
      description: 'Eight-rib rack elegantly cleaned to exposed bone tips. Delicate, sweet grass-fed flavor made for a high-heat gourmet roast.'
    },
    {
      id: 'mut-2',
      name: 'Slow-Braised Lamb Shanks',
      titleLine1: 'Slow-Braised Prime',
      titleLine2: 'Lamb Shanks',
      category: 'mutton',
      categoryLabel: 'Spring Mutton',
      price: 29.50,
      unit: '1kg',
      portion: '2 pcs',
      tag: 'Slow-Cook Master',
      badgeClass: 'badge-mutton',
      image: 'assets/images/mutton/lamb-shanks.jpg',
      description: 'Hind-shank cuts packed with rich marrow and connective tissue that gently dissolve into velvety gravy during slow braising.'
    },
    {
      id: 'mut-3',
      name: 'Bone-In Mutton Curry Cut',
      titleLine1: 'Bone-In Heritage',
      titleLine2: 'Mutton Curry Cut',
      category: 'mutton',
      categoryLabel: 'Spring Mutton',
      price: 24.00,
      unit: '1kg',
      tag: 'Chef Choice',
      badgeClass: 'badge-mutton',
      image: 'assets/images/mutton/mutton-curry-cut.jpg',
      description: 'Evenly diced pieces of goat/mutton with a balanced ratio of bone and lean muscle for authentic, aromatic curries and stews.'
    },
    {
      id: 'mut-4',
      name: 'Artisan Lamb Loin Chops',
      titleLine1: 'Artisan Tender',
      titleLine2: 'Lamb Loin Chops',
      category: 'mutton',
      categoryLabel: 'Spring Mutton',
      price: 36.00,
      unit: '600g',
      portion: '4 pcs',
      tag: 'Tender Mini T-Bones',
      badgeClass: 'badge-mutton',
      image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=800&q=80',
      description: 'Often called the T-bone steaks of lamb, each chop delivers tender loin meat with a crisp ribbon of flavorful fat.'
    },
    {
      id: 'mut-5',
      name: 'Bone-In Leg of Mutton Roast',
      titleLine1: 'Bone-In Whole Leg',
      titleLine2: 'Of Mutton Roast',
      category: 'mutton',
      categoryLabel: 'Spring Mutton',
      price: 52.00,
      unit: '2.2kg',
      tag: 'Centerpiece Cut',
      badgeClass: 'badge-mutton',
      image: 'assets/images/Bone-In Whole Leg.jpg',
      description: 'A traditional centerpiece roast, naturally aged for seven days. Succulent, earthy flavor and tender slices when carved warm.'
    },

    // PORK
    {
      id: 'prk-1',
      name: 'Kurobuta Thick-Cut Pork Chops',
      titleLine1: 'Kurobuta Heritage',
      titleLine2: 'Thick Pork Chops',
      category: 'pork',
      categoryLabel: 'Berkshire Pork',
      price: 27.50,
      unit: '700g',
      portion: '2 pcs',
      tag: 'Heritage Kurobuta',
      badgeClass: 'badge-pork',
      image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=800&q=80',
      description: 'The Wagyu of pork. Intensely marbled, deep rosy-red meat with rich intramuscular fat for unprecedented juiciness.'
    },
    {
      id: 'prk-2',
      name: 'Smoked Pork Spare Ribs (St. Louis)',
      titleLine1: 'Smoked Duroc Pork',
      titleLine2: 'St. Louis Ribs',
      category: 'pork',
      categoryLabel: 'Berkshire Pork',
      price: 31.00,
      unit: '1.3kg',
      tag: 'BBQ Champion Cut',
      badgeClass: 'badge-pork',
      image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80',
      description: 'Cleanly squared off spare ribs with cartilage removed. Meat sits thick on the bone, perfect for smoking or sticky oven roasting.'
    },
    {
      id: 'prk-3',
      name: 'Whole Pork Tenderloin',
      titleLine1: 'Artisan Heritage',
      titleLine2: 'Pork Tenderloin',
      category: 'pork',
      categoryLabel: 'Berkshire Pork',
      price: 18.00,
      unit: '600g',
      tag: 'Lean & Tender',
      badgeClass: 'badge-pork',
      image: 'assets/images/products/whole-pork-tenderloin.jpg',
      description: 'The leanest and most delicate cut of pork. Subtle sweetness, easily absorbs marinades, and cooks quickly.'
    },
    {
      id: 'prk-4',
      name: 'Crispy Crackling Pork Belly Slab',
      titleLine1: 'Crispy Crackling',
      titleLine2: 'Pork Belly Slab',
      category: 'pork',
      categoryLabel: 'Berkshire Pork',
      price: 26.00,
      unit: '1.2kg',
      tag: 'Master Roast Cut',
      badgeClass: 'badge-pork',
      image: 'assets/images/products/crispy-crackling-pork-belly.jpg',
      description: 'Layered meat and fat scored by hand for guaranteed bubbling crackling skin and meltingly soft interior.'
    },
    {
      id: 'prk-5',
      name: 'Artisan Butcher Sausage Selection',
      titleLine1: 'Artisan Handcrafted',
      titleLine2: 'Butcher Sausages',
      category: 'pork',
      categoryLabel: 'Berkshire Pork',
      price: 16.50,
      unit: '800g',
      portion: '6 links',
      tag: 'Natural Hog Casing',
      badgeClass: 'badge-pork',
      image: 'assets/images/products/artisan-butcher-sausages.jpg',
      description: 'Coarse ground heritage pork, sea salt, fennel seed, and cracked black pepper stuffed in natural casings. Zero nitrates.'
    },

    // CURATED MEAT PACKAGES / BOXES
    {
      id: 'box-family',
      name: 'Family Pasture Box',
      titleLine1: 'Family Weekly',
      titleLine2: 'Pasture Meat Box',
      category: 'box',
      categoryLabel: 'Curated Box',
      price: 149.00,
      unit: 'box',
      portion: 'approx. 14 lbs',
      tag: 'Weekly Essential',
      badgeClass: 'badge-beef',
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&q=80',
      description: 'Complete weekly protein variety for a family of 4. Includes 4x chicken breasts, 2x chuck pot roasts, 4 lbs minced beef, 4x pork chops, and jar of butcher salt.'
    },
    {
      id: 'box-pitmaster',
      name: 'The Pitmaster BBQ Box',
      titleLine1: 'The Pitmaster BBQ',
      titleLine2: 'Smokehouse Crate',
      category: 'box',
      categoryLabel: 'Curated Box',
      price: 229.00,
      unit: 'box',
      portion: 'approx. 24 lbs',
      tag: 'Smokehouse Special',
      badgeClass: 'badge-pork',
      image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=600&q=80',
      description: 'Hardwood low-and-slow competition barbecue selections. Includes whole prime packer brisket (12 lbs), 2x Duroc spare ribs, 8 lb pork butt, and smoked sausage.'
    },
    {
      id: 'box-steakhouse',
      name: 'Steakhouse Connoisseur Box',
      titleLine1: 'Steakhouse Dry-Aged',
      titleLine2: 'Connoisseur Box',
      category: 'box',
      categoryLabel: 'Curated Box',
      price: 319.00,
      unit: 'box',
      portion: 'Gourmet Cut Flight',
      tag: 'Dry Aged Reserve',
      badgeClass: 'badge-beef',
      image: 'assets/images/hospitality-supply.jpg',
      description: 'Aged in our Himalayan pink salt lockers for 35–45 days. Includes 2x 45-day bone-in ribeyes, 2x 35-day dry-aged NY strips, 2x filet mignons, and marrow butter.'
    },
    {
      id: 'box-banquet',
      name: 'Banquet & Chef Crate',
      titleLine1: 'Banquet & Dining',
      titleLine2: 'Master Chef Crate',
      category: 'box',
      categoryLabel: 'Curated Box',
      price: 589.00,
      unit: 'box',
      portion: 'Serves 25–30 guests',
      tag: 'Event & Chef Crate',
      badgeClass: 'badge-mutton',
      image: 'assets/images/whole-roasts.jpg',
      description: 'Bulk premium meat allocations for parties & dining rooms. Includes whole frenched lamb rib rack, 10x dry-aged burger patties, whole beef tenderloin, and Berkshire chops.'
    },
    {
      id: 'box-grillmaster',
      name: "The Grill Master's Reserve Box",
      titleLine1: "The Grill Master's",
      titleLine2: 'Reserve BBQ Box',
      category: 'box',
      categoryLabel: 'Curated Box',
      price: 195.00,
      unit: 'box',
      portion: 'approx. 16 lbs',
      tag: 'Weekend BBQ Reserve',
      badgeClass: 'badge-beef',
      image: 'assets/images/products/grill-master-reserve-box.jpg',
      description: 'Hand-selected cuts for charcoal & flame grilling: 2x Prime dry-aged ribeyes, 4x smash burger patties, 4x pork chops, and artisan sausages.'
    },
    {
      id: 'box-farmhouse',
      name: 'Heritage Farmhouse Feast Crate',
      titleLine1: 'Heritage Farmhouse',
      titleLine2: 'Feast Harvest Crate',
      category: 'box',
      categoryLabel: 'Curated Box',
      price: 275.00,
      unit: 'box',
      portion: 'approx. 18 lbs',
      tag: 'Farmhouse Reserve',
      badgeClass: 'badge-mutton',
      image: 'assets/images/products/farmhouse-feast-crate.jpg',
      description: 'An abundant harvest of pasture-raised meats: French-trimmed rack of lamb, whole spatchcock roaster, thick-cut Berkshire belly, and bone marrow butter.'
    }
  ];

  // Storage key for enquiry cart
  const CART_KEY = 'primecut_enquiry_cart';

  // Get basket from localStorage
  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  // Save basket to localStorage
  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartUI();
  }

  // Add product to basket (supports ID, custom object, quantity, and auto drawer opening)
  function addToCart(productId, qty = 1, extra = null) {
    qty = parseInt(qty) || 1;
    let product = PRODUCTS.find(p => p.id === productId);

    if (!product && window.ProductDetailController && typeof window.ProductDetailController.getCut === 'function') {
      const cut = window.ProductDetailController.getCut(productId);
      if (cut) {
        product = {
          id: cut.id,
          name: cut.name,
          price: cut.price,
          unit: cut.unit,
          category: cut.category,
          image: cut.image
        };
      }
    }

    if (!product && extra && extra.title) {
      product = {
        id: productId || 'cut-' + Date.now(),
        name: extra.title,
        price: parseFloat(extra.price) || 0,
        unit: extra.unit || 'portion',
        category: extra.category || 'artisan',
        image: extra.image || 'assets/images/salt.png'
      };
    }

    if (!product) {
      // Fallback from active DOM elements on product-details page
      const titleEl = document.getElementById('productTitle');
      const priceEl = document.getElementById('productPrice');
      const imgEl = document.getElementById('mainProductImage');
      if (titleEl) {
        product = {
          id: productId || 'custom-cut',
          name: titleEl.textContent.trim(),
          price: parseFloat((priceEl ? priceEl.textContent : '48.99').replace(/[^0-9.]/g, '')) || 48.99,
          unit: 'cut',
          category: 'meat',
          image: imgEl ? imgEl.src : 'assets/images/salt.png'
        };
      }
    }

    if (!product) return;

    let cart = getCart();
    const existingIndex = cart.findIndex(item => item.id === product.id);

    if (existingIndex > -1) {
      cart[existingIndex].qty += qty;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        unit: product.unit || 'cut',
        category: product.category || 'meat',
        image: product.image,
        qty: qty
      });
    }

    saveCart(cart);

    if (window.showToast) {
      window.showToast(`Added ${qty > 1 ? qty + 'x ' : ''}${product.name} to your enquiry basket!`, 'success');
    }

    // Automatically open offcanvas drawer to give instant visual feedback
    const drawerEl = document.getElementById('cartDrawer');
    if (drawerEl && window.bootstrap) {
      try {
        const bs = window.bootstrap;
        const bsDrawer = bs.Offcanvas.getInstance(drawerEl) || new bs.Offcanvas(drawerEl);
        bsDrawer.show();
      } catch (e) {
        console.warn('Could not open cart drawer:', e);
      }
    }
  }

  // Remove from basket
  function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
  }

  // Update quantity
  function updateCartQty(productId, delta) {
    let cart = getCart();
    const item = cart.find(i => i.id === productId);
    if (item) {
      item.qty += delta;
      if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== productId);
      }
      saveCart(cart);
    }
  }

  // Clear cart
  function clearCart() {
    localStorage.removeItem(CART_KEY);
    updateCartUI();
  }

  // Delivery Zones specifications for cart & catalog awareness
  const ZONE_INFO = {
    'zone-1': {
      id: 'zone-1',
      name: 'Zone 1: Metro Core',
      radius: '0 – 15 Miles',
      minOrder: 35.00,
      fee: 7.50,
      freeThreshold: 75.00,
      windows: '10 AM – 1 PM | 4 PM – 7 PM'
    },
    'zone-2': {
      id: 'zone-2',
      name: 'Zone 2: Suburbs',
      radius: '15 – 35 Miles',
      minOrder: 50.00,
      fee: 12.00,
      freeThreshold: 120.00,
      windows: '2 PM – 8 PM Daily'
    },
    'zone-3': {
      id: 'zone-3',
      name: 'Zone 3: Regional',
      radius: '35 – 65 Miles',
      minOrder: 75.00,
      fee: 18.00,
      freeThreshold: 180.00,
      windows: 'Next-Day Dispatch (Tue – Sat)'
    }
  };

  function getActiveZone() {
    try {
      // Check query param first (e.g. ?zone=zone-1 or ?zone=metro)
      const urlParams = new URLSearchParams(window.location.search);
      const qz = urlParams.get('zone');
      if (qz) {
        let matched = null;
        if (qz === 'zone-1' || qz === 'metro') matched = ZONE_INFO['zone-1'];
        else if (qz === 'zone-2' || qz === 'suburbs') matched = ZONE_INFO['zone-2'];
        else if (qz === 'zone-3' || qz === 'regional') matched = ZONE_INFO['zone-3'];
        if (matched) {
          localStorage.setItem('primecut_delivery_zone', JSON.stringify(matched));
          return matched;
        }
      }
      const saved = localStorage.getItem('primecut_delivery_zone');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  }

  function renderActiveZoneBanner() {
    const banner = document.getElementById('activeDeliveryZoneBanner');
    if (!banner) return;
    const zone = getActiveZone();
    if (!zone) {
      banner.classList.add('hidden');
      banner.innerHTML = '';
      return;
    }

    banner.classList.remove('hidden');
    banner.innerHTML = `
      <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-red-950 via-stone-900 to-stone-950 text-white border border-red-700/50 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-fade-in">
        <div class="flex items-center gap-3.5">
          <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center text-white text-xl shadow-md flex-shrink-0">
            <i class="bi bi-truck"></i>
          </div>
          <div>
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-sans">
                Active Delivery Zone
              </span>
              <span class="font-heading font-bold text-sm text-stone-100">${zone.name} (${zone.radius})</span>
            </div>
            <p class="text-xs text-stone-300 m-0 mt-1">
              Window: <strong>${zone.windows || 'Express Delivery'}</strong> &bull; Min Order: <strong>$${(zone.minOrder || 35).toFixed(2)}</strong> &bull; Free Delivery on orders &gt; <strong>$${(zone.freeThreshold || 75).toFixed(2)}</strong>
            </p>
          </div>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0 w-full md:w-auto justify-end">
          <a href="contact.html" class="btn-artisan-outline text-xs !py-2 !px-3.5 text-stone-200 border-stone-600 hover:border-red-500 hover:text-white flex items-center gap-1.5" title="Inquire about delivery zones">
            <i class="bi bi-geo-alt"></i>
            <span>Zone Inquiries</span>
          </a>
          <button type="button" id="dismissZoneBannerBtn" class="p-2 text-stone-400 hover:text-white transition rounded-lg" title="Dismiss banner">
            <i class="bi bi-x-lg text-xs"></i>
          </button>
        </div>
      </div>
    `;

    const dismissBtn = banner.querySelector('#dismissZoneBannerBtn');
    if (dismissBtn) {
      dismissBtn.addEventListener('click', () => {
        banner.classList.add('hidden');
      });
    }
  }

  // Update cart badge and drawer UI
  function updateCartUI() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

    // Update badges
    document.querySelectorAll('.cart-badge').forEach(el => {
      el.textContent = totalItems;
      if (el.closest('#mobileNavMenu')) {
        el.style.display = 'inline-flex';
      } else {
        el.style.display = totalItems > 0 ? 'flex' : 'none';
      }
    });

    // Update offcanvas drawer if exists
    const cartItemsContainer = document.getElementById('cartItemsList');
    const cartEmptyNotice = document.getElementById('cartEmptyNotice');
    const cartFooter = document.getElementById('cartDrawerFooter');
    const cartTotalEstimate = document.getElementById('cartTotalEstimate');

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '';
      if (cartEmptyNotice) cartEmptyNotice.classList.remove('hidden');
      if (cartFooter) cartFooter.classList.add('hidden');
      return;
    }

    if (cartEmptyNotice) cartEmptyNotice.classList.add('hidden');
    if (cartFooter) cartFooter.classList.remove('hidden');

    let totalPrice = 0;
    cartItemsContainer.innerHTML = cart.map(item => {
      const itemSubtotal = item.price * item.qty;
      totalPrice += itemSubtotal;
      return `
        <div class="flex items-center gap-3 p-3 bg-white dark:bg-zinc-800 rounded-xl border border-stone-200 dark:border-zinc-700 shadow-sm">
          <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-lg object-cover flex-shrink-0" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'64\\' height=\\'64\\' fill=\\'%238B1E1E\\'><rect width=\\'64\\' height=\\'64\\' fill=\\'%23f3f4f6\\'/><text x=\\'50%\\' y=\\'55%\\' font-size=\\'12\\' text-anchor=\\'middle\\' fill=\\'%238B1E1E\\'>MEAT</text></svg>'">
          <div class="flex-grow min-w-0">
            <h4 class="text-sm font-bold text-stone-900 dark:text-stone-100 truncate">${item.name}</h4>
            <p class="text-xs text-stone-500 dark:text-stone-400">$${item.price.toFixed(2)} / ${item.unit}</p>
            <div class="flex items-center gap-2 mt-2">
              <button class="cart-qty-btn decrease-qty w-6 h-6 rounded-md bg-stone-100 dark:bg-zinc-700 hover:bg-stone-200 text-xs font-bold" data-id="${item.id}">-</button>
              <span class="text-xs font-bold text-stone-800 dark:text-stone-200">${item.qty}</span>
              <button class="cart-qty-btn increase-qty w-6 h-6 rounded-md bg-stone-100 dark:bg-zinc-700 hover:bg-stone-200 text-xs font-bold" data-id="${item.id}">+</button>
            </div>
          </div>
          <div class="text-end flex-shrink-0">
            <p class="text-sm font-bold text-red-700 dark:text-red-400">$${itemSubtotal.toFixed(2)}</p>
            <button class="remove-cart-item text-xs text-stone-400 hover:text-red-600 mt-2 transition" data-id="${item.id}" title="Remove item">
              <i class="bi bi-trash3"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');

    if (cartTotalEstimate) {
      cartTotalEstimate.textContent = `$${totalPrice.toFixed(2)}`;
    }

    // Update or insert delivery zone notice & threshold progress in drawer
    let zoneNoticeEl = document.getElementById('cartDrawerZoneNotice');
    if (!zoneNoticeEl && cartFooter) {
      zoneNoticeEl = document.createElement('div');
      zoneNoticeEl.id = 'cartDrawerZoneNotice';
      zoneNoticeEl.className = 'mb-3 pb-3 border-b border-stone-200 dark:border-zinc-800 text-xs';
      cartFooter.insertBefore(zoneNoticeEl, cartFooter.firstChild);
    }

    const activeZone = getActiveZone();
    if (zoneNoticeEl) {
      if (activeZone) {
        const minOrder = activeZone.minOrder || 35;
        const freeThresh = activeZone.freeThreshold || 75;
        const isFree = totalPrice >= freeThresh;
        const meetsMin = totalPrice >= minOrder;

        zoneNoticeEl.innerHTML = `
          <div class="flex items-center justify-between text-stone-700 dark:text-stone-200 mb-1.5 font-semibold">
            <span class="flex items-center gap-1.5">
              <i class="bi bi-truck text-red-600"></i> ${activeZone.name}
            </span>
            <a href="contact.html" class="text-[11px] text-red-600 dark:text-red-400 hover:underline">Zone Info</a>
          </div>
          ${!meetsMin ? `
            <div class="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-[11px] mb-2 flex items-center gap-1.5">
              <i class="bi bi-exclamation-triangle-fill flex-shrink-0 text-amber-600"></i>
              <span>Zone minimum is $${minOrder.toFixed(2)} ($${(minOrder - totalPrice).toFixed(2)} more needed)</span>
            </div>
          ` : ''}
          <div class="flex items-center justify-between text-[11px] text-stone-500 mb-1">
            <span class="${isFree ? 'text-emerald-600 font-bold' : ''}">${isFree ? '🎉 Free Delivery Unlocked!' : `Add $${(freeThresh - totalPrice).toFixed(2)} for Free Delivery`}</span>
            <span class="font-bold text-stone-700 dark:text-stone-300">${Math.min(100, Math.round((totalPrice / freeThresh) * 100))}%</span>
          </div>
          <div class="w-full h-1.5 bg-stone-200 dark:bg-zinc-700 rounded-full overflow-hidden">
            <div class="h-full bg-gradient-to-r from-red-600 to-emerald-500 rounded-full transition-all duration-300" style="width: ${Math.min(100, (totalPrice / freeThresh) * 100)}%"></div>
          </div>
        `;
        zoneNoticeEl.classList.remove('hidden');
      } else {
        zoneNoticeEl.classList.add('hidden');
      }
    }

    // Attach quantity & remove listeners in drawer
    cartItemsContainer.querySelectorAll('.increase-qty').forEach(btn => {
      btn.addEventListener('click', () => updateCartQty(btn.dataset.id, 1));
    });
    cartItemsContainer.querySelectorAll('.decrease-qty').forEach(btn => {
      btn.addEventListener('click', () => updateCartQty(btn.dataset.id, -1));
    });
    cartItemsContainer.querySelectorAll('.remove-cart-item').forEach(btn => {
      btn.addEventListener('click', () => removeFromCart(btn.dataset.id));
    });
  }

  function parseProductUnit(unitStr) {
    if (!unitStr) return { main: 'cut', note: '' };
    const match = String(unitStr).match(/^([^(]+)(?:\s*\((.*)\))?$/);
    if (match) {
      return {
        main: match[1].trim(),
        note: match[2] ? match[2].trim() : ''
      };
    }
    return { main: String(unitStr), note: '' };
  }

  // Render product cards on products.html
  function renderProducts(items) {
    const grid = document.getElementById('productsGrid');
    const countDisplay = document.getElementById('productCountDisplay');
    if (!grid) return;

    if (countDisplay) {
      countDisplay.textContent = `Showing ${items.length} premium cut${items.length === 1 ? '' : 's'}`;
    }

    if (items.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full text-center py-16">
          <div class="w-16 h-16 bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
            <i class="bi bi-search"></i>
          </div>
          <h3 class="text-xl font-bold text-stone-800 dark:text-stone-200">No Cuts Match Your Filter</h3>
          <p class="text-stone-500 dark:text-stone-400 text-sm mt-1">Try choosing another category or search term.</p>
          <button id="resetFiltersBtn" class="mt-4 btn-artisan-outline text-sm">View All Cuts</button>
        </div>
      `;
      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          filterProducts('all');
          const allBtn = document.querySelector('.filter-pill[data-category="all"]');
          if (allBtn) allBtn.click();
        });
      }
      return;
    }

    grid.innerHTML = items.map((p, idx) => {
      const badge1Text = p.badge1 || p.categoryLabel;
      const badge2Text = p.badge2 || p.tag;
      const unitInfo = parseProductUnit(p.unit);
      const displayUnit = unitInfo.main;
      return `
      <div class="meat-card reveal-on-scroll flex flex-col h-full group" data-category="${p.category}" id="card-${p.id}" style="transition-delay: ${(idx % 8) * 55}ms;">
        <a href="product-details.html?id=${p.id}" class="meat-img-wrapper block relative overflow-hidden flex-shrink-0" aria-label="View specifications for ${p.name}">
          <img src="${p.image}" alt="${p.name} - Fresh Butcher Cut" class="meat-img group-hover:scale-105 transition duration-500" loading="lazy" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'250\\' fill=\\'%238B1E1E\\'><rect width=\\'400\\' height=\\'250\\' fill=\\'%2318181B\\'/><text x=\\'50%\\' y=\\'50%\\' font-size=\\'20\\' text-anchor=\\'middle\\' fill=\\'%23D4AF37\\'>${p.name}</text></svg>'">
          <!-- Quality Badges (Stacked vertically at top-start to guarantee zero overlap on any screen size) -->
          <div class="absolute top-3 start-3 flex flex-col items-start gap-1.5 z-10 pointer-events-none max-w-[92%]">
            <span class="badge-meat-type ${p.badgeClass} shadow-sm text-[11px] sm:text-xs leading-tight">${badge1Text}</span>
            <span class="bg-black/80 backdrop-blur-md text-amber-300 text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-amber-400/30 shadow-sm leading-normal flex items-center gap-1">
              <i class="bi bi-patch-check-fill text-amber-400 text-[10px]"></i> ${badge2Text}
            </span>
          </div>
        </a>

        <div class="p-4 sm:p-5 flex flex-col flex-1 justify-between">
          <div>
            <a href="product-details.html?id=${p.id}" class="text-decoration-none block">
              <h3 class="meat-card-title text-[15px] xl:text-base font-bold text-stone-900 dark:text-stone-100 group-hover:text-red-700 dark:group-hover:text-red-400 transition" title="${p.name}">
                <span class="block leading-tight">${p.titleLine1 || p.name}</span>
                <span class="block leading-tight">${p.titleLine2 || '&nbsp;'}</span>
              </h3>
            </a>
            <p class="meat-card-desc text-stone-600 dark:text-stone-400 text-xs sm:text-sm mt-2">
              ${p.description}
            </p>
          </div>

          <div class="meat-card-footer mt-auto pt-3.5 border-t border-stone-200 dark:border-zinc-800 flex items-center justify-between gap-2">
            <div class="min-w-0 flex-shrink">
              <span class="text-[10px] sm:text-[11px] text-stone-500 dark:text-stone-400 uppercase tracking-wider block font-semibold truncate">Estimated Price</span>
              <div class="flex items-baseline gap-1 flex-nowrap">
                <span class="text-base sm:text-lg xl:text-xl font-black text-red-700 dark:text-red-400 whitespace-nowrap">$${p.price.toFixed(2)}</span>
                <span class="text-xs text-stone-500 dark:text-stone-400 font-medium whitespace-nowrap">/ ${displayUnit}</span>
              </div>
            </div>

            <div class="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              <a href="product-details.html?id=${p.id}" class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-stone-300 dark:border-zinc-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-zinc-800 hover:text-red-700 dark:hover:text-red-400 transition text-xs flex items-center justify-center flex-shrink-0" title="View Cut Details" aria-label="View Cut Details for ${p.name}">
                <i class="bi bi-eye"></i>
              </a>
              <button class="add-enquiry-btn btn-artisan-primary text-xs !py-2 sm:!py-2.5 !px-2.5 sm:!px-3 flex items-center justify-center gap-1 flex-shrink-0" data-id="${p.id}" aria-label="Add ${p.name} to enquiry">
                <i class="bi bi-cart-plus"></i>
                <span class="hidden sm:inline ms-1 font-bold">Add</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `; }).join('');

    // Staggered scroll-reveal animation observer
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            scrollObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

      grid.querySelectorAll('.reveal-on-scroll').forEach(el => scrollObserver.observe(el));
    } else {
      grid.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-visible'));
    }

    // Bind add-to-enquiry buttons with tactile pop bounce animation
    grid.querySelectorAll('.add-enquiry-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.classList.add('animate-button-pop');
        setTimeout(() => btn.classList.remove('animate-button-pop'), 380);
        addToCart(btn.dataset.id);
      });
    });
  }

  // Filter products by category, search string, and sort
  let currentCategory = 'all';
  let currentSearch = '';
  let currentSort = 'default';

  function applyFilters() {
    let filtered = PRODUCTS.filter(item => {
      const matchCat = (currentCategory === 'all') || (item.category === currentCategory);
      const matchSearch = currentSearch === '' || 
        item.name.toLowerCase().includes(currentSearch.toLowerCase()) || 
        item.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
        item.tag.toLowerCase().includes(currentSearch.toLowerCase());
      return matchCat && matchSearch;
    });

    if (currentSort === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    renderProducts(filtered);
  }

  function updateActiveFilterPill(cat) {
    const filterPills = document.querySelectorAll('.filter-pill');
    filterPills.forEach(p => {
      if (p.dataset.category === cat) {
        p.classList.add('active', 'bg-red-700', 'text-white');
        p.classList.remove('bg-stone-200', 'dark:bg-zinc-800', 'text-stone-700', 'dark:text-stone-300');
      } else {
        p.classList.remove('active', 'bg-red-700', 'text-white');
        p.classList.add('bg-stone-200', 'dark:bg-zinc-800', 'text-stone-700', 'dark:text-stone-300');
      }
    });
  }

  function scrollToCatalog(smooth = true) {
    const catalogSection = document.getElementById('productsCatalogSection');
    if (catalogSection) {
      catalogSection.scrollIntoView({
        behavior: smooth ? 'smooth' : 'auto',
        block: 'start'
      });
    }
  }

  function filterProducts(cat, doScroll = false) {
    currentCategory = cat;
    updateActiveFilterPill(cat);
    applyFilters();
    if (doScroll) {
      scrollToCatalog(true);
    }
  }

  // Interactive 3D Parallax Tilt with Cursor Specular Sheen on Hero Showcase Card
  function initShowcaseTilt() {
    const card = document.getElementById('heroShowcaseCard');
    if (!card) return;

    // Respect user accessibility preferences & disable on touch-only screens
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;

    function handleMouseMove(e) {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Subtle, elegant 3D tilt angles (capped to ±7.5 deg for premium feel)
        const rotateX = ((y - centerY) / centerY) * -7.5;
        const rotateY = ((x - centerX) / centerX) * 7.5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.setProperty('--sheen-x', `${x.toFixed(1)}px`);
        card.style.setProperty('--sheen-y', `${y.toFixed(1)}px`);

        ticking = false;
      });
    }

    function handleMouseLeave() {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }

    card.addEventListener('mousemove', handleMouseMove, { passive: true });
    card.addEventListener('mouseleave', handleMouseLeave, { passive: true });
  }

  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize 3D Parallax tilt on hero card
    initShowcaseTilt();

    // Check if on products.html
    const grid = document.getElementById('productsGrid');
    if (grid) {
      // Check URL parameters (e.g., ?category=mutton)
      const urlParams = new URLSearchParams(window.location.search);
      const initialCat = urlParams.get('category');
      if (initialCat && ['beef', 'chicken', 'mutton', 'pork', 'box', 'all'].includes(initialCat)) {
        currentCategory = initialCat;
      }

      // Sync active state on pills with currentCategory (unsetting 'all' if specific category chosen)
      updateActiveFilterPill(currentCategory);

      // Render initial products
      applyFilters();

      // If category was specified in URL or hash targets catalog section, scroll directly to it
      if (initialCat || window.location.hash === '#productsCatalogSection') {
        setTimeout(() => {
          scrollToCatalog(true);
        }, 150);
      }

      // Category filter buttons
      const filterPills = document.querySelectorAll('.filter-pill');
      filterPills.forEach(pill => {
        pill.addEventListener('click', (e) => {
          e.preventDefault();
          const cat = pill.dataset.category || 'all';
          currentCategory = cat;
          updateActiveFilterPill(cat);
          applyFilters();

          // Sync browser URL so users can share or bookmark filtered state
          const newUrl = (cat === 'all')
            ? window.location.pathname
            : `${window.location.pathname}?category=${cat}#productsCatalogSection`;
          window.history.replaceState({ category: cat }, '', newUrl);
        });
      });

      // Search input listener
      const searchInput = document.getElementById('productSearchInput');
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          currentSearch = e.target.value.trim();
          applyFilters();
        });
      }

      // Sort select listener
      const sortSelect = document.getElementById('productSortSelect');
      if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
          currentSort = e.target.value;
          applyFilters();
        });
      }
    }

    // Render Active Delivery Zone Banner if on products.html
    renderActiveZoneBanner();

    // Initialize cart UI on all pages
    updateCartUI();

    // Clear cart button in drawer
    const clearCartBtn = document.getElementById('clearCartBtn');
    if (clearCartBtn) {
      clearCartBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear your enquiry basket?')) {
          clearCart();
        }
      });
    }

    // Checkout / Submit Enquiry button in drawer
    const proceedToEnquiryBtn = document.getElementById('proceedToEnquiryBtn');
    if (proceedToEnquiryBtn) {
      proceedToEnquiryBtn.addEventListener('click', () => {
        const cart = getCart();
        if (cart.length === 0) return;

        let cartTotal = 0;
        // Populate enquiry modal with current cart items
        const modalItemsList = document.getElementById('modalCartItemsSummary');
        if (modalItemsList) {
          let summaryHTML = cart.map(i => {
            const lineSubtotal = i.price * i.qty;
            cartTotal += lineSubtotal;
            return `
              <div class="flex justify-between text-xs py-1 border-b border-stone-200 dark:border-zinc-700">
                <span class="font-medium">${i.name} (x${i.qty})</span>
                <span class="font-bold text-red-700 dark:text-red-400">$${lineSubtotal.toFixed(2)}</span>
              </div>
            `;
          }).join('');

          const activeZone = getActiveZone();
          if (activeZone) {
            const isFree = cartTotal >= (activeZone.freeThreshold || 75);
            summaryHTML += `
              <div class="flex items-center justify-between text-xs pt-2.5 mt-1 border-t border-dashed border-stone-300 dark:border-zinc-700 font-bold text-stone-800 dark:text-stone-200">
                <span class="flex items-center gap-1.5"><i class="bi bi-truck text-red-600"></i> ${activeZone.name}</span>
                <span class="${isFree ? 'text-emerald-600 font-extrabold' : 'text-stone-700 dark:text-stone-300'}">${isFree ? 'FREE Delivery' : '$' + (activeZone.fee || 7.5).toFixed(2)}</span>
              </div>
            `;
          }

          modalItemsList.innerHTML = summaryHTML;
        }

        const activeZone = getActiveZone();
        const notesInput = document.getElementById('modalCustNotes');
        if (activeZone && notesInput && !notesInput.value.trim()) {
          notesInput.value = `Delivery: ${activeZone.name} | Window: ${activeZone.windows || 'Express'} | Min: $${(activeZone.minOrder || 35).toFixed(2)}`;
        }

        // Close drawer and open modal
        const drawerEl = document.getElementById('cartDrawer');
        if (drawerEl && window.bootstrap) {
          const bs = window.bootstrap;
          const bsDrawer = bs.Offcanvas.getInstance(drawerEl) || new bs.Offcanvas(drawerEl);
          bsDrawer.hide();
        }

        const enquiryModalEl = document.getElementById('enquiryModal');
        if (enquiryModalEl && window.bootstrap) {
          const bs = window.bootstrap;
          const bsModal = bs.Modal.getInstance(enquiryModalEl) || new bs.Modal(enquiryModalEl);
          bsModal.show();
        }
      });
    }

    // Universal delegated click listener for .add-to-enquiry-btn (pricing packages, featured crates, etc.)
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.add-to-enquiry-btn');
      if (!btn) return;
      e.preventDefault();

      const id = btn.dataset.id;
      const title = btn.dataset.title;
      const price = parseFloat(btn.dataset.price) || 0;
      const category = btn.dataset.category || 'Curated Box';

      // Find card image if present
      const card = btn.closest('.rounded-3xl, .card, div');
      const img = card ? card.querySelector('img') : null;
      const image = img ? img.getAttribute('src') : 'assets/images/salt.png';

      addToCart(id, 1, {
        title: title,
        price: price,
        unit: 'box',
        category: category,
        image: image
      });

      // If reserving the banquet crate, pre-fill notes in modal for extra convenience
      if (id === 'box-banquet') {
        const notesInput = document.getElementById('modalCustNotes');
        if (notesInput && !notesInput.value.trim()) {
          notesInput.value = 'Banquet & Catering Reservation (Serves 25–30 guests). Desired event date & service notes: ';
        }
      }
    });

    // Intercept clicks on Meat Categories deep links (e.g. from footer) when already on products.html
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href*="category="]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      const isProductsPage = window.location.pathname.endsWith('products.html') || !!document.getElementById('productsGrid');
      if (isProductsPage && (href.includes('products.html') || href.startsWith('?') || href.startsWith('#'))) {
        try {
          const urlObj = new URL(href, window.location.href);
          const targetCat = urlObj.searchParams.get('category');
          if (targetCat && ['all', 'beef', 'chicken', 'mutton', 'pork', 'box'].includes(targetCat)) {
            e.preventDefault();
            currentCategory = targetCat;
            updateActiveFilterPill(targetCat);
            applyFilters();

            const newUrl = `${window.location.pathname}?category=${targetCat}#productsCatalogSection`;
            window.history.pushState({ category: targetCat }, '', newUrl);

            scrollToCatalog(true);
          }
        } catch (err) {
          // Fallback to normal navigation
        }
      }
    });

    // Support browser back/forward buttons
    window.addEventListener('popstate', () => {
      const isProductsPage = window.location.pathname.endsWith('products.html') || !!document.getElementById('productsGrid');
      if (isProductsPage) {
        const params = new URLSearchParams(window.location.search);
        const cat = params.get('category') || 'all';
        currentCategory = cat;
        updateActiveFilterPill(cat);
        applyFilters();
      }
    });
  });

  // Global exports
  window.addToEnquiryCart = addToCart;
  window.addToCart = addToCart;
  window.ProductCatalog = {
    getAll: () => PRODUCTS,
    getCart,
    addToCart,
    removeFromCart,
    clearCart,
    updateCartUI
  };
})();
