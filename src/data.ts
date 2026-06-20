import { Course, FeatureCard, Testimonial, PathwayStep } from './types';

export const COURSES: Course[] = [
  {
    id: 'ai-digital-marketing',
    title: 'AI-Driven Digital Marketing',
    category: 'Marketing',
    description: 'Master the future of marketing with AI-powered strategies, automation tools, and professional optimization workflows.',
    duration: '3 Months (Weekend / Weekday)',
    level: 'Beginner to Advanced',
    badge: 'AI Integrated',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    modules: [
      'Artificial Intelligence tools for marketing & automation',
      'Advanced Social media strategy & brand curation',
      'Search Engine Optimization (SEO) & search algorithms',
      'Content marketing & copywriting with generative AI',
      'Digital advertising (Google Ads, Meta Ads & Retargeting)',
      'Enterprise Brand building & modern public relations',
      'Data-driven marketing analytics & performance indexing'
    ],
    careerOptions: [
      'Digital Marketing Specialist',
      'Social Media Manager',
      'SEO & Content Strategist',
      'Growth Marketing Consultant'
    ]
  },
  {
    id: 'professional-videography',
    title: 'Professional Videography & Creative Media',
    category: 'Media',
    description: 'Transform your raw creativity into industry-ready film, commercial media, and professional content creation assets.',
    duration: '4 Months (Practical Studio Focus)',
    level: 'All Levels',
    badge: '100% Practical',
    imageUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=600&q=80',
    modules: [
      'DSLR & Cinema Camera Handling, lenses, and settings',
      'Professional Lighting setups & video production workflows',
      'Storyboarding, scripting, and visual narration',
      'Cinema-grade Video Editing & sound scoring (Premiere Pro / DaVinci)',
      'Content creation, viral scripting, and vlogging aesthetics',
      'Social media video strategies (Reels, Shorts, TikTok metrics)',
      'Advanced post-production grading and stabilization techniques'
    ],
    careerOptions: [
      'Professional Videographer',
      'Creative Video Editor',
      'Independent Content Creator',
      'Digital Media Director'
    ]
  },
  {
    id: 'ecommerce-business',
    title: 'E-Commerce & Online Business Skills',
    category: 'Business',
    description: 'Establish premium online stores and launch global digital products with robust online marketing and logistics strategies.',
    duration: '3 Months (Incubator Session)',
    level: 'Intermediate',
    badge: 'Entrepreneurial Specialization',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80',
    modules: [
      'E-commerce platforms (Shopify, WooCommerce, Custom storefronts)',
      'Product branding, private labeling, and supplier negotiations',
      'Digital sales funnel designs and conversion rate optimizations',
      'Inventory control, global dropshipping, and physical logistics',
      'Customer lifetime retention and automated email engagement',
      'Global marketplace operations (Amazon, local UAE/India marketplaces)'
    ],
    careerOptions: [
      'E-commerce Store Manager',
      'Online Business Owner / Entrepreneur',
      'Digital Sales & Logistics Specialist',
      'E-commerce Growth Consultant'
    ]
  },
  {
    id: 'spoken-english-communication',
    title: 'Spoken English & Professional Communication',
    category: 'Communication',
    description: 'Build premium vocal confidence, public speaking authority, and business-focused communication skills for professional careers.',
    duration: '2 Months (Intensive Coaching)',
    level: 'Confidence Builder',
    badge: 'Executive Level',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    modules: [
      'Advanced English fluency, accent alignment, & natural phrasings',
      'Professional team conversations and boardroom etiquette',
      'Mock interview preparation and strategic resume positioning',
      'High-impact presentation skills & body language coaching',
      'Workplace dynamic written & oral communication skills'
    ],
    careerOptions: [
      'Customer Success & Support Lead',
      'Corporate Account Representative',
      'Confrontational Public Relations Expert',
      'Academic Pathway and International Professional'
    ]
  }
];

export const FEATURES: FeatureCard[] = [
  {
    id: 'industry-curriculum',
    title: 'Industry-Relevant Curriculum',
    description: 'Learn contemporary, live skills designed around current digital trends, direct employer expectations, and advanced artificial intelligence toolkits.',
    iconName: 'BookOpen'
  },
  {
    id: 'practical-learning',
    title: 'Practical Learning Approach',
    description: 'Gain ultimate hands-on production experience. Work through real-world simulation studios, modern hardware equipment, and active live projects.',
    iconName: 'Cpu'
  },
  {
    id: 'career-focused',
    title: 'Career-Focused Training',
    description: 'Develop corporate-level abilities needed for high-profile employment positions, freelancing platforms, or building scalable independent startups.',
    iconName: 'Briefcase'
  },
  {
    id: 'expert-guidance',
    title: 'Expert Guidance',
    description: 'Learn side-by-side with recognized digital creators, professional consultants, and certified trainers who understand actual industry expectations.',
    iconName: 'Award'
  },
  {
    id: 'future-ready',
    title: 'Future-Ready Skills',
    description: 'Equip yourself for premium roles in highly technology-driven industries, establishing long-term job security in the age of artificial intelligence.',
    iconName: 'Sparkles'
  }
];

export const PATHWAY_STEPS: PathwayStep[] = [
  {
    step: 'Phase 01',
    title: 'Comprehensive Gap Assessment & Foundation',
    description: 'Assess existing academic skills and career desires. Introduce standard digital literacies and high-impact communication baselines.',
    academicOutcome: 'Bridged basic education gaps',
    careerOutcome: 'Defined targeted high-growth digital niche'
  },
  {
    step: 'Phase 02',
    title: 'Practical Hands-on Skill Intensive',
    description: 'Intense practical modules in media production, AI marketing setups, or e-commerce models with live lab simulators in Perinthalmanna.',
    academicOutcome: 'Micro-accreditation credentials',
    careerOutcome: 'Created first fully functional client portfolio assets'
  },
  {
    step: 'Phase 03',
    title: 'Industry Case Studies & Projects',
    description: 'Work alongside actual businesses, handling complete marketing scopes, videography projects, or direct e-commerce logistics pipelines.',
    academicOutcome: 'Practical capstone validation',
    careerOutcome: 'Real-world business delivery experience on CV'
  },
  {
    step: 'Phase 04',
    title: 'Professional Readiness & Placement',
    description: 'Craft personal premium portfolios, undertake intensive interview simulation workshops, build premium LinkedIn profiles, and explore placement opportunities.',
    academicOutcome: 'Comprehensive skill certification',
    careerOutcome: 'Launch independent business or secure corporate role'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Suhail K.P.',
    role: 'Digital Marketing Strategist',
    course: 'AI-Driven Digital Marketing',
    quote: 'Cyber King Skillversity helped me bridge the gap between my degree and what brands actually seek. Within 3 months, I mastered AI workflows and secured an online strategist role in Perinthalmanna.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    badge: 'Marketing Lead'
  },
  {
    id: '2',
    name: 'Fathima Riza',
    role: 'Video Content Architect',
    course: 'Professional Videography & Creative Media',
    quote: 'The practical lab orientation here is spectacular. I went from barely knowing how to hold a DSLR frame to editing high-end commercial projects. The storytelling framework is world class.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    badge: 'Creator Studio Owner'
  },
  {
    id: '3',
    name: 'Dilshad Ahmed',
    role: 'Shopify Store Founder',
    course: 'E-Commerce & Online Business Skills',
    quote: 'Thanks to the e-commerce incubator path, I built my brand from scratch, integrated global gateways, and generated my key sales streams. Outstanding mentors who treat you as an investor!',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    badge: 'Startup Founder'
  },
  {
    id: '4',
    name: 'Aiswarya Mohan',
    role: 'Corporate Growth Lead',
    course: 'Spoken English & Professional Communication',
    quote: 'My confidence soared through the mock boardroom conferences and executive interview modules. Speaking fluent corporate English changed how clients interact with me.',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    badge: 'Career Success'
  }
];

export const INSTITUTION_STATS = [
  { value: '1,200+', label: 'Graduates Trained' },
  { value: '94%', label: 'Active Placement Rate' },
  { value: '15+', label: 'Corporate Partners' },
  { value: '100%', label: 'Practical Lab Focus' }
];

export const FAQS = [
  {
    question: 'Where is Cyber King Skillversity located?',
    answer: 'We are situated in the heart of Perinthalmanna, easily accessible by college students, graduates, and working professionals looking to level-up their abilities.'
  },
  {
    question: 'Are there weekend schedules for working professionals?',
    answer: 'Yes! We run specialized evening and weekend cohorts designed explicitly to fit the lifestyles of busy practitioners and current college students.'
  },
  {
    question: 'What are the core prerequisites for joining Cyber King?',
    answer: 'None. Only a hunger to learn. All our classes start with absolute fundamentals and gradually build up to advanced professional tools.'
  },
  {
    question: 'Does Cyber King provide assistance for career placement?',
    answer: 'Absolutely. We provide mock interviews, custom portfolio building, resume workshops, and straight connections to marketing agency partners across the region.'
  }
];
