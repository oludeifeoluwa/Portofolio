import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Menu, X, Sun, Moon, FileText } from 'lucide-react';
import { PROFILE } from '../../data/profileData';
import { useTheme } from '../../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', path: '/#work' },
    { name: 'CV', path: '/#cv' },
    { name: 'Excel Dashboard', path: '/#analytics' },
    { name: 'Achievements', path: '/#achievements' },
    { name: 'About', path: '/#about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-5 px-4 sm:px-6 transition-all duration-300">
      <div
        className={`max-w-[1240px] mx-auto bg-white dark:bg-[#16171f] transition-all duration-300 px-6 sm:px-8 py-3.5 flex items-center justify-between shadow-dialog-subtle ${
          scrolled ? 'rounded-[32px] border border-[#e5e5e5] dark:border-[#272835]' : 'rounded-[32px] border border-transparent'
        }`}
      >
        {/* Logo: Portrait + Name */}
        <Link
          to="/"
          className="flex items-center gap-2.5 font-sans font-medium text-sm text-[#000000] dark:text-[#f8fafc] hover:opacity-85 transition-opacity tracking-tight group"
        >
          <div className="relative">
            <img
              src="/assets/ifeoluwa-photo.jpg"
              alt={PROFILE.name}
              className="w-8 h-8 rounded-full object-cover border border-[#e5e5e5] dark:border-[#272835] shadow-xs group-hover:scale-105 transition-transform"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#16171f]"></span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-semibold text-sm leading-tight text-[#000000] dark:text-[#f8fafc]">{PROFILE.name}</span>
            <span className="text-[10px] font-mono text-[#8b8b8b] dark:text-[#64748b] leading-tight">Digital Product Builder</span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-sans text-[#636363] dark:text-[#94a3b8]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="hover:text-[#000000] dark:hover:text-[#f8fafc] transition-colors py-1 px-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#000000] dark:hover:text-[#f8fafc] transition-colors flex items-center gap-0.5"
          >
            <span>GitHub</span>
            <ArrowUpRight size={13} className="text-[#949494] dark:text-[#64748b]" />
          </a>
        </nav>

        {/* Right: Dark Mode Toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-9 h-9 rounded-full border border-[#e5e5e5] dark:border-[#272835] bg-[#fafafa] dark:bg-[#1a1b24] flex items-center justify-center text-[#636363] dark:text-[#94a3b8] hover:text-[#f69251] dark:hover:text-[#f69251] hover:border-[#f69251] dark:hover:border-[#f69251] transition-all cursor-pointer"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a
            href="#contact"
            className="btn-tangerine inline-flex items-center gap-1.5"
          >
            <span>Get in touch</span>
            <span className="text-xs">→</span>
          </a>
        </div>

        {/* Mobile: Toggle + Menu */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-8 h-8 rounded-full border border-[#e5e5e5] dark:border-[#272835] bg-[#fafafa] dark:bg-[#1a1b24] flex items-center justify-center text-[#636363] dark:text-[#94a3b8] hover:text-[#f69251] transition-colors cursor-pointer"
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#000000] dark:text-[#f8fafc] p-1.5"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-[1240px] mx-auto bg-white dark:bg-[#16171f] border border-[#e5e5e5] dark:border-[#272835] rounded-[24px] p-6 shadow-dialog-subtle space-y-4">
          <div className="flex flex-col gap-3 font-sans text-base text-[#181825] dark:text-[#e2e8f0]">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="py-1">
              Home
            </Link>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#636363] dark:text-[#94a3b8] hover:text-[#000000] dark:hover:text-[#f8fafc] py-1"
              >
                {link.name}
              </a>
            ))}
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#636363] dark:text-[#94a3b8] hover:text-[#000000] dark:hover:text-[#f8fafc] py-1 flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="pt-2 border-t border-[#f0f0f0] dark:border-[#232530]">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-tangerine w-full flex items-center justify-center gap-1"
            >
              <span>Get in touch</span>
              <span>→</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
