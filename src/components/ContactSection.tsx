import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Linkedin,
  Youtube,
  Instagram,
  Send,
  FileText,
  CheckCircle2,
  Sparkles,
  MapPin,
  ArrowUpRight,
  MessageSquare,
  MessageCircle
} from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import { playClickSound, playHoverSound } from '../utils/audioSynth';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-14 sm:py-16 md:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>11. GET IN TOUCH</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xs sm:text-sm">
            Open for software engineering roles, creative media direction, short film projects, and collaborative innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct WhatsApp Glass Card */}
            <a
              href="https://api.whatsapp.com/send?phone=919384784902"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              className="glass-card glass-card-hover p-6 rounded-3xl border border-emerald-500/40 hover:border-emerald-400 flex items-center justify-between group block bg-gradient-to-r from-emerald-950/35 to-slate-950/85 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 group-hover:bg-emerald-400 group-hover:text-slate-950 transition-all shadow-md shadow-emerald-500/20">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span>Direct WhatsApp</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-emerald-300 transition-colors">
                    {personalDetails.phone}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>

            {/* Email Glass Card */}
            <a
              href={`mailto:${personalDetails.email}`}
              onMouseEnter={playHoverSound}
              className="glass-card glass-card-hover p-6 rounded-3xl border border-cyan-500/30 hover:border-cyan-400 flex items-center justify-between group block bg-gradient-to-r from-cyan-950/30 to-slate-950/80 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all shadow-md shadow-cyan-500/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                    Official Email
                  </div>
                  <div className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-cyan-300 transition-colors truncate max-w-[220px] sm:max-w-[280px]">
                    {personalDetails.email}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>

            {/* LinkedIn Glass Card */}
            <a
              href={personalDetails.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              className="glass-card glass-card-hover p-6 rounded-3xl border border-blue-500/30 hover:border-blue-400 flex items-center justify-between group block bg-gradient-to-r from-blue-950/30 to-slate-950/80 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-blue-500/20 text-blue-300 border border-blue-400/40 group-hover:bg-blue-400 group-hover:text-slate-950 transition-all shadow-md shadow-blue-500/20">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
                    LinkedIn Network
                  </div>
                  <div className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-blue-300 transition-colors truncate max-w-[220px] sm:max-w-[280px]">
                    {personalDetails.linkedInHandle}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>

            {/* YouTube Glass Card */}
            <a
              href={personalDetails.youTube}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              className="glass-card glass-card-hover p-6 rounded-3xl border border-red-500/30 hover:border-red-400 flex items-center justify-between group block bg-gradient-to-r from-red-950/30 to-slate-950/80 shadow-lg shadow-red-500/10 hover:shadow-red-500/25"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-red-500/20 text-red-300 border border-red-400/40 group-hover:bg-red-400 group-hover:text-slate-950 transition-all shadow-md shadow-red-500/20">
                  <Youtube className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
                    YouTube Channel
                  </div>
                  <div className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-red-300 transition-colors truncate max-w-[220px] sm:max-w-[280px]">
                    Channel ID: {personalDetails.youTubeChannelId}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-red-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>

            {/* Instagram Glass Card */}
            <a
              href={personalDetails.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              className="glass-card glass-card-hover p-6 rounded-3xl border border-pink-500/30 hover:border-pink-400 flex items-center justify-between group block bg-gradient-to-r from-pink-950/30 to-slate-950/80 shadow-lg shadow-pink-500/10 hover:shadow-pink-500/25"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-pink-500/20 text-pink-300 border border-pink-400/40 group-hover:bg-pink-400 group-hover:text-slate-950 transition-all shadow-md shadow-pink-500/20">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-pink-400 font-bold uppercase tracking-wider">
                    Instagram Profile
                  </div>
                  <div className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-pink-300 transition-colors truncate max-w-[220px] sm:max-w-[280px]">
                    {personalDetails.instagramHandle}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-pink-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>

            {/* Download Resume Card */}
            <div className="glass-card p-6 rounded-3xl border border-cyan-400/40 space-y-4 bg-gradient-to-r from-cyan-950/40 via-indigo-950/30 to-slate-950 shadow-xl shadow-cyan-500/10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                  <FileText className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-white">
                    Looking for my detailed CV?
                  </h4>
                  <p className="text-xs text-slate-300">
                    View on screen, copy plain text, or print formatted resume.
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  playClickSound();
                  onOpenResume();
                }}
                onMouseEnter={playHoverSound}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 hover:from-cyan-300 hover:to-indigo-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-slate-950" />
                <span>Open Resume Viewer</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-white">
                    Send Direct Message
                  </h3>
                  <div className="text-xs font-mono text-cyan-400">
                    Guaranteed response within 24 hours
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <div className="font-bold">Message sent successfully!</div>
                      <div>Thank you for reaching out. Guru Prasath G D will get back to you shortly.</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alexander Vance"
                      className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Subject / Topic *</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineering Opportunity / Short Film Collaboration"
                    className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Message Content *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message or inquiry here..."
                    className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={playHoverSound}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/50 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
