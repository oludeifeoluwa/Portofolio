import React, { useState, useEffect, useRef } from 'react';
import { BrowserFrame } from '../common/BrowserFrame';
import { PROFILE } from '../../data/profileData';
import { ExternalLink, ArrowRight, Rocket, Trophy, Award } from 'lucide-react';
import { Hero3DModel } from './Hero3DModel';
import { motion } from 'framer-motion';

const HERO_PREVIEWS = [
  {
    id: 'worknest',
    name: 'WorkNest PRO',
    url: 'https://work-nest-nu.vercel.app/',
    image: '/assets/worknest-screen.png',
    tag: 'Workspace OS',
  },
  {
    id: 'campuspay',
    name: 'CampusPay',
    url: 'https://campuspay-roan.vercel.app/',
    image: '/assets/campuspay-screen.png',
    tag: 'Fintech Infrastructure',
  },
  {
    id: 'dwell',
    name: 'Dwell & Decor',
    url: 'https://dwellanddecor.vercel.app/',
    image: '/assets/dwell-decor-screen.png',
    tag: 'AI E-Commerce',
  },
];

const TYPED_PHRASES = [
  'digital products that simplify complex workflows.',
  'full-stack systems that scale with your ambition.',
  'UX-driven interfaces that feel inevitable.',
  'AI-powered tools that remove friction.',
];

/** Typewriter hook: cycles through phrases */
function useTypewriter(phrases: string[], typingSpeed = 95, deletingSpeed = 45, pauseMs = 2800) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setPhraseIndex((p) => p + 1);
    } else {
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentPhrase.slice(0, text.length - 1)
            : currentPhrase.slice(0, text.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseMs]);

  return { text, showCursor };
}

export const DialogHero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activePreview, setActivePreview] = useState(HERO_PREVIEWS[0]);
  const { text: typedText, showCursor } = useTypewriter(TYPED_PHRASES, 95, 45, 2800);

  const handleCopyEmail = (e: React.FormEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="relative min-h-[100vh] flex flex-col pt-32 pb-24 md:pt-40 md:pb-32 bg-[#f7f7f7] dark:bg-[#0b0c0e] text-center transition-colors duration-300 overflow-hidden">

      {/* === 3D Interactive Model Background === */}
      <Hero3DModel />

      {/* === Foreground Content === */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center w-full">

        {/* Identity Pill */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8 flex items-center gap-2.5 bg-white dark:bg-[#16171f]/90 backdrop-blur-sm border border-[#e5e5e5] dark:border-[#272835] px-3.5 py-1.5 rounded-full shadow-dialog-subtle"
        >
          <div className="relative">
            <img
              src="/assets/ifeoluwa-photo.jpg"
              alt="Olude Ifeoluwa"
              className="w-6 h-6 rounded-full object-cover border border-[#e5e5e5] dark:border-[#272835]"
            />
            <span className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full bg-emerald-500 ring-1 ring-white"></span>
          </div>
          <span className="text-xs font-sans font-semibold text-[#181825] dark:text-[#e2e8f0]">Olude Ifeoluwa</span>
          <span className="text-[#e0e0e0]">·</span>
          <span className="text-xs font-sans text-[#636363] dark:text-[#94a3b8]">Digital Product Builder · Full-Stack Engineer</span>
          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-600 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded-full">
            <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
            OPEN TO WORK
          </span>
        </motion.div>

        {/* Main Headline with Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="max-w-4xl mb-6"
        >
          <h1
            className="font-heading font-normal text-[#000000] dark:text-[#f8fafc] tracking-tight leading-[1.15]"
            style={{ fontSize: 'clamp(36px, 5.5vw, 64px)' }}
          >
            I design and build{' '}
            <span className="relative inline-block">
              <span className="text-[#181825] dark:text-[#e2e8f0]">{typedText}</span>
              <span
                className="inline-block w-[2px] ml-[1px] align-baseline bg-[#f69251] transition-opacity duration-100"
                style={{
                  height: '0.85em',
                  opacity: showCursor ? 1 : 0,
                  verticalAlign: 'middle',
                  marginBottom: '0.05em',
                }}
              />
            </span>
          </h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 }}
          className="font-sans text-base sm:text-lg text-[#636363] dark:text-[#94a3b8] max-w-2xl leading-relaxed mb-10"
        >
          Bridging product architecture, UX systems, and production engineering —
          from database contracts to animated interfaces for WorkNest, CampusPay, and AI-native tools.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          {/* Email Copy */}
          <form onSubmit={handleCopyEmail} className="flex items-center gap-3 bg-white dark:bg-[#16171f]/90 backdrop-blur-sm border border-[#e5e5e5] dark:border-[#272835] rounded-full pl-4 pr-1.5 py-1.5 shadow-dialog-subtle">
            <input
              type="text"
              readOnly
              value={PROFILE.email}
              aria-label="Contact Email"
              className="bg-transparent text-[#181825] dark:text-[#e2e8f0] font-sans text-sm focus:outline-none cursor-text select-all w-52"
            />
            <button type="submit" className="btn-tangerine shrink-0 cursor-pointer text-sm">
              {copied ? '✓ Copied' : 'Copy email'}
            </button>
          </form>

          <a href="#work" className="inline-flex items-center gap-2 font-sans font-medium text-sm text-[#181825] dark:text-[#e2e8f0] hover:text-[#f69251] transition-colors group">
            <span>See my work</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Trust Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-sans text-[#8b8b8b] mb-14"
        >
          {[
            { label: '3 Live Deployed Products', icon: <Rocket size={13} /> },
            { label: 'Certificate of Excellence (3rd Place)', icon: <Trophy size={13} /> },
            { label: 'L.E.G.I.T Certified Developer', icon: <Award size={13} /> },
          ].map(({ label, icon }) => (
            <div key={label} className="flex items-center gap-1.5">
              <span className="text-[#f69251]">{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Live App Tabs + Browser Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number], delay: 0.45 }}
          className="w-full max-w-5xl"
        >
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-5 bg-white dark:bg-[#16171f]/90 backdrop-blur-sm border border-[#e5e5e5] dark:border-[#272835] p-1.5 rounded-full shadow-dialog-subtle w-fit mx-auto">
            {HERO_PREVIEWS.map((preview) => {
              const isActive = activePreview.id === preview.id;
              return (
                <button
                  key={preview.id}
                  onClick={() => setActivePreview(preview)}
                  className={`px-4 py-1.5 rounded-full text-xs font-sans transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#181825] text-white font-medium shadow-xs'
                      : 'text-[#636363] dark:text-[#94a3b8] hover:text-[#000000] dark:text-[#f8fafc] hover:bg-[#fafafa]'
                  }`}
                >
                  <span>{preview.name}</span>
                  <span className={`ml-2 text-[10px] ${isActive ? 'text-gray-300' : 'text-[#949494]'}`}>
                    · {preview.tag}
                  </span>
                </button>
              );
            })}
            <a
              href={activePreview.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 pr-3 pl-2 py-1 text-xs font-sans text-[#181825] dark:text-[#e2e8f0] hover:text-[#f69251] transition-colors flex items-center gap-1 font-medium"
            >
              <span>Launch</span>
              <ExternalLink size={11} />
            </a>
          </div>

          {/* Browser Frame Mockup */}
          <div className="relative">
            <BrowserFrame
              imageSrc={activePreview.image}
              alt={`${activePreview.name} Interface Preview`}
              url={activePreview.url}
              className="aspect-[16/8.5] sm:aspect-[16/7.5] w-full shadow-xl"
            />
            {/* Glow effect below frame */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/8 blur-xl rounded-full pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};