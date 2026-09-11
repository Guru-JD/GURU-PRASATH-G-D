import React from 'react';
import { ArrowUp, Linkedin, Youtube, Instagram, Mail } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import { playClickSound, playHoverSound } from '../utils/audioSynth';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#0B0B0B]/90 backdrop-blur-xl py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left Brand */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 p-[1.5px] shadow-lg shadow-cyan-500/20 shrink-0">
            <img
              src={personalDetails.profileImage}
              alt={personalDetails.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-[14px]"
            />
          </div>
          <div className="space-y-0.5">
            <div className="font-heading font-extrabold text-base text-white flex items-center gap-2">
              <span>Guru Prasath G D</span>
              <span className="text-xs font-mono text-cyan-300 font-semibold bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-400/20">JD</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block animate-pulse" />
            </div>
            <div className="text-xs font-mono text-cyan-400">
              Creative Technologist • MCA Scholar • Content Creator
            </div>
          </div>
        </div>

        {/* Center Credits & Socials */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-2">
            <a
              href={personalDetails.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              title="LinkedIn"
              className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.youTube}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              title="YouTube"
              className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-red-400 hover:border-red-500/40 transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              title="Instagram"
              className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalDetails.email}`}
              onMouseEnter={playHoverSound}
              title="Email"
              className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="text-[11px] font-mono text-slate-500">
            © 2026 Guru Prasath G D • Built with React, TypeScript & Tailwind CSS.
          </div>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-2xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all group flex items-center gap-2 text-xs font-mono"
        >
          <span>Back To Top</span>
          <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};
