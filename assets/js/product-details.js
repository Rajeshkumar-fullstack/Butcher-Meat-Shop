/**
 * Prime & Cut - Product Details Dynamic Showcase
 * Handles: URL query parameter (?id=...), dynamic rendering of cut details,
 * gallery switcher, butcher specs, cooking guides, and companion recommendations.
 */

(function () {
  'use strict';

  // Comprehensive cut catalog with rich butcher specifications
  const CUT_DATABASE = {
    'beef-1': {
      id: 'beef-1',
      name: '28-Day Himalayan Salt Dry-Aged Ribeye',
      shortName: 'Dry-Aged Ribeye',
      category: 'beef',
      categoryLabel: 'Prime Beef • Dry Aged',
      sku: 'CUT-BF-RIB28',
      price: 34.99,
      unit: '500g (Cut to Order)',
      rating: '4.9 / 5.0',
      reviews: '(124 butcher counter reviews)',
      badge1: 'Beef • Dry Aged 28 Days',
      badge2: 'USDA Prime • BMS 7+',
      portionNote: 'Hand-cut 1.5-inch steak with deep intramuscular fat marbling. Serves 1–2.',
      image: 'assets/images/salt.png',
      gallery: [
        'assets/images/salt.png',
        'assets/images/image.png',
        'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'Hand-selected Angus beef, dry-aged on authentic Himalayan pink salt blocks for 28 days to yield concentrated savory umami notes and supreme tenderness.',
      tenderness: '9.9 / 10',
      marbling: 'BMS 7-8 Prime',
      feed: 'Pasture Reared • 120-Day Corn Finish',
      aging: '28-Day Himalayan Salt Brick Locker',
      anatomyTitle: 'The Jewel of the Rib Primal',
      anatomyDesc: 'Carved between the 6th and 12th ribs, this steak features the rich ribeye muscle and the coveted spinalis dorsi (ribeye cap) boasting the highest intramuscular marbling of any beef primal.',
      cookingTitle: 'High-Heat Sear & Butter Baste',
      cookingSteps: [
        { step: '01', title: 'Bring to Room Temp', desc: 'Rest the ribeye on a wire rack for 30 minutes. Pat thoroughly dry with kitchen towel before seasoning.' },
        { step: '02', title: 'Hard Skillet Sear', desc: 'Drop into smoking cast iron with beef tallow. Sear 2.5 minutes per side until deeply caramelized mahogany crust forms.' },
        { step: '03', title: 'Herb & Butter Baste', desc: 'Add cultured butter, crushed garlic cloves, and fresh rosemary. Spoon foaming brown butter over the steak for 1 minute before resting.' }
      ]
    },

    'tomahawk': {
      id: 'tomahawk',
      name: '35-Day Himalayan Salt Dry-Aged Tomahawk Ribeye',
      shortName: 'Dry-Aged Tomahawk Ribeye',
      category: 'beef',
      categoryLabel: 'Prime Beef • Showpiece Cut',
      sku: 'CUT-BF-TMHWK35',
      price: 64.00,
      unit: '45oz / 1.3kg (Cut to Order)',
      rating: '5.0 / 5.0',
      reviews: '(88 master butcher ratings)',
      badge1: 'Beef • Dry Aged 35 Days',
      badge2: 'USDA Prime • BMS 7+',
      portionNote: 'Massive long-bone bone-in ribeye frenched by hand to expose the pristine bone handle. Serves 2–3.',
      image: 'assets/images/image.png',
      gallery: [
        'assets/images/image.png',
        'assets/images/salt.png',
        'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'Hand-selected Black Angus beef, frenched to perfection and dry-aged on Himalayan pink salt blocks for 35 days. Boasts exceptional intramuscular fat marbling, a rich crust, and deep nutty steakhouse flavor.',
      tenderness: '9.8 / 10',
      marbling: 'BMS 7-8 Prime',
      feed: 'Pasture Reared • 150-Day Grain Finish',
      aging: '35-Day Himalayan Salt Brick Locker',
      anatomyTitle: 'The Grand King of the Rib Primal',
      anatomyDesc: 'Cut with the full 8-inch rib bone intact, frenched clean to the bone by hand. Features the tender center eye and rich spinalis dorsi ribeye cap.',
      cookingTitle: 'Reverse-Sear & Live Fire Charcoal Kiss',
      cookingSteps: [
        { step: '01', title: 'Low & Slow Indirect Roast', desc: 'Bake or smoke at 225°F (105°C) with oak chunks until internal core temperature reaches 115°F (46°C).' },
        { step: '02', title: 'Screaming Hot Sear', desc: 'Transfer over glowing lump charcoal or smoking cast iron for 90 seconds per side to form a mahogany bark.' },
        { step: '03', title: 'Carve & Sea Salt Flakes', desc: 'Rest 10 minutes on warm butcher board, carve perpendicular to the bone into thick pink slices, and finish with flaky Maldon salt.' }
      ]
    },

    'beef-2': {
      id: 'beef-2',
      name: 'Japanese Wagyu A5 Striploin',
      shortName: 'A5 Japanese Wagyu Strip',
      category: 'beef',
      categoryLabel: 'Beef • Miyazaki A5',
      sku: 'CUT-BF-WGYA5',
      price: 89.50,
      unit: '300g (Authentic Certified)',
      rating: '5.0 / 5.0',
      reviews: '(62 verified gourmet reviews)',
      badge1: 'Miyazaki Wagyu • 100% Certified A5',
      badge2: 'BMS 11-12 Snowflake Marbling',
      portionNote: 'Certified Miyazaki Kuroge Washu cattle with official Japanese nose print authenticity certificate.',
      image: 'assets/images/beef/wagyu-a5.jpg',
      gallery: [
        'assets/images/beef/wagyu-a5.jpg',
        'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&w=1200&q=80',
        'assets/images/salt.png'
      ],
      description: 'Exquisite snowflake marbling with a buttery texture that melts at room temperature. The undisputed pinnacle of global luxury butchery.',
      tenderness: '10.0 / 10',
      marbling: 'Japanese BMS 11-12',
      feed: 'Steamed Rice Straw & Golden Barley',
      aging: 'Fresh Wet Aged 21 Days',
      anatomyTitle: 'The Pinnacle of Japanese Cattle Craft',
      anatomyDesc: 'Harvested from purebred Japanese Black (Kuroge Washu) cattle in Miyazaki Prefecture. Monounsaturated oleic acid melts at 77°F (25°C), liquefying into rich, buttery sweetness on the tongue.',
      cookingTitle: 'Japanese Teppan Flash Sear',
      cookingSteps: [
        { step: '01', title: 'Keep Chilled Until Cook', desc: 'Because Wagyu fat melts at body temperature, keep refrigerated until 5 minutes before cooking to maintain structure.' },
        { step: '02', title: 'Zero Added Oil', desc: 'Heat a dry stainless steel pan or teppan plate to high heat. The steak will release its own luxurious liquid fat immediately.' },
        { step: '03', title: 'Flash Sear 90 Seconds', desc: 'Sear for only 60 to 90 seconds per side. Slice into bite-sized strips and dip in fresh wasabi and coarse sea salt.' }
      ]
    },

    'beef-3': {
      id: 'beef-3',
      name: '45-Day Dry-Aged Prime Porterhouse Steak',
      shortName: 'Prime Porterhouse (T-Bone)',
      category: 'beef',
      categoryLabel: 'Beef • Dry Aged 45 Days',
      sku: 'CUT-BF-PRTH45',
      price: 48.99,
      unit: 'lb (Hand weighed at cutting block)',
      rating: '4.9 / 5.0',
      reviews: '(84 butcher counter reviews)',
      badge1: 'Beef • Dry Aged 45 Days',
      badge2: 'USDA Prime • BMS 6',
      portionNote: 'Typical portion averages 24 oz – 32 oz (serves 2 hungry steak lovers).',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1200&q=80',
        'assets/images/image.png'
      ],
      description: 'The ultimate steak lover’s cut featuring both tender filet mignon and full-flavored New York strip connected by the bone, aged 45 days in salt-brick vaults.',
      tenderness: '9.8 / 10',
      marbling: 'USDA Prime (BMS 5-6)',
      feed: 'Pasture Reared • Organic Grain Finish',
      aging: '1.5°C • 80% RH • Salt Brick Lined',
      anatomyTitle: 'The King of the Short Loin',
      anatomyDesc: 'The Porterhouse is a magnificent dual-muscle steak carved from the posterior end of the short loin. It features a generous center T-bone anchoring two distinct culinary treasures: Filet Mignon and New York Strip.',
      cookingTitle: 'Master Butcher\'s Reverse Sear Method',
      cookingSteps: [
        { step: '01', title: 'Dry Brine & Temper', desc: 'Salt liberally with flaky sea salt 2 hours prior to cooking. Let rest on a wire rack at room temperature for 45 minutes.' },
        { step: '02', title: 'Low Oven / Smoker', desc: 'Roast at 225°F (107°C) until an instant-read thermometer reads 115°F (46°C) for medium-rare.' },
        { step: '03', title: 'Cast Iron Sear Finish', desc: 'Sear for 90 seconds per side in smoking cast iron with beef tallow, foaming butter, garlic, and rosemary.' }
      ]
    },

    'tomahawk': {
      id: 'tomahawk',
      name: 'Dry-Aged Prime Tomahawk Ribeye',
      shortName: 'Prime Tomahawk Ribeye',
      category: 'beef',
      categoryLabel: 'Beef • Dry Aged',
      sku: 'CUT-BF-TMHWK',
      price: 64.00,
      unit: '45oz (Showpiece Cut)',
      rating: '5.0 / 5.0',
      reviews: '(98 butcher counter reviews)',
      badge1: 'Beef • Dry Aged 35 Days',
      badge2: 'USDA Prime • BMS 7+',
      portionNote: '45oz long-bone showpiece steak frenched to exposed clean bone handle. Feeds 2–3 guests.',
      image: 'assets/images/image.png',
      gallery: [
        'assets/images/image.png',
        'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&w=1200&q=80',
        'assets/images/salt.png',
        'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'Massive long-bone bone-in ribeye frenched by hand to expose the pristine rib bone handle. Exceptional BMS 7+ marbling aged 35 days for deep nutty steakhouse flavor.',
      tenderness: '9.9 / 10',
      marbling: 'BMS 7-8 Prime',
      feed: 'Pasture Grazed & Corn Finished',
      aging: '35 Days Cold Vault Dry Aging',
      anatomyTitle: 'Long-Bone Rib Primal Showpiece',
      anatomyDesc: 'Cut with the full 8-inch rib bone intact, hand-scraped of excess sinew and tissue. The bone insulates the meat during cooking, keeping moisture locked inside.',
      cookingTitle: 'Wood-Fired Reverse Sear',
      cookingSteps: [
        { step: '01', title: 'Temper Core', desc: 'Due to the thickness (2.5 inches), temper at room temp for 60 minutes with coarse sea salt.' },
        { step: '02', title: 'Indirect Oven/Smoker', desc: 'Bake at 225°F (110°C) until internal probe reads 120°F (49°C).' },
        { step: '03', title: 'Charcoal Blast', desc: 'Finish over red-hot charcoal or cast iron for 2 minutes per side to build a blistered charred crust.' }
      ]
    },

    'beef-ribs': {
      id: 'beef-ribs',
      name: 'Prime Dinosaur Beef Plate Short Ribs',
      shortName: 'Dinosaur Beef Short Ribs',
      category: 'beef',
      categoryLabel: 'Prime Beef • Pitmaster Reserve',
      sku: 'CUT-BF-RIBPLT',
      price: 38.50,
      unit: '1.2kg (3-Bone Rack)',
      rating: '4.9 / 5.0',
      reviews: '(84 butcher counter reviews)',
      badge1: 'Prime Beef • Plate Short Rib',
      badge2: 'Bones 6-7-8 Dinosaur Cut',
      portionNote: 'Substantial 3-bone plate rack with thick meat cap. Perfect for low & slow smoking. Serves 3–4.',
      image: 'assets/images/Decoding Beef Rib.jpg',
      gallery: [
        'assets/images/Decoding Beef Rib.jpg',
        'assets/images/blog/hardwood-smoked-brisket.jpg',
        'assets/images/salt.png',
        'assets/images/image.png'
      ],
      description: 'Massive 3-bone plate section (Bones 6, 7, 8) with deep intramuscular fat that renders into silky gelatin during slow smoking.',
      tenderness: '9.7 / 10',
      marbling: 'BMS 8+ High Collagen Intermuscular',
      feed: 'Corn Finished Prime Angus',
      aging: 'Wet Aged 21 Days for Optimal Moisture',
      anatomyTitle: 'Plate Short Rib (Ribs 6, 7 & 8)',
      anatomyDesc: 'Carved directly from the lower rib cage (the plate primal), these ribs carry the serratus ventralis muscle—the thickest, most heavily marbled cut on the entire steer, providing the signature succulent gelatin bite when smoked.',
      cookingTitle: 'Low & Slow Texas Pitmaster Smoke',
      cookingSteps: [
        { step: '01', title: 'Trim & Rub', desc: 'Trim excess silver skin from the top meat while keeping the bottom bone membrane intact. Season liberally with coarse kosher salt and 16-mesh cracked black pepper.' },
        { step: '02', title: 'Oak Smoke at 250°F', desc: 'Smoke over seasoned post oak or hickory at 250°F (121°C) for 5-6 hours until a dark, mahogany bark sets, spritzing with apple cider vinegar.' },
        { step: '03', title: 'Probe Tender Finish', desc: 'Continue smoking until an internal thermometer enters like warm butter (approx. 203°F / 95°C). Rest wrapped in butcher paper for 1 hour before slicing between the bones.' }
      ]
    },

    'beef-4': {
      id: 'beef-4',
      name: 'Center-Cut Filet Mignon',
      shortName: 'Center-Cut Filet Mignon',
      category: 'beef',
      categoryLabel: 'Prime Beef • Tenderloin',
      sku: 'CUT-BF-FLT04',
      price: 38.00,
      unit: '400g (2 Medallions)',
      rating: '4.9 / 5.0',
      reviews: '(91 butcher counter reviews)',
      badge1: 'Prime Beef • Grass-Fed Angus',
      badge2: '100% Lean Châteaubriand Cut',
      portionNote: 'Hand-trimmed barrel-cut tenderloin medallions with silver skin removed.',
      image: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1200&q=80',
        'assets/images/image.png'
      ],
      description: 'Extremely lean yet exceptionally tender tenderloin medallions, hand-trimmed to pure perfection by our master cutters with zero gristle.',
      tenderness: '10.0 / 10',
      marbling: 'Delicate Fine Intramuscular',
      feed: 'Free-Range Pasture & Alfalfa',
      aging: 'Wet Aged 14 Days',
      anatomyTitle: 'Psoas Major Tenderloin Barrel',
      anatomyDesc: 'The least exercised muscle in the carcass, resulting in unmatched velvety texture and delicate, buttery flavor that cuts like warm butter.',
      cookingTitle: 'Butter-Basted Pan Sear',
      cookingSteps: [
        { step: '01', title: 'Tie with Twine', desc: 'Secure the cylindrical medallion with kitchen twine to guarantee uniform circular cooking.' },
        { step: '02', title: 'Hot Butter Sear', desc: 'Sear in clarified butter for 3 minutes per side in a heavy skillet.' },
        { step: '03', title: 'Rest with Compound Butter', desc: 'Rest for 7 minutes topped with roasted garlic herb butter.' }
      ]
    },

    'chk-5': {
      id: 'chk-5',
      name: 'Herb-Marinated Spatchcock Chicken',
      shortName: 'Spatchcock Chicken',
      category: 'chicken',
      categoryLabel: 'Pasture Poultry • Grill Ready',
      sku: 'CUT-CK-SPT16',
      price: 21.00,
      unit: '1.6kg (Whole Butterfly)',
      rating: '4.9 / 5.0',
      reviews: '(65 butcher counter reviews)',
      badge1: 'Pasture Poultry • Ready to Grill',
      badge2: 'Whole Butterfly Flattened',
      portionNote: 'Backbone removed and flattened for even, rapid 35-minute roasting. Serves 3–4.',
      image: 'assets/images/chicken/spatchcock-chicken.jpg',
      gallery: [
        'assets/images/chicken/spatchcock-chicken.jpg',
        'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'Backbone removed and butterflied flat for rapid, even grilling. Infused with fresh garden rosemary, garlic confit, and cracked tellicherry black pepper.',
      tenderness: '9.8 / 10',
      marbling: 'Air-Chilled Crispy Skin',
      feed: '100% Certified Organic Feed',
      aging: 'Air-Chilled Zero Water Added',
      anatomyTitle: 'Butterflied Whole Pasture Broiler',
      anatomyDesc: 'Removing the spinal column allows breasts and dark thighs to cook in the same horizontal plane, guaranteeing crispy skin and uniformly juicy white meat.',
      cookingTitle: 'Crisp Skillet or Grill Roast',
      cookingSteps: [
        { step: '01', title: 'Bring to Room Temp', desc: 'Remove from refrigeration 30 minutes prior to cooking. Pat skin thoroughly dry.' },
        { step: '02', title: 'Skin Side Down First', desc: 'Sear skin side down in a hot skillet with weight on top for 20 minutes until crackling.' },
        { step: '03', title: 'Flip & Baste', desc: 'Turn over and roast in oven at 400°F (205°C) for 15 minutes with lemon juice and thyme.' }
      ]
    },

    'mut-1': {
      id: 'mut-1',
      name: '8-Bone French-Trimmed Rack of Lamb',
      shortName: '8-Bone Frenched Lamb Rack',
      category: 'mutton',
      categoryLabel: 'Mutton & Lamb',
      sku: 'CUT-MT-RCK08',
      price: 34.50,
      unit: 'lb (Pasture Clover Fed)',
      rating: '4.9 / 5.0',
      reviews: '(56 butcher counter reviews)',
      badge1: 'Spring Mutton • Grass-Fed Heritage',
      badge2: 'French Cleaned Bone Tips',
      portionNote: 'Pasture clover fed, sweet delicate fat profile, ready for roasting.',
      image: 'assets/images/mutton/rack-of-lamb.jpg',
      gallery: [
        'assets/images/mutton/rack-of-lamb.jpg',
        'https://images.unsplash.com/photo-1504973960431-1c467e159aa4?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=1200&q=80',
        'assets/images/mutton/lamb-shanks.jpg'
      ],
      description: 'Eight-rib rack elegantly cleaned to exposed bone tips. Delicate, sweet grass-fed flavor crafted for a high-heat gourmet roast.',
      tenderness: '9.9 / 10',
      marbling: 'Silky Intermuscular Fat Ribbon',
      feed: '100% Free-Range Clover & Wild Rye',
      aging: 'Air-Chilled 7 Days',
      anatomyTitle: 'The Crown of Spring Lamb Butchery',
      anatomyDesc: 'Carved from the rib primal of prime young spring lambs. The rib bones are individually scraped clean (frenching) by hand to showcase pure pearlescent bone and tender eye meat.',
      cookingTitle: 'Herb-Crusted High-Heat Roast',
      cookingSteps: [
        { step: '01', title: 'Dijon & Herb Crust', desc: 'Brush the fat cap lightly with Dijon mustard, then press an herb crust of panko, parsley, rosemary, and garlic.' },
        { step: '02', title: 'Roast at 425°F', desc: 'Roast at 425°F (220°C) for 18-22 minutes until core reaches 130°F (54°C) for blushing medium-rare.' },
        { step: '03', title: 'Rest & Carve', desc: 'Rest for 10 minutes uncovered before carving between bones into elegant individual cutlets.' }
      ]
    },

    'mut-2': {
      id: 'mut-2',
      name: 'Slow-Braised Lamb Shanks',
      shortName: 'Slow-Braised Lamb Shanks',
      category: 'mutton',
      categoryLabel: 'Spring Mutton • Slow Cook',
      sku: 'CUT-MT-SHK02',
      price: 29.50,
      unit: '1kg (2 Hind Shanks)',
      rating: '4.9 / 5.0',
      reviews: '(49 butcher counter reviews)',
      badge1: 'Spring Mutton • Slow-Cook Master',
      badge2: 'Hind Shank Bone-In',
      portionNote: 'Hind-shank cuts packed with rich marrow and connective tissue for velvety gravies.',
      image: 'assets/images/mutton/lamb-shanks.jpg',
      gallery: [
        'assets/images/mutton/lamb-shanks.jpg',
        'assets/images/mutton/rack-of-lamb.jpg',
        'assets/images/mutton/mutton-curry-cut.jpg',
        'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'Hind-shank cuts packed with rich marrow and connective tissue that gently dissolve into velvety gravy during slow braising.',
      tenderness: '9.9 / 10',
      marbling: 'Rich Collagen & Marrow',
      feed: 'Grass-Fed Mountain Pastures',
      aging: 'Chilled 5 Days',
      anatomyTitle: 'Hind-Leg Shank with Rich Marrow Core',
      anatomyDesc: 'Taken from the lower leg portion of pasture lambs, this heavily exercised muscle is dense in collagen and connective tissue that turns fork-tender after low, moist heat.',
      cookingTitle: 'Classic Red Wine & Rosemary Braise',
      cookingSteps: [
        { step: '01', title: 'Hard Brown the Shanks', desc: 'Brown all sides of the seasoned shanks in hot olive oil in a heavy Dutch oven until deeply golden.' },
        { step: '02', title: 'Aromatic Reduction', desc: 'Remove meat, sauté mirepoix vegetables, deglaze with full-bodied dry red wine and rich lamb bone stock.' },
        { step: '03', title: '3-Hour Slow Simmer', desc: 'Cover tightly and braise at 300°F (150°C) for 2.5 to 3 hours until meat literally falls away from the bone.' }
      ]
    },

    'mut-3': {
      id: 'mut-3',
      name: 'Bone-In Mutton Curry Cut',
      shortName: 'Bone-In Mutton Curry Cut',
      category: 'mutton',
      categoryLabel: 'Spring Mutton • Stewing',
      sku: 'CUT-MT-CRY01',
      price: 24.00,
      unit: '1kg (Chef Hand-Diced)',
      rating: '4.8 / 5.0',
      reviews: '(73 butcher counter reviews)',
      badge1: 'Spring Mutton • Chef Choice',
      badge2: 'Bone-to-Meat Balanced',
      portionNote: 'Uniform 1.5-inch cubes with balanced bone, marrow, and lean shoulder meat.',
      image: 'assets/images/mutton/mutton-curry-cut.jpg',
      gallery: [
        'assets/images/mutton/mutton-curry-cut.jpg',
        'assets/images/mutton/lamb-shanks.jpg',
        'assets/images/mutton/rack-of-lamb.jpg',
        'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'Evenly diced pieces of goat/mutton with a balanced ratio of bone and lean muscle for authentic, aromatic curries and stews.',
      tenderness: '9.6 / 10',
      marbling: 'Gelatinous Bone & Lean',
      feed: 'Pasture Grazed',
      aging: 'Fresh Cut Daily',
      anatomyTitle: 'Shoulder, Rib & Loin Medley',
      anatomyDesc: 'Hand-cleaved across the grain from whole pasture carcasses. Retains bone pieces for rich marrow dissolution and full-bodied sauce thickness.',
      cookingTitle: 'Aromatic Slow-Pot Curry',
      cookingSteps: [
        { step: '01', title: 'Yogurt & Whole Spice Marinade', desc: 'Marinate pieces with yogurt, cracked pepper, ginger-garlic paste, and turmeric for 2 hours.' },
        { step: '02', title: 'Slow Bhuna Browning', desc: 'Sauté in ghee with whole cardamom, cinnamon, and caramelised onions until spices bloom.' },
        { step: '03', title: 'Gentle Simmer', desc: 'Add simmering water or bone broth, cover tightly, and simmer on lowest heat for 75 minutes until meltingly tender.' }
      ]
    },

    'prk-1': {
      id: 'prk-1',
      name: 'Heritage Kurobuta Thick-Cut Pork Chops',
      shortName: 'Heritage Thick Pork Chop',
      category: 'pork',
      categoryLabel: 'Pork • Berkshire',
      sku: 'CUT-PK-CHP12',
      price: 18.99,
      unit: 'lb (Woodland Foraged)',
      rating: '4.8 / 5.0',
      reviews: '(78 butcher counter reviews)',
      badge1: 'Heritage Kurobuta • 100% Berkshire',
      badge2: 'Rich Red Marbled',
      portionNote: 'Woodland foraged, rich red marbling, extraordinarily juicy. Hand-cut 1.75 inches thick.',
      image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=1200&q=80',
        'assets/images/products/crispy-crackling-pork-belly.jpg',
        'assets/images/products/whole-pork-tenderloin.jpg'
      ],
      description: 'The Wagyu of pork. Intensely marbled, deep rosy-red meat with rich intramuscular fat for unprecedented juiciness.',
      tenderness: '9.7 / 10',
      marbling: 'Exceptional Kurobuta Marbling',
      feed: 'Woodland Foraged Acorns & Milk',
      aging: 'Air Chilled 5 Days',
      anatomyTitle: 'The Center-Cut Berkshire Loin',
      anatomyDesc: 'Sourced from purebred English Berkshire (Kurobuta) pigs. Unlike pale industrial pork, Kurobuta meat has a dark ruby hue, neutral pH, and rich marbling that stays succulent when seared.',
      cookingTitle: 'Pan-Basted Heritage Pork Sear',
      cookingSteps: [
        { step: '01', title: 'Score the Fat Cap', desc: 'Score the outer fat ribbon in 1/2-inch intervals to prevent the chop from curling when heat hits the pan.' },
        { step: '02', title: 'Render the Edge First', desc: 'Hold the chop vertically with tongs on its fat edge for 2 minutes to render crispy golden lard.' },
        { step: '03', title: 'Sear to Juicy Medium', desc: 'Sear each flat side for 4 minutes with thyme and apple cider butter. Cook to 140°F (60°C) for tender juicy pork.' }
      ]
    },

    'prk-3': {
      id: 'prk-3',
      name: 'Whole Berkshire Pork Tenderloin',
      shortName: 'Pork Tenderloin',
      category: 'pork',
      categoryLabel: 'Pork • Berkshire',
      sku: 'CUT-PK-TND03',
      price: 18.00,
      unit: '600g (Lean & Tender)',
      rating: '4.9 / 5.0',
      reviews: '(64 butcher counter reviews)',
      badge1: 'Lean & Tender • 100% Berkshire',
      badge2: 'Pasture Reared',
      portionNote: 'The leanest and most delicate cut of pork. Subtle sweetness, easily absorbs marinades, and cooks quickly. Serves 2–3.',
      image: 'assets/images/products/whole-pork-tenderloin.jpg',
      gallery: [
        'assets/images/products/whole-pork-tenderloin.jpg',
        'assets/images/products/crispy-crackling-pork-belly.jpg',
        'assets/images/products/artisan-butcher-sausages.jpg',
        'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'The filet mignon of pork. Extremely tender, fine-grained muscle running along the backbone. Naturally succulent with gentle floral pork aromatics.',
      tenderness: '9.9 / 10',
      marbling: 'Delicate Fine Intramuscular Grain',
      feed: 'Woodland Pasture Clover & Forage',
      aging: 'Air Chilled Fresh 4 Days',
      anatomyTitle: 'The Psoas Major Tenderloin',
      anatomyDesc: 'Located ventral to the lumbar vertebrae beneath the loin. A non-weight-bearing muscle with virtually zero tough connective tissue or collagen, resulting in exceptional melt-in-the-mouth texture.',
      cookingTitle: 'Herb-Crusted Medallion Roast',
      cookingSteps: [
        { step: '01', title: 'Trim Silver Skin & Sear', desc: 'Gently slip knife under the silver skin to peel away tough surface elastin. Sear whole tenderloin in butter and rosemary for 3 minutes until golden brown on all sides.' },
        { step: '02', title: 'Gentle Oven Roast', desc: 'Transfer to a 375°F (190°C) oven for 12–15 minutes until the internal temperature reaches 145°F (63°C).' },
        { step: '03', title: 'Rest & Slice Medallions', desc: 'Rest under loose foil for 8 minutes to let juices redistribute, then carve diagonally into 1-inch thick juicy pink medallions.' }
      ]
    },

    'prk-4': {
      id: 'prk-4',
      name: 'Crispy Crackling Pork Belly Slab',
      shortName: 'Pork Belly Slab',
      category: 'pork',
      categoryLabel: 'Pork • Berkshire',
      sku: 'CUT-PK-BLY04',
      price: 26.00,
      unit: '1.2kg (Master Roast Cut)',
      rating: '5.0 / 5.0',
      reviews: '(89 master roast reviews)',
      badge1: 'Master Roast Cut • 100% Berkshire',
      badge2: 'Crispy Crackling Skin',
      portionNote: 'Layered meat and fat scored by hand for guaranteed bubbling crackling skin and meltingly soft interior. Serves 4–6.',
      image: 'assets/images/products/crispy-crackling-pork-belly.jpg',
      gallery: [
        'assets/images/products/crispy-crackling-pork-belly.jpg',
        'assets/images/products/whole-pork-tenderloin.jpg',
        'assets/images/products/artisan-butcher-sausages.jpg',
        'assets/images/products/farmhouse-feast-crate.jpg'
      ],
      description: 'The pinnacle of roast pork. Alternating strata of silky Berkshire fat and succulent pork meat capped with hand-scored skin that puffs into glass-brittle golden crackling.',
      tenderness: '9.6 / 10',
      marbling: 'Rich Alternating Fat & Lean Strata',
      feed: 'Pasture Foraged Acorns & Non-GMO Grains',
      aging: 'Surface Air-Dried 48 Hours',
      anatomyTitle: 'The Boneless Navel & Belly Primal',
      anatomyDesc: 'Cut from the underside of the carcass beneath the spare ribs. Berkshire belly features thicker, firmer fat caps that render into pure aromatic lard without feeling greasy.',
      cookingTitle: 'Master Blistered Crackling Roast',
      cookingSteps: [
        { step: '01', title: 'Dry the Skin Overnight', desc: 'Rub coarse butcher sea salt and white vinegar into the scored skin grooves; refrigerate uncovered overnight for maximum dehydrated skin.' },
        { step: '02', title: 'Slow Convection Tenderizing', desc: 'Roast on a rack over aromatic root vegetables at 300°F (150°C) for 2.5 hours until internal pork layers are meltingly tender.' },
        { step: '03', title: 'High Heat Blistering', desc: 'Increase heat to 450°F (230°C) for 15 minutes. The skin will violently puff into airy, shatteringly crisp golden crackling.' }
      ]
    },

    'prk-5': {
      id: 'prk-5',
      name: 'Artisan Butcher Sausage Selection',
      shortName: 'Artisan Sausages',
      category: 'pork',
      categoryLabel: 'Pork • Berkshire',
      sku: 'CUT-PK-SAU05',
      price: 16.50,
      unit: '800g (6 links)',
      rating: '4.9 / 5.0',
      reviews: '(112 customer favorite reviews)',
      badge1: 'Natural Hog Casing • Hand-Tied',
      badge2: 'Zero Nitrates or Fillers',
      portionNote: 'Coarse ground heritage pork, sea salt, fennel seed, and cracked black pepper stuffed in natural casings. Pack of 6 links (approx. 800g).',
      image: 'assets/images/products/artisan-butcher-sausages.jpg',
      gallery: [
        'assets/images/products/artisan-butcher-sausages.jpg',
        'assets/images/products/whole-pork-tenderloin.jpg',
        'assets/images/products/crispy-crackling-pork-belly.jpg',
        'assets/images/products/grill-master-reserve-box.jpg'
      ],
      description: 'Crafted fresh daily in our butcher shop. 80/20 ratio of prime shoulder trim to heritage fat, coarsely ground and seasoned with toasted Tuscan fennel, roasted garlic, and coarse black pepper.',
      tenderness: '9.5 / 10',
      marbling: 'Balanced 80/20 Prime Meat-to-Fat Ratio',
      feed: 'Pasture Reared Berkshire Hog',
      aging: 'Hand-Tied & Rested 24 Hours',
      anatomyTitle: 'Heritage Boston Butt & Jowl Blend',
      anatomyDesc: 'Using only whole muscle Berkshire shoulder and cheek trim rather than scraps. Stuffed into natural hog casings that snap cleanly when bitten.',
      cookingTitle: 'Slow Poach & Charcoal Crisp Method',
      cookingSteps: [
        { step: '01', title: 'Gentle Cider Simmer', desc: 'Place links in a skillet with 1/2 cup cider or stock. Simmer gently over medium-low heat for 8 minutes to cook through without bursting the casing.' },
        { step: '02', title: 'Butter or Cast-Iron Sear', desc: 'Pour off remaining liquid, add cultured butter or tallow, and crisp the casings for 3–4 minutes until blistered mahogany brown.' },
        { step: '03', title: 'Rest & Serve', desc: 'Rest for 3 minutes before piercing to allow internal flavorful juices to re-emulsify.' }
      ]
    },

    'box-grillmaster': {
      id: 'box-grillmaster',
      name: "The Grill Master's Reserve Box",
      shortName: 'Grill Master Box',
      category: 'box',
      categoryLabel: 'Curated Box • BBQ Reserve',
      sku: 'BOX-GRILL-01',
      price: 195.00,
      unit: 'box (approx. 16 lbs)',
      rating: '4.9 / 5.0',
      reviews: '(48 pitmaster reviews)',
      badge1: 'Curated Box • Flame Reserve',
      badge2: 'Charcoal & Smoker Ready',
      portionNote: 'Hand-selected cuts for charcoal & flame grilling: 2x Prime dry-aged ribeyes, 4x smash burger patties, 4x pork chops, and artisan sausages. Serves 8–12.',
      image: 'assets/images/products/grill-master-reserve-box.jpg',
      gallery: [
        'assets/images/products/grill-master-reserve-box.jpg',
        'assets/images/products/farmhouse-feast-crate.jpg',
        'assets/images/blog/hardwood-smoked-brisket.jpg',
        'assets/images/salt.png'
      ],
      description: 'The ultimate collection for live-fire enthusiasts. Features thick hand-cut dry-aged bone-in ribeyes, coarsely ground artisan chuck patties, heritage pork chops, and house-made sausages in natural casings.',
      tenderness: '9.8 / 10',
      marbling: 'Prime BMS 6-7 + Kurobuta Marbled',
      feed: 'Pasture Reared & Heritage Grains',
      aging: '35-Day Salt Aged Steaks + Fresh Sausage',
      anatomyTitle: 'The Pitmaster Live-Fire Assortment',
      anatomyDesc: 'Balanced between high-heat sear cuts (dry-aged ribeyes, burger patties) and indirect charcoal roasting cuts (thick-cut pork chops and coarse natural-casing pork sausages).',
      cookingTitle: 'Two-Zone Charcoal Grilling Protocol',
      cookingSteps: [
        { step: '01', title: 'Two-Zone Charcoal Setup', desc: 'Bank lump hardwood charcoal to one half of the grill, creating direct searing heat (500°F) and indirect roasting heat (275°F).' },
        { step: '02', title: 'Slow Roast First', desc: 'Roast sausages and pork chops on the indirect side until internal temperatures register 135°F.' },
        { step: '03', title: 'Flash Sear Steaks & Burgers', desc: 'Sear dry-aged ribeyes and burger patties directly over searing coals for 90 seconds per side for intense charred mahogany crust.' }
      ]
    },

    'box-farmhouse': {
      id: 'box-farmhouse',
      name: 'Heritage Farmhouse Feast Crate',
      shortName: 'Farmhouse Feast Crate',
      category: 'box',
      categoryLabel: 'Curated Box • Farmhouse Reserve',
      sku: 'BOX-FARM-02',
      price: 275.00,
      unit: 'box (approx. 18 lbs)',
      rating: '5.0 / 5.0',
      reviews: '(56 verified feast reviews)',
      badge1: 'Curated Box • Pasture Harvest',
      badge2: '100% Ethical Pasture Raised',
      portionNote: 'An abundant harvest of pasture-raised meats: French-trimmed rack of lamb, whole spatchcock roaster, thick-cut Berkshire belly, and bone marrow butter. Serves 12–16.',
      image: 'assets/images/products/farmhouse-feast-crate.jpg',
      gallery: [
        'assets/images/products/farmhouse-feast-crate.jpg',
        'assets/images/products/grill-master-reserve-box.jpg',
        'assets/images/blog/spatchcock-roast-chicken.jpg',
        'assets/images/mutton/rack-of-lamb.jpg'
      ],
      description: 'A celebration of heritage pasture breeds and artisan butcher craftsmanship. Featuring our delicate 8-rib French-trimmed lamb rack, air-chilled whole spatchcock roaster, crackling pork belly slab, and cultured marrow butter.',
      tenderness: '9.9 / 10',
      marbling: 'Natural Pasture Intramuscular Marbling',
      feed: 'Wild Pasture Grass, Clover & Acorns',
      aging: 'Air Chilled Fresh 5–7 Days',
      anatomyTitle: 'The Farmhouse Multi-Species Showcase',
      anatomyDesc: 'Sourced exclusively from small cooperative family farms practicing regenerative pasture rotation. Includes premium cuts across pasture lamb, free-range poultry, and woodland Kurobuta pork.',
      cookingTitle: 'Grand Sunday Roast Masterclass',
      cookingSteps: [
        { step: '01', title: 'Crispy Skin Preparation', desc: 'Uncover chicken and pork belly in the refrigerator for 4 hours to dry out surface skin for superior crackling.' },
        { step: '02', title: 'High-Heat Lamb Rack Roast', desc: 'Roast French rack of lamb at 425°F (220°C) with rosemary and garlic crust for 22 minutes to tender ruby medium-rare.' },
        { step: '03', title: 'Crispy Crackling Finish', desc: 'Blast pork belly slab under top broiler for the final 5 minutes until the skin bubbles into glass-crisp golden crackling.' }
      ]
    }
  };

  // Helper: get product data from custom database or fallback to products.js catalog
  function getProduct(id) {
    if (!id) return CUT_DATABASE['beef-3'];
    
    // Check direct ID or alias
    const normalized = id.toLowerCase().trim();
    if (CUT_DATABASE[normalized]) return CUT_DATABASE[normalized];

    // Check alias mappings
    const aliasMap = {
      'porterhouse': 'beef-3',
      'porterhouse-45': 'beef-3',
      'ribeye': 'beef-1',
      'dry-aged-ribeye': 'beef-1',
      'wagyu': 'beef-2',
      'wagyu-a5': 'beef-2',
      'lamb-rack': 'mut-1',
      'lamb-shanks': 'mut-2',
      'mutton-curry': 'mut-3',
      'pork-chop': 'prk-1',
      'pork-tenderloin': 'prk-3',
      'whole-pork-tenderloin': 'prk-3',
      'pork-belly': 'prk-4',
      'crispy-pork-belly': 'prk-4',
      'sausage': 'prk-5',
      'sausages': 'prk-5',
      'artisan-sausages': 'prk-5',
      'spatchcock': 'chk-5',
      'tomahawk-ribeye': 'tomahawk',
      'beef-ribs': 'beef-ribs',
      'dinosaur-ribs': 'beef-ribs',
      'plate-ribs': 'beef-ribs'
    };
    if (aliasMap[normalized] && CUT_DATABASE[aliasMap[normalized]]) {
      return CUT_DATABASE[aliasMap[normalized]];
    }

    // Fallback: check window.ProductCatalog if loaded
    if (window.ProductCatalog && typeof window.ProductCatalog.getAll === 'function') {
      const all = window.ProductCatalog.getAll();
      const match = all.find(p => p.id.toLowerCase() === normalized);
      if (match) {
        return {
          id: match.id,
          name: match.name,
          shortName: match.name,
          category: match.category,
          categoryLabel: match.categoryLabel || 'Artisan Meat',
          sku: 'CUT-' + match.id.toUpperCase(),
          price: match.price,
          unit: match.unit,
          rating: '4.9 / 5.0',
          reviews: '(50+ counter reviews)',
          badge1: match.categoryLabel + ' • ' + match.tag,
          badge2: 'Pasture Raised & Certified',
          portionNote: 'Prepared and portioned fresh to order.',
          image: match.image,
          gallery: [match.image, 'assets/images/salt.png', 'assets/images/image.png'],
          description: match.description,
          tenderness: '9.7 / 10',
          marbling: 'Master Grade',
          feed: 'Pasture Reared Natural',
          aging: 'Cold Chain Guaranteed',
          anatomyTitle: 'Artisan Precision Butchery',
          anatomyDesc: match.description,
          cookingTitle: 'Master Preparation Guide',
          cookingSteps: [
            { step: '01', title: 'Preparation', desc: 'Bring meat to room temperature 30 minutes before cooking.' },
            { step: '02', title: 'Cooking', desc: 'Cook gently to develop flavor while retaining moisture and tenderness.' },
            { step: '03', title: 'Resting', desc: 'Rest for 5–10 minutes before carving to allow juices to redistribute.' }
          ]
        };
      }
    }

    // Default to Porterhouse
    return CUT_DATABASE['beef-3'];
  }

  // Render product details onto the DOM
  function renderProductDetails(product) {
    if (!product) return;

    // Document Title
    document.title = `${product.name} | Prime & Cut Artisan Butcher Shop`;

    // Breadcrumbs
    const bcCat = document.getElementById('breadcrumbCategory');
    const bcProd = document.getElementById('breadcrumbProduct');
    if (bcCat) {
      bcCat.textContent = product.categoryLabel;
      bcCat.href = `products.html?category=${product.category}`;
    }
    if (bcProd) {
      bcProd.textContent = product.name;
    }

    // Main Hero Image
    const mainImg = document.getElementById('mainProductImage');
    if (mainImg) {
      mainImg.src = product.image;
      mainImg.alt = product.name;
    }

    // Badges on Image
    const badge1 = document.getElementById('productBadge1');
    const badge2 = document.getElementById('productBadge2');
    if (badge1) badge1.textContent = product.badge1;
    if (badge2) {
      badge2.innerHTML = `<i class="bi bi-star-fill text-[11px]"></i> ${product.badge2}`;
    }

    // SKU & Title
    const skuEl = document.getElementById('productSku');
    if (skuEl) skuEl.textContent = 'SKU: ' + product.sku;

    const titleEl = document.getElementById('productTitle');
    if (titleEl) titleEl.textContent = product.name;

    // Rating & Reviews
    const ratingEl = document.getElementById('productRating');
    const reviewsEl = document.getElementById('productReviews');
    if (ratingEl) ratingEl.textContent = product.rating;
    if (reviewsEl) reviewsEl.textContent = product.reviews;

    // Price & Unit
    const priceEl = document.getElementById('productPrice');
    const unitEl = document.getElementById('productUnit');
    if (priceEl) priceEl.textContent = '$' + product.price.toFixed(2);
    if (unitEl) unitEl.textContent = '/ ' + product.unit;

    // Portion Note & Description
    const portionEl = document.getElementById('productPortionNote');
    if (portionEl) portionEl.textContent = product.portionNote;

    const descEl = document.getElementById('productDescription');
    if (descEl) descEl.textContent = product.description;

    // Add to Basket Button data attributes and click event
    const addBtn = document.getElementById('detailAddBtn');
    if (addBtn) {
      addBtn.setAttribute('data-id', product.id);
      addBtn.setAttribute('data-title', product.name);
      addBtn.setAttribute('data-price', product.price);
      addBtn.setAttribute('data-category', product.category);

      if (!addBtn.dataset.wired) {
        addBtn.dataset.wired = 'true';
        addBtn.addEventListener('click', () => {
          const id = addBtn.getAttribute('data-id') || product.id;
          const title = addBtn.getAttribute('data-title') || product.name;
          const price = parseFloat(addBtn.getAttribute('data-price')) || product.price;
          const qtyInput = document.getElementById('cutQuantity');
          const qty = parseInt(qtyInput ? qtyInput.value : 1) || 1;
          const image = document.getElementById('mainProductImage')?.src || product.image;
          
          if (typeof window.addToEnquiryCart === 'function') {
            window.addToEnquiryCart(id, qty, { title, price, image });
          } else if (window.ProductCatalog && typeof window.ProductCatalog.addToCart === 'function') {
            window.ProductCatalog.addToCart(id, qty, { title, price, image });
          }
        });
      }
    }

    // Selectable Cut Thumbnails (4 distinct cuts so clicking each displays its own image and content!)
    const thumbsContainer = document.getElementById('galleryThumbnails');
    if (thumbsContainer) {
      // Find 4 distinct cuts to feature for this category
      const categoryCuts = {
        'beef': ['beef-2', 'tomahawk', 'beef-3', 'beef-1'],
        'mutton': ['mut-1', 'mut-2', 'mut-3', 'mut-4'],
        'chicken': ['chk-5', 'chk-1', 'chk-2', 'chk-4'],
        'pork': ['prk-1', 'prk-3', 'prk-4', 'prk-5']
      };
      
      let candidateKeys = categoryCuts[product.category] || ['beef-2', 'tomahawk', 'mut-1', 'prk-1'];
      // Ensure the current product is in the candidates
      if (!candidateKeys.includes(product.id)) {
        candidateKeys = [product.id, ...candidateKeys.filter(k => k !== product.id)].slice(0, 4);
      }
      
      const distinctCuts = candidateKeys.map(k => getProduct(k)).filter(Boolean).slice(0, 4);

      thumbsContainer.innerHTML = distinctCuts.map(cut => {
        const isActive = (cut.id === product.id);
        return `
          <button type="button" 
                  class="cut-select-thumb-btn group relative rounded-xl overflow-hidden border-2 transition text-start flex flex-col justify-between cursor-pointer ${isActive ? 'border-red-700 ring-2 ring-red-700/30 shadow-md bg-red-50/10 dark:bg-red-950/10' : 'border-stone-200 dark:border-zinc-800 hover:border-red-700/50 shadow-sm'}" 
                  data-cut-id="${cut.id}" 
                  title="View ${cut.name}" 
                  aria-label="View specifications for ${cut.name}">
            <div class="h-16 sm:h-20 w-full overflow-hidden bg-stone-100 dark:bg-zinc-800 relative">
              <img src="${cut.image}" alt="${cut.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy">
              ${isActive ? '<span class="absolute top-1 start-1 bg-red-700 text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow tracking-wider uppercase">VIEWING</span>' : ''}
            </div>
            <div class="p-1.5 bg-stone-50 dark:bg-zinc-800/90 w-full">
              <p class="text-[11px] font-bold text-stone-900 dark:text-stone-100 truncate mb-0.5 leading-tight group-hover:text-red-700 transition">
                ${cut.shortName || cut.name}
              </p>
              <p class="text-[10px] text-red-700 dark:text-red-400 font-black mb-0">
                $${cut.price.toFixed(2)}
              </p>
            </div>
          </button>
        `;
      }).join('');

      // Clicking ANY of the 4 cuts immediately loads THAT cut's image AND THAT cut's unique contents!
      thumbsContainer.querySelectorAll('.cut-select-thumb-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = btn.getAttribute('data-cut-id');
          if (targetId && targetId !== product.id) {
            history.pushState({ id: targetId }, '', `product-details.html?id=${targetId}`);
            const nextProduct = getProduct(targetId);
            renderProductDetails(nextProduct);
          }
        });
      });
    }

    // Anatomy Tab
    const anaTitle = document.getElementById('tabAnatomyTitle');
    const anaDesc = document.getElementById('tabAnatomyDesc');
    const scoreTend = document.getElementById('tabTendernessScore');
    const scoreMarb = document.getElementById('tabMarblingGrade');
    const scoreFeed = document.getElementById('tabFeedRegimen');
    const scoreAging = document.getElementById('tabAgingAtmosphere');

    if (anaTitle) anaTitle.textContent = product.anatomyTitle;
    if (anaDesc) anaDesc.textContent = product.anatomyDesc;
    if (scoreTend) scoreTend.textContent = product.tenderness;
    if (scoreMarb) scoreMarb.textContent = product.marbling;
    if (scoreFeed) scoreFeed.textContent = product.feed;
    if (scoreAging) scoreAging.textContent = product.aging;

    // Cooking Guide Tab
    const cookTitle = document.getElementById('cookingGuideTitle');
    const cookContainer = document.getElementById('cookingGuideContainer');
    if (cookTitle) cookTitle.textContent = product.cookingTitle;
    if (cookContainer && Array.isArray(product.cookingSteps)) {
      cookContainer.innerHTML = product.cookingSteps.map(step => `
        <div class="p-5 rounded-xl bg-stone-50 dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700">
          <span class="text-2xl font-bold font-heading text-red-700 block mb-2">${step.step}</span>
          <h4 class="font-bold text-stone-900 dark:text-stone-100 mb-2">${step.title}</h4>
          <p class="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">${step.desc}</p>
        </div>
      `).join('');
    }

    // Render 4 Companion Selections (Distinct from current product)
    renderCompanionCuts(product.id);
  }

  // Render companion cuts section with 4 distinct recommendations
  function renderCompanionCuts(currentId) {
    const companionGrid = document.getElementById('companionCutsGrid');
    if (!companionGrid) return;

    // Get 4 distinct recommendations
    const allKeys = Object.keys(CUT_DATABASE).filter(k => k !== currentId);
    
    // Choose high-variety distinct cuts
    const preferredCuts = ['tomahawk', 'beef-ribs', 'beef-2', 'mut-1', 'prk-1', 'mut-2', 'chk-5', 'beef-1', 'mut-3', 'beef-3'];
    const candidates = preferredCuts.filter(k => k !== currentId && CUT_DATABASE[k]);
    const selectedKeys = candidates.slice(0, 4);

    // Fallback if needed
    while (selectedKeys.length < 4 && allKeys.length > selectedKeys.length) {
      const nextKey = allKeys.find(k => !selectedKeys.includes(k));
      if (nextKey) selectedKeys.push(nextKey);
      else break;
    }

    const getCutTitleLines = (c) => {
      if (c.titleLine1 && c.titleLine2) return { l1: c.titleLine1, l2: c.titleLine2 };
      const titleMap = {
        'beef-1': { l1: '28-Day Dry-Aged', l2: 'Prime Ribeye' },
        'beef-2': { l1: 'Japanese Wagyu A5', l2: 'Striploin Steak' },
        'beef-3': { l1: 'Prime Porterhouse', l2: 'T-Bone Steak' },
        'beef-4': { l1: 'Center-Cut Prime', l2: 'Filet Mignon' },
        'beef-5': { l1: 'Whole Texas Smoker', l2: 'Packer Brisket' },
        'tomahawk': { l1: 'Dry-Aged Prime', l2: 'Tomahawk Ribeye' },
        'beef-ribs': { l1: 'Prime Dinosaur', l2: 'Beef Short Ribs' },
        'chk-1': { l1: 'Free-Range Whole', l2: 'Roaster Chicken' },
        'chk-2': { l1: 'Artisan Boneless', l2: 'Chicken Breasts' },
        'chk-3': { l1: 'Farm-Fresh Bone-In', l2: 'Chicken Thighs' },
        'chk-4': { l1: 'Crispy Fresh Party', l2: 'Chicken Wings' },
        'chk-5': { l1: 'Herb-Marinated', l2: 'Spatchcock Chicken' },
        'mut-1': { l1: 'French-Trimmed', l2: 'Rack of Lamb' },
        'mut-2': { l1: 'Slow-Braised Prime', l2: 'Lamb Shanks' },
        'mut-3': { l1: 'Bone-In Heritage', l2: 'Mutton Curry Cut' },
        'mut-4': { l1: 'Artisan Tender', l2: 'Lamb Loin Chops' },
        'mut-5': { l1: 'Bone-In Whole Leg', l2: 'Of Mutton Roast' },
        'prk-1': { l1: 'Kurobuta Heritage', l2: 'Thick Pork Chops' },
        'prk-2': { l1: 'Smoked Duroc Pork', l2: 'St. Louis Ribs' },
        'prk-3': { l1: 'Artisan Heritage', l2: 'Pork Tenderloin' },
        'prk-4': { l1: 'Crispy Crackling', l2: 'Pork Belly Slab' },
        'prk-5': { l1: 'Artisan Handcrafted', l2: 'Butcher Sausages' },
        'box-family': { l1: 'Family Weekly', l2: 'Pasture Meat Box' },
        'box-pitmaster': { l1: 'The Pitmaster BBQ', l2: 'Smokehouse Crate' },
        'box-steakhouse': { l1: 'Steakhouse Dry-Aged', l2: 'Connoisseur Box' },
        'box-banquet': { l1: 'Banquet & Dining', l2: 'Master Chef Crate' },
        'box-grillmaster': { l1: "The Grill Master's", l2: 'Reserve BBQ Box' },
        'box-farmhouse': { l1: 'Heritage Farmhouse', l2: 'Feast Harvest Crate' }
      };
      if (titleMap[c.id]) return titleMap[c.id];
      const words = (c.shortName || c.name || '').split(' ');
      if (words.length <= 2) return { l1: words[0] || '', l2: words[1] || '&nbsp;' };
      const mid = Math.ceil(words.length / 2);
      return { l1: words.slice(0, mid).join(' '), l2: words.slice(mid).join(' ') };
    };

    companionGrid.innerHTML = selectedKeys.map(key => {
      const cut = CUT_DATABASE[key];
      const titles = getCutTitleLines(cut);
      return `
        <div class="companion-card bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col group" data-id="${cut.id}">
          <a href="product-details.html?id=${cut.id}" class="h-48 overflow-hidden bg-stone-100 dark:bg-zinc-800 block cursor-pointer" data-id="${cut.id}">
            <img src="${cut.image}" alt="${cut.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy">
          </a>
          <div class="p-5 flex-grow flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-bold text-red-700 dark:text-red-400 uppercase">${cut.categoryLabel}</span>
              <a href="product-details.html?id=${cut.id}" class="text-decoration-none block mt-1 mb-2" data-id="${cut.id}">
                <h3 class="meat-card-title font-heading font-bold text-base text-stone-900 dark:text-stone-100 group-hover:text-red-700 transition leading-snug">
                  <span class="block leading-tight">${titles.l1}</span>
                  <span class="block leading-tight">${titles.l2}</span>
                </h3>
              </a>
              <p class="meat-card-desc text-xs text-stone-500 dark:text-stone-400 mb-3">
                ${cut.description}
              </p>
            </div>
            <div class="meat-card-footer flex items-center justify-between pt-3 border-t border-stone-100 dark:border-zinc-800">
              <span class="font-heading font-extrabold text-red-800 dark:text-red-400 text-sm">
                $${cut.price.toFixed(2)} <span class="text-[10px] text-stone-500 font-normal">/ ${cut.unit.split(' ')[0]}</span>
              </span>
              <a href="product-details.html?id=${cut.id}" class="p-2 rounded-lg bg-stone-100 dark:bg-zinc-800 text-stone-700 dark:text-stone-300 hover:bg-red-700 hover:text-white transition flex items-center justify-center" aria-label="Explore ${cut.name}" data-id="${cut.id}">
                <i class="bi bi-arrow-right rtl-flip"></i>
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach click listeners to smoothly transition when on the same page
    companionGrid.querySelectorAll('a[data-id]').forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('data-id');
        if (targetId) {
          e.preventDefault();
          history.pushState({ id: targetId }, '', `product-details.html?id=${targetId}`);
          const targetProduct = getProduct(targetId);
          renderProductDetails(targetProduct);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });
  }

  // Handle browser back/forward buttons
  window.addEventListener('popstate', (e) => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || (e.state && e.state.id) || 'beef-3';
    renderProductDetails(getProduct(id));
  });

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const initialId = params.get('id') || 'beef-3';
    const initialProduct = getProduct(initialId);
    renderProductDetails(initialProduct);
  });

  // Expose global controller
  window.ProductDetailController = {
    loadProduct: (id) => {
      const p = getProduct(id);
      renderProductDetails(p);
    },
    getCut: getProduct
  };
})();
