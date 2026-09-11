import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Code2,
  Film,
  FolderGit2,
  Mail,
  GraduationCap,
  Briefcase,
  Award,
  FileBadge,
  Terminal,
  X,
  ArrowRight,
  FileText,
  Instagram,
  Github,
  Camera,
  Sparkles,
  MessageCircle,
  MessageSquareQuote,
  HelpCircle
} from 'lucide-react';
import { personalDetails, projectData, educationList } from '../data/portfolioData';
import { playClickSound } from '../utils/audioSynth';
import { detectDevice } from '../utils/deviceHelper';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: 'Section' | 'Skill' | 'Project' | 'Film' | 'Action';
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume
}) => {
  const [query, setQuery] = useState('');
  const deviceInfo = detectDevice();

  const scrollToSection = (id: string) => {
    playClickSound();
    onClose();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commands: CommandItem[] = [
    {
      id: 'sec-home',
      title: 'Home & Hero',
      category: 'Section',
      icon: <Terminal className="w-4 h-4 text-cyan-400" />,
      action: () => scrollToSection('home'),
    },
    {
      id: 'sec-about',
      title: 'About Guru Prasath & Education',
      category: 'Section',
      icon: <GraduationCap className="w-4 h-4 text-blue-400" />,
      action: () => scrollToSection('about'),
    },
    {
      id: 'sec-skills',
      title: 'Technical & Creative Skills',
      category: 'Section',
      icon: <Code2 className="w-4 h-4 text-cyan-400" />,
      action: () => scrollToSection('skills'),
    },
    {
      id: 'sec-exp',
      title: 'Work & Professional Experience',
      category: 'Section',
      icon: <Briefcase className="w-4 h-4 text-indigo-400" />,
      action: () => scrollToSection('experience'),
    },
    {
      id: 'sec-proj',
      title: 'Bold Bro Car Wash Management Project',
      category: 'Project',
      icon: <FolderGit2 className="w-4 h-4 text-blue-400" />,
      action: () => scrollToSection('projects'),
    },
    {
      id: 'sec-films',
      title: 'Creative Projects (3 Short Films & 2 Tech Trolls)',
      category: 'Film',
      icon: <Film className="w-4 h-4 text-cyan-400" />,
      action: () => scrollToSection('creative-projects'),
    },
    {
      id: 'sec-achieve',
      title: 'Achievements & Awards',
      category: 'Section',
      icon: <Award className="w-4 h-4 text-yellow-400" />,
      action: () => scrollToSection('achievements'),
    },
    {
      id: 'sec-certs',
      title: 'Certifications & Verified Credentials',
      category: 'Section',
      icon: <FileBadge className="w-4 h-4 text-cyan-400" />,
      action: () => scrollToSection('certifications'),
    },
    {
      id: 'sec-testimonials',
      title: 'Testimonials & Collaborator Recommendations',
      category: 'Section',
      icon: <MessageSquareQuote className="w-4 h-4 text-amber-400" />,
      action: () => scrollToSection('testimonials'),
    },
    {
      id: 'sec-collab-promotion',
      title: 'Available for Paid Promotion & Collab (WhatsApp Enquiry)',
      category: 'Section',
      icon: <Sparkles className="w-4 h-4 text-emerald-400" />,
      action: () => scrollToSection('collab-promotion'),
    },
    {
      id: 'sec-faq',
      title: 'Frequently Asked Questions (FAQ)',
      category: 'Section',
      icon: <HelpCircle className="w-4 h-4 text-cyan-400" />,
      action: () => scrollToSection('faq'),
    },
    {
      id: 'action-whatsapp',
      title: 'Direct WhatsApp Chat with Guru Prasath (+91 9384784902)',
      category: 'Action',
      icon: <MessageCircle className="w-4 h-4 text-emerald-400" />,
      action: () => {
        onClose();
        window.open('https://api.whatsapp.com/send?phone=919384784902', '_blank');
      },
    },
    {
      id: 'sec-contact',
      title: 'Contact & Hire Guru Prasath',
      category: 'Action',
      icon: <Mail className="w-4 h-4 text-cyan-400" />,
      action: () => scrollToSection('contact'),
    },
    {
      id: 'action-instagram',
      title: 'Open Instagram Profile (@mr.single_jd)',
      category: 'Action',
      icon: <Instagram className="w-4 h-4 text-pink-400" />,
      action: () => {
        onClose();
        window.open(personalDetails.instagram, '_blank');
      },
    },
    {
      id: 'action-github-boldbro',
      title: 'Open Bold Bro Car Wash GitHub Repository',
      category: 'Action',
      icon: <Github className="w-4 h-4 text-cyan-400" />,
      action: () => {
        onClose();
        if (projectData.githubUrl) {
          window.open(projectData.githubUrl, '_blank');
        }
      },
    },
    {
      id: 'action-marksheet',
      title: 'View Bachelor (B.Sc CS) Consolidated Marksheet',
      category: 'Action',
      icon: <GraduationCap className="w-4 h-4 text-cyan-400" />,
      action: () => {
        onClose();
        const bscEdu = educationList.find((e) => e.id === 'bsc');
        if (bscEdu?.documentUrl) {
          window.open(bscEdu.documentUrl, '_blank');
        }
      },
    },
    {
      id: 'action-resume',
      title: 'View / Download Official Resume',
      category: 'Action',
      icon: <FileText className="w-4 h-4 text-cyan-400" />,
      action: () => {
        onClose();
        onOpenResume();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 px-3 sm:px-4 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl bg-slate-950/95 rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-950/60"
        >
          {/* Header input */}
          <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-slate-900/60">
            <Search className="w-5 h-5 text-cyan-400 mr-3 shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a section, skill, or project... (e.g. 'films', 'skills', 'contact')"
              className="w-full bg-transparent text-white placeholder-slate-400 text-sm focus:outline-none"
            />
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-cyan-500/30">
                {deviceInfo.searchShortcut}
              </span>
              <button
                onClick={onClose}
                className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* List */}
          <div className="max-h-80 overflow-y-auto p-2 space-y-1">
            {filteredCommands.length === 0 ? (
              <div className="px-4 py-8 text-center text-slate-400 text-sm">
                No matching results found for "{query}"
              </div>
            ) : (
              filteredCommands.map((cmd) => (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between text-sm text-slate-200 hover:bg-white/10 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800/80 group-hover:bg-cyan-500/20 transition-colors">
                      {cmd.icon}
                    </div>
                    <div>
                      <div className="font-medium">{cmd.title}</div>
                      <div className="text-xs text-slate-400">{cmd.category}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </button>
              ))
            )}
          </div>

          {/* Footer hint with OS & Shortcut Badges */}
          <div className="px-4 py-2.5 bg-slate-950 border-t border-white/10 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono text-[10px] border border-white/10">ESC</kbd> Exit
              </span>
              <span className="hidden sm:inline-block">
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono text-[10px] border border-white/10">R</kbd> Resume
              </span>
              <span className="hidden sm:inline-block">
                <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono text-[10px] border border-white/10">M</kbd> SFX
              </span>
            </div>
            <div className="text-[11px] font-mono text-cyan-400/80 flex items-center gap-1.5">
              <span>{deviceInfo.platformName}</span>
              <span>•</span>
              <span>Portfolio Command Center</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
