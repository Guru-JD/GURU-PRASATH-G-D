import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Download,
  Calendar,
  CheckCircle2,
  Copy,
  Check,
  Printer,
  Sparkles,
  ShieldCheck,
  FileBadge,
  ExternalLink,
  FileText,
  CreditCard,
  Loader2,
  Maximize2
} from 'lucide-react';
import { CertificateItem } from '../types';
import { personalDetails } from '../data/portfolioData';
import { playClickSound, playHoverSound } from '../utils/audioSynth';

interface CertificateViewerModalProps {
  certificate: CertificateItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateViewerModal: React.FC<CertificateViewerModalProps> = ({
  certificate,
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'drive' | 'credential'>('drive');
  const [iframeLoading, setIframeLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!certificate) return null;

  // Extract Drive Embed Preview URL
  const getEmbedUrl = (url?: string, fileId?: string) => {
    if (fileId) {
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    if (!url) return null;
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return url;
  };

  const driveEmbedUrl = getEmbedUrl(certificate.driveUrl, certificate.fileId);

  const handleCopyCredential = () => {
    playClickSound();
    if (certificate.credentialId) {
      navigator.clipboard.writeText(certificate.credentialId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownload = () => {
    playClickSound();
    setIsDownloading(true);

    try {
      // Generate high-resolution 1920x1200 Certificate Canvas
      const canvas = document.createElement('canvas');
      canvas.width = 1920;
      canvas.height = 1200;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        // 1. Dark Background
        const bgGrad = ctx.createLinearGradient(0, 0, 1920, 1200);
        bgGrad.addColorStop(0, '#090D16');
        bgGrad.addColorStop(0.5, '#0E1726');
        bgGrad.addColorStop(1, '#080C14');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, 1920, 1200);

        // 2. Outer Border
        ctx.strokeStyle = '#06B6D4';
        ctx.lineWidth = 4;
        ctx.strokeRect(40, 40, 1840, 1120);

        ctx.strokeStyle = '#38BDF8';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(55, 55, 1810, 1090);

        // Corner Accents
        const corners = [
          [55, 55],
          [1865, 55],
          [55, 1145],
          [1865, 1145]
        ];
        corners.forEach(([x, y]) => {
          ctx.fillStyle = '#22D3EE';
          ctx.beginPath();
          ctx.arc(x, y, 8, 0, Math.PI * 2);
          ctx.fill();
        });

        // 3. Top Decorative Header
        ctx.font = 'bold 20px "Courier New", monospace';
        ctx.fillStyle = '#38BDF8';
        ctx.textAlign = 'center';
        ctx.fillText('OFFICIAL CERTIFICATE OF ACHIEVEMENT & CREDENTIAL', 960, 130);

        ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
        ctx.beginPath();
        ctx.moveTo(700, 150);
        ctx.lineTo(1220, 150);
        ctx.stroke();

        // 4. Main Header
        ctx.font = 'bold 44px "Georgia", serif';
        ctx.fillStyle = '#F8FAFC';
        ctx.fillText('CERTIFICATE OF RECOGNITION', 960, 230);

        ctx.font = '22px "Arial", sans-serif';
        ctx.fillStyle = '#94A3B8';
        ctx.fillText('PROUDLY PRESENTED TO', 960, 290);

        // 5. Candidate Name
        ctx.font = 'bold 64px "Georgia", serif';
        const nameGrad = ctx.createLinearGradient(600, 360, 1320, 360);
        nameGrad.addColorStop(0, '#38BDF8');
        nameGrad.addColorStop(0.5, '#67E8F9');
        nameGrad.addColorStop(1, '#818CF8');
        ctx.fillStyle = nameGrad;
        ctx.fillText(personalDetails.name, 960, 380);

        // Subtext
        ctx.font = '20px "Arial", sans-serif';
        ctx.fillStyle = '#CBD5E1';
        ctx.fillText(
          `In recognition of exceptional dedication, professional mastery, and successful completion of:`,
          960,
          450
        );

        // 6. Course Title
        ctx.font = 'bold 46px "Arial", sans-serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(certificate.title, 960, 530);

        // Description
        ctx.font = '24px "Arial", sans-serif';
        ctx.fillStyle = '#94A3B8';
        if (certificate.description) {
          ctx.fillText(certificate.description, 960, 610);
        }

        // 7. Verified Skills
        if (certificate.skills && certificate.skills.length > 0) {
          ctx.font = 'bold 20px "Courier New", monospace';
          ctx.fillStyle = '#38BDF8';
          ctx.fillText(
            `VERIFIED SKILLS: ${certificate.skills.join('  •  ')}`,
            960,
            690
          );
        }

        // 8. Footer Info
        ctx.textAlign = 'left';
        ctx.font = '18px "Arial", sans-serif';
        ctx.fillStyle = '#64748B';
        ctx.fillText('ISSUED BY', 240, 880);
        ctx.font = 'bold 24px "Arial", sans-serif';
        ctx.fillStyle = '#F1F5F9';
        ctx.fillText(certificate.issuer, 240, 920);

        ctx.font = '18px "Arial", sans-serif';
        ctx.fillStyle = '#64748B';
        ctx.fillText('DATE OF ISSUANCE', 240, 990);
        ctx.font = 'bold 22px "Courier New", monospace';
        ctx.fillStyle = '#38BDF8';
        ctx.fillText(certificate.issueDate || '2024', 240, 1025);

        // Center Seal
        ctx.save();
        ctx.translate(960, 920);
        ctx.strokeStyle = '#38BDF8';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, 75, 0, Math.PI * 2);
        ctx.stroke();

        ctx.font = 'bold 14px "Courier New", monospace';
        ctx.fillStyle = '#38BDF8';
        ctx.textAlign = 'center';
        ctx.fillText('OFFICIAL SEAL', 0, -10);
        ctx.fillText('VERIFIED', 0, 15);
        ctx.fillText('★ 2024–2026 ★', 0, 35);
        ctx.restore();

        // Right Box
        ctx.textAlign = 'right';
        ctx.font = '18px "Arial", sans-serif';
        ctx.fillStyle = '#64748B';
        ctx.fillText('CREDENTIAL ID', 1680, 880);
        ctx.font = 'bold 22px "Courier New", monospace';
        ctx.fillStyle = '#38BDF8';
        ctx.fillText(certificate.credentialId || 'GP-VERIFIED-CERT', 1680, 920);

        ctx.font = '18px "Arial", sans-serif';
        ctx.fillStyle = '#64748B';
        ctx.fillText('STATUS', 1680, 990);
        ctx.font = 'bold 22px "Arial", sans-serif';
        ctx.fillStyle = '#10B981';
        ctx.fillText('AUTHENTICATED & ACTIVE', 1680, 1025);

        // Trigger Download
        const link = document.createElement('a');
        link.download = `Guru_Prasath_GD_${certificate.id}_Certificate.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();

        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 3000);
      }
    } catch (err) {
      console.error('Error generating certificate download:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePrint = () => {
    playClickSound();
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-5xl bg-slate-950 border border-cyan-500/30 rounded-3xl p-5 sm:p-7 shadow-2xl shadow-cyan-950/60 overflow-hidden max-h-[94vh] flex flex-col space-y-4"
          >
            {/* Modal Top Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                  <FileBadge className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-white leading-tight">
                    {certificate.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mt-0.5">
                    <span>{certificate.issuer}</span>
                    <span>•</span>
                    <span className="text-slate-400">{certificate.issueDate}</span>
                  </div>
                </div>
              </div>

              {/* Top View Toggle Tabs */}
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-slate-900 border border-white/10 p-1 rounded-2xl">
                  <button
                    onClick={() => {
                      playClickSound();
                      setActiveTab('drive');
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                      activeTab === 'drive'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Drive Document</span>
                  </button>
                  <button
                    onClick={() => {
                      playClickSound();
                      setActiveTab('credential');
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                      activeTab === 'credential'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Digital Card</span>
                  </button>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto min-h-[420px] max-h-[68vh] pr-1">
              {activeTab === 'drive' ? (
                /* Google Drive Live Document Embed */
                <div className="relative w-full h-[62vh] min-h-[400px] rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-900 flex flex-col justify-center items-center shadow-inner">
                  {driveEmbedUrl ? (
                    <>
                      {iframeLoading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/80 z-10 space-y-3">
                          <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
                          <p className="text-xs font-mono text-cyan-300">Loading Certificate from Google Drive...</p>
                        </div>
                      )}
                      <iframe
                        src={driveEmbedUrl}
                        title={`Certificate: ${certificate.title}`}
                        className="w-full h-full border-0 rounded-2xl bg-white"
                        onLoad={() => setIframeLoading(false)}
                        allow="autoplay"
                      />
                    </>
                  ) : (
                    <div className="text-center p-8 space-y-4">
                      <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
                        <FileBadge className="w-8 h-8" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-heading text-lg font-bold text-white">Google Drive Document Link</h4>
                        <p className="text-xs text-slate-400 max-w-sm mx-auto">
                          Click below to open the official verified certificate directly from Google Drive.
                        </p>
                      </div>
                      {certificate.driveUrl && (
                        <a
                          href={certificate.driveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/30"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Open Google Drive File</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                /* Digital Card View */
                <div className="relative rounded-2xl border-2 border-cyan-500/40 bg-gradient-to-b from-[#0A101D] via-[#0B132B] to-[#070A12] p-6 sm:p-10 shadow-2xl text-center space-y-6 overflow-hidden">
                  <div className="absolute inset-2 border border-cyan-500/20 rounded-xl pointer-events-none" />
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-400" />
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan-400" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cyan-400" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-400" />

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{certificate.certificateType || 'Professional Certificate'}</span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-wide">
                      CERTIFICATE OF RECOGNITION
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 tracking-wider uppercase font-mono">
                      Presented to
                    </p>
                  </div>

                  <div className="py-1">
                    <span className="font-heading text-3xl sm:text-5xl font-black bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent drop-shadow-lg">
                      {personalDetails.name}
                    </span>
                    <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-2" />
                  </div>

                  <div className="max-w-2xl mx-auto space-y-2">
                    <h5 className="font-heading font-extrabold text-lg sm:text-2xl text-cyan-300 leading-snug">
                      {certificate.title}
                    </h5>
                    {certificate.description && (
                      <p className="text-xs text-slate-300/90 leading-relaxed max-w-xl mx-auto">
                        {certificate.description}
                      </p>
                    )}
                  </div>

                  {certificate.skills && certificate.skills.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                      {certificate.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/30"
                        >
                          ✦ {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 items-center text-left sm:text-center">
                    <div className="space-y-0.5">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Issuing Body</div>
                      <div className="text-xs font-semibold text-slate-200">{certificate.issuer}</div>
                      <div className="text-[10px] font-mono text-cyan-400 flex items-center gap-1 justify-start sm:justify-center">
                        <Calendar className="w-3 h-3" /> Year {certificate.issueDate}
                      </div>
                    </div>

                    <div className="flex justify-center my-2 sm:my-0">
                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-cyan-400/60 bg-cyan-950/40 p-1 flex flex-col items-center justify-center text-cyan-300 shadow-lg shadow-cyan-500/20">
                        <ShieldCheck className="w-5 h-5 text-cyan-400" />
                        <span className="text-[8px] font-mono font-bold tracking-tighter">AUTHENTIC</span>
                      </div>
                    </div>

                    <div className="space-y-0.5 text-left sm:text-right">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Credential ID</div>
                      <div className="text-xs font-mono font-bold text-cyan-300 break-all">
                        {certificate.credentialId || 'GP-VERIFIED-CERT'}
                      </div>
                      <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 justify-start sm:justify-end">
                        <CheckCircle2 className="w-3 h-3" /> Active & Verified
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10">
              <div className="flex items-center gap-2">
                {certificate.credentialId && (
                  <button
                    onClick={handleCopyCredential}
                    onMouseEnter={playHoverSound}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 text-xs font-mono transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'ID Copied!' : 'Copy Credential ID'}</span>
                  </button>
                )}

                <button
                  onClick={handlePrint}
                  onMouseEnter={playHoverSound}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white text-xs font-mono transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                {certificate.driveUrl && (
                  <a
                    href={certificate.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playClickSound()}
                    onMouseEnter={playHoverSound}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 transition-all"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                    <span>Open in Google Drive</span>
                  </a>
                )}

                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  onMouseEnter={playHoverSound}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-950/60 font-bold text-xs sm:text-sm transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>{downloadSuccess ? 'Downloaded!' : isDownloading ? 'Exporting...' : 'Export PNG'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

