/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { MouseGlow } from './components/MouseGlow';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ShortFilmsSection } from './components/ShortFilmsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { LeadershipSection } from './components/LeadershipSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { StrengthsSection } from './components/StrengthsSection';
import { ObjectiveAndGoalsSection } from './components/ObjectiveAndGoalsSection';
import { PaidPromotionCollabSection } from './components/PaidPromotionCollabSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { ResumeModal } from './components/ResumeModal';
import { ArrowUp } from 'lucide-react';
import { toggleAudio, playClickSound } from './utils/audioSynth';
import { detectDevice } from './utils/deviceHelper';

export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const deviceInfo = detectDevice();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Check if user is typing inside an input or textarea
      const target = e.target as HTMLElement;
      const isInput =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable;

      // Command Palette: Ctrl+K or Cmd+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
        return;
      }

      // If user is inside an input, don't trigger single-key hotkeys
      if (isInput) return;

      // Resume modal: R or r
      if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        playClickSound();
        setResumeModalOpen(true);
        return;
      }

      // Audio SFX toggle: M or m
      if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        toggleAudio();
        return;
      }

      // Escape key: Close modals
      if (e.key === 'Escape') {
        setCommandPaletteOpen(false);
        setResumeModalOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, []);

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#080B10] text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Scroll Reading Progress Indicator */}
      <ScrollProgressBar />

      {/* Interactive 60fps Geometric Particles Background */}
      <ParticleBackground />

      {/* Mouse Glow Radial Light */}
      <MouseGlow />

      {/* Navigation Header */}
      <Navbar
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-4">
        <HeroSection onOpenResume={() => setResumeModalOpen(true)} />
        <div className="max-w-6xl mx-auto px-4"><div className="section-divider" /></div>
        <AboutSection />
        <div className="max-w-6xl mx-auto px-4"><div className="section-divider" /></div>
        <SkillsSection />
        <div className="max-w-6xl mx-auto px-4"><div className="section-divider" /></div>
        <ExperienceSection />
        <div className="max-w-6xl mx-auto px-4"><div className="section-divider" /></div>
        <ProjectsSection />
        <div className="max-w-6xl mx-auto px-4"><div className="section-divider" /></div>
        <ShortFilmsSection />
        <div className="max-w-6xl mx-auto px-4"><div className="section-divider" /></div>
        <AchievementsSection />
        <div className="max-w-6xl mx-auto px-4"><div className="section-divider" /></div>
        <CertificationsSection />
        <div className="max-w-6xl mx-auto px-4"><div className="section-divider" /></div>
        <LeadershipSection />
        <div className="max-w-6xl mx-auto px-4"><div className="section-divider" /></div>
        <ServicesSection />
        <div className="max-w-6xl mx-auto px-4"><div className="section-divider" /></div>
        <TestimonialsSection />
        <div className="max-w-6xl mx-auto px-4"><div className="section-divider" /></div>
        <StrengthsSection />
        <div className="max-w-6xl mx-auto px-4"><div className="section-divider" /></div>
        <ObjectiveAndGoalsSection />
        <div className="max-w-6xl mx-auto px-4"><div className="section-divider" /></div>
        <PaidPromotionCollabSection />
        <div className="max-w-6xl mx-auto px-4"><div className="section-divider" /></div>
        <FaqSection />
        <div className="max-w-6xl mx-auto px-4"><div className="section-divider" /></div>
        <ContactSection onOpenResume={() => setResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Direct Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Scroll To Top Action (Fixed bottom right, sits right above WhatsApp) */}
      {showScrollTop && (
        <div className="fixed bottom-20 right-5 z-40">
          <button
            onClick={scrollToTop}
            title="Scroll to top"
            className="p-3 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 text-slate-950 hover:scale-110 active:scale-95 transition-all shadow-xl shadow-cyan-500/30 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4 font-bold" />
          </button>
        </div>
      )}

      {/* Quick Search Command Palette (Ctrl+K / ⌘K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Resume Modal (R) */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
