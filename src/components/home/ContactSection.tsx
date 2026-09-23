import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowRight, Github, Send } from 'lucide-react';
import { PROFILE } from '../../data/profileData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 border-b border-[#e5e2da] bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bold Headline Statement */}
          <div className="lg:col-span-6 space-y-8">
            <div className="font-mono text-xs text-[#2563eb] tracking-widest uppercase font-bold">
              07 / GET IN TOUCH
            </div>

            <div className="space-y-4">
              <h2 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
                Have something worth building?
              </h2>
              <p className="text-[#555555] font-sans text-base leading-relaxed max-w-md">
                Whether you have a product to architect, an engineering challenge to solve, or want to discuss full-stack & AI systems, let's talk.
              </p>
            </div>

            {/* Direct Email Box */}
            <div className="p-6 border border-[#e5e2da] bg-[#f9f8f5] space-y-3 max-w-md">
              <div className="font-mono text-[10px] text-[#666666] uppercase tracking-widest">
                DIRECT EMAIL TRIGGER
              </div>
              <div className="flex items-center justify-between gap-4 font-mono text-sm text-[#111111]">
                <span className="truncate font-bold">{PROFILE.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 bg-[#111111] hover:bg-[#2563eb] text-white text-xs px-3 py-1.5 transition-colors"
                  aria-label="Copy Email"
                >
                  {copied ? (
                    <>
                      <Check size={13} />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-6 font-mono text-xs text-[#555555]">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#2563eb] transition-colors"
              >
                <Github size={14} />
                <span>GitHub Profile</span>
              </a>
              <span>·</span>
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-1 hover:text-[#2563eb] transition-colors"
              >
                <Mail size={14} />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Accessible Message Form */}
          <div className="lg:col-span-6 p-8 border border-[#e5e2da] bg-[#f9f8f5]">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-12 h-12 bg-[#2563eb] text-white flex items-center justify-center mx-auto">
                  <Check size={24} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#111111]">Message Received</h3>
                <p className="text-[#555555] font-sans text-sm max-w-xs mx-auto">
                  Thank you for reaching out. I will respond to your inquiry shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs text-[#111111] font-bold uppercase tracking-widest mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter name..."
                    className="w-full bg-white dark:bg-[#16171f] border border-[#e5e2da] focus:border-[#2563eb] px-4 py-3 text-sm text-[#111111] placeholder-[#999999] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-xs text-[#111111] font-bold uppercase tracking-widest mb-2">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-white dark:bg-[#16171f] border border-[#e5e2da] focus:border-[#2563eb] px-4 py-3 text-sm text-[#111111] placeholder-[#999999] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-xs text-[#111111] font-bold uppercase tracking-widest mb-2">
                    PROJECT INQUIRY / MESSAGE
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your idea or engineering requirements..."
                    className="w-full bg-white dark:bg-[#16171f] border border-[#e5e2da] focus:border-[#2563eb] px-4 py-3 text-sm text-[#111111] placeholder-[#999999] focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#111111] hover:bg-[#2563eb] text-white font-mono text-xs font-bold py-4 uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>LET'S TALK</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
