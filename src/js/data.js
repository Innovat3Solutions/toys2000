export const data = {
  // Store / channel categories — grouped for tabbed bento display
  categories: [
    {
      id: 'resort-destination',
      name: 'Resort & Destination',
      image: '/hero/Aqua_Leisure-1.jpg',
      description: 'Premium products for resorts, hotels, and vacation destinations',
      size: 'large',
      group: 'outdoor'
    },
    {
      id: 'pool',
      name: 'Pool',
      image: '/hero/Aqua_Leisure_2.jpg',
      description: 'Floats, toys, and gear for pool environments',
      size: 'small',
      group: 'outdoor'
    },
    {
      id: 'sporting-goods',
      name: 'Sporting Goods',
      image: '/hero/Sportsstuff_1.avif',
      description: 'Sports equipment and active play for sporting goods retailers',
      size: 'large',
      group: 'outdoor'
    },
    {
      id: 'hardware',
      name: 'Hardware',
      image: '/hero/Sportsstuff_2.avif',
      description: 'Playful construction and tool sets for young builders',
      size: 'small',
      group: 'outdoor'
    },
    {
      id: 'private-store',
      name: 'Private Store',
      image: '/hero/Masterpiece_1.jpg',
      description: 'Curated collections for boutique and gift shops',
      size: 'large',
      group: 'specialty'
    },
    {
      id: 'supermarket',
      name: 'Supermarket',
      image: '/hero/Airhead_2.webp',
      description: 'High-volume products for supermarket and retail chains',
      size: 'small',
      group: 'specialty'
    },
    {
      id: 'strictly-toy',
      name: 'Strictly Toy',
      image: '/hero/Lionel_1.jpg',
      description: 'Classic toys, trains, and collectibles for dedicated toy stores',
      size: 'small',
      group: 'specialty'
    },
    {
      id: 'zag',
      name: 'Zoos, Aquariums, & Gardens',
      image: '/hero/Silver_Circle-1.webp',
      description: 'Educational toys, plush animals, and nature inspired gifts for ZAG destinations',
      size: 'large',
      group: 'specialty'
    },
    {
      id: 'pap',
      name: 'Pap',
      image: '/hero/Yukon-1.jpg',
      description: 'Branded merchandise and accessories',
      size: 'small',
      group: 'specialty'
    }
  ],

  // Hero slides — copy is tailored to what each photograph actually shows
  heroSlides: [
    {
      id: 'slide-airhead-1',
      tag: 'Big-Air Towables',
      accentWord: 'Scream',
      headline: 'Built for the Loudest Scream of Summer',
      subheadline: "Airhead Switch Back and the rest of the multi-rider lineup — engineered for the moment two friends can't stop laughing at thirty knots.",
      ctaPrimary: { text: 'Shop Airhead', link: '/products', brand: 'airhead' },
      ctaSecondary: { text: 'View Airhead Catalog', link: '#catalogs', catalog: 'airhead' },
      image: '/hero/Airhead-1.webp',
      thumb: '/hero/Airhead-1.webp',
      textEffect: 'energize',
      accentClass: 'accent-blue'
    },
    {
      id: 'slide-airhead-2',
      tag: 'Wakesurf & Wakeboard',
      accentWord: 'Carve',
      headline: 'Carve a Cleaner Wake',
      subheadline: 'Airhead boards and rope packages built for the rider chasing the perfect set — the kind that only shows up at golden hour.',
      ctaPrimary: { text: 'Shop Airhead', link: '/products', brand: 'airhead' },
      ctaSecondary: { text: 'View Airhead Catalog', link: '#catalogs', catalog: 'airhead' },
      image: '/hero/Airhead_2.webp',
      thumb: '/hero/Airhead_2.webp',
      textEffect: 'energize',
      accentClass: 'accent-orange'
    },
    {
      id: 'slide-aqua-leisure-1',
      tag: 'Resort Pool Floats',
      accentWord: 'Recline',
      headline: 'The Recline Your Guests Came For',
      subheadline: 'Tropical-print loungers and luxury pool floats from Aqua Leisure — the must-have on every resort deck from Florida to St. Lucia.',
      ctaPrimary: { text: 'Shop Aqua Leisure', link: '/products', brand: 'aqua-leisure' },
      ctaSecondary: { text: 'View Aqua Leisure Catalog', link: '#catalogs', catalog: 'aqua-leisure' },
      image: '/hero/Aqua_Leisure-1.jpg',
      thumb: '/hero/Aqua_Leisure-1.jpg',
      textEffect: 'splash',
      accentClass: 'accent-blue'
    },
    {
      id: 'slide-aqua-leisure-2',
      tag: 'Pool & Party',
      accentWord: 'Drift',
      headline: 'Drift Together. Splash Together.',
      subheadline: 'Aqua Leisure inner tubes and party floats — the pool moment guests text home about before they even dry off.',
      ctaPrimary: { text: 'Shop Aqua Leisure', link: '/products', brand: 'aqua-leisure' },
      ctaSecondary: { text: 'View Aqua Leisure Catalog', link: '#catalogs', catalog: 'aqua-leisure' },
      image: '/hero/Aqua_Leisure_2.jpg',
      thumb: '/hero/Aqua_Leisure_2.jpg',
      textEffect: 'splash',
      accentClass: 'accent-green'
    },
    {
      id: 'slide-lionel-1',
      tag: 'A Lionel Legacy',
      accentWord: 'Heritage',
      headline: '125 Years of American Heritage',
      subheadline: "From 1938 to today — Lionel sets are the trains your grandfather pulled out of the box, still pulling laps around the holiday tree.",
      ctaPrimary: { text: 'Shop Lionel', link: '/products', brand: 'lionel' },
      ctaSecondary: { text: 'Visit Lionel', link: '/brand', brand: 'lionel' },
      image: '/hero/Lionel_1.jpg',
      thumb: '/hero/Lionel_1.jpg',
      textEffect: 'reveal',
      accentClass: 'accent-orange'
    },
    {
      id: 'slide-lionel-2',
      tag: 'Lionel Premium',
      accentWord: 'Detail',
      headline: 'Detail That Stops the Conversation',
      subheadline: 'Show-floor Lionel locomotives engineered for the serious collector and the gift-shop showpiece — every rivet exactly where it should be.',
      ctaPrimary: { text: 'Shop Lionel', link: '/products', brand: 'lionel' },
      ctaSecondary: { text: 'Visit Lionel', link: '/brand', brand: 'lionel' },
      image: '/hero/Lionel-2.jpg',
      thumb: '/hero/Lionel-2.jpg',
      textEffect: 'reveal',
      accentClass: 'accent-yellow'
    },
    {
      id: 'slide-masterpieces-1',
      tag: 'National Parks Puzzles',
      accentWord: 'America',
      headline: 'All of America in 1,000 Pieces',
      subheadline: "MasterPieces National Parks collection — the bestselling puzzle line for gift shops, lodges, ranger stations, and anywhere people pick up a souvenir.",
      ctaPrimary: { text: 'Shop MasterPieces', link: '/products', brand: 'masterpieces' },
      ctaSecondary: { text: 'Visit MasterPieces', link: '/brand', brand: 'masterpieces' },
      image: '/hero/Masterpiece_1.jpg',
      thumb: '/hero/Masterpiece_1.jpg',
      textEffect: 'rumble',
      accentClass: 'accent-yellow'
    },
    {
      id: 'slide-silver-circle-1',
      tag: 'Nature Discovery',
      accentWord: 'Wild',
      headline: 'Bottle Up the Wild',
      subheadline: 'Silver Circle build-your-own terrariums and nature kits — the hands-on bestseller at every zoo, aquarium, and garden gift shop.',
      ctaPrimary: { text: 'Shop Silver Circle', link: '/products', brand: 'silver-circle' },
      ctaSecondary: { text: 'View Silver Circle Catalog', link: '#catalogs', catalog: 'silver-circle' },
      image: '/hero/Silver_Circle-1.webp',
      thumb: '/hero/Silver_Circle-1.webp',
      textEffect: 'energize',
      accentClass: 'accent-green'
    },
    {
      id: 'slide-sportsstuff-1',
      tag: 'Pool Lounge',
      accentWord: 'Chill',
      headline: 'The Chill Your Deck Has Been Missing',
      subheadline: 'SportsStuff racing-stripe lounge floats with built-in cup holders — the pool upgrade guests notice the second they sit down.',
      ctaPrimary: { text: 'Shop SportsStuff', link: '/products', brand: 'sportsstuff' },
      ctaSecondary: { text: 'View SportsStuff Catalog', link: '#catalogs', catalog: 'sportsstuff' },
      image: '/hero/Sportsstuff_1.webp',
      thumb: '/hero/Sportsstuff_1.webp',
      textEffect: 'energize',
      accentClass: 'accent-blue'
    },
    {
      id: 'slide-sportsstuff-2',
      tag: 'Winter Tubing',
      accentWord: 'Slope',
      headline: 'Same Tube. Different Slope.',
      subheadline: "SportsStuff snow tubes built for the sledding hill — the off-season pickup that keeps winter sport shops moving inventory year-round.",
      ctaPrimary: { text: 'Shop SportsStuff', link: '/products', brand: 'sportsstuff' },
      ctaSecondary: { text: 'View SportsStuff Catalog', link: '#catalogs', catalog: 'sportsstuff' },
      image: '/hero/Sportsstuff_2.webp',
      thumb: '/hero/Sportsstuff_2.webp',
      textEffect: 'reveal',
      accentClass: 'accent-blue'
    },
    {
      id: 'slide-sportsstuff-3',
      tag: 'Party Islands',
      accentWord: 'Crew',
      headline: 'Bring the Whole Crew Aboard',
      subheadline: 'The SportsStuff Fiesta Private Island — 8 spots, 11.5 feet, the centerpiece float every lake fleet gets asked about by name.',
      ctaPrimary: { text: 'Shop SportsStuff', link: '/products', brand: 'sportsstuff' },
      ctaSecondary: { text: 'View SportsStuff Catalog', link: '#catalogs', catalog: 'sportsstuff' },
      image: '/hero/Sportsstuff_3.webp',
      thumb: '/hero/Sportsstuff_3.webp',
      textEffect: 'energize',
      accentClass: 'accent-orange'
    },
    {
      id: 'slide-us-divers-1',
      tag: 'Snorkel Essentials',
      accentWord: 'Pause',
      headline: 'Just Before the Pause Becomes a Plunge',
      subheadline: 'US Divers fins, masks, and travel-ready snorkel sets — outfitting beach destinations from Puerto Rico to St. Lucia.',
      ctaPrimary: { text: 'Shop US Divers', link: '/products', brand: 'us-divers' },
      ctaSecondary: { text: 'Visit US Divers', link: '/brand', brand: 'us-divers' },
      image: '/hero/US_Divers-1.webp',
      thumb: '/hero/US_Divers-1.webp',
      textEffect: 'splash',
      accentClass: 'accent-blue'
    },
    {
      id: 'slide-us-divers-2',
      tag: 'Pro Dive Gear',
      accentWord: 'Leap',
      headline: 'Geared Up for the Leap',
      subheadline: 'Pro-grade US Divers wetsuits, BCDs, and regulators — for the dive shop that serves certified explorers, not just snorkelers.',
      ctaPrimary: { text: 'Shop US Divers', link: '/products', brand: 'us-divers' },
      ctaSecondary: { text: 'Visit US Divers', link: '/brand', brand: 'us-divers' },
      image: '/hero/US_Divers_2.webp',
      thumb: '/hero/US_Divers_2.webp',
      textEffect: 'splash',
      accentClass: 'accent-green'
    },
    {
      id: 'slide-us-divers-3',
      tag: 'Sunset Snorkel',
      accentWord: 'Golden',
      headline: 'When the Crew Walks Into Golden Hour',
      subheadline: 'Snorkel kits and beach gear from US Divers — the shore-day staple your guests are still talking about at dinner.',
      ctaPrimary: { text: 'Shop US Divers', link: '/products', brand: 'us-divers' },
      ctaSecondary: { text: 'Visit US Divers', link: '/brand', brand: 'us-divers' },
      image: '/hero/US_Divers_3.webp',
      thumb: '/hero/US_Divers_3.webp',
      textEffect: 'splash',
      accentClass: 'accent-orange'
    },
    {
      id: 'slide-us-divers-4',
      tag: 'Family Snorkel',
      accentWord: 'First Mask',
      headline: 'The First Mask Is the One They Remember',
      subheadline: 'US Divers kid-fit snorkel sets — the bestseller in every Caribbean resort kiosk, and the start of a thousand reef stories.',
      ctaPrimary: { text: 'Shop US Divers', link: '/products', brand: 'us-divers' },
      ctaSecondary: { text: 'Visit US Divers', link: '/brand', brand: 'us-divers' },
      image: '/hero/US_Divers_4.webp',
      thumb: '/hero/US_Divers_4.webp',
      textEffect: 'splash',
      accentClass: 'accent-yellow'
    },
    {
      id: 'slide-us-divers-5',
      tag: 'Underwater',
      accentWord: 'Submerge',
      headline: 'Submerge into the Quiet',
      subheadline: 'US Divers full-face masks and travel snorkels — what your reef-bound guests reach for first, and what they ask to take home.',
      ctaPrimary: { text: 'Shop US Divers', link: '/products', brand: 'us-divers' },
      ctaSecondary: { text: 'Visit US Divers', link: '/brand', brand: 'us-divers' },
      image: '/hero/US_divers_5.webp',
      thumb: '/hero/US_divers_5.webp',
      textEffect: 'splash',
      accentClass: 'accent-blue'
    },
    {
      id: 'slide-yukon-1',
      tag: 'Backcountry',
      accentWord: 'Solitude',
      headline: 'Where Solitude Has a Soundtrack of Snow',
      subheadline: "Yukon Charlie's snowshoes and trekking poles — built for the backcountry retailer whose customers actually use them.",
      ctaPrimary: { text: "Shop Yukon Charlie's", link: '/products', brand: 'yukon-charlies' },
      ctaSecondary: { text: "View Yukon Charlie's Catalog", link: '#catalogs', catalog: 'yukon-charlies' },
      image: '/hero/Yukon-1.jpg',
      thumb: '/hero/Yukon-1.jpg',
      textEffect: 'reveal',
      accentClass: 'accent-blue'
    },
    {
      id: 'slide-yukon-2',
      tag: 'Winter Adventure',
      accentWord: 'Vista',
      headline: 'Hike to the Vista. Stay for the Quiet.',
      subheadline: "Yukon Charlie's winter lineup — the snowshoe brand specialty shops keep restocking, season after season.",
      ctaPrimary: { text: "Shop Yukon Charlie's", link: '/products', brand: 'yukon-charlies' },
      ctaSecondary: { text: "View Yukon Charlie's Catalog", link: '#catalogs', catalog: 'yukon-charlies' },
      image: '/hero/Yukon_2.jpg',
      thumb: '/hero/Yukon_2.jpg',
      textEffect: 'reveal',
      accentClass: 'accent-green'
    }
  ],

  // Promos & Specials — grouped by outdoor / indoor
  promos: [
    {
      id: 'promo-trophy',
      brand: 'Trophy Music',
      brandId: 'trophy-music',
      image: '/brands/trophy_music/trophy_music_hero_3.png',
      logo: '',
      deals: [
        {
          title: '15% First Order for New Trophy Toy Customers',
          description: 'Get 15% off your first order! Minimum order of $250 required. New customers only. Reference NEWTOY for promotion to be applied.',
          spend: '$250+',
          discount: '15% off',
          dates: '02 14 2025 to 01 01 2028',
          badge: 'New Customers'
        },
        {
          title: 'April Promo',
          description: '15% OFF for new customers. 50% OFF #5002 LIGHT UP MA ROCK AS. Tiered FFA: $500+ \u2192 \u00bd FFA, $750+ \u2192 \u00be FFA, $1,000+ \u2192 FREE FFA. Code: APRIL26',
          spend: '$250+',
          discount: 'Up to Free FFA',
          dates: '04 01 2026 to 05 01 2026',
          badge: 'April Special'
        }
      ]
    },
    {
      id: 'promo-silver-circle',
      brand: 'Silver Circle',
      brandId: 'silver-circle',
      image: '/brands/silver_circle/silver_circle_hero_1.png',
      logo: '',
      deals: [
        {
          title: 'Special at 1,000 Order Level',
          description: 'Spend $1,000 or more and get 5% off order and FFA. Only valid in the continental US, shipments to one location. Credit card on file, net 30.',
          spend: '$1,000+',
          discount: '5% off + FFA',
          dates: '03 26 2026 to 04 30 2026',
          badge: ''
        },
        {
          title: 'Special at 2,500',
          description: 'Spend $2,500 or more and receive 10% off the entire order and FFA. Only valid in the 48 continental US, shipments to one location. Credit card on file, net 30.',
          spend: '$2,500+',
          discount: '10% off + FFA',
          dates: '03 26 2026 to 04 30 2026',
          badge: 'Best Value'
        }
      ]
    },
    {
      id: 'promo-ovvel',
      brand: 'Ovvel',
      brandId: 'ovvel',
      image: '/brands/ovvel/ovvel_hero_1.png',
      logo: '',
      deals: [
        {
          title: 'Free Freight on Orders Over $1,000',
          description: 'Free freight on all orders over $1,000. Long-term ongoing offer.',
          spend: '$1,000+',
          discount: 'Free Freight',
          dates: '05 16 2026 to 01 01 2029',
          badge: 'Ongoing'
        },
        {
          title: 'Promotional Free Freight on Orders Over $500',
          description: 'Limited time promotional free freight on orders of $500 or more.',
          spend: '$500+',
          discount: 'Free Freight',
          dates: '03 23 2026 to 05 15 2026',
          badge: 'Limited Time'
        }
      ]
    },
    {
      id: 'promo-masterpieces',
      brand: 'MasterPieces',
      brandId: 'masterpieces',
      image: '/brands/masterpieces/masterpieces_hero_4.png',
      logo: '/logos/masterpieces-logo.png',
      deals: [
        {
          title: '2026 April/May NEW ITEMS Promo',
          description: 'Free freight on any order with $500 in "new for 2026 item" purchases.',
          spend: '$500+',
          discount: 'Free Freight',
          dates: '04 06 2026 to 05 15 2026',
          badge: 'New Items'
        }
      ]
    },
    {
      id: 'promo-lionel',
      brand: 'Lionel',
      brandId: 'lionel',
      image: '/brands/lionel/lionel_hero_2.png',
      logo: '/logos/lionel.png',
      deals: [
        {
          title: 'FFA at $1,000',
          description: 'FFA at $1,000 for in-stock items. Back-ordered items do not count towards FFA. Inside the contiguous US only.',
          spend: '$1,000+',
          discount: 'Free Freight',
          dates: '01 01 2023 to 02 01 2028',
          badge: 'Ongoing'
        },
        {
          title: 'Credit Card Only — 3% Convenience Fee',
          description: 'All accounts must have a credit card on file. 3% credit card convenience fee applies.',
          spend: '$0',
          discount: 'Note',
          dates: '11 30 2023 to 06 30 2026',
          badge: ''
        }
      ]
    }
  ],

  // Promotional banners
  promoBanners: [
    {
      id: 'promo-signup',
      title: 'Interested in Our Products?',
      subtitle: 'Become one of our customers today and get access to wholesale pricing, exclusive deals, and a dedicated support team.',
      cta: 'Sign Up Today',
      link: 'https://toys2000.markettime.com/signup',
      bgColor: 'linear-gradient(135deg, #f15a24, #ff7a4d)',
      image: '/hero/Airhead-1.webp'
    },
    {
      id: 'promo-register',
      title: 'New Customer? Join the Family.',
      subtitle: 'Create your account today and get access to wholesale pricing, seasonal promos, and dedicated support.',
      cta: 'Register Today',
      bgColor: 'linear-gradient(135deg, #00aeef, #0077b6)',
      image: ''
    }
  ],

  // Manufacturer catalogs with logos and Flipsnack embeds
  catalogs: [
    {
      id: 'airhead',
      name: 'Airhead',
      logo: '/logos/Airhead-Primary-Logo-website.png',
      image: '/hero/Airhead-1.webp',
      catalogUrl: 'https://cdn.flipsnack.com/widget/v2/widget.html?hash=NzY2RDlCOTlFOEMrdjE5d2MxMTZyaA',
      description: 'Water sports towables, tubes, and accessories for every adventure.',
      year: '2026'
    },
    {
      id: 'sportsstuff',
      name: 'SportsStuff',
      logo: '/logos/sportsstuffcom.png',
      image: '/hero/Sportsstuff_3.webp',
      catalogUrl: 'https://cdn.flipsnack.com/widget/v2/widget.html?hash=NzY2RDlCOTlFOEMrdXBzNjVhYWppcQ',
      description: 'Premium towables, water sports gear, and outdoor recreation equipment.',
      year: '2026 27'
    },
    {
      id: 'yukon-charlies',
      name: "Yukon Charlie's",
      logo: '/logos/Yukon-Charlies_Primary-Logo_Stacked_Black-Blue.png',
      image: '/hero/Yukon_2.jpg',
      catalogUrl: 'https://cdn.flipsnack.com/widget/v2/widget.html?hash=NzY2RDlCOTlFOEMrN3huYTFra3Z4bg',
      description: 'Snowshoes, trekking poles, and winter outdoor equipment.',
      year: '2026 27'
    },
    {
      id: 'aqua-leisure',
      name: 'Aqua Leisure',
      logo: '/logos/aqua-leisure-vendor.png',
      image: '/hero/Aqua_Leisure-1.jpg',
      catalogUrl: 'https://cdn.flipsnack.com/widget/v2/widget.html?hash=NzY2RDlCOTlFOEMrdmhtNDgwYWppcQ',
      description: 'Pool floats, swim gear, and aquatic leisure products.',
      year: '2026'
    },
    {
      id: 'lionel',
      name: 'Lionel',
      logo: '/logos/lionel-vendor.png',
      image: '/hero/Lionel-2.jpg',
      catalogUrl: '',
      description: 'America\'s favorite model trains since 1900.',
      year: ''
    },
    {
      id: 'masterpieces',
      name: 'MasterPieces',
      logo: '/logos/masterpieces-logo.png',
      image: '/hero/Masterpiece_1.jpg',
      catalogUrl: '',
      description: 'Puzzles and games — an American puzzle company.',
      year: ''
    },
    {
      id: 'trophy-music',
      name: 'Trophy Music',
      logo: '/logos/trophy_music_co.png',
      image: '/brands/trophy_music/trophy_music_hero_3.png',
      catalogUrl: '',
      pdfUrl: '/catalogs/trophy_music_catalog_2025.pdf',
      description: 'Kid friendly musical instruments and music toys for gift shops and resorts.',
      year: '2025'
    },
    {
      id: 'silver-circle',
      name: 'Silver Circle',
      logo: '/logos/toys_by_nature.png',
      image: '/hero/Silver_Circle-1.webp',
      catalogUrl: '',
      pdfUrl: '/catalogs/silver_circle_catalog_2026.pdf',
      description: 'Educational nature toys and exploration kits for resorts.',
      year: '2026'
    },
    {
      id: '3d-toy-store',
      name: 'The 3D Toy Store',
      logo: '/logos/3d_toy_store.png',
      image: '/brands/3d_toy_store/the_3d_toy_store_hero_1.png',
      catalogUrl: '',
      pdfUrl: '/catalogs/3d_toy_store_catalog_2026.pdf',
      description: '3D printed and collectible toys for gift shops.',
      year: '2026'
    }
  ],

  brands: [
    {
      id: 'airhead',
      name: 'Airhead',
      tagline: 'Rule the Water',
      description: 'Premium towables, tubes, and water sports accessories.',
      category: 'towables',
      heroImage: '/brands/airhead/airhead_hero_1.png',
      images: ['/brands/airhead/airhead_hero_2.png', '/brands/airhead/airhead_hero_3.png', '/brands/airhead/airhead_hero_4.png', '/brands/airhead/airhead_hero_5.png', '/brands/airhead/airhead_hero_6.png'],
      logo: '/logos/Airhead-Primary-Logo-website.png',
      heroVideo: '/brand-videos/airhead.mp4',
      featured: true
    },
    {
      id: 'aqua-leisure',
      name: 'Aqua Leisure',
      tagline: 'Pool & Beach Essentials',
      description: 'Premium pool floats, loungers, and aquatic leisure products for resorts.',
      category: 'pool-floats',
      heroImage: '/brands/aqua_leisure/aqua_leisure_hero_1.png',
      images: ['/brands/aqua_leisure/aqua_leisure_hero_2.png', '/brands/aqua_leisure/aqua_leisure_hero_3.png', '/brands/aqua_leisure/aqua_leisure_hero_4.png', '/brands/aqua_leisure/aqua_leisure_hero_5.png', '/brands/aqua_leisure/aqua_leisure_hero_6.png'],
      logo: '/logos/aqua_leisure.png',
      heroVideo: '/brand-videos/aqua-leisure.mp4',
      featured: true
    },
    {
      id: 'water-sports',
      name: 'Water Sports LLC',
      tagline: 'Splash & Play',
      description: 'Water guns, splash toys, and pool party essentials.',
      category: 'water-sports',
      heroImage: '/brands/water_sports/water_sports_llc_hero_1.png',
      images: ['/brands/water_sports/water_sports_llc_hero_2.png', '/brands/water_sports/water_sports_llc_hero_3.png', '/brands/water_sports/water_sports_llc_hero_4.png', '/brands/water_sports/water_sports_llc_hero_5.png', '/brands/water_sports/water_sports_llc_hero_6.png'],
      logo: '/logos/water_sports.png',
      heroVideo: '/brand-videos/water-sports.mp4',
      featured: true
    },
    {
      id: 'boss-play',
      name: 'Boss Play',
      tagline: 'Outdoor Fun for Everyone',
      description: 'Splash pads, sprinklers, and outdoor play equipment for resorts.',
      category: 'outdoor-play',
      heroImage: '/brands/boss_play/boss_play_hero_1.png',
      images: ['/brands/boss_play/boss_play_hero_2.png', '/brands/boss_play/boss_play_hero_3.png', '/brands/boss_play/boss_play_hero_4.png', '/brands/boss_play/boss_play_hero_5.png', '/brands/boss_play/boss_play_hero_6.png'],
      logo: '/logos/boss_play.png',
      heroVideo: '/brand-videos/boss-play.mp4',
      featured: true
    },
    {
      id: 'lionel',
      name: 'Lionel',
      tagline: 'All Aboard Since 1900',
      description: 'America\'s favorite model trains and hobby sets.',
      category: 'trains',
      heroImage: '/brands/lionel/lionel_hero_1.png',
      images: ['/brands/lionel/lionel_hero_2.png', '/brands/lionel/lionel_hero_3.png', '/brands/lionel/lionel_hero_4.png', '/brands/lionel/lionel_hero_5.png', '/brands/lionel/lionel_hero_6.png'],
      logo: '/logos/lionel.png',
      heroVideo: '/brand-videos/lionel.mp4',
      featured: true
    },
    {
      id: 'masterpieces',
      name: 'MasterPieces',
      tagline: 'Challenge Your Mind',
      description: 'Jigsaw puzzles, brain teasers, and family games.',
      category: 'puzzles',
      heroImage: '/brands/masterpieces/masterpieces_hero_1.png',
      images: ['/brands/masterpieces/masterpieces_hero_2.png', '/brands/masterpieces/masterpieces_hero_3.png', '/brands/masterpieces/masterpieces_hero_4.png', '/brands/masterpieces/masterpieces_hero_5.png', '/brands/masterpieces/masterpieces_hero_6.png'],
      logo: '/logos/masterpieces-logo.png',
      heroVideo: '/brand-videos/masterpieces.mp4',
      featured: true
    },
    {
      id: 'sat1-sport',
      name: 'SAT1 Sport',
      tagline: 'Beach & Ball Sports',
      description: 'Beach volleyball, balls, and resort sports equipment.',
      category: 'beach-toys',
      heroImage: '/brands/SAT1_sport/sat1_sport_hero_1.png',
      images: ['/brands/SAT1_sport/sat1_sport_hero_2.png', '/brands/SAT1_sport/sat1_sport_hero_3.png', '/brands/SAT1_sport/sat1_sport_hero_4.png', '/brands/SAT1_sport/sat1_sport_hero_5.png', '/brands/SAT1_sport/sat1_sport_hero_6.png'],
      logo: '',
      featured: false
    },
    {
      id: 'aqua-divers',
      name: 'Aqua Divers',
      tagline: 'Dive Into Adventure',
      description: 'Snorkel gear, dive toys, and underwater exploration for resorts.',
      category: 'water-sports',
      heroImage: '/brands/aqua_divers/aqua_divers_hero_1.png',
      images: ['/brands/aqua_divers/aqua_divers_hero_2.png', '/brands/aqua_divers/aqua_divers_hero_3.png', '/brands/aqua_divers/aqua_divers_hero_4.png', '/brands/aqua_divers/aqua_divers_hero_5.png', '/brands/aqua_divers/aqua_divers_hero_6.png'],
      logo: '',
      featured: false
    },
    {
      id: '3d-toy-store',
      name: 'The 3D Toy Store',
      tagline: 'Imagination in 3D',
      description: '3D printed and collectible toys for gift shops.',
      category: 'outdoor-play',
      heroImage: '/brands/3d_toy_store/the_3d_toy_store_hero_1.png',
      images: ['/brands/3d_toy_store/the_3d_toy_store_hero_2.png', '/brands/3d_toy_store/the_3d_toy_store_hero_3.png', '/brands/3d_toy_store/the_3d_toy_store_hero_4.png', '/brands/3d_toy_store/the_3d_toy_toy_store_hero_5.png', '/brands/3d_toy_store/the_3d_toy_store_hero_6.png'],
      logo: '/logos/trophy_music_co.png',
      featured: false
    },
    {
      id: 'ovvel',
      name: 'Ovvel',
      tagline: 'Beach Life',
      description: 'Beach toys, sand toys, and outdoor play essentials.',
      category: 'beach-toys',
      heroImage: '/brands/ovvel/ovvel_hero_1.png',
      images: ['/brands/ovvel/ovvel_hero_2.png', '/brands/ovvel/ovvel_hero_3.png', '/brands/ovvel/ovvel_hero_4.png', '/brands/ovvel/ovvel_hero_5.png', '/brands/ovvel/ovvel_hero_6.png'],
      logo: '/logos/ovvel.png',
      heroVideo: '/brand-videos/ovvel.mp4',
      featured: false
    },
    {
      id: 'rico-italia',
      name: 'Rico Italia',
      tagline: 'Sports & Fun',
      description: 'Imported sports toys and Italian-style fun.',
      category: 'outdoor-play',
      heroImage: '/brands/rico_italia/rico_italia_hero_1.png',
      images: ['/brands/rico_italia/rico_italia_hero_2.png', '/brands/rico_italia/rico_italia_hero_3.png', '/brands/rico_italia/rico_italia_hero_4.png', '/brands/rico_italia/rico_italia_hero_5.png', '/brands/rico_italia/rico_italia_hero_6.png'],
      logo: '/logos/rico_italia.png',
      featured: false
    },
    {
      id: 'silver-circle',
      name: 'Silver Circle',
      tagline: 'Explore & Discover',
      description: 'Educational nature toys and exploration kits for resorts.',
      category: 'outdoor-play',
      heroImage: '/brands/silver_circle/silver_circle_hero_6.png',
      images: ['/brands/silver_circle/silver_circle_hero_2.png', '/brands/silver_circle/silver_circle_hero_3.png', '/brands/silver_circle/silver_circle_hero_4.png', '/brands/silver_circle/silver_circle_hero_5.png', '/brands/silver_circle/silver_circle_hero_6.png'],
      logo: '/logos/toys_by_nature.png',
      heroVideo: '/brand-videos/silver-circle.mp4',
      featured: false
    },
    {
      id: 'trophy-music',
      name: 'Trophy Music',
      tagline: 'Make Some Noise',
      description: 'Kid-friendly musical instruments and music toys.',
      category: 'music',
      heroImage: '/brands/trophy_music/trophy_music_hero_6.png',
      images: ['/brands/trophy_music/trophy_music_hero_2.png', '/brands/trophy_music/trophy_music_hero_3.png', '/brands/trophy_music/trophy_music_hero_4.png', '/brands/trophy_music/trophy_music_hero_5.png', '/brands/trophy_music/trophy_music_hero_6.png'],
      logo: '/logos/3d_toy_store.png',
      heroVideo: '/brand-videos/trophy-music.mp4',
      featured: false
    },
    {
      id: 'sportsstuff',
      name: 'SportsStuff',
      tagline: 'Gear Up for Fun',
      description: 'Premium towables, water sports gear, and outdoor recreation equipment.',
      category: 'towables',
      heroImage: '/brands/airhead/airhead_hero_5.png',
      images: ['/brands/airhead/airhead_hero_3.png', '/brands/airhead/airhead_hero_4.png'],
      logo: '/logos/sportsstuff.png',
      heroVideo: '/brand-videos/sportsstuff.mp4',
      featured: false
    },
    {
      id: 'us-divers',
      name: 'US Divers',
      tagline: 'Dive In',
      description: 'Snorkel and dive gear for resorts and water sports retailers.',
      category: 'water-sports',
      heroImage: '/brands/aqua_divers/aqua_divers_hero_1.png',
      images: ['/brands/aqua_divers/aqua_divers_hero_2.png', '/brands/aqua_divers/aqua_divers_hero_3.png', '/brands/aqua_divers/aqua_divers_hero_4.png'],
      logo: '/logos/us_divers.png',
      featured: false
    },
    {
      id: 'yukon-charlies',
      name: "Yukon Charlie's",
      tagline: 'Winter Adventure',
      description: 'Snowshoes, winter gear, and cold weather outdoor equipment.',
      category: 'outdoor-play',
      heroImage: '/brands/ovvel/ovvel_hero_6.png',
      images: [],
      logo: '/logos/Yukon-Charlies_Primary-Logo_Stacked_Black-Blue.png',
      heroVideo: '/brand-videos/yukon-charlies.mp4',
      featured: false
    }
  ],

  products: {
    'airhead': [
      { id: 'p1', name: 'Mega Towable 4 Person', price: 289.00, image: '/brands/airhead/airhead_hero_3.png', desc: 'High capacity 4 person towable tube for resort fleets.', category: 'towables', badge: 'Best Seller' },
      { id: 'p2', name: 'Blast Tube 2 Rider', price: 149.00, image: '/brands/airhead/airhead_hero_4.png', desc: 'Fast and fun 2 person towable tube.', category: 'towables', badge: '' },
      { id: 'p3', name: 'Reef Rider Snorkel Set', price: 45.00, image: '/brands/airhead/airhead_hero_5.png', desc: 'Complete snorkel set for resort guests.', category: 'water-sports', badge: 'Best Seller' }
    ],
    'aqua-leisure': [
      { id: 'p4', name: 'Tropical Flamingo Float', price: 45.00, image: '/brands/aqua_leisure/aqua_leisure_hero_2.png', desc: 'Premium giant flamingo pool float, perfect for resorts.', category: 'pool-floats', badge: 'Best Seller' },
      { id: 'p5', name: 'Monstera Leaf Lounger', price: 59.00, image: '/brands/aqua_leisure/aqua_leisure_hero_3.png', desc: 'Tropical leaf shaped luxury pool lounger.', category: 'pool-floats', badge: 'Best Seller' },
      { id: 'p6', name: 'Resort Drink Float Set', price: 24.99, image: '/brands/aqua_leisure/aqua_leisure_hero_4.png', desc: 'Set of 6 floating drink holders in tropical styles.', category: 'pool-floats', badge: '' }
    ],
    'lionel': [
      { id: 'p7', name: 'Polar Express Train Set', price: 399.00, image: '/brands/lionel/lionel_hero_2.png', desc: 'Ready to run Polar Express O Gauge train set.', category: 'trains', badge: 'Popular' },
      { id: 'p8', name: 'Pennsylvania Flyer Set', price: 249.00, image: '/brands/lionel/lionel_hero_3.png', desc: 'Classic steam locomotive freight set.', category: 'trains', badge: '' }
    ],
    'masterpieces': [
      { id: 'p9', name: 'National Parks 1000pc', price: 24.99, image: '/brands/masterpieces/masterpieces_hero_2.png', desc: 'Beautiful national parks puzzle collection.', category: 'puzzles', badge: '' },
      { id: 'p10', name: 'Family Game Night Bundle', price: 49.99, image: '/brands/masterpieces/masterpieces_hero_4.png', desc: 'Bundle of 3 family friendly board games.', category: 'puzzles', badge: 'Best Seller' }
    ],
    'boss-play': [
      { id: 'p11', name: 'Resort Splash Pad Kit', price: 189.00, image: '/brands/boss_play/boss_play_hero_2.png', desc: 'Portable splash pad perfect for resort pools.', category: 'outdoor-play', badge: 'Best Seller' },
      { id: 'p12', name: 'Kids Water Blaster Set', price: 34.99, image: '/brands/boss_play/boss_play_hero_4.png', desc: 'Set of 6 colorful water blasters.', category: 'water-sports', badge: '' }
    ],
    'water-sports': [
      { id: 'p13', name: 'Pool Party Pack', price: 79.99, image: '/brands/water_sports/water_sports_llc_hero_2.png', desc: 'Complete pool party set with water guns and toys.', category: 'water-sports', badge: 'Popular' },
      { id: 'p14', name: 'Mega Water Cannon', price: 29.99, image: '/brands/water_sports/water_sports_llc_hero_4.png', desc: 'High-powered water cannon for pool fun.', category: 'water-sports', badge: '' }
    ]
  },

  getFeaturedProducts() {
    const featured = [];
    for (const [brandId, products] of Object.entries(this.products)) {
      const brand = this.brands.find(b => b.id === brandId);
      products.forEach(p => {
        if (p.badge) {
          featured.push({ ...p, brandName: brand?.name || brandId, brandId });
        }
      });
    }
    return featured;
  },

  getAllProducts() {
    const all = [];
    for (const [brandId, products] of Object.entries(this.products)) {
      const brand = this.brands.find(b => b.id === brandId);
      products.forEach(p => {
        all.push({ ...p, brandName: brand?.name || brandId, brandId });
      });
    }
    return all;
  }
};
