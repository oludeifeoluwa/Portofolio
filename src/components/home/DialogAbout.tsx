import React from 'react';
import { Badge } from '../common/Badge';
import { PROFILE } from '../../data/profileData';
import { MapPin, Mail, Github, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const DialogAbout: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#f7f7f7] dark:bg-[#0b0c0e] relative transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="mb-3">
              <Badge variant="white">05 / ABOUT THE BUILDER</Badge>
            </div>
            <h2
              className="font-heading font-normal text-[#000000] dark:text-[#f8fafc] tracking-tight leading-[1.15]"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              Crafting products with discipline.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#636363] dark:text-[#94a3b8] max-w-md leading-relaxed">
            A digital product builder, UX engineer, and full-stack developer who constructs working software from the database schema to the tactile user interface.
          </p>
        </div>

        {/* Profile Showcase Card (24px White Card) */}
        <div className="bg-white dark:bg-[#16171f] rounded-[24px] border border-[#e5e5e5] dark:border-[#272835] p-8 sm:p-12 shadow-dialog-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Picture Portrait */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[300px] aspect-[3/4] rounded-[20px] overflow-hidden border border-[#e5e5e5] dark:border-[#272835] shadow-dialog-subtle group">
                <img
                  src="/assets/ifeoluwa-photo.jpg"
                  alt="Olude Ifeoluwa"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500 filter contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 bg-white dark:bg-[#16171f]/90 backdrop-blur-md px-3 py-2 rounded-[12px] border border-white/40 flex items-center justify-between">
                  <div>
                    <div className="font-sans text-xs font-semibold text-[#181825] dark:text-[#e2e8f0]">Olude Ifeoluwa</div>
                    <div className="text-[10px] font-mono text-[#636363] dark:text-[#94a3b8]">Lagos, Nigeria</div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
                </div>
              </div>
            </div>

            {/* Right: Bio & Philosophy */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="neutral">Lead Product Builder</Badge>
                <Badge variant="white">Full-Stack Engineer</Badge>
                <span className="text-xs font-mono text-[#949494] px-2.5 py-0.5 border border-[#ebebeb] dark:border-[#272835] rounded-full">
                  Available for Select Projects
                </span>
              </div>

              <div>
                <h3 className="font-heading text-3xl sm:text-4xl text-[#000000] dark:text-[#f8fafc] tracking-tight mb-3">
                  {PROFILE.name}
                </h3>
                <p className="font-sans text-base text-[#636363] dark:text-[#94a3b8] leading-relaxed">
                  {PROFILE.bio}
                </p>
              </div>

              {/* Personal Manifesto Quote */}
              <div className="p-5 rounded-[16px] bg-[#fafafa] border border-[#f0f0f0] font-sans text-sm text-[#484758] dark:text-[#94a3b8] leading-relaxed">
                <span className="font-medium text-[#000000] dark:text-[#f8fafc] block mb-1">Guiding Principle:</span>
                "{PROFILE.statement}"
              </div>

              {/* Core Strengths Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs font-sans text-[#484758] dark:text-[#94a3b8]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#f69251] shrink-0" />
                  <span>Product thinking & problem deconstruction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#f69251] shrink-0" />
                  <span>Full-stack architecture (React, Node, Firebase)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#f69251] shrink-0" />
                  <span>AI assistant & LLM prompt engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#f69251] shrink-0" />
                  <span>Data analytics & executive Excel dashboards</span>
                </div>
              </div>

              {/* Links Row */}
              <div className="pt-4 border-t border-[#f0f0f0] flex flex-wrap items-center gap-6 text-xs sm:text-sm font-sans text-[#636363] dark:text-[#94a3b8]">
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#949494]" />
                  <span>{PROFILE.location}</span>
                </div>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-1 hover:text-[#000000] dark:text-[#f8fafc] transition-colors"
                >
                  <Mail size={14} className="text-[#949494]" />
                  <span>{PROFILE.email}</span>
                </a>
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#000000] dark:text-[#f8fafc] transition-colors"
                >
                  <Github size={14} className="text-[#949494]" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};