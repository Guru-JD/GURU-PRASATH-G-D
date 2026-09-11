import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, Star, Sparkles, ExternalLink, Eye, CheckCircle2, FileBadge } from 'lucide-react';
import { achievementsList } from '../data/portfolioData';
import { CertificateViewerModal } from './CertificateViewerModal';
import { CertificateItem, Achievement } from '../types';
import { playClickSound, playHoverSound } from '../utils/audioSynth';

export const AchievementsSection: React.FC = () => {
  const [activeCertificate, setActiveCertificate] = useState<CertificateItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenCertificate = (item: Achievement) => {
    playClickSound();
    const certItem: CertificateItem = {
      id: item.id,
      title: item.title,
      issuer: item.event,
      issueDate: item.year,
      category: 'Awards & Competitions',
      credentialId: item.credentialId || `AWARD-${item.id.toUpperCase()}`,
      driveUrl: item.driveUrl,
      fileId: item.fileId,
      description: item.description,
      skills: ['Award of Merit', item.prize, item.event],
      certificateType: `${item.prize} Certificate`
    };
    setActiveCertificate(certItem);
    setIsModalOpen(true);
  };

  const achievementThemes: Record<string, {
    border: string;
    glow: string;
    icon: string;
    badge: string;
    star: string;
    eventColor: string;
    buttonGradient: string;
  }> = {
    'ach-eye-vision': {
      border: 'hover:border-cyan-500/50',
      glow: 'bg-cyan-500/10 group-hover:bg-cyan-500/25',
      icon: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/40 shadow-cyan-500/20',
      badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40',
      star: 'text-cyan-400',
      eventColor: 'text-cyan-300',
      buttonGradient: 'from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500',
    },
    'ach-interface': {
      border: 'hover:border-purple-500/50',
      glow: 'bg-purple-500/10 group-hover:bg-purple-500/25',
      icon: 'from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/40 shadow-purple-500/20',
      badge: 'bg-purple-500/15 text-purple-300 border-purple-500/40',
      star: 'text-purple-400',
      eventColor: 'text-purple-300',
      buttonGradient: 'from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500',
    },
    'ach-nsdc': {
      border: 'hover:border-indigo-500/50',
      glow: 'bg-indigo-500/10 group-hover:bg-indigo-500/25',
      icon: 'from-indigo-500/20 to-sky-500/20 text-indigo-400 border-indigo-500/40 shadow-indigo-500/20',
      badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/40',
      star: 'text-indigo-400',
      eventColor: 'text-indigo-300',
      buttonGradient: 'from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500',
    },
    'ach-tecnext': {
      border: 'hover:border-emerald-500/50',
      glow: 'bg-emerald-500/10 group-hover:bg-emerald-500/25',
      icon: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/40 shadow-emerald-500/20',
      badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
      star: 'text-emerald-400',
      eventColor: 'text-emerald-300',
      buttonGradient: 'from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400',
    },
  };

  const defaultTheme = {
    border: 'hover:border-cyan-500/40',
    glow: 'bg-cyan-500/10 group-hover:bg-cyan-500/20',
    icon: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/40 shadow-cyan-500/20',
    badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40',
    star: 'text-cyan-400',
    eventColor: 'text-cyan-300',
    buttonGradient: 'from-cyan-500 to-blue-600',
  };

  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Trophy className="w-3.5 h-3.5 text-cyan-400" />
            <span>06. HONORS & ACHIEVEMENTS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Recognized <span className="gradient-text">Excellence</span> & Awards
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Verified competition wins and honors spanning scientific ideas, innovation challenges, technical symposiums, and dramatic performance.
          </p>
        </div>

        {/* Achievement Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievementsList.map((item, index) => {
            const theme = achievementThemes[item.id] || defaultTheme;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                onMouseEnter={playHoverSound}
                className={`glass-card glass-card-hover rounded-3xl border border-white/10 ${theme.border} p-6 sm:p-8 space-y-6 flex flex-col justify-between relative overflow-hidden group shadow-xl`}
              >
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-48 h-48 ${theme.glow} rounded-full blur-3xl transition-all pointer-events-none`} />

                <div className="space-y-5">
                  {/* Top Row: Icon + Prize Badge + Star */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3.5 rounded-2xl bg-gradient-to-tr ${theme.icon} border shadow-lg`}>
                        <Trophy className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <div>
                        <span className={`px-3 py-1 rounded-full ${theme.badge} font-extrabold text-xs border shadow-sm`}>
                          🏆 {item.prize}
                        </span>
                        {item.year && (
                          <span className="ml-2 font-mono text-xs text-slate-300 font-medium">
                            ({item.year})
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300">
                      <Star className={`w-4 h-4 ${theme.star}`} />
                    </div>
                  </div>

                  {/* Title & Event */}
                  <div className="space-y-2">
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <div className={`text-xs font-mono ${theme.eventColor} flex items-center gap-1.5 font-semibold`}>
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{item.event}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer with Verified Certificate Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Verified Prize</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenCertificate(item)}
                      onMouseEnter={playHoverSound}
                      title="Quick Certificate Preview"
                      className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>

                    {item.driveUrl && (
                      <a
                        href={item.driveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => playClickSound()}
                        onMouseEnter={playHoverSound}
                        className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r ${theme.buttonGradient} text-white font-bold text-xs transition-all duration-300 shadow-md hover:shadow-lg group/btn`}
                      >
                        <FileBadge className="w-3.5 h-3.5" />
                        <span>View Certificate</span>
                        <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      <CertificateViewerModal
        certificate={activeCertificate}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
