import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Keyboard,
  Monitor,
  Apple,
  Smartphone,
  Search,
  FileText,
  Volume2,
  HelpCircle,
  CornerDownLeft,
  Sparkles,
  MousePointerClick,
  CheckCircle2
} from 'lucide-react';
import { detectDevice, PlatformType } from '../utils/deviceHelper';
import { playClickSound, playHoverSound } from '../utils/audioSynth';

interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCommandPalette?: () => void;
  onOpenResume?: () => void;
}

export const ShortcutsModal: React.FC<ShortcutsModalProps> = ({
  isOpen,
  onClose,
  onOpenCommandPalette,
  onOpenResume
}) => {
  const deviceInfo = detectDevice();
  const initialTab: 'windows' | 'mac' | 'android' =
    deviceInfo.isAndroid || deviceInfo.isIOS
      ? 'android'
      : deviceInfo.isMac
      ? 'mac'
      : 'windows';

  const [selectedTab, setSelectedTab] = useState<'windows' | 'mac' | 'android'>(initialTab);

  if (!isOpen) return null;

  const windowsShortcuts = [
    {
      keys: ['Ctrl', 'K'],
      label: 'Global Command Palette & Search',
      description: 'Quickly search and jump to any project, film, skill, or section',
      icon: <Search className="w-4 h-4 text-cyan-400" />,
      action: onOpenCommandPalette
    },
    {
      keys: ['R'],
      label: 'Open Official Resume / CV',
      description: 'Instantly view, verify credentials, and download PDF resume',
      icon: <FileText className="w-4 h-4 text-purple-400" />,
      action: onOpenResume
    },
    {
      keys: ['M'],
      label: 'Toggle Futuristic Audio SFX',
      description: 'Turn interactive UI synthesizer audio effects ON or OFF',
      icon: <Volume2 className="w-4 h-4 text-emerald-400" />,
    },
    {
      keys: ['?'],
      label: 'Show Shortcuts HUD',
      description: 'Open this platform shortcuts & gestures helper modal',
      icon: <HelpCircle className="w-4 h-4 text-sky-400" />,
    },
    {
      keys: ['Esc'],
      label: 'Close Active Modals & Overlays',
      description: 'Exit modals, preview popups, and dropdown menus',
      icon: <CornerDownLeft className="w-4 h-4 text-rose-400" />,
      action: onClose
    },
    {
      keys: ['Home', 'End'],
      label: 'Jump to Top / Footer',
      description: 'Smoothly scroll straight to the hero header or footer section',
      icon: <Monitor className="w-4 h-4 text-indigo-400" />,
    },
  ];

  const macShortcuts = [
    {
      keys: ['⌘', 'K'],
      label: 'Spotlight Command Palette & Search',
      description: 'Search projects, short films, education, awards, and contacts',
      icon: <Search className="w-4 h-4 text-cyan-400" />,
      action: onOpenCommandPalette
    },
    {
      keys: ['R'],
      label: 'Open Official Resume / CV',
      description: 'Instantly open high-resolution resume viewer modal',
      icon: <FileText className="w-4 h-4 text-purple-400" />,
      action: onOpenResume
    },
    {
      keys: ['M'],
      label: 'Toggle Futuristic Audio SFX',
      description: 'Turn synthesizer feedback sounds ON / OFF',
      icon: <Volume2 className="w-4 h-4 text-emerald-400" />,
    },
    {
      keys: ['?'],
      label: 'Toggle Shortcuts & Gestures Guide',
      description: 'Display this multi-platform shortcut cheat-sheet',
      icon: <HelpCircle className="w-4 h-4 text-sky-400" />,
    },
    {
      keys: ['Esc'],
      label: 'Dismiss Popups & Modals',
      description: 'Close active certificate preview or command center',
      icon: <CornerDownLeft className="w-4 h-4 text-rose-400" />,
      action: onClose
    },
    {
      keys: ['⌘', '↑ / ↓'],
      label: 'Scroll to Top / Bottom',
      description: 'Native macOS instant page navigation shortcuts',
      icon: <Apple className="w-4 h-4 text-indigo-400" />,
    },
  ];

  const androidGestures = [
    {
      gesture: 'Tap 🔍 Search Icon',
      label: 'Mobile Command Palette',
      description: 'Opens interactive quick finder to jump directly into any section',
      icon: <Search className="w-4 h-4 text-cyan-400" />,
      action: onOpenCommandPalette
    },
    {
      gesture: 'Tap "Resume" Top Pill',
      label: 'Instant CV Viewer & Export',
      description: 'Full-screen mobile optimized resume reader with 1-tap download',
      icon: <FileText className="w-4 h-4 text-purple-400" />,
      action: onOpenResume
    },
    {
      gesture: 'Tap Certificate Cards',
      label: 'Live Google Drive Viewer',
      description: 'Embeds Google Drive PDF/Document directly on phone screen',
      icon: <MousePointerClick className="w-4 h-4 text-emerald-400" />,
    },
    {
      gesture: 'Swipe Horizontal ⟷',
      label: 'Reels, Skills & Filter Sliders',
      description: 'Smooth touch scrolling for tech categories, comedy reels, and film posters',
      icon: <Smartphone className="w-4 h-4 text-sky-400" />,
    },
    {
      gesture: 'Tap Floating "Top" Button',
      label: 'Instant Scroll To Top',
      description: 'Bottom-right floating action button jumps right back to navbar',
      icon: <Sparkles className="w-4 h-4 text-indigo-400" />,
    },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 w-full max-w-2xl bg-[#090D16] border border-cyan-500/30 rounded-3xl p-5 sm:p-7 shadow-2xl shadow-cyan-950/70 overflow-hidden flex flex-col space-y-5"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                <Keyboard className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white flex items-center gap-2">
                  <span>Platform Shortcuts & Gestures</span>
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Current Device: {deviceInfo.platformName}</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              onMouseEnter={playHoverSound}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* OS Switcher Tabs */}
          <div className="grid grid-cols-3 gap-2 p-1 bg-slate-950/80 border border-white/10 rounded-2xl">
            <button
              onClick={() => {
                playClickSound();
                setSelectedTab('windows');
              }}
              className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-mono font-bold transition-all ${
                selectedTab === 'windows'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Windows</span>
              {deviceInfo.isWindows && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 hidden sm:inline-block" />
              )}
            </button>

            <button
              onClick={() => {
                playClickSound();
                setSelectedTab('mac');
              }}
              className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-mono font-bold transition-all ${
                selectedTab === 'mac'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-purple-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Apple className="w-4 h-4" />
              <span>macOS</span>
              {deviceInfo.isMac && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 hidden sm:inline-block" />
              )}
            </button>

            <button
              onClick={() => {
                playClickSound();
                setSelectedTab('android');
              }}
              className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-mono font-bold transition-all ${
                selectedTab === 'android'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Android / Touch</span>
              {(deviceInfo.isAndroid || deviceInfo.isIOS) && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 hidden sm:inline-block" />
              )}
            </button>
          </div>

          {/* Shortcut Cards List */}
          <div className="space-y-2.5 max-h-[50vh] overflow-y-auto pr-1">
            {selectedTab === 'windows' &&
              windowsShortcuts.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    if (item.action) {
                      playClickSound();
                      item.action();
                    }
                  }}
                  className={`p-3 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-cyan-500/40 hover:bg-slate-900 transition-all flex items-center justify-between gap-3 ${
                    item.action ? 'cursor-pointer group' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-800/80 border border-white/5 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-slate-400 leading-snug">
                        {item.description}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    {item.keys.map((k, kIdx) => (
                      <kbd
                        key={kIdx}
                        className="px-2 py-1 rounded-lg bg-slate-800 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono font-bold shadow-inner"
                      >
                        {k}
                      </kbd>
                    ))}
                  </div>
                </div>
              ))}

            {selectedTab === 'mac' &&
              macShortcuts.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    if (item.action) {
                      playClickSound();
                      item.action();
                    }
                  }}
                  className={`p-3 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-purple-500/40 hover:bg-slate-900 transition-all flex items-center justify-between gap-3 ${
                    item.action ? 'cursor-pointer group' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-800/80 border border-white/5 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-slate-400 leading-snug">
                        {item.description}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    {item.keys.map((k, kIdx) => (
                      <kbd
                        key={kIdx}
                        className="px-2 py-1 rounded-lg bg-slate-800 border border-purple-500/30 text-purple-300 text-[11px] font-mono font-bold shadow-inner"
                      >
                        {k}
                      </kbd>
                    ))}
                  </div>
                </div>
              ))}

            {selectedTab === 'android' &&
              androidGestures.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    if (item.action) {
                      playClickSound();
                      item.action();
                    }
                  }}
                  className={`p-3 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-emerald-500/40 hover:bg-slate-900 transition-all flex items-center justify-between gap-3 ${
                    item.action ? 'cursor-pointer group' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-800/80 border border-white/5 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-slate-400 leading-snug">
                        {item.description}
                      </div>
                    </div>
                  </div>

                  <div className="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono font-bold shrink-0">
                    {item.gesture}
                  </div>
                </div>
              ))}
          </div>

          {/* Footer Active Status */}
          <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5 text-cyan-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full Cross-Platform Support (Desktop & Mobile)</span>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors"
            >
              Got it!
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
