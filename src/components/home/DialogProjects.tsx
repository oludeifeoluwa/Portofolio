import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { FEATURED_PROJECTS } from '../../data/projectsData';
import { BrowserFrame } from '../common/BrowserFrame';
import { Badge } from '../common/Badge';

export const DialogProjects: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-[#f7f7f7] dark:bg-[#0b0c0e] relative transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="mb-3">
              <Badge variant="white">01 / SELECTED WORK</Badge>
            </div>
            <h2
              className="font-heading font-normal text-[#000000] dark:text-[#f8fafc] tracking-tight leading-[1.15]"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              Production systems & digital tools.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#636363] dark:text-[#94a3b8] max-w-md leading-relaxed">
            Real software built with disciplined product thinking, custom interaction models, and verified production code.
          </p>
        </div>

        {/* Full-width Stacked Layout */}
        <div className="flex flex-col gap-12 sm:gap-16">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white dark:bg-[#16171f] rounded-[24px] lg:rounded-[32px] border border-[#e5e5e5] dark:border-[#272835] overflow-hidden shadow-dialog-subtle hover:border-[#d4d4d4] dark:hover:border-[#3b3d4f] transition-colors duration-300 group flex flex-col lg:flex-row"
            >
              {/* Image Side - 50% width on large screens */}
              <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 bg-[#fdfdfd] dark:bg-[#13141b] border-b lg:border-b-0 lg:border-r border-[#e5e5e5] dark:border-[#272835] flex items-center justify-center">
                <a
                  href={project.liveUrl || project.githubUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <div className="relative overflow-hidden rounded-[16px] shadow-sm group-hover:scale-[1.02] group-hover:shadow-lg transition-all duration-500">
                    <BrowserFrame
                      imageSrc={project.heroImage}
                      alt={`${project.title} interface preview`}
                      url={project.liveUrl}
                      className="aspect-[16/9] lg:aspect-[4/3] w-full object-cover"
                    />
                  </div>
                </a>
              </div>

              {/* Content Side - 50% width on large screens */}
              <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                {/* Status & Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <Badge variant="neutral">{project.category}</Badge>
                  <Badge variant="white">{project.year}</Badge>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#181825] dark:text-[#cbd5e1] px-2.5 py-0.5 border border-[#e0e0e0] dark:border-[#272835] rounded-full bg-[#fafafa] dark:bg-[#13141b]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>{project.status}</span>
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="mb-6">
                  <h3 className="font-heading text-3xl sm:text-4xl text-[#000000] dark:text-[#f8fafc] tracking-tight mb-4 group-hover:text-[#f69251] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-base sm:text-lg text-[#636363] dark:text-[#94a3b8] leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Architecture & Role Mini-Block */}
                <div className="bg-[#fcfcfc] dark:bg-[#13141b] border border-[#f0f0f0] dark:border-[#232530] rounded-[14px] p-4 text-xs font-sans text-[#484758] dark:text-[#94a3b8] leading-relaxed mb-6">
                  <span className="font-semibold text-[#000000] dark:text-[#f8fafc] block mb-1.5">Architecture & Role:</span>
                  {project.myRoleDetails}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 bg-[#f7f7f7] dark:bg-[#1f202b] text-[#484758] dark:text-[#94a3b8] rounded-[6px] border border-[#ebebeb] dark:border-[#272835]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons Row */}
                <div className="pt-6 border-t border-[#f0f0f0] dark:border-[#232530] flex items-center gap-4 mt-auto">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-sans font-medium text-sm px-5 py-2.5 rounded-full bg-[#181825] dark:bg-white text-white dark:text-black hover:bg-[#f69251] dark:hover:bg-[#f69251] dark:hover:text-black transition-all duration-300"
                    >
                      <span>Launch Application</span>
                      <ExternalLink size={16} />
                    </a>
                  )}

                  <Link
                    to={`/work/${project.slug}`}
                    className="inline-flex items-center gap-2 font-sans font-medium text-sm text-[#000000] dark:text-[#f8fafc] hover:text-[#f69251] dark:hover:text-[#f69251] transition-colors group/link ml-2"
                  >
                    <span>Read case study</span>
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-20 text-center">
          <Link
            to="/work"
            className="btn-ghost-pill inline-flex items-center gap-2 text-base px-6 py-3"
          >
            <span>View full engineering case studies archive</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
