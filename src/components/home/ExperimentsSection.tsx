import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { GITHUB_PROJECTS } from '../../data/githubProjectsData';
import { Badge } from '../common/Badge';

export const ExperimentsSection: React.FC = () => {
  return (
    <section className="py-24 border-b border-[#e5e2da] bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="font-mono text-xs text-[#2563eb] tracking-widest uppercase font-bold">
              05 / OTHER BUILDS & EXPERIMENTS
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-[#111111]">
              GitHub & Technical Prototypes.
            </h2>
          </div>
          <p className="text-[#555555] font-sans text-sm max-w-md leading-relaxed">
            Verified backend services, emergency response hubs, data science notebooks, and technical builds backed by public source repositories.
          </p>
        </div>

        {/* Editorial Table List */}
        <div className="divide-y divide-[#e5e2da] border-t border-b border-[#111111]">
          {GITHUB_PROJECTS.map((repo) => (
            <div
              key={repo.name}
              className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-[#f9f8f5] px-3 transition-colors group"
            >
              <div className="md:col-span-4 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-heading text-lg font-bold text-[#111111] group-hover:text-[#2563eb] transition-colors">
                    {repo.name}
                  </span>
                  <Badge variant="accent">{repo.status}</Badge>
                </div>
                <div className="font-mono text-[11px] text-[#666666]">{repo.category}</div>
              </div>

              <div className="md:col-span-5 text-sm text-[#555555] font-sans leading-relaxed">
                {repo.description}
              </div>

              <div className="md:col-span-3 flex flex-col md:items-end gap-2 font-mono text-xs">
                <div className="text-[#666666] flex flex-wrap gap-1 md:justify-end">
                  {repo.technology.map((tech) => (
                    <span key={tech} className="bg-[#f3f1ec] px-1.5 py-0.5 text-[10px] text-[#111111]">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={repo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#2563eb] font-bold hover:underline pt-1"
                >
                  <Github size={12} />
                  <span>VIEW REPO</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
