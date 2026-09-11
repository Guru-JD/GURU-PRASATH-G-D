import React from 'react';
import { motion } from 'motion/react';
import {
  User,
  GraduationCap,
  Sparkles,
  Compass,
  Award,
  CheckCircle2,
  Calendar,
  Building2,
  BookOpen,
  FileText,
  ExternalLink
} from 'lucide-react';
import { personalDetails, educationList } from '../data/portfolioData';
import { playClickSound, playHoverSound } from '../utils/audioSynth';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>01. ABOUT ME & ACADEMICS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Bridging Code & <span className="gradient-text">Creative Vision</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Exploring the intersection where software engineering, artificial intelligence, and cinematic storytelling converge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Summary & Vision Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Main Bio Glass Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 p-[1.5px] shadow-lg shadow-cyan-500/20 shrink-0">
                  <img
                    src={personalDetails.profileImage}
                    alt={personalDetails.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-slate-950 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-white">Professional Summary</h3>
                  <div className="text-xs font-mono text-cyan-400">Guru Prasath G D (JD) — MCA Scholar & Creative Technologist</div>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am <strong className="text-white">Guru Prasath G D</strong> <span className="text-cyan-300 font-mono text-sm">(you can address me as <strong className="font-bold text-white">JD</strong>)</span>, currently pursuing my <strong className="text-cyan-300">Master of Computer Applications (MCA)</strong> at Rathinam Technical Campus.
                </p>
                <p>
                  I specialize in software development, AI prompt engineering, web technologies, photography, cinematography, creative branding, and digital media production.
                </p>
                <p>
                  I enjoy solving real-world problems through technology while creating visually engaging, performant digital experiences.
                </p>
              </div>

              {/* Vision Highlight Callout */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900/80 to-slate-950 border border-blue-500/30 space-y-2">
                <div className="flex items-center gap-2 text-cyan-300 font-heading font-semibold text-sm">
                  <Compass className="w-4 h-4 text-cyan-400" />
                  <span>My Core Vision</span>
                </div>
                <p className="text-sm text-slate-200 italic font-sans">
                  "{personalDetails.vision}"
                </p>
              </div>

              {/* Specializations Grid with rich vibrant color accents */}
              <div className="pt-2">
                <div className="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">
                  Core Specializations
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { title: 'Software Engineering', color: 'text-emerald-300 border-emerald-500/30 bg-emerald-950/30 hover:border-emerald-400', iconColor: 'text-emerald-400' },
                    { title: 'Web Architecture', color: 'text-cyan-300 border-cyan-500/30 bg-cyan-950/30 hover:border-cyan-400', iconColor: 'text-cyan-400' },
                    { title: 'AI Prompt Engineering', color: 'text-indigo-300 border-indigo-500/30 bg-indigo-950/30 hover:border-indigo-400', iconColor: 'text-indigo-400' },
                    { title: 'Cinematography', color: 'text-purple-300 border-purple-500/30 bg-purple-950/30 hover:border-purple-400', iconColor: 'text-purple-400' },
                    { title: 'Video Editing', color: 'text-pink-300 border-pink-500/30 bg-pink-950/30 hover:border-pink-400', iconColor: 'text-pink-400' },
                    { title: 'Creative Branding', color: 'text-sky-300 border-sky-500/30 bg-sky-950/30 hover:border-sky-400', iconColor: 'text-sky-400' },
                  ].map((spec, i) => (
                    <div
                      key={i}
                      className={`px-3 py-2.5 rounded-xl border text-xs font-medium flex items-center gap-2 transition-all ${spec.color}`}
                    >
                      <CheckCircle2 className={`w-3.5 h-3.5 ${spec.iconColor} shrink-0`} />
                      <span className="truncate">{spec.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-white">Education Timeline</h3>
                  <div className="text-xs font-mono text-slate-400">Academic Qualification & Track</div>
                </div>
              </div>

              <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-purple-500 before:to-emerald-500">
                {educationList.map((edu) => {
                  const getEduTheme = (id: string) => {
                    if (id === 'edu-1') {
                      return {
                        nodeBorder: 'border-cyan-400',
                        nodeDot: 'bg-cyan-400',
                        cardBorder: 'group-hover:border-cyan-500/40',
                        titleHover: 'group-hover:text-cyan-300',
                        badgeBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-400/30',
                        periodBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
                        iconColor: 'text-cyan-400',
                        bulletColor: 'text-cyan-400',
                        btnStyle: 'from-blue-600/30 via-cyan-500/20 to-indigo-600/30 border-cyan-500/40 text-cyan-200 hover:text-white',
                      };
                    }
                    if (id === 'edu-2') {
                      return {
                        nodeBorder: 'border-purple-400',
                        nodeDot: 'bg-purple-400',
                        cardBorder: 'group-hover:border-purple-500/40',
                        titleHover: 'group-hover:text-purple-300',
                        badgeBg: 'bg-purple-500/15 text-purple-300 border-purple-400/30',
                        periodBg: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
                        iconColor: 'text-purple-400',
                        bulletColor: 'text-purple-400',
                        btnStyle: 'from-purple-600/30 via-indigo-500/20 to-pink-600/30 border-purple-500/40 text-purple-200 hover:text-white',
                      };
                    }
                    if (id === 'edu-3') {
                      return {
                        nodeBorder: 'border-emerald-400',
                        nodeDot: 'bg-emerald-400',
                        cardBorder: 'group-hover:border-emerald-500/40',
                        titleHover: 'group-hover:text-emerald-300',
                        badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30',
                        periodBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
                        iconColor: 'text-emerald-400',
                        bulletColor: 'text-emerald-400',
                        btnStyle: 'from-emerald-600/30 via-teal-500/20 to-cyan-600/30 border-emerald-500/40 text-emerald-200 hover:text-white',
                      };
                    }
                    return {
                      nodeBorder: 'border-sky-400',
                      nodeDot: 'bg-sky-400',
                      cardBorder: 'group-hover:border-sky-500/40',
                      titleHover: 'group-hover:text-sky-300',
                      badgeBg: 'bg-sky-500/15 text-sky-300 border-sky-400/30',
                      periodBg: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
                      iconColor: 'text-sky-400',
                      bulletColor: 'text-sky-400',
                      btnStyle: 'from-sky-600/30 via-indigo-500/20 to-blue-600/30 border-sky-500/40 text-sky-200 hover:text-white',
                    };
                  };

                  const theme = getEduTheme(edu.id);

                  return (
                    <div key={edu.id} className="relative group">
                      {/* Glowing Node Circle */}
                      <div className={`absolute -left-6 top-1 w-5 h-5 rounded-full bg-slate-950 border-2 ${theme.nodeBorder} flex items-center justify-center group-hover:scale-125 group-hover:border-white transition-all shadow-md`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${theme.nodeDot}`} />
                      </div>

                      <div className={`glass-card p-5 rounded-2xl border border-white/5 ${theme.cardBorder} transition-all space-y-2`}>
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border flex items-center gap-1 ${theme.periodBg}`}>
                            <Calendar className="w-3 h-3" /> {edu.period}
                          </span>
                          {edu.cgpa && (
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${theme.badgeBg}`}>
                              CGPA {edu.cgpa}
                            </span>
                          )}
                          {edu.status && (
                            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-400/30 animate-pulse">
                              {edu.status}
                            </span>
                          )}
                        </div>

                        <h4 className={`font-heading font-bold text-base text-white ${theme.titleHover} transition-colors`}>
                          {edu.degree}
                        </h4>

                        <div className="text-xs text-slate-300 flex items-center gap-1.5 font-medium">
                          <Building2 className={`w-3.5 h-3.5 ${theme.iconColor} shrink-0`} />
                          <span>{edu.institution}</span>
                        </div>

                        <p className="text-xs text-slate-400 leading-relaxed pt-1">
                          {edu.description}
                        </p>

                        <div className="pt-2 space-y-1">
                          {edu.highlights.map((item, idx) => (
                            <div key={idx} className="text-[11px] text-slate-300 flex items-start gap-1.5">
                              <span className={theme.bulletColor}>▪</span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>

                        {edu.documentUrl && (
                          <div className="pt-3 border-t border-white/5">
                            <a
                              href={edu.documentUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => playClickSound()}
                              onMouseEnter={playHoverSound}
                              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r ${theme.btnStyle} text-xs font-mono font-medium shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all group/btn`}
                            >
                              <FileText className={`w-3.5 h-3.5 ${theme.iconColor} group-hover/btn:scale-110 transition-transform`} />
                              <span>{edu.documentLabel || 'View Overall Marksheet'}</span>
                              <ExternalLink className="w-3 h-3 opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
