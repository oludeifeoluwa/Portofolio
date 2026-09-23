import React, { useState } from 'react';
import { Badge } from '../common/Badge';
import { PROFILE } from '../../data/profileData';
import { ArrowUpRight, Copy, Check, Mail, MapPin, Github } from 'lucide-react';

export const DialogContact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.FormEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#f7f7f7] dark:bg-[#0b0c0e] relative transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* White Showroom Card Container */}
        <div className="bg-white dark:bg-[#16171f] rounded-[24px] border border-[#e5e5e5] dark:border-[#272835] p-8 sm:p-16 shadow-dialog-subtle text-center flex flex-col items-center">
          <div className="mb-6">
            <Badge variant="neutral">05 / GET IN TOUCH</Badge>
          </div>

          <h2
            className="font-heading font-normal text-[#000000] dark:text-[#f8fafc] tracking-tight leading-[1.15] max-w-3xl mb-6"
            style={{ fontSize: 'clamp(36px, 5.5vw, 64px)' }}
          >
            Have a project, system, or collaboration in mind?
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#636363] dark:text-[#94a3b8] max-w-xl leading-relaxed mb-12">
            Available for product design engineering, technical consulting, full-stack development, and early-stage software builds.
          </p>

          {/* Form: 0px radius input + 28px pill Tangerine Button */}
          <form
            onSubmit={handleCopyEmail}
            className="w-full max-w-md flex items-center justify-between gap-4 pb-1 mb-10"
          >
            <div className="flex-1 text-left">
              <input
                type="text"
                readOnly
                value={PROFILE.email}
                aria-label="Direct Email"
                className="w-full bg-transparent border-b border-[#000000] text-[#000000] dark:text-[#f8fafc] font-sans text-sm sm:text-base pb-2 focus:outline-none cursor-text select-all"
                style={{ borderRadius: '0px' }}
              />
            </div>

            <button
              type="submit"
              className="btn-tangerine shrink-0 cursor-pointer inline-flex items-center gap-2"
            >
              {copied ? (
                <>
                  <Check size={14} />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy email</span>
                </>
              )}
            </button>
          </form>

          {/* Location & Links Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-8 border-t border-[#f0f0f0] w-full max-w-2xl text-xs sm:text-sm font-sans text-[#636363] dark:text-[#94a3b8]">
            <div className="flex items-center gap-2">
              <MapPin size={15} className="text-[#949494]" />
              <span>{PROFILE.location}</span>
            </div>

            <a
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-1.5 hover:text-[#000000] dark:text-[#f8fafc] transition-colors"
            >
              <Mail size={15} className="text-[#949494]" />
              <span>Send direct email</span>
              <ArrowUpRight size={13} />
            </a>

            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#000000] dark:text-[#f8fafc] transition-colors"
            >
              <Github size={15} className="text-[#949494]" />
              <span>GitHub profile</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};