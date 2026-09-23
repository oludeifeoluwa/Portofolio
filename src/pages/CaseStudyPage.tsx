import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ArrowRight, CheckCircle2, Github } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/projectsData';
import { Badge } from '../components/common/Badge';
import { BrowserFrame } from '../components/common/BrowserFrame';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = FEATURED_PROJECTS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen pt-36 pb-24 max-w-4xl mx-auto px-6 text-center space-y-6 bg-[#f7f7f7]">
        <h1 className="font-heading text-4xl font-normal text-[#000000]">Case Study Not Found</h1>
        <p className="text-[#636363] font-sans">The requested project case study does not exist.</p>
        <Link
          to="/"
          className="btn-tangerine inline-flex items-center gap-2"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  const currentIndex = FEATURED_PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = FEATURED_PROJECTS[(currentIndex + 1) % FEATURED_PROJECTS.length];

  return (
    <article className="pt-36 pb-24 min-h-screen bg-[#f7f7f7] font-sans text-[#181825]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 space-y-12">
        {/* Back Button */}
        <div>
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 font-sans text-sm text-[#636363] hover:text-[#000000] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to selected work</span>
          </Link>
        </div>

        {/* Case Study Header Card (24px white card) */}
        <div className="bg-white rounded-[24px] border border-[#e5e5e5] p-8 sm:p-12 shadow-dialog-subtle space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="neutral">{project.category}</Badge>
              <Badge variant="white">{project.year}</Badge>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#181825] px-2.5 py-0.5 border border-[#e0e0e0] rounded-full bg-[#fafafa]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></span>
                <span>{project.status}</span>
              </span>
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tangerine inline-flex items-center gap-1.5 text-xs sm:text-sm py-2 px-5"
              >
                <span>Visit Live Application</span>
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>

          <div>
            <h1
              className="font-heading font-normal text-[#000000] tracking-tight leading-[1.12] mb-4"
              style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}
            >
              {project.title}
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[#636363] leading-relaxed max-w-3xl">
              {project.tagline}
            </p>
          </div>

          {/* Project Metadata Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#f0f0f0] text-xs font-sans">
            <div>
              <div className="text-[#949494] uppercase tracking-wider text-[11px] mb-1">My Role</div>
              <div className="text-[#000000] font-medium">{project.role}</div>
            </div>
            <div>
              <div className="text-[#949494] uppercase tracking-wider text-[11px] mb-1">Year</div>
              <div className="text-[#000000] font-medium">{project.year}</div>
            </div>
            <div>
              <div className="text-[#949494] uppercase tracking-wider text-[11px] mb-1">Core Stack</div>
              <div className="text-[#000000] font-medium truncate">
                {project.technologies.slice(0, 3).join(', ')}
              </div>
            </div>
            <div>
              <div className="text-[#949494] uppercase tracking-wider text-[11px] mb-1">Repository</div>
              <div>
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#000000] font-medium hover:text-[#f69251] transition-colors inline-flex items-center gap-1"
                  >
                    <span>View GitHub</span>
                    <ArrowUpRight size={12} />
                  </a>
                ) : (
                  <span className="text-[#949494]">Private Codebase</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual Mockup Frame */}
        <BrowserFrame
          imageSrc={project.heroImage}
          alt={`${project.title} detailed interface preview`}
          url={project.liveUrl}
          className="aspect-[16/8.5] sm:aspect-[16/7.5] w-full"
        />

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative Column in 24px White Cards */}
          <div className="lg:col-span-8 space-y-8">
            {/* 01 Overview */}
            <section className="bg-white rounded-[24px] border border-[#e5e5e5] p-8 sm:p-10 shadow-dialog-subtle space-y-4">
              <div className="mb-1">
                <Badge variant="white">01 / OVERVIEW</Badge>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#000000] font-normal tracking-tight">
                What is {project.title}?
              </h2>
              <p className="text-[#636363] text-base leading-relaxed">
                {project.overview}
              </p>
            </section>

            {/* 02 Problem */}
            <section className="bg-white rounded-[24px] border border-[#e5e5e5] p-8 sm:p-10 shadow-dialog-subtle space-y-4">
              <div className="mb-1">
                <Badge variant="white">02 / THE PROBLEM</Badge>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#000000] font-normal tracking-tight">
                The Friction & Operational Challenge
              </h2>
              <p className="text-[#636363] text-base leading-relaxed">
                {project.problem}
              </p>
            </section>

            {/* 03 My Role & Responsibilities */}
            <section className="bg-white rounded-[24px] border border-[#e5e5e5] p-8 sm:p-10 shadow-dialog-subtle space-y-4">
              <div className="mb-1">
                <Badge variant="white">03 / RESPONSIBILITIES</Badge>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#000000] font-normal tracking-tight">
                Personal Contribution & Systems Architecture
              </h2>
              <p className="text-[#636363] text-base leading-relaxed">
                {project.context}
              </p>
              <div className="p-5 rounded-[16px] bg-[#fafafa] border border-[#f0f0f0] text-sm text-[#181825] leading-relaxed">
                <span className="font-medium text-[#000000] block mb-1">Architecture Execution:</span>
                {project.myRoleDetails}
              </div>
            </section>

            {/* 04 Workflow Steps */}
            {project.workflowSteps && (
              <section className="bg-white rounded-[24px] border border-[#e5e5e5] p-8 sm:p-10 shadow-dialog-subtle space-y-6">
                <div className="mb-1">
                  <Badge variant="white">04 / PIPELINE</Badge>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl text-[#000000] font-normal tracking-tight">
                  The Accountability Stages
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.workflowSteps.map((ws) => (
                    <div key={ws.step} className="p-4 rounded-[16px] bg-[#fafafa] border border-[#f0f0f0] space-y-1">
                      <div className="font-mono text-xs font-semibold text-[#000000] flex items-center gap-2">
                        <span className="text-[#f69251]">{ws.step}</span>
                        <span>{ws.label}</span>
                      </div>
                      <p className="text-[#636363] text-xs leading-relaxed">{ws.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 05 Strategic Approach */}
            <section className="bg-white rounded-[24px] border border-[#e5e5e5] p-8 sm:p-10 shadow-dialog-subtle space-y-4">
              <div className="mb-1">
                <Badge variant="white">05 / STRATEGY</Badge>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#000000] font-normal tracking-tight">
                Implementation Strategy
              </h2>
              <ul className="space-y-3 pt-2">
                {project.approach.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#484758]">
                    <CheckCircle2 size={16} className="text-[#f69251] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 06 Architecture Diagram */}
            {project.architectureDiagram && (
              <section className="bg-white rounded-[24px] border border-[#e5e5e5] p-8 sm:p-10 shadow-dialog-subtle space-y-4">
                <div className="mb-1">
                  <Badge variant="white">06 / SYSTEM ARCHITECTURE</Badge>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl text-[#000000] font-normal tracking-tight">
                  Data Flow Diagram
                </h2>
                <div className="p-6 rounded-[16px] bg-[#181825] text-white font-mono text-xs whitespace-pre overflow-x-auto leading-relaxed">
                  {project.architectureDiagram}
                </div>
              </section>
            )}

            {/* 07 Challenges & Resolutions */}
            <section className="bg-white rounded-[24px] border border-[#e5e5e5] p-8 sm:p-10 shadow-dialog-subtle space-y-6">
              <div className="mb-1">
                <Badge variant="white">07 / ENGINEERING HURDLES</Badge>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#000000] font-normal tracking-tight">
                Challenges & Solutions
              </h2>
              <div className="space-y-4">
                {project.challenges.map((c, idx) => (
                  <div key={idx} className="p-6 rounded-[16px] bg-[#fafafa] border border-[#f0f0f0] space-y-2">
                    <div className="font-sans text-xs font-semibold text-[#000000]">
                      CHALLENGE 0{idx + 1}: {c.problem}
                    </div>
                    <div className="text-[#636363] text-sm leading-relaxed">
                      <span className="font-medium text-[#181825] mr-2">Resolution:</span>
                      {c.resolution}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sticky Sidebar (24px White Card) */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            <div className="bg-white rounded-[24px] border border-[#e5e5e5] p-6 sm:p-8 shadow-dialog-subtle space-y-6">
              <div className="font-sans text-xs font-semibold text-[#000000] uppercase tracking-wider">
                System Index
              </div>

              <div className="space-y-4 text-xs font-sans">
                <div>
                  <div className="text-[#949494] mb-2">Technologies Used</div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#f7f7f7] border border-[#ebebeb] px-2.5 py-1 text-[#484758] rounded-[6px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#f0f0f0] pt-4">
                  <div className="text-[#949494]">Development Status</div>
                  <div className="text-[#000000] font-medium mt-1">{project.status}</div>
                </div>

                <div className="border-t border-[#f0f0f0] pt-4 space-y-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-tangerine py-2.5 px-4 flex items-center justify-center gap-2 text-xs"
                    >
                      <span>Launch Live App</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#181825] text-white hover:bg-[#000000] font-medium py-2.5 px-4 rounded-[28px] flex items-center justify-center gap-2 transition-colors text-xs"
                    >
                      <Github size={14} />
                      <span>Inspect Repository</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Project Footer Card */}
        <div className="mt-16">
          <div className="bg-white rounded-[24px] border border-[#e5e5e5] p-8 sm:p-12 shadow-dialog-subtle flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="text-xs font-mono text-[#949494] uppercase tracking-widest">Next Case Study</div>
              <h3 className="font-heading text-3xl font-normal text-[#000000]">{nextProject.title}</h3>
              <p className="text-xs sm:text-sm text-[#636363] font-sans max-w-md">{nextProject.tagline}</p>
            </div>

            <Link
              to={`/work/${nextProject.slug}`}
              className="btn-tangerine inline-flex items-center gap-2 shrink-0"
            >
              <span>Explore {nextProject.title}</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};