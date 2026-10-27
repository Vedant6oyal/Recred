import { Building2, Handshake, Landmark, MessageSquareText, Sparkles } from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Contact: placeholders, replace with real details before going live */
/* ------------------------------------------------------------------ */

export const CONTACT = {
  whatsapp: '919599959772',
  phone: '+91 95999 59772',
  email: 'vedant@recred.in',
  office: 'Office 2/9, Near Cyber Hub, DLF Phase 3, Gurugram',
};

export const WHATSAPP_MESSAGE = 'Hi ReCred, I’d like to discuss a debt requirement for my company.';

export const NAV = [
  { label: 'How it works', href: '#how' },
  { label: 'Who it’s for', href: '#who' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const HERO_POINTS = ['Debt requirements of ₹10 Cr+', 'Banks, NBFCs & institutions', 'AI-powered, expert-led'];

export const LENDERS = [
  { type: 'State Bank of India', short: 'SBI', icon: Landmark },
  { type: 'HDFC Bank', short: 'HDFC', icon: Building2 },
  { type: 'ICICI Bank', short: 'ICICI', icon: Building2 },
  { type: 'Bank of Baroda', short: 'BoB', icon: Landmark },
  { type: 'Axis Bank', short: 'Axis', icon: Building2 },
  { type: 'Punjab National Bank', short: 'PNB', icon: Landmark },
  { type: 'Kotak Mahindra Bank', short: 'Kotak', icon: Building2 },
  { type: 'Canara Bank', short: 'Canara', icon: Landmark },
  { type: 'IndusInd Bank', short: 'IndusInd', icon: Building2 },
  { type: 'Union Bank of India', short: 'Union', icon: Landmark },
  { type: 'Yes Bank', short: 'Yes Bank', icon: Building2 },
  { type: 'Bank of India', short: 'BoI', icon: Landmark },
];

export const MATCH_SCENARIOS = [
  {
    requirement: ['₹75 Cr', 'Term loan', 'Manufacturing', '7 yrs'],
    matches: [
      { at: 4, note: 'Best pricing', score: 96 },
      { at: 6, note: 'Longest tenor', score: 92 },
      { at: 2, note: 'Fastest sanction', score: 89 },
    ],
  },
  {
    requirement: ['₹40 Cr', 'Working capital', 'Pharma', '3 yrs'],
    matches: [
      { at: 10, note: 'Fastest sanction', score: 95 },
      { at: 0, note: 'Lowest collateral', score: 91 },
      { at: 3, note: 'Best pricing', score: 88 },
    ],
  },
  {
    requirement: ['₹180 Cr', 'Project finance', 'Infrastructure', '12 yrs'],
    matches: [
      { at: 5, note: 'Longest tenor', score: 97 },
      { at: 9, note: 'Best pricing', score: 93 },
      { at: 7, note: 'Flexible structure', score: 87 },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Proof                                                               */
/* ------------------------------------------------------------------ */

export const STATS = [
  { value: '₹10,000 Cr+', label: 'Debt syndicated' },
  { value: '37+', label: 'Years of experience' },
  { value: '200+', label: 'Corporate clients' },
  { value: '30+', label: 'Banks & NBFCs in our network' },
];

export const CLIENTS = [
  { name: 'Bhutani Group', logo: '/clients/bhutani-group.webp' },
  { name: 'Gulshan Homz', logo: '/clients/gulshan-homz.jpg' },
  { name: 'Jackson Generators', logo: '/clients/jackson-generators.png' },
  { name: 'Sun & Kris Furnitures', logo: '/clients/sun-kris-furnitures.png' },
  { name: 'Best Group', logo: '/clients/best-group.png' },
  { name: 'Nimbus Group', logo: '/clients/nimbus-group.webp' },
  { name: 'Medicheck', logo: '/clients/medicheck.png' },
  { name: 'Albino Lifesciences', logo: '/clients/albino-lifesciences.webp' },
  { name: 'Sarvottam Group', logo: '/clients/sarvottam-group.png' },
  { name: 'Golden Palm Hotel', logo: '/clients/golden-palm-hotel.jpg' },
  { name: 'Royal Orchid Hotels', logo: '/clients/royal-orchid-hotels.webp' },
  { name: 'Mahagun India', logo: '/clients/mahagun-india.png' },
  { name: 'Singla Sweets', logo: '/clients/singla-sweets.svg' },
  { name: 'WeEmbrace Biopharma', logo: '/clients/weembrace-biopharma.webp' },
  { name: 'Warner Pharma', logo: '/clients/warner-pharma.png' },
  { name: 'Skylink International', logo: '/clients/skylink-international.png' },
  { name: 'Neo Hospital', logo: '/clients/neo-hospital.png' },
  { name: 'Sehgal Neo Hospital', logo: '/clients/sehgal-neo-hospital.webp' },
  { name: 'Angel India', logo: '/clients/angel-india.png' },
  { name: 'Worldwide Payments Group', logo: '/clients/worldwide-payments-group.png' },
  { name: 'Vichitra Constructions', logo: '/clients/vichitra-constructions.png' },
  { name: 'Admed Pharma', logo: '/clients/admed-pharma.jpg' },
  { name: 'Chanson Group', logo: '/clients/chanson-group.png' },
];

/* ------------------------------------------------------------------ */
/* Problem, how it works, audience                                     */
/* ------------------------------------------------------------------ */

export const PROBLEM = {
  usual: ['Approaching banks one at a time', 'Weeks lost in back-and-forth', 'No clarity on which lender fits', 'Settling for the first offer'],
  recred: [
    'AI scans the entire lender landscape at once',
    'Debt strategists structure and negotiate for you',
    'Terms benchmarked across best-fit lenders',
    'Sanction at lightning speed',
  ],
};

export const STEPS = [
  {
    icon: MessageSquareText,
    title: 'Share your requirement',
    desc: 'Tell us the amount, purpose, tenor and a few financials, on WhatsApp or a quick call.',
  },
  {
    icon: Sparkles,
    title: 'AI + experts find your match',
    desc: 'Our proprietary AI evaluates lenders on appetite, pricing, ticket size and speed. Our strategists validate the shortlist and structure the deal.',
  },
  {
    icon: Handshake,
    title: 'Close on the best terms',
    desc: 'We negotiate with the best-fit banks and NBFCs, and stay with you through sanction and disbursement.',
  },
];

export const AUDIENCES = [
  { title: 'SMEs & mid-market', desc: 'Expansion, capex and working capital' },
  { title: 'Large enterprises', desc: 'Projects, acquisitions and refinancing' },
];

export const LOAN_TYPES = [
  'Term loans',
  'Working capital',
  'Project finance',
  'Loan against property',
  'Loan takeover & refinancing',
  'Acquisition finance',
  'ECB & foreign-currency loans',
  'Structured & mezzanine debt',
];

/* ------------------------------------------------------------------ */
/* Team                                                                */
/* ------------------------------------------------------------------ */

export const ADVISOR = {
  name: 'Mr. Vedant',
  role: 'Head of Customer Success',
  photo: '/advisor.png',
};

export const TEAM = [
  {
    name: 'Mr. R.K. Goyal',
    role: 'Chief Debt Strategist',
    photo: '/rk-goyal.jpg',
    bio: [
      'For over 37 years, Mr. Goyal has helped enterprises raise capital on the best terms through India’s leading banks, NBFCs and financial institutions. Regarded as one of Delhi NCR’s foremost debt syndication advisors, he has built deep, long-standing relationships with senior decision-makers across the lending ecosystem, and has syndicated debt in India and abroad.',
      'At ReCred, he leads our debt strategy desk, making sure every match is structured, negotiated and closed on the most favourable terms. His approach is simple: understand the business first, then take the best possible structure to the lenders most likely to say yes.',
    ],
    points: [
      '37+ years in project finance & debt syndication',
      '₹10,000 Cr+ debt syndicated',
      'Debt syndicated in India & abroad',
      'Loan takeover & refinancing specialist',
    ],
    quote: 'We don’t just find funding; we architect your future.',
  },
];

/* ------------------------------------------------------------------ */
/* Contact quick picker                                                */
/* ------------------------------------------------------------------ */

export const LOAN_SIZES = ['₹10–50 Cr', '₹50–100 Cr', '₹100–250 Cr', '₹250 Cr+'];

export const NEEDS = [
  { label: 'Term loan', text: 'a term loan' },
  { label: 'Working capital', text: 'working capital' },
  { label: 'Project finance', text: 'project finance' },
  { label: 'Loan transfer', text: 'a loan transfer' },
];
