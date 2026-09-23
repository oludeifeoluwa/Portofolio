import React from 'react';
import { PHILOSOPHIES } from '../../data/profileData';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-24 border-b border-[#e5e2da] bg-[#f9f8f5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4 font-mono text-xs text-[#2563eb] tracking-widest uppercase font-bold">
            06 / PERSPECTIVES & INSIGHTS
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
              How I think about systems, software craft, and workflow design.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PHILOSOPHIES.map((article) => (
            <div
              key={article.id}
              className="p-8 border border-[#e5e2da] bg-white dark:bg-[#16171f] hover:border-[#111111] transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#2563eb] font-bold">{article.topic}</span>
                  <span className="text-[#666666]">{article.readTime}</span>
                </div>

                <h3 className="font-heading text-xl font-bold text-[#111111] leading-snug">
                  {article.title}
                </h3>

                <p className="text-sm text-[#555555] font-sans leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-[#e5e2da] font-mono text-xs text-[#666666] flex items-center justify-between">
                <span>VERIFIED PERSPECTIVE</span>
                <span className="text-[#111111]">OLUDE IFEOLUWA</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
