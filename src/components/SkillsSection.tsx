import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  Globe,
  Wrench,
  Palette,
  Film,
  Cpu,
  Camera,
  Search,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { playClickSound, playHoverSound } from '../utils/audioSynth';

interface CategoryColorTheme {
  activeBtn: string;
  textColor: string;
  badgeBg: string;
  iconBg: string;
  barGradient: string;
}

const categoryThemeMap: Record<string, CategoryColorTheme> = {
  programming: {
    activeBtn: 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30 font-bold',
    textColor: 'text-emerald-400',
    badgeBg: 'text-emerald-300 bg-emerald-500/15 border-emerald-500/30',
    iconBg: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    barGradient: 'bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400',
  },
  web: {
    activeBtn: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 font-bold',
    textColor: 'text-cyan-400',
    badgeBg: 'text-cyan-300 bg-cyan-500/15 border-cyan-500/30',
    iconBg: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
    barGradient: 'bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500',
  },
  tools: {
    activeBtn: 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-lg shadow-sky-500/30 font-bold',
    textColor: 'text-sky-400',
    badgeBg: 'text-sky-300 bg-sky-500/15 border-sky-500/30',
    iconBg: 'bg-sky-500/15 text-sky-400 border-sky-500/30',
    barGradient: 'bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-500',
  },
  design: {
    activeBtn: 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30 font-bold',
    textColor: 'text-pink-400',
    badgeBg: 'text-pink-300 bg-pink-500/15 border-pink-500/30',
    iconBg: 'bg-pink-500/15 text-pink-400 border-pink-500/30',
    barGradient: 'bg-gradient-to-r from-pink-500 via-rose-400 to-fuchsia-500',
  },
  video: {
    activeBtn: 'bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-lg shadow-violet-500/30 font-bold',
    textColor: 'text-violet-400',
    badgeBg: 'text-violet-300 bg-violet-500/15 border-violet-500/30',
    iconBg: 'bg-violet-500/15 text-violet-400 border-violet-500/30',
    barGradient: 'bg-gradient-to-r from-violet-600 via-purple-400 to-indigo-500',
  },
  ai: {
    activeBtn: 'bg-gradient-to-r from-indigo-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/30 font-bold',
    textColor: 'text-indigo-400',
    badgeBg: 'text-indigo-300 bg-indigo-500/15 border-indigo-500/30',
    iconBg: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30',
    barGradient: 'bg-gradient-to-r from-indigo-500 via-purple-400 to-cyan-400',
  },
  media: {
    activeBtn: 'bg-gradient-to-r from-rose-500 to-fuchsia-500 text-white shadow-lg shadow-rose-500/30 font-bold',
    textColor: 'text-rose-400',
    badgeBg: 'text-rose-300 bg-rose-500/15 border-rose-500/30',
    iconBg: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
    barGradient: 'bg-gradient-to-r from-rose-500 via-pink-400 to-purple-500',
  },
};

const defaultTheme: CategoryColorTheme = {
  activeBtn: 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/30 font-bold',
  textColor: 'text-cyan-400',
  badgeBg: 'text-cyan-300 bg-cyan-500/15 border-cyan-500/30',
  iconBg: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
  barGradient: 'bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500',
};

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    programming: <Code2 className="w-4 h-4" />,
    web: <Globe className="w-4 h-4" />,
    tools: <Wrench className="w-4 h-4" />,
    design: <Palette className="w-4 h-4" />,
    video: <Film className="w-4 h-4" />,
    ai: <Cpu className="w-4 h-4" />,
    media: <Camera className="w-4 h-4" />,
  };

  // Filter skills based on tab and search
  const filteredCategories = skillCategories.map((cat) => {
    if (activeTab !== 'all' && cat.id !== activeTab) {
      return { ...cat, skills: [] };
    }

    if (!searchQuery.trim()) return cat;

    const query = searchQuery.toLowerCase();
    const matchingSkills = cat.skills.filter(
      (s) =>
        s.name.toLowerCase().includes(query) ||
        (s.tagline && s.tagline.toLowerCase().includes(query))
    );

    return { ...cat, skills: matchingSkills };
  }).filter((cat) => cat.skills.length > 0);

  const handleTabChange = (id: string) => {
    playClickSound();
    setActiveTab(id);
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Code2 className="w-3.5 h-3.5" />
            <span>02. TECHNICAL & CREATIVE SKILLS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Versatile Tech & <span className="gradient-text">Media Toolkit</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            From low-level code algorithms to high-end color grading and AI prompt engineering.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl">
            <button
              onClick={() => handleTabChange('all')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/30 font-bold'
                  : 'glass-card text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((cat) => {
              const theme = categoryThemeMap[cat.id] || defaultTheme;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleTabChange(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                    activeTab === cat.id
                      ? theme.activeBtn
                      : 'glass-card text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {categoryIcons[cat.id]}
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Search Field */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill or tool..."
              className="w-full bg-slate-900/80 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-10">
          {filteredCategories.length === 0 ? (
            <div className="glass-card p-12 text-center rounded-3xl text-slate-400 text-sm">
              No skills found matching "{searchQuery}". Try searching for C++, Python, Photoshop, or Premiere.
            </div>
          ) : (
            filteredCategories.map((cat) => {
              const theme = categoryThemeMap[cat.id] || defaultTheme;
              return (
                <div key={cat.id} className="space-y-4">
                  <div className={`flex items-center gap-2 ${theme.textColor} font-heading font-bold text-lg border-b border-white/10 pb-2`}>
                    <div className={`p-2 rounded-xl ${theme.iconBg} border shadow-md`}>
                      {categoryIcons[cat.id]}
                    </div>
                    <span>{cat.name}</span>
                    <span className="text-xs font-mono text-slate-400 font-normal">
                      ({cat.skills.length} skills)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <AnimatePresence>
                      {cat.skills.map((skill, idx) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          onMouseEnter={playHoverSound}
                          className="glass-card glass-card-hover p-4 rounded-2xl border border-white/10 space-y-3 relative group hover:border-cyan-500/30"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <div className={`p-2 rounded-xl ${theme.iconBg} transition-colors group-hover:scale-110`}>
                                <Sparkles className="w-4 h-4" />
                              </div>
                              <div>
                                <h4 className="font-heading font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                                  {skill.name}
                                </h4>
                                {skill.tagline && (
                                  <p className="text-[11px] text-slate-400 truncate max-w-[170px]">
                                    {skill.tagline}
                                  </p>
                                )}
                              </div>
                            </div>
                            <span className={`font-mono text-xs font-bold ${theme.badgeBg} px-2.5 py-1 rounded-lg border shadow-sm`}>
                              {skill.level}%
                            </span>
                          </div>

                          {/* Progress Bar Meter */}
                          <div className="space-y-1">
                            <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden p-0.5 border border-white/10 shadow-inner">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                className={`h-full ${theme.barGradient} rounded-full shadow-sm`}
                              />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
