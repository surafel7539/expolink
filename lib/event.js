export const event = {
  name: 'Expolink Global Business Expo',
  edition: '2027',
  date: 'Saturday, March 14, 2027',
  dateShort: 'Mar 14, 2027',
  time: '9:00 AM — 5:00 PM',
  venue: 'Riverside Convention Center',
  address: '400 Market Street, Hall A',
  email: 'hello@expolink.events',
  phone: '(555) 012-3456',
  loadIn: '7:00 AM — 8:30 AM',
  boothsLeft: 24,
};

export const packages = [
  {
    id: 'standard',
    name: 'Standard booth',
    price: 250,
    size: '3 × 3 m',
    blurb: 'A solid home base for first-time exhibitors.',
    includes: [
      '3 × 3 m booth space',
      'Trestle table and two chairs',
      '2 exhibitor passes',
      'Power drop and venue Wi-Fi',
      'Listing in the event app',
    ],
    popular: false,
  },
  {
    id: 'corner',
    name: 'Corner booth',
    price: 400,
    size: '3 × 6 m',
    blurb: 'Extra frontage for demos and foot traffic.',
    includes: [
      'Everything in Standard',
      '3 × 6 m corner space',
      '4 exhibitor passes',
      'Logo on the event website',
      'Feature in the printed guide',
    ],
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium island',
    price: 700,
    size: '6 × 6 m',
    blurb: 'The full stage for a headline presence.',
    includes: [
      'Everything in Corner',
      '6 × 6 m island space',
      '6 exhibitor passes',
      'Prime location near the main stage',
      'Logo on stage backdrop',
    ],
    popular: false,
  },
];

export const industries = [
  'Retail & e-commerce',
  'Food & beverage',
  'Professional services',
  'Health & wellness',
  'Home & trades',
  'Technology',
  'Creative & media',
  'Education',
  'Nonprofit',
  'Other',
];

export const referrals = [
  'Word of mouth',
  'Social media',
  'Local news or press',
  'Chamber of commerce',
  'Email from Expolink Global',
  'Other',
];
