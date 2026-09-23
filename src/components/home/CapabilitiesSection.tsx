import React from 'react';

export const CapabilitiesSection: React.FC = () => {
  const skillCategories = [
    {
      category: 'DEVELOPMENT',
      skills: ['React / Vite / Next.js', 'TypeScript / JavaScript', 'React Native / Mobile', 'Node.js / Express', 'Python / REST APIs', 'Tailwind CSS / HTML5'],
    },
    {
      category: 'DATA & SYSTEMS',
      skills: ['Firebase (Firestore & Auth)', 'SQL & NoSQL Database Modeling', 'WebRTC Real-Time Streaming', 'Role-Based Access Control (RBAC)', 'Data Analysis & Modeling', 'System Architecture'],
    },
    {
      category: 'AI & INTEGRATION',
      skills: ['Google Gemini API (@google/genai)', 'AI Assistant & Decor Advisors', 'Prompt Context Grounding', 'Automated PDF Generation (jsPDF)', 'API Integration & Proxying'],
    },
    {
      category: 'TOOLS & WORKFLOW',
      skills: ['Git / GitHub Workflows', 'Electron Desktop Apps', 'Vite / Webpack Build Tooling', 'Postman / API Testing', 'Figma & Wireframing'],
    },
  ];

  return (
    <section className="py-24 border-b border-[#e5e2da] bg-[#f9f8f5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4 font-mono text-xs text-[#2563eb] tracking-widest uppercase font-bold">
            02 / SKILLS & TECHNICAL CAPABILITIES
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
              Typographic capability index across product, code, data, and systems.
            </h2>
          </div>
        </div>

        {/* Typographic Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillCategories.map((group, idx) => (
            <div key={group.category} className="space-y-4 border-t border-[#111111] pt-4">
              <div className="font-mono text-xs text-[#2563eb] font-bold uppercase tracking-widest">
                0{idx + 1} // {group.category}
              </div>
              <ul className="space-y-2.5 font-mono text-xs text-[#111111]">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="text-[#999999]">›</span>
                    <span className="hover:text-[#2563eb] transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
