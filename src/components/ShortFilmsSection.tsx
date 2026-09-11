import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Film,
  Clapperboard,
  Play,
  Sparkles,
  X,
  Eye,
  Calendar,
  Youtube,
  ExternalLink,
  Laugh
} from 'lucide-react';
import { shortFilmsList, personalDetails } from '../data/portfolioData';
import { ShortFilm } from '../types';
import { playClickSound, playHoverSound } from '../utils/audioSynth';

const getYouTubeVideoId = (url?: string) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export const ShortFilmsSection: React.FC = () => {
  const [selectedFilm, setSelectedFilm] = useState<ShortFilm | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'films' | 'trolls'>('all');
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const handleOpenFilm = (film: ShortFilm, autoPlay = false) => {
    playClickSound();
    setSelectedFilm(film);
    setIsPlayingVideo(autoPlay);
  };

  const handleCloseFilm = () => {
    playClickSound();
    setSelectedFilm(null);
    setIsPlayingVideo(false);
  };

  const getFilmTheme = (filmId: string) => {
    switch (filmId) {
      case 'bomma-thuppaki':
      case 'film-bomma':
        return {
          border: 'border-rose-500/30 hover:border-rose-400/70',
          badge: 'text-rose-300 border-rose-500/50 bg-rose-950/80 shadow-rose-500/20',
          titleHover: 'group-hover:text-rose-300',
          roleTag: 'bg-rose-950/50 text-rose-200 border-rose-500/30',
          accentGradient: 'from-rose-600 to-red-600',
          playButton: 'from-rose-600 to-red-600 shadow-rose-600/50',
          icon: <Clapperboard className="w-3 h-3 text-rose-400" />,
        };
      case 'oru-sabikka-patta-uyir':
      case 'film-oru-sabikka':
        return {
          border: 'border-purple-500/30 hover:border-purple-400/70',
          badge: 'text-purple-300 border-purple-500/50 bg-purple-950/80 shadow-purple-500/20',
          titleHover: 'group-hover:text-purple-300',
          roleTag: 'bg-purple-950/50 text-purple-200 border-purple-500/30',
          accentGradient: 'from-purple-600 to-indigo-600',
          playButton: 'from-purple-600 to-indigo-600 shadow-purple-600/50',
          icon: <Clapperboard className="w-3 h-3 text-purple-400" />,
        };
      case 'ruvaic':
      case 'film-ruvaic':
        return {
          border: 'border-cyan-500/30 hover:border-cyan-400/70',
          badge: 'text-cyan-300 border-cyan-500/50 bg-cyan-950/80 shadow-cyan-500/20',
          titleHover: 'group-hover:text-cyan-300',
          roleTag: 'bg-cyan-950/50 text-cyan-200 border-cyan-500/30',
          accentGradient: 'from-cyan-600 to-blue-600',
          playButton: 'from-cyan-600 to-blue-600 shadow-cyan-600/50',
          icon: <Clapperboard className="w-3 h-3 text-cyan-400" />,
        };
      case 'tech-troll-1':
      case 'film-tech-troll-1':
        return {
          border: 'border-violet-500/30 hover:border-violet-400/70',
          badge: 'text-violet-300 border-violet-500/50 bg-violet-950/80 shadow-violet-500/20',
          titleHover: 'group-hover:text-violet-300',
          roleTag: 'bg-violet-950/50 text-violet-200 border-violet-500/30',
          accentGradient: 'from-violet-600 to-fuchsia-600',
          playButton: 'from-violet-600 to-fuchsia-600 shadow-violet-500/50',
          icon: <Laugh className="w-3 h-3 text-violet-400" />,
        };
      case 'tech-troll-2':
      case 'film-tech-troll-2':
        return {
          border: 'border-emerald-500/30 hover:border-emerald-400/70',
          badge: 'text-emerald-300 border-emerald-500/50 bg-emerald-950/80 shadow-emerald-500/20',
          titleHover: 'group-hover:text-emerald-300',
          roleTag: 'bg-emerald-950/50 text-emerald-200 border-emerald-500/30',
          accentGradient: 'from-emerald-500 to-teal-500',
          playButton: 'from-emerald-500 to-teal-500 shadow-emerald-500/50',
          icon: <Laugh className="w-3 h-3 text-emerald-400" />,
        };
      default:
        return {
          border: 'border-white/10 hover:border-cyan-500/50',
          badge: 'text-cyan-300 border-cyan-500/50 bg-cyan-950/80 shadow-cyan-500/20',
          titleHover: 'group-hover:text-cyan-300',
          roleTag: 'bg-cyan-950/40 text-cyan-300 border-cyan-500/30',
          accentGradient: 'from-blue-600 to-cyan-500',
          playButton: 'from-rose-600 to-pink-500 shadow-rose-600/50',
          icon: <Sparkles className="w-3 h-3 text-cyan-400" />,
        };
    }
  };

  const filteredFilms = shortFilmsList.filter((film) => {
    if (activeFilter === 'trolls') return film.id.includes('tech-troll');
    if (activeFilter === 'films') return !film.id.includes('tech-troll');
    return true;
  });

  const selectedVideoId = selectedFilm ? getYouTubeVideoId(selectedFilm.youtubeUrl) : null;

  return (
    <section id="creative-projects" className="py-14 sm:py-16 md:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Film className="w-3.5 h-3.5" />
            <span>05. CREATIVE PROJECTS & VISUAL PRODUCTIONS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Creative <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xs sm:text-sm">
            Original short films and tech comedy troll parodies directed, shot, acted, and post-edited by Guru Prasath G D.
          </p>

          {/* Filter Pills & YouTube Channel Link */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <div className="p-1 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center gap-1 text-xs">
              <button
                onClick={() => {
                  playClickSound();
                  setActiveFilter('all');
                }}
                className={`px-3.5 py-1.5 rounded-xl transition-all font-mono font-medium ${
                  activeFilter === 'all'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Creative Projects ({shortFilmsList.length})
              </button>
              <button
                onClick={() => {
                  playClickSound();
                  setActiveFilter('films');
                }}
                className={`px-3.5 py-1.5 rounded-xl transition-all font-mono font-medium flex items-center gap-1.5 ${
                  activeFilter === 'films'
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg shadow-blue-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Clapperboard className="w-3.5 h-3.5 text-cyan-400" />
                <span>3 Short Films</span>
              </button>
              <button
                onClick={() => {
                  playClickSound();
                  setActiveFilter('trolls');
                }}
                className={`px-3.5 py-1.5 rounded-xl transition-all font-mono font-medium flex items-center gap-1.5 ${
                  activeFilter === 'trolls'
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-fuchsia-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Laugh className="w-3.5 h-3.5 text-violet-400" />
                <span>2 Tech Trolls</span>
              </button>
            </div>

            <a
              href={personalDetails.youTube}
              target="_blank"
              rel="noreferrer"
              onClick={playClickSound}
              className="px-3.5 py-2 rounded-2xl glass-card border border-rose-500/30 text-rose-300 hover:text-white hover:border-rose-500/60 text-xs font-mono flex items-center gap-1.5 transition-all shadow-md"
            >
              <Youtube className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span>YouTube Channel</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
            </a>
          </div>
        </div>

        {/* Poster Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFilms.map((film, index) => {
            const theme = getFilmTheme(film.id);
            return (
              <motion.div
                key={film.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onMouseEnter={playHoverSound}
                onClick={() => handleOpenFilm(film)}
                className={`glass-card glass-card-hover rounded-3xl border ${theme.border} p-4 sm:p-5 overflow-hidden group cursor-pointer space-y-4 flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  {/* 16:9 Landscape Video Thumbnail Frame */}
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-xl group/thumb">
                    <img
                      src={film.posterImage}
                      alt={film.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />

                    {/* Badge */}
                    {film.awardOrBadge && (
                      <div className={`absolute top-3 left-3 glass-card px-3 py-1 rounded-full text-[10px] font-mono border flex items-center gap-1.5 shadow-lg backdrop-blur-md ${theme.badge}`}>
                        {theme.icon}
                        <span className="font-semibold">{film.awardOrBadge}</span>
                      </div>
                    )}

                    {/* Aspect Ratio Landscape Tag */}
                    <div className="absolute top-3 right-3 glass-card px-2.5 py-0.5 rounded-md text-[9px] font-mono text-slate-200 border border-white/15 bg-black/70 backdrop-blur-sm font-semibold">
                      16:9 HD
                    </div>

                    {/* Hover Play Button Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-tr ${theme.playButton} text-white flex items-center justify-center shadow-xl scale-90 group-hover:scale-100 transition-transform`}>
                        <Play className="w-6 h-6 fill-white ml-1" />
                      </div>
                    </div>

                    {/* Film Title Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 space-y-1">
                      <h3 className={`font-heading font-extrabold text-lg sm:text-xl text-white ${theme.titleHover} transition-colors drop-shadow-md`}>
                        {film.title}
                      </h3>
                      {film.releaseYear && (
                        <div className="text-[11px] font-mono text-slate-200 flex items-center gap-1.5 drop-shadow font-medium">
                          <Calendar className="w-3 h-3 text-cyan-400" /> Release Year {film.releaseYear}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Roles Badges */}
                  <div className="space-y-2">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      Creative Roles Held:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {film.roles.map((role) => (
                        <span
                          key={role}
                          className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium border shadow-sm ${theme.roleTag}`}
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {film.synopsis}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenFilm(film);
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-cyan-300 text-xs font-mono font-medium border border-white/5 hover:border-cyan-500/30 transition-all flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Credits & Info</span>
                  </button>

                  {film.youtubeUrl && (
                    <a
                      href={film.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        playClickSound();
                      }}
                      onMouseEnter={playHoverSound}
                      title="Watch on YouTube"
                      className={`px-3.5 py-2.5 rounded-xl bg-gradient-to-r ${theme.accentGradient} hover:brightness-110 text-white text-xs font-mono font-bold flex items-center gap-1.5 shadow-lg shadow-rose-600/20 hover:scale-105 transition-all`}
                    >
                      <Youtube className="w-4 h-4 fill-white" />
                      <span>Watch</span>
                      <ExternalLink className="w-3 h-3 opacity-80" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Film Detail Modal */}
      <AnimatePresence>
        {selectedFilm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-3xl glass-card rounded-3xl p-4 sm:p-6 border border-white/15 shadow-2xl space-y-4 max-h-[88vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl border ${
                    selectedFilm.id.includes('tech-troll')
                      ? 'bg-violet-500/10 text-violet-400 border-violet-500/20'
                      : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                  }`}>
                    {selectedFilm.id.includes('tech-troll') ? (
                      <Laugh className="w-5 h-5" />
                    ) : (
                      <Clapperboard className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                      {selectedFilm.title}
                    </h3>
                    <div className="text-xs font-mono text-cyan-400">
                      {selectedFilm.id.includes('tech-troll') ? 'Tech Comedy Troll Video' : 'Cinematic Short Film'} • Guru Prasath G D
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCloseFilm}
                  className="p-1.5 rounded-xl glass-card text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Landscape Modal Hero Preview / Embedded YouTube Player */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-950 shadow-2xl">
                {isPlayingVideo && selectedVideoId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&rel=0`}
                    title={selectedFilm.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <>
                    <img
                      src={selectedFilm.posterImage}
                      alt={selectedFilm.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                    
                    {selectedFilm.awardOrBadge && (
                      <div className="absolute top-4 left-4 glass-card px-3 py-1 rounded-full text-xs font-mono text-cyan-300 border border-cyan-500/30 bg-slate-950/80 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{selectedFilm.awardOrBadge}</span>
                      </div>
                    )}

                    {/* Central Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => setIsPlayingVideo(true)}
                        onMouseEnter={playHoverSound}
                        className="p-4 rounded-full bg-rose-600/90 hover:bg-rose-600 text-white flex items-center gap-2.5 shadow-2xl shadow-rose-600/50 hover:scale-110 active:scale-95 transition-all group"
                      >
                        <Play className="w-6 h-6 fill-white ml-0.5" />
                        <span className="font-bold text-xs pr-1 font-mono">Play Trailer / Video</span>
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Details & Credits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Roles & Direction:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedFilm.roles.map((r) => (
                        <span
                          key={r}
                          className="px-2.5 py-1 rounded-lg bg-blue-600/20 text-cyan-200 text-xs font-mono border border-blue-500/30"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Synopsis:
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {selectedFilm.synopsis}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 p-4 rounded-2xl bg-slate-900/60 border border-white/5">
                  <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-semibold">
                    Directorial & Creative Highlights:
                  </div>
                  <div className="space-y-2">
                    {selectedFilm.keyContributions.map((kc, idx) => (
                      <div key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-cyan-400 shrink-0">✦</span>
                        <span>{kc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-white/10">
                {selectedFilm.youtubeUrl ? (
                  <a
                    href={selectedFilm.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => playClickSound()}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs font-mono flex items-center justify-center gap-2 shadow-lg shadow-rose-600/30 transition-all"
                  >
                    <Youtube className="w-4 h-4 fill-white" />
                    <span>Watch {selectedFilm.title} on YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <a
                    href={personalDetails.youTube}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => playClickSound()}
                    className="w-full sm:w-auto px-4 py-2 rounded-xl bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/30 text-xs font-mono flex items-center justify-center gap-2 transition-all"
                  >
                    <Youtube className="w-4 h-4 text-rose-400" />
                    <span>Open YouTube Channel</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}

                <button
                  onClick={handleCloseFilm}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-medium hover:bg-slate-700 transition-all"
                >
                  Close Video Spotlight
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};


