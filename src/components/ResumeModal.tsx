import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Download,
  Copy,
  Check,
  Printer,
  FileText,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Youtube,
  Instagram,
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  BookOpen,
  Globe,
  Sparkles,
  ExternalLink,
  Clapperboard
} from 'lucide-react';
import {
  personalDetails,
  educationList,
  experienceList,
  projectData,
  shortFilmsList,
  achievementsList,
  certificatesList,
  languagesList,
  resumeSkillGroups
} from '../data/portfolioData';
import { playClickSound } from '../utils/audioSynth';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'document' | 'interactive'>('document');

  if (!isOpen) return null;

  const handleCopy = () => {
    playClickSound();
    const resumeText = `
GURU PRASATH G D
DEVELOPER • CREATIVE TECHNOLOGIST • CINEMATOGRAPHER

Phone: ${personalDetails.phone}
Email: ${personalDetails.email}
Website: ${personalDetails.portfolioWeb}
Location: ${personalDetails.location}
LinkedIn: ${personalDetails.linkedIn}
YouTube: ${personalDetails.youTube}

--------------------------------------------------
PROFILE
--------------------------------------------------
${personalDetails.summary}

--------------------------------------------------
EDUCATION
--------------------------------------------------
- RATHINAM TECHNICAL CAMPUS (2025 - Present)
  Master of Computer Applications
  CGPA: 8.02 / 10.00

- THE GANDHIGRAM RURAL INSTITUTE (2022 - 2025)
  Bachelor of Computer Science
  CGPA: 7.90 / 10.00

--------------------------------------------------
EXPERIENCE
--------------------------------------------------
1. Media Team Member - (Rticans) [2025 - PRESENT]
   Promotion & Content Creation Specialist
   - Produced promotional and academic video content for the college.
   - Handled DSLR and gimbal videography for events and campaigns.
   - Edited videos and designed posters for official digital platforms.
   - Collaborated with faculty and student teams for media production.

2. Media Corrdinate - (Dept Association) [2026 - PRESENT]
   Photography & Videography with Editing
   - Produced photo and video content for department events.
   - Handled DSLR and gimbal videography.
   - Edited videos and designed promotional posters.
   - Managed media coverage for workshops and seminars.
   - Collaborated with faculty and student teams.

3. Cinematographer [2023 - PRESENT]
   - Directed and edited short films.
   - Worked as Director of Photography (DOP).
   - Produced digital content and promotional videos.
   - Managed complete production workflow.

--------------------------------------------------
TECHNICAL PROJECT
--------------------------------------------------
BOLD BRO CARSWASH (2024)
Developed a web-based car wash management application for online booking and service management. Built with PHP and MySQL (PDO) for secure backend operations, and HTML, CSS, Bootstrap, and jQuery for a responsive user interface.
Technologies: PHP, MySQL (PDO), HTML, CSS, Bootstrap, jQuery
Key Features: Online booking, admin dashboard, payment management, SMS notifications, and service management.

--------------------------------------------------
SKILLS
--------------------------------------------------
Hard Skills: ${resumeSkillGroups.hardSkills.join(', ')}
Soft Skills: ${resumeSkillGroups.softSkills.join(', ')}
Creative Skills: ${resumeSkillGroups.creativeSkills.join(', ')}

--------------------------------------------------
ACHIEVEMENTS
--------------------------------------------------
- Second Prize – Eye Vision Science Idea Competition (2025)
- Second Prize – Inter-Face “As You Like It” Stage Performance (2025)
- Third Prize – Idea Innovation NSDC (2025)
- Third Prize – Tecnext - Treasure Hunt (2022)

--------------------------------------------------
CERTIFICATES
--------------------------------------------------
${certificatesList.map((c) => `- ${c.title}`).join('\n')}

--------------------------------------------------
LANGUAGES
--------------------------------------------------
${languagesList.map((l) => `- ${l.name} (${l.proficiency})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadText = () => {
    playClickSound();
    const resumeText = `
GURU PRASATH G D
DEVELOPER • CREATIVE TECHNOLOGIST • CINEMATOGRAPHER

Phone: ${personalDetails.phone}
Email: ${personalDetails.email}
Website: ${personalDetails.portfolioWeb}
Location: ${personalDetails.location}
LinkedIn: ${personalDetails.linkedIn}
YouTube: ${personalDetails.youTube}

==================================================
PROFILE
==================================================
${personalDetails.summary}

==================================================
EDUCATION
==================================================
* RATHINAM TECHNICAL CAMPUS (2025 - Present)
  Master of Computer Applications
  CGPA: 8.02 / 10.00

* THE GANDHIGRAM RURAL INSTITUTE (2022 - 2025)
  Bachelor of Computer Science
  CGPA: 7.90 / 10.00

==================================================
EXPERIENCE
==================================================
1. Media Team Member - (Rticans) | 2025 - PRESENT
   Promotion & Content Creation Specialist
   - Produced promotional and academic video content for the college.
   - Handled DSLR and gimbal videography for events and campaigns.
   - Edited videos and designed posters for official digital platforms.
   - Collaborated with faculty and student teams for media production.

2. Media Corrdinate - (Dept Association) | 2026 - PRESENT
   Photography & Videography with Editing
   - Produced photo and video content for department events.
   - Handled DSLR and gimbal videography.
   - Edited videos and designed promotional posters.
   - Managed media coverage for workshops and seminars.
   - Collaborated with faculty and student teams.

3. Cinematographer | 2023 - PRESENT
   - Directed and edited short films.
   - Worked as Director of Photography (DOP).
   - Produced digital content and promotional videos.
   - Managed complete production workflow.

==================================================
TECHNICAL PROJECT
==================================================
BOLD BRO CARSWASH (2024)
Developed a web-based car wash management application for online booking and service management. Built with PHP and MySQL (PDO) for secure backend operations, and HTML, CSS, Bootstrap, and jQuery for a responsive user interface.
Technologies: PHP, MySQL (PDO), HTML, CSS, Bootstrap, jQuery
Key Features: Online booking, admin dashboard, payment management, SMS notifications, and service management.

==================================================
SKILLS
==================================================
Hard Skills: ${resumeSkillGroups.hardSkills.join(', ')}
Soft Skills: ${resumeSkillGroups.softSkills.join(', ')}
Creative Skills: ${resumeSkillGroups.creativeSkills.join(', ')}

==================================================
ACHIEVEMENTS
==================================================
- Second Prize – Eye Vision Science Idea Competition (2025)
- Second Prize – Inter-Face “As You Like It” Stage Performance (2025)
- Third Prize – Idea Innovation NSDC (2025)
- Third Prize – Tecnext - Treasure Hunt (2022)

==================================================
CERTIFICATES
==================================================
${certificatesList.map((c) => `• ${c.title}`).join('\n')}

==================================================
LANGUAGES
==================================================
${languagesList.map((l) => `• ${l.name} (${l.proficiency})`).join('\n')}
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Guru_Prasath_GD_Official_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    playClickSound();
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-5xl glass-card rounded-3xl border border-white/20 shadow-2xl overflow-hidden max-h-[94vh] flex flex-col bg-[#0B0B0B]"
        >
          {/* Top Sticky Header */}
          <div className="flex items-center justify-between border-b border-white/10 p-4 sm:px-6 bg-slate-950/95 backdrop-blur-md z-20 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 p-[1.5px] shrink-0">
                <img
                  src={personalDetails.profileImage}
                  alt={personalDetails.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                    Guru Prasath G D — Official Resume
                  </h3>
                  <span className="hidden sm:inline px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-mono border border-cyan-500/30">
                    MCA Scholar
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Developer • Creative Technologist • Cinematographer
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Tab Selector */}
              <div className="hidden md:flex items-center p-1 rounded-xl bg-slate-900 border border-white/10 text-xs mr-2">
                <button
                  onClick={() => {
                    playClickSound();
                    setActiveTab('document');
                  }}
                  className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
                    activeTab === 'document'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Official Resume PDF Layout
                </button>
                <button
                  onClick={() => {
                    playClickSound();
                    setActiveTab('interactive');
                  }}
                  className={`px-3 py-1.5 rounded-lg transition-all font-medium ${
                    activeTab === 'interactive'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Interactive View
                </button>
              </div>

              {/* Google Drive Official PDF Download */}
              <a
                href={personalDetails.resumeDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClickSound()}
                title="Download Official Resume PDF from Google Drive"
                className="px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Download className="w-4 h-4 text-slate-950" />
                <span>Download Resume (PDF)</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
              </a>

              {/* Print / Save PDF */}
              <button
                onClick={handlePrint}
                title="Print or Save as PDF"
                className="hidden sm:flex px-3 sm:px-4 py-2 rounded-xl glass-card text-slate-200 hover:text-white font-medium text-xs items-center gap-1.5 transition-all"
              >
                <Printer className="w-4 h-4 text-cyan-400" />
                <span>Print</span>
              </button>

              {/* Download Text */}
              <button
                onClick={handleDownloadText}
                title="Download Plain Text"
                className="p-2 sm:px-3 sm:py-2 rounded-xl glass-card text-slate-300 hover:text-white hover:border-cyan-500/40 text-xs flex items-center gap-1.5 transition-all"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span className="hidden sm:inline">TXT</span>
              </button>

              {/* Copy */}
              <button
                onClick={handleCopy}
                title="Copy Resume to Clipboard"
                className="p-2 sm:px-3 sm:py-2 rounded-xl glass-card text-slate-300 hover:text-white hover:border-cyan-500/40 text-xs flex items-center gap-1.5 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="hidden sm:inline text-emerald-400 font-mono text-[11px]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-cyan-400" />
                    <span className="hidden sm:inline">Copy</span>
                  </>
                )}
              </button>

              {/* Close */}
              <button
                onClick={onClose}
                className="p-2 rounded-xl glass-card text-slate-400 hover:text-white hover:border-red-500/40 transition-all ml-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Document Area */}
          <div className="overflow-y-auto p-4 sm:p-8 flex-1 bg-slate-950/60">
            {activeTab === 'document' ? (
              /* EXACT 2-COLUMN OFFICIAL RESUME VIEW MATCHING USER'S PDF */
              <div
                id="official-resume-document"
                className="max-w-[850px] mx-auto bg-white text-slate-900 shadow-2xl rounded-2xl overflow-hidden font-sans border border-slate-300"
              >
                {/* 1. Header Banner */}
                <div className="bg-[#E9EDF5] text-slate-900 pt-8 pb-5 px-8 text-center border-b border-slate-300">
                  <h1 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-wide text-slate-900">
                    GURU PRASATH G D
                  </h1>
                  <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-slate-700 mt-2 uppercase font-mono">
                    DEVELOPER • CREATIVE TECHNOLOGIST • CINEMATOGRAPHER
                  </div>
                </div>

                {/* 2. Top Dark Slate Bar: Contact (Left) + Profile (Right) */}
                <div className="grid grid-cols-1 md:grid-cols-12 bg-[#2D3748] text-white">
                  {/* Left Contact Details */}
                  <div className="md:col-span-4 p-6 border-b md:border-b-0 md:border-r border-slate-600/60 text-xs space-y-2.5 font-sans">
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{personalDetails.phone}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{personalDetails.email}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{personalDetails.location}</span>
                    </div>
                    <div className="flex items-center gap-2.5 pt-1">
                      <Linkedin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <a
                        href={personalDetails.linkedIn}
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-300 hover:underline"
                      >
                        LinkedIn
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Youtube className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <a
                        href={personalDetails.youTube}
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-300 hover:underline"
                      >
                        Youtube
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Instagram className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <a
                        href={personalDetails.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-300 hover:underline"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>

                  {/* Right Profile Statement */}
                  <div className="md:col-span-8 p-6 space-y-2">
                    <h2 className="text-sm font-heading font-extrabold tracking-widest text-cyan-300 uppercase">
                      PROFILE
                    </h2>
                    <p className="text-xs text-slate-200 leading-relaxed font-sans text-justify">
                      {personalDetails.summary}
                    </p>
                  </div>
                </div>

                {/* 3. Main Two-Column Body Content */}
                <div className="grid grid-cols-1 md:grid-cols-12">
                  {/* LEFT SIDEBAR: Education, Achievements, Certificates, Languages */}
                  <div className="md:col-span-4 bg-[#F1F5F9] p-6 space-y-6 border-r border-slate-300 text-xs">
                    {/* Education */}
                    <div className="space-y-3">
                      <h3 className="font-heading font-extrabold text-sm text-slate-900 tracking-wider uppercase border-b-2 border-slate-400 pb-1">
                        EDUCATION
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <div className="font-bold text-slate-900 font-mono text-[11px]">
                            2025 – Present
                          </div>
                          <div className="font-bold text-slate-900 text-xs mt-0.5 uppercase">
                            RATHINAM TECHNICAL CAMPUS
                          </div>
                          <div className="text-slate-700 text-[11px] mt-0.5">
                            • Master of Computer Applications
                          </div>
                          <div className="text-slate-800 text-[11px] font-semibold">
                            • CGPA: 8.02 / 10.00
                          </div>
                        </div>

                        <div>
                          <div className="font-bold text-slate-900 font-mono text-[11px]">
                            2022 – 2025
                          </div>
                          <div className="font-bold text-slate-900 text-xs mt-0.5 uppercase">
                            THE GANDHIGRAM RURAL INSTITUTE
                          </div>
                          <div className="text-slate-700 text-[11px] mt-0.5">
                            • Bachelor of Computer Science
                          </div>
                          <div className="text-slate-800 text-[11px] font-semibold">
                            • CGPA: 7.90 / 10.00
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h3 className="font-heading font-extrabold text-sm text-slate-900 tracking-wider uppercase border-b-2 border-slate-400 pb-1">
                        ACHIEVEMENT
                      </h3>
                      <div className="space-y-2.5 text-[11px] text-slate-800">
                        {achievementsList.map((ach) => (
                          <div key={ach.id} className="leading-snug">
                            • <strong className="text-slate-900">{ach.prize}</strong> –{' '}
                            {ach.driveUrl ? (
                              <a
                                href={ach.driveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline decoration-slate-400 hover:text-cyan-600 transition-colors"
                              >
                                {ach.title.replace(`${ach.prize} – `, '')} ({ach.year})
                              </a>
                            ) : (
                              <span>{ach.title} ({ach.year})</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Certificates */}
                    <div className="space-y-3">
                      <h3 className="font-heading font-extrabold text-sm text-slate-900 tracking-wider uppercase border-b-2 border-slate-400 pb-1">
                        CERTIFICATES
                      </h3>
                      <div className="space-y-1.5 text-[11px] text-slate-800">
                        {certificatesList.map((cert) => (
                          <div key={cert.id} className="leading-snug">
                            •{' '}
                            {cert.driveUrl ? (
                              <a
                                href={cert.driveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline decoration-slate-400 hover:text-cyan-600 transition-colors"
                              >
                                {cert.title}
                              </a>
                            ) : (
                              <span className="underline decoration-slate-400">{cert.title}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="space-y-3">
                      <h3 className="font-heading font-extrabold text-sm text-slate-900 tracking-wider uppercase border-b-2 border-slate-400 pb-1">
                        LANGUAGES
                      </h3>
                      <div className="space-y-1 text-[11px] text-slate-800">
                        {languagesList.map((lang, idx) => (
                          <div key={idx}>• {lang.name}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT MAIN BODY: Experience, Technical Project, Skills */}
                  <div className="md:col-span-8 p-6 space-y-6 text-xs bg-white">
                    {/* Experience */}
                    <div className="space-y-4">
                      <h3 className="font-heading font-extrabold text-sm text-slate-900 tracking-wider uppercase border-b-2 border-slate-400 pb-1">
                        EXPERIENCE
                      </h3>

                      {/* 1. Rticans */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 bg-slate-800 inline-block" />
                              Media Team Member - (Rticans)
                            </div>
                            <div className="text-slate-700 italic text-[11px] ml-3">
                              Promotion & Content Creation Specialist
                            </div>
                          </div>
                          <span className="font-mono text-[11px] text-slate-600 font-semibold">
                            2025 - PRESENT
                          </span>
                        </div>
                        <ul className="ml-5 list-disc text-slate-700 text-[11px] space-y-1">
                          <li>Produced promotional and academic video content for the college.</li>
                          <li>Handled DSLR and gimbal videography for events and campaigns.</li>
                          <li>Edited videos and designed posters for official digital platforms.</li>
                          <li>Collaborated with faculty and student teams for media production.</li>
                        </ul>
                      </div>

                      {/* 2. Media Coordinate */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 bg-slate-800 inline-block" />
                              Media Corrdinate - (Dept Association)
                            </div>
                            <div className="text-slate-700 italic text-[11px] ml-3">
                              Photography & Videography with Editing
                            </div>
                          </div>
                          <span className="font-mono text-[11px] text-slate-600 font-semibold">
                            2026 - PRESENT
                          </span>
                        </div>
                        <ul className="ml-5 list-disc text-slate-700 text-[11px] space-y-1">
                          <li>Produced photo and video content for department events.</li>
                          <li>Handled DSLR and gimbal videography.</li>
                          <li>Edited videos and designed promotional posters.</li>
                          <li>Managed media coverage for workshops and seminars.</li>
                          <li>Collaborated with faculty and student teams.</li>
                        </ul>
                      </div>

                      {/* 3. Cinematographer */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 bg-slate-800 inline-block" />
                              Cinematographer
                            </div>
                          </div>
                          <span className="font-mono text-[11px] text-slate-600 font-semibold">
                            2023 - PRESENT
                          </span>
                        </div>
                        <ul className="ml-5 list-disc text-slate-700 text-[11px] space-y-1">
                          <li>Directed and edited short films.</li>
                          <li>Worked as Director of Photography (DOP).</li>
                          <li>Produced digital content and promotional videos.</li>
                          <li>Managed complete production workflow.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Technical Project */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-baseline border-b-2 border-slate-400 pb-1">
                        <h3 className="font-heading font-extrabold text-sm text-slate-900 tracking-wider uppercase">
                          TECHNICAL PROJECT
                        </h3>
                        <span className="font-mono text-[11px] font-bold text-slate-600">2024</span>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-bold text-slate-900 text-xs tracking-wide">
                          BOLD BRO CARSWASH
                        </h4>
                        <p className="text-slate-700 text-[11px] leading-relaxed">
                          Developed a web-based car wash management application for online booking and service management. Built with PHP and MySQL (PDO) for secure backend operations, and HTML, CSS, Bootstrap, and jQuery for a responsive user interface.
                        </p>
                        <div className="text-[11px] text-slate-800">
                          <strong className="text-slate-900">Technologies:</strong> PHP, MySQL (PDO), HTML, CSS, Bootstrap, jQuery
                        </div>
                        <div className="text-[11px] text-slate-800">
                          <strong className="text-slate-900">Key Features:</strong> Online booking, admin dashboard, payment management, SMS notifications, and service management.
                        </div>
                      </div>
                    </div>

                    {/* Skills 3-Column Table */}
                    <div className="space-y-3 pt-2">
                      <h3 className="font-heading font-extrabold text-sm text-slate-900 tracking-wider uppercase border-b-2 border-slate-400 pb-1">
                        SKILLS
                      </h3>

                      <div className="grid grid-cols-3 gap-4 text-[11px]">
                        {/* Hard Skills */}
                        <div className="space-y-1.5">
                          <div className="font-bold text-slate-900 border-b border-slate-300 pb-1">
                            Hard Skill
                          </div>
                          <div className="space-y-1 text-slate-700">
                            <div>• Java</div>
                            <div>• Python</div>
                            <div>• Html</div>
                            <div>• Cloud</div>
                            <div>• Networking</div>
                            <div>• PHP & MySQL</div>
                          </div>
                        </div>

                        {/* Soft Skills */}
                        <div className="space-y-1.5">
                          <div className="font-bold text-slate-900 border-b border-slate-300 pb-1">
                            Soft Skill
                          </div>
                          <div className="space-y-1 text-slate-700">
                            <div>• Creative Thinking</div>
                            <div>• Leadership</div>
                            <div>• Team Collabration</div>
                            <div>• Event Management</div>
                            <div>• Adaptability</div>
                          </div>
                        </div>

                        {/* Creative Skills */}
                        <div className="space-y-1.5">
                          <div className="font-bold text-slate-900 border-b border-slate-300 pb-1">
                            Creative Skill
                          </div>
                          <div className="space-y-1 text-slate-700">
                            <div>• Canva</div>
                            <div>• Adobe Express</div>
                            <div>• Capcut</div>
                            <div>• Photoshop</div>
                            <div>• DaVinci Resolve</div>
                            <div>• MS Office</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* INTERACTIVE PORTFOLIO RESUME VIEW */
              <div className="max-w-4xl mx-auto space-y-6">
                {/* Overview Card */}
                <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 border-b border-white/10 pb-6">
                    <div className="space-y-2 text-center sm:text-left flex-1">
                      <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                        GURU PRASATH G D
                      </h2>
                      <div className="text-cyan-400 font-mono text-sm font-semibold">
                        {personalDetails.roleSubtitle}
                      </div>
                      <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-xs font-mono text-slate-400 pt-2">
                        <span className="flex items-center gap-1.5 text-slate-300">
                          <Phone className="w-3.5 h-3.5 text-cyan-400" /> {personalDetails.phone}
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-300">
                          <Mail className="w-3.5 h-3.5 text-cyan-400" /> {personalDetails.email}
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-300">
                          <MapPin className="w-3.5 h-3.5 text-cyan-400" /> {personalDetails.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                      <a
                        href={personalDetails.resumeDriveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => playClickSound()}
                        className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-1.5 hover:scale-[1.02] active:scale-[0.98] transition-all"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download PDF</span>
                        <ExternalLink className="w-3 h-3 opacity-80" />
                      </a>

                      <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-xl shrink-0">
                        <img
                          src={personalDetails.profileImage}
                          alt={personalDetails.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 font-semibold">
                      Profile Statement
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {personalDetails.summary}
                    </p>
                  </div>
                </div>

                {/* Two Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Education & Achievements */}
                  <div className="space-y-6">
                    <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
                      <h3 className="font-heading font-bold text-base text-white flex items-center gap-2 text-cyan-400">
                        <GraduationCap className="w-4 h-4" /> Education
                      </h3>
                      <div className="space-y-4">
                        {educationList.map((edu) => (
                          <div key={edu.id} className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/5 space-y-1.5">
                            <div className="flex justify-between text-xs font-bold text-white">
                              <span>{edu.degree}</span>
                              <span className="text-cyan-400 font-mono">{edu.period}</span>
                            </div>
                            <div className="text-xs text-slate-300 font-medium">{edu.institution}</div>
                            {edu.cgpa && (
                              <div className="text-[11px] font-mono text-cyan-300">CGPA: {edu.cgpa}</div>
                            )}
                            {edu.documentUrl && (
                              <div className="pt-1">
                                <a
                                  href={edu.documentUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => playClickSound()}
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-cyan-300 border border-blue-500/30 text-[10px] font-mono transition-colors"
                                >
                                  <FileText className="w-3 h-3 text-cyan-400" />
                                  <span>{edu.documentLabel || 'View Marksheet'}</span>
                                  <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                                </a>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
                      <h3 className="font-heading font-bold text-base text-white flex items-center gap-2 text-cyan-400">
                        <Award className="w-4 h-4" /> Achievements & Honors
                      </h3>
                      <div className="space-y-3">
                        {achievementsList.map((ach) => (
                          <div key={ach.id} className="p-3 rounded-2xl bg-slate-900/60 border border-white/5 text-xs flex items-center justify-between gap-3">
                            <div className="space-y-0.5">
                              <div className="font-bold text-white">{ach.title}</div>
                              <div className="text-slate-400 text-[11px]">{ach.event} ({ach.year})</div>
                            </div>
                            {ach.driveUrl && (
                              <a
                                href={ach.driveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => playClickSound()}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 text-[10px] font-mono shrink-0 transition-colors"
                              >
                                <span>Certificate</span>
                                <ExternalLink className="w-2.5 h-2.5 opacity-80" />
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Experience & Skills */}
                  <div className="space-y-6">
                    <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
                      <h3 className="font-heading font-bold text-base text-white flex items-center gap-2 text-blue-400">
                        <Briefcase className="w-4 h-4" /> Experience & Roles
                      </h3>
                      <div className="space-y-4">
                        {experienceList.map((exp) => (
                          <div key={exp.id} className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/5 space-y-2">
                            <div className="flex justify-between text-xs font-bold text-white">
                              <span className="truncate">{exp.role}</span>
                              <span className="text-cyan-400 font-mono text-[10px] shrink-0 ml-2">{exp.duration}</span>
                            </div>
                            <ul className="text-[11px] text-slate-300 space-y-1 list-disc list-inside">
                              {exp.responsibilities.slice(0, 2).map((r, i) => (
                                <li key={i}>{r}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
                      <h3 className="font-heading font-bold text-base text-white flex items-center gap-2 text-cyan-400">
                        <Code2 className="w-4 h-4" /> Technical & Creative Skills
                      </h3>
                      <div className="space-y-3 text-xs">
                        <div>
                          <div className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">Hard Skills</div>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {resumeSkillGroups.hardSkills.map((s, i) => (
                              <span key={i} className="px-2 py-0.5 rounded-lg bg-blue-500/10 text-cyan-300 text-[11px] border border-blue-500/20">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">Creative Skills</div>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {resumeSkillGroups.creativeSkills.map((s, i) => (
                              <span key={i} className="px-2 py-0.5 rounded-lg bg-cyan-500/10 text-cyan-300 text-[11px] border border-cyan-500/20">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">Soft Skills</div>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {resumeSkillGroups.softSkills.map((s, i) => (
                              <span key={i} className="px-2 py-0.5 rounded-lg bg-slate-800 text-slate-300 text-[11px] border border-white/10">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Creative Works & Films Card */}
                <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <h3 className="font-heading font-bold text-base text-white flex items-center gap-2 text-cyan-400">
                      <Clapperboard className="w-4 h-4" /> Cinematic Works & Tech Troll Series
                    </h3>
                    <a
                      href={personalDetails.youTube}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                    >
                      <Youtube className="w-3.5 h-3.5 text-rose-500" />
                      <span>YouTube Channel</span>
                    </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {shortFilmsList.map((film) => (
                      <div
                        key={film.id}
                        className="p-3 rounded-2xl bg-slate-900/60 border border-white/5 space-y-2 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs text-white">{film.title}</span>
                            <span className="text-[10px] font-mono text-cyan-400">{film.releaseYear}</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-1.5">
                            {film.roles.map((r, i) => (
                              <span
                                key={i}
                                className={`px-1.5 py-0.5 rounded text-[9px] font-mono ${
                                  film.id.includes('tech-troll')
                                    ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                                    : 'bg-blue-500/10 text-cyan-300 border border-blue-500/20'
                                }`}
                              >
                                {r}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-2 leading-tight">
                          {film.synopsis}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
