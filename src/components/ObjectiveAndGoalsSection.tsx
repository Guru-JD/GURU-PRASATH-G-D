import React from 'react';
import { motion } from 'motion/react';
import {
  Target,
  Rocket,
  Code,
  Cpu,
  Clapperboard,
  Compass,
  Video,
  Quote,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { personalDetails, futureGoalsList } from '../data/portfolioData';
import { playHoverSound } from '../utils/audioSynth';

export const ObjectiveAndGoalsSection: React.FC = () => {
  const goalIconMap: Record<string, React.ReactNode> = {
    Code: <Code className="w-5 h-5 text-cyan-400" />,
    Cpu: <Cpu className="w-5 h-5 text-blue-400" />,
    Clapperboard: <Clapperboard className="w-5 h-5 text-cyan-400" />,
    Rocket: <Rocket className="w-5 h-5 text-indigo-400" />,
    Compass: <Compass className="w-5 h-5 text-cyan-400" />,
    Video: <Video className="w-5 h-5 text-blue-400" />,
  };

  return (
    <section id="objective" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
        {/* Career Objective Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl border border-cyan-500/30 p-8 sm:p-12 relative overflow-hidden shadow-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/90 to-slate-950"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-mono">
              <Target className="w-4 h-4 text-cyan-400" />
              <span>CAREER OBJECTIVE</span>
            </div>

            <Quote className="w-10 h-10 text-cyan-400/40 mx-auto" />

            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white leading-tight">
              "{personalDetails.careerObjective}"
            </h3>

            <div className="pt-2 text-xs font-mono text-slate-400 uppercase tracking-widest">
              Guru Prasath G D — Creative Technologist Roadmap
            </div>
          </div>
        </motion.div>

        {/* Future Goals Section */}
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/30 text-cyan-400 text-xs font-mono">
              <Rocket className="w-3.5 h-3.5" />
              <span>10. FUTURE GOALS & ASPIRATIONS</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Aspirations & <span className="gradient-text">Future Horizon</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              Roles and domain trajectories targeted as a Creative Technologist and innovator.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureGoalsList.map((goal, index) => {
              const goalThemes = [
                {
                  borderHover: 'hover:border-cyan-500/50 hover:shadow-cyan-500/10',
                  iconBg: 'bg-cyan-950/40 border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-500/20',
                  badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
                  titleHover: 'group-hover:text-cyan-300',
                  iconColor: 'text-cyan-400',
                },
                {
                  borderHover: 'hover:border-indigo-500/50 hover:shadow-indigo-500/10',
                  iconBg: 'bg-indigo-950/40 border-indigo-500/30 text-indigo-400 group-hover:bg-indigo-500/20',
                  badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
                  titleHover: 'group-hover:text-indigo-300',
                  iconColor: 'text-indigo-400',
                },
                {
                  borderHover: 'hover:border-amber-500/50 hover:shadow-amber-500/10',
                  iconBg: 'bg-amber-950/40 border-amber-500/30 text-amber-400 group-hover:bg-amber-500/20',
                  badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
                  titleHover: 'group-hover:text-amber-300',
                  iconColor: 'text-amber-400',
                },
                {
                  borderHover: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
                  iconBg: 'bg-emerald-950/40 border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500/20',
                  badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
                  titleHover: 'group-hover:text-emerald-300',
                  iconColor: 'text-emerald-400',
                },
                {
                  borderHover: 'hover:border-purple-500/50 hover:shadow-purple-500/10',
                  iconBg: 'bg-purple-950/40 border-purple-500/30 text-purple-400 group-hover:bg-purple-500/20',
                  badge: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
                  titleHover: 'group-hover:text-purple-300',
                  iconColor: 'text-purple-400',
                },
                {
                  borderHover: 'hover:border-rose-500/50 hover:shadow-rose-500/10',
                  iconBg: 'bg-rose-950/40 border-rose-500/30 text-rose-400 group-hover:bg-rose-500/20',
                  badge: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
                  titleHover: 'group-hover:text-rose-300',
                  iconColor: 'text-rose-400',
                },
              ];

              const theme = goalThemes[index % goalThemes.length];

              const getGoalIcon = (iconName: string) => {
                switch (iconName) {
                  case 'Code':
                    return <Code className={`w-5 h-5 ${theme.iconColor}`} />;
                  case 'Cpu':
                    return <Cpu className={`w-5 h-5 ${theme.iconColor}`} />;
                  case 'Clapperboard':
                    return <Clapperboard className={`w-5 h-5 ${theme.iconColor}`} />;
                  case 'Rocket':
                    return <Rocket className={`w-5 h-5 ${theme.iconColor}`} />;
                  case 'Compass':
                    return <Compass className={`w-5 h-5 ${theme.iconColor}`} />;
                  case 'Video':
                    return <Video className={`w-5 h-5 ${theme.iconColor}`} />;
                  default:
                    return <Sparkles className={`w-5 h-5 ${theme.iconColor}`} />;
                }
              };

              return (
                <motion.div
                  key={goal.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  onMouseEnter={playHoverSound}
                  className={`glass-card glass-card-hover rounded-3xl p-6 border border-white/10 ${theme.borderHover} space-y-4 group transition-all`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl border transition-colors ${theme.iconBg}`}>
                      {getGoalIcon(goal.iconName)}
                    </div>
                    <span className={`px-2.5 py-1 rounded-full font-mono text-[10px] border ${theme.badge}`}>
                      {goal.category}
                    </span>
                  </div>

                  <div>
                    <h3 className={`font-heading font-bold text-lg text-white ${theme.titleHover} transition-colors flex items-center justify-between`}>
                      <span>{goal.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {goal.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
