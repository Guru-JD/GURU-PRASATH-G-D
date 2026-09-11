import React from 'react';
import { motion } from 'motion/react';
import {
  Users,
  BrainCircuit,
  MessageSquare,
  Sparkles,
  Clock,
  Zap,
  BookOpen,
  UserCheck,
  Flame
} from 'lucide-react';
import { strengthsList } from '../data/portfolioData';
import { playHoverSound } from '../utils/audioSynth';

export const StrengthsSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Users: <Users className="w-5 h-5 text-cyan-400" />,
    BrainCircuit: <BrainCircuit className="w-5 h-5 text-blue-400" />,
    MessageSquare: <MessageSquare className="w-5 h-5 text-cyan-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-indigo-400" />,
    Clock: <Clock className="w-5 h-5 text-cyan-400" />,
    Zap: <Zap className="w-5 h-5 text-yellow-400" />,
    BookOpen: <BookOpen className="w-5 h-5 text-cyan-400" />,
    UserCheck: <UserCheck className="w-5 h-5 text-emerald-400" />,
  };

  return (
    <section id="strengths" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Flame className="w-3.5 h-3.5 text-cyan-400" />
            <span>09. CORE STRENGTHS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Personal & Professional <span className="gradient-text">Attributes</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Key interpersonal competencies and work ethics developed through academic responsibilities and creative execution.
          </p>
        </div>

        {/* Strengths Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengthsList.map((str, index) => {
            const strengthThemes = [
              {
                borderHover: 'hover:border-cyan-500/50 hover:shadow-cyan-500/10',
                iconBg: 'bg-cyan-950/40 border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-500/20',
                titleHover: 'group-hover:text-cyan-300',
                iconColor: 'text-cyan-400',
              },
              {
                borderHover: 'hover:border-purple-500/50 hover:shadow-purple-500/10',
                iconBg: 'bg-purple-950/40 border-purple-500/30 text-purple-400 group-hover:bg-purple-500/20',
                titleHover: 'group-hover:text-purple-300',
                iconColor: 'text-purple-400',
              },
              {
                borderHover: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
                iconBg: 'bg-emerald-950/40 border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500/20',
                titleHover: 'group-hover:text-emerald-300',
                iconColor: 'text-emerald-400',
              },
              {
                borderHover: 'hover:border-amber-500/50 hover:shadow-amber-500/10',
                iconBg: 'bg-amber-950/40 border-amber-500/30 text-amber-400 group-hover:bg-amber-500/20',
                titleHover: 'group-hover:text-amber-300',
                iconColor: 'text-amber-400',
              },
              {
                borderHover: 'hover:border-rose-500/50 hover:shadow-rose-500/10',
                iconBg: 'bg-rose-950/40 border-rose-500/30 text-rose-400 group-hover:bg-rose-500/20',
                titleHover: 'group-hover:text-rose-300',
                iconColor: 'text-rose-400',
              },
              {
                borderHover: 'hover:border-indigo-500/50 hover:shadow-indigo-500/10',
                iconBg: 'bg-indigo-950/40 border-indigo-500/30 text-indigo-400 group-hover:bg-indigo-500/20',
                titleHover: 'group-hover:text-indigo-300',
                iconColor: 'text-indigo-400',
              },
              {
                borderHover: 'hover:border-sky-500/50 hover:shadow-sky-500/10',
                iconBg: 'bg-sky-950/40 border-sky-500/30 text-sky-400 group-hover:bg-sky-500/20',
                titleHover: 'group-hover:text-sky-300',
                iconColor: 'text-sky-400',
              },
              {
                borderHover: 'hover:border-teal-500/50 hover:shadow-teal-500/10',
                iconBg: 'bg-teal-950/40 border-teal-500/30 text-teal-400 group-hover:bg-teal-500/20',
                titleHover: 'group-hover:text-teal-300',
                iconColor: 'text-teal-400',
              },
            ];

            const theme = strengthThemes[index % strengthThemes.length];

            const getIcon = (iconName: string) => {
              switch (iconName) {
                case 'Users':
                  return <Users className={`w-5 h-5 ${theme.iconColor}`} />;
                case 'BrainCircuit':
                  return <BrainCircuit className={`w-5 h-5 ${theme.iconColor}`} />;
                case 'MessageSquare':
                  return <MessageSquare className={`w-5 h-5 ${theme.iconColor}`} />;
                case 'Sparkles':
                  return <Sparkles className={`w-5 h-5 ${theme.iconColor}`} />;
                case 'Clock':
                  return <Clock className={`w-5 h-5 ${theme.iconColor}`} />;
                case 'Zap':
                  return <Zap className={`w-5 h-5 ${theme.iconColor}`} />;
                case 'BookOpen':
                  return <BookOpen className={`w-5 h-5 ${theme.iconColor}`} />;
                case 'UserCheck':
                  return <UserCheck className={`w-5 h-5 ${theme.iconColor}`} />;
                default:
                  return <Sparkles className={`w-5 h-5 ${theme.iconColor}`} />;
              }
            };

            return (
              <motion.div
                key={str.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onMouseEnter={playHoverSound}
                className={`glass-card glass-card-hover rounded-3xl p-6 border border-white/10 ${theme.borderHover} space-y-3 group transition-all`}
              >
                <div className={`p-3 rounded-2xl border w-fit ${theme.iconBg} transition-colors`}>
                  {getIcon(str.iconName)}
                </div>

                <h3 className={`font-heading font-bold text-lg text-white ${theme.titleHover} transition-colors`}>
                  {str.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {str.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
