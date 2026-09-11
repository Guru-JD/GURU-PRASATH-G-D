import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import { playClickSound, playHoverSound } from '../utils/audioSynth';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/919384784902?text=Hi%20Guru%20Prasath,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20collaborate!`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 pointer-events-none">
      {/* Tooltip / Prompt bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-auto bg-[#0B0E14] text-white px-3 py-1.5 rounded-xl border border-emerald-500/40 shadow-xl shadow-black/80 text-xs flex items-center gap-2 mb-1"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-medium text-emerald-300">Chat with Guru</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white ml-1 cursor-pointer"
            >
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        onClick={playClickSound}
        onMouseEnter={() => {
          playHoverSound();
          setShowTooltip(true);
        }}
        onMouseLeave={() => setShowTooltip(false)}
        className="pointer-events-auto group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-emerald-950/60 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer border border-white/20"
        title="Chat on WhatsApp (+91 9384784902)"
        aria-label="Direct WhatsApp message"
      >
        {/* Radar ping ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-pulse pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-6 h-6 fill-white text-transparent relative z-10" />

        {/* Online status indicator dot */}
        <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0B0E14]" />
      </a>
    </div>
  );
};
