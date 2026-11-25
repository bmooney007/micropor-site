// Product data (expandable)
const products = [
  // Drivers / Armor Skin
  {
    slug: "glo-2136bk",
    title: "#2136BK ARMOR SKIN Hawk Slip On Style Gloves",
    price: "8.88",
    listPrice: "14.99",
    code: "GLO-2136BK",
    category: "drivers",
    description: "ARMOR SKIN Hawk Slip On Driver Style Synthetic Gloves are tougher than leather and pound for pound the toughest synthetic glove material available. Armor Skin test results proved that it is more wear and abrasion resistant than both pigskin and cowhide."
  },
  {
    slug: "glo-2136bkf",
    title: "#2136BKF ARMOR SKIN Hawk Slip On Style Gloves w/ Fleece liner",
    price: "8.88",
    listPrice: "19.99",
    code: "GLO-2136BKF",
    category: "cold-weather",
    description: "Winter Lined Armor Skin™ Mechanics Glove with Fleece Lining. Armor Skin™ Synthetic Leather. Fleece lined. Stretch back. Color: Black."
  },
  {
    slug: "glo-2139bk",
    title: "#2139BK ARMOR SKIN Hawk Mechanic Style Glove double palm",
    price: "10.60",
    listPrice: "17.99",
    code: "GLO-2139BK",
    category: "mechanics",
    description: "Armor Skin Hawk Tough Synthetic Leather with specially designed palm. PVC reinforced double padded palm and fingertips."
  },
  {
    slug: "glo-2123",
    title: "2123 Majestic Mechanics Glove Knuckle Head Style w/ TPU Guard",
    price: "22.98",
    listPrice: "29.99",
    code: "GLO-2123",
    category: "mechanics",
    description: "Majestic 2123 Knuckle Head Mechanic Style Glove with reversed cowhide palm and TPU knuckle guard."
  },
  // Coated
  {
    slug: "glo-012-9-928",
    title: "Ansell Chemical Resistant Gloves- Black",
    price: "14.99",
    listPrice: "18.99",
    code: "GLO-012-9-928",
    category: "coated",
    description: "Neoprene Coated. Cotton lining enhances puncture and snag resistance. Curved fingers and wing thumb."
  },
  {
    slug: "glo-f4630g",
    title: "Grip Nitrile Micro Foam Coated Gloves",
    price: "3.25",
    listPrice: "5.99",
    code: "GLO-F4630G",
    category: "coated",
    description: "Nitrile micro foam coated gloves for excellent grip."
  },
  // Coated Seamless
  {
    slug: "glo-34-8745",
    title: "G-Tek MaxiFlex Ultimate Seamless Coated Gloves",
    price: "5.89",
    listPrice: "8.99",
    code: "GLO-34-8745",
    category: "coated-seamless",
    description: "Seamless knit with nitrile micro foam coating. Excellent dexterity and grip."
  },
  {
    slug: "glo-34-874",
    title: "G-Tek MaxiFlex Plus Fit Feel Gloves",
    price: "6.49",
    listPrice: "9.49",
    code: "GLO-34-874",
    category: "coated-seamless",
    description: "Seamless construction with foam nitrile coating."
  },
  // Cut Resistant
  {
    slug: "glo-33-g115",
    title: "G-Tek Cut Resistant Seamless Gloves",
    price: "7.25",
    listPrice: "10.99",
    code: "GLO-33-G115",
    category: "cut-resistant",
    description: "High performance cut resistant seamless gloves."
  },
  {
    slug: "glo-068-nk803es",
    title: "Cut Resistant Work Gloves",
    price: "8.15",
    listPrice: "12.50",
    code: "GLO-068-NK803ES",
    category: "cut-resistant",
    description: "Durable cut resistant gloves for industrial use."
  },
  // Disposable
  {
    slug: "glo-nbgppfg",
    title: "Nitrile Disposable Gloves - Powder Free",
    price: "8.99",
    listPrice: "12.99",
    code: "GLO-NBGPPFG",
    category: "disposable",
    description: "Powder free nitrile disposable gloves. Box of 100."
  },
  {
    slug: "glo-2015w",
    title: "White Disposable Nitrile Gloves",
    price: "7.49",
    listPrice: "11.50",
    code: "GLO-2015W",
    category: "disposable",
    description: "White powder free nitrile gloves."
  },
  // Welding
  {
    slug: "glo-4700",
    title: "Welding Gloves - Leather",
    price: "18.75",
    listPrice: "24.99",
    code: "GLO-4700",
    category: "welding",
    description: "Heavy duty leather welding gloves."
  },
  {
    slug: "glo-6004",
    title: "Welding Gauntlet Gloves",
    price: "22.50",
    listPrice: "29.99",
    code: "GLO-6004",
    category: "welding",
    description: "Gauntlet style welding gloves with reinforced palm."
  },
  // Work & Utility
  {
    slug: "glo-0914",
    title: "General Purpose Work Gloves",
    price: "4.25",
    listPrice: "6.99",
    code: "GLO-0914",
    category: "work-utility",
    description: "Durable general purpose work gloves."
  },
  {
    slug: "glo-2970",
    title: "Utility Leather Palm Gloves",
    price: "6.88",
    listPrice: "9.99",
    code: "GLO-2970",
    category: "work-utility",
    description: "Leather palm utility gloves for general work."
  },
  // Accessories
  {
    slug: "glo-access-1",
    title: "Glove Clip Holder",
    price: "2.49",
    listPrice: "3.99",
    code: "GLO-ACCESS-1",
    category: "accessories",
    description: "Convenient clip to hold gloves."
  },
  {
    slug: "glo-access-2",
    title: "Glove Liners - Pair",
    price: "3.75",
    listPrice: "5.50",
    code: "GLO-ACCESS-2",
    category: "accessories",
    description: "Cotton glove liners for added comfort."
  },
  // Other existing products
  {
    slug: "certkit3",
    title: "CERTKIT3 Deluxe Backpack CERT Kit",
    price: "50.48",
    listPrice: "80.99",
    code: "CERTKIT3",
    category: "cert-kits",
    description: "Deluxe backpack CERT kit with multiple compartments."
  },
  {
    slug: "res-6000",
    title: "3M Half Mask Reusable Respirator 6000 series",
    price: "20.15",
    listPrice: "28.99",
    code: "RES-6000",
    category: "respirators",
    description: "3M 6000 Series Half Facepiece Reusable Respirator."
  },
  {
    slug: "res-7500",
    title: "3M 7500 Series Half Facepiece Respirator",
    price: "42.37",
    listPrice: "55.99",
    code: "RES-7500",
    category: "respirators",
    description: "3M 7500 SERIES HALF FACEPIECE RESPIRATOR"
  },
  {
    slug: "clo-c2930j",
    title: "Adjustable HI VIZ Safety Vests",
    price: "14.89",
    listPrice: "21.99",
    code: "CLO-C2930J-C2931J",
    category: "safety-vests",
    description: "EXPANDABLE VEST. 100% ANSI certified ultra-lightweight fluorescent polyester mesh."
  }
];