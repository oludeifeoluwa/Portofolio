import React from 'react';
import { Badge } from '../common/Badge';
import { GITHUB_PROJECTS } from '../../data/githubProjectsData';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';

export const DialogExperiments: React.FC = () => {
  return (
    <section id="experiments" className="py-24 bg-[#f7f7f7] dark:bg-[#0b0c0e] relative transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="mb-3">
              <Badge variant="white">03 / EXPERIMENTS & REPOSITORIES</Badge>
            </div>
            <h2
              className="font-heading font-normal text-[#000000] dark:text-[#f8fafc] tracking-tight leading-[1.15]"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              Open source code, tools & prototypes.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#636363] dark:text-[#94a3b8] max-w-md leading-relaxed">
            Targeted explorations across authentication services, emergency incident management, data analytics, and utility APIs.
          </p>
        </div>

        {/* 6-Card Grid in 24px White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GITHUB_PROJECTS.map((repo) => (
            <a
              key={repo.name}
              href={repo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-[#16171f] rounded-[24px] border border-[#e5e5e5] dark:border-[#272835] p-6 sm:p-7 shadow-dialog-subtle flex flex-col justify-between transition-all duration-300 hover:border-[#d4d4d4] hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-[#949494] px-2.5 py-0.5 bg-[#f7f7f7] border border-[#ebebeb] dark:border-[#272835] rounded-full">
                    {repo.category}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#fafafa] flex items-center justify-center text-[#636363] dark:text-[#94a3b8] group-hover:text-[#000000] dark:text-[#f8fafc] group-hover:bg-[#f0f0f0] transition-colors">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                <h3 className="font-heading text-lg font-normal text-[#000000] dark:text-[#f8fafc] mb-2 tracking-tight group-hover:text-[#f69251] transition-colors">
                  {repo.name}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#636363] dark:text-[#94a3b8] leading-relaxed mb-6 line-clamp-3">
                  {repo.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0f0f0] flex flex-wrap gap-1.5 items-center">
                {repo.technology.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-sans px-2 py-0.5 bg-[#f7f7f7] text-[#484758] dark:text-[#94a3b8] rounded-[6px] border border-[#ebebeb] dark:border-[#272835]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};