import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Wrench,
  Code,
  Layout,
  Figma,
  Image,
  Sparkles,
  Camera,
  Video,
  Film,
  Share2,
  Bot,
  CheckCircle2,
  Calculator,
  ArrowRight,
  Clock,
  Zap
} from 'lucide-react';
import { servicesList } from '../data/portfolioData';
import { playClickSound, playHoverSound } from '../utils/audioSynth';

export const ServicesSection: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showEstimator, setShowEstimator] = useState<boolean>(false);

  const serviceThemeMap: Record<
    string,
    {
      borderHover: string;
      categoryColor: string;
      iconBg: string;
      iconColor: string;
      checkColor: string;
      accentBg: string;
    }
  > = {
    'srv-1': {
      borderHover: 'hover:border-cyan-500/50 hover:shadow-cyan-500/10',
      categoryColor: 'text-cyan-400',
      iconBg: 'bg-cyan-950/40 border-cyan-500/30 text-cyan-400',
      iconColor: 'text-cyan-400',
      checkColor: 'text-cyan-400',
      accentBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    },
    'srv-2': {
      borderHover: 'hover:border-rose-500/50 hover:shadow-rose-500/10',
      categoryColor: 'text-rose-400',
      iconBg: 'bg-rose-950/40 border-rose-500/30 text-rose-400',
      iconColor: 'text-rose-400',
      checkColor: 'text-rose-400',
      accentBg: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
    },
    'srv-3': {
      borderHover: 'hover:border-indigo-500/50 hover:shadow-indigo-500/10',
      categoryColor: 'text-indigo-400',
      iconBg: 'bg-indigo-950/40 border-indigo-500/30 text-indigo-400',
      iconColor: 'text-indigo-400',
      checkColor: 'text-indigo-400',
      accentBg: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    },
    'srv-4': {
      borderHover: 'hover:border-purple-500/50 hover:shadow-purple-500/10',
      categoryColor: 'text-purple-400',
      iconBg: 'bg-purple-950/40 border-purple-500/30 text-purple-400',
      iconColor: 'text-purple-400',
      checkColor: 'text-purple-400',
      accentBg: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    },
    'srv-5': {
      borderHover: 'hover:border-red-500/50 hover:shadow-red-500/10',
      categoryColor: 'text-red-400',
      iconBg: 'bg-red-950/40 border-red-500/30 text-red-400',
      iconColor: 'text-red-400',
      checkColor: 'text-red-400',
      accentBg: 'bg-red-500/10 text-red-300 border-red-500/20',
    },
    'srv-6': {
      borderHover: 'hover:border-sky-500/50 hover:shadow-sky-500/10',
      categoryColor: 'text-sky-400',
      iconBg: 'bg-sky-950/40 border-sky-500/30 text-sky-400',
      iconColor: 'text-sky-400',
      checkColor: 'text-sky-400',
      accentBg: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
    },
    'srv-7': {
      borderHover: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
      categoryColor: 'text-emerald-400',
      iconBg: 'bg-emerald-950/40 border-emerald-500/30 text-emerald-400',
      iconColor: 'text-emerald-400',
      checkColor: 'text-emerald-400',
      accentBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    },
    'srv-8': {
      borderHover: 'hover:border-sky-500/50 hover:shadow-sky-500/10',
      categoryColor: 'text-sky-400',
      iconBg: 'bg-sky-950/40 border-sky-500/30 text-sky-400',
      iconColor: 'text-sky-400',
      checkColor: 'text-sky-400',
      accentBg: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
    },
    'srv-9': {
      borderHover: 'hover:border-fuchsia-500/50 hover:shadow-fuchsia-500/10',
      categoryColor: 'text-fuchsia-400',
      iconBg: 'bg-fuchsia-950/40 border-fuchsia-500/30 text-fuchsia-400',
      iconColor: 'text-fuchsia-400',
      checkColor: 'text-fuchsia-400',
      accentBg: 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20',
    },
    'srv-10': {
      borderHover: 'hover:border-teal-500/50 hover:shadow-teal-500/10',
      categoryColor: 'text-teal-400',
      iconBg: 'bg-teal-950/40 border-teal-500/30 text-teal-400',
      iconColor: 'text-teal-400',
      checkColor: 'text-teal-400',
      accentBg: 'bg-teal-500/10 text-teal-300 border-teal-500/20',
    },
  };

  const getServiceIcon = (iconName: string, iconColor: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className={`w-5 h-5 ${iconColor}`} />;
      case 'Layout':
        return <Layout className={`w-5 h-5 ${iconColor}`} />;
      case 'Figma':
        return <Figma className={`w-5 h-5 ${iconColor}`} />;
      case 'Image':
        return <Image className={`w-5 h-5 ${iconColor}`} />;
      case 'Sparkles':
        return <Sparkles className={`w-5 h-5 ${iconColor}`} />;
      case 'Camera':
        return <Camera className={`w-5 h-5 ${iconColor}`} />;
      case 'Video':
        return <Video className={`w-5 h-5 ${iconColor}`} />;
      case 'Film':
        return <Film className={`w-5 h-5 ${iconColor}`} />;
      case 'Share2':
        return <Share2 className={`w-5 h-5 ${iconColor}`} />;
      case 'Bot':
        return <Bot className={`w-5 h-5 ${iconColor}`} />;
      default:
        return <Wrench className={`w-5 h-5 ${iconColor}`} />;
    }
  };

  const toggleSelectService = (id: string) => {
    playClickSound();
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const scrollToContact = () => {
    playClickSound();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Wrench className="w-3.5 h-3.5" />
            <span>08. PROFESSIONAL SERVICES</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Services & <span className="gradient-text">Deliverables</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            End-to-end technical engineering and digital media production offered for brands, agencies, and projects.
          </p>
        </div>

        {/* Toggle Estimator Banner */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => {
              playClickSound();
              setShowEstimator(!showEstimator);
            }}
            className="px-5 py-2.5 rounded-2xl glass-card border border-cyan-500/30 text-cyan-300 hover:text-white font-mono text-xs flex items-center gap-2 shadow-lg hover:border-cyan-400 transition-all"
          >
            <Calculator className="w-4 h-4 text-cyan-400" />
            <span>
              {showEstimator ? 'Hide Scope Estimator' : 'Try Interactive Scope & Service Estimator'}
            </span>
          </button>
        </div>

        {/* Interactive Scope Estimator Bar */}
        <AnimatePresence>
          {showEstimator && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="glass-card p-6 rounded-3xl border border-cyan-500/40 mb-12 space-y-4"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 text-white font-heading font-bold text-lg">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <span>Interactive Project Scope Calculator</span>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Selected: <span className="text-cyan-300 font-bold">{selectedServices.length} Services</span>
                </div>
              </div>

              <p className="text-xs text-slate-300">
                Click on any service cards below to select multiple capabilities for your custom project bundle:
              </p>

              {selectedServices.length > 0 && (
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="text-xs font-mono text-cyan-400 font-bold">
                      Selected Scope:
                    </div>
                    <div className="text-xs text-slate-200 mt-1">
                      {selectedServices
                        .map((id) => servicesList.find((s) => s.id === id)?.title)
                        .filter(Boolean)
                        .join(' + ')}
                    </div>
                  </div>

                  <button
                    onClick={scrollToContact}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium text-xs shadow-lg flex items-center gap-2"
                  >
                    <span>Request Proposal For Selected</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Services Grid (10 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => {
            const isSelected = selectedServices.includes(service.id);
            const theme = serviceThemeMap[service.id] || {
              borderHover: 'hover:border-cyan-500/50 hover:shadow-cyan-500/10',
              categoryColor: 'text-cyan-400',
              iconBg: 'bg-cyan-950/40 border-cyan-500/30 text-cyan-400',
              iconColor: 'text-cyan-400',
              checkColor: 'text-cyan-400',
              accentBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
            };

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onMouseEnter={playHoverSound}
                onClick={() => showEstimator && toggleSelectService(service.id)}
                className={`glass-card glass-card-hover rounded-3xl p-6 space-y-4 flex flex-col justify-between border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-cyan-400 bg-blue-950/40 shadow-xl shadow-cyan-500/20'
                    : `border-white/10 ${theme.borderHover}`
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl border ${theme.iconBg}`}>
                      {getServiceIcon(service.iconName, theme.iconColor)}
                    </div>
                    <span className={`px-2.5 py-1 rounded-full font-mono text-[10px] border flex items-center gap-1 ${theme.accentBg}`}>
                      <Clock className={`w-3 h-3 ${theme.iconColor}`} />
                      <span>{service.typicalTimeline}</span>
                    </span>
                  </div>

                  <div>
                    <span className={`text-[10px] font-mono uppercase tracking-widest font-semibold ${theme.categoryColor}`}>
                      {service.category}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-white/5">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      Deliverables:
                    </div>
                    {service.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="text-xs text-slate-300 flex items-center gap-1.5">
                        <CheckCircle2 className={`w-3 h-3 ${theme.checkColor} shrink-0`} />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {showEstimator && (
                  <div className="pt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSelectService(service.id);
                      }}
                      className={`w-full py-2 rounded-xl font-mono text-xs font-semibold transition-all ${
                        isSelected
                          ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                          : 'bg-slate-900 text-slate-300 hover:text-white border border-white/10'
                      }`}
                    >
                      {isSelected ? '✓ Added To Proposal' : '+ Add To Estimator'}
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
