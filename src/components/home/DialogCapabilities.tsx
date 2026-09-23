import React from 'react';
import { Badge } from '../common/Badge';
import { CAPABILITIES } from '../../data/profileData';
import { Code2, Layers, Cpu, Terminal } from 'lucide-react';

const icons = [Layers, Code2, Cpu, Terminal];

export const DialogCapabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 bg-[#f7f7f7] dark:bg-[#0b0c0e] relative transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="mb-3">
              <Badge variant="white">02 / CORE CAPABILITIES</Badge>
            </div>
            <h2
              className="font-heading font-normal text-[#000000] dark:text-[#f8fafc] tracking-tight leading-[1.15]"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              How I think, structure & build.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#636363] dark:text-[#94a3b8] max-w-md leading-relaxed">
            I don't just assemble visual templates. I construct end-to-end applications from database contracts to tactile user interfaces.
          </p>
        </div>

        {/* 4-Card Grid in 24px White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((cap, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={cap.id}
                className="bg-white dark:bg-[#16171f] rounded-[24px] border border-[#e5e5e5] dark:border-[#272835] p-6 sm:p-8 shadow-dialog-subtle flex flex-col justify-between transition-all duration-300 hover:border-[#d4d4d4] hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-[#949494] font-medium">
                      {cap.number}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#f7f7f7] border border-[#ebebeb] dark:border-[#272835] flex items-center justify-center text-[#181825] dark:text-[#e2e8f0]">
                      <Icon size={15} />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl text-[#000000] dark:text-[#f8fafc] font-normal mb-3 tracking-tight">
                    {cap.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#636363] dark:text-[#94a3b8] leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#f0f0f0]">
                  <ul className="space-y-2">
                    {cap.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-xs font-sans text-[#484758] dark:text-[#94a3b8] flex items-start gap-2"
                      >
                        <span className="text-[#949494] mt-0.5">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};