import React from 'react';
import { PROFILE } from '../../data/profileData';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 border-b border-[#e5e2da] bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 font-mono text-xs text-[#2563eb] tracking-widest uppercase font-bold">
            01 / ABOUT & PERSPECTIVE
          </div>

          <div className="lg:col-span-8 space-y-8">
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
              Software should solve real friction cleanly and reliably.
            </h2>

            <div className="text-[#555555] font-sans text-base leading-relaxed space-y-6">
              <p>
                My work spans product thinking, interaction design, full-stack engineering, and AI integration. Rather than building static mockups or superficial interfaces, I engineer software from data contracts and workflow goals down to production client code.
              </p>
              <p>
                Whether building an outcome-based productivity workspace like <span className="text-[#111111] font-bold font-mono">WorkNest</span>, engineering campus financial infrastructure like <span className="text-[#111111] font-bold font-mono">CampusPay</span>, or integrating Gemini AI advisors into e-commerce apps like <span className="text-[#111111] font-bold font-mono">Dwell & Decor</span>, I focus on system integrity and user clarity.
              </p>
            </div>

            {/* Methodology Flow */}
            <div className="pt-8 border-t border-[#e5e2da] grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs">
              <div>
                <div className="text-[#2563eb] font-bold mb-1">01 / SCOPE</div>
                <div className="text-[#555555]">Identify user friction & define clear goals.</div>
              </div>
              <div>
                <div className="text-[#2563eb] font-bold mb-1">02 / ARCHITECT</div>
                <div className="text-[#555555]">Model schemas, API contracts & UI state.</div>
              </div>
              <div>
                <div className="text-[#2563eb] font-bold mb-1">03 / BUILD</div>
                <div className="text-[#555555]">Develop in React, TypeScript, Node & Firebase.</div>
              </div>
              <div>
                <div className="text-[#2563eb] font-bold mb-1">04 / ITERATE</div>
                <div className="text-[#555555]">Verify performance, security & real user flow.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
