import React from 'react';
import { motion } from 'motion/react';
import { Users, Shield, Calendar, CheckCircle2, Award, Building2 } from 'lucide-react';
import { leadershipList } from '../data/portfolioData';
import { playHoverSound } from '../utils/audioSynth';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Users className="w-3.5 h-3.5" />
            <span>07. STUDENT LEADERSHIP & ROLES</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Academic & Media <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Representing student cohorts, coordinating faculty relations, and organizing institutional symposiums.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipList.map((lead, index) => {
            const getLeadershipTheme = (id: string, idx: number) => {
              const themes = [
                {
                  borderHover: 'hover:border-cyan-500/50 hover:shadow-cyan-500/10',
                  iconBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 group-hover:bg-cyan-500/20',
                  iconColor: 'text-cyan-400',
                  titleHover: 'group-hover:text-cyan-300',
                  badge: 'text-cyan-300 bg-cyan-950/40 border-cyan-500/30',
                  check: 'text-cyan-400',
                },
                {
                  borderHover: 'hover:border-purple-500/50 hover:shadow-purple-500/10',
                  iconBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20 group-hover:bg-purple-500/20',
                  iconColor: 'text-purple-400',
                  titleHover: 'group-hover:text-purple-300',
                  badge: 'text-purple-300 bg-purple-950/40 border-purple-500/30',
                  check: 'text-purple-400',
                },
                {
                  borderHover: 'hover:border-amber-500/50 hover:shadow-amber-500/10',
                  iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20 group-hover:bg-amber-500/20',
                  iconColor: 'text-amber-400',
                  titleHover: 'group-hover:text-amber-300',
                  badge: 'text-amber-300 bg-amber-950/40 border-amber-500/30',
                  check: 'text-amber-400',
                },
                {
                  borderHover: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
                  iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 group-hover:bg-emerald-500/20',
                  iconColor: 'text-emerald-400',
                  titleHover: 'group-hover:text-emerald-300',
                  badge: 'text-emerald-300 bg-emerald-950/40 border-emerald-500/30',
                  check: 'text-emerald-400',
                },
                {
                  borderHover: 'hover:border-rose-500/50 hover:shadow-rose-500/10',
                  iconBg: 'bg-rose-500/10 text-rose-400 border-rose-500/20 group-hover:bg-rose-500/20',
                  iconColor: 'text-rose-400',
                  titleHover: 'group-hover:text-rose-300',
                  badge: 'text-rose-300 bg-rose-950/40 border-rose-500/30',
                  check: 'text-rose-400',
                },
                {
                  borderHover: 'hover:border-blue-500/50 hover:shadow-blue-500/10',
                  iconBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20 group-hover:bg-blue-500/20',
                  iconColor: 'text-blue-400',
                  titleHover: 'group-hover:text-blue-300',
                  badge: 'text-blue-300 bg-blue-950/40 border-blue-500/30',
                  check: 'text-blue-400',
                },
              ];
              return themes[idx % themes.length];
            };

            const theme = getLeadershipTheme(lead.id, index);

            return (
              <motion.div
                key={lead.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onMouseEnter={playHoverSound}
                className={`glass-card glass-card-hover rounded-3xl border border-white/10 ${theme.borderHover} p-6 space-y-4 flex flex-col justify-between group transition-all`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className={`p-3 rounded-2xl border transition-colors ${theme.iconBg}`}>
                      <Shield className="w-5 h-5" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full font-mono text-[11px] border flex items-center gap-1 ${theme.badge}`}>
                      <Calendar className={`w-3 h-3 ${theme.iconColor}`} />
                      <span>{lead.period}</span>
                    </span>
                  </div>

                  <div>
                    <h3 className={`font-heading font-bold text-lg text-white ${theme.titleHover} transition-colors`}>
                      {lead.title}
                    </h3>
                    <div className="text-xs text-slate-400 font-mono flex items-center gap-1 mt-1">
                      <Building2 className={`w-3 h-3 ${theme.iconColor}`} />
                      <span>{lead.institution}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-white/5">
                    <div className="text-[10px] font-mono text-slate-500 uppercase">
                      Core Responsibilities:
                    </div>
                    {lead.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${theme.check} shrink-0 mt-0.5`} />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
