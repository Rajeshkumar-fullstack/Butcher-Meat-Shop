// ==========================================================================
// Comprehensive Butcher Articles Store - Prime & Cut Artisan Butchery
// ==========================================================================

const BUTCHER_ARTICLES = {
  'reverse-searing-101': {
    id: 'reverse-searing-101',
    title: 'Reverse Searing 101: Edge-to-Edge Pink Medium Rare',
    shortTitle: 'Reverse Searing 101',
    category: 'Searing & BBQ',
    categoryColor: 'text-amber-500',
    badge: '<i class="bi bi-fire text-amber-500"></i> Searing &amp; BBQ &bull; Masterclass Edition',
    date: 'May 18, 2026',
    author: 'Marco Rossi, Head Butcher',
    readTime: '6 Min Read',
    comments: '18 Comments',
    heroImage: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=1200&q=80',
    heroAlt: 'Reverse Sear Skillet Steak',
    heroCaption: 'Reverse-seared USDA Prime bone-in ribeye basted with garlic, fresh rosemary, and foaming browned butter in seasoned cast iron.',
    batchTag: 'Cast Iron Skillet &bull; Method 01',
    tags: ['ReverseSear', 'CastIron', 'SteakScience', 'MediumRare'],
    relatedIds: ['dry-aging-science', 'beef-rib-anatomy', 'cold-chain-storage'],
    featuredProduct: {
      id: 'tomahawk-1',
      name: 'Bone-In Prime Tomahawk Ribeye',
      price: 42.99,
      unit: 'lb',
      category: 'Prime Beef',
      tag: 'USDA Prime',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
      desc: 'Substantial marbling, thick 2-inch hand-cut bone-in rib section, aged for nutty richness and perfect for two-zone reverse searing.'
    },
    contentHtml: `
      <p class="text-lg font-medium text-stone-900 dark:text-stone-100 leading-relaxed">
        If you have ever sliced open a thick, expensive dry-aged cowboy ribeye only to find a quarter-inch band of tough, grey meat surrounding a small bullseye of pink in the center, you have been victimized by traditional high-heat pan searing. The reverse sear is the single greatest culinary advancement for thick-cut steaks in modern butchery.
      </p>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        1. The Thermodynamics of the Grey Band
      </h2>
      <p>
        Traditional steak cooking instructs you to sear first on screaming high heat to "lock in juices" &mdash; a debunked 19th-century myth coined by German chemist Justus von Liebig. Searing does not seal moisture; it expels it. When raw cold steak meat hits a 500&deg;F surface, thermal energy conducts inward violently. By the time heat crawls into the core, the outer layers have overcooked to 165&deg;F, destroying tenderness enzymes and squeezing moisture into the skillet.
      </p>

      <!-- Quote Callout Box -->
      <div class="p-6 sm:p-8 rounded-2xl bg-amber-900/10 dark:bg-amber-950/30 border-l-4 border-amber-500 my-8">
        <i class="bi bi-quote text-3xl text-amber-500 block mb-2"></i>
        <p class="font-heading font-bold text-lg sm:text-xl text-stone-900 dark:text-stone-100 leading-snug">
          "Low and slow in the oven gently brings muscle fibers to temperature without tightening them. When you finish with a 45-second screaming sear, you achieve a paper-thin lacquer crust with 98% edge-to-edge ruby pink."
        </p>
        <span class="text-xs uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold block mt-3">&mdash; Marco Rossi, Lead Artisan Cutter</span>
      </div>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        2. The Step-by-Step Two-Zone Thermal Protocol
      </h2>
      <p>
        To execute the reverse sear flawlessly, you need three indispensable pieces of hardware: a wire baking rack set over a sheet pan, an accurate instant-read digital thermometer, and a heavy 12-inch cast-iron skillet.
      </p>
      <ul class="space-y-3 pl-4 border-s-2 border-amber-400 dark:border-amber-600 my-4 text-sm">
        <li>
          <strong>Dry Brining (12–24 Hours Prior):</strong> Generously coat steak with kosher sea salt (approx. 1% by meat weight). Place uncovered on a wire rack in your refrigerator. Salt draws moisture, dissolves, and pulls back deep into muscle cells while the surface air-dries to parchment dryness.
        </li>
        <li>
          <strong>Low Oven Convection (225&deg;F / 105&deg;C):</strong> Place the cold steak on the wire rack in the center of your oven. Roast slowly until the internal thermal core registers exactly 115&deg;F for medium-rare (or 110&deg;F for rare). This typically takes 40–55 minutes depending on thickness.
        </li>
        <li>
          <strong>The Flash Sear (60–90 Seconds Total):</strong> Heat heavy cast iron with high-smoke-point beef tallow or avocado oil until lightly smoking. Drop steak and sear 45 seconds per side. Toss in crushed garlic, thyme sprigs, and cultured butter for the final 20 seconds, spooning frothing butter across the crust.
        </li>
      </ul>

      <!-- Thermal Matrix Table -->
      <div class="my-10 p-6 rounded-2xl bg-stone-100 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800">
        <h3 class="font-heading font-bold text-lg text-stone-900 dark:text-stone-100 mb-4">Target Core Temperatures for Reverse Sear</h3>
        <div class="overflow-x-auto">
          <table class="table table-bordered text-xs text-stone-700 dark:text-stone-300 mb-0">
            <thead class="bg-stone-200 dark:bg-zinc-800">
              <tr>
                <th>Doneness Level</th>
                <th>Oven Pull Temp</th>
                <th>Final Rested Core Temp</th>
                <th>Center Color</th>
                <th>Recommended Cuts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-bold">Rare</td>
                <td>105&deg;F &ndash; 110&deg;F</td>
                <td>120&deg;F &ndash; 125&deg;F</td>
                <td>Cool deep crimson red</td>
                <td>Filet Mignon, Chateaubriand</td>
              </tr>
              <tr class="bg-amber-800/10 font-bold text-amber-700 dark:text-amber-400">
                <td>Medium-Rare (Butcher Choice)</td>
                <td>115&deg;F &ndash; 118&deg;F</td>
                <td>130&deg;F &ndash; 135&deg;F</td>
                <td>Warm edge-to-edge pink</td>
                <td>Bone-in Ribeye, Tomahawk, Strip</td>
              </tr>
              <tr>
                <td class="font-bold">Medium</td>
                <td>125&deg;F &ndash; 128&deg;F</td>
                <td>140&deg;F &ndash; 145&deg;F</td>
                <td>Warm pink center</td>
                <td>Picanha, Tri-Tip, Porterhouse</td>
              </tr>
              <tr>
                <td class="font-bold">Medium-Well</td>
                <td>135&deg;F &ndash; 138&deg;F</td>
                <td>150&deg;F &ndash; 155&deg;F</td>
                <td>Slight hint of pink</td>
                <td>High-fat Chuck Eye, Skirt</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        3. Why Resting is Actually Optional
      </h2>
      <p>
        With traditional searing, resting for 10–15 minutes is mandatory because intense surface heat forces liquid toward the cooler center. In contrast, because the reverse sear cooks the steak with gentle, uniform warmth over 45 minutes, moisture stays evenly distributed throughout the entire cut. Slicing immediately after the flash sear yields juicy results without pooling juices on your cutting board.
      </p>
    `
  },

  'beef-rib-anatomy': {
    id: 'beef-rib-anatomy',
    title: 'Decoding Beef Rib Anatomy: Back Ribs vs Short Ribs',
    shortTitle: 'Decoding Beef Rib Anatomy',
    category: 'Cut Guides',
    categoryColor: 'text-red-700',
    badge: '<i class="bi bi-diagram-3 text-red-700"></i> Cut Guides &bull; Master Butcher Breakdown',
    date: 'May 12, 2026',
    author: 'Marco Rossi, Head Butcher',
    readTime: '7 Min Read',
    comments: '9 Comments',
    heroImage: 'assets/images/Decoding Beef Rib.jpg',
    heroImagePosition: 'center 45%',
    heroAlt: 'Decoding Beef Rib Anatomy: Back Ribs vs Short Ribs',
    heroCaption: 'Plate short ribs vs curved back ribs: bone structure, intercostal muscle, and marbling profiles compared.',
    batchTag: 'Carcass Spec &bull; Primal Rib Subprimal',
    tags: ['BeefRibs', 'CutGuides', 'ShortRibs', 'Smokehouse', 'ButcherCraft'],
    relatedIds: ['reverse-searing-101', 'dry-aging-science', 'cold-chain-storage'],
    featuredProduct: {
      id: 'beef-ribs',
      name: 'Prime Dinosaur Beef Plate Short Ribs',
      price: 38.50,
      unit: '1.2kg (3-Bone)',
      category: 'Prime Beef',
      tag: 'Pitmaster Cut',
      image: 'assets/images/Decoding Beef Rib.jpg',
      desc: 'Massive 3-bone plate section (Bones 6, 7, 8) with deep intramuscular fat that renders into silky gelatin during smoking.'
    },
    contentHtml: `
      <p class="text-lg font-medium text-stone-900 dark:text-stone-100 leading-relaxed">
        Nothing sparks more confusion across butcher counters than beef ribs. Customers ask for "dinosaur ribs" but walk away with curved back bones stripped of meat, or purchase flanken ribs expecting a whole Texas barbecue slab. Understanding where ribs originate on the steer is the key to mastering your smokehouse craft.
      </p>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        1. Back Ribs: The Leftovers of Prime Ribeye
      </h2>
      <p>
        Beef back ribs are harvested directly from the primal rib subprimal (ribs 6 through 12). Because this is the exact same location where high-dollar bone-in Ribeye roasts and Tomahawks are cut, butchers trim as close to the bone as humanly possible. 
      </p>
      <p>
        Consequently, back ribs have almost no meat sitting on top of the bone. Instead, all their prized, deeply flavorful meat is nestled <em>between</em> the bones (intercostal muscle). While delicious when glazed and smoked, they will never yield giant, juicy bites like plate ribs.
      </p>

      <!-- Quote Callout Box -->
      <div class="p-6 sm:p-8 rounded-2xl bg-red-900/10 dark:bg-red-950/30 border-l-4 border-red-700 my-8">
        <i class="bi bi-quote text-3xl text-red-700 block mb-2"></i>
        <p class="font-heading font-bold text-lg sm:text-xl text-stone-900 dark:text-stone-100 leading-snug">
          "If the bone curves like a crescent and the meat is only between the slats, you hold back ribs. If the bone is flat like a 2x4 with two inches of marbled beef sitting proud on top, you hold the king: Plate Short Ribs."
        </p>
        <span class="text-xs uppercase tracking-wider text-red-700 dark:text-red-400 font-bold block mt-3">&mdash; Marco Rossi, Lead Artisan Cutter</span>
      </div>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        2. Short Ribs: Plate (123A) vs Chuck (130)
      </h2>
      <p>
        Short ribs do not mean the ribs are short in length &mdash; it means they originate from the lower ventral flank of the steer, away from the tender dorsal loins. There are two distinct sections:
      </p>
      <ul class="space-y-3 pl-4 border-s-2 border-red-700 dark:border-red-500 my-4 text-sm">
        <li>
          <strong>Plate Short Ribs (NAMP 123A):</strong> Cut from ribs 6, 7, and 8 of the beef plate belly. These are the fabled 3-bone "dinosaur ribs" of Central Texas barbecue. Dense with gelatin-rich connective tissue and heavy intramuscular marbling, they require 8–10 hours of offset smoking to render like butter.
        </li>
        <li>
          <strong>Chuck Short Ribs (NAMP 130):</strong> Cut from ribs 2 through 5 in the chuck shoulder. These usually come in 4-bone slabs. They have slightly more meat grain texture and are universally favored for Korean Kalbi (flanken cross-cut) and French red wine braising.
        </li>
      </ul>

      <!-- Comparison Spec Table -->
      <div class="my-10 p-6 rounded-2xl bg-stone-100 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800">
        <h3 class="font-heading font-bold text-lg text-stone-900 dark:text-stone-100 mb-4">Butcher Rib Cut Specification Matrix</h3>
        <div class="overflow-x-auto">
          <table class="table table-bordered text-xs text-stone-700 dark:text-stone-300 mb-0">
            <thead class="bg-stone-200 dark:bg-zinc-800">
              <tr>
                <th>Rib Cut Spec</th>
                <th>Carcass Location</th>
                <th>Bone Shape</th>
                <th>Meat-to-Bone Ratio</th>
                <th>Optimal Preparation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-bold">Beef Back Ribs</td>
                <td>Dorsal Ribeye (Ribs 6&ndash;12)</td>
                <td>Curved, thin profile</td>
                <td>Low (Intercostal only)</td>
                <td>Fast Smoke (3–4 hrs) &bull; Glazed BBQ</td>
              </tr>
              <tr class="bg-red-800/10 font-bold text-red-700 dark:text-red-400">
                <td>Plate Short Ribs (123A)</td>
                <td>Lower Navel Plate (Ribs 6&ndash;8)</td>
                <td>Wide, flat, 3 large bones</td>
                <td>High (1.5" to 2.5" thick cap)</td>
                <td>Low &amp; Slow Smoke (250&deg;F, 9 hrs)</td>
              </tr>
              <tr>
                <td class="font-bold">Chuck Short Ribs (130)</td>
                <td>Shoulder Chuck (Ribs 2&ndash;5)</td>
                <td>Slightly narrower, 4 bones</td>
                <td>Medium-High</td>
                <td>Braising, Kalbi cross-cut grilling</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        3. Silver Skin Removal: The Golden Rule
      </h2>
      <p>
        The underside of all beef ribs features a tough, fibrous membrane known as the peritoneum or silver skin. Unlike pork ribs where peeling the membrane is standard practice, leaving the membrane intact on beef plate ribs is essential: without it, the sheer weight of the heavy cooked beef will fall off the bone straight into your smoker firebox.
      </p>
    `
  },

  'cold-chain-storage': {
    id: 'cold-chain-storage',
    title: 'Active Cold Chain at Home: Meat Storage Rules & Best Practices',
    shortTitle: 'Active Cold Chain: Meat Storage Rules',
    category: 'Cold Storage',
    categoryColor: 'text-emerald-600',
    badge: '<i class="bi bi-thermometer-snow text-emerald-600"></i> Cold Storage &bull; Food Safety &amp; Freshness',
    date: 'May 04, 2026',
    author: 'Marco Rossi, Head Butcher',
    readTime: '5 Min Read',
    comments: '12 Comments',
    heroImage: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1200&q=80',
    heroAlt: 'Cold Chain Insulated Packaging',
    heroCaption: 'Refrigerated unbroken chill cycle, oxygen-barrier vacuum sealing, and temperature monitoring at 0°C to 4°C.',
    batchTag: '0°C - 4°C Protocol &bull; Safety Verified',
    tags: ['ColdChain', 'FoodSafety', 'DryAging', 'HomeButcher', 'Packaging'],
    relatedIds: ['reverse-searing-101', 'beef-rib-anatomy', 'dry-aging-science'],
    featuredProduct: {
      id: 'mut-2',
      name: 'Slow-Braised Marrow Lamb Shanks',
      price: 29.50,
      unit: '1kg (2 pcs)',
      category: 'Spring Mutton',
      tag: 'Cold-Chain Vacuum Sealed',
      image: 'assets/images/mutton/lamb-shanks.jpg',
      desc: 'Hind-shank cuts packed with rich marrow, sub-zero vacuum sealed to protect fragile enzymatic cell integrity.'
    },
    contentHtml: `
      <p class="text-lg font-medium text-stone-900 dark:text-stone-100 leading-relaxed">
        The journey of an artisan pasture-raised steak does not conclude when our butchers wrap it in peach treated paper. In fact, the most vulnerable leg of the cold chain is the 45 minutes between leaving our walk-in locker and landing in your home refrigerator. Preserving tenderness, blooming color, and food safety requires strict thermal vigilance.
      </p>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        1. The Danger Zone &amp; Bacterial Doubling Times
      </h2>
      <p>
        Bacterial pathogens such as <em>Salmonella</em>, <em>Listeria</em>, and <em>Staphylococcus aureus</em> multiply exponentially between 40&deg;F and 140&deg;F (4&deg;C to 60&deg;C). At 72&deg;F room temperature, a single bacterium on fresh poultry can reproduce into over two million cells in just seven hours. 
      </p>
      <p>
        At Prime &amp; Cut, we enforce an unbroken holding window between 32&deg;F and 36&deg;F (0&deg;C to 2.2&deg;C) from carcass breakdown to dispatch. Replicating this discipline in your kitchen refrigerator ensures your meat remains as pristine as the hour it was carved.
      </p>

      <!-- Quote Callout Box -->
      <div class="p-6 sm:p-8 rounded-2xl bg-emerald-900/10 dark:bg-emerald-950/30 border-l-4 border-emerald-600 my-8">
        <i class="bi bi-quote text-3xl text-emerald-600 block mb-2"></i>
        <p class="font-heading font-bold text-lg sm:text-xl text-stone-900 dark:text-stone-100 leading-snug">
          "Never store fresh raw meats in your refrigerator door or top shelf. The door fluctuates by up to 10 degrees every time it opens. Always place cuts on the bottom back shelf over a stainless drip tray."
        </p>
        <span class="text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-bold block mt-3">&mdash; Marco Rossi, Lead Artisan Cutter</span>
      </div>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        2. Butcher Paper vs. Vacuum Barrier Film
      </h2>
      <p>
        How you package meat drastically determines enzymatic aging versus bacterial spoilage:
      </p>
      <ul class="space-y-3 pl-4 border-s-2 border-emerald-500 dark:border-emerald-600 my-4 text-sm">
        <li>
          <strong>Peach Butcher Paper (1–3 Days):</strong> High-density poly-coated kraft paper breathes just enough to let surface moisture evaporate without allowing the meat to desiccate. It keeps the outer bloom bright red and crust-ready for cooking within 72 hours.
        </li>
        <li>
          <strong>High-Barrier Vacuum Pouches (14–21 Days):</strong> 7-layer oxygen barrier pouches deprive aerobic spoilage organisms of air. The meat will temporarily turn a deep purple-burgundy due to deoxygenated myoglobin; once opened and exposed to room air, it naturally blooms back to scarlet red within 15 minutes.
        </li>
      </ul>

      <!-- Storage Shelf Life Table -->
      <div class="my-10 p-6 rounded-2xl bg-stone-100 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800">
        <h3 class="font-heading font-bold text-lg text-stone-900 dark:text-stone-100 mb-4">Recommended Fresh Meat Holding Windows</h3>
        <div class="overflow-x-auto">
          <table class="table table-bordered text-xs text-stone-700 dark:text-stone-300 mb-0">
            <thead class="bg-stone-200 dark:bg-zinc-800">
              <tr>
                <th>Meat Category</th>
                <th>Butcher Paper (34&deg;F–36&deg;F)</th>
                <th>Vacuum Sealed (34&deg;F–36&deg;F)</th>
                <th>Flash Frozen (-4&deg;F)</th>
                <th>Defrost Protocol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-bold">Ground Beef / Lamb</td>
                <td>1 &ndash; 2 Days</td>
                <td>7 &ndash; 10 Days</td>
                <td>4 &ndash; 6 Months</td>
                <td>Overnight in fridge on plate</td>
              </tr>
              <tr class="bg-emerald-800/10 font-bold text-emerald-700 dark:text-emerald-400">
                <td>Whole Primal Steaks</td>
                <td>3 &ndash; 5 Days</td>
                <td>21 &ndash; 28 Days</td>
                <td>12 Months</td>
                <td>24-hour slow chill thaw</td>
              </tr>
              <tr>
                <td class="font-bold">Pasture Poultry</td>
                <td>1 &ndash; 2 Days</td>
                <td>5 &ndash; 7 Days</td>
                <td>6 Months</td>
                <td>Never thaw at room temperature</td>
              </tr>
              <tr>
                <td class="font-bold">Heritage Berkshire Pork</td>
                <td>2 &ndash; 3 Days</td>
                <td>14 &ndash; 18 Days</td>
                <td>8 Months</td>
                <td>Slow refrigeration thaw</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        3. The Ice-Water Fast Thawing Technique
      </h2>
      <p>
        If you forget to pull frozen vacuum-sealed steaks the day before dinner, never use the microwave or warm tap water. Warm water cooks the delicate exterior proteins while the interior remains rock hard. Instead, submerge the sealed vacuum pack in a bowl of cold tap water with ice cubes. Water transfers heat 25 times faster than air, thoroughly thawing a 1.5-inch ribeye in 35 minutes flat without raising surface temperature into the danger zone.
      </p>
    `
  },

  'dry-aging-science': {
    id: 'dry-aging-science',
    title: 'The Science of 35 Days: Why Himalayan Pink Salt Changes Meat Science Forever',
    shortTitle: 'The Science of 35 Days',
    category: 'Dry Aging',
    categoryColor: 'text-red-700',
    badge: '<i class="bi bi-snow text-cyan-600"></i> Dry Aging &bull; Masterclass Edition',
    date: 'May 28, 2026',
    author: 'Marco Rossi, Head Butcher',
    readTime: '8 Min Read',
    comments: '14 Comments',
    heroImage: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=1200&q=80',
    heroAlt: 'Himalayan Salt Dry Aging Chamber Display with Prime Beef Loins',
    heroCaption: 'Prime short loins aging at 1.5°C and 80% relative humidity against Pakistani salt bricks.',
    batchTag: 'Chamber 02 &bull; Batch 841',
    tags: ['DryAging', 'SaltLocker', 'MaillardReaction', 'SteakScience'],
    relatedIds: ['reverse-searing-101', 'beef-rib-anatomy', 'cold-chain-storage'],
    featuredProduct: {
      id: 'beef-1',
      name: '28-Day Dry-Aged Ribeye',
      price: 34.99,
      unit: '500g',
      category: 'Prime Beef',
      tag: 'Dry-Aged 28 Days',
      image: 'assets/images/salt.png',
      desc: 'Hand-selected Angus beef aged on Himalayan pink salt blocks for concentrated savory hazelnut umami and supreme tenderness.'
    },
    contentHtml: `
      <p class="text-lg font-medium text-stone-900 dark:text-stone-100 leading-relaxed">
        Walk into any ordinary grocery counter, and the beef you see is "wet aged" &mdash; sealed in impervious plastic pouches where blood and purged juices pool together. While wet aging preserves sellable water weight, it does nothing for flavor concentration. At Prime &amp; Cut, we take the ancient, deliberate path: bare primal beef hung in Himalayan salt vaults.
      </p>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        1. The Biological Clock of Tenderness
      </h2>
      <p>
        Immediately following slaughter, muscles enter rigor mortis as cellular ATP depletes. Within 48 hours, however, nature activates endogenous intracellular enzymes &mdash; primarily <em>calpains</em> and <em>cathepsins</em>. These biological scissors systematically snip apart the rigid structural proteins that bind muscle fibers together.
      </p>

      <!-- Quote Callout Box -->
      <div class="p-6 sm:p-8 rounded-2xl bg-red-900/10 dark:bg-red-950/30 border-l-4 border-red-700 my-8">
        <i class="bi bi-quote text-3xl text-red-700 block mb-2"></i>
        <p class="font-heading font-bold text-lg sm:text-xl text-stone-900 dark:text-stone-100 leading-snug">
          "Moisture loss during dry aging is not drying out the steak &mdash; it is evaporating neutral water so that the remaining meat tastes intensely of hazelnut, blue cheese, and roasted butter umami."
        </p>
        <span class="text-xs uppercase tracking-wider text-red-700 dark:text-red-400 font-bold block mt-3">&mdash; Marco Rossi, Lead Artisan Cutter</span>
      </div>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        2. The Pakistani Salt Brick Atmospheric Effect
      </h2>
      <p>
        Why do our aging rooms feature floor-to-ceiling backlit walls carved from mineral-rich Himalayan pink salt? Beyond their breathtaking amber glow, the bricks serve two critical thermodynamic functions:
      </p>
      <ul class="space-y-3 pl-4 border-s-2 border-stone-300 dark:border-zinc-700 my-4 text-sm">
        <li>
          <strong>Natural Hygroscopic Humidity Buffer:</strong> Salt absorbs atmospheric moisture when ambient humidity climbs above 82%, and releases desiccated air when humidity drops below 76%, maintaining a perfectly calibrated microbial sweet spot.
        </li>
        <li>
          <strong>Negative Ion Air Sanitation:</strong> Trace minerals (magnesium, potassium, calcium) combined with salt aerosol inhibit harmful pathogenic bacteria (such as Pseudomonas) while cultivating beneficial surface molds like <em>Thamnidium</em>.
        </li>
      </ul>

      <!-- Infographic Comparison Table -->
      <div class="my-10 p-6 rounded-2xl bg-stone-100 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800">
        <h3 class="font-heading font-bold text-lg text-stone-900 dark:text-stone-100 mb-4">Aging Duration Comparison</h3>
        <div class="overflow-x-auto">
          <table class="table table-bordered text-xs text-stone-700 dark:text-stone-300 mb-0">
            <thead class="bg-stone-200 dark:bg-zinc-800">
              <tr>
                <th>Aging Method</th>
                <th>Water Loss %</th>
                <th>Tenderness Rating</th>
                <th>Aroma Notes</th>
                <th>Ideal Cooking Method</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-bold">Fresh Cut (Day 3)</td>
                <td>0%</td>
                <td>Moderate (6/10)</td>
                <td>Metallic, mild beef</td>
                <td>Braising, Stews</td>
              </tr>
              <tr>
                <td class="font-bold">Commercial Wet Aged (14d)</td>
                <td>Purge in Bag (5%)</td>
                <td>Good (7.5/10)</td>
                <td>Slightly sour, clean beef</td>
                <td>Fast Grill, Skillet</td>
              </tr>
              <tr class="bg-red-800/10 font-bold text-red-700 dark:text-red-400">
                <td>Prime Salt Dry Aged (35d)</td>
                <td>Evaporated 15–18%</td>
                <td>Supreme (9.5/10)</td>
                <td>Hazelnut, browned butter</td>
                <td>Reverse Sear Cast Iron</td>
              </tr>
              <tr>
                <td class="font-bold">Connoisseur Vault (60d)</td>
                <td>Evaporated 24%</td>
                <td>Buttery (10/10)</td>
                <td>Gorgonzola, rich truffle</td>
                <td>Bistecca Fiorentina</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        3. Searing Science: Why Dry Steaks Brown Faster
      </h2>
      <p>
        The golden-brown crust of a pan-seared steak is produced by the <strong>Maillard reaction</strong>, which occurs at temperatures between 280&deg;F and 330&deg;F (140&deg;C–165&deg;C). When a wet supermarket steak hits a hot pan, all the thermal energy is wasted boiling surface water off at 212&deg;F (100&deg;C), resulting in grey, steamed meat.
      </p>
      <p>
        Because dry-aged steaks have spent 35 days releasing surface moisture, their exterior fat and protein matrix caramelize within 45 seconds of contact with hot cast iron, locking in crimson juices before the center can overcook.
      </p>
    `
  },

  'hardwood-matrix': {
    id: 'hardwood-matrix',
    title: 'The Hardwood Matrix: Post Oak, Hickory & Cherry Wood Smoking',
    shortTitle: 'The Hardwood Matrix',
    category: 'Searing & BBQ',
    categoryColor: 'text-amber-500',
    badge: '<i class="bi bi-fire text-amber-500"></i> Smokehouse Science &bull; Wood Profiling',
    date: 'April 29, 2026',
    author: 'Marco Rossi, Head Butcher',
    readTime: '9 Min Read',
    comments: '22 Comments',
    heroImage: 'assets/images/blog/hardwood-smoked-brisket.jpg',
    heroImagePosition: 'center 50%',
    heroAlt: 'Hardwood Smoked Brisket',
    heroCaption: 'Split Texas post oak, shagbark hickory, and sweet cherry logs seasoned for balanced, translucent thin blue smoke.',
    batchTag: 'Seasoned 14 Months &bull; Texas Post Oak',
    tags: ['Smokehouse', 'Hardwood', 'Brisket', 'BBQ', 'OffsetSmoker'],
    relatedIds: ['reverse-searing-101', 'beef-rib-anatomy', 'dry-aging-science'],
    featuredProduct: {
      id: 'beef-5',
      name: 'Whole Texas Smoker Brisket',
      price: 68.00,
      unit: '2.5kg',
      category: 'Prime Beef',
      tag: 'Pitmaster Choice',
      image: 'assets/images/blog/hardwood-smoked-brisket.jpg',
      desc: 'Packer cut brisket with intact 1/4-inch fat cap, curated specifically for 14-hour post oak and hickory smoking.'
    },
    contentHtml: `
      <p class="text-lg font-medium text-stone-900 dark:text-stone-100 leading-relaxed">
        Great barbecue is not seasoning or sauce &mdash; it is the combustion chemistry between dry split timber and animal fat. Throwing random wood chunks into a fire produces acrid, white creosote smoke that numbs the tongue. True pitmasters treat hardwood like vintage wine: balancing tannin, density, and combustion temperatures.
      </p>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        1. Clean Blue Smoke vs. White Billowing Creosote
      </h2>
      <p>
        When wood smolders without sufficient oxygen, incomplete combustion forms lignin phenols that condense into bitter creosote. Proper smoke should be almost transparent with a faint translucent blue shimmer &mdash; known throughout Texas as "thin blue smoke." This occurs when the firebox drafts clean air at 650&deg;F to 750&deg;F.
      </p>

      <!-- Quote Callout Box -->
      <div class="p-6 sm:p-8 rounded-2xl bg-amber-900/10 dark:bg-amber-950/30 border-l-4 border-amber-500 my-8">
        <i class="bi bi-quote text-3xl text-amber-500 block mb-2"></i>
        <p class="font-heading font-bold text-lg sm:text-xl text-stone-900 dark:text-stone-100 leading-snug">
          "Post oak is the neutral benchmark that lets 40-day aged beef shine without masking it. Hickory is bold and punchy. Cherry provides the mahogany bark you lust after on social feeds."
        </p>
        <span class="text-xs uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold block mt-3">&mdash; Marco Rossi, Lead Artisan Cutter</span>
      </div>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        2. Sourcing &amp; Seasoning Specifications
      </h2>
      <p>
        Green freshly cut timber contains up to 50% moisture, which chills your coal bed and generates bitter steam. Our smokehouse logs are seasoned between 12 and 16 months under ventilated awnings until internal equilibrium moisture rests between 15% and 18%.
      </p>

      <!-- Wood Pairing Matrix Table -->
      <div class="my-10 p-6 rounded-2xl bg-stone-100 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800">
        <h3 class="font-heading font-bold text-lg text-stone-900 dark:text-stone-100 mb-4">Hardwood Smoke Intensity &amp; Cut Pairing Matrix</h3>
        <div class="overflow-x-auto">
          <table class="table table-bordered text-xs text-stone-700 dark:text-stone-300 mb-0">
            <thead class="bg-stone-200 dark:bg-zinc-800">
              <tr>
                <th>Hardwood Species</th>
                <th>Smoke Profile</th>
                <th>Optimal Burn Temp</th>
                <th>Aroma &amp; Bark Color</th>
                <th>Ideal Meat Pairing</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-amber-800/10 font-bold text-amber-700 dark:text-amber-400">
                <td>Texas Post Oak</td>
                <td>Medium &bull; Clean &amp; Smooth</td>
                <td>650&deg;F &ndash; 720&deg;F</td>
                <td>Nutty, mild vanilla &bull; Jet Black Bark</td>
                <td>Full Packer Brisket, Beef Plate Ribs</td>
              </tr>
              <tr>
                <td class="font-bold">Shagbark Hickory</td>
                <td>Strong &bull; Robust &amp; Earthy</td>
                <td>700&deg;F &ndash; 780&deg;F</td>
                <td>Sweet bacon notes &bull; Dark Mahogany</td>
                <td>Pork Butt, Smoked Bacon, Spare Ribs</td>
              </tr>
              <tr>
                <td class="font-bold">Black Cherry</td>
                <td>Mild &bull; Fruity &amp; Sweet</td>
                <td>580&deg;F &ndash; 640&deg;F</td>
                <td>Floral sweet &bull; Vivid Crimson Ruby</td>
                <td>Duck, Free-Range Chicken, Lamb Rack</td>
              </tr>
              <tr>
                <td class="font-bold">Southern Pecan</td>
                <td>Medium &bull; Buttery &amp; Rich</td>
                <td>620&deg;F &ndash; 680&deg;F</td>
                <td>Praline nuttiness &bull; Golden Amber</td>
                <td>Tomahawk Steaks, Tri-Tip, Pork Chops</td>
              </tr>
              <tr>
                <td class="font-bold">Texas Mesquite</td>
                <td>Extreme &bull; Intense &amp; Sharp</td>
                <td>750&deg;F &ndash; 850&deg;F</td>
                <td>Pungent, oily resin &bull; Ash Grey / Black</td>
                <td>Fast Skirt Steak, Fajitas, Flash Grilling only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        3. Airflow Drafting &amp; Firebox Chemistry
      </h2>
      <p>
        The most common rookie mistake is choking the intake damper to lower cooking chamber temperature. Starving fire of oxygen causes unburnt hydrocarbons to deposit as bitter black soot across your meat. Always keep your exhaust stack wide open and regulate pit temperature exclusively through wood split size and coal bed management.
      </p>
    `
  },

  'marbling-demystified': {
    id: 'marbling-demystified',
    title: 'Intramuscular Marbling Demystified: BMS 3 to 12',
    shortTitle: 'Intramuscular Marbling Demystified',
    category: 'Dry Aging',
    categoryColor: 'text-red-700',
    badge: '<i class="bi bi-patch-check text-amber-500"></i> Quality Grading &bull; Cattle Genetics',
    date: 'April 20, 2026',
    author: 'Marco Rossi, Head Butcher',
    readTime: '6 Min Read',
    comments: '16 Comments',
    heroImage: 'assets/images/blog/wagyu-marbling-steak.jpg',
    heroImagePosition: 'center 50%',
    heroAlt: 'Intramuscular Wagyu Marbling Steak',
    heroCaption: 'Intramuscular flecks of unsaturated oleic acid in high-scoring BMS 9+ American Wagyu strip loin.',
    batchTag: 'Grade BMS 9+ &bull; Ribeye Cross-Section',
    tags: ['Wagyu', 'BMSGrading', 'USDAPrime', 'Marbling', 'Angus'],
    relatedIds: ['dry-aging-science', 'reverse-searing-101', 'beef-rib-anatomy'],
    featuredProduct: {
      id: 'beef-2',
      name: 'Japanese Wagyu A5 Striploin',
      price: 89.50,
      unit: '300g',
      category: 'Prime Beef',
      tag: 'Miyazaki A5 Certified',
      image: 'assets/images/beef/wagyu-a5.jpg',
      desc: 'Exquisite BMS 10+ snowflake marbling with a buttery texture that melts at room temperature. The pinnacle of luxury butchery.'
    },
    contentHtml: `
      <p class="text-lg font-medium text-stone-900 dark:text-stone-100 leading-relaxed">
        Not all fat is created equal. The thick band of fat sitting along the outer rim of your strip steak is subcutaneous fat. While it prevents drying during roasting, intramuscular fat &mdash; the intricate, web-like specks of white laced directly between muscle fibers &mdash; is where all tenderness, juiciness, and butter aroma originate.
      </p>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        1. International Grading Cross-Comparison
      </h2>
      <p>
        The USDA Prime standard requires a minimum intramuscular fat score roughly equivalent to Japanese Beef Marbling Score (BMS) 4 to 5. Genuine Japanese Wagyu (A5) routinely tests at BMS 8 to 12, where unsaturated fatty acids melt at human body temperature (77&deg;F / 25&deg;C).
      </p>

      <!-- Quote Callout Box -->
      <div class="p-6 sm:p-8 rounded-2xl bg-red-900/10 dark:bg-red-950/30 border-l-4 border-red-700 my-8">
        <i class="bi bi-quote text-3xl text-red-700 block mb-2"></i>
        <p class="font-heading font-bold text-lg sm:text-xl text-stone-900 dark:text-stone-100 leading-snug">
          "When you cut into an A5 ribeye, the monounsaturated fats start liquefying from the warmth of your fingertips. You are not eating beef fat; you are eating beef butter."
        </p>
        <span class="text-xs uppercase tracking-wider text-red-700 dark:text-red-400 font-bold block mt-3">&mdash; Marco Rossi, Lead Artisan Cutter</span>
      </div>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        2. Oleic Acid &amp; The Melting Point of Luxury
      </h2>
      <p>
        Commercial corn-finished beef contains high concentrations of stearic and palmitic saturated fats with a firm melting point around 104&deg;F (40&deg;C). Wagyu cattle produce genetics that convert saturated fats into oleic acid &mdash; an omega-9 monounsaturated fatty acid identical to extra virgin olive oil. This is why high-BMS steak coats the palate in a silky, sweet velvet glaze without feeling greasy.
      </p>

      <!-- Marbling Matrix Table -->
      <div class="my-10 p-6 rounded-2xl bg-stone-100 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800">
        <h3 class="font-heading font-bold text-lg text-stone-900 dark:text-stone-100 mb-4">Beef Marbling Score (BMS) Global Standard Matrix</h3>
        <div class="overflow-x-auto">
          <table class="table table-bordered text-xs text-stone-700 dark:text-stone-300 mb-0">
            <thead class="bg-stone-200 dark:bg-zinc-800">
              <tr>
                <th>BMS Score</th>
                <th>USDA Equivalent</th>
                <th>Australian Wagyu</th>
                <th>Intramuscular Fat %</th>
                <th>Culinary Profile</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-bold">BMS 2 &ndash; 3</td>
                <td>USDA Choice</td>
                <td>AUS MB 2&ndash;3</td>
                <td>4% &ndash; 7%</td>
                <td>Lean, firm bite, clean mineral beef flavor</td>
              </tr>
              <tr>
                <td class="font-bold">BMS 4 &ndash; 5</td>
                <td>USDA Prime</td>
                <td>AUS MB 4&ndash;5</td>
                <td>8% &ndash; 12%</td>
                <td>Classic steakhouse tenderness, juicy marbling</td>
              </tr>
              <tr class="bg-red-800/10 font-bold text-red-700 dark:text-red-400">
                <td>BMS 6 &ndash; 8</td>
                <td>Beyond USDA Scale</td>
                <td>AUS MB 7&ndash;8</td>
                <td>15% &ndash; 24%</td>
                <td>Melt-on-the-tongue richness, sweet hazelnut finish</td>
              </tr>
              <tr>
                <td class="font-bold">BMS 9 &ndash; 10</td>
                <td>Japanese A5 Entry</td>
                <td>AUS MB 9+</td>
                <td>25% &ndash; 35%</td>
                <td>Snowflake lattice, fork tender, extreme richness</td>
              </tr>
              <tr>
                <td class="font-bold">BMS 11 &ndash; 12</td>
                <td>Japanese A5 Pinnacle</td>
                <td>Rare Pureblood Wagyu</td>
                <td>36% &ndash; 48%+</td>
                <td>Pure culinary luxury &mdash; best served in 3oz medallions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        3. Pan Technique for High-Marbled Steaks
      </h2>
      <p>
        Never add butter or cooking oil when searing a BMS 7+ Wagyu cut. As soon as the chilled meat meets a dry, medium-hot stainless pan, its own oleic fat renders out within 10 seconds, self-basting the steak in golden liquid beef tallow.
      </p>
    `
  },

  'heritage-pork': {
    id: 'heritage-pork',
    title: 'The Resurgence of Heritage Pork: Why Berkshire Wins',
    shortTitle: 'The Resurgence of Heritage Pork',
    category: 'Cut Guides',
    categoryColor: 'text-red-700',
    badge: '<i class="bi bi-award text-red-700"></i> Heritage Breeds &bull; Pasture Sourcing',
    date: 'April 14, 2026',
    author: 'Marco Rossi, Head Butcher',
    readTime: '5 Min Read',
    comments: '11 Comments',
    heroImage: 'assets/images/blog/berkshire-heritage-pork.jpg',
    heroImagePosition: 'center 50%',
    heroAlt: 'Heritage Berkshire Kurobuta Pork Chops',
    heroCaption: 'Ruby-red muscle pigmentation, natural marbling, and thick creamy backfat on pasture-raised Berkshire Kurobuta chops.',
    batchTag: 'Heritage Kurobuta &bull; Pasture Raised',
    tags: ['HeritagePork', 'Berkshire', 'Kurobuta', 'PastureRaised'],
    relatedIds: ['beef-rib-anatomy', 'cold-chain-storage', 'reverse-searing-101'],
    featuredProduct: {
      id: 'prk-1',
      name: 'Kurobuta Thick-Cut Pork Chops',
      price: 27.50,
      unit: '700g (2 pcs)',
      category: 'Berkshire Pork',
      tag: 'Heritage Kurobuta',
      image: 'assets/images/blog/berkshire-heritage-pork.jpg',
      desc: 'The Wagyu of pork. Intensely marbled ruby-red Berkshire muscle with sweet exterior fat and unprecedented juiciness.'
    },
    contentHtml: `
      <p class="text-lg font-medium text-stone-900 dark:text-stone-100 leading-relaxed">
        In the late 1980s, commercial industrial swine farms bred hogs to be "the other white meat," breeding out all natural intramuscular fat in favor of dry, lean muscle. Heritage Berkshire (Kurobuta) pigs preserve centuries-old genetics that yield ruby-red meat, a thick snowy fat cap, and unprecedented juiciness.
      </p>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        1. Why Berkshire Meat is Actually Dark Red
      </h2>
      <p>
        Berkshire pork boasts a significantly higher pH level than commodity pork. Higher pH means muscle fibers retain their bound moisture throughout pan-searing and roasting. Furthermore, elevated myoglobin levels give the raw chops a vibrant mahogany color that cooks up sweet, tender, and intensely flavorful.
      </p>

      <!-- Quote Callout Box -->
      <div class="p-6 sm:p-8 rounded-2xl bg-red-900/10 dark:bg-red-950/30 border-l-4 border-red-700 my-8">
        <i class="bi bi-quote text-3xl text-red-700 block mb-2"></i>
        <p class="font-heading font-bold text-lg sm:text-xl text-stone-900 dark:text-stone-100 leading-snug">
          "If your pork looks pale white and watery in the butcher case, walk away. Genuine pasture Berkshire should resemble prime beef ribeye: ruby red muscle laced with creamy white fat that crackles like glass."
        </p>
        <span class="text-xs uppercase tracking-wider text-red-700 dark:text-red-400 font-bold block mt-3">&mdash; Marco Rossi, Lead Artisan Cutter</span>
      </div>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        2. Intramuscular pH &amp; Water-Holding Capacity
      </h2>
      <p>
        When factory farm pigs experience transport stress, glycogen rapidly turns into lactic acid, resulting in PSE (Pale, Soft, Exudative) pork that leaches water the instant it hits a hot pan. Berkshire hogs raised on pasture foraging for acorns, wild grasses, and heritage grains maintain a resting pH of 5.8 to 6.2, locking all natural cell moisture inside the chop.
      </p>

      <!-- Comparison Matrix Table -->
      <div class="my-10 p-6 rounded-2xl bg-stone-100 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800">
        <h3 class="font-heading font-bold text-lg text-stone-900 dark:text-stone-100 mb-4">Pasture Berkshire Kurobuta vs Commodity Pork Spec</h3>
        <div class="overflow-x-auto">
          <table class="table table-bordered text-xs text-stone-700 dark:text-stone-300 mb-0">
            <thead class="bg-stone-200 dark:bg-zinc-800">
              <tr>
                <th>Quality Metric</th>
                <th>Heritage Berkshire (Kurobuta)</th>
                <th>Industrial Commercial Pork</th>
                <th>Culinary Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-red-800/10 font-bold text-red-700 dark:text-red-400">
                <td>Muscle Pigmentation</td>
                <td>Deep Ruby Red (Color Score 4&ndash;5)</td>
                <td>Pale Grey-White (Color Score 1&ndash;2)</td>
                <td>Rich iron-rich sweetness, no chalkiness</td>
              </tr>
              <tr>
                <td class="font-bold">Post-Harvest pH</td>
                <td>5.8 &ndash; 6.2 (Stable)</td>
                <td>5.3 &ndash; 5.5 (Acidic PSE)</td>
                <td>Retains 94% moisture during cooking</td>
              </tr>
              <tr>
                <td class="font-bold">Intramuscular Fat</td>
                <td>5.5% &ndash; 7.8%</td>
                <td>1.5% &ndash; 2.2%</td>
                <td>Juicy marbling throughout the entire loin</td>
              </tr>
              <tr>
                <td class="font-bold">Fat Melting Point</td>
                <td>32&deg;C (Silky &amp; Creamy)</td>
                <td>44&deg;F (Waxy &amp; Chewy)</td>
                <td>Crisps into brittle, golden crackling</td>
              </tr>
              <tr>
                <td class="font-bold">Recommended Pull Temp</td>
                <td>145&deg;F (63&deg;C) with 5 min rest</td>
                <td>Often overcooked to 165&deg;F</td>
                <td>Delicate blush-pink center, ultra tender</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        3. The 145&deg;F Cooking Revolution
      </h2>
      <p>
        In 2011, the USDA officially reduced its recommended internal cooking temperature for whole pork cuts from 160&deg;F to 145&deg;F (63&deg;C) with a 3-minute rest. At 145&deg;F, Berkshire pork retains a delicate blush-pink center and maximum natural sweetness, completely eliminating the dry, leather texture of decades past.
      </p>
    `
  },
  'spatchcock-poultry-guide': {
    id: 'spatchcock-poultry-guide',
    title: 'The Anatomy of Poultry: Spatchcocking & Herb Butter Roasting',
    shortTitle: 'Spatchcock Poultry Guide',
    category: 'Cut Guides',
    categoryColor: 'text-red-700',
    badge: '<i class="bi bi-scissors text-amber-500"></i> Poultry &bull; Knife Masterclass',
    date: 'April 08, 2026',
    author: 'Marco Rossi, Head Butcher',
    readTime: '6 Min Read',
    comments: '9 Comments',
    heroImage: 'assets/images/blog/spatchcock-roast-chicken.jpg',
    heroImagePosition: 'center 50%',
    heroAlt: 'The Anatomy of Poultry: Spatchcocking & Herb Butter Roasting',
    heroCaption: 'Butcher-spatchcocked pasture-raised roaster seasoned with thyme salt and brushed with clarified poultry butter.',
    batchTag: 'Knife Craft &bull; Spatchcock 07',
    tags: ['Poultry', 'Spatchcock', 'Roasting', 'HerbButter'],
    relatedIds: ['cold-chain-storage', 'reverse-searing-101', 'heritage-pork'],
    featuredProduct: {
      id: 'chk-1',
      name: 'Free-Range Whole Roaster Chicken',
      price: 16.50,
      unit: '1.8kg',
      category: 'Pasture Poultry',
      tag: '100% Organic Pastured',
      image: 'assets/images/blog/spatchcock-roast-chicken.jpg',
      desc: 'Air-chilled, pasture-raised whole chicken with tender breast muscle and crispy skin potential, hand-prepped for spatchcocking.'
    },
    contentHtml: `
      <p class="text-lg font-medium text-stone-900 dark:text-stone-100 leading-relaxed">
        Roasting a whole chicken traditionally is a geometric paradox: the breast meat dries out at 160&deg;F (71&deg;C) long before the deep thigh joints reach their tender 175&deg;F (79&deg;C) gelatin breakdown point. The butcher solution is spatchcocking (butterflying) &mdash; removing the spinal column so the entire bird lays perfectly flat on the roasting surface.
      </p>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        1. The Spatchcock Technique: Knife and Shears Protocol
      </h2>
      <p>
        With the chicken breast-side down on a butcher block, locate the spine. Using heavy spring-loaded poultry shears or a sharp boning knife, cut along one side of the spine from tail to neck. Repeat on the opposite side to cleanly extract the spinal column (reserve this for collagen-rich pan jus).
      </p>

      <!-- Quote Callout Box -->
      <div class="p-6 sm:p-8 rounded-2xl bg-amber-900/10 dark:bg-amber-950/30 border-l-4 border-amber-500 my-8">
        <i class="bi bi-quote text-3xl text-amber-500 block mb-2"></i>
        <p class="font-heading font-bold text-lg sm:text-xl text-stone-900 dark:text-stone-100 leading-snug">
          "Flip the chicken skin-side up, place both palms flat on the center of the breast, and press down firmly until you hear a sharp crack. That is the wishbone flattening. Now your chicken cooks in half the time with zero dry white meat."
        </p>
        <span class="text-xs uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold block mt-3">&mdash; Marco Rossi, Lead Artisan Cutter</span>
      </div>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        2. Thermal Equilibrium &amp; Skin Dehydration
      </h2>
      <p>
        When laid flat on a heavy preheated rimmed sheet pan or cast iron skillet, the dark leg quarters rest directly on the thermal perimeter where convective heat is highest, while the delicate breasts sit shielded in the cooler center.
      </p>

      <!-- Poultry Spec Table -->
      <div class="my-10 p-6 rounded-2xl bg-stone-100 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800">
        <h3 class="font-heading font-bold text-lg text-stone-900 dark:text-stone-100 mb-4">Whole Roasted vs. Spatchcocked Comparison Matrix</h3>
        <div class="overflow-x-auto">
          <table class="table table-bordered text-xs text-stone-700 dark:text-stone-300 mb-0">
            <thead class="bg-stone-200 dark:bg-zinc-800">
              <tr>
                <th>Cooking Metric</th>
                <th>Traditional Trussed Whole Bird</th>
                <th>Butcher Spatchcocked</th>
                <th>Butcher Verdict</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-bold">Total Cook Time (425&deg;F)</td>
                <td>75 &ndash; 90 minutes</td>
                <td>38 &ndash; 45 minutes</td>
                <td>Over 45% faster thermal throughput</td>
              </tr>
              <tr class="bg-amber-800/10 font-bold text-amber-700 dark:text-amber-400">
                <td>Breast Meat Texture</td>
                <td>Prone to dryness, overcooked exterior</td>
                <td>Edge-to-edge juicy at 155&deg;F</td>
                <td>Optimal moisture retention</td>
              </tr>
              <tr>
                <td class="font-bold">Skin Crisping Surface</td>
                <td>Only upper half crisps; bottom steams</td>
                <td>100% skin exposed upward to convection</td>
                <td>Paper-crisp golden crackle</td>
              </tr>
              <tr>
                <td class="font-bold">Pan Drippings Gravy</td>
                <td>Trapped inside cavity</td>
                <td>Freely deglazes on baking sheet</td>
                <td>Instant caramelized fond</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        3. The Compound Herb Butter Injection
      </h2>
      <p>
        Gently slide your fingertips beneath the breast skin to create a pocket without tearing the outer membrane. Massage two tablespoons of softened unsalted butter whipped with rosemary, fresh thyme, minced shallots, and cracked black pepper directly against the meat. As the bird roasts at 425&deg;F, the milk fats baste the muscle fibers continuously from within.
      </p>
    `
  },
  'frenched-lamb-rack': {
    id: 'frenched-lamb-rack',
    title: 'The Art of the French Trim: Seam Butchery on Spring Lamb Racks',
    shortTitle: 'Frenching Lamb Racks',
    category: 'Cut Guides',
    categoryColor: 'text-red-700',
    badge: '<i class="bi bi-award text-amber-500"></i> Lamb &bull; Seam Masterclass',
    date: 'March 30, 2026',
    author: 'Marco Rossi, Head Butcher',
    readTime: '7 Min Read',
    comments: '12 Comments',
    heroImage: 'assets/images/blog/frenched-rack-lamb.jpg',
    heroImagePosition: 'center 50%',
    heroAlt: 'The Art of the French Trim: Seam Butchery on Spring Lamb Racks',
    heroCaption: 'Artisan 8-rib pasture spring lamb rack with polished rib bones and scored fat cap seasoned with cracked peppercorn.',
    batchTag: 'Seam Butchery &bull; Rack 08',
    tags: ['Lamb', 'Frenching', 'ArtisanCut', 'FineDining'],
    relatedIds: ['beef-rib-anatomy', 'marbling-demystified', 'dry-aging-science'],
    featuredProduct: {
      id: 'mut-4',
      name: 'Artisan Frenched Lamb Rib Rack',
      price: 42.00,
      unit: '8-Rib Rack (800g)',
      category: 'Spring Mutton',
      tag: 'Master Butcher Trim',
      image: 'assets/images/blog/frenched-rack-lamb.jpg',
      desc: 'Cleanly frenched intercostal bones with cap removed and spinalis trimmed, ready for high-heat herb roasting.'
    },
    contentHtml: `
      <p class="text-lg font-medium text-stone-900 dark:text-stone-100 leading-relaxed">
        The frenched lamb rib rack is the crowned sovereign of the butcher's display counter. "Frenching" is the culinary craft of cutting away all fat, connective tissue, and intercostal meat from the rib bones, leaving pristine, pearly-white bones exposed for dramatic carving presentation.
      </p>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        1. Anatomy of the 8-Rib Primal Cut
      </h2>
      <p>
        The lamb rack sits along the dorsal spine between the chuck shoulder and the loin saddle (ribs 6 through 12). In its primal state, it is covered by a thick outer cap of fat (the subcutaneous layer) and a secondary thin muscle called the <em>trapezius</em>. 
      </p>

      <!-- Quote Callout Box -->
      <div class="p-6 sm:p-8 rounded-2xl bg-amber-900/10 dark:bg-amber-950/30 border-l-4 border-amber-500 my-8">
        <i class="bi bi-quote text-3xl text-amber-500 block mb-2"></i>
        <p class="font-heading font-bold text-lg sm:text-xl text-stone-900 dark:text-stone-100 leading-snug">
          "A novice butcher hacks meat off with a knife. A master butcher scores the seam, wraps kitchen twine around the bone tip, and pulls backwards in one clean snap, peeling the membrane without nicking bone."
        </p>
        <span class="text-xs uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold block mt-3">&mdash; Marco Rossi, Lead Artisan Cutter</span>
      </div>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        2. Three-Step Frenching Protocol
      </h2>
      <p>
        Precision frenching requires methodical seam knife work:
      </p>
      <ul class="space-y-3 pl-4 border-s-2 border-red-500 my-4 text-sm">
        <li>
          <strong>The Horizontal Score Line:</strong> Make a continuous parallel incision across the rib cage approximately 2 inches above the central eye muscle. Do not penetrate the meat beneath; score just to bone depth.
        </li>
        <li>
          <strong>Intercostal Removal:</strong> Guide the tip of a flexible 6-inch boning knife between each rib bone. Slice downwards toward the score line, releasing the triangular flaps of meat.
        </li>
        <li>
          <strong>Bone Polishing:</strong> Scrape the residual periosteum membrane clean using the unsharpened back spine of your knife or coarse kitchen linen until the ivory surface is spotless.
        </li>
      </ul>

      <!-- Lamb Roasting Guide Table -->
      <div class="my-10 p-6 rounded-2xl bg-stone-100 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800">
        <h3 class="font-heading font-bold text-lg text-stone-900 dark:text-stone-100 mb-4">Precision Roasting Specs for Frenched Lamb Rack</h3>
        <div class="overflow-x-auto">
          <table class="table table-bordered text-xs text-stone-700 dark:text-stone-300 mb-0">
            <thead class="bg-stone-200 dark:bg-zinc-800">
              <tr>
                <th>Target Finish</th>
                <th>Oven Pull Temp</th>
                <th>Rested Core Temp</th>
                <th>Visual &amp; Mouthfeel Profile</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-amber-800/10 font-bold text-amber-700 dark:text-amber-400">
                <td>Medium-Rare (Artisan Standard)</td>
                <td>125&deg;F &ndash; 128&deg;F</td>
                <td>132&deg;F &ndash; 135&deg;F</td>
                <td>Ruby-pink center, velvety grass-fed sweetness</td>
              </tr>
              <tr>
                <td class="font-bold">Medium</td>
                <td>133&deg;F &ndash; 136&deg;F</td>
                <td>140&deg;F &ndash; 142&deg;F</td>
                <td>Rosy warm center, firm fat cap rendering</td>
              </tr>
              <tr>
                <td class="font-bold">High Heat Oven Temp</td>
                <td colspan="3">Sear fat cap in skillet 3 mins, then roast at 400&deg;F for 18&ndash;22 mins</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        3. Searing &amp; Carving Etiquette
      </h2>
      <p>
        Always cross-hatch score the remaining 1/8-inch fat cap with diamond incisions to allow aromatic rosemary butter to penetrate. Rest the rack for a minimum of 8 minutes under loose foil before slicing between the bones with a single clean draw of a 10-inch slicing knife.
      </p>
    `
  },
  'dry-aged-tomahawk': {
    id: 'dry-aged-tomahawk',
    title: 'The Dry-Aged Tomahawk: Fire, Bone & Pitmaster Carving',
    shortTitle: 'Dry-Aged Tomahawk',
    category: 'Dry Aging',
    categoryColor: 'text-red-700',
    badge: '<i class="bi bi-fire text-red-600"></i> Dry Aging &bull; Showpiece Edition',
    date: 'March 22, 2026',
    author: 'Marco Rossi, Head Butcher',
    readTime: '8 Min Read',
    comments: '16 Comments',
    heroImage: 'assets/images/blog/tomahawk-pitmaster-sear.jpg',
    heroImagePosition: 'center 50%',
    heroAlt: 'The Dry-Aged Tomahawk: Fire, Bone & Pitmaster Carving',
    heroCaption: '45-day Himalayan dry-aged Prime Tomahawk ribeye with an 8-inch frenched bone handle, carved tableside over hardwood embers.',
    batchTag: 'Salt Locker 01 &bull; Showpiece Prime',
    tags: ['Tomahawk', 'DryAging', 'Steak', 'BoneIn', 'Steakhouse'],
    relatedIds: ['reverse-searing-101', 'beef-rib-anatomy', 'marbling-demystified'],
    featuredProduct: {
      id: 'tomahawk',
      name: 'Dry-Aged Prime Tomahawk Ribeye',
      price: 64.00,
      unit: '45oz (Showpiece Cut)',
      category: 'Prime Beef',
      tag: "Today's Reserve Cut",
      image: 'assets/images/blog/dry-aged-tomahawk-steak.jpg',
      desc: 'Massive long-bone bone-in ribeye frenched by hand with BMS 7+ marbling aged 35-45 days in our Himalayan salt vaults for nutty steakhouse depth.'
    },
    contentHtml: `
      <p class="text-lg font-medium text-stone-900 dark:text-stone-100 leading-relaxed">
        Nothing commands a table quite like a dry-aged Tomahawk ribeye. Cut with an entire 8-inch rib bone scraped pristinely clean of sinew, this showpiece cut represents the apex of modern carnivore dining: supreme intramuscular marbling, concentrated salt-vault nuttiness, and dramatic culinary presentation.
      </p>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        1. The Thermal Shield: Why the Long Bone Matters
      </h2>
      <p>
        Skeptics often dismiss the extended bone handle as mere theater. In reality, the dense marrow-filled rib bone serves as a natural heat capacitor. As convective hot air circulates in the smoker or oven, the bone insulates the ribeye core, slowing thermal conduction and shielding the prized spinalis dorsi cap from overheating.
      </p>

      <!-- Quote Callout Box -->
      <div class="p-6 sm:p-8 rounded-2xl bg-red-900/10 dark:bg-red-950/30 border-l-4 border-red-700 my-8">
        <i class="bi bi-quote text-3xl text-red-700 block mb-2"></i>
        <p class="font-heading font-bold text-lg sm:text-xl text-stone-900 dark:text-stone-100 leading-snug">
          "A 45-ounce Tomahawk is not just a steak &mdash; it is a shared centerpiece roast. Cook it with indirect wood smoke until the marrow glows, then blast it over white-hot hardwood coals to blister the salt crust."
        </p>
        <span class="text-xs uppercase tracking-wider text-red-700 dark:text-red-400 font-bold block mt-3">&mdash; Marco Rossi, Lead Artisan Cutter</span>
      </div>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        2. Two-Zone Fire Mastery for 2.5-Inch Thickness
      </h2>
      <p>
        Due to its massive 2.5-inch thickness, direct flame from start to finish will incinerate the crust before the core reaches medium-rare. We recommend the pitmaster reverse sear:
      </p>
      <ul class="space-y-3 pl-4 border-s-2 border-amber-500 my-4 text-sm">
        <li>
          <strong>Ambient Smoke Phase:</strong> Smoke indirectly at 225&deg;F (107&deg;C) over seasoned post oak until core probe reads 115&deg;F (46&deg;C).
        </li>
        <li>
          <strong>Charcoal Blast Finish:</strong> Transfer directly onto red-hot hardwood lump coals for 90 seconds per side, building an amber Maillard crust.
        </li>
        <li>
          <strong>Marrow & Herb Resting:</strong> Rest on a warm board for 10 minutes topped with thyme, garlic confit, and whipped marrow butter.
        </li>
      </ul>

      <!-- Infographic Comparison Table -->
      <div class="my-10 p-6 rounded-2xl bg-stone-100 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800">
        <h3 class="font-heading font-bold text-lg text-stone-900 dark:text-stone-100 mb-4">Master Cooking Temperatures for Tomahawk Ribeye</h3>
        <div class="overflow-x-auto">
          <table class="table table-bordered text-xs text-stone-700 dark:text-stone-300 mb-0">
            <thead class="bg-stone-200 dark:bg-zinc-800">
              <tr>
                <th>Doneness Level</th>
                <th>Smoker Pull Temp</th>
                <th>Finished Rested Temp</th>
                <th>Center Appearance</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-red-800/10 font-bold text-red-700 dark:text-red-400">
                <td>Medium-Rare (Butcher Recommended)</td>
                <td>115&deg;F &ndash; 118&deg;F</td>
                <td>130&deg;F &ndash; 133&deg;F</td>
                <td>Deep ruby red, fully rendered intramuscular ribeye cap</td>
              </tr>
              <tr>
                <td class="font-bold">Medium</td>
                <td>124&deg;F &ndash; 127&deg;F</td>
                <td>138&deg;F &ndash; 141&deg;F</td>
                <td>Warm pink center with firm caramel fat edge</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 class="text-2xl sm:text-3xl font-heading font-extrabold text-stone-900 dark:text-stone-50 pt-4">
        3. Tableside Carving Protocol
      </h2>
      <p>
        Carve by running your knife tip down along the curve of the bone to release the entire ribeye log. Slice the spinalis cap into delicate half-inch strips, slice the central eye across the grain, and serve the bone alongside with coarse sea salt crystals.
      </p>
    `
  },
};

// ==========================================================================
// Initialization & Resilient Event Binding
// ==========================================================================

function initButcherBlog() {
  initBlogFilterSystem();
  initBlogDetailsPage();
  initCardClickPersistence();
  initJournalProductFilters();
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initButcherBlog);
  } else {
    initButcherBlog();
  }
}

/**
 * Persist clicked article ID so blog-details.html always renders the right cut
 */
function initCardClickPersistence() {
  if (typeof document === 'undefined') return;

  document.addEventListener('click', (e) => {
    const anchor = e.target && e.target.closest ? e.target.closest('a[href*="blog-details.html"]') : null;
    if (!anchor) return;

    let targetId = anchor.getAttribute('data-article-id') || anchor.getAttribute('data-id');
    if (!targetId && anchor.href) {
      try {
        const baseOrigin = (typeof window !== 'undefined' && window.location && window.location.origin) ? window.location.origin : 'http://localhost';
        const url = new URL(anchor.href, baseOrigin);
        targetId = url.searchParams.get('id') || url.searchParams.get('article');
      } catch (err) {
        const match = anchor.href.match(/[?&](?:id|article)=([^&#]+)/);
        if (match) targetId = match[1];
      }
    }

    if (targetId && BUTCHER_ARTICLES[targetId]) {
      try {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('primecut_active_article', targetId);
        }
      } catch (e) {
        // LocalStorage safety
      }
    }
  });
}

// ==========================================================================
// 1. FILTER & SEARCH SYSTEM (for blog.html)
// ==========================================================================
function initBlogFilterSystem() {
  if (typeof document === 'undefined') return;

  const searchInput = document.getElementById('blogSearchInput');
  const categoryPills = document.querySelectorAll('.blog-category-pill');
  const tagBadges = document.querySelectorAll('.blog-tag-badge');
  const blogCards = document.querySelectorAll('.blog-card-item');
  const emptyState = document.getElementById('blogEmptyState');
  const resultsCountEl = document.getElementById('blogResultsCount');

  if (!blogCards || !blogCards.length) return;

  let activeCategory = 'all';
  let activeTag = 'all';
  let searchQuery = '';

  function filterPosts() {
    let visibleCount = 0;

    blogCards.forEach(card => {
      const category = (card.getAttribute('data-category') || '').toLowerCase();
      const tags = (card.getAttribute('data-tags') || '').toLowerCase();
      const title = (card.querySelector('.blog-title')?.textContent || '').toLowerCase();
      const excerpt = (card.querySelector('.blog-excerpt')?.textContent || '').toLowerCase();

      const matchesCategory = activeCategory === 'all' || category === activeCategory;
      const matchesTag = activeTag === 'all' || tags.includes(activeTag);
      const matchesSearch = !searchQuery || title.includes(searchQuery) || excerpt.includes(searchQuery);

      if (matchesCategory && matchesTag && matchesSearch) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (resultsCountEl) {
      resultsCountEl.textContent = `${visibleCount} ${visibleCount === 1 ? 'Article' : 'Articles'} Found`;
    }

    if (emptyState) {
      if (visibleCount === 0) {
        emptyState.classList.remove('d-none');
      } else {
        emptyState.classList.add('d-none');
      }
    }
  }

  // Category Pill Click
  categoryPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      categoryPills.forEach(p => p.classList.remove('active', 'btn-artisan', 'text-white'));
      categoryPills.forEach(p => p.classList.add('btn-outline-artisan'));

      pill.classList.add('active', 'btn-artisan', 'text-white');
      pill.classList.remove('btn-outline-artisan');

      activeCategory = (pill.getAttribute('data-category') || 'all').toLowerCase();
      filterPosts();
    });
  });

  // Tag Badge Click
  tagBadges.forEach(badge => {
    badge.addEventListener('click', (e) => {
      e.preventDefault();
      const tagValue = (badge.getAttribute('data-tag') || 'all').toLowerCase();
      
      if (activeTag === tagValue) {
        // Toggle off
        activeTag = 'all';
        badge.classList.remove('bg-artisan-red', 'text-white');
      } else {
        tagBadges.forEach(b => b.classList.remove('bg-artisan-red', 'text-white'));
        activeTag = tagValue;
        badge.classList.add('bg-artisan-red', 'text-white');
      }
      filterPosts();
    });
  });

  // Search Input Event
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      filterPosts();
    });
  }
}

// ==========================================================================
// 2. DYNAMIC BLOG DETAILS PAGE (for blog-details.html)
// ==========================================================================

// ==========================================================================
// 1B. JOURNAL PRODUCTS FILTER (for blog.html)
// ==========================================================================
function initJournalProductFilters() {
  if (typeof document === 'undefined') return;
  const filterBtns = document.querySelectorAll('.journal-product-filter');
  const productCards = document.querySelectorAll('.journal-product-card');
  if (!filterBtns.length || !productCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-red-700', 'text-white');
        b.classList.add('bg-white', 'dark:bg-zinc-900', 'text-stone-700', 'dark:text-stone-300');
      });
      btn.classList.add('active', 'bg-red-700', 'text-white');
      btn.classList.remove('bg-white', 'dark:bg-zinc-900', 'text-stone-700', 'dark:text-stone-300');

      const filter = (btn.getAttribute('data-filter') || 'all').toLowerCase();
      productCards.forEach(card => {
        const cat = (card.getAttribute('data-category') || '').toLowerCase();
        if (filter === 'all' || cat === filter || (filter === 'smoker' && (cat === 'smoker' || cat === 'beef' || cat === 'pork'))) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function initBlogDetailsPage() {
  if (typeof document === 'undefined') return;

  const articleTitleEl = document.getElementById('articleTitle');
  if (!articleTitleEl) return; // Not on blog-details.html

  function getTargetArticleId() {
    // 1. Check URL query parameters ?id=... or ?article=...
    try {
      if (typeof window !== 'undefined' && window.location) {
        const search = window.location.search || '';
        const urlParams = new URLSearchParams(search);
        const idParam = urlParams.get('id') || urlParams.get('article');
        if (idParam && BUTCHER_ARTICLES[idParam]) {
          return idParam;
        }
      }
    } catch (err) {}

    // 2. Check URL hash #...
    try {
      if (typeof window !== 'undefined' && window.location) {
        const rawHash = window.location.hash || '';
        const hash = rawHash.replace('#', '').trim();
        if (hash && BUTCHER_ARTICLES[hash]) {
          return hash;
        }
      }
    } catch (err) {}

    // 3. Check localStorage for last clicked article
    try {
      if (typeof localStorage !== 'undefined') {
        const storedId = localStorage.getItem('primecut_active_article');
        if (storedId && BUTCHER_ARTICLES[storedId]) {
          return storedId;
        }
      }
    } catch (err) {}

    // Default to dry-aging science article
    return 'dry-aging-science';
  }

  function renderArticle(articleId, updateHistory = false) {
    const article = BUTCHER_ARTICLES[articleId] || BUTCHER_ARTICLES['dry-aging-science'];
    if (!article) return;

    // Persist active ID
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('primecut_active_article', article.id);
      }
    } catch (e) {}

    // 1. Document Title
    document.title = `${article.title} | Prime & Cut Artisan Butchery`;

    // 2. Breadcrumb
    const breadcrumbEl = document.getElementById('articleBreadcrumb');
    if (breadcrumbEl) {
      breadcrumbEl.textContent = article.shortTitle || article.title;
    }

    // 3. Category Badge
    const badgeEl = document.getElementById('articleBadge');
    if (badgeEl) {
      badgeEl.innerHTML = article.badge;
    }

    // 4. Article Title (H1)
    if (articleTitleEl) {
      articleTitleEl.textContent = article.title;
    }

    // 5. Article Meta (Author, Date, Read Time, Comments)
    const metaEl = document.getElementById('articleMeta');
    if (metaEl) {
      metaEl.innerHTML = `
        <span class="flex items-center gap-1.5">
          <i class="bi bi-person-fill text-red-700"></i> ${article.author}
        </span>
        <span>&bull;</span>
        <span class="flex items-center gap-1.5">
          <i class="bi bi-calendar3"></i> ${article.date}
        </span>
        <span>&bull;</span>
        <span class="flex items-center gap-1.5">
          <i class="bi bi-clock"></i> ${article.readTime}
        </span>
        <span>&bull;</span>
        <span class="flex items-center gap-1.5">
          <i class="bi bi-chat-left-text"></i> ${article.comments}
        </span>
      `;
    }

    // 6. Hero Image, Caption & Batch Tag
    const heroImg = document.getElementById('articleHeroImage');
    if (heroImg) {
      heroImg.src = article.heroImage;
      heroImg.alt = article.heroAlt || article.title;
      heroImg.setAttribute('data-full-src', article.heroImage);
      heroImg.style.cursor = 'zoom-in';
      heroImg.title = 'Click to inspect cut in full-screen HD';
      heroImg.style.objectPosition = article.heroImagePosition || 'center';
    }

    const heroCaption = document.getElementById('articleHeroCaption');
    if (heroCaption) {
      heroCaption.textContent = article.heroCaption;
    }

    const heroBatch = document.getElementById('articleHeroBatch');
    if (heroBatch) {
      heroBatch.innerHTML = article.batchTag;
    }

    // 7. Rich Content Body
    const contentEl = document.getElementById('articleContent');
    if (contentEl) {
      contentEl.innerHTML = article.contentHtml;
    }

    // 7B. Featured Cut for this Masterclass
    const featuredCutContainer = document.getElementById('articleFeaturedProductContainer');
    if (featuredCutContainer) {
      if (article.featuredProduct) {
        const prod = article.featuredProduct;
        featuredCutContainer.innerHTML = `
          <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-stone-900 via-zinc-900 to-red-950 text-white border border-red-900/40 shadow-xl my-12 relative overflow-hidden">
            <div class="absolute -right-10 -bottom-10 w-48 h-48 bg-red-700/10 rounded-full blur-3xl pointer-events-none"></div>
            <div class="flex flex-col md:flex-row items-center gap-6 relative z-10">
              <div class="w-full md:w-52 h-44 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 shadow-md bg-zinc-800">
                <img src="${prod.image}" alt="${prod.name}" class="w-full h-full object-cover">
              </div>
              <div class="flex-grow text-center md:text-start">
                <div class="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                  <span class="text-[10px] font-extrabold uppercase tracking-wider bg-red-700 text-white px-2.5 py-0.5 rounded-full">
                    ${prod.tag || 'Masterclass Cut'}
                  </span>
                  <span class="text-[10px] font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
                    ${prod.category || 'Prime Butcher Cut'}
                  </span>
                </div>
                <h3 class="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
                  ${prod.name}
                </h3>
                <p class="text-xs text-stone-300 leading-relaxed mb-4 max-w-xl">
                  ${prod.desc}
                </p>
                <div class="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <div>
                    <span class="text-[10px] text-stone-400 uppercase tracking-wider block">Estimated Price</span>
                    <span class="font-heading font-extrabold text-2xl text-amber-400">${prod.price.toFixed(2)}</span>
                    <span class="text-xs text-stone-300">/ ${prod.unit}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <button type="button" class="btn-artisan-primary text-xs !py-2.5 !px-4 shadow-lg add-to-enquiry-btn" data-id="${prod.id}" data-title="${prod.name}" data-price="${prod.price}" data-category="${prod.category}">
                      <i class="bi bi-basket2-fill me-1.5"></i>
                      <span>Add Cut to Enquiry Basket</span>
                    </button>
                    <a href="product-details.html?id=${prod.id}" class="btn-artisan-outline text-xs !py-2.5 !px-3.5 !border-stone-600 hover:!border-white text-stone-200">
                      <span>View Specs</span>
                      <i class="bi bi-arrow-right rtl-flip ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      } else {
        featuredCutContainer.innerHTML = '';
      }
    }

    // 8. Tags
    const tagsEl = document.getElementById('articleTags');
    if (tagsEl && article.tags) {
      tagsEl.innerHTML = `
        <span class="text-xs font-bold text-stone-500 uppercase">Tags:</span>
        ${article.tags.map(tag => `<span class="text-xs px-2.5 py-1 rounded bg-stone-100 dark:bg-zinc-800 text-stone-700 dark:text-stone-300">#${tag}</span>`).join(' ')}
      `;
    }

    // 9. Related Articles Grid (render other articles with clickable images and titles)
    const relatedGridEl = document.getElementById('relatedArticlesGrid');
    if (relatedGridEl) {
      const relIds = article.relatedIds || Object.keys(BUTCHER_ARTICLES).filter(k => k !== article.id).slice(0, 3);
      const relArticles = relIds.map(id => BUTCHER_ARTICLES[id]).filter(Boolean).slice(0, 3);

      relatedGridEl.innerHTML = relArticles.map(rel => `
        <div class="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-stone-200 dark:border-zinc-800 shadow-sm group hover:shadow-lg transition flex flex-col justify-between">
          <div>
            <a href="blog-details.html?id=${rel.id}" class="related-card-link block h-36 overflow-hidden relative cursor-pointer" data-id="${rel.id}" data-article-id="${rel.id}" aria-label="${rel.title}">
              <img src="${rel.heroImage}" alt="${rel.heroAlt || rel.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
              <span class="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-md">
                ${rel.readTime}
              </span>
            </a>
            <div class="p-4">
              <span class="text-[10px] font-bold ${rel.categoryColor || 'text-red-700'} uppercase block mb-1">
                ${rel.category}
              </span>
              <h4 class="font-heading font-bold text-sm text-stone-900 dark:text-stone-100 group-hover:text-red-700 dark:group-hover:text-red-400 transition leading-snug">
                <a href="blog-details.html?id=${rel.id}" class="related-card-link text-reset text-decoration-none" data-id="${rel.id}" data-article-id="${rel.id}">
                  ${rel.shortTitle || rel.title}
                </a>
              </h4>
            </div>
          </div>
          <div class="px-4 pb-4 pt-0 flex items-center justify-between border-t border-stone-100 dark:border-zinc-800/80 mt-2">
            <span class="text-[10px] text-stone-500 dark:text-stone-400">${rel.date}</span>
            <a href="blog-details.html?id=${rel.id}" class="related-card-link text-xs text-red-700 dark:text-red-400 font-bold inline-flex items-center gap-1 hover:underline" data-id="${rel.id}" data-article-id="${rel.id}">
              Read <i class="bi bi-arrow-right rtl-flip text-[10px]"></i>
            </a>
          </div>
        </div>
      `).join('');

      // Attach smooth click handlers to in-page related links
      attachRelatedLinks();
    }

    if (updateHistory) {
      try {
        const newUrl = `${window.location.pathname}?id=${article.id}`;
        window.history.pushState({ articleId: article.id }, '', newUrl);
      } catch (e) {}
      if (typeof window !== 'undefined' && window.scrollTo) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }

  function attachRelatedLinks() {
    const relatedLinks = document.querySelectorAll('.related-card-link');
    if (!relatedLinks) return;
    relatedLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('data-id') || link.getAttribute('data-article-id');
        if (targetId && BUTCHER_ARTICLES[targetId]) {
          e.preventDefault();
          renderArticle(targetId, true);
        }
      });
    });
  }

  // Setup Image Lightbox trigger on hero image
  const heroImg = document.getElementById('articleHeroImage');
  if (heroImg && heroImg.addEventListener) {
    heroImg.addEventListener('click', () => {
      const modalImg = document.getElementById('lightboxModalImage');
      const modalCaption = document.getElementById('lightboxModalCaption');
      const modalTitle = document.getElementById('lightboxModalTitle');
      const modalEl = document.getElementById('blogImageModal');

      if (modalImg && modalEl) {
        modalImg.src = heroImg.src;
        modalImg.alt = heroImg.alt;
        if (modalCaption) {
          modalCaption.textContent = document.getElementById('articleHeroCaption')?.textContent || '';
        }
        if (modalTitle) {
          modalTitle.textContent = articleTitleEl.textContent || 'Butcher Masterclass Inspection';
        }
        if (typeof window !== 'undefined' && window.bootstrap && window.bootstrap.Modal) {
          const bsModal = window.bootstrap.Modal.getOrCreateInstance(modalEl);
          bsModal.show();
        }
      }
    });
  }

  // Initial render based on URL parameter / hash / localStorage
  const initialArticleId = getTargetArticleId();
  renderArticle(initialArticleId, false);

  // Handle browser back / forward navigation
  if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('popstate', (e) => {
      const stateId = e.state?.articleId || getTargetArticleId();
      renderArticle(stateId, false);
    });
  }
}
