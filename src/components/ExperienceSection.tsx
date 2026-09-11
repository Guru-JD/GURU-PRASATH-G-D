import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckCircle2, Film, Camera, Sparkles, Building2 } from 'lucide-react';
import { experienceList } from '../data/portfolioData';
import { playHoverSound } from '../utils/audioSynth';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-14 sm:py-16 md:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>03. PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Institutional & <span className="gradient-text">Creative Track</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xs sm:text-sm">
            Proven hands-on experience in event media production, short film direction, and department media coordination.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:left-4 md:before:left-1/2 md:before:-translate-x-1/2 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-cyan-400 before:to-indigo-600">
          {experienceList.map((exp, index) => {
            const isEven = index % 2 === 0;
            
            // Distinct vibrant color accents per experience entry
            const colorAccents = [
              {
                border: 'hover:border-indigo-500/40',
                glow: 'group-hover:shadow-indigo-500/10',
                badgeBg: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
                nodeBg: 'border-indigo-400',
                nodeDot: 'bg-indigo-400',
                orgColor: 'text-indigo-400',
                checkColor: 'text-indigo-400',
                chipBg: 'bg-indigo-950/30 text-indigo-200 border-indigo-500/20 hover:border-indigo-500/40',
              },
              {
                border: 'hover:border-purple-500/40',
                glow: 'group-hover:shadow-purple-500/10',
                badgeBg: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
                nodeBg: 'border-purple-400',
                nodeDot: 'bg-purple-400',
                orgColor: 'text-purple-400',
                checkColor: 'text-purple-400',
                chipBg: 'bg-purple-950/30 text-purple-200 border-purple-500/20 hover:border-purple-500/40',
              },
              {
                border: 'hover:border-cyan-500/40',
                glow: 'group-hover:shadow-cyan-500/10',
                badgeBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
                nodeBg: 'border-cyan-400',
                nodeDot: 'bg-cyan-400',
                orgColor: 'text-cyan-400',
                checkColor: 'text-cyan-400',
                chipBg: 'bg-cyan-950/30 text-cyan-200 border-cyan-500/20 hover:border-cyan-500/40',
              },
            ];

            const accent = colorAccents[index % colorAccents.length];

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={playHoverSound}
                className={`relative flex flex-col md:flex-row items-center group ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Node */}
                <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 ${accent.nodeBg} flex items-center justify-center z-10 shadow-lg shadow-cyan-500/20 group-hover:scale-125 transition-transform`}>
                  <div className={`w-2.5 h-2.5 rounded-full ${accent.nodeDot} animate-pulse`} />
                </div>

                {/* Content Box - perfectly balanced padding on both sides of timeline */}
                <div
                  className={`w-full md:w-1/2 pl-12 pr-4 ${
                    isEven
                      ? 'md:pl-8 md:pr-0'
                      : 'md:pl-0 md:pr-8'
                  }`}
                >
                  <div className={`glass-card glass-card-hover p-6 rounded-3xl border border-white/10 ${accent.border} space-y-4 shadow-xl`}>
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className={`px-3 py-1 rounded-full ${accent.badgeBg} font-mono text-xs border flex items-center gap-1.5 font-semibold`}>
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.duration}</span>
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-800/80 text-slate-300 text-[10px] uppercase font-mono tracking-wider border border-white/10 font-medium">
                        {exp.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className={`text-xs font-semibold ${accent.orgColor} flex items-center gap-1.5 mt-1`}>
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{exp.organization}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Responsibilities list */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        Key Responsibilities:
                      </div>
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="text-xs text-slate-200 flex items-start gap-2">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${accent.checkColor} shrink-0 mt-0.5`} />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skill chips with vibrant colors */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                      {exp.skillsUsed.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className={`px-2.5 py-1 rounded-lg ${accent.chipBg} text-[10px] font-mono border transition-colors font-medium`}
                        >
                          #{s}
                        </span>
                      ))}
                    </div>
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
