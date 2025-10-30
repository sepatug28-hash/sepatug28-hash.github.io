export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  features: string[];
  dimensions: {
    width: string;
    depth: string;
    height: string;
  };
  inStock: boolean;
  material: string;
  care: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Modern Sofa",
    price: 899,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    category: "Living Room",
    description: "Experience ultimate comfort with our modern minimalist sofa. Crafted with premium materials and Scandinavian design principles, this piece combines style and functionality perfectly for your living space.",
    features: [
      "Premium fabric upholstery",
      "Solid wood frame construction",
      "High-density foam cushions",
      "Easy to clean and maintain",
      "5-year manufacturer warranty"
    ],
    dimensions: {
      width: "220cm",
      depth: "90cm",
      height: "85cm"
    },
    material: "Fabric & Solid Wood",
    care: "Clean with a soft, damp cloth. Avoid harsh chemicals. For deeper cleaning, use appropriate upholstery cleaner. Keep away from direct sunlight to prevent fading.",
    inStock: true
  },
  {
    id: "2",
    name: "Coffee Table",
    price: 329,
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80",
    category: "Living Room",
    description: "A sleek and functional coffee table that serves as the perfect centerpiece for your living room. Features a minimalist design with ample surface space for your daily needs.",
    features: [
      "Solid oak wood construction",
      "Scratch-resistant surface",
      "Lower shelf for storage",
      "Easy assembly required",
      "2-year warranty"
    ],
    dimensions: {
      width: "120cm",
      depth: "60cm",
      height: "45cm"
    },
    material: "Oak Wood",
    care: "Wipe with a dry or slightly damp cloth. Use wood polish occasionally to maintain shine. Avoid placing hot items directly on the surface.",
    inStock: true
  },
  {
    id: "3",
    name: "Accent Chair",
    price: 549,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
    category: "Living Room",
    description: "Add a touch of elegance to any room with this beautifully designed accent chair. Perfect for reading corners or as additional seating in your living space.",
    features: [
      "Ergonomic design for comfort",
      "Velvet upholstery",
      "Sturdy metal legs",
      "Weight capacity: 120kg",
      "Available in multiple colors"
    ],
    dimensions: {
      width: "75cm",
      depth: "80cm",
      height: "90cm"
    },
    material: "Velvet & Metal",
    care: "Vacuum regularly to remove dust. Spot clean with mild detergent. Professional cleaning recommended for deep stains.",
    inStock: true
  },
  {
    id: "4",
    name: "TV Stand",
    price: 429,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    category: "Living Room",
    description: "Modern TV stand with clean lines and ample storage. Features cable management system and adjustable shelves for your entertainment needs.",
    features: [
      "Supports TVs up to 65 inches",
      "Cable management system",
      "Adjustable shelving",
      "Tempered glass doors",
      "3-year warranty"
    ],
    dimensions: {
      width: "180cm",
      depth: "45cm",
      height: "55cm"
    },
    material: "MDF & Tempered Glass",
    care: "Wipe with a soft, dry cloth. Use glass cleaner for the doors. Avoid excessive weight on shelves.",
    inStock: true
  },
  {
    id: "5",
    name: "Floor Lamp",
    price: 199,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
    category: "Living Room",
    description: "Elegant floor lamp with adjustable height and brightness. Perfect for creating ambient lighting in any corner of your home.",
    features: [
      "LED bulb included",
      "Dimmable light",
      "Adjustable height",
      "Weighted base for stability",
      "Energy efficient"
    ],
    dimensions: {
      width: "30cm",
      depth: "30cm",
      height: "160cm"
    },
    material: "Metal & Fabric Shade",
    care: "Turn off power before cleaning. Wipe with a dry cloth. Replace bulb as needed with recommended wattage.",
    inStock: true
  },
  {
    id: "6",
    name: "Minimalist Bed Frame",
    price: 749,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    category: "Bedroom",
    description: "Sleep in style with our minimalist bed frame. Designed for comfort and durability, featuring a low-profile design that complements any bedroom aesthetic.",
    features: [
      "Queen size (160x200cm)",
      "Solid pine wood construction",
      "No box spring required",
      "Under-bed storage space",
      "5-year structural warranty"
    ],
    dimensions: {
      width: "170cm",
      depth: "210cm",
      height: "35cm"
    },
    material: "Pine Wood",
    care: "Wipe with a damp cloth. Check and tighten bolts periodically. Avoid jumping on the bed.",
    inStock: true
  },
  {
    id: "7",
    name: "Wardrobe",
    price: 1099,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
    category: "Bedroom",
    description: "Spacious wardrobe with multiple compartments and hanging space. Features soft-close doors and elegant design that maximizes your storage needs.",
    features: [
      "3-door design",
      "Soft-close hinges",
      "Adjustable shelves",
      "Full-length mirror",
      "Anti-tip hardware included"
    ],
    dimensions: {
      width: "180cm",
      depth: "60cm",
      height: "220cm"
    },
    material: "MDF & Mirror",
    care: "Clean with a soft cloth. Use glass cleaner for mirror. Ensure proper anchoring to wall for safety.",
    inStock: true
  },
  {
    id: "8",
    name: "Nightstand",
    price: 249,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
    category: "Bedroom",
    description: "Compact nightstand with two drawers for bedside storage. Features smooth-gliding drawers and a timeless design that fits any bedroom style.",
    features: [
      "2 spacious drawers",
      "Smooth metal glides",
      "Solid wood construction",
      "Easy assembly",
      "Matches other bedroom furniture"
    ],
    dimensions: {
      width: "45cm",
      depth: "40cm",
      height: "55cm"
    },
    material: "Solid Wood",
    care: "Dust regularly with a soft cloth. Use wood cleaner for deeper cleaning. Avoid overloading drawers.",
    inStock: true
  },
  {
    id: "9",
    name: "Dresser with Mirror",
    price: 899,
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
    category: "Bedroom",
    description: "Classic dresser with attached mirror and six spacious drawers. Perfect for organizing clothes and accessories while adding elegance to your bedroom.",
    features: [
      "6 large drawers",
      "Full-length mirror",
      "Dovetail drawer construction",
      "Felt-lined top drawer",
      "Anti-tip hardware"
    ],
    dimensions: {
      width: "150cm",
      depth: "50cm",
      height: "180cm"
    },
    material: "Oak Wood & Mirror",
    care: "Clean wood with furniture polish. Use glass cleaner for mirror. Secure to wall with anti-tip hardware.",
    inStock: true
  },
  {
    id: "10",
    name: "Bedside Table Lamp",
    price: 129,
    image: "https://images.unsplash.com/photo-1543198126-a8ad8e47a917?w=800&q=80",
    category: "Bedroom",
    description: "Stylish bedside lamp with warm lighting perfect for reading. Features touch control and USB charging port for convenience.",
    features: [
      "Touch control dimmer",
      "USB charging port",
      "LED bulb included",
      "Fabric shade",
      "Compact design"
    ],
    dimensions: {
      width: "25cm",
      depth: "25cm",
      height: "45cm"
    },
    material: "Ceramic & Fabric",
    care: "Unplug before cleaning. Wipe base with damp cloth. Dust shade gently. Replace bulb as needed.",
    inStock: true
  },
  {
    id: "11",
    name: "Kitchen Cabinet",
    price: 899,
    image: "https://images.unsplash.com/photo-1556228994-330c5b0e9bdf?w=800&q=80",
    category: "Kitchen",
    description: "Modern kitchen cabinet with ample storage space. Features soft-close doors and adjustable shelving for all your kitchen essentials.",
    features: [
      "Soft-close door system",
      "Adjustable shelves",
      "Water-resistant finish",
      "Easy to install",
      "Modern matte finish"
    ],
    dimensions: {
      width: "80cm",
      depth: "60cm",
      height: "90cm"
    },
    material: "MDF & Melamine",
    care: "Clean with mild soap and water. Avoid harsh chemicals. Wipe spills immediately to prevent damage.",
    inStock: true
  },
  {
    id: "12",
    name: "Kitchen Island",
    price: 1299,
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    category: "Kitchen",
    description: "Versatile kitchen island with spacious countertop and storage drawers. Perfect for meal prep, dining, and entertaining guests.",
    features: [
      "Large work surface",
      "4 storage drawers",
      "Towel rack on side",
      "Butcher block top",
      "Locking caster wheels"
    ],
    dimensions: {
      width: "120cm",
      depth: "60cm",
      height: "90cm"
    },
    material: "Wood & Butcher Block",
    care: "Oil butcher block regularly. Clean with mild soap. Avoid cutting directly on surface without cutting board.",
    inStock: true
  },
  {
    id: "13",
    name: "Bar Stools Set",
    price: 399,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    category: "Kitchen",
    description: "Set of 2 modern bar stools with comfortable padding and footrest. Adjustable height makes them perfect for kitchen islands and bars.",
    features: [
      "Set of 2 stools",
      "Adjustable height",
      "360-degree swivel",
      "Padded seat",
      "Chrome-plated base"
    ],
    dimensions: {
      width: "40cm",
      depth: "40cm",
      height: "60-80cm (adjustable)"
    },
    material: "PU Leather & Chrome",
    care: "Wipe with damp cloth. Avoid harsh cleaners. Check and tighten screws periodically.",
    inStock: true
  },
  {
    id: "14",
    name: "Pantry Shelf",
    price: 349,
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80",
    category: "Kitchen",
    description: "Multi-tier pantry shelf for organizing your kitchen essentials. Open design allows easy access and visibility of all stored items.",
    features: [
      "5 adjustable shelves",
      "Open design",
      "Easy assembly",
      "Sturdy metal construction",
      "Holds up to 50kg per shelf"
    ],
    dimensions: {
      width: "90cm",
      depth: "40cm",
      height: "180cm"
    },
    material: "Metal",
    care: "Wipe with damp cloth. Distribute weight evenly. Check stability periodically.",
    inStock: true
  },
  {
    id: "15",
    name: "Kitchen Cart",
    price: 279,
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
    category: "Kitchen",
    description: "Mobile kitchen cart with multiple storage options. Perfect for small kitchens, featuring wheels for easy mobility and a solid work surface.",
    features: [
      "Rolling wheels with locks",
      "2 drawers + 1 cabinet",
      "Towel bar",
      "Spice rack",
      "Compact design"
    ],
    dimensions: {
      width: "65cm",
      depth: "45cm",
      height: "85cm"
    },
    material: "Wood & Metal",
    care: "Clean with mild detergent. Lock wheels when stationary. Avoid overloading.",
    inStock: true
  },
  {
    id: "16",
    name: "Dining Table Set",
    price: 1299,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
    category: "Dining",
    description: "Complete dining set with table and 6 chairs. Modern design with comfortable seating for family gatherings and dinner parties.",
    features: [
      "Seats 6 people",
      "Solid wood construction",
      "Padded chairs",
      "Scratch-resistant table top",
      "Easy to clean surface"
    ],
    dimensions: {
      width: "180cm",
      depth: "90cm",
      height: "75cm"
    },
    material: "Solid Wood",
    care: "Use coasters and placemats. Clean spills immediately. Polish wood occasionally.",
    inStock: true
  },
  {
    id: "17",
    name: "Dining Chairs Set of 4",
    price: 699,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80",
    category: "Dining",
    description: "Set of 4 elegant dining chairs with ergonomic design. Features comfortable padding and sturdy construction for daily use.",
    features: [
      "Set of 4 chairs",
      "Ergonomic backrest",
      "High-density foam padding",
      "Easy-clean upholstery",
      "Supports up to 150kg each"
    ],
    dimensions: {
      width: "45cm",
      depth: "55cm",
      height: "95cm"
    },
    material: "Wood & Fabric",
    care: "Vacuum upholstery regularly. Spot clean stains. Check leg screws periodically.",
    inStock: true
  },
  {
    id: "18",
    name: "Extendable Dining Table",
    price: 1499,
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=800&q=80",
    category: "Dining",
    description: "Versatile extendable dining table that adjusts to your needs. Perfect for intimate dinners and large gatherings alike.",
    features: [
      "Extends from 160cm to 220cm",
      "Self-storing leaf",
      "Solid oak construction",
      "Seats 6-10 people",
      "Smooth extension mechanism"
    ],
    dimensions: {
      width: "160-220cm (extended)",
      depth: "90cm",
      height: "75cm"
    },
    material: "Oak Wood",
    care: "Clean with wood cleaner. Extend table periodically to maintain mechanism. Use table pads for hot dishes.",
    inStock: true
  },
  {
    id: "19",
    name: "Sideboard Cabinet",
    price: 849,
    image: "https://images.unsplash.com/photo-1595514535102-4b7f5e85f2fd?w=800&q=80",
    category: "Dining",
    description: "Stylish sideboard cabinet for dining room storage. Features multiple compartments and a sleek design that complements any decor.",
    features: [
      "3 cabinets + 3 drawers",
      "Soft-close doors",
      "Adjustable shelving",
      "Ample storage space",
      "Anti-tip hardware"
    ],
    dimensions: {
      width: "160cm",
      depth: "45cm",
      height: "85cm"
    },
    material: "MDF & Wood Veneer",
    care: "Dust regularly. Clean with wood-safe cleaner. Secure to wall for safety.",
    inStock: true
  },
  {
    id: "20",
    name: "Dining Bench",
    price: 399,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    category: "Dining",
    description: "Versatile dining bench that provides flexible seating. Perfect for families and can be tucked under the table when not in use.",
    features: [
      "Seats 3 people",
      "Solid wood construction",
      "Padded cushion",
      "Space-saving design",
      "Matches dining sets"
    ],
    dimensions: {
      width: "140cm",
      depth: "40cm",
      height: "45cm"
    },
    material: "Wood & Fabric",
    care: "Vacuum cushion regularly. Spot clean fabric. Check stability of legs.",
    inStock: true
  },
  {
    id: "21",
    name: "Bookshelf",
    price: 299,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80",
    category: "Storage",
    description: "Classic bookshelf with 5 spacious shelves. Perfect for organizing books, decorative items, and storage boxes in any room.",
    features: [
      "5 fixed shelves",
      "Solid construction",
      "Easy assembly",
      "Anti-tip hardware",
      "Holds books and decor"
    ],
    dimensions: {
      width: "80cm",
      depth: "30cm",
      height: "180cm"
    },
    material: "MDF",
    care: "Dust regularly. Distribute weight evenly. Secure to wall with provided hardware.",
    inStock: true
  },
  {
    id: "22",
    name: "Storage Cabinet",
    price: 549,
    image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&q=80",
    category: "Storage",
    description: "Versatile storage cabinet with doors and shelves. Ideal for keeping items organized and out of sight in any room.",
    features: [
      "2 doors with shelves",
      "Magnetic door closures",
      "Adjustable shelving",
      "Modern design",
      "Multiple color options"
    ],
    dimensions: {
      width: "90cm",
      depth: "40cm",
      height: "120cm"
    },
    material: "MDF",
    care: "Wipe with damp cloth. Avoid overloading shelves. Keep doors closed when not in use.",
    inStock: true
  },
  {
    id: "23",
    name: "Wall Shelving Unit",
    price: 379,
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&q=80",
    category: "Storage",
    description: "Modern wall-mounted shelving unit that saves floor space. Perfect for displaying books, plants, and decorative items.",
    features: [
      "Wall-mounted design",
      "4 shelves",
      "Floating appearance",
      "Easy installation",
      "Space-saving solution"
    ],
    dimensions: {
      width: "120cm",
      depth: "25cm",
      height: "100cm"
    },
    material: "MDF & Metal Brackets",
    care: "Dust regularly. Ensure proper wall mounting. Check mounting screws periodically.",
    inStock: true
  },
  {
    id: "24",
    name: "Cube Storage Organizer",
    price: 229,
    image: "https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?w=800&q=80",
    category: "Storage",
    description: "Modular cube storage organizer perfect for closets and rooms. Can be customized with bins and baskets for versatile organization.",
    features: [
      "9-cube design",
      "Can use with bins",
      "Easy assembly",
      "Versatile placement",
      "Lightweight yet sturdy"
    ],
    dimensions: {
      width: "105cm",
      depth: "30cm",
      height: "105cm"
    },
    material: "Laminated MDF",
    care: "Wipe with damp cloth. Avoid excessive weight in individual cubes. Use storage bins for best organization.",
    inStock: true
  },
  {
    id: "25",
    name: "Display Cabinet",
    price: 679,
    image: "https://images.unsplash.com/photo-1565891741441-64926e441838?w=800&q=80",
    category: "Storage",
    description: "Elegant display cabinet with glass doors to showcase your treasured items. Features LED lighting and adjustable shelves.",
    features: [
      "Glass panel doors",
      "LED lighting included",
      "3 adjustable shelves",
      "Locking doors",
      "Mirror back panel"
    ],
    dimensions: {
      width: "90cm",
      depth: "40cm",
      height: "180cm"
    },
    material: "Glass & Wood",
    care: "Clean glass with glass cleaner. Dust interior regularly. Handle glass carefully during cleaning.",
    inStock: true
  },
  {
    id: "26",
    name: "Office Chair",
    price: 449,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80",
    category: "Office",
    description: "Ergonomic office chair designed for all-day comfort. Features adjustable height, lumbar support, and breathable mesh back.",
    features: [
      "Ergonomic design",
      "Adjustable lumbar support",
      "Breathable mesh back",
      "360-degree swivel",
      "Tilt and height adjustment"
    ],
    dimensions: {
      width: "65cm",
      depth: "65cm",
      height: "110-120cm (adjustable)"
    },
    material: "Mesh & Metal",
    care: "Vacuum mesh periodically. Adjust settings for comfort. Check and tighten screws as needed.",
    inStock: true
  },
  {
    id: "27",
    name: "Standing Desk",
    price: 799,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
    category: "Office",
    description: "Electric height-adjustable standing desk for healthier work habits. Switch between sitting and standing with a button press.",
    features: [
      "Electric height adjustment",
      "Memory presets",
      "Spacious work surface",
      "Cable management",
      "Anti-collision technology"
    ],
    dimensions: {
      width: "140cm",
      depth: "70cm",
      height: "70-120cm (adjustable)"
    },
    material: "MDF & Steel Frame",
    care: "Wipe surface with damp cloth. Test height adjustment monthly. Keep cables organized.",
    inStock: true
  },
  {
    id: "28",
    name: "Filing Cabinet",
    price: 329,
    image: "https://images.unsplash.com/photo-1600493572608-697490a1f48c?w=800&q=80",
    category: "Office",
    description: "Secure filing cabinet with lock for important documents. Features smooth-gliding drawers and compact design.",
    features: [
      "3 drawers",
      "Locking system",
      "Full extension slides",
      "Letter/legal size",
      "Anti-tip mechanism"
    ],
    dimensions: {
      width: "45cm",
      depth: "55cm",
      height: "100cm"
    },
    material: "Metal",
    care: "Clean with damp cloth. Lubricate drawer slides annually. Keep locked when not in use.",
    inStock: true
  },
  {
    id: "29",
    name: "Desk Organizer",
    price: 89,
    image: "https://images.unsplash.com/photo-1584438689866-e27c936bbf91?w=800&q=80",
    category: "Office",
    description: "Multi-compartment desk organizer to keep your workspace tidy. Features slots for pens, papers, and office supplies.",
    features: [
      "Multiple compartments",
      "Pen/pencil holders",
      "Document tray",
      "Compact footprint",
      "Modern design"
    ],
    dimensions: {
      width: "30cm",
      depth: "20cm",
      height: "12cm"
    },
    material: "Bamboo",
    care: "Wipe with dry cloth. Avoid water exposure. Keep items organized for best use.",
    inStock: true
  },
  {
    id: "30",
    name: "Office Bookcase",
    price: 599,
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80",
    category: "Office",
    description: "Professional bookcase with 5 shelves perfect for office files, books, and decorative items. Features a timeless design.",
    features: [
      "5 adjustable shelves",
      "Solid wood construction",
      "Large capacity",
      "Easy assembly",
      "Professional appearance"
    ],
    dimensions: {
      width: "100cm",
      depth: "35cm",
      height: "200cm"
    },
    material: "Solid Wood",
    care: "Dust regularly. Secure to wall with anti-tip hardware. Distribute weight evenly across shelves.",
    inStock: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return products;
  return products.filter(product => 
    product.category.toLowerCase().replace(" ", "-") === category.toLowerCase()
  );
};
