import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Quote, MessageSquareQuote, CheckCircle2, Sparkles, Filter } from 'lucide-react';
import { testimonials } from '../data/portfolioData';
import { playClickSound, playHoverSound } from '../utils/audioSynth';

export const TestimonialsSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tags = ['All', ...Array.from(new Set(testimonials.map((t) => t.tag)))];

  const filtered = selectedTag === 'All'
    ? testimonials
    : testimonials.filter((t) => t.tag === selectedTag);

  return (
    <section id="testimonials" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Endorsements & Recommendations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What <span className="gradient-text from-amber-400 via-yellow-300 to-orange-400">Collaborators & Clients</span> Say
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Direct feedback from film directors, campus student affairs leadership, and content creators who have worked closely with Guru Prasath.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-4">
            {tags.map((tag) => {
              const active = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => {
                    playClickSound();
                    setSelectedTag(tag);
                  }}
                  onMouseEnter={playHoverSound}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${
                    active
                      ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/25 scale-105'
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* Testimonials Grid (3 Cards Balanced) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              onMouseEnter={playHoverSound}
              className="glass-card p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-200 relative flex flex-col justify-between group"
            >
              {/* Background watermark quote icon */}
              <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <Quote className="w-16 h-16 text-amber-400" />
              </div>

              <div className="space-y-4">
                {/* Rating & Tag Badge */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-mono font-bold text-amber-300 ml-1.5">5.0</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {item.tag}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic relative z-10">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-yellow-500/20 border border-amber-400/30 flex items-center justify-center font-bold text-amber-300 text-sm font-mono shadow-inner">
                  {item.avatarText || item.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  </div>
                  <p className="text-xs text-amber-300/80 font-medium truncate">{item.role}</p>
                  <p className="text-[11px] text-slate-400 truncate">{item.organizationOrProject}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Collaboration Callout */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Have we worked together on a project or film? Leave a testimonial via the <a href="#contact" className="text-amber-400 hover:underline font-semibold">Contact section</a>!</span>
          </div>
        </div>
      </div>
    </section>
  );
};
