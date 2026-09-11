import {
  Education,
  SkillCategory,
  Experience,
  Project,
  ShortFilm,
  Achievement,
  LeadershipRole,
  ServiceItem,
  StrengthItem,
  FutureGoal,
  CertificateItem,
  LanguageItem,
  TestimonialItem,
  FaqItem
} from '../types';

// Asset Imports
import avatarImg from '../assets/images/guru_official_suit_portrait_1787807292234.png';
import avatarSquareImg from '../assets/images/guru_formal_headshot_square_1787807311239.jpg';
import guruBlazerOfficial from '../assets/images/guru_blazer_official_1787464987931.jpg';
import guruBlazerPortrait from '../assets/images/guru_blazer_portrait_1787463167573.jpg';
import guruOfficialPortrait from '../assets/images/guru_official_portrait_1787036137961.jpg';
import guruProfileAvatar from '../assets/images/guru_profile_avatar_1786007794185.jpg';
import guruProfilePhoto from '../assets/images/guru_profile_photo_1787035704346.jpg';
import guruDeskPhoto from '../assets/images/guru_blazer_desk_photo_1787807145900.jpg';
import guruSittingPhoto from '../assets/images/guru_siting_portrait_1787807131217.jpg';
import boldBroImg from '../assets/images/bold_bro_app_1787462154980.png';
import boldBroMockupImg from '../assets/images/bold_bro_mockup_1786007807073.png';
import posterBommaImg from '../assets/images/bhomma_thuppakki_official_thumb_1787459600538.jpg';
import posterBommaFull from '../assets/images/bhomma_thuppakki_poster_1787458512442.jpg';
import posterBommaLegacy from '../assets/images/poster_bomma_thuppaki_1786007820291.jpg';
import posterOruSabikkaImg from '../assets/images/oar_sabikapatta_uyir_thumb_1787459712045.jpg';
import posterOruSabikkaFull from '../assets/images/poster_oru_sabikka_patta_uyir_1787459226137.jpg';
import posterOruSabikkaLegacy from '../assets/images/poster_oru_sabikka_1786007833025.jpg';
import posterRuvaicImg from '../assets/images/the_ruvaaiz_official_thumb_1787460029782.jpg';
import posterRuvaicLandscape from '../assets/images/poster_ruvaic_landscape_1787459430681.jpg';
import posterRuvaicLegacy from '../assets/images/poster_ruvaic_1786007847704.jpg';
import posterTechTroll1Img from '../assets/images/tech_troll_1_exact_1787459900999.jpg';
import posterTechTroll1Landscape from '../assets/images/poster_tech_troll_1_landscape_1787459447154.jpg';
import posterTechTroll1Raw from '../assets/images/poster_tech_troll_1_1787036322459.jpg';
import posterTechTroll2Img from '../assets/images/tech_troll_2_exact_1787459917200.jpg';
import posterTechTroll2Landscape from '../assets/images/poster_tech_troll_2_landscape_1787459462875.jpg';
import posterTechTroll2Raw from '../assets/images/poster_tech_troll_2_1787036344479.jpg';

export const personalDetails = {
  name: "Guru Prasath G D",
  nickname: "JD",
  callout: "Address me as JD",
  titles: [
    "Developer",
    "Creative Technologist",
    "Cinematographer",
    "Software Developer",
    "Content Creator"
  ],
  roleSubtitle: "DEVELOPER • CREATIVE TECHNOLOGIST • CINEMATOGRAPHER",
  tagline: "I build digital experiences where technology meets creativity.",
  phone: "+91 9384784902",
  email: "mrjd14.cinematographer@gmail.com",
  portfolioWeb: "mrjd14.cinematographer.com",
  location: "Dindigul, Tamilnadu",
  resumeDriveUrl: "https://drive.google.com/file/d/1Taz6WJod6ZESl4tcNopS0lkMA27_jnta/view?usp=sharing",
  linkedIn: "https://www.linkedin.com/in/guru-prasath-g-d-837a71356",
  linkedInHandle: "LinkedIn",
  youTube: "https://www.youtube.com/channel/UCHEO8wRYGzBljVnaeBoFthg",
  youTubeChannelId: "UCHEO8wRYGzBljVnaeBoFthg",
  instagram: "https://www.instagram.com/mr.single_jd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
  instagramHandle: "@mr.single_jd",
  profileImage: avatarImg,
  summary: "Passionate MCA student skilled in software development, web technologies, databases, UI/UX, AI, and digital media. Experienced in web application development, cinematography, photography, videography, and video editing with strong problem-solving, creativity, and teamwork skills. Eager to build innovative digital solutions and grow as a software professional.",
  vision: "My vision is to become a Creative Technologist who bridges software engineering with storytelling and innovation.",
  careerObjective: "To build innovative digital products by combining software engineering, artificial intelligence, creativity, media production, and design while continuously learning and contributing to impactful organizations."
};

export const educationList: Education[] = [
  {
    id: "mca",
    degree: "Master of Computer Applications",
    institution: "RATHINAM TECHNICAL CAMPUS",
    period: "2025 – Present",
    cgpa: "8.02 / 10.00",
    status: "2025 – Present",
    description: "Advanced study in computer applications, full-stack software development, software architecture, artificial intelligence, and media technology integration.",
    highlights: [
      "Department Media Coordinator leading creative media coverage",
      "Specializing in full-stack web architectures & AI integration",
      "Coordinating institutional tech & cultural symposiums"
    ]
  },
  {
    id: "bsc",
    degree: "Bachelor of Computer Science",
    institution: "THE GANDHIGRAM RURAL INSTITUTE",
    period: "2022 – 2025",
    cgpa: "7.90 / 10.00",
    description: "Comprehensive groundwork in core computer science, programming fundamentals, relational database management systems, and software engineering principles.",
    highlights: [
      "Graduated with CGPA 7.90 / 10.00",
      "Class Representative for 2nd and 3rd academic years",
      "Active Student In-Charge & Media Team Member"
    ],
    documentUrl: "https://drive.google.com/file/d/140OFyNr2UwrkZ54j_kvVhAQ9Y4VcQ3t0/view?usp=sharing",
    documentLabel: "Bachelor Consolidated Marksheet"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    name: "Programming",
    iconName: "Code2",
    skills: [
      { name: "C", level: 85, tagline: "System Logic & Algorithms" },
      { name: "C++", level: 82, tagline: "Object Oriented Design" },
      { name: "Java", level: 80, tagline: "Core OOP & Data Structures" },
      { name: "Python", level: 88, tagline: "Automation, AI Scripts & Backend" },
      { name: "SQL", level: 86, tagline: "Database Queries & Relations" }
    ]
  },
  {
    id: "web",
    name: "Web Technologies",
    iconName: "Globe",
    skills: [
      { name: "HTML", level: 95, tagline: "Semantic Markup & Accessibility" },
      { name: "CSS", level: 92, tagline: "Glassmorphism, Flexbox, Grid, FX" },
      { name: "JavaScript", level: 88, tagline: "DOM Manipulation & ES6+" },
      { name: "Bootstrap", level: 85, tagline: "Responsive UI Framework" },
      { name: "PHP", level: 84, tagline: "Server-side Web Development" },
      { name: "MySQL", level: 86, tagline: "Relational Schema & Queries" }
    ]
  },
  {
    id: "tools",
    name: "Tools & Workflow",
    iconName: "Wrench",
    skills: [
      { name: "Git", level: 88, tagline: "Version Control System" },
      { name: "GitHub", level: 90, tagline: "Collaborative Code Repositories" },
      { name: "VS Code", level: 95, tagline: "IDE Workflow & Debugging" },
      { name: "MS Office", level: 90, tagline: "Documentation & Analysis" }
    ]
  },
  {
    id: "design",
    name: "Design & UI",
    iconName: "Palette",
    skills: [
      { name: "Adobe Photoshop", level: 90, tagline: "Digital Art & Poster Graphics" },
      { name: "Canva", level: 92, tagline: "Brand Assets & Visual Layouts" },
      { name: "Adobe Express", level: 88, tagline: "Quick Social Graphics & Branding" }
    ]
  },
  {
    id: "video",
    name: "Video Production",
    iconName: "Film",
    skills: [
      { name: "Premiere Pro", level: 92, tagline: "Pro Non-Linear Video Editing" },
      { name: "DaVinci Resolve", level: 88, tagline: "Color Grading & Cinematic Post" },
      { name: "CapCut", level: 95, tagline: "Fast Mobile & Social Reels Editing" }
    ]
  },
  {
    id: "ai",
    name: "AI & Productivity",
    iconName: "Cpu",
    skills: [
      { name: "ChatGPT", level: 92, tagline: "Code Synthesis & Technical Writing" },
      { name: "Gemini", level: 94, tagline: "Multimodal Analysis & API Logic" },
      { name: "Claude", level: 90, tagline: "Complex Reasoning & Architecture" },
      { name: "GitHub Copilot", level: 88, tagline: "AI-Assisted Pair Programming" },
      { name: "Prompt Engineering", level: 95, tagline: "Contextual System Prompting" },
      { name: "AI Image Generation", level: 92, tagline: "Synthetic Visuals & Art Assets" }
    ]
  },
  {
    id: "media",
    name: "Media & Film",
    iconName: "Camera",
    skills: [
      { name: "Photography", level: 92, tagline: "Event & Studio Lighting" },
      { name: "Videography", level: 94, tagline: "Cinematic Framing & Camera Movement" },
      { name: "DSLR Operation", level: 90, tagline: "Manual Exposure & Prime Lenses" },
      { name: "Gimbal Stabilization", level: 88, tagline: "Dynamic Tracking Shots" },
      { name: "Film Making", level: 92, tagline: "Visual Storytelling & Directing" },
      { name: "Cinematography", level: 94, tagline: "Mood Lighting & Camera Angle Choice" },
      { name: "Content Creation", level: 95, tagline: "End-to-End Social Video Production" }
    ]
  }
];

export const experienceList: Experience[] = [
  {
    id: "rtcians",
    role: "Media Team Member - (Rticans) — Promotion & Content Creation Specialist",
    organization: "Rathinam Technical Campus (Rticans)",
    duration: "2025 – PRESENT",
    category: "institutional",
    description: "Promotion & Content Creation Specialist delivering digital campaigns, high-impact video reels, and official college media.",
    responsibilities: [
      "Produced promotional and academic video content for the college.",
      "Handled DSLR and gimbal videography for events and campaigns.",
      "Edited videos and designed posters for official digital platforms.",
      "Collaborated with faculty and student teams for media production."
    ],
    skillsUsed: ["DSLR & Gimbal", "Videography", "Premiere Pro", "Posters & Branding", "Team Collaboration"]
  },
  {
    id: "mca-media",
    role: "Media Coordinate - (Dept Association) — Photography & Videography with Editing",
    organization: "MCA Department Association",
    duration: "2026 – PRESENT",
    category: "departmental",
    description: "Photography & Videography with Editing managing department visual coverage, event campaigns, and promotional posters.",
    responsibilities: [
      "Produced photo and video content for department events.",
      "Handled DSLR and gimbal videography.",
      "Edited videos and designed promotional posters.",
      "Managed media coverage for workshops and seminars.",
      "Collaborated with faculty and student teams."
    ],
    skillsUsed: ["Photography", "Videography", "Photoshop", "Canva", "Media Coverage"]
  },
  {
    id: "independent-creative",
    role: "Cinematographer",
    organization: "Independent Creative & Film Production",
    duration: "2023 – PRESENT",
    category: "independent",
    description: "Directed, shot, and edited short films and digital promotional content across end-to-end production pipelines.",
    responsibilities: [
      "Directed and edited short films.",
      "Worked as Director of Photography (DOP).",
      "Produced digital content and promotional videos.",
      "Managed complete production workflow."
    ],
    skillsUsed: ["Cinematography", "DOP", "Film Directing", "DaVinci Resolve", "Production Workflow"]
  }
];

export const projectData: Project = {
  id: "bold-bro",
  title: "BOLD BRO CARSWASH",
  subtitle: "Web-Based Car Wash Management Application for Online Booking & Service Management",
  technologies: ["PHP", "MySQL (PDO)", "HTML", "CSS", "Bootstrap", "jQuery"],
  features: [
    "Online booking system for customer appointment scheduling",
    "Admin dashboard with real-time operational metrics",
    "Payment management and invoice tracking",
    "SMS notifications for automated service alerts",
    "Service management module for wash packages and vehicle queues"
  ],
  role: [
    "Frontend Development",
    "Backend Development (PHP PDO)",
    "Database Design (MySQL)",
    "System Integration & Testing"
  ],
  description: "Developed a web-based car wash management application for online booking and service management. Built with PHP and MySQL (PDO) for secure backend operations, and HTML, CSS, Bootstrap, and jQuery for a responsive user interface.",
  image: boldBroImg,
  images: [
    {
      url: boldBroImg,
      caption: "Live Customer Booking Platform & Service Tracker",
      tag: "Live Dashboard UI",
      badge: "Customer Portal & Booking Flow",
      title: "Live Customer Booking & Service UI",
      subtitle: "Client-Facing Web Application for Instant Appointment Booking & Vehicle Queue Tracking",
      description: "Interactive customer-facing web interface engineered for car owners to explore detailing packages, select preferred time slots, input vehicle specifications, and track live service progression with instant SMS alerts.",
      technologies: ["HTML5", "CSS3 / Bootstrap", "jQuery", "PHP (PDO)", "AJAX", "SMS Gateway"],
      features: [
        "Interactive dynamic calendar slot selection & real-time bay availability",
        "Multi-category vehicle picker (Hatchback, Sedan, SUV, Luxury)",
        "Instant automated SMS & Email confirmation with tracking link",
        "Live service countdown timer and active washing stage indicator",
        "Transparent pricing breakdown with instant add-on service calculator"
      ],
      role: [
        "Frontend UI/UX Design",
        "Responsive Client Booking Flow",
        "Real-Time Form Validations",
        "SMS API Integration"
      ],
      highlight: "Designed for frictionless client onboarding with 3-step checkout and sub-second slot verification."
    },
    {
      url: boldBroMockupImg,
      caption: "Enterprise Operations Console & Admin Control Cockpit",
      tag: "Admin Page UI",
      badge: "Admin & Operations Management",
      title: "Admin Operations & Management UI",
      subtitle: "Back-Office Management Cockpit for Wash Bay Allocation, Technician Dispatch & Revenue Analytics",
      description: "Centralized administrative control center empowering shop managers to monitor active service bays, assign technicians, configure dynamic service pricing, generate automated PDF invoices, and audit daily transaction logs.",
      technologies: ["PHP (PDO)", "MySQL Relational DB", "Session Security", "DataTables", "Chart Analytics", "PDF Invoicing"],
      features: [
        "Live wash bay workload monitor and drag-and-drop job dispatcher",
        "Employee & technician task management with commission calculations",
        "Dynamic service catalog & discount promo coupon management",
        "Automated PDF bill generation with GST breakdown and receipt printing",
        "Comprehensive sales reports, booking volume graphs, and revenue exports"
      ],
      role: [
        "PHP MVC Backend Architecture",
        "MySQL PDO Secure Queries",
        "Role-Based Access Control (RBAC)",
        "Financial Analytics & Reporting"
      ],
      highlight: "Protected with parameterized PDO queries, secure session tokens, and encrypted authentication."
    }
  ],
  architectureDetails: {
    frontend: "Responsive user interface built with HTML, CSS, Bootstrap, and jQuery for dynamic real-time appointment booking.",
    backend: "Robust PHP MVC architecture with PDO (PHP Data Objects) for parameterized queries and secure transaction handling.",
    database: "Relational MySQL schema structuring customer profiles, car models, booking slots, and transaction logs.",
    testing: "Comprehensive testing covering booking validations, admin security, and cross-device responsiveness."
  },
  githubUrl: "https://github.com/Guru-JD/Bold_Bro_Car_Wash.git"
};

export const shortFilmsList: ShortFilm[] = [
  {
    id: "tech-troll-1",
    title: "Tech Troll 1",
    roles: ["Concept & Script", "Cinematographer", "Actor", "Video Editor"],
    posterImage: posterTechTroll1Img,
    synopsis: "A high-energy comedy tech troll parody exploring chaotic software bugs, developer nightmares, and hilarious student programmer struggles with kinetic pacing and meme-grade sound design.",
    releaseYear: "2024",
    youtubeUrl: "https://youtu.be/YIvOJpzrNxA?si=BkxlBNxybJU7yUS3",
    keyContributions: [
      "Scripted situational tech satire and relatable programming punchlines",
      "Handled high-energy camera work, jump cuts, and punch-in angles",
      "Edited comedic timing, meme sound effects, and kinetic text overlays",
      "Starred as the frustrated lead developer facing catastrophic bugs"
    ],
    awardOrBadge: "Viral Comedy Parody"
  },
  {
    id: "tech-troll-2",
    title: "Tech Troll 2",
    roles: ["Director", "DOP", "Editor", "Lead Performer"],
    posterImage: posterTechTroll2Img,
    synopsis: "The highly anticipated tech comedy sequel escalating code chaos into AI hype parodies, runtime crashes, and college lab shenanigans with cinematic visual comedy and neon aesthetics.",
    releaseYear: "2025",
    youtubeUrl: "https://youtu.be/iCZFPiZJxJY?si=AXwsV2lJYppUhxNa",
    keyContributions: [
      "Directed multi-character comedy sequences & witty troll dialogues",
      "Cinematography featuring neon studio setups and dramatic reaction zooms",
      "Advanced VFX integration: meme popups, error glitch animations, and fast-paced sound syncing",
      "Produced end-to-end digital content for YouTube & social media"
    ],
    awardOrBadge: "Tech Comedy Sequel"
  },
  {
    id: "bomma-thuppaki",
    title: "Bomma Thuppaki",
    roles: ["Director", "Actor", "Editor", "Cinematographer"],
    posterImage: posterBommaImg,
    synopsis: "An intense cinematic short film exploring suspense and human emotion under extreme pressure. Written, directed, shot, and edited by Guru Prasath G D.",
    releaseYear: "2024",
    youtubeUrl: "https://youtu.be/Cec56YGY-vQ?si=K6BGY2b8wEd3kf8L",
    keyContributions: [
      "Directed character blocking & dramatic scene pacing",
      "Operated camera for atmospheric low-light cinematography",
      "Edited full visual sequence & color graded key moments",
      "Performed key on-screen dramatic role"
    ],
    awardOrBadge: "Featured Independent Short Film"
  },
  {
    id: "oru-sabikka-patta-uyir",
    title: "Oru Sabhikkapatta Uyir",
    roles: ["Actor", "Dialogue Writer", "Director of Photography (DOP)"],
    posterImage: posterOruSabikkaImg,
    synopsis: "A Black and White Production indie film (Directed by Aakash Ramachandran, Music by Dhanush). A gripping suspense drama featuring sharp dialogue, psychological tension, and moody high-contrast black & white cinematography by Guru Prasath G D.",
    releaseYear: "2024",
    youtubeUrl: "https://youtu.be/NLma3EEjGlw?si=pnyMP4WlNCOS2Al6",
    keyContributions: [
      "Crafted dialogue screenplay for natural emotional resonance",
      "Director of Photography: lighting design & expressive B&W camera movement",
      "Starring performance in lead narrative character arc",
      "Collaborated with director Aakash Ramachandran on scene pacing"
    ],
    awardOrBadge: "B&W Indie Cinema Spotlight"
  },
  {
    id: "ruvaic",
    title: "The Ruvaaiz",
    roles: ["Actor", "Dialogue Performer", "Production Associate"],
    posterImage: posterRuvaicImg,
    synopsis: "FILMBINDER And JR Productions (Written and Directed by A. Selva Sivaram & A. John Durairaj). A character-driven narrative showcasing impactful dialogue performance with G.D. Guru Prasanth.",
    releaseYear: "2023",
    youtubeUrl: "https://youtu.be/S-IdGhEE7wA?si=_VUnpP7hrK3Vdejp",
    keyContributions: [
      "Starring dialogue performance and character interaction",
      "Production collaboration with FILMBINDER & JR Productions",
      "Collaborated on creative direction & scene execution"
    ],
    awardOrBadge: "Official Feature"
  }
];

export const achievementsList: Achievement[] = [
  {
    id: "ach-onam-reel",
    title: "Second Prize – Onam Reel Making Competition",
    event: "Onam Cultural Fest & Reel Competition",
    prize: "Second Prize",
    year: "2025",
    description: "Secured Second Prize in the collegiate Onam Reel Making Competition for creative cinematography, dynamic beat-sync editing, and festive cultural storytelling.",
    badgeColor: "from-amber-500 to-yellow-600",
    credentialId: "AWARD-ONAM-REEL-2025"
  },
  {
    id: "ach-eye-vision",
    title: "Second Prize – Eye Vision",
    event: "Science Idea Competition",
    prize: "Second Prize",
    year: "2025",
    description: "Awarded Second Prize for 'Eye Vision', an innovative science idea concept competition showcasing tech innovation.",
    badgeColor: "from-cyan-500 to-blue-600",
    driveUrl: "https://drive.google.com/file/d/1Sr28lpnVgYwwX2iN45JLk0YlugL0iW5e/view?usp=sharing",
    fileId: "1Sr28lpnVgYwwX2iN45JLk0YlugL0iW5e",
    credentialId: "AWARD-EYE-VISION-2025"
  },
  {
    id: "ach-interface",
    title: "Second Prize – Inter-Face “As You Like It”",
    event: "Stage Performance Competition",
    prize: "Second Prize",
    year: "2025",
    description: "Secured Second Prize in Inter-Face “As You Like It” stage performance, demonstrating artistic and dramatic versatility.",
    badgeColor: "from-blue-500 to-indigo-600",
    driveUrl: "https://drive.google.com/file/d/1sNfZjIQuA-xDCM1dXZQQvwR-hZNjnYWj/view?usp=sharing",
    fileId: "1sNfZjIQuA-xDCM1dXZQQvwR-hZNjnYWj",
    credentialId: "AWARD-INTERFACE-AYLI-2025"
  },
  {
    id: "ach-nsdc",
    title: "Third Prize – Idea Innovation NSDC",
    event: "NSDC Innovation Challenge",
    prize: "Third Prize",
    year: "2025",
    description: "Won Third Prize at the National Skill Development Corporation (NSDC) Idea Innovation competition.",
    badgeColor: "from-indigo-500 to-purple-600",
    driveUrl: "https://drive.google.com/file/d/10I7nhWPm-VOYyekan7Y8uiNCj16rhBXm/view?usp=sharing",
    fileId: "10I7nhWPm-VOYyekan7Y8uiNCj16rhBXm",
    credentialId: "AWARD-NSDC-INNOV-2025"
  },
  {
    id: "ach-tecnext",
    title: "Third Prize – Tecnext - Treasure Hunt",
    event: "Tecnext Technical Symposium",
    prize: "Third Prize",
    year: "2022",
    description: "Won Third Prize in the Tecnext Technical Treasure Hunt, displaying analytical problem-solving and rapid debugging ability.",
    badgeColor: "from-cyan-600 to-teal-500",
    driveUrl: "https://drive.google.com/file/d/1tnc9oI3SnOUBSxpeJoATADQLnx-SbPO-/view?usp=sharing",
    fileId: "1tnc9oI3SnOUBSxpeJoATADQLnx-SbPO-",
    credentialId: "AWARD-TECNEXT-TH-2022"
  }
];

export const certificatesList: CertificateItem[] = [
  {
    id: "cert-c1",
    title: "C for Everyone - Programming Fundamental",
    issuer: "Coursera / Academic Certification",
    issueDate: "2023",
    category: "Technical",
    credentialId: "COURSERA-C-PROG-2023",
    driveUrl: "https://drive.google.com/file/d/1GmCiUkMajLOzaQyd2FU7dReYvvc4Fn2Q/view?usp=drive_link",
    description: "Fundamental C programming, algorithmic logic, pointers, memory addressing, and structured programming paradigms.",
    skills: ["C Programming", "Algorithms", "Pointers", "Memory Management"],
    certificateType: "Academic Certification"
  },
  {
    id: "cert-c2",
    title: "C for Everyone - Structured Programming",
    issuer: "Coursera / Academic Certification",
    issueDate: "2023",
    category: "Technical",
    credentialId: "COURSERA-C-STRUCT-2023",
    driveUrl: "https://drive.google.com/file/d/1bpUHctVXIP9KslzFfX1uHCF7lLLSRRLH/view?usp=drive_link",
    description: "Advanced structured C programming, user-defined data structures, enumerated types, and file I/O operations.",
    skills: ["Structured C", "Data Structures", "File I/O", "Modular Code"],
    certificateType: "Academic Certification"
  },
  {
    id: "cert-hw",
    title: "Computer Hardware Software",
    issuer: "Technical Systems Certification",
    issueDate: "2022",
    category: "Core Engineering",
    credentialId: "HW-SW-2022-7901",
    driveUrl: "https://drive.google.com/file/d/124NbWGmY6Q4E_VnOoRK771mLNcDaceQw/view?usp=drive_link",
    description: "Computer hardware components, system architecture, operating systems, troubleshooting, and peripheral integration.",
    skills: ["Computer Hardware", "Software Installation", "System Troubleshooting", "Architecture"],
    certificateType: "Systems Credential"
  },
  {
    id: "cert-dt1",
    title: "Design Thinking & Innovation",
    issuer: "Professional Innovation Guild",
    issueDate: "2023",
    category: "Core Engineering",
    credentialId: "DT-INNOV-2023-1104",
    driveUrl: "https://drive.google.com/file/d/1TTKmyT-bCOKkuJBrxAxWXNLwBVgtIwO7/view?usp=drive_link",
    description: "User-centric problem definition, ideation methodologies, rapid prototyping, and creative iterative problem solving.",
    skills: ["Design Thinking", "Creative Problem Solving", "Prototyping", "Innovation Strategy"],
    certificateType: "Professional Certification"
  },
  {
    id: "cert-dt2",
    title: "Design Thinking: Discovery Tools",
    issuer: "Professional Innovation Guild",
    issueDate: "2023",
    category: "Core Engineering",
    credentialId: "DT-DISC-2023-1105",
    driveUrl: "https://drive.google.com/file/d/1V2nFlRAq0pww6yafiQPLn_rdTmG6rOy8/view?usp=drive_link",
    description: "User research tools, persona mapping, customer journey tracking, and empathetic requirement discovery.",
    skills: ["User Research", "Discovery Tools", "Journey Mapping", "Empathy Interviewing"],
    certificateType: "Professional Certification"
  },
  {
    id: "cert-dt3",
    title: "Design Thinking for Innovation",
    issuer: "Professional Innovation Guild",
    issueDate: "2023",
    category: "Core Engineering",
    credentialId: "DT-STRAT-2023-1106",
    driveUrl: "https://drive.google.com/file/d/1AO5wz3JTWWqYQTcwQVuR5TT-fKAIGIIT/view?usp=drive_link",
    description: "Translating innovative concepts into viable real-world software and media deliverables with iterative feedback loops.",
    skills: ["Strategy", "Iterative Testing", "Agile Execution", "Product Innovation"],
    certificateType: "Professional Certification"
  },
  {
    id: "cert-intro",
    title: "Introduction to Computer",
    issuer: "Foundation Certification",
    issueDate: "2022",
    category: "Core Engineering",
    credentialId: "INTRO-CS-2022-0041",
    driveUrl: "https://drive.google.com/file/d/1jl8JxxqStvfO4PBkUnHk5EQB1qMnrKBY/view?usp=drive_link",
    description: "Fundamental computing concepts, operating system architecture, binary arithmetic, and digital logic foundations.",
    skills: ["Computer Fundamentals", "Operating Systems", "Digital Logic", "CS Foundations"],
    certificateType: "Foundation Certificate"
  },
  {
    id: "cert-da",
    title: "Data Analyst",
    issuer: "Analytics Certification Institute",
    issueDate: "2024",
    category: "AI & Data",
    credentialId: "DATA-ANALYST-2024-6310",
    driveUrl: "https://drive.google.com/file/d/1VFxFh49-IFiDEpBOXy_ntBXfRDHSfpRn/view?usp=drive_link",
    description: "Data analysis methodologies, data exploration, pattern identification, SQL relational querying, and data visualization.",
    skills: ["Data Analysis", "SQL", "Relational Databases", "Data Visualization"],
    certificateType: "Data Science Certificate"
  },
  {
    id: "cert-fed",
    title: "Frontend Development",
    issuer: "Web Architecture Guild",
    issueDate: "2023",
    category: "Technical",
    credentialId: "FED-DEV-2023-8821",
    driveUrl: "https://drive.google.com/file/d/1WaQ0vJvF8cKD_QYJBg9utN7_3Hchz0lw/view?usp=drive_link",
    description: "Designing semantic HTML5 layouts, modern CSS3 styling, responsive grid systems, and cross-browser interface engineering.",
    skills: ["HTML5", "CSS3", "Responsive UI", "Tailwind CSS", "UI Design"],
    certificateType: "Web Engineering Certificate"
  },
  {
    id: "cert-js",
    title: "Javascript",
    issuer: "Web Certification Authority",
    issueDate: "2024",
    category: "Technical",
    credentialId: "JS-WEB-2024-5109",
    driveUrl: "https://drive.google.com/file/d/1XlkHbWi0ENBebqDx-LG-I7GZjeeUhdJ1/view?usp=drive_link",
    description: "Modern ES6+ JavaScript, DOM manipulation, asynchronous programming, event handling, and interactive web behavior.",
    skills: ["JavaScript ES6+", "DOM Manipulation", "Async/Await", "Event Handling"],
    certificateType: "Technical Credential"
  }
];

export const languagesList: LanguageItem[] = [
  { name: "English", proficiency: "Professional Working" },
  { name: "Tamil", proficiency: "Native / Fluent" },
  { name: "Malayalam", proficiency: "Conversational" }
];

export const resumeSkillGroups = {
  hardSkills: ["Java", "Python", "HTML", "Cloud", "Networking", "PHP", "MySQL (PDO)", "C", "C++", "JavaScript", "Bootstrap", "jQuery"],
  softSkills: ["Creative Thinking", "Leadership", "Team Collaboration", "Event Management", "Adaptability", "Problem-Solving", "Communication"],
  creativeSkills: ["Canva", "Adobe Express", "CapCut", "Photoshop", "DaVinci Resolve", "MS Office", "Premiere Pro", "Cinematography", "Photography"]
};

export const leadershipList: LeadershipRole[] = [
  {
    id: "lead-mca-media",
    title: "MCA Department Media Coordinator",
    institution: "Rathinam Technical Campus",
    period: "2025 – Present",
    responsibilities: [
      "Leading creative media initiatives for departmental events & symposiums",
      "Designing promotional materials, posters, and digital visual assets",
      "Coordinating photography, videography, and social media coverage"
    ]
  },
  {
    id: "lead-student-incharge",
    title: "Student In-Charge",
    institution: "The Gandhigram Rural Institute (2022–2025)",
    period: "2022 – 2025",
    responsibilities: [
      "Represented the student body in academic and administrative forums",
      "Coordinating seamless communication between students and faculty",
      "Assisted in organizing departmental initiatives and technical meets"
    ]
  },
  {
    id: "lead-class-rep",
    title: "Class Representative (Second & Third Year)",
    institution: "The Gandhigram Rural Institute",
    period: "2023 – 2025",
    responsibilities: [
      "Primary liaison between 60+ students and department faculty",
      "Coordinated classroom scheduling, exam details, and academic notices",
      "Addressed student academic concerns and supported faculty coordination"
    ]
  },
  {
    id: "lead-student-coord",
    title: "Student Coordinator",
    institution: "The Gandhigram Rural Institute",
    period: "2022 – 2025",
    responsibilities: [
      "Organized technical symposiums, cultural programs, and workshops",
      "Managed student participation, stage flow, and event logistics",
      "Collaborated with faculty committees to ensure seamless execution"
    ]
  },
  {
    id: "lead-media-team",
    title: "Media Team Member",
    institution: "The Gandhigram Rural Institute",
    period: "2022 – 2025",
    responsibilities: [
      "Produced promotional content, event photography, and video recaps",
      "Supported institutional digital communications & branding activities"
    ]
  }
];

export const servicesList: ServiceItem[] = [
  {
    id: "srv-software-dev",
    title: "Software Development",
    category: "Tech",
    description: "Building robust desktop, command line, and automated tools using C++, Java, and Python.",
    iconName: "Code",
    deliverables: ["Clean Architecture Code", "Automated Scripts", "Database Integration"],
    typicalTimeline: "1-3 Weeks"
  },
  {
    id: "srv-web-dev",
    title: "Web Development",
    category: "Tech",
    description: "Full-stack web applications with dynamic PHP/Node backends, MySQL databases, and modern JS UI.",
    iconName: "Layout",
    deliverables: ["Responsive Web App", "Admin Dashboard", "API & Database Schema"],
    typicalTimeline: "2-4 Weeks"
  },
  {
    id: "srv-ui-design",
    title: "UI / UX Design",
    category: "Design",
    description: "Crafting modern glassmorphic, high-contrast, intuitive web and mobile app interfaces.",
    iconName: "Figma",
    deliverables: ["Interactive Prototypes", "Design System Components", "Responsive Layout Specs"],
    typicalTimeline: "1-2 Weeks"
  },
  {
    id: "srv-poster-design",
    title: "Poster & Graphic Design",
    category: "Design",
    description: "Cinematic film posters, event banners, and high-impact visual branding using Adobe Photoshop & Canva.",
    iconName: "Image",
    deliverables: ["Print & Digital Ready Posters", "Social Media Banners", "Vector Logos"],
    typicalTimeline: "2-5 Days"
  },
  {
    id: "srv-brand-identity",
    title: "Brand Identity Design",
    category: "Design",
    description: "Complete visual identities including color palettes, typography specs, logos, and media brand kits.",
    iconName: "Sparkles",
    deliverables: ["Brand Style Guidelines", "Logo Package", "Social Assets"],
    typicalTimeline: "1-2 Weeks"
  },
  {
    id: "srv-photography",
    title: "Event & Studio Photography",
    category: "Media",
    description: "Professional high-resolution photography for institutional events, portraiture, and creative shoots.",
    iconName: "Camera",
    deliverables: ["Color Corrected High-Res Photos", "Edited Highlights Album"],
    typicalTimeline: "1-3 Days"
  },
  {
    id: "srv-videography",
    title: "Cinematic Videography",
    category: "Media",
    description: "DSLR & Gimbal video capture for promotional trailers, campus events, and cinematic short films.",
    iconName: "Video",
    deliverables: ["RAW & Edited Footage", "4K Video Masters"],
    typicalTimeline: "2-5 Days"
  },
  {
    id: "srv-video-editing",
    title: "Video Editing & Post Production",
    category: "Media",
    description: "Non-linear editing in Premiere Pro & DaVinci Resolve with color grading, audio sync, and motion titles.",
    iconName: "Film",
    deliverables: ["Full HD / 4K Edited Video", "Color Graded Cut", "Audio Mix"],
    typicalTimeline: "3-7 Days"
  },
  {
    id: "srv-content-creation",
    title: "Social Media Content Creation",
    category: "Media",
    description: "Short-form viral Instagram Reels, YouTube Shorts, and promotional teasers tailored for engagement.",
    iconName: "Share2",
    deliverables: ["Vertical Video Reels", "Engaging Thumbnails", "Captions & Tags"],
    typicalTimeline: "1-3 Days"
  },
  {
    id: "srv-ai-solutions",
    title: "AI Solutions & Prompt Engineering",
    category: "AI",
    description: "Leveraging LLMs (Gemini, Claude, ChatGPT), custom prompt pipelines, and synthetic image generation.",
    iconName: "Bot",
    deliverables: ["Prompt Workflows", "AI-Generated Visuals", "Custom LLM Integrations"],
    typicalTimeline: "3-7 Days"
  }
];

export const strengthsList: StrengthItem[] = [
  {
    id: "str-leadership",
    title: "Leadership",
    description: "Proven track record guiding student teams, managing media crews, and representing academic cohorts.",
    iconName: "Users"
  },
  {
    id: "str-problem-solving",
    title: "Problem Solving",
    description: "Analytical mindset for diagnosing complex software logic and untangling production challenges.",
    iconName: "BrainCircuit"
  },
  {
    id: "str-communication",
    title: "Communication",
    description: "Articulate public speaker and liaison between faculty, students, clients, and technical teams.",
    iconName: "MessageSquare"
  },
  {
    id: "str-creativity",
    title: "Creativity",
    description: "Merging aesthetic design and storytelling with structured code to build memorable digital experiences.",
    iconName: "Sparkles"
  },
  {
    id: "str-time-management",
    title: "Time Management",
    description: "Balancing MCA academic rigor, event deadlines, media shoots, and software development projects.",
    iconName: "Clock"
  },
  {
    id: "str-adaptability",
    title: "Adaptability",
    description: "Rapidly adjusting between code editor, camera rig, design suite, and leadership meetings.",
    iconName: "Zap"
  },
  {
    id: "str-quick-learning",
    title: "Quick Learning",
    description: "Swiftly mastering new frameworks, AI model capabilities, and video post-production tools.",
    iconName: "BookOpen"
  },
  {
    id: "str-team-collaboration",
    title: "Team Collaboration",
    description: "Fostering inclusive, high-energy environments for film crews, departmental teams, and developers.",
    iconName: "UserCheck"
  }
];

export const futureGoalsList: FutureGoal[] = [
  {
    id: "goal-software-engineer",
    title: "Software Engineer",
    category: "Core Tech",
    description: "Architecting scalable enterprise applications, backend services, and clean software systems.",
    iconName: "Code"
  },
  {
    id: "goal-ai-developer",
    title: "AI Developer",
    category: "Next-Gen Tech",
    description: "Building intelligent applications powered by multimodal AI models, agents, and custom prompt logic.",
    iconName: "Cpu"
  },
  {
    id: "goal-creative-director",
    title: "Creative Director",
    category: "Media & Brand",
    description: "Leading creative vision, visual identity, film direction, and brand campaigns for major studios or agencies.",
    iconName: "Clapperboard"
  },
  {
    id: "goal-entrepreneur",
    title: "Entrepreneur",
    category: "Business & Innovation",
    description: "Founding a hybrid tech & creative media venture that builds digital products and visual stories.",
    iconName: "Rocket"
  },
  {
    id: "goal-uiux-designer",
    title: "UI/UX Designer",
    category: "Design",
    description: "Crafting frictionless human-computer interactions and futuristic dark glassmorphic user interfaces.",
    iconName: "Compass"
  },
  {
    id: "goal-digital-producer",
    title: "Digital Media Producer",
    category: "Media Production",
    description: "Producing high-value cinematic digital content, docu-series, and interactive multi-platform media.",
    iconName: "Video"
  }
];

export const testimonials: TestimonialItem[] = [
  {
    id: "testimonial-bhuvan",
    name: "Bhuvan",
    role: "Short Film Director & Creative Collaborator",
    organizationOrProject: "Bhomma Thuppakki & Indie Shorts",
    avatarText: "BH",
    rating: 5,
    content: "Guru's framing and lighting sense completely elevated the psychological mood of our film. He has a rare cinematic intuition for story pacing, camera movement, and capturing authentic human expressions in tight spaces.",
    tag: "Cinematography & Direction"
  },
  {
    id: "testimonial-jimry-henry",
    name: "Jimry Henry",
    role: "Director - Student Affairs",
    organizationOrProject: "Rathinam Technical Campus",
    avatarText: "JH",
    rating: 5,
    content: "Guru Prasath has been an indispensable pillar of our campus media and student affairs promotions. From high-stakes institutional event videography to quick-turnaround social reels, his creative execution is top-tier.",
    tag: "Student Affairs & Campus Media"
  },
  {
    id: "testimonial-harshvarthaman",
    name: "Harshvarthaman",
    role: "Staff - Student Affairs | Content Creator & Travel Vlogger",
    organizationOrProject: "Rathinam Technical Campus",
    avatarText: "HV",
    rating: 5,
    content: "Working with Guru on campus events, travel shoots, and creative visual content is an absolute pleasure. From cinematic gimbal shots to color grading in DaVinci Resolve, he brings genuine studio-grade polish and storytelling energy.",
    tag: "Content Creation & Travel Vlogging"
  }
];

export const faqList: FaqItem[] = [
  {
    id: "faq-dual-profile",
    question: "What makes you unique as a Creative Technologist?",
    answer: "I bridge two powerful disciplines: robust software engineering (Full-Stack Web, React, Python, Databases, AI integration) and cinematic visual production (Cinematography, Lighting, Gimbal, DaVinci Resolve color grading). This allows me to build digital products that are both technically bulletproof and visually world-class.",
    category: "General & Vision"
  },
  {
    id: "faq-cinematography-services",
    question: "Are you available for freelance short films, events, and editing?",
    answer: "Yes! I am actively open for narrative short films, ad films, music videos, college/corporate event coverage, and specialized color grading projects. You can directly reach me via the contact form or WhatsApp to discuss dates and scripts.",
    category: "Cinematography"
  },
  {
    id: "faq-software-development",
    question: "Can you build custom web applications or client software projects?",
    answer: "Absolutely. I design and develop responsive, modern web applications, portfolios, SaaS dashboards, and automation tools using modern tech stacks like React, TypeScript, Node/Express, and Tailwind CSS.",
    category: "Software Development"
  },
  {
    id: "faq-travel-locations",
    question: "Do you travel outside Dindigul / Coimbatore for shoots or production work?",
    answer: "Yes, I regularly travel across Tamil Nadu (Chennai, Coimbatore, Madurai, Dindigul, Trichy) and neighboring states for scheduled shoots, pre-production planning, and on-location direction.",
    category: "Production & Travel"
  },
  {
    id: "faq-brand-collaborations",
    question: "How do paid collaborations and brand promotions work?",
    answer: "I partner with tech brands, camera gear makers, editing software, and student-focused digital products. Packages include sponsored reels, YouTube reviews, integration shoutouts, and bundled media packages with transparent deliverables.",
    category: "Collabs & Partnerships"
  }
];
