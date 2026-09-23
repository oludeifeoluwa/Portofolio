import React, { useEffect } from 'react';
import { Badge } from '../components/common/Badge';
import { PROFILE } from '../data/profileData';
import { DialogCapabilities } from '../components/home/DialogCapabilities';
import { DialogTimeline } from '../components/home/DialogTimeline';
import { MapPin, Mail, Github, ArrowUpRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f7] pt-36 pb-24 text-[#181825]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 space-y-16">
        {/* Profile Introduction Card */}
        <div className="bg-white rounded-[24px] border border-[#e5e5e5] p-8 sm:p-14 shadow-dialog-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="mb-2">
                <Badge variant="neutral">ABOUT · PROFILE</Badge>
              </div>

              <h1
                className="font-heading font-normal text-[#000000] tracking-tight leading-[1.12]"
                style={{ fontSize: 'clamp(36px, 5.5vw, 60px)' }}
              >
                {PROFILE.name}
              </h1>

              <p className="font-sans text-lg sm:text-xl text-[#636363] leading-relaxed max-w-2xl">
                {PROFILE.bio}
              </p>

              <div className="p-6 rounded-[16px] bg-[#fafafa] border border-[#f0f0f0] font-sans text-sm text-[#484758] leading-relaxed">
                <span className="font-medium text-[#000000] block mb-1">Guiding Philosophy:</span>
                "{PROFILE.statement}"
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-sans text-[#636363]">
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#949494]" />
                  <span>{PROFILE.location}</span>
                </div>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-1 hover:text-[#000000] transition-colors"
                >
                  <Mail size={14} className="text-[#949494]" />
                  <span>{PROFILE.email}</span>
                </a>
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#000000] transition-colors"
                >
                  <Github size={14} className="text-[#949494]" />
                  <span>GitHub</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-64 h-80 sm:w-72 sm:h-92 rounded-[24px] overflow-hidden border border-[#e5e5e5] shadow-dialog-subtle relative bg-[#f0f0f0]">
                <img
                  src="/assets/profile.jpg"
                  alt={PROFILE.name}
                  className="w-full h-full object-cover filter contrast-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <DialogCapabilities />
      <DialogTimeline />
    </div>
  );
};