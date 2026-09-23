import React from 'react';
import { Badge } from '../common/Badge';
import { Trophy, Award, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';

interface TimelineDeliverable {
  text: string;
  icon?: 'trophy' | 'award' | 'chart' | 'default';
}

interface TimelineItem {
  year: string;
  role: string;
  focus: string;
  deliverables: TimelineDeliverable[];
}

const TIMELINE: TimelineItem[] = [
  {
    year: '2026',
    role: 'Digital Product Builder & Systems Engineer',
    focus: 'Engineering multi-tiered web applications, WebRTC communications, AI workflows — and competing in Oyo State technology hackathons.',
    deliverables: [
      { text: 'Engineered WorkNest: Collaborative workspace with team accountability pipelines and Gemini AI integration.' },
      { text: 'Designed CampusPay: Microservice-aligned student wallet architecture with QR scan-to-pay interfaces.' },
      { text: 'Built Dwell & Decor: E-commerce platform with AI spatial decor consultation and client-side PDF receipts.' },
      { text: 'Hackton 1.0 (Oyo State Bureau of ICT): WorkNest team awarded 3rd Place Certificate of Excellence at House of Chiefs Secretariat, Ibadan.', icon: 'trophy' },
      { text: 'Certified by L.E.G.I.T Innovation Hub × Oyo State Government: Web & Mobile App Development (AI-Assisted / Vibe Coding) Program.', icon: 'award' },
      { text: 'Kaggle Python Course Certification: Applied Python to data analysis, exploratory ML, and automated pipelines.', icon: 'chart' },
    ],
  },
  {
    year: '2025',
    role: 'Training Data Analyst & Full-Stack Developer',
    focus: 'Constructing robust client interfaces, Excel business intelligence models, and transactional tracking engines.',
    deliverables: [
      { text: 'Developed Supermarket Sales BI Dashboard: Multi-slicer financial model analyzing 1,000 retail records.' },
      { text: 'Cleaned and structured Global Billionaires wealth dataset with Pivot Tables, cross-slicers, and demographic KPIs.' },
      { text: 'Developed Aproko Emergency Hub for real-time citizen alert routing and responder notifications.' },
      { text: 'Constructed Sales Inventory System with Python and SQLite for transactional stock tracking.' },
      { text: 'Standardized component-driven design systems with Tailwind CSS and Framer Motion.' },
    ],
  },
  {
    year: '2024',
    role: 'Software Engineering Undergraduate & Systems Explorer',
    focus: 'Foundational computer science, data structures, backend microservices, and exploratory data hygiene at Mountain Top University.',
    deliverables: [
      { text: 'Enrolled in BSc Software Engineering at Mountain Top University (2023 – 2027).' },
      { text: 'Conducted systematic data cleaning: deduplication, missing-value imputation, and complex Excel formulas (XLOOKUP, COUNTIFS, SUMIFS).' },
      { text: 'Implemented secure Node.js authentication microservice with JWT signing, bcrypt hashing, and role checks.' },
      { text: 'Authored Python data transformation scripts using pandas for automated tabular analytics.' },
    ],
  },
];

export const DialogTimeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 bg-[#f7f7f7] dark:bg-[#0b0c0e] relative transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="mb-3">
              <Badge variant="white">04 / TRAJECTORY & EXPERIENCE</Badge>
            </div>
            <h2
              className="font-heading font-normal text-[#000000] dark:text-[#f8fafc] dark:text-[#f8fafc] tracking-tight leading-[1.15]"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              A steady track record of shipping.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#636363] dark:text-[#94a3b8] dark:text-[#94a3b8] max-w-md leading-relaxed">
            From computational engineering and database architecture to live-deployed digital products and verified analytics models.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {TIMELINE.map((item) => (
            <div
              key={item.year}
              className="bg-white dark:bg-[#16171f] dark:bg-[#16171f] rounded-[24px] border border-[#e5e5e5] dark:border-[#272835] dark:border-[#272835] p-6 sm:p-10 shadow-dialog-subtle transition-all duration-300 hover:border-[#d4d4d4] dark:hover:border-[#3b3d4f]"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
                <div className="md:col-span-3">
                  <span className="font-heading text-4xl sm:text-5xl text-[#000000] dark:text-[#f8fafc] dark:text-[#f8fafc] font-normal tracking-tight block mb-1">
                    {item.year}
                  </span>
                  <span className="text-xs font-mono text-[#949494] dark:text-[#64748b] uppercase tracking-wider">
                    ANNUAL CYCLE
                  </span>
                </div>

                <div className="md:col-span-9 space-y-4">
                  <div>
                    <h3 className="font-sans text-lg font-medium text-[#181825] dark:text-[#e2e8f0] dark:text-[#f8fafc] mb-1">
                      {item.role}
                    </h3>
                    <p className="font-sans text-sm text-[#636363] dark:text-[#94a3b8] dark:text-[#94a3b8] leading-relaxed">
                      {item.focus}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#f0f0f0] dark:border-[#232530]">
                    <ul className="space-y-2.5">
                      {item.deliverables.map((del, i) => (
                        <li
                          key={i}
                          className="text-xs sm:text-sm font-sans text-[#484758] dark:text-[#94a3b8] dark:text-[#cbd5e1] flex items-start gap-2.5"
                        >
                          {del.icon === 'trophy' ? (
                            <Trophy size={14} className="text-[#f69251] shrink-0 mt-0.5" />
                          ) : del.icon === 'award' ? (
                            <Award size={14} className="text-[#f69251] shrink-0 mt-0.5" />
                          ) : del.icon === 'chart' ? (
                            <BarChart3 size={14} className="text-[#f69251] shrink-0 mt-0.5" />
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f69251] mt-2 shrink-0"></span>
                          )}
                          <span>{del.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
