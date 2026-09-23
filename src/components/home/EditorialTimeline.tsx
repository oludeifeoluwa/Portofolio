import React from 'react';

export const EditorialTimeline: React.FC = () => {
  const journey = [
    {
      year: '2026',
      title: 'Building Production Products & AI Workspaces',
      description: 'Engineered WorkNest (workflow workspace), CampusPay (campus wallet), and Dwell & Decor (AI decor advisor).',
    },
    {
      year: '2025',
      title: 'Backend Systems, Data Science & Full-Stack Projects',
      description: 'Explored Node.js authentication microservices, Python data analysis notebooks, emergency hub prototypes, and React applications.',
    },
    {
      year: '2024 - 2026',
      title: 'Academic & Technical Foundation',
      description: 'Mountain Top University — Computer / Data science & software engineering fundamentals.',
    },
  ];

  return (
    <section className="py-24 border-b border-[#e5e2da] bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 font-mono text-xs text-[#2563eb] tracking-widest uppercase font-bold">
            03 / EXPERIENCE & JOURNEY
          </div>

          <div className="lg:col-span-8 space-y-12">
            <h2 className="font-heading text-3xl font-bold text-[#111111] tracking-tight">
              Development Timeline.
            </h2>

            <div className="space-y-10 border-l border-[#111111] pl-6 md:pl-10">
              {journey.map((item, idx) => (
                <div key={idx} className="relative space-y-2">
                  <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 bg-[#111111] border-2 border-[#ffffff]"></div>
                  <div className="font-mono text-xs text-[#2563eb] font-bold">{item.year}</div>
                  <h3 className="font-heading text-xl font-bold text-[#111111]">{item.title}</h3>
                  <p className="text-sm font-sans text-[#555555] max-w-xl leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
