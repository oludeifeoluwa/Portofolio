import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Badge } from '../common/Badge';
import { Award, ExternalLink, Trophy, Scroll, Star, Calendar } from 'lucide-react';

interface Achievement {
  type: 'hackathon' | 'certificate';
  title: string;
  subtitle: string;
  date: string;
  description: string;
  placement?: string;
  issuer?: string;
  images?: string[];
  certImage?: string;
  link?: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    type: 'hackathon',
    title: 'Hackton 1.0 — Oyo State Bureau of ICT',
    subtitle: 'Management Information Centre (MIC) · House of Chiefs Secretariat, Ibadan',
    date: 'August 26, 2026',
    description:
      'The WorkNest team participated in Hackton 1.0, organized by the Management Information Centre during its transformation into the Bureau of ICT and Digital Development. The event commemorated International Youth Day 2026 under the theme "Different Contexts, Common Aspirations". We presented WorkNest to judges and participants. My contribution included assisting in the team presentation and explaining the engineering architecture and my role in the project.',
    placement: '3rd Place — Certificate of Excellence',
    issuer: 'Bureau of ICT & Digital Development, Oyo State Government',
    images: ['/assets/hackathon-team.jpg', '/assets/hackathon-award.jpg'],
  },
  {
    type: 'certificate',
    title: 'L.E.G.I.T Innovation Hub — Certified Developer',
    subtitle: 'Web & Mobile App Development (AI-Assisted / Vibe Coding) Program',
    date: 'August 31, 2026',
    description:
      'Successfully completed the Web & Mobile App Development (AI-Assisted / Vibe Coding) Program at L.E.G.I.T Innovation Hub, in partnership with the Oyo State Government (Management Information Centre) — covering front-end and back-end web development, mobile app development, and AI-assisted development workflows.',
    issuer: 'L.E.G.I.T Innovation Hub × Oyo State Government (MIC)',
    certImage: '/assets/cert-legit.jpg',
  },
  {
    type: 'certificate',
    title: 'Kaggle — Python Course Certificate',
    subtitle: 'Certificate of Completion · Python Programming',
    date: 'August 31, 2026',
    description:
      'Independently completed Kaggle\'s Python programming course, applying skills to data analysis tasks, machine learning experimentation, and automated pipeline scripting as part of technical development during the placement period.',
    issuer: 'Kaggle Learn (Colin Morris · Alexis Cook)',
    certImage: '/assets/cert-kaggle.png',
    link: 'https://www.kaggle.com/',
  },
];

const FadeInCard: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay }}
    >
      {children}
    </motion.div>
  );
};

export const DialogAchievements: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-40px' });

  return (
    <section id="achievements" className="py-24 bg-[#f7f7f7] dark:bg-[#0b0c0e] relative transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="mb-3">
              <Badge variant="white">05 / ACHIEVEMENTS & CERTIFICATIONS</Badge>
            </div>
            <h2
              className="font-heading font-normal text-[#000000] dark:text-[#f8fafc] tracking-tight leading-[1.15]"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              Hackathons, awards & credentials.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#636363] dark:text-[#94a3b8] max-w-md leading-relaxed">
            Real-world recognition from government-backed programs, competitive events, and verified skill certifications.
          </p>
        </motion.div>

        <div className="space-y-8">
          {ACHIEVEMENTS.map((item, i) => (
            <FadeInCard key={i} delay={i * 0.1}>
              <div className="bg-white dark:bg-[#16171f] rounded-[24px] border border-[#e5e5e5] dark:border-[#272835] shadow-dialog-subtle overflow-hidden hover:border-[#d4d4d4] transition-all duration-300">
                {/* Item Header */}
                <div className="p-6 sm:p-10 pb-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                        item.type === 'hackathon'
                          ? 'bg-[#f69251] text-black'
                          : 'bg-[#181825] text-white'
                      }`}>
                        {item.type === 'hackathon' ? <Trophy size={18} /> : <Scroll size={18} />}
                      </div>
                      <div>
                        <h3 className="font-heading text-xl sm:text-2xl text-[#000000] dark:text-[#f8fafc] tracking-tight mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-sans text-[#636363] dark:text-[#94a3b8]">{item.subtitle}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#181825] dark:text-[#e2e8f0] px-2.5 py-1 bg-[#fafafa] border border-[#e5e5e5] dark:border-[#272835] rounded-full">
                        <Calendar size={11} />
                        <span>{item.date}</span>
                      </span>
                      {item.placement && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 bg-[#f69251] text-black rounded-full">
                          <Award size={11} />
                          <span>{item.placement}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className={item.images || item.certImage ? 'lg:col-span-6' : 'lg:col-span-12'}>
                      <p className="font-sans text-sm text-[#484758] dark:text-[#94a3b8] leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {item.issuer && (
                        <div className="inline-flex items-center gap-2 text-xs font-sans text-[#636363] dark:text-[#94a3b8] bg-[#fafafa] border border-[#f0f0f0] px-3 py-1.5 rounded-full">
                          <Star size={11} className="text-[#f69251]" />
                          <span>{item.issuer}</span>
                        </div>
                      )}

                      {item.link && (
                        <div className="mt-3">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#000000] dark:text-[#f8fafc] hover:text-[#f69251] transition-colors"
                          >
                            <span>Verify Certification</span>
                            <ExternalLink size={12} />
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Certificate Image */}
                    {item.certImage && (
                      <div className="lg:col-span-6">
                        <div className="rounded-[16px] overflow-hidden border border-[#e5e5e5] dark:border-[#272835] shadow-sm">
                          <img
                            src={item.certImage}
                            alt={item.title}
                            loading="eager"
                            decoding="sync"
                            className="w-full h-auto object-contain"
                            style={{ maxHeight: '280px', objectPosition: 'center' }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hackathon Photo Gallery */}
                {item.images && item.images.length > 0 && (
                  <div className="px-6 sm:px-10 pb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {item.images.map((src, idx) => (
                        <motion.div
                          key={src}
                          initial={{ opacity: 0, scale: 0.97 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.15 }}
                          className="relative rounded-[16px] overflow-hidden border border-[#e5e5e5] dark:border-[#272835] shadow-sm group"
                        >
                          <img
                            src={src}
                            alt={idx === 0 ? 'WorkNest team at Hackton 1.0' : 'WorkNest team receiving Certificate of Excellence'}
                            loading="eager"
                            decoding="sync"
                            className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                            style={{ height: '220px', objectPosition: 'center top' }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-xs font-sans translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            {idx === 0
                              ? 'Team WorkNest at Hackton 1.0 — House of Chiefs Secretariat, Ibadan'
                              : 'Receiving Certificate of Excellence — 3rd Place'}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <p className="mt-3 text-center text-[11px] font-mono text-[#949494] uppercase tracking-wider">
                      Hackton 1.0 · August 26, 2026 · Ibadan, Oyo State
                    </p>
                  </div>
                )}
              </div>
            </FadeInCard>
          ))}
        </div>
      </div>
    </section>
  );
};