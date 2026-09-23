import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { GenerativeHeroCanvas } from '../common/GenerativeHeroCanvas';
import { PROFILE } from '../../data/profileData';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-36 pb-24 border-b border-[#e5e2da] relative overflow-hidden bg-[#f9f8f5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Editorial Copy */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-10">
          <div className="space-y-6">
            <div className="inline-block font-mono text-xs font-bold tracking-widest text-[#2563eb] uppercase bg-[#2563eb]/10 border border-[#2563eb]/20 px-3 py-1">
              CREATIVE TECHNOLOGIST / DEVELOPER
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] leading-[1.05]">
              I build digital products where technology meets thoughtful design.
            </h1>

            <p className="text-lg md:text-xl text-[#555555] font-sans leading-relaxed max-w-xl">
              I am a product builder, UX engineer, and full-stack developer bridging backend systems, AI integrations, and intuitive software experiences.
            </p>
          </div>

          <div className="space-y-8">
            {/* Minimal Understated Text CTAs */}
            <div className="flex flex-wrap items-center gap-8 font-mono text-sm">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 text-[#111111] font-bold hover:text-[#2563eb] transition-colors group"
              >
                <span className="hover-underline-animation">View selected work</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#555555] hover:text-[#111111] transition-colors group"
              >
                <span className="hover-underline-animation">About me</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Quick Metadata Bar */}
            <div className="pt-6 border-t border-[#e5e2da] grid grid-cols-3 gap-6 font-mono text-xs text-[#555555]">
              <div>
                <div className="text-[#999999] uppercase text-[10px] tracking-widest">CREATOR</div>
                <div className="text-[#111111] font-bold mt-1">{PROFILE.name}</div>
              </div>
              <div>
                <div className="text-[#999999] uppercase text-[10px] tracking-widest">FOCUS</div>
                <div className="text-[#111111] font-bold mt-1">Full-Stack & Systems</div>
              </div>
              <div>
                <div className="text-[#999999] uppercase text-[10px] tracking-widest">LOCATION</div>
                <div className="text-[#111111] font-bold mt-1">Lagos, Nigeria</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Signature Visual: Generative Canvas */}
        <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full">
          <GenerativeHeroCanvas />
        </div>
      </div>
    </section>
  );
};
