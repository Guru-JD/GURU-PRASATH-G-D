import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, MessageCircle, Mail, Sparkles } from 'lucide-react';
import { faqList, personalDetails } from '../data/portfolioData';
import { playClickSound, playHoverSound } from '../utils/audioSynth';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqList[0]?.id || null);

  const toggleItem = (id: string) => {
    playClickSound();
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Queries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="gradient-text from-cyan-400 via-sky-300 to-indigo-400">Questions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Everything you need to know about working with Guru Prasath across tech, film production, and brand collabs.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqList.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.06 }}
                className={`glass-card rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-cyan-400/40 bg-white/[0.04] shadow-lg shadow-cyan-500/5'
                    : 'border-white/10 hover:border-white/20 bg-white/[0.02]'
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  onMouseEnter={playHoverSound}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 flex-shrink-0">
                      {item.category}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`p-1.5 rounded-xl border transition-all duration-200 flex-shrink-0 ${
                      isOpen
                        ? 'bg-cyan-500 text-black border-cyan-400 rotate-180'
                        : 'bg-white/5 text-slate-400 border-white/10'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-0 border-t border-white/5 mt-1">
                        <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed pt-3 font-normal">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Direct Help Card */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl glass-card border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-cyan-950/20 via-slate-900/40 to-indigo-950/20">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Have a specific question not listed here?</h4>
              <p className="text-xs text-slate-400">Feel free to message me directly. I usually respond within a few hours!</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <a
              href={`https://wa.me/919384784902?text=Hi%20Guru%20Prasath,%20I%20have%20a%20question%20regarding%20collaboration!`}
              target="_blank"
              rel="noreferrer"
              onClick={playClickSound}
              onMouseEnter={playHoverSound}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-black flex items-center gap-1.5 transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-black" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`mailto:${personalDetails.email}`}
              onClick={playClickSound}
              onMouseEnter={playHoverSound}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/15 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
