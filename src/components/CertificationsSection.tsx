import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  FileBadge,
  Award,
  Sparkles,
  ExternalLink,
  Download,
  Eye,
  CheckCircle2,
  Calendar,
  Layers,
  ShieldCheck,
  Code,
  Video,
  Bot,
  Cpu,
  Trophy
} from 'lucide-react';
import { certificatesList } from '../data/portfolioData';
import { CertificateItem } from '../types';
import { CertificateViewerModal } from './CertificateViewerModal';
import { playClickSound, playHoverSound } from '../utils/audioSynth';

export const CertificationsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCertificate, setActiveCertificate] = useState<CertificateItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Technical', 'Core Engineering', 'AI & Data'];

  const filteredCertificates = selectedCategory === 'All'
    ? certificatesList
    : certificatesList.filter((cert) => cert.category === selectedCategory);

  const handleOpenCertificate = (cert: CertificateItem) => {
    playClickSound();
    setActiveCertificate(cert);
    setIsModalOpen(true);
  };

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'Technical':
        return {
          icon: <Code className="w-3.5 h-3.5 text-cyan-400" />,
          badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
          glow: 'bg-cyan-500/15 group-hover:bg-cyan-500/25',
          borderHover: 'group-hover:border-cyan-500/40',
          titleHover: 'group-hover:text-cyan-300',
          dot: 'bg-cyan-400',
          button: 'bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 shadow-cyan-500/30',
          skillTag: 'bg-cyan-950/40 text-cyan-200 border-cyan-500/20',
        };
      case 'Core Engineering':
        return {
          icon: <Cpu className="w-3.5 h-3.5 text-indigo-400" />,
          badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
          glow: 'bg-indigo-500/15 group-hover:bg-indigo-500/25',
          borderHover: 'group-hover:border-indigo-500/40',
          titleHover: 'group-hover:text-indigo-300',
          dot: 'bg-indigo-400',
          button: 'bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white shadow-indigo-500/30',
          skillTag: 'bg-indigo-950/40 text-indigo-200 border-indigo-500/20',
        };
      case 'AI & Data':
        return {
          icon: <Bot className="w-3.5 h-3.5 text-emerald-400" />,
          badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
          glow: 'bg-emerald-500/15 group-hover:bg-emerald-500/25',
          borderHover: 'group-hover:border-emerald-500/40',
          titleHover: 'group-hover:text-emerald-300',
          dot: 'bg-emerald-400',
          button: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-emerald-500/30',
          skillTag: 'bg-emerald-950/40 text-emerald-200 border-emerald-500/20',
        };
      case 'Creative & Media':
        return {
          icon: <Video className="w-3.5 h-3.5 text-pink-400" />,
          badge: 'bg-pink-500/15 text-pink-300 border-pink-500/30',
          glow: 'bg-pink-500/15 group-hover:bg-pink-500/25',
          borderHover: 'group-hover:border-pink-500/40',
          titleHover: 'group-hover:text-pink-300',
          dot: 'bg-pink-400',
          button: 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 text-white shadow-pink-500/30',
          skillTag: 'bg-pink-950/40 text-pink-200 border-pink-500/20',
        };
      default:
        return {
          icon: <Award className="w-3.5 h-3.5 text-cyan-400" />,
          badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
          glow: 'bg-cyan-500/15 group-hover:bg-cyan-500/25',
          borderHover: 'group-hover:border-cyan-500/40',
          titleHover: 'group-hover:text-cyan-300',
          dot: 'bg-cyan-400',
          button: 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 shadow-cyan-500/30',
          skillTag: 'bg-slate-900/90 text-slate-300 border-white/5',
        };
    }
  };

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <FileBadge className="w-3.5 h-3.5 text-cyan-400" />
            <span>07. PROFESSIONAL CERTIFICATIONS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Verified <span className="gradient-text">Certificates</span> & Credentials
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Formal technical certifications, software development qualifications, system architecture courses, and design thinking credentials.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const catTheme = getCategoryTheme(cat);
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  playClickSound();
                  setSelectedCategory(cat);
                }}
                onMouseEnter={playHoverSound}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? cat === 'Technical'
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/30'
                      : cat === 'Core Engineering'
                      ? 'bg-indigo-500 text-white font-bold shadow-lg shadow-indigo-500/30'
                      : cat === 'AI & Data'
                      ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/30'
                      : 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/30'
                    : 'glass-card text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat !== 'All' && catTheme.icon}
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  isSelected ? 'bg-black/20 text-inherit' : 'bg-white/5 text-slate-400'
                }`}>
                  {cat === 'All' ? certificatesList.length : certificatesList.filter((c) => c.category === cat).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCertificates.map((cert, index) => {
            const theme = getCategoryTheme(cert.category);
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onMouseEnter={playHoverSound}
                className={`glass-card glass-card-hover rounded-3xl border border-white/10 ${theme.borderHover} p-6 sm:p-7 space-y-6 flex flex-col justify-between relative group overflow-hidden`}
              >
                {/* Background Accent Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${theme.glow} rounded-full blur-2xl transition-all pointer-events-none`} />

                <div className="space-y-4">
                  {/* Top Badge & Category Row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-mono border flex items-center gap-1.5 shadow-sm font-semibold ${theme.badge}`}>
                        {theme.icon}
                        <span>{cert.category}</span>
                      </span>
                    </div>

                    <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1 bg-slate-900/80 px-2 py-0.5 rounded-md border border-white/5">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      <span>{cert.issueDate}</span>
                    </div>
                  </div>

                  {/* Certificate Title */}
                  <div className="space-y-1.5">
                    <h3 className={`font-heading font-extrabold text-xl text-white ${theme.titleHover} transition-colors leading-snug`}>
                      {cert.title}
                    </h3>
                    <div className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${theme.dot} inline-block`} />
                      <span>{cert.issuer}</span>
                    </div>
                  </div>

                  {/* Description */}
                  {cert.description && (
                    <p className="text-xs text-slate-300/90 leading-relaxed line-clamp-3">
                      {cert.description}
                    </p>
                  )}

                  {/* Skills Tags */}
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cert.skills.slice(0, 4).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className={`px-2 py-0.5 rounded-md text-[10px] font-mono border ${theme.skillTag}`}
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 4 && (
                        <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono border ${theme.skillTag}`}>
                          +{cert.skills.length - 4}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Action Button & Verification Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="hidden sm:inline">Verified</span>
                  </div>

                  {/* Prominent Certificate Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenCertificate(cert)}
                      onMouseEnter={playHoverSound}
                      title="Quick Preview"
                      className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={cert.driveUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        playClickSound();
                        if (!cert.driveUrl) {
                          e.preventDefault();
                          handleOpenCertificate(cert);
                        }
                      }}
                      onMouseEnter={playHoverSound}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs transition-all duration-300 shadow-md hover:scale-[1.02] group/btn ${theme.button}`}
                    >
                      <span>Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Certificate Viewer & Download Modal */}
      <CertificateViewerModal
        certificate={activeCertificate}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
