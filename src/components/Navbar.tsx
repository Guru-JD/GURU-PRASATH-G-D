import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Search,
  Volume2,
  VolumeX,
  FileText,
  ArrowUpRight
} from 'lucide-react';
import { toggleAudio, playClickSound, playHoverSound } from '../utils/audioSynth';
import { personalDetails } from '../data/portfolioData';
import { detectDevice } from '../utils/deviceHelper';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommandPalette,
  onOpenResume
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [soundOn, setSoundOn] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState(detectDevice());

  useEffect(() => {
    setDeviceInfo(detectDevice());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        'home',
        'about',
        'skills',
        'experience',
        'projects',
        'creative-projects',
        'achievements',
        'certifications',
        'services',
        'collab-promotion',
        'contact'
      ];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // All primary visible links displayed directly on the navbar
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Films', id: 'creative-projects' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Certificates', id: 'certifications' },
    { name: 'Services', id: 'services' },
  ];

  // All links for mobile drawer
  const mobileNavLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Creative Films', id: 'creative-projects' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Certificates', id: 'certifications' },
    { name: 'Services', id: 'services' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Paid Collab', id: 'collab-promotion', isCollab: true },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    playClickSound();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleSound = () => {
    const newState = toggleAudio();
    setSoundOn(newState);
    if (newState) playClickSound();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-3 sm:px-5 md:px-6 ${
        scrolled
          ? 'bg-[#0B0B0B]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-2.5 sm:py-3'
          : 'bg-transparent py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Brand logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 group text-left shrink-0 cursor-pointer"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 p-[1.5px] shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
            <img
              src={personalDetails.profileImage}
              alt={personalDetails.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-[10px] filter brightness-105"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-cyan-400 border-2 border-slate-950 animate-pulse" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-heading font-bold text-xs sm:text-sm text-white tracking-tight flex items-center gap-1.5 group-hover:text-cyan-400 transition-colors whitespace-nowrap leading-tight">
              <span>Guru Prasath G D</span>
              <span className="text-[10px] font-mono text-cyan-300 font-semibold bg-cyan-500/10 px-1.5 py-0.2 rounded border border-cyan-400/25">
                JD
              </span>
            </div>
            <div className="text-[9px] font-mono tracking-wider text-slate-400 uppercase leading-tight mt-0.5">
              Creative Technologist
            </div>
          </div>
        </button>

        {/* Desktop Proportional Navigation Pill */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 glass-pill px-2 xl:px-2.5 py-1 rounded-full border border-white/15 shadow-lg shadow-black/40">
          {/* All Direct Nav Links */}
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                onMouseEnter={playHoverSound}
                className={`relative px-2 xl:px-2.5 py-1 text-[11px] xl:text-xs font-semibold rounded-full transition-all duration-150 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full shadow-md bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 shadow-cyan-500/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </button>
            );
          })}

          {/* Paid Collab Button */}
          <button
            onClick={() => handleNavClick('collab-promotion')}
            onMouseEnter={playHoverSound}
            className={`relative px-2 xl:px-2.5 py-1 text-[11px] xl:text-xs font-semibold rounded-full transition-all duration-150 cursor-pointer whitespace-nowrap ${
              activeSection === 'collab-promotion'
                ? 'text-white font-bold'
                : 'text-emerald-300 hover:text-white hover:bg-emerald-500/20'
            }`}
          >
            {activeSection === 'collab-promotion' && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-full shadow-md bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 shadow-emerald-500/30"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Paid Collab</span>
            </span>
          </button>

          {/* Contact Link */}
          <button
            onClick={() => handleNavClick('contact')}
            onMouseEnter={playHoverSound}
            className={`relative px-2 xl:px-2.5 py-1 text-[11px] xl:text-xs font-semibold rounded-full transition-all duration-150 cursor-pointer whitespace-nowrap ${
              activeSection === 'contact'
                ? 'text-white font-bold'
                : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            {activeSection === 'contact' && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-full shadow-md bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 shadow-cyan-500/30"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">Contact</span>
          </button>
        </nav>

        {/* Right Action Icons */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          {/* Audio Synthesizer Sound Toggle */}
          <button
            onClick={handleToggleSound}
            title={soundOn ? 'Mute Sound Effects (Shortcut: M)' : 'Enable SFX (Shortcut: M)'}
            className="px-2.5 py-1.5 rounded-xl glass-card text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 hover:shadow-md hover:shadow-cyan-500/20 transition-all text-xs flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            {soundOn ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span className="font-mono text-[10px] text-cyan-300 font-bold">SFX</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-mono text-[10px] text-slate-400 font-medium">SFX</span>
              </>
            )}
          </button>

          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            title={`Quick Search (${deviceInfo.searchShortcut})`}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl glass-card text-slate-200 hover:text-white hover:border-purple-400/50 hover:shadow-md hover:shadow-purple-500/20 transition-all text-xs cursor-pointer shrink-0"
          >
            <Search className="w-3.5 h-3.5 text-purple-400" />
            <span className="font-mono text-[10px] text-purple-300 font-medium">
              {deviceInfo.searchShortcut}
            </span>
          </button>

          {/* Resume Viewer/Download Button */}
          <button
            onClick={() => {
              playClickSound();
              onOpenResume();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 hover:from-cyan-300 hover:to-indigo-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shrink-0"
          >
            <FileText className="w-3.5 h-3.5 text-slate-950" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenCommandPalette}
            className="p-2 rounded-xl glass-card text-slate-300 hover:text-cyan-400"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl glass-card text-slate-200 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-card rounded-2xl mt-3 p-4 border border-white/10 shadow-2xl overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-1.5">
              {mobileNavLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3.5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all flex items-center justify-between ${
                    activeSection === link.id
                      ? link.isCollab
                        ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 font-bold'
                        : 'bg-blue-600/20 text-cyan-300 border border-blue-500/30 font-bold'
                      : link.isCollab
                      ? 'text-emerald-400 hover:bg-emerald-500/10'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.isCollab && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
                    <span>{link.name}</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </button>
              ))}

              <div className="pt-3 mt-1 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={handleToggleSound}
                  className="w-full py-2.5 rounded-xl glass-card text-xs flex items-center justify-center gap-2 text-slate-300"
                >
                  {soundOn ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
                  <span>{soundOn ? 'SFX Audio: ON' : 'SFX Audio: OFF'}</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg"
                >
                  <FileText className="w-4 h-4 text-slate-950" />
                  <span>View Official Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
