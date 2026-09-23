import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Mail } from 'lucide-react';
import { PROFILE } from '../../data/profileData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f7f7f7] dark:bg-[#0b0c0e] border-t border-[#e5e5e5] dark:border-[#272835] py-16 text-[#636363] dark:text-[#94a3b8] font-sans">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          <div className="md:col-span-6 space-y-3">
            <h2 className="font-heading text-lg text-[#000000] dark:text-[#f8fafc] font-normal tracking-tight">
              {PROFILE.name}
            </h2>
            <p className="text-sm text-[#636363] dark:text-[#94a3b8] max-w-sm leading-relaxed">
              Product thinking, full-stack systems engineering, and AI tool integration. Built with clarity, discipline, and craft.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2 text-xs">
            <div className="text-[#000000] dark:text-[#f8fafc] font-medium uppercase tracking-wider mb-3">SECTIONS</div>
            <ul className="space-y-2">
              <li>
                <a href="/#work" className="hover:text-[#000000] dark:hover:text-[#f8fafc] dark:text-[#f8fafc] transition-colors">
                  01 / SELECTED WORK
                </a>
              </li>
              <li>
                <a href="/#analytics" className="hover:text-[#000000] dark:hover:text-[#f8fafc] dark:text-[#f8fafc] transition-colors">
                  02 / EXCEL DASHBOARDS & XLSX
                </a>
              </li>
              <li>
                <a href="/#achievements" className="hover:text-[#000000] dark:hover:text-[#f8fafc] dark:text-[#f8fafc] transition-colors">
                  03 / ACHIEVEMENTS & HACKATHON
                </a>
              </li>
              <li>
                <a href="/#capabilities" className="hover:text-[#000000] dark:hover:text-[#f8fafc] dark:text-[#f8fafc] transition-colors">
                  04 / CAPABILITIES
                </a>
              </li>
              <li>
                <a href="/#experiments" className="hover:text-[#000000] dark:hover:text-[#f8fafc] dark:text-[#f8fafc] transition-colors">
                  05 / EXPERIMENTS & CODE
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-[#000000] dark:hover:text-[#f8fafc] dark:text-[#f8fafc] transition-colors">
                  06 / ABOUT THE BUILDER
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-[#000000] dark:hover:text-[#f8fafc] dark:text-[#f8fafc] transition-colors">
                  07 / CONTACT
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-2 text-xs">
            <div className="text-[#000000] dark:text-[#f8fafc] font-medium uppercase tracking-wider mb-3">CONNECT</div>
            <ul className="space-y-2">
              <li>
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#000000] dark:hover:text-[#f8fafc] dark:text-[#f8fafc] transition-colors"
                >
                  <Github size={13} />
                  <span>GitHub</span>
                  <ArrowUpRight size={11} className="text-[#949494] dark:text-[#64748b]" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-1.5 hover:text-[#000000] dark:hover:text-[#f8fafc] dark:text-[#f8fafc] transition-colors"
                >
                  <Mail size={13} />
                  <span>{PROFILE.email}</span>
                  <ArrowUpRight size={11} className="text-[#949494] dark:text-[#64748b]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#e5e5e5] dark:border-[#272835] flex flex-col sm:flex-row items-center justify-between text-xs text-[#949494] dark:text-[#64748b] gap-4">
          <div>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
          <div>Lagos, Nigeria — 6.5244° N, 3.3792° E</div>
        </div>
      </div>
    </footer>
  );
};