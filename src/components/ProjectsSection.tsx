import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FolderGit2,
  Database,
  Layout,
  Server,
  TestTube2,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Code2,
  Layers,
  X,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Github,
  Maximize2,
  Image as ImageIcon
} from 'lucide-react';
import { projectData } from '../data/portfolioData';
import { ProjectViewDetail } from '../types';
import { playClickSound, playHoverSound } from '../utils/audioSynth';

export const ProjectsSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const imagesList: ProjectViewDetail[] = projectData.images && projectData.images.length > 0
    ? projectData.images
    : [{
        url: projectData.image,
        caption: projectData.title,
        tag: "Project View",
        badge: "Automotive Enterprise Web App",
        title: projectData.title,
        subtitle: projectData.subtitle,
        description: projectData.description,
        technologies: projectData.technologies,
        features: projectData.features,
        role: projectData.role,
        highlight: "Production full-stack car wash management system."
      }];

  const currentImage = imagesList[activeImageIndex] || imagesList[0];

  const handleOpenModal = () => {
    playClickSound();
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    playClickSound();
    setModalOpen(false);
  };

  const handleNextImage = () => {
    playClickSound();
    setActiveImageIndex((prev) => (prev + 1) % imagesList.length);
  };

  const handlePrevImage = () => {
    playClickSound();
    setActiveImageIndex((prev) => (prev - 1 + imagesList.length) % imagesList.length);
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>04. FEATURED PROJECT</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Full-Stack <span className="gradient-text">Software Solution</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Engineered from concept to execution: database design, server-side PHP logic, and responsive UI.
          </p>
        </div>

        {/* Featured Project Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Image Mockup Frame & Multi-Photo Showcase */}
            <div className="lg:col-span-7 space-y-4">
              {/* Photo View Selector Tabs */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-white/10 text-xs font-mono">
                  {imagesList.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        playClickSound();
                        setActiveImageIndex(idx);
                      }}
                      onMouseEnter={playHoverSound}
                      className={`px-3 py-1.5 rounded-lg transition-all font-semibold flex items-center gap-1.5 cursor-pointer ${
                        activeImageIndex === idx
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>{img.tag}</span>
                    </button>
                  ))}
                </div>

                <div className="text-[11px] font-mono text-cyan-400/80 hidden sm:flex items-center gap-1">
                  <span>Photo {activeImageIndex + 1} of {imagesList.length}</span>
                </div>
              </div>

              {/* Main Photo Frame */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
                <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-2xl">
                  {/* Window Chrome Header Bar */}
                  <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 truncate max-w-[200px]">
                      {activeImageIndex === 0 ? 'https://boldbro.carwash.system/admin' : 'https://boldbro.carwash.system/client-mockup'}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          playClickSound();
                          setLightboxOpen(true);
                        }}
                        title="Click to zoom / view fullscreen"
                        className="px-2 py-0.5 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-[10px] font-mono flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Maximize2 className="w-3 h-3" />
                        <span>Fullscreen</span>
                      </button>
                    </div>
                  </div>

                  {/* Main Image Container */}
                  <div
                    onClick={() => {
                      playClickSound();
                      setLightboxOpen(true);
                    }}
                    className="relative cursor-pointer overflow-hidden aspect-[16/10] bg-slate-900 flex items-center justify-center"
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImage.url}
                        src={currentImage.url}
                        alt={currentImage.caption}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                    </AnimatePresence>

                    {/* Navigation Arrow Overlays */}
                    {imagesList.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePrevImage();
                          }}
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-cyan-500 hover:text-slate-950 text-white backdrop-blur-md border border-white/20 transition-all opacity-80 group-hover:opacity-100 hover:scale-110"
                          title="Previous Photo"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNextImage();
                          }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-cyan-500 hover:text-slate-950 text-white backdrop-blur-md border border-white/20 transition-all opacity-80 group-hover:opacity-100 hover:scale-110"
                          title="Next Photo"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </>
                    )}

                    {/* Image Caption Overlay */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-3 pt-6 flex items-center justify-between text-xs">
                      <span className="text-slate-200 font-medium truncate">{currentImage.caption}</span>
                      <span className="px-2 py-0.5 rounded bg-blue-500/20 text-cyan-300 text-[10px] font-mono border border-cyan-500/30 shrink-0 ml-2">
                        {currentImage.tag}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Thumbnails Row */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                {imagesList.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      playClickSound();
                      setActiveImageIndex(idx);
                    }}
                    className={`relative rounded-xl overflow-hidden border p-1 text-left transition-all flex items-center gap-3 cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-cyan-400 bg-cyan-500/10 shadow-md shadow-cyan-500/20'
                        : 'border-white/10 bg-slate-900/60 hover:border-white/25 hover:bg-slate-900'
                    }`}
                  >
                    <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0 bg-slate-950 border border-white/10">
                      <img
                        src={img.url}
                        alt={img.tag}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 pr-2">
                      <div className="text-xs font-semibold text-white truncate">{img.tag}</div>
                      <div className="text-[10px] font-mono text-slate-400 truncate">{idx === 0 ? 'Customer View' : 'Admin Panel View'}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Project Details - Dynamically mapped to the active UI state */}
            <div className="lg:col-span-5 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImageIndex}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* Dynamic Header & Category Badge */}
                  <div className="space-y-2.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold border border-cyan-500/25">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{currentImage.badge || "Automotive Enterprise Web App"}</span>
                      </span>

                      <span className="px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-300 text-xs font-mono border border-blue-500/30">
                        {currentImage.tag}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white leading-tight">
                      {currentImage.title || projectData.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-cyan-300 font-mono">
                      {currentImage.subtitle || projectData.subtitle}
                    </p>
                  </div>

                  {/* Dynamic View Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentImage.description || projectData.description}
                  </p>

                  {/* Dynamic Technologies Badges */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase tracking-wider">
                      <span>UI & Technology Stack:</span>
                      <span className="text-[10px] text-cyan-400 font-mono">
                        {activeImageIndex === 0 ? "Client-Facing Module" : "Operations Module"}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(currentImage.technologies || projectData.technologies).map((tech) => {
                        const techColorMap: Record<string, string> = {
                          'PHP': 'bg-indigo-950/50 text-indigo-300 border-indigo-500/40 hover:border-indigo-400',
                          'PHP (PDO)': 'bg-indigo-950/50 text-indigo-300 border-indigo-500/40 hover:border-indigo-400',
                          'MySQL': 'bg-sky-950/50 text-sky-300 border-sky-500/40 hover:border-sky-400',
                          'MySQL Relational DB': 'bg-sky-950/50 text-sky-300 border-sky-500/40 hover:border-sky-400',
                          'HTML5': 'bg-cyan-950/50 text-cyan-300 border-cyan-500/40 hover:border-cyan-400',
                          'HTML5 / CSS3': 'bg-cyan-950/50 text-cyan-300 border-cyan-500/40 hover:border-cyan-400',
                          'CSS3 / Bootstrap': 'bg-purple-950/50 text-purple-300 border-purple-500/40 hover:border-purple-400',
                          'Bootstrap': 'bg-purple-950/50 text-purple-300 border-purple-500/40 hover:border-purple-400',
                          'jQuery': 'bg-emerald-950/50 text-emerald-300 border-emerald-500/40 hover:border-emerald-400',
                          'AJAX': 'bg-amber-950/50 text-amber-300 border-amber-500/40 hover:border-amber-400',
                          'SMS Gateway': 'bg-rose-950/50 text-rose-300 border-rose-500/40 hover:border-rose-400',
                          'Session Security': 'bg-amber-950/50 text-amber-300 border-amber-500/40 hover:border-amber-400',
                          'DataTables': 'bg-blue-950/50 text-blue-300 border-blue-500/40 hover:border-blue-400',
                          'Chart Analytics': 'bg-emerald-950/50 text-emerald-300 border-emerald-500/40 hover:border-emerald-400',
                          'PDF Invoicing': 'bg-rose-950/50 text-rose-300 border-rose-500/40 hover:border-rose-400',
                        };
                        const colorStyle = techColorMap[tech] || 'bg-slate-900 text-cyan-300 border-cyan-500/30';
                        return (
                          <span
                            key={tech}
                            className={`px-3 py-1 rounded-xl font-mono text-xs font-semibold border shadow-sm transition-all ${colorStyle}`}
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Dynamic Key Features List */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {activeImageIndex === 0 ? "Live Customer Portal Features:" : "Admin Operations & Control Features:"}
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {(currentImage.features || projectData.features).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 bg-slate-900/40 p-2 rounded-xl border border-white/5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic My Role Badges */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Engineering Scope & Role in this View:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(currentImage.role || projectData.role).map((r, rIdx) => {
                        const roleColors = [
                          'bg-cyan-950/50 text-cyan-300 border-cyan-500/40',
                          'bg-purple-950/50 text-purple-300 border-purple-500/40',
                          'bg-emerald-950/50 text-emerald-300 border-emerald-500/40',
                          'bg-amber-950/50 text-amber-300 border-amber-500/40',
                        ];
                        const color = roleColors[rIdx % roleColors.length];
                        return (
                          <span
                            key={r}
                            className={`px-3 py-1 rounded-xl text-xs font-semibold border ${color} shadow-sm`}
                          >
                            ✓ {r}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Dynamic Highlight Card */}
                  {currentImage.highlight && (
                    <div className="p-3 rounded-xl bg-blue-950/30 border border-cyan-500/25 flex items-start gap-2.5 text-xs text-cyan-200">
                      <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{currentImage.highlight}</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleOpenModal}
                  onMouseEnter={playHoverSound}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white font-semibold text-xs shadow-lg shadow-blue-600/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Layers className="w-4 h-4" />
                  <span>Inspect System Architecture & Schema</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                {projectData.githubUrl && (
                  <a
                    href={projectData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playClickSound()}
                    onMouseEnter={playHoverSound}
                    className="px-5 py-3 rounded-xl glass-card border border-white/15 hover:border-cyan-500/40 bg-slate-900/80 hover:bg-slate-850 text-white font-semibold text-xs font-mono flex items-center justify-center gap-2 shadow-lg shadow-black/40 hover:scale-[1.02] active:scale-[0.98] transition-all group"
                  >
                    <Github className="w-4 h-4 text-cyan-400 group-hover:text-white transition-colors" />
                    <span>GitHub Repository</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* System Architecture Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-3xl glass-card rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white">
                      {projectData.title}
                    </h3>
                    <div className="text-xs font-mono text-cyan-400">
                      Full-Stack PHP + MySQL Architecture Specification
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-2 rounded-xl glass-card text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Architecture Breakdown Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-2xl border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-heading font-semibold text-sm">
                    <Layout className="w-4 h-4" />
                    <span>Frontend Interface</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {projectData.architectureDetails.frontend}
                  </p>
                </div>

                <div className="glass-card p-4 rounded-2xl border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-blue-400 font-heading font-semibold text-sm">
                    <Server className="w-4 h-4" />
                    <span>Backend Server Logic</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {projectData.architectureDetails.backend}
                  </p>
                </div>

                <div className="glass-card p-4 rounded-2xl border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-heading font-semibold text-sm">
                    <Database className="w-4 h-4" />
                    <span>Relational Database</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {projectData.architectureDetails.database}
                  </p>
                </div>

                <div className="glass-card p-4 rounded-2xl border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-heading font-semibold text-sm">
                    <TestTube2 className="w-4 h-4" />
                    <span>Testing & QA</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {projectData.architectureDetails.testing}
                  </p>
                </div>
              </div>

              {/* Schema modules */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 space-y-2">
                <div className="text-xs font-mono text-cyan-300 font-bold uppercase">
                  Database Tables & Foreign Keys:
                </div>
                <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate-300">
                  <span className="px-2.5 py-1 rounded bg-slate-950 border border-white/10">`customers` (id, name, phone, email)</span>
                  <span className="px-2.5 py-1 rounded bg-slate-950 border border-white/10">`vehicles` (plate_no, model, customer_id)</span>
                  <span className="px-2.5 py-1 rounded bg-slate-950 border border-white/10">`bookings` (booking_id, service_id, date, status)</span>
                  <span className="px-2.5 py-1 rounded bg-slate-950 border border-white/10">`services` (service_id, name, price_inr)</span>
                  <span className="px-2.5 py-1 rounded bg-slate-950 border border-white/10">`invoices` (inv_no, booking_id, total, timestamp)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-white/10">
                {projectData.githubUrl ? (
                  <a
                    href={projectData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playClickSound()}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-cyan-300 hover:text-white text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>View GitHub Source Code</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                ) : <div />}

                <button
                  onClick={handleCloseModal}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-medium hover:bg-slate-700 transition-colors"
                >
                  Close Architecture Viewer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Fullscreen High-Res Image Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
            onClick={() => {
              playClickSound();
              setLightboxOpen(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full rounded-2xl overflow-hidden glass-card border border-white/20 shadow-2xl bg-slate-950/95"
            >
              {/* Lightbox Header */}
              <div className="bg-slate-900/90 px-5 py-3 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-cyan-400 font-bold">{projectData.title}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-xs text-slate-300">{currentImage.caption}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-blue-500/20 text-cyan-300 text-xs font-mono border border-cyan-500/30">
                    {currentImage.tag}
                  </span>
                  <button
                    onClick={() => {
                      playClickSound();
                      setLightboxOpen(false);
                    }}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Lightbox Image Preview */}
              <div className="relative p-2 sm:p-4 flex items-center justify-center bg-slate-950/60 max-h-[75vh]">
                <img
                  src={currentImage.url}
                  alt={currentImage.caption}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
                />

                {/* Left / Right Nav in Lightbox */}
                {imagesList.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrevImage();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-cyan-500 hover:text-slate-950 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110"
                      title="Previous Photo"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNextImage();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-cyan-500 hover:text-slate-950 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110"
                      title="Next Photo"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Lightbox Footer Thumbnails & Selector */}
              <div className="bg-slate-900/90 px-4 py-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {imagesList.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        playClickSound();
                        setActiveImageIndex(idx);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                        activeImageIndex === idx
                          ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                          : 'bg-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      <span>{img.tag}</span>
                    </button>
                  ))}
                </div>

                <div className="text-xs text-slate-400 font-mono">
                  Press arrows or click tabs to toggle view
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
