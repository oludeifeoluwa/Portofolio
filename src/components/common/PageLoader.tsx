import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LETTERS = 'OLUDE IFEOLUWA'.split('');

export const PageLoader: React.FC<{ onDone: () => void }> = ({ onDone }) => {
  const [phase, setPhase] = useState<'draw' | 'name' | 'tagline' | 'bar' | 'exit'>('draw');
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [barWidth, setBarWidth] = useState(0);
  const [showTagline, setShowTagline] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const add = (fn: () => void, ms: number) => {
    timerRef.current.push(setTimeout(fn, ms));
  };

  useEffect(() => {
    // Phase sequence
    add(() => setPhase('name'), 800);
    LETTERS.forEach((_, i) => {
      add(() => setVisibleLetters(i + 1), 800 + i * 80);
    });
    add(() => setShowTagline(true), 800 + LETTERS.length * 80 + 100);
    add(() => setPhase('bar'), 800 + LETTERS.length * 80 + 400);
    add(() => setBarWidth(100), 800 + LETTERS.length * 80 + 500);
    add(() => setPhase('exit'), 800 + LETTERS.length * 80 + 1800);
    add(() => onDone(), 800 + LETTERS.length * 80 + 2400);
    return () => timerRef.current.forEach(clearTimeout);
  }, [onDone]);

  return (
    <AnimatePresence>
      {phase !== 'exit' ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden select-none"
        >
          {/* Subtle grain overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px',
            }}
          />

          {/* Animated ring SVG around portrait */}
          <div className="relative mb-8">
            <svg width="120" height="120" viewBox="0 0 120 120" className="absolute inset-0">
              <circle
                cx="60" cy="60" r="56"
                fill="none"
                stroke="#1f1f1f"
                strokeWidth="1"
              />
              <motion.circle
                cx="60" cy="60" r="56"
                fill="none"
                stroke="#f69251"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray={351.86}
                strokeDashoffset={351.86}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 0.9, ease: 'easeInOut' }}
                style={{ transformOrigin: 'center', transform: 'rotate(-90deg)' }}
              />
            </svg>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="w-[120px] h-[120px] rounded-full overflow-hidden border-0"
            >
              <img
                src="/assets/ifeoluwa-photo.jpg"
                alt="Olude Ifeoluwa"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Name — letter-by-letter reveal */}
          <div className="flex items-center gap-[2px] mb-3 overflow-hidden h-12">
            {LETTERS.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={i < visibleLetters ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className={`font-heading text-[#f5f5f5] tracking-[0.3em] ${
                  letter === ' ' ? 'w-4' : ''
                }`}
                style={{ fontSize: '28px', fontWeight: 300, letterSpacing: '0.3em' }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: showTagline ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[11px] text-[#636363] tracking-[0.25em] uppercase mb-10"
          >
            Digital Product Builder · Full‑Stack Engineer
          </motion.p>

          {/* Loading bar */}
          <div className="w-48 h-[1px] bg-[#1f1f1f] relative overflow-hidden">
            <motion.div
              className="h-full bg-[#f69251] absolute left-0 top-0"
              initial={{ width: '0%' }}
              animate={{ width: `${barWidth}%` }}
              transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>

          {/* Corner label */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: showTagline ? 0.35 : 0 }}
            className="absolute bottom-8 right-8 font-mono text-[10px] text-[#636363] tracking-widest"
          >
            PORTFOLIO · {new Date().getFullYear()}
          </motion.span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};