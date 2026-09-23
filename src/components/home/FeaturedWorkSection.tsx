import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Github } from 'lucide-react';
import { FEATURED_PROJECTS } from '../../data/projectsData';
import { CursorPreview } from '../common/CursorPreview';
import { Badge } from '../common/Badge';

export const FeaturedWorkSection: React.FC = () => {
  const [activeHoverImage, setActiveHoverImage] = useState<string | null>(null);
  const [activeHoverTitle, setActiveHoverTitle] = useState<string | null>(null);

  return (
    <section id="work" className="py-24 border-b border-[#e5e2da] bg-[#f9f8f5] relative">
      {/* Desktop Floating Cursor Preview */}
      <CursorPreview activeImage={activeHoverImage} activeTitle={activeHoverTitle} />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="font-mono text-xs text-[#2563eb] tracking-widest uppercase font-bold">
              04 / SELECTED WORK
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
              Featured Projects.
            </h2>
          </div>
          <p className="text-[#555555] font-sans text-sm max-w-md leading-relaxed">
            Case studies of digital products I've architected and built. Hover over any project entry to reveal live system previews.
          </p>
        </div>

        {/* Editorial Project List */}
        <div className="space-y-24">
          {FEATURED_PROJECTS.map((project, index) => (
            <div
              key={project.slug}
              className="border-t border-[#111111] pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
              onMouseEnter={() => {
                if (project.heroImage) {
                  setActiveHoverImage(project.heroImage);
                  setActiveHoverTitle(project.title);
                }
              }}
              onMouseLeave={() => {
                setActiveHoverImage(null);
                setActiveHoverTitle(null);
              }}
            >
              {/* Project Number & Basic Metadata */}
              <div className="lg:col-span-4 space-y-4">
                <div className="font-mono text-3xl font-bold text-[#2563eb]">
                  0{index + 1}
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#111111] tracking-tight">
                    <Link
                      to={`/work/${project.slug}`}
                      className="hover:text-[#2563eb] transition-colors"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <div className="text-xs font-mono text-[#555555] uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <Badge variant="accent">{project.status}</Badge>
                  <Badge variant="neutral">{project.year}</Badge>
                </div>
              </div>

              {/* Description & Tech Stack */}
              <div className="lg:col-span-8 space-y-6">
                <p className="text-lg text-[#111111] font-sans leading-relaxed">
                  {project.tagline}
                </p>

                <p className="text-sm text-[#555555] font-sans leading-relaxed">
                  {project.overview}
                </p>

                {/* Tech Metadata Tags */}
                <div className="border-t border-[#e5e2da] pt-4 font-mono text-xs text-[#555555] flex flex-wrap items-center gap-x-6 gap-y-2">
                  <div>
                    <span className="text-[#999999]">ROLE: </span>
                    <span className="text-[#111111] font-medium">{project.role}</span>
                  </div>
                  <div>
                    <span className="text-[#999999]">TECH: </span>
                    <span className="text-[#111111] font-medium">{project.technologies.join(' · ')}</span>
                  </div>
                </div>

                {/* Large Project Visual */}
                {project.heroImage && (
                  <div className="rounded-none border border-[#e5e2da] bg-white dark:bg-[#16171f] overflow-hidden aspect-[16/9] mt-6">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
                    />
                  </div>
                )}

                {/* Text Arrow Actions */}
                <div className="pt-4 flex items-center gap-8 font-mono text-xs">
                  <Link
                    to={`/work/${project.slug}`}
                    className="inline-flex items-center gap-2 text-[#111111] font-bold hover:text-[#2563eb] transition-colors group/link"
                  >
                    <span className="hover-underline-animation">Read case study</span>
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#555555] hover:text-[#111111] transition-colors"
                    >
                      <Github size={13} />
                      <span>GitHub</span>
                      <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
