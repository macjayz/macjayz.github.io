// Personal details and projects shown across the site (from the CV).
export const profile = {
  name: 'Mangai Machen John',
  role: 'Backend Engineer',
  location: 'Abuja, Nigeria',
  email: 'macjayz90s@gmail.com',
  phone: '+234 903 738 3530',
  github: 'https://github.com/macjayz',
  linkedin: 'https://www.linkedin.com/in/jayces-john-246b50431',
};

export const projectCategories = [
  { id: 'web3', anchor: 'brown', label: 'Infrastructure' },
  { id: 'products', anchor: 'dark', label: 'Products' },
  { id: 'backend', anchor: 'vintage', label: 'Backend' },
];

export const projects = [
  {
    category: 'web3',
    title: 'Heightproof',
    image: '/assets/images/projects/heightproof.jpg',
    link: { label: 'GitHub ↗', href: 'https://github.com/macjayz/heightproof' },
    description:
      'Self-hosted observability for EVM JSON-RPC traffic that catches the failures hiding behind 200 OK: stale chain heads, cross-provider disagreement at the same block height, silent nulls and reorg lag. Its reliability study of 13 public endpoints found that Arbitrum One\'s official RPC dates every eth_getLogs result 1 January 1970 (OffchainLabs/nitro#4780). TypeScript · Fastify · Redis Streams · PostgreSQL · Kubernetes',
  },
  {
    category: 'products',
    title: 'InkKrystal',
    image: '/assets/images/projects/inkkrystal.jpg',
    link: { label: 'Visit ↗', href: 'https://inkkrystal.com' },
    description:
      'Production website and iOS/Android reading app for a fiction publisher, with 10,000+ users: book discovery, reading, author onboarding and manuscript submission, plus writer, editor and admin workflows for contracts, royalties and subscriptions. React · TypeScript · Supabase · Sanity · Capacitor',
  },
  {
    category: 'products',
    title: 'Production Web Platforms',
    image: '/assets/images/projects/platforms.jpg',
    link: { label: 'Client work' },
    description:
      'Client and internal applications combining dashboards, authentication, APIs, database workflows and third-party integrations, built, hosted, monitored and maintained end to end. Node.js · Laravel · React · PostgreSQL · AWS',
  },
  {
    category: 'backend',
    title: 'Badge Verification',
    image: '/assets/images/projects/badge-verification.jpg',
    link: { label: 'GitHub ↗', href: 'https://github.com/macjayz/badge-verification' },
    description:
      'Credentialing system for communities and DAOs with rule-based badge eligibility, SIWE sign-in, Privado ID zero-knowledge identity proofs, X and Discord OAuth, Snapshot vote checks, on-chain soulbound badges and WebSocket-powered dashboards. Node.js · TypeScript · PostgreSQL · Redis · Docker',
  },
  {
    category: 'web3',
    title: 'Xeinon',
    image: '/assets/images/projects/xeinon.jpg',
    link: { label: 'GitHub ↗', href: 'https://github.com/macjayz/xeinon' },
    description:
      'Real-time Base token discovery platform that detects, indexes, classifies and tracks new tokens from creation through market activity, enriched with pricing and liquidity data. React · TypeScript · Supabase · viem · WebSockets',
  },
];
