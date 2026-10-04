/**
 * ====================================================================
 * 🌟 PUSAT DATA PORTOFOLIO MULTI-BAHASA (ID & EN) - HAFIZH.DEV
 * Niche: AI/ML Engineer, Data Scientist & Full-Stack Web Developer
 * ====================================================================
 */

export interface NavItem {
  id: string;
  idLabel: string;
  enLabel: string;
  href: string;
}

// 4 Menu Utama di Navbar (Experience terintegrasi di dalam Tentang)
export const navItems: NavItem[] = [
  { id: "about", idLabel: "Tentang", enLabel: "About", href: "#about" },
  { id: "skills", idLabel: "Keahlian", enLabel: "Skills", href: "#skills" },
  { id: "projects", idLabel: "Project", enLabel: "Projects", href: "#projects" },
  { id: "contact", idLabel: "Kontak", enLabel: "Contact", href: "#contact" }
];

export const socialLinks = {
  linkedin: "https://id.linkedin.com/in/hafizh-ala-udin-fajri-860593317",
  github: "https://github.com/hafizhfajrii",
  instagram: "https://www.instagram.com/hafizhfajrii?stkn=MW1kYnc1M3piYnVq",
  email: "hafizhalaudinf@gmail.com",
  twitter: "https://twitter.com/hafizhfajrii",
  telegram: "https://t.me/hafizhfajrii"
};

// --------------------------------------------------------------------
// KONTEN BAHASA INDONESIA (ID) & BAHASA INGGRIS (EN)
// --------------------------------------------------------------------
export const content = {
  id: {
    brand: "hafizh.dev",
    nav: {
      about: "Tentang",
      skills: "Keahlian",
      projects: "Project",
      contact: "Kontak",
      cvBtn: "CV / Resume"
    },
    heroAbout: {
      statusText: "Tersedia untuk Proyek AI, Data & Web",
      greeting: "Hello! I'm",
      name: "Hafizh Ala'udin Fajri",
      role: "Web Developer, AI Engineer & Data Scientist",
      typingRoles: [
        "Web Developer",
        "AI Engineer",
        "Data Scientist"
      ],
      tagline: "Membangun aplikasi web modern yang cepat, interaktif, dan berkinerja tinggi, diintegrasikan dengan kecerdasan buatan (AI) serta arsitektur data yang scalable.",
      pillCleanCode: "AI & Data Architecture",
      pillPerformance: "Modern Web & Scalable API",
      
      // Bagian Detail Tentang Saya (Merged)
      sectionTag: "Tentang & Perjalanan",
      title: "Menggabungkan Kekuatan",
      titleHighlight: "AI, Data & Rekayasa Web",
      subtitle: "Mendedikasikan passion untuk memecahkan masalah kompleks melalui algoritma cerdas, data analytics mendalam, dan pengalaman web yang seamless.",
      location: "Indonesia",
      availableStatus: "Tersedia untuk Kolaborasi",
      detailedAbout: [
        "Halo! Saya adalah seorang AI/ML Engineer, Data Scientist, dan Web Developer yang bersemangat dalam mengubah data mentah serta ide kompleks menjadi solusi cerdas yang fungsional.",
        "Dengan keahlian di bidang Machine Learning, Deep Learning, Data Analytics, serta ekosistem Full-Stack modern, saya merancang sistem komputasi cerdas mulai dari eksplorasi data hingga deployment aplikasi siap pakai.",
        "Terbuka untuk kolaborasi proyek freelance, riset terapan AI/Data, maupun posisi profesional di lingkungan yang inovatif."
      ],
      highlights: [
        { icon: "🤖", title: "AI & Machine Learning", desc: "Model prediktif, NLP, Computer Vision, dan fine-tuning LLM." },
        { icon: "📊", title: "Data Science & BI", desc: "EDA, statistik mendalam, pemodelan data, dan visualisasi interaktif." },
        { icon: "⚡", title: "Modern Web Engineering", desc: "Aplikasi web responsif berkecepatan tinggi dengan Astro & React." },
        { icon: "🚀", title: "Scalable Deployment", desc: "FastAPI, Docker, microservices, dan arsitektur cloud teruji." }
      ],
      downloadCv: "Unduh CV Lengkap",
      copyEmail: "Salin Email Saya"
    },
    stats: [
      { number: "3+", label: "Tahun Pengalaman", sublabel: "AI, Data & Web Engineering" },
      { number: "25+", label: "Model & Proyek Selesai", sublabel: "ML Pipelines & Web Apps" },
      { number: "98.5%", label: "Akurasi & Performa", sublabel: "Optimasi Algoritma & UX" },
      { number: "100%", label: "Dedikasi Kualitas", sublabel: "Clean Code & Data Integrity" }
    ],
    journey: {
      title: "Perjalanan & Pengalaman",
      subtitle: "Garis waktu karir teknis, peran machine learning & data, serta rekam jejak akademik."
    },
    skills: {
      sectionTag: "Stack & Keahlian",
      title: "Teknologi &",
      titleHighlight: "Infrastruktur",
      subtitle: "Instrumen komputasi, framework, dan model kecerdasan buatan untuk membangun sistem digital cerdas.",
      relatedLabel: "Teknologi & Framework Terkait:"
    },
    projects: {
      sectionTag: "Karya & Portofolio",
      title: "Project Pilihan &",
      titleHighlight: "Studi Kasus Solusi Cerdas",
      subtitle: "Koleksi proyek terpilih yang mencakup implementasi Machine Learning, Data Analytics Dashboard, dan Aplikasi Web Full-Stack.",
      liveDemo: "Lihat Demo",
      sourceCode: "Source Code"
    },
    contact: {
      sectionTag: "LET'S COOK",
      title: "Punya Projek Seru? ",
      titleHighlight: "Mari Ngobrol",
      subtitle: "",
      cardTitle: "Saluran Komunikasi Langsung",
      cardDesc: "Pilih platform yang paling nyaman untuk Anda memulai percakapan.",
      toastEmailCopied: "Email berhasil disalin ke clipboard!"
    },
    footer: {
      taglineLine1: "AI Engineer, Data Scientist",
      taglineLine2: "& Web Developer.",
      taglineSub: "Merancang solusi data cerdas dan aplikasi web modern.",
      designedBy: "Designed and Developed by",
      authorName: "Hafizh Ala'udin Fajri",
      copyright: "© 2026",
      backToTop: "Kembali ke Atas"
    }
  },

  en: {
    brand: "hafizh.dev",
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      cvBtn: "CV / Resume"
    },
    heroAbout: {
      statusText: "Available for AI, Data & Web Projects",
      greeting: "Hello! I'm",
      name: "Hafizh Ala'udin Fajri",
      role: "Web Developer, AI Engineer & Data Scientist",
      typingRoles: [
        "Web Developer",
        "AI Engineer",
        "Data Scientist"
      ],
      tagline: "Building fast, interactive, and high-performance modern web applications integrated with intelligent AI capabilities and scalable data architectures.",
      pillCleanCode: "AI & Data Architecture",
      pillPerformance: "Modern Web & Scalable API",
      
      // Detail About Me (Merged)
      sectionTag: "About & Journey",
      title: "Bridging the Power of",
      titleHighlight: "AI, Data & Web Systems",
      subtitle: "Dedicated to solving real-world challenges through intelligent algorithms, deep data insights, and seamless modern web experiences.",
      location: "Indonesia",
      availableStatus: "Open for Collaboration",
      detailedAbout: [
        "Hello! I am an AI/ML Engineer, Data Scientist, and Web Developer passionate about transforming complex data and ambitious ideas into reliable, intelligent solutions.",
        "With strong expertise in Machine Learning, Deep Learning, Statistical Data Analytics, and the modern Full-Stack ecosystem, I build end-to-end intelligent pipelines from data exploration to production web deployment.",
        "Currently open for freelance projects, applied AI research, and engineering roles in forward-thinking teams."
      ],
      highlights: [
        { icon: "🤖", title: "AI & Machine Learning", desc: "Predictive models, NLP, Computer Vision, and LLM fine-tuning." },
        { icon: "📊", title: "Data Science & BI", desc: "In-depth EDA, statistical modeling, data pipelines, and interactive BI." },
        { icon: "⚡", title: "Modern Web Engineering", desc: "High-performance responsive applications built with Astro & React." },
        { icon: "🚀", title: "Scalable Deployment", desc: "FastAPI, Docker, microservices, and tested cloud architectures." }
      ],
      downloadCv: "Download Full CV",
      copyEmail: "Copy My Email"
    },
    stats: [
      { number: "3+", label: "Years Experience", sublabel: "AI, Data & Web Engineering" },
      { number: "25+", label: "Completed Projects", sublabel: "ML Pipelines & Web Apps" },
      { number: "98.5%", label: "Accuracy & Speed Score", sublabel: "Model & UX Optimization" },
      { number: "100%", label: "Quality Commitment", sublabel: "Clean Code & Data Integrity" }
    ],
    journey: {
      title: "Journey & Experience",
      subtitle: "Chronological timeline of technical engineering roles, AI/Data projects, and academic background."
    },
    skills: {
      sectionTag: "Skills & Arsenal",
      title: "Technology &",
      titleHighlight: "Infrastructure",
      subtitle: "Computing instruments, frameworks, and artificial intelligence models to build intelligent digital systems.",
      relatedLabel: "Related Technologies & Frameworks:"
    },
    projects: {
      sectionTag: "Work & Portfolio",
      title: "Featured Projects &",
      titleHighlight: "Intelligent Case Studies",
      subtitle: "Curated showcase of Machine Learning systems, Data Analytics Dashboards, and Full-Stack Web Applications.",
      liveDemo: "Live Demo",
      sourceCode: "Source Code"
    },
    contact: {
      sectionTag: "LET'S COOK",
      title: "Have an Exciting Project? ",
      titleHighlight: "Let's Talk",
      subtitle: "",
      cardTitle: "Direct Communication Channels",
      cardDesc: "Choose whichever platform is most convenient for you to start a discussion.",
      toastEmailCopied: "Email copied to clipboard successfully!"
    },
    footer: {
      taglineLine1: "AI Engineer, Data Scientist",
      taglineLine2: "& Web Developer.",
      taglineSub: "Crafting intelligent data solutions and modern web experiences.",
      designedBy: "Designed and Developed by",
      authorName: "Hafizh Ala'udin Fajri",
      copyright: "© 2026",
      backToTop: "Back to Top"
    }
  }
};

// --------------------------------------------------------------------
// DATA KEAHLIAN (SKILLS)
// --------------------------------------------------------------------
export interface SkillCategoryData {
  id: string;
  category: { id: string; en: string };
  desc: { id: string; en: string };
  icon: string;
  pills: Array<{
    name: string;
    dotColor: string;
  }>;
}

export const skillCategoriesData: SkillCategoryData[] = [
  {
    id: "ai-ml",
    category: { id: "Machine Learning & AI", en: "Machine Learning & AI" },
    desc: {
      id: "Merancang model prediktif, deep learning, NLP, dan integrasi fitur kecerdasan buatan cerdas.",
      en: "Designing predictive models, deep learning pipelines, NLP, and intelligent AI feature integrations."
    },
    icon: "ai",
    pills: [
      { name: "PyTorch", dotColor: "#ef4444" },
      { name: "TensorFlow", dotColor: "#f97316" },
      { name: "Scikit-Learn", dotColor: "#3b82f6" },
      { name: "OpenAI / LLMs", dotColor: "#22d3ee" },
      { name: "Deep Learning", dotColor: "#a855f7" },
      { name: "Computer Vision", dotColor: "#06b6d4" }
    ]
  },
  {
    id: "data-science",
    category: { id: "Data Science & Analytics", en: "Data Science & Analytics" },
    desc: {
      id: "Eksplorasi data mendalam (EDA), statistik terapan, data pipeline, dan visualisasi metrik bisnis.",
      en: "In-depth exploratory data analysis (EDA), statistical modeling, ETL pipelines, and interactive BI metrics."
    },
    icon: "data",
    pills: [
      { name: "Python", dotColor: "#eab308" },
      { name: "Pandas & NumPy", dotColor: "#2563eb" },
      { name: "SQL & PostgreSQL", dotColor: "#0284c7" },
      { name: "BigQuery", dotColor: "#06b6d4" },
      { name: "Plotly / Seaborn", dotColor: "#38bdf8" },
      { name: "Feature Engineering", dotColor: "#22d3ee" }
    ]
  },
  {
    id: "web-cloud",
    category: { id: "Web & Cloud Engineering", en: "Web & Cloud Engineering" },
    desc: {
      id: "Membangun antarmuka web modern responsif, RESTful & FastAPI services, serta kontainerisasi.",
      en: "Building responsive modern web interfaces, RESTful & FastAPI services, and containerized deployments."
    },
    icon: "code",
    pills: [
      { name: "React / Next.js", dotColor: "#06b6d4" },
      { name: "Astro Framework", dotColor: "#f97316" },
      { name: "TypeScript", dotColor: "#3b82f6" },
      { name: "FastAPI / Node.js", dotColor: "#00f5ff" },
      { name: "Tailwind CSS", dotColor: "#38bdf8" },
      { name: "Docker", dotColor: "#0284c7" }
    ]
  }
];

// --------------------------------------------------------------------
// DATA TIMELINE PENGALAMAN & EDUKASI (EXPERIENCE & JOURNEY)
// --------------------------------------------------------------------
export interface TimelineEntry {
  period: string;
  locationType: {
    id: string;
    en: string;
  };
  title: {
    id: string;
    en: string;
  };
  subtitle: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  tags: string[];
}

export const journeyTimeline: TimelineEntry[] = [
  {
    period: "2024 — Sekarang",
    locationType: {
      id: "Malang · On-site",
      en: "Malang · On-site"
    },
    title: {
      id: "S1 Teknik Informatika",
      en: "B.Sc in Computer Science & Informatics"
    },
    subtitle: {
      id: "Universitas Brawijaya, Malang",
      en: "Brawijaya University, Malang"
    },
    description: {
      id: "Memperdalam fundamental ilmu komputer, algoritma machine learning, struktur data, rekayasa perangkat lunak, dan arsitektur sistem cerdas.",
      en: "Deepening core computer science foundations, machine learning algorithms, data structures, software engineering, and intelligent system architectures."
    },
    tags: ["Python", "Machine Learning", "Algorithms", "Web Systems", "Data Structures"]
  },
  {
    period: "2024 — Sekarang",
    locationType: {
      id: "Remote",
      en: "Remote"
    },
    title: {
      id: "AI/ML & Applied Data Science Engineering",
      en: "AI/ML & Applied Data Science Engineering"
    },
    subtitle: {
      id: "Riset Mandiri & Proyek Terapan",
      en: "Self-Directed Research & Applied Projects"
    },
    description: {
      id: "Mengembangkan pipeline machine learning prediktif, pemrosesan bahasa alami (NLP), dan dashboard analitik berbasis web untuk kebutuhan nyata.",
      en: "Developing predictive machine learning pipelines, natural language processing (NLP) models, and web-based data analytics dashboards for real-world impact."
    },
    tags: ["PyTorch", "Scikit-Learn", "FastAPI", "Pandas", "Next.js", "Docker"]
  },
  {
    period: "2023 — 2024",
    locationType: {
      id: "Hybrid",
      en: "Hybrid"
    },
    title: {
      id: "Data Analytics & Full-Stack Engineer",
      en: "Data Analytics & Full-Stack Engineer"
    },
    subtitle: {
      id: "TechNova Solusindo",
      en: "TechNova Solusindo"
    },
    description: {
      id: "Merancang visualisasi metrik bisnis interaktif, integrasi API analitik real-time, serta mengoptimalkan performa aplikasi web hingga skor Core Web Vitals 98+.",
      en: "Designed interactive business metric visualizations, real-time analytics API integrations, and optimized web performance to a 98+ Core Web Vitals score."
    },
    tags: ["Python", "SQL", "React", "TypeScript", "Plotly", "REST API"]
  },
  {
    period: "2022 — 2023",
    locationType: {
      id: "Remote",
      en: "Remote"
    },
    title: {
      id: "Full-Stack Web Developer",
      en: "Full-Stack Web Developer"
    },
    subtitle: {
      id: "Inovasi Kreasi Digital",
      en: "Inovasi Kreasi Digital"
    },
    description: {
      id: "Membangun sistem web interaktif, RESTful API terstruktur, dashboard manajemen data terintegrasi, dan arsitektur database relasional yang aman.",
      en: "Built interactive web systems, structured RESTful APIs, integrated data management dashboards, and robust relational database schemas."
    },
    tags: ["Node.js", "Express", "PostgreSQL", "JavaScript", "Tailwind CSS"]
  }
];

// --------------------------------------------------------------------
// DATA PROYEK (PROJECTS) - DENGAN TOOL DETAILS & ICON LOGO
// --------------------------------------------------------------------
export interface ProjectTool {
  name: string;
  icon: string;
  color: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: {
    id: string;
    en: string;
  };
  image: string;
  tools: ProjectTool[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "neurovision-ai-classifier",
    title: "NeuroVision AI",
    description: {
      id: "Pipeline Deep Learning berbasis CNN dan Transfer Learning dengan akurasi 96.8% untuk deteksi anomali citra medis, dilengkapi inference REST API berkecepatan tinggi.",
      en: "CNN and Transfer Learning deep learning pipeline achieving 96.8% diagnostic accuracy for anomaly detection, powered by high-speed inference REST API."
    },
    image: "/images/projects/project-1.jpg",
    tools: [
      { name: "Python", icon: "🐍", color: "#eab308" },
      { name: "PyTorch", icon: "🔥", color: "#ef4444" },
      { name: "FastAPI", icon: "⚡", color: "#00f5ff" },
      { name: "OpenCV", icon: "👁️", color: "#06b6d4" },
      { name: "Scikit-Learn", icon: "⚙️", color: "#3b82f6" },
      { name: "Docker", icon: "🐳", color: "#0284c7" }
    ],
    liveUrl: "https://example.com/demo-ai",
    githubUrl: "https://github.com/hafizh/neurovision-ai"
  },
  {
    id: "datapulse-analytics-dashboard",
    title: "DataPulse BI",
    description: {
      id: "Platform data science interaktif yang mengotomatisasi Exploratory Data Analysis (EDA), peramalan tren deret waktu (time series), dan visualisasi KPI real-time.",
      en: "Interactive data science platform automating Exploratory Data Analysis (EDA), time-series statistical forecasting, and real-time executive KPI visualization."
    },
    image: "/images/projects/project-3.jpg",
    tools: [
      { name: "Python", icon: "🐍", color: "#eab308" },
      { name: "Pandas", icon: "🐼", color: "#2563eb" },
      { name: "Plotly", icon: "📊", color: "#38bdf8" },
      { name: "PostgreSQL", icon: "🐘", color: "#0284c7" },
      { name: "React", icon: "⚛️", color: "#06b6d4" },
      { name: "FastAPI", icon: "⚡", color: "#00f5ff" }
    ],
    liveUrl: "https://example.com/demo-datapulse",
    githubUrl: "https://github.com/hafizh/datapulse-analytics"
  },
  {
    id: "nexus-ai-workspace",
    title: "NexusAI Workspace",
    description: {
      id: "Aplikasi web cerdas modern dengan orkestrasi LLM, pencarian dokumen berbasis vektor embeddings, streaming respon instan, dan antarmuka dark glassmorphic responsif.",
      en: "Modern intelligent web app featuring LLM orchestration, vector embedding semantic search, instant streaming tokens, and responsive dark glassmorphic UI."
    },
    image: "/images/projects/project-2.jpg",
    tools: [
      { name: "Next.js", icon: "▲", color: "#ffffff" },
      { name: "Astro", icon: "🚀", color: "#f97316" },
      { name: "TypeScript", icon: "🔷", color: "#3b82f6" },
      { name: "LangChain", icon: "🦜", color: "#22d3ee" },
      { name: "Tailwind CSS", icon: "🌊", color: "#38bdf8" },
      { name: "Supabase", icon: "⚡", color: "#06b6d4" }
    ],
    liveUrl: "https://example.com/demo-nexus",
    githubUrl: "https://github.com/hafizh/nexus-ai-workspace"
  }
];

export const avatarUrl = "/images/profile/avatar.png";
export const resumeUrl = "/cv/Hafizh-Resume.pdf";
