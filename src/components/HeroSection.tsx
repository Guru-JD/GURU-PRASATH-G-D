import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  FolderGit2,
  Send,
  Sparkles,
  Camera,
  Code2,
  Film,
  Bot,
  MapPin,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import { playClickSound, playHoverSound } from '../utils/audioSynth';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = personalDetails.titles;

  // Typing animation effect
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentTitle) {
      typingSpeed = 2200; // Pause at full word
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      typingSpeed = 300;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText === currentTitle) {
          setIsDeleting(true);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, titles]);

  const scrollToSection = (id: string) => {
    playClickSound();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[calc(100vh-4.5rem)] pt-24 sm:pt-28 md:pt-30 pb-8 sm:pb-12 flex items-center justify-center overflow-hidden">
      {/* Background Subtle Geometric Floating Elements & Multi-color Aurora Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-5 w-96 h-96 bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-indigo-600/15 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-bl from-purple-600/25 via-fuchsia-600/20 to-pink-500/15 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gradient-to-tr from-emerald-500/20 via-teal-500/20 to-cyan-500/25 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-rose-500/20 rounded-full blur-3xl animate-pulse-glow" />

        {/* Floating colorful geometric badges */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-24 left-[5%] glass-card p-3 rounded-2xl hidden xl:flex items-center gap-2.5 text-cyan-300 border border-cyan-400/50 shadow-xl shadow-cyan-500/20 bg-slate-950/85 backdrop-blur-xl"
        >
          <div className="p-1.5 rounded-xl bg-cyan-500/25 text-cyan-300 border border-cyan-400/30">
            <Code2 className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-xs font-heading font-bold text-white">Full-Stack Dev</div>
            <div className="text-[10px] font-mono text-cyan-300 font-medium">PHP • React • Cloud</div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 18, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-20 left-[6%] glass-card p-3 rounded-2xl hidden xl:flex items-center gap-2.5 text-purple-300 border border-purple-400/50 shadow-xl shadow-purple-500/20 bg-slate-950/85 backdrop-blur-xl"
        >
          <div className="p-1.5 rounded-xl bg-purple-500/25 text-purple-300 border border-purple-400/30">
            <Film className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-xs font-heading font-bold text-white">Cinematography</div>
            <div className="text-[10px] font-mono text-purple-300 font-medium">Direction • 3 Short Films</div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-28 right-[5%] glass-card p-3 rounded-2xl hidden xl:flex items-center gap-2.5 text-pink-300 border border-pink-400/50 shadow-xl shadow-pink-500/20 bg-slate-950/85 backdrop-blur-xl"
        >
          <div className="p-1.5 rounded-xl bg-pink-500/25 text-pink-300 border border-pink-400/30">
            <Bot className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-xs font-heading font-bold text-white">AI Innovation</div>
            <div className="text-[10px] font-mono text-pink-300 font-medium">Prompt Engineering</div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Text & Hero Action */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-4 sm:space-y-5 text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-400/40 text-cyan-300 text-xs font-medium shadow-lg shadow-cyan-500/15 bg-slate-950/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="font-semibold text-white">MCA Postgrad & Creative Technologist</span>
              <span className="text-cyan-500">•</span>
              <span className="text-slate-300 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" /> Rathinam Tech Campus
              </span>
            </div>

            {/* Name Heading */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5 sm:gap-3.5 flex-wrap">
                <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
                  Guru Prasath <span className="gradient-text">G D</span>
                </h1>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-mono bg-cyan-950/50 text-slate-300 border border-cyan-500/30 shadow-sm backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  Address me as <span className="text-cyan-300 font-bold font-mono tracking-wide">JD</span>
                </span>
              </div>

              {/* Dynamic Typing Headline */}
              <div className="h-9 sm:h-11 flex items-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-slate-200">
                  <span className="text-cyan-400 font-mono">&lt;</span>
                  <span className="gradient-text-cyan">{displayText}</span>
                  <span className="animate-pulse text-cyan-400 font-mono">|</span>
                  <span className="text-cyan-400 font-mono">&gt;</span>
                </span>
              </div>
            </div>

            {/* Tagline Quote */}
            <blockquote className="text-sm sm:text-base text-slate-200 max-w-2xl font-sans font-normal leading-relaxed border-l-3 border-cyan-400 pl-3.5 py-1 italic bg-gradient-to-r from-cyan-950/30 via-indigo-950/20 to-transparent rounded-r-xl">
              "{personalDetails.tagline}"
            </blockquote>

            {/* Quick highlight points */}
            <div className="pt-1 flex flex-wrap gap-2 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/25">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Full-Stack Development
              </span>
              <span className="flex items-center gap-1.5 text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-lg border border-purple-500/25">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Film Directing & Editing
              </span>
              <span className="flex items-center gap-1.5 text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/25">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> AI & Media Innovation
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {/* Button 1: Download Resume */}
              <button
                onClick={() => {
                  playClickSound();
                  onOpenResume();
                }}
                onMouseEnter={playHoverSound}
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 hover:from-cyan-300 hover:to-indigo-500 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group cursor-pointer"
              >
                <FileText className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
                <span>Download Resume</span>
              </button>

              {/* Button 2: View Projects */}
              <button
                onClick={() => scrollToSection('projects')}
                onMouseEnter={playHoverSound}
                className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl glass-card text-white font-semibold text-xs sm:text-sm border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-500/15 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                <span>View Projects</span>
              </button>

              {/* Button 3: Hire Me */}
              <button
                onClick={() => scrollToSection('contact')}
                onMouseEnter={playHoverSound}
                className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl glass-card text-white font-semibold text-xs sm:text-sm border border-purple-500/40 hover:border-purple-400 hover:bg-purple-500/15 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group cursor-pointer"
              >
                <Send className="w-4 h-4 text-purple-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                <span>Hire Me</span>
              </button>

              {/* Button 4: Paid Promotion & Collab */}
              <button
                onClick={() => scrollToSection('collab-promotion')}
                onMouseEnter={playHoverSound}
                className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl glass-card text-emerald-300 hover:text-white font-semibold text-xs sm:text-sm border border-emerald-500/40 hover:border-emerald-400 hover:bg-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
                <span>Paid Collab</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Glowing Animated Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-[280px] sm:max-w-xs md:max-w-sm">
              {/* Ambient Multicolored Glow Aura */}
              <div className="absolute -inset-2.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-700 animate-pulse-glow" />

              {/* Main Image Container */}
              <div className="relative glass-card rounded-3xl p-3 sm:p-3.5 border-2 border-white/20 overflow-hidden shadow-2xl bg-slate-950/95">
                <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-cyan-400/40 shadow-inner group-hover:border-cyan-400 transition-colors">
                  <img
                    src={personalDetails.profileImage}
                    alt={personalDetails.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-105 contrast-105"
                  />
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-70" />

                  {/* Corner Badge */}
                  <div className="absolute top-2.5 right-2.5 glass-card px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-mono text-cyan-300 border border-cyan-400/50 flex items-center gap-1 shadow-xl bg-slate-950/90 backdrop-blur-md">
                    <Sparkles className="w-3 h-3 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
                    <span className="font-bold">Creative Technologist</span>
                  </div>

                  {/* Bottom Image Overlay Tag */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 glass-card p-2.5 rounded-xl border border-white/20 backdrop-blur-md bg-slate-950/85">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white text-xs sm:text-sm">Guru Prasath G D</span>
                      <span className="text-[9px] font-mono text-cyan-400 font-semibold px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">RTC & GRI</span>
                    </div>
                    <div className="text-[11px] text-slate-300 truncate font-medium mt-0.5">
                      Full-Stack Engineering • Cinematography
                    </div>
                  </div>
                </div>

                {/* Floating micro stats under avatar with individual colorful themes */}
                <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-gradient-to-b from-cyan-950/60 to-slate-950 border border-cyan-400/40 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-500/30 transition-all group/stat">
                    <div className="font-heading font-extrabold text-cyan-300 text-sm sm:text-base drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">8.02</div>
                    <div className="text-[9px] text-cyan-200 font-mono font-bold">MCA CGPA</div>
                  </div>
                  <div className="p-2 rounded-xl bg-gradient-to-b from-purple-950/60 to-slate-950 border border-purple-400/40 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/30 transition-all group/stat">
                    <div className="font-heading font-extrabold text-purple-300 text-sm sm:text-base drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">7.90</div>
                    <div className="text-[9px] text-purple-200 font-mono font-bold">B.Sc CGPA</div>
                  </div>
                  <div className="p-2 rounded-xl bg-gradient-to-b from-indigo-950/60 to-slate-950 border border-indigo-400/40 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/30 transition-all group/stat">
                    <div className="font-heading font-extrabold text-indigo-300 text-sm sm:text-base drop-shadow-[0_0_10px_rgba(99,102,241,0.8)]">3 Films</div>
                    <div className="text-[9px] text-indigo-200 font-mono font-bold">Directed</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="pt-6 sm:pt-8 text-center">
          <button
            onClick={() => scrollToSection('about')}
            className="inline-flex flex-col items-center gap-1 text-slate-300 hover:text-cyan-300 transition-colors group cursor-pointer"
          >
            <span className="text-[9px] font-mono tracking-widest uppercase font-semibold">Explore Portfolio</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-cyan-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
