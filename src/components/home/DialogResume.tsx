import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '../common/Badge';
import { PROFILE, CV_DATA } from '../../data/profileData';
import {
  FileText,
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  GraduationCap,
  Award,
  CheckCircle2,
  Database,
  BarChart3,
  Cpu,
  Workflow,
  ExternalLink,
  Copy,
  Check,
} from 'lucide-react';

export const DialogResume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'skills' | 'projects' | 'certifications'>('overview');
  const [copied, setCopied] = useState(false);

  const copyContact = () => {
    navigator.clipboard.writeText(`${PROFILE.name} | ${PROFILE.email} | ${PROFILE.phone} | ${PROFILE.linkedin}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="cv" className="py-24 bg-[#f7f7f7] dark:bg-[#0b0c0e] relative transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="mb-3">
              <Badge variant="white">03 / CURRICULUM VITAE & CREDENTIALS</Badge>
            </div>
            <h2
              className="font-heading font-normal text-[#000000] dark:text-[#f8fafc] dark:text-[#f8fafc] tracking-tight leading-[1.15]"
              style={{ fontSize: 'clamp(32px, 5vw, 50px)' }}
            >
              Curriculum Vitae.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={copyContact}
              className="btn-ghost-pill inline-flex items-center gap-2 text-xs cursor-pointer"
            >
              {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
              <span>{copied ? 'Copied Contact Info' : 'Copy Contact Info'}</span>
            </button>
            <a
              href="#contact"
              className="btn-tangerine inline-flex items-center gap-2 text-xs"
            >
              <Mail size={13} />
              <span>Contact Directly</span>
            </a>
          </div>
        </div>

        {/* Main Resume Card */}
        <div className="bg-white dark:bg-[#16171f] dark:bg-[#16171f] rounded-[24px] border border-[#e5e5e5] dark:border-[#272835] dark:border-[#272835] shadow-dialog-subtle overflow-hidden transition-all duration-300">
          {/* Header Banner: Contact & Summary Bar */}
          <div className="p-6 sm:p-10 border-b border-[#f0f0f0] dark:border-[#232530] bg-[#fafafa] dark:bg-[#13141b]">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <img
                  src="/assets/ifeoluwa-photo.jpg"
                  alt={PROFILE.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-white dark:border-[#272835] shadow-sm shrink-0"
                />
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl text-[#000000] dark:text-[#f8fafc] dark:text-[#f8fafc] font-bold tracking-tight mb-1">
                    {PROFILE.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm font-medium text-[#f69251] mb-2">
                    {PROFILE.title}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-[#636363] dark:text-[#94a3b8] dark:text-[#94a3b8] max-w-2xl leading-relaxed">
                    {PROFILE.summary}
                  </p>
                </div>
              </div>

              {/* Quick Contact Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 text-xs font-sans shrink-0">
                <a
                  href={`tel:${PROFILE.phone}`}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-[#16171f] dark:bg-[#1a1b24] border border-[#e5e5e5] dark:border-[#272835] dark:border-[#272835] text-[#334155] dark:text-[#cbd5e1] hover:text-[#f69251] transition-colors"
                >
                  <Phone size={13} className="text-[#f69251]" />
                  <span>{PROFILE.phone}</span>
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-[#16171f] dark:bg-[#1a1b24] border border-[#e5e5e5] dark:border-[#272835] dark:border-[#272835] text-[#334155] dark:text-[#cbd5e1] hover:text-[#f69251] transition-colors"
                >
                  <Mail size={13} className="text-[#f69251]" />
                  <span>{PROFILE.email}</span>
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-[#16171f] dark:bg-[#1a1b24] border border-[#e5e5e5] dark:border-[#272835] dark:border-[#272835] text-[#334155] dark:text-[#cbd5e1] hover:text-[#f69251] transition-colors"
                >
                  <Linkedin size={13} className="text-[#f69251]" />
                  <span>LinkedIn Profile</span>
                </a>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-[#16171f] dark:bg-[#1a1b24] border border-[#e5e5e5] dark:border-[#272835] dark:border-[#272835] text-[#334155] dark:text-[#cbd5e1]">
                  <MapPin size={13} className="text-[#f69251]" />
                  <span>{PROFILE.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-2 px-6 sm:px-10 py-3 border-b border-[#f0f0f0] dark:border-[#232530] overflow-x-auto bg-white dark:bg-[#16171f] dark:bg-[#16171f]">
            {[
              { id: 'overview', label: 'Summary & Education' },
              { id: 'skills', label: 'Core Skills & Stack' },
              { id: 'projects', label: 'Projects & Experience' },
              { id: 'certifications', label: 'Certifications & Awards' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-sans whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#181825] dark:bg-white dark:bg-[#16171f] text-white dark:text-black font-semibold shadow-xs'
                    : 'text-[#636363] dark:text-[#94a3b8] dark:text-[#94a3b8] hover:text-black dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Panes */}
          <div className="p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {/* Education Card */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#949494] dark:text-[#64748b] mb-4 flex items-center gap-2">
                      <GraduationCap size={14} className="text-[#f69251]" />
                      <span>Formal Academic Education</span>
                    </h4>
                    {CV_DATA.education.map((edu, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-[#fafafa] dark:bg-[#13141b] border border-[#f0f0f0] dark:border-[#232530] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-heading text-lg font-bold text-[#000000] dark:text-[#f8fafc] dark:text-[#f8fafc]">
                              {edu.institution}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                              {edu.status}
                            </span>
                          </div>
                          <p className="font-sans text-sm text-[#f69251] font-medium mb-1">
                            {edu.degree}
                          </p>
                          <p className="font-sans text-xs text-[#636363] dark:text-[#94a3b8] dark:text-[#94a3b8] max-w-xl">
                            {edu.focus}
                          </p>
                        </div>
                        <div className="text-xs font-mono text-[#636363] dark:text-[#94a3b8] dark:text-[#94a3b8] shrink-0">
                          {edu.period}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Core Strengths */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#949494] dark:text-[#64748b] mb-4">
                      Core Competencies
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {CV_DATA.coreSkills.map((skill, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-[#fafafa] dark:bg-[#13141b] border border-[#f0f0f0] dark:border-[#232530] flex items-start gap-2.5 text-xs font-sans text-[#334155] dark:text-[#cbd5e1]"
                        >
                          <CheckCircle2 size={14} className="text-[#f69251] shrink-0 mt-0.5" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'skills' && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {CV_DATA.toolsAndTech.map((grp) => (
                      <div
                        key={grp.category}
                        className="p-5 rounded-2xl bg-[#fafafa] dark:bg-[#13141b] border border-[#f0f0f0] dark:border-[#232530]"
                      >
                        <h5 className="font-heading text-sm font-bold text-[#000000] dark:text-[#f8fafc] dark:text-[#f8fafc] mb-3 flex items-center gap-2">
                          {grp.category.includes('Data') ? (
                            <BarChart3 size={15} className="text-[#f69251]" />
                          ) : grp.category.includes('Databases') ? (
                            <Database size={15} className="text-[#f69251]" />
                          ) : grp.category.includes('Programming') ? (
                            <Cpu size={15} className="text-[#f69251]" />
                          ) : (
                            <Workflow size={15} className="text-[#f69251]" />
                          )}
                          <span>{grp.category}</span>
                        </h5>
                        <div className="flex flex-wrap gap-1.5">
                          {grp.items.map((it) => (
                            <span
                              key={it}
                              className="px-3 py-1 rounded-lg text-xs font-sans bg-white dark:bg-[#16171f] dark:bg-[#1a1b24] border border-[#e5e5e5] dark:border-[#272835] dark:border-[#272835] text-[#334155] dark:text-[#cbd5e1]"
                            >
                              {it}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h5 className="text-xs font-mono uppercase tracking-wider text-[#949494] dark:text-[#64748b] mb-3">
                      Areas of Technical Interest
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {CV_DATA.interests.map((int) => (
                        <span
                          key={int}
                          className="px-3.5 py-1.5 rounded-full text-xs font-sans bg-[#fafafa] dark:bg-[#13141b] border border-[#f0f0f0] dark:border-[#232530] text-[#475569] dark:text-[#94a3b8]"
                        >
                          {int}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'projects' && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {CV_DATA.cvProjects.map((p) => (
                      <div
                        key={p.title}
                        className="p-5 rounded-2xl bg-[#fafafa] dark:bg-[#13141b] border border-[#f0f0f0] dark:border-[#232530] hover:border-[#f69251]/40 transition-colors flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="font-heading text-base font-bold text-[#000000] dark:text-[#f8fafc] dark:text-[#f8fafc]">
                              {p.title}
                            </span>
                            <span className="text-xs font-mono text-[#949494] dark:text-[#64748b]">
                              {p.year}
                            </span>
                          </div>
                          <span className="inline-block text-[11px] font-mono text-[#f69251] mb-2">
                            {p.tool}
                          </span>
                          <p className="font-sans text-xs text-[#636363] dark:text-[#94a3b8] dark:text-[#94a3b8] leading-relaxed">
                            {p.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'certifications' && (
                <motion.div
                  key="certifications"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {CV_DATA.certifications.map((c, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-[#fafafa] dark:bg-[#13141b] border border-[#f0f0f0] dark:border-[#232530] flex items-start gap-3"
                      >
                        <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#16171f] dark:bg-[#1a1b24] border border-[#e5e5e5] dark:border-[#272835] dark:border-[#272835] flex items-center justify-center shrink-0 text-[#f69251]">
                          <Award size={18} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="font-heading text-sm font-bold text-[#000000] dark:text-[#f8fafc] dark:text-[#f8fafc]">
                              {c.title}
                            </span>
                            <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full ${
                              c.status === 'Completed'
                                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                                : 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800'
                            }`}>
                              {c.status}
                            </span>
                          </div>
                          <p className="text-xs font-sans text-[#636363] dark:text-[#94a3b8] dark:text-[#94a3b8]">
                            {c.issuer} · {c.year}
                          </p>
                          <p className="text-[11px] font-mono text-[#949494] dark:text-[#64748b] mt-1">
                            {c.type}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
