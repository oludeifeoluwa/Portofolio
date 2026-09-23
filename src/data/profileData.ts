import { CapabilityGroup, PhilosophyArticle } from '../types';

export const PROFILE = {
  name: 'Olude Ifeoluwa',
  title: 'Training Data Analyst · Digital Product Builder · Full-Stack Engineer',
  phone: '+234 907 219 3710',
  email: 'bioes2007@gmail.com',
  linkedin: 'https://linkedin.com/in/olude-ifeoluwa-a15828386/',
  location: 'Ibadan, Nigeria',
  githubUrl: 'https://github.com/oludeifeoluwa/',
  university: 'Mountain Top University',
  degree: 'BSc Software Engineering',
  graduationYear: '2023 – 2027',
  summary: `Training Data Analyst and Digital Product Builder skilled in Excel, SQL, and Python with hands-on experience cleaning datasets and building interactive dashboards. n8n certified with a strong interest in business intelligence and data-driven decision-making. Currently studying Software Engineering at Mountain Top University.`,
  bio: `I design and build digital products, backend systems, and data analytics dashboards. My work spans data cleaning, business intelligence, full-stack web engineering, and automated workflows—focusing on solving real operational friction through structured systems.`,
  statement: `I don't just design interfaces; I construct working software and data engines. From SQL data schemas and Excel financial models to real-time WebRTC channels and automated n8n pipelines, I approach every project with clarity, craft, and technical discipline.`,
};

export const CV_DATA = {
  education: [
    {
      institution: 'Mountain Top University',
      degree: 'BSc Software Engineering',
      period: '2023 – 2027',
      status: 'In Progress',
      focus: 'Algorithms, Data Structures, Database Systems, Software Architecture & Computational Modeling.',
    },
  ],
  certifications: [
    {
      title: 'n8n Automation Certification',
      issuer: 'n8n',
      status: 'Completed',
      year: '2025',
      type: 'Workflow & Integration Automation',
    },
    {
      title: 'Hackton 1.0 — 3rd Place Award (Certificate of Excellence)',
      issuer: 'Bureau of ICT & Digital Development, Oyo State Government',
      status: 'Completed',
      year: '2026',
      type: 'Competitive Systems Engineering & Presentation',
    },
    {
      title: 'Certified Developer (Web & Mobile App / AI-Assisted)',
      issuer: 'L.E.G.I.T Innovation Hub × Oyo State Government (MIC)',
      status: 'Completed',
      year: '2026',
      type: 'Full-Stack Software Development',
    },
    {
      title: 'Python Course Certification',
      issuer: 'Kaggle Learn',
      status: 'Completed',
      year: '2026',
      type: 'Data Analysis & Scientific Computing',
    },
    {
      title: 'Python Programming Certification',
      issuer: 'APtech Solutions',
      status: 'In View',
      year: '2025',
      type: 'Core Python & Object-Oriented Design',
    },
  ],
  toolsAndTech: [
    { category: 'Data Analysis & BI', items: ['Microsoft Excel (Advanced, Power Query, Pivot)', 'Google Sheets', 'Tableau / BI Concepts'] },
    { category: 'Databases & Querying', items: ['SQL (MySQL / PostgreSQL concepts)', 'Data Normalization', 'Relational Schemas'] },
    { category: 'Programming & Scripting', items: ['Python (pandas, numpy, basic visualization)', 'TypeScript', 'JavaScript', 'HTML/CSS'] },
    { category: 'Automation & Cloud', items: ['n8n Workflow Automation', 'Firebase / Firestore', 'Git & GitHub', 'REST APIs'] },
  ],
  cvProjects: [
    {
      title: 'Supermarket Sales BI Dashboard',
      tool: 'Excel & Interactive Web Engine',
      year: '2025',
      description: 'Built a multi-dimensional retail analytics dashboard analyzing 1,000 transactions across 3 branches. Modeled dynamic Excel slicers, category revenue splits, and Q1 trend curves.',
    },
    {
      title: 'Billionaires Dataset Dashboard',
      tool: 'Microsoft Excel',
      year: '2025',
      description: 'Cleaned and structured a global wealth dataset. Implemented Pivot Tables, cross-slicers, and financial KPI indicators to extract demographic insights on wealth concentration.',
    },
    {
      title: 'Data Cleaning & Analysis Tasks',
      tool: 'Python (pandas), Excel, SQL',
      year: '2024',
      description: 'Extensive data hygiene practice: deduplication, null-value remediation, dataset normalization, VLOOKUP/XLOOKUP formulas, and relational SQL aggregations.',
    },
    {
      title: 'WorkNest PRO Workspace OS',
      tool: 'React, TypeScript, WebRTC, Gemini AI',
      year: '2026',
      description: 'Award-winning productivity platform engineered for team accountability, live task telemetry, and real-time WebRTC communications. Oyo State Hackathon 3rd Place winner.',
    },
  ],
  coreSkills: [
    'Data Analysis & Cleaning (VLOOKUP, XLOOKUP, IF, COUNTIFS, SUMIFS, Power Query)',
    'Data Visualization (Excel Dashboards, Charts, Slicers, KPI Cards)',
    'Database Concepts (SELECT, WHERE, GROUP BY, JOIN, Subqueries)',
    'Python for Analytics (Data wrangling with pandas, automated pipelines)',
    'Automation Workflows with n8n',
    'Analytical Thinking, Problem Solving & Technical Documentation',
  ],
  interests: [
    'Data Analytics & Interactive Visualization',
    'Business Intelligence & Decision Engines',
    'Automation & Workflow Optimization',
    'Continuous Learning & Systems Engineering',
  ],
};

export const CAPABILITIES: CapabilityGroup[] = [
  {
    id: 'analytics',
    number: '01',
    title: 'DATA ANALYTICS & BI DASHBOARDS',
    description: 'Transforming raw datasets into executive intelligence through Excel Power Query, Pivot Tables, and live dashboards.',
    skills: [
      'Advanced Excel (XLOOKUP, Power Query, Slicers)',
      'Data Cleaning, Normalization & Deduplication',
      'SQL Querying (GROUP BY, JOINs, Aggregations)',
      'Python (pandas data manipulation & analysis)',
    ],
  },
  {
    id: 'product',
    number: '02',
    title: 'PRODUCT DESIGN & INTERACTION',
    description: 'Deconstructing user friction into structured application flows and intuitive interfaces.',
    skills: [
      'Product Thinking & Problem Scoping',
      'UX & Interaction Architecture',
      'Design System Engineering',
      'Information Architecture & Wireframing',
    ],
  },
  {
    id: 'engineering',
    number: '03',
    title: 'FRONTEND & BACKEND ENGINEERING',
    description: 'Building accessible, fast client applications backed by solid server logic and APIs.',
    skills: [
      'React / TypeScript / Vite / Next.js',
      'Node.js / Express / REST APIs',
      'Tailwind CSS & Framer Motion',
      'State Management & Microservices Integration',
    ],
  },
  {
    id: 'automation',
    number: '04',
    title: 'AUTOMATION & CLOUD PIPELINES',
    description: 'Automating business logic, backend datastores, and scheduled batch operations.',
    skills: [
      'n8n Certified Workflow Automation',
      'Firebase (Auth, Firestore, Realtime DB)',
      'WebRTC Real-time Communications',
      'Role-Based Access Control (RBAC)',
    ],
  },
];

export const PHILOSOPHIES = [
  {
    id: 'systems',
    title: 'Build systems that outlive their sprints.',
    summary: 'Every codebase is a living artifact. I design modular, clearly documented software that new contributors can navigate without reverse-engineering the author intent.',
    topic: 'SYSTEMS DESIGN',
    readTime: '3 min read',
  },
  {
    id: 'data',
    title: 'Data without context is just noise.',
    summary: 'A number on a dashboard means nothing without the story behind it. I build analytics models that answer questions, not just display figures.',
    topic: 'DATA PHILOSOPHY',
    readTime: '4 min read',
  },
  {
    id: 'craft',
    title: 'Craft is a competitive advantage.',
    summary: 'Attention to typography, spacing, interaction timing, and state management distinguish products that feel inevitable from those that feel assembled. Precision is not optional.',
    topic: 'PRODUCT CRAFT',
    readTime: '3 min read',
  },
];
