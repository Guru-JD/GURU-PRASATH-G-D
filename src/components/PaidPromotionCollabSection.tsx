import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  MessageCircle,
  Phone,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Instagram,
  Youtube,
  Film,
  TrendingUp,
  Tag,
  Calendar,
  DollarSign,
  Briefcase,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import { playClickSound, playHoverSound } from '../utils/audioSynth';

export const PaidPromotionCollabSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    phone: '',
    email: '',
    collabType: 'Instagram Reel / Story Promotion',
    budget: '₹1,000 - ₹2,000',
    timeline: 'Within Next 1-2 Weeks',
    details: '',
  });

  const [isCopied, setIsCopied] = useState(false);
  const [whatsappSent, setWhatsappSent] = useState(false);
  const [lastGeneratedUrl, setLastGeneratedUrl] = useState('');

  const collabOptions = [
    {
      id: 'ig-promo',
      label: 'Instagram Reel / Story Promotion',
      icon: <Instagram className="w-3.5 h-3.5 text-pink-400" />,
      desc: 'Viral Tamil tech comedy, reels, mentions, product unboxing'
    },
    {
      id: 'yt-review',
      label: 'YouTube Tech Review & Sponsor',
      icon: <Youtube className="w-3.5 h-3.5 text-red-400" />,
      desc: 'Dedicated feature segment, software/hardware tutorial'
    },
    {
      id: 'film-sponsor',
      label: 'Short Film Brand Placement',
      icon: <Film className="w-3.5 h-3.5 text-cyan-400" />,
      desc: 'Native in-film product placement, co-branded titles'
    },
    {
      id: 'app-launch',
      label: 'App & Website Launch Showcase',
      icon: <Layers className="w-3.5 h-3.5 text-blue-400" />,
      desc: 'Developer POV walkthrough, UI/UX highlight, tech endorsement'
    },
    {
      id: 'ambassador',
      label: 'Brand Ambassador / Long-Term',
      icon: <Briefcase className="w-3.5 h-3.5 text-purple-400" />,
      desc: 'Multi-post campaign, campus tech advocate, event presence'
    },
    {
      id: 'custom-collab',
      label: 'Custom Creative Collaboration',
      icon: <Sparkles className="w-3.5 h-3.5 text-amber-400" />,
      desc: 'Acting, cinematography, comedy scriptwriting, or tailored ideas'
    }
  ];

  const budgetTiers = [
    '₹1,000 - ₹2,000',
    '₹2,000 - ₹3,500',
    'Flexible / Open to Discuss'
  ];

  const timelineOptions = [
    'Immediate (Within 48 Hours)',
    'Within Next 1-2 Weeks',
    'This Month',
    'Flexible / Upcoming Campaign'
  ];

  // Target WhatsApp number for Guru Prasath G D: 919384784902
  const rawPhoneNumber = '919384784902';

  const generateWhatsAppMessage = () => {
    return (
`🌟 *PAID PROMOTION & COLLAB ENQUIRY* 🌟
-----------------------------------------
👤 *Name:* ${formData.name.trim()}
🏢 *Brand / Org:* ${formData.brand.trim() || 'Individual / Creator'}
📞 *Contact Phone / WA:* ${formData.phone.trim()}
✉️ *Email:* ${formData.email.trim() || 'Not provided'}
🎯 *Collab Category:* ${formData.collabType}
💰 *Estimated Budget:* ${formData.budget}
📅 *Campaign Timeline:* ${formData.timeline}

📝 *Promotion / Campaign Details:*
${formData.details.trim()}
-----------------------------------------
🚀 *Sent via Guru Prasath G D Portfolio Website*`
    );
  };

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.details.trim()) {
      alert('Please fill in your Name, Contact Phone/WhatsApp, and Promotion Details.');
      return;
    }

    const message = generateWhatsAppMessage();
    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${rawPhoneNumber}&text=${encodedText}`;

    setLastGeneratedUrl(whatsappUrl);
    setWhatsappSent(true);

    // Open WhatsApp in a new tab / window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    playClickSound();
    const message = generateWhatsAppMessage();
    navigator.clipboard.writeText(message);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  const handleQuickChat = () => {
    playClickSound();
    const quickMsg = encodeURIComponent("Hi Guru Prasath, I saw your portfolio and I'm interested in discussing a Paid Promotion / Collaboration opportunity with you!");
    window.open(`https://api.whatsapp.com/send?phone=${rawPhoneNumber}&text=${quickMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="collab-promotion" className="py-14 sm:py-16 md:py-20 relative z-10 overflow-hidden">
      {/* Background Ambient Lights */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-emerald-400/40 text-emerald-300 text-xs font-mono shadow-lg shadow-emerald-500/15"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="font-bold text-white uppercase tracking-wider">AVAILABLE FOR PAID PROMOTION & COLLAB</span>
            <span className="text-emerald-400">•</span>
            <span className="text-emerald-300 font-semibold">Fast WhatsApp Response</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Brand Partnerships & <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Paid Collabs</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 max-w-2xl mx-auto text-xs sm:text-sm"
          >
            Partner with Guru Prasath G D — Creative Technologist, Cinematographer & Content Creator ({personalDetails.instagramHandle}). Submit your enquiry below to connect directly on WhatsApp!
          </motion.p>
        </div>

        {/* Main Grid: Left Value Proposition & Channels + Right WhatsApp Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Promotion Channels & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Quick Summary Card */}
            <div className="glass-card p-5 sm:p-6 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 via-slate-950/80 to-cyan-950/30 shadow-xl shadow-emerald-500/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-400/30">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    High Engagement Creator
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    Why Collaborate with Guru?
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Combining technical software expertise with creative visual storytelling, viral Tamil tech humor, and cinema-grade production. Your product gets authentic, organic, and memorable reach.
              </p>

              {/* Creator Stats / Badges */}
              <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-emerald-500/20">
                  <div className="font-heading font-extrabold text-emerald-400 text-sm sm:text-base">Reels & Stills</div>
                  <div className="text-[10px] text-slate-400 font-mono">Viral Parodies</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-cyan-500/20">
                  <div className="font-heading font-extrabold text-cyan-400 text-sm sm:text-base">MCA Tech</div>
                  <div className="text-[10px] text-slate-400 font-mono">Dev Endorsement</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-purple-500/20">
                  <div className="font-heading font-extrabold text-purple-400 text-sm sm:text-base">3 Films</div>
                  <div className="text-[10px] text-slate-400 font-mono">Cinematic Quality</div>
                </div>
              </div>

              {/* Instant WhatsApp Chat CTA */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleQuickChat}
                  onMouseEnter={playHoverSound}
                  className="w-full py-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 font-bold text-xs border border-emerald-400/40 transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-lg shadow-emerald-500/10"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:text-slate-950 group-hover:scale-110 transition-transform" />
                  <span>Direct WhatsApp Chat: +91 9384784902</span>
                </button>
              </div>
            </div>

            {/* Collab Offerings Cards */}
            <div className="glass-card p-4 sm:p-5 rounded-3xl border border-white/10 space-y-3">
              <div className="text-xs font-mono text-slate-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-cyan-400" />
                <span>Available Promotion Formats</span>
              </div>

              <div className="space-y-2">
                {collabOptions.map((opt) => (
                  <div
                    key={opt.id}
                    onClick={() => {
                      playClickSound();
                      setFormData((prev) => ({ ...prev, collabType: opt.label }));
                    }}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 ${
                      formData.collabType === opt.label
                        ? 'bg-emerald-950/40 border-emerald-400/60 shadow-md shadow-emerald-500/10'
                        : 'bg-slate-900/60 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="p-1.5 rounded-lg bg-slate-950/80 border border-white/10 shrink-0 mt-0.5">
                      {opt.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-semibold text-xs text-white">
                          {opt.label}
                        </span>
                        {formData.collabType === opt.label && (
                          <span className="text-[10px] font-mono text-emerald-400 font-bold">Selected</span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 truncate">
                        {opt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct WhatsApp Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-5 sm:p-7 rounded-3xl border border-emerald-500/30 space-y-5 bg-gradient-to-br from-slate-950/95 via-[#0A0E17]/90 to-slate-950/95 shadow-2xl relative overflow-hidden">
              {/* Top Form Header with WhatsApp Pill */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/25">
                    <MessageCircle className="w-5 h-5 font-bold" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                      Enquire for Paid Collab
                    </h3>
                    <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                      <span>Direct WhatsApp Dispatch</span>
                      <span className="text-slate-500">•</span>
                      <span>To: +91 9384784902</span>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono font-medium self-start sm:self-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Instant Connect</span>
                </div>
              </div>

              {/* Success Notification if WhatsApp triggered */}
              <AnimatePresence>
                {whatsappSent && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className="p-4 rounded-2xl bg-emerald-950/80 border-2 border-emerald-400/60 shadow-xl shadow-emerald-500/20 space-y-3"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <div className="font-bold text-white text-xs sm:text-sm">
                          WhatsApp Chat Launched!
                        </div>
                        <div className="text-xs text-emerald-200 leading-relaxed">
                          Your enquiry has been structured and dispatched to WhatsApp for <strong>Guru Prasath G D</strong> (+91 9384784902). Simply press <strong>Send</strong> in WhatsApp to deliver the message!
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {lastGeneratedUrl && (
                        <a
                          href={lastGeneratedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow hover:bg-emerald-400 transition-colors cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Re-open WhatsApp</span>
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={handleCopyMessage}
                        className="px-3 py-1.5 rounded-xl glass-card text-xs font-medium text-slate-300 hover:text-white border border-white/20 flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-400" />
                            <span>Copy Message Text</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => setWhatsappSent(false)}
                        className="text-[11px] text-slate-400 hover:text-slate-200 underline ml-auto"
                      >
                        Edit Details
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Interactive Form */}
              <form onSubmit={handleSendViaWhatsApp} className="space-y-4">
                {/* Row 1: Name & Brand */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300 font-medium">
                      Your Name / Representative *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh / Sarah Vance"
                      className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300 font-medium">
                      Brand / Company / Channel Name
                    </label>
                    <input
                      type="text"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      placeholder="e.g. TechGears / BoldStudio / Startup"
                      className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Phone/WhatsApp & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300 font-medium flex items-center justify-between">
                      <span>Your Contact / WhatsApp *</span>
                      <span className="text-emerald-400 text-[10px]">Will receive reply</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300 font-medium">
                      Official Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sponsor@brand.com"
                      className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Collab Category Dropdown */}
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 font-medium flex items-center justify-between">
                    <span>Selected Collaboration Format *</span>
                    <span className="text-[10px] text-slate-400 font-mono">Click to change</span>
                  </label>
                  <select
                    value={formData.collabType}
                    onChange={(e) => setFormData({ ...formData, collabType: e.target.value })}
                    className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                  >
                    {collabOptions.map((opt) => (
                      <option key={opt.id} value={opt.label} className="bg-slate-950 text-white">
                        {opt.label} — {opt.desc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row 3: Budget Range & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300 font-medium flex items-center gap-1">
                      <DollarSign className="w-3 h-3 text-emerald-400" />
                      <span>Estimated Budget Range</span>
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                    >
                      {budgetTiers.map((tier) => (
                        <option key={tier} value={tier} className="bg-slate-950 text-white">
                          {tier}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300 font-medium flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      <span>Campaign Timeline</span>
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                    >
                      {timelineOptions.map((time) => (
                        <option key={time} value={time} className="bg-slate-950 text-white">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Details Textarea */}
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 font-medium flex items-center justify-between">
                    <span>Promotion Details & Requirements *</span>
                    <span className="text-[10px] text-slate-400">Brief outline</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Describe your product/service, campaign goal, preferred dates, deliverables, or link to your website/app..."
                    className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit via WhatsApp Button */}
                <div className="pt-2 space-y-2">
                  <button
                    type="submit"
                    onMouseEnter={playHoverSound}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-slate-950 font-bold" />
                    <span>Send Enquiry via WhatsApp (+91 9384784902)</span>
                  </button>

                  <p className="text-center text-[11px] text-slate-400">
                    Clicking will format your details and open directly in WhatsApp so you can review and tap send.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
