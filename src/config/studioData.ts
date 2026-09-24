import { 
  StudioInfo, 
  StatItem, 
  ServiceItem, 
  PortfolioItem, 
  PackageItem, 
  TestimonialItem, 
  InstagramFeedItem,
  FAQItem 
} from '../types';

/**
 * =========================================================================
 * GOKUL STUDIOS - CLIENT CONFIGURATION & CONTENT DATA
 * =========================================================================
 * Note: All phone numbers, emails, pricing, and stats in this file are 
 * structured as DEMO/SAMPLE placeholders for initial prototype demonstration.
 * They can be seamlessly edited here to update the live website.
 * =========================================================================
 */

export const STUDIO_INFO: StudioInfo = {
  name: "GOKUL STUDIOS",
  tagline: "WE CAPTURE YOUR MOMENTS.",
  subTagline: "Professional photography and cinematic storytelling for weddings, celebrations and unforgettable moments.",
  locationCity: "Vaniyambadi",
  locationState: "Tamil Nadu",
  locationCountry: "India",
  fullAddress: "Gokul Studios, Main Road, Vaniyambadi, Tirupattur Dist, Tamil Nadu - 635751",
  phoneDisplay: "+91 98765 43210", // Demo phone number
  phoneRaw: "+919876543210",
  whatsappDisplay: "+91 98765 43210",
  whatsappRaw: "919876543210",
  email: "contact@gokulstudios.demo", // Demo email
  instagramHandle: "@gokulstudiosofficial",
  instagramUrl: "https://instagram.com",
  youtubeUrl: "https://youtube.com",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62294.03264426549!2d78.583333!3d12.683333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacf8b5490ab8cb%3A0x6a0f44383431bc87!2sVaniyambadi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  googleMapsDirectionsUrl: "https://maps.google.com/?q=Vaniyambadi+Tamil+Nadu",
  workingHours: "Mon - Sun: 09:00 AM - 09:00 PM",
};

export const DEMO_STATS: StatItem[] = [
  {
    id: "events",
    value: "500+",
    label: "Events Captured",
    description: "Weddings, Receptions & Milestone Celebrations",
    iconName: "Camera"
  },
  {
    id: "clients",
    value: "1000+",
    label: "Happy Clients",
    description: "Families trusting us with their most cherished memories",
    iconName: "Heart"
  },
  {
    id: "experience",
    value: "10+",
    label: "Years of Experience",
    description: "Mastery in candid framing, lighting & cinematic films",
    iconName: "Award"
  },
  {
    id: "cities",
    value: "25+",
    label: "Destinations Covered",
    description: "Across Tamil Nadu, Bangalore, Chennai & beyond",
    iconName: "Sparkles"
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "wedding-photography",
    title: "Wedding Photography",
    subtitle: "Timeless Traditional & Candid Mastery",
    category: "Weddings",
    badge: "Most Popular",
    description: "Complete photographic coverage capturing sacred rituals, emotional tears, joyous laughs, and grand couple portraits with bespoke color grading.",
    deliverables: ["Dual-shooter coverage", "High-res edited master gallery", "Fine-art leather album", "All raw photos delivered"],
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "wedding-videography",
    title: "Wedding Videography & Films",
    subtitle: "4K Cinematic Storytelling & Teasers",
    category: "Cinematic",
    badge: "Ultra HD",
    description: "Cinema-grade wedding films with directional audio, ambient music design, gimbal stabilization, and Hollywood color palettes.",
    deliverables: ["3-5 Min Cinematic Teaser", "Full Documentary Film (45-90 min)", "4K Drone Aerial Angles", "Social Media 60s Reel"],
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "pre-wedding",
    title: "Pre-Wedding Photography",
    subtitle: "Romantic Outdoor Editorial Shoots",
    category: "Pre-Wedding",
    badge: "Trending",
    description: "Stunning conceptual couple sessions at scenic hill stations, heritage palaces, backwaters, or urban twilight setups.",
    deliverables: ["Creative concept styling", "30 Retouched Signature frames", "Invitation Save-the-Date video", "Full-day outdoor shoot"],
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "engagement-photography",
    title: "Engagement Photography",
    subtitle: "The Beginning of Forever",
    category: "Weddings",
    description: "Documenting the intimate ring exchange, family blessings, and candid laughter as two families unite.",
    deliverables: ["Candid & traditional coverage", "Fast turnaround preview images", "Digital web gallery", "High-resolution prints"],
    imageUrl: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "reception-photography",
    title: "Reception Photography",
    subtitle: "Glamour, Grandeur & Party Vibes",
    category: "Weddings",
    description: "Capturing grand stage entrances, dynamic musical performances, heartfelt toasts, and glamorous guest portraits with studio lighting.",
    deliverables: ["High-speed flash stage photography", "VIP guest coverage", "Dance floor highlights", "Instant social previews"],
    imageUrl: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "baby-kids-photography",
    title: "Baby / Kids Photography",
    subtitle: "Pure Innocence & Milestone Moments",
    category: "Baby & Kids",
    badge: "Gentle Studio",
    description: "Safe, patient, and cozy studio sessions for newborn babies, 1st birthday cake smashes, naming ceremonies, and playful toddlers.",
    deliverables: ["Sanitized studio props & themes", "Patience-focused session", "Milestone storybook album", "Digital gallery"],
    imageUrl: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "birthday-celebrations",
    title: "Birthday Photography",
    subtitle: "Energetic Party & Cake Cutting Memories",
    category: "Events",
    description: "Vibrant coverage for 1st birthdays, Sweet 16s, Golden 50s, and family gala celebrations with fun candid portraits.",
    deliverables: ["Cake cutting & decor framing", "Guest & family portraits", "Fun candid party highlights", "Edited digital pack"],
    imageUrl: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "outdoor-couple-shoot",
    title: "Outdoor Photography",
    subtitle: "Golden Hour Natural Light Sessions",
    category: "Pre-Wedding",
    description: "Breathtaking outdoor photoshoots bathed in natural sunset light, architectural silhouettes, and organic expressions.",
    deliverables: ["Location guidance in Tamil Nadu", "Golden hour lighting setup", "Artistic color grading", "Print-ready high-res"],
    imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "event-photography",
    title: "Event Photography",
    subtitle: "Housewarmings, Corporate & Anniversaries",
    category: "Events",
    description: "Professional coverage for Housewarming (Grihapravesham), Puberty functions, Corporate conventions, and Silver Jubilees.",
    deliverables: ["Comprehensive timeline coverage", "Traditional ritual documentation", "Fast cloud delivery", "Custom print options"],
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "cinematic-films",
    title: "Cinematic Films & Drone",
    subtitle: "Sweeping Aerials & Emotion-Driven Visuals",
    category: "Cinematic",
    badge: "Signature",
    description: "Elevate your story with licensed aerial drone cinematography, 10-bit cinema camera sensor capture, and custom orchestral soundtracks.",
    deliverables: ["4K HDR Drone cinematography", "Color grading in DaVinci Resolve", "Multi-cam live sync", "Teasers & vertical reels"],
    imageUrl: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80"
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "p1",
    title: "The Royal Tamil Wedding of Ananya & Vignesh",
    category: "Weddings",
    location: "Vaniyambadi Heritage Hall",
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "portrait",
    featuredStory: "Traditional silk attire, vermilion rituals, and unforgettable family blessings.",
    tags: ["Traditional", "Candid", "Muhurtham"]
  },
  {
    id: "p2",
    title: "Golden Hour Twilight in Yelagiri Hills",
    category: "Pre-Wedding",
    location: "Yelagiri Hills, Tamil Nadu",
    imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "landscape",
    featuredStory: "Soft mountain mist meeting dramatic golden hour warmth.",
    tags: ["Outdoor", "Couple", "Golden Hour"]
  },
  {
    id: "p3",
    title: "Cinematic Garland Exchange (Maalai Maatral)",
    category: "Cinematic",
    location: "Grand Palace, Tirupattur",
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "square",
    featuredStory: "Captured at 120fps slow-motion with floral showers.",
    tags: ["Cinematic 4K", "Rituals", "Emotions"]
  },
  {
    id: "p4",
    title: "Little Prince 1st Birthday Wonder",
    category: "Baby & Kids",
    location: "Gokul Studio Floor, Vaniyambadi",
    imageUrl: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "portrait",
    featuredStory: "Playful smiles and curious eyes during the cake smash session.",
    tags: ["Baby Shoot", "Milestones", "Studio"]
  },
  {
    id: "p5",
    title: "The Glamorous Reception Evening",
    category: "Weddings",
    location: "Ambur Convention Centre",
    imageUrl: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "landscape",
    featuredStory: "Luminous fairy lights and high-fashion couple portraiture.",
    tags: ["Reception", "Evening Glamour", "Lighting"]
  },
  {
    id: "p6",
    title: "Traditional South Indian Bride Portrait",
    category: "Portraits",
    location: "Vaniyambadi",
    imageUrl: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "portrait",
    featuredStory: "Temple jewelry details, intricate mehndi patterns, and regal poise.",
    tags: ["Bridal Portrait", "Jewelry", "Tradition"]
  },
  {
    id: "p7",
    title: "Sacred Saptapadi & Agni Pradakshina",
    category: "Weddings",
    location: "Vellore Fort Temple",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "landscape",
    featuredStory: "Seven sacred vows documented with deep artistic reverence.",
    tags: ["Muhurtham", "Rituals", "Black & Gold"]
  },
  {
    id: "p8",
    title: "Lake Breeze Pre-Wedding Story",
    category: "Pre-Wedding",
    location: "Jolarpet Lakefront",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "square",
    featuredStory: "Gentle ripples and candid conversations before the big day.",
    tags: ["Couple", "Pre-Wedding", "Romantic"]
  },
  {
    id: "p9",
    title: "Grand Grihapravesham Ceremony",
    category: "Events",
    location: "New Residence, Vaniyambadi",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "landscape",
    featuredStory: "New beginnings, auspicious milk boiling, and family joy.",
    tags: ["Housewarming", "Auspicious", "Family"]
  }
];

export const FEATURED_STORY = {
  tagline: "EDITORIAL SPOTLIGHT",
  headline: "EVERY FRAME HAS A STORY.",
  subtitle: "We don't just take photographs. We preserve the heartbeat of your most priceless memories.",
  quote: "“When the lights dim, the flowers fade, and the music rests—what remains forever are the photographs that make you feel that day all over again.”",
  directorNote: "At Gokul Studios, our philosophy blends photojournalistic observation with editorial refinement. Born and rooted in Vaniyambadi, we treat every Tamil wedding and celebration not as a routine shoot, but as a cultural tapestry woven with tears of joy, sacred mantras, and unspoken glances between souls.",
  statsHighlight: "Over 500,000+ shutter clicks perfected with precision color grading.",
  imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=85",
  secondaryImageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
};

export const SAMPLE_PACKAGES: PackageItem[] = [
  {
    id: "essential",
    name: "Essential Collection",
    tagline: "Traditional & Candid Photo Coverage",
    samplePriceDisplay: "₹XX,XXX",
    idealFor: "Intimate Weddings, Engagements, Receptions or Birthdays",
    coverage: "1 Session / Full Event Day (Up to 8 Hours)",
    deliverables: [
      "1 Senior Candid Photographer",
      "1 Traditional Master Photographer",
      "250+ High-Resolution Retouched Photos",
      "1 Premium Synthetic Photo Book (30 Sheets / 60 Pages)",
      "Full digital delivery via High-Speed Cloud Link",
      "All Raw Photographs provided in High-Speed Pen Drive"
    ],
    customizableNotice: "Sample demo tier. Actual prices tailored according to event hours and location."
  },
  {
    id: "premium",
    name: "Premium Cinema & Photo",
    tagline: "The Perfect Harmony of Photos & Cinematic Video",
    samplePriceDisplay: "₹XX,XXX",
    isPopular: true,
    idealFor: "Grand Weddings, Muhurtham + Reception Celebrations",
    coverage: "2 Full Days / Complete Event Schedule (Unlimited Hours)",
    deliverables: [
      "2 Candid Photographers + 1 Traditional Photographer",
      "2 Cinematographers with Gimbal & Cinema Lenses",
      "4K Drone Aerial Coverage for Grand Entrances",
      "3-5 Minute Cinematic Wedding Teaser Video",
      "Full Length Documentary Film (45-60 Mins)",
      "2 Luxury Leather Embossed Albums (40 Sheets / 80 Pages)",
      "Mini Pocket Album for Parents + 1 Large Canvas Frame"
    ],
    customizableNotice: "Sample demo tier. Tailored packages available for multi-day events."
  },
  {
    id: "signature",
    name: "Signature Royal Story",
    tagline: "The Ultimate All-Inclusive Wedding Experience",
    samplePriceDisplay: "₹XX,XXX",
    idealFor: "Multi-Day Destination & Royal Wedding Extravaganzas",
    coverage: "Pre-Wedding Shoot + 3 Days Complete Ritual Coverage",
    deliverables: [
      "Full Dedicated Gokul Studios Elite Crew (7 Members)",
      "Complimentary Full-Day Pre-Wedding Shoot at Hill Station",
      "Same-Day Teaser Video for Social Media Announcement",
      "4K Ultra HD Drone Cinematography & Live LED Screen Feed",
      "3 Royal Handcrafted Albums with Acrylic Glass Cover",
      "Pre-Wedding Concept Film + Save-the-Date Reel",
      "Custom Signature Wooden Box with Engraved Crystal Pen Drive"
    ],
    customizableNotice: "Sample demo tier. Comprehensive bespoke quote provided upon enquiry."
  }
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: "t1",
    quote: "Gokul Studios captured our wedding in Vaniyambadi so magnificently! Looking through the album felt like reliving every single emotional ritual. The candid shots of my parents laughing during the ceremony brought tears to our eyes.",
    clientName: "Priyanka & Karthik",
    coupleName: "Bride & Groom",
    eventType: "Grand Wedding & Reception",
    eventLocation: "Vaniyambadi",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t2",
    quote: "The wedding teaser film created by the team is pure Bollywood cinema! The lighting, background music selection, and 4K drone shots gave our event an international film look. Highly professional and patient team.",
    clientName: "Siddharth & Deepa",
    coupleName: "Groom & Bride",
    eventType: "Cinematic Wedding & Pre-Wedding",
    eventLocation: "Tirupattur / Yelagiri",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t3",
    quote: "We booked Gokul Studios for our daughter's 1st birthday and naming ceremony. Their patience with the baby was remarkable. The album design was delivered on time and everyone in our family loved it!",
    clientName: "Saravanan & Mahalakshmi",
    coupleName: "Parents",
    eventType: "1st Birthday & Milestone Shoot",
    eventLocation: "Ambur",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }
];

export const INSTAGRAM_POSTS: InstagramFeedItem[] = [
  {
    id: "ig1",
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
    caption: "Sacred moments sealed with love. #GokulStudios #TamilWedding #VaniyambadiWeddings",
    likes: "1,248",
    comments: "42"
  },
  {
    id: "ig2",
    imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    caption: "Sunset silhouetted promises in the hills. #PreWeddingShoot #GoldenHour #Cinematic",
    likes: "984",
    comments: "31"
  },
  {
    id: "ig3",
    imageUrl: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80",
    caption: "The timeless elegance of a South Indian bride. #BridalPortraits #SilkSaree",
    likes: "2,130",
    comments: "88"
  },
  {
    id: "ig4",
    imageUrl: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=80",
    caption: "Little smiles, infinite sunshine. 🎈 #BabyShoot #1stBirthday #Milestones",
    likes: "870",
    comments: "25"
  },
  {
    id: "ig5",
    imageUrl: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    caption: "Stage lights and joyous nights. ✨ #ReceptionGlow #GokulCinematics",
    likes: "1,560",
    comments: "54"
  },
  {
    id: "ig6",
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    caption: "Behind the lens, capturing pure emotions that last forever. #PhotographyLife",
    likes: "1,890",
    comments: "67"
  }
];

export const FAQS_LIST: FAQItem[] = [
  {
    question: "How far in advance should we book Gokul Studios for our wedding?",
    answer: "We recommend booking 3 to 6 months in advance, especially for peak auspicious wedding muhurtham dates in Tamil Nadu, to guarantee our core team's availability."
  },
  {
    question: "Do you travel outside Vaniyambadi for shoots?",
    answer: "Yes, absolutely! While based in Vaniyambadi, we regularly cover weddings across Tirupattur, Vellore, Ambur, Hosur, Bangalore, Chennai, and destination weddings across South India."
  },
  {
    question: "When will we receive our edited photos and wedding film?",
    answer: "We deliver a teaser pack within 3–5 days for social sharing. Fully retouched high-res master photos and full cinematic video are typically delivered within 3 to 4 weeks."
  },
  {
    question: "Can we customize our photography package according to our budget?",
    answer: "Yes! All package tiers are fully flexible. You can select specific services such as drone coverage, additional album copies, pre-wedding shoot days, or customized event hours."
  }
];
