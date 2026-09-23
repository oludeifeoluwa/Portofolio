import { Project } from '../types';

export const FEATURED_PROJECTS: Project[] = [
  {
    title: 'WORKNEST',
    slug: 'worknest',
    tagline: 'Workflow-first organizational digital workspace built for high-accountability project execution.',
    category: 'Product Design · Full Stack · AI · Firebase',
    year: '2026',
    role: 'Lead Product Designer & Full-Stack Engineer',
    technologies: ['React', 'TypeScript', 'Vite', 'Firebase', '@google/genai', 'Express', 'Tailwind CSS', 'Electron'],
    featured: true,
    status: 'LIVE',
    heroImage: '/assets/worknest-screen.png',
    liveUrl: 'https://work-nest-nu.vercel.app/',
    githubUrl: 'https://github.com/oludeifeoluwa/worknest',
    overview: `WorkNest is a project-centric digital workspace built around an outcome-based productivity philosophy. Unlike generic chat apps or flat kanban boards, WorkNest organizes collaboration around verified deliverables: Goal → Deliverable → Task → Assignment → Execution → Evidence → Review → Completion.`,
    problem: `Distributed teams often suffer from context switching and unclear task ownership. Fragmented tools make it difficult to verify whether a task was actually executed correctly or just marked as complete without evidence.`,
    context: `Designed and engineered as a full-stack digital workspace with WebRTC real-time audio/video calls, contextual sidebars, custom plugin ecosystem, and Google Gemini AI assistance.`,
    myRoleDetails: `Architected the full system from user flow design and frontend state management down to Firebase Firestore security rules, WebRTC streaming hooks, Express backend API server, and Gemini AI integration.`,
    approach: [
      'Deconstructed organizational productivity into explicit accountability stages.',
      'Designed a contextual navigation rail and dynamic sidebars that adapt to active project view.',
      'Implemented real-time data sync using Firebase Firestore and Auth.',
      'Integrated Gemini API for project summarization, automated task breakdown, and workspace search.',
      'Built a desktop wrapper using Electron for cross-platform offline capability.',
    ],
    workflowSteps: [
      { step: '01', label: 'GOAL', description: 'Define top-level organizational milestone and vision.' },
      { step: '02', label: 'DELIVERABLE', description: 'Break down goals into concrete sub-deliverables with clear metrics.' },
      { step: '03', label: 'TASKS', description: 'Generate atomic tasks required to complete each deliverable.' },
      { step: '04', label: 'ASSIGNMENTS', description: 'Assign tasks to team members with explicit ownership.' },
      { step: '05', label: 'EXECUTION', description: 'Execute work with integrated workspace tools and real-time chat.' },
      { step: '06', label: 'EVIDENCE', description: 'Attach output files, code links, or media proof of completion.' },
      { step: '07', label: 'REVIEW', description: 'Peer or manager verification step to approve or request revision.' },
      { step: '08', label: 'COMPLETION', description: 'Mark deliverable done with full audit trail and progress charting.' },
    ],
    designDecisions: [
      'Dark-mode native contextual UI to reduce fatigue during extended work sessions.',
      'Integrated progress ring visualizations (DeliverablesProgressChart) to display status at a glance.',
      'Plugin marketplace interface allowing dynamic feature extensions without core code bloat.',
    ],
    engineeringDetails: [
      'State management built with custom React hooks synchronized to Firestore listeners.',
      'Express backend server handling API endpoints and proxying Gemini AI Studio requests securely.',
      'WebRTC peer connections for zero-latency voice waveform and audio calls.',
    ],
    architectureDiagram: `USER / ELECTRON APP
   ↓
REACT CLIENT (TypeScript + Tailwind)
   ↓
EXPRESS NODE SERVER (Vite SSR / API)
 ↙            ↓             ↘
FIREBASE DB   GEMINI AI API   WEBRTC CALLS`,
    challenges: [
      {
        problem: 'Maintaining smooth real-time data synchronization across multi-user project spaces without excessive re-renders.',
        resolution: 'Structured Firestore document listeners with fine-grained subscription hooks and optimized React state selectors.',
      },
      {
        problem: 'Ensuring desktop builds (Electron) share identical UI logic with web builds without code duplication.',
        resolution: 'Configured Vite and Electron builder scripts sharing the same React core codebase.',
      },
    ],
    solutionSummary: `WorkNest delivers a unified platform where teams manage goals, execute tasks with proof of work, communicate via audio/video, and leverage AI—all within a single responsive workspace.`,
    lessonsLearned: [
      'Productivity tools succeed when they reduce friction rather than imposing overhead.',
      'Decoupling AI requests through a dedicated backend proxy prevents credential exposure and enables fine-grained rate limiting.',
    ],
  },
  {
    title: 'CAMPUSPAY',
    slug: 'campuspay',
    tagline: 'Student digital wallet and campus payment infrastructure for streamlined transactions.',
    category: 'Product Design · Full Stack · API Architecture · Wallet',
    year: '2026',
    role: 'Frontend & API Integration Engineer',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'QRCode'],
    featured: true,
    status: 'LIVE',
    heroImage: '/assets/campuspay-screen.png',
    liveUrl: 'https://campuspay-roan.vercel.app/',
    githubUrl: 'https://github.com/oludeifeoluwa/wallet_frontend',
    overview: `CampusPay is a digital wallet platform engineered specifically for university ecosystems. It addresses the payment friction experienced by students paying tuition, library fees, cafeteria merchants, and peer-to-peer transfers on campus.`,
    problem: `Existing payment channels in educational institutions are slow, fragmented, and often lack real-time verification for daily campus purchases and school fee receipts.`,
    context: `Built with a microservices-aligned architecture including explicit API mapping for Student Wallets, Campus Merchants, School Admins, and Super Administrators.`,
    myRoleDetails: `Designed and built the responsive frontend wallet interfaces, QR payment modal systems, transaction history views, export utility (CSV statement generator), and administrative dashboard routes.`,
    approach: [
      'Mapped real API requirements across admin, school, wallet, and transaction domains (documented in API_MAP.md).',
      'Created an intuitive wallet dashboard displaying balance toggle, quick actions, and transaction feed.',
      'Integrated dynamic QR Code generation for instant student-to-merchant scan-and-pay workflows.',
      'Built multi-role interface components for Students, School Admins, and System Administrators.',
    ],
    designDecisions: [
      'High contrast card interfaces displaying balance visibility toggles and transaction tags.',
      'Mobile-first QR modal layout allowing fast scanning at campus checkout counters.',
      'Clear transaction state indicators (Pending, Approved, Refunded, Failed) for user transparency.',
    ],
    engineeringDetails: [
      'Modular API layer (`adminApi.ts`, `schoolApi.ts`, `transactionApi.ts`, `walletApi.ts`) abstraction.',
      'Interactive 3D wallet card visuals powered by Three.js & Framer Motion.',
      'Client-side CSV exporter enabling students to download verified financial statements.',
    ],
    architectureDiagram: `STUDENT MOBILE / WEB
   ↓
REACT ROUTER SPA (Vite + TS)
   ↓
API CLIENT (adminApi / walletApi / transactionApi)
   ↓
CAMPUSPAY BACKEND GATEWAY
 ↙        ↓         ↘
AUTH    WALLET DB    PAYMENT LOGS`,
    challenges: [
      {
        problem: 'Handling multiple user roles (Student, Merchant, School Admin, Super Admin) clean routing within a single application codebase.',
        resolution: 'Created isolated dashboard routes with explicit role guards and modular layouts for each persona.',
      },
    ],
    solutionSummary: `CampusPay provides students and institutional administrators with a reliable digital wallet interface for fast, verified campus payments.`,
    lessonsLearned: [
      'Financial UI demands clear confirmation modals, immediate error feedback, and accessible transaction trails.',
      'Designing clean API mapping contracts beforehand makes frontend integration smooth and predictable.',
    ],
  },
  {
    title: 'DWELL & DECOR',
    slug: 'dwell-and-decor',
    tagline: 'Student-focused room decoration e-commerce platform featuring an AI Decor Advisor.',
    category: 'Product Design · Full Stack · AI Integration · E-Commerce',
    year: '2026',
    role: 'Full-Stack Developer & UX Designer',
    technologies: ['React', 'TypeScript', 'Vite', 'Firebase', '@google/genai', 'Express', 'jsPDF', 'Tailwind CSS'],
    featured: true,
    status: 'LIVE',
    heroImage: '/assets/dwell-decor-screen.png',
    liveUrl: 'https://dwellanddecor.vercel.app/',
    githubUrl: 'https://github.com/oludeifeoluwa/Dwellanddecor-',
    overview: `Dwell & Decor is a student-oriented e-commerce and room aesthetic planning platform. It combines product catalog browsing, filtering, wishlist/cart management, campus pickup options, and an AI-powered Room Decor Advisor.`,
    problem: `Students moving into hostels or apartments struggle to visualize furniture and lighting combinations that fit small spaces and limited budgets.`,
    context: `Developed with Firebase real-time data storage, Gemini AI API integration for space decoration recommendations, automated jsPDF receipt generation, and a simulated Paystack checkout pipeline.`,
    myRoleDetails: `Designed the visual interface, catalog search, room aesthetic categorizations, integrated the Gemini AI prompt advisor, and programmed client-side PDF receipt generation.`,
    approach: [
      'Curated product categories tailored for university room sizes (wall decor, lighting, organizer trolleys, aesthetic accessories).',
      'Engineered an AI Room Decor Advisor interface powered by Google Gemini API to analyze room style inputs and recommend matching products.',
      'Implemented cart management, campus delivery/pickup toggle, and simulated checkout flow.',
      'Built automated PDF receipt generation using jsPDF upon order submission.',
    ],
    designDecisions: [
      'Minimalist editorial layout emphasizing high-quality product photography and clear spatial metadata.',
      'Conversational AI advice panel integrated right into the shopping experience.',
    ],
    engineeringDetails: [
      'Integrated @google/genai SDK for processing student space dimensions and stylistic preferences.',
      'Firebase Firestore storage powering persistent cart states and wishlist collections.',
      'Simulated Paystack checkout trigger clearly labeled for development/testing environments.',
    ],
    architectureDiagram: `CLIENT APP (React + Vite)
   ↓
FIREBASE FIRESTORE & AUTH
   ↓
GEMINI AI (Decor Advisor) + jsPDF (Receipt Generation)`,
    challenges: [
      {
        problem: 'Ensuring AI decor recommendations correctly suggest available items in the product database.',
        resolution: 'Fed structured product catalogs into Gemini API prompt context to ground recommendations in real inventory.',
      },
    ],
    solutionSummary: `Dwell & Decor connects product discovery with AI-assisted interior planning, helping students furnish their living spaces with confidence.`,
    lessonsLearned: [
      'E-commerce experiences are vastly improved when AI acts as an contextual advisor rather than a generic chatbot.',
    ],
  },
];
