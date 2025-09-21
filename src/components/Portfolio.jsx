import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ArrowRight,
  Code,
  Database,
  Smartphone,
  Globe,
  Zap,
  Shield,
  Users,
  Award,
} from "lucide-react";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animatedCounts, setAnimatedCounts] = useState({
    projects: 0,
    performance: 0,
    clients: 0,
    experience: 0,
  });

  // Intersection Observer for animations
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Animated counter hook
  useEffect(() => {
    if (visibleSections.has("stats")) {
      const targets = {
        projects: 120,
        performance: 98,
        clients: 24,
        experience: 3,
      };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      Object.keys(targets).forEach((key) => {
        const target = targets[key];
        let current = 0;
        const increment = target / steps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setAnimatedCounts((prev) => ({
            ...prev,
            [key]: Math.floor(current),
          }));
        }, stepTime);
      });
    }
  }, [visibleSections]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  // Logo Component with Animation
  const AnimatedLogo = () => (
    <div className="relative group cursor-pointer">
      <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-teal-500 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-teal-600 rounded-xl blur opacity-75 animate-pulse"></div>
        <span className="relative text-white font-bold text-xl">AS</span>
      </div>
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
    </div>
  );

  const skills = [
    {
      name: "TypeScript",
      level: "Expert",
      percentage: 95,
      icon: Code,
      category: "Frontend",
    },
    {
      name: "React / Next.js",
      level: "Advanced",
      percentage: 90,
      icon: Globe,
      category: "Frontend",
    },
    {
      name: "Node.js / Express",
      level: "Advanced",
      percentage: 85,
      icon: Database,
      category: "Backend",
    },
    {
      name: "PostgreSQL / Prisma",
      level: "Advanced",
      percentage: 80,
      icon: Database,
      category: "Database",
    },
    {
      name: "Mobile Development",
      level: "Strong",
      percentage: 75,
      icon: Smartphone,
      category: "Mobile",
    },
    {
      name: "DevOps / Docker",
      level: "Strong",
      percentage: 80,
      icon: Shield,
      category: "DevOps",
    },
    {
      name: "API Design",
      level: "Strong",
      percentage: 85,
      icon: Zap,
      category: "Backend",
    },
    {
      name: "Team Leadership",
      level: "Advanced",
      percentage: 90,
      icon: Users,
      category: "Soft Skills",
    },
  ];
  const projects = [
    {
      title: "Amazon MCF Integration",
      image: "/images/projects/amazon-fulfillment/amazon.png",
      category: "E-commerce Integration",
      description:
        "Seamless integration of Amazon’s fulfillment network with Webflow and WooCommerce stores.",
      longDescription:
        "Custom integration enabling Webflow and WooCommerce stores to connect directly with Amazon’s Multi-Channel Fulfillment (MCF) services. Provides fast shipping, real-time order syncing, and automated inventory management for e-commerce businesses.",
      tech: ["Next.js", "Node.js", "AWS", "REST APIs", "Stripe"],
      features: [
        "Amazon MCF integration",
        "Real-time order & inventory sync",
        "Automated shipping management",
        "Customizable e-commerce workflows",
      ],
      color: "from-orange-400 via-yellow-500 to-red-500",
      metrics: {
        uptime: "99.9%",
        storesIntegrated: "200+",
        ordersProcessed: "1M+",
      },
      liveUrl: "https://e-commerce-ten-xi-61.vercel.app/",
      githubUrl: "https://github.com/ahmed12g4/E-commerce.git",
      caseStudyUrl: null,
    },

    {
      title: "University Management System",

      image:
        "/images/projects/university-assignments/Screenshot 2025-09-10 094725.png",
      category: "Education",
      description:
        "Comprehensive academic management platform with student portal, grade management, and automated telegram notifications.",
      longDescription:
        "Full-stack academic management system handling course enrollment, assignment submissions, grade tracking, and automated communication.",
      tech: [".NET", "React", "SQL Server", "Telegram API", "Azure"],
      features: [
        "Student portal",
        "Grade management",
        "Auto notifications",
        "Course tracking",
      ],
      color: "from-blue-400 via-indigo-500 to-cyan-500",
      metrics: { students: "5K+", courses: "200+", satisfaction: "95%" },

      liveUrl: "https://university-assignments.vercel.app/",
      githubUrl: "https://github.com/ahmed12g4/university-assignments.git",
      caseStudyUrl: null,
    },
    {
      title: "Finance Dashboard",
      image: "/images/projects/my-finance/Screenshot 2025-09-17 224427.png",
      category: "Financial Analytics",
      description:
        "Comprehensive financial dashboard with real-time crypto data, portfolio tracking, and expense management analytics.",
      longDescription:
        "Modern financial dashboard providing users with complete portfolio overview, real-time cryptocurrency prices, transaction history, and detailed expense breakdown with interactive charts and analytics.",
      tech: ["React", "Recharts", "JavaScript", "CSS3", "CoinGecko API"],
      features: [
        "Real-time crypto data",
        "Portfolio tracking",
        "Expense analytics",
        "Responsive design",
      ],
      color: "from-blue-400 via-indigo-500 to-purple-500",
      metrics: {
        balance: "$205K+",
        cryptoAssets: "4",
        monthlyGrowth: "+15.7%",
      },
      liveUrl: "https://finance-dashboard-seven-phi.vercel.app/",
      githubUrl: "https://github.com/ahmed12g4/-FinanceDashboard.git",
      caseStudyUrl: null,
    },
    {
      title: "Tomato — Food Ordering Platform",

      image: "/images/projects/food/download.png",
      category: "Food Tech",
      description:
        "Complete restaurant ordering ecosystem with real-time tracking, payment integration, and admin dashboard. Built for scale with microservices architecture.",
      longDescription:
        "A comprehensive food delivery platform featuring restaurant management, real-time order tracking, integrated payment processing, and advanced analytics dashboard.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Stripe", "WebSockets"],
      features: [
        "Real-time tracking",
        "Payment integration",
        "Admin dashboard",
        "Mobile responsive",
      ],
      color: "from-orange-400 via-red-500 to-pink-500",
      metrics: { users: "10K+", orders: "50K+", uptime: "99.9%" },
      // أضف هذه الروابط ↓
      liveUrl: "https://tomato-v1.vercel.app/",
      githubUrl: "https://github.com/ahmed12g4/Food-Del.git",
      caseStudyUrl: null,
    },
    {
      title: "EduBridge — Learning Platform",
      // أضف هذا السطر ↓
      image: "/images/projects/edubridge/download (1).png",
      category: "EdTech", // أضف الفئة
      description:
        "Modern e-learning platform with interactive courses, progress tracking, and AI-powered recommendations.",
      longDescription:
        "Comprehensive learning management system with video streaming, interactive quizzes, progress analytics, and personalized learning paths.",
      tech: ["Next.js", "PostgreSQL", "Prisma", "AWS S3", "Redis"],
      features: [
        "Video streaming",
        "Progress tracking",
        "AI recommendations",
        "Mobile app",
      ],
      color: "from-violet-400 via-purple-500 to-indigo-500",
      metrics: { learners: "15K+", courses: "500+", completion: "78%" },
      // أضف هذه الروابط ↓
      liveUrl: "https://edubridge-delta.vercel.app/",
      githubUrl: "https://github.com/ahmed12g4/Edubridge.git",
      caseStudyUrl: null,
    },
    {
      title: "Interactive Form Builder",
      // أضف هذا السطر ↓
      image: "/images/projects/multi-step/preview.jpg",
      category: "No-Code Tools", // أضف الفئة
      description:
        "Drag-and-drop form builder with advanced validation, conditional logic, and real-time collaboration features.",
      longDescription:
        "No-code form builder enabling users to create complex forms with conditional logic, multi-step workflows, and integration capabilities.",
      tech: ["React", "TypeScript", "Framer Motion", "Node.js", "MongoDB"],
      features: [
        "Drag & drop",
        "Conditional logic",
        "Real-time collab",
        "Analytics",
      ],
      color: "from-green-400 via-emerald-500 to-teal-500",
      metrics: { forms: "1K+", submissions: "100K+", conversion: "85%" },
      // أضف هذه الروابط ↓
      liveUrl: "https://ahmed12g4.github.io/Multi-step/",
      githubUrl: "https://github.com/ahmed12g4/Multi-step.git",
      caseStudyUrl: null,
    },
  ];
  const experience = [
    {
      title: "Full-Stack Engineer",
      company: "Tech Company (Remote)",
      period: "2022 — Present",
      location: "Cairo, Egypt (Remote)",
      description:
        "Building and scaling web applications with a focus on performance and user experience. Contributed to system architecture, automation, and cross-team collaboration.",
      achievements: [
        "Designed and maintained APIs for smooth system integration",
        "Improved database efficiency through query optimization and indexing",
        "Added real-time features using WebSockets to enhance user experience",
        "Introduced automated testing to improve code quality and stability",
      ],
      tech: ["React", "Node.js", "AWS", "Docker", "TypeScript"],
    },
    {
      title: " Full-Stack Developer",
      company: "Global Software Solutions",
      period: "2023 — Present",
      location: "Cairo, Egypt",
      description:
        "Developing high-performance microservices handling 1M+ daily requests. Leading API design and database optimization initiatives.",
      achievements: [
        "Designed and maintained APIs for smooth system integration",
        "Improved database efficiency through query optimization and indexing",
        "Added real-time features using WebSockets to enhance user experience",
        "BIntroduced automated testing to improve code quality and stability",
      ],
      tech: ["Node.js", "PostgreSQL", "GraphQL", "Redis", "Kubernetes"],
    },
    {
      title: "Frontend Architect",
      company: "Freelance & Consulting",
      period: "2022 — Present",
      location: "Freelance / Remote Projects",
      description:
        "Delivered 120+ projects for startups and enterprises worldwide. Specializing in performance optimization and modern web technologies.",
      achievements: [
        "Designed and maintained APIs for smooth system integration",
        "Improved database efficiency through query optimization and indexing",
        "Added real-time features using WebSockets to enhance user experience",
        "BIntroduced automated testing to improve code quality and stability",
      ],
      tech: ["React", "Next.js", "Vue.js", "Tailwind", "Vite"],
    },
  ];

  const services = [
    {
      title: "Full-Stack Development",
      description:
        "End-to-end web application development with modern technologies and best practices.",
      features: [
        "React/Next.js apps",
        "Node.js APIs",
        "Database design",
        "Cloud deployment",
      ],
      icon: Code,
    },
    {
      title: "Performance Optimization",
      description:
        "Advanced optimization techniques to achieve lightning-fast loading times.",
      features: [
        "Core Web Vitals",
        "Bundle optimization",
        "CDN setup",
        "Caching strategies",
      ],
      icon: Zap,
    },
    {
      title: "Mobile Development",
      description:
        "Cross-platform mobile applications with native performance.",
      features: [
        "React Native",
        "PWA development",
        "App store deployment",
        "Push notifications",
      ],
      icon: Smartphone,
    },
    {
      title: "DevOps & Infrastructure",
      description:
        "Scalable cloud infrastructure and automated deployment pipelines.",
      features: [
        "AWS/Azure setup",
        "Docker containers",
        "CI/CD pipelines",
        "Monitoring",
      ],
      icon: Shield,
    },
  ];

  const testimonials = [
    {
      text: "Ahmed transformed our outdated platform into a modern, lightning-fast application. Our user engagement increased by 180% and conversion rates jumped 45%. Exceptional work!",
      author: "Sarah Chen",
      role: "CTO @ TechVision",
      company: "TechVision",
      rating: 5,
    },
    {
      text: "Working with Ahmed was a game-changer. His attention to detail and technical expertise delivered beyond our expectations. The project was completed 2 weeks ahead of schedule.",
      author: "Marcus Rodriguez",
      role: "Product Lead @ InnovateLab",
      company: "InnovateLab",
      rating: 5,
    },
    {
      text: "Ahmed's full-stack expertise and leadership skills were instrumental in scaling our platform to handle 1M+ users. His code quality and documentation are outstanding.",
      author: "Emily Watson",
      role: "Founder @ StartupFlow",
      company: "StartupFlow",
      rating: 5,
    },
  ];

  return (
    <div
      className={`min-h-screen transition-all duration-500 relative overflow-hidden ${
        darkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-teal-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-500 rounded-full animate-bounce animation-delay-500"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-teal-500 rounded-full animate-bounce animation-delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-blue-500 rounded-full animate-bounce animation-delay-1500"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-cyan-500 rounded-full animate-bounce animation-delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          darkMode
            ? "bg-gray-900/90 backdrop-blur-xl border-gray-700"
            : "bg-white/90 backdrop-blur-xl border-gray-200"
        } border-b shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <AnimatedLogo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "about",
                "skills",
                "projects",
                "experience",
                "services",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-cyan-500 hover:scale-105 font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                  darkMode
                    ? "text-yellow-400 hover:bg-gray-800 bg-gray-800/50"
                    : "text-gray-600 hover:bg-gray-100 bg-white/50"
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={toggleMobileMenu}
                className={`md:hidden p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                  darkMode
                    ? "text-gray-300 hover:bg-gray-800 bg-gray-800/50"
                    : "text-gray-700 hover:bg-gray-100 bg-white/50"
                }`}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden transition-all duration-300 ${
              darkMode
                ? "bg-gray-900/95 backdrop-blur-xl border-gray-800"
                : "bg-white/95 backdrop-blur-xl border-gray-200"
            } border-t`}
          >
            <div className="px-4 py-6 space-y-4">
              {[
                "about",
                "skills",
                "projects",
                "experience",
                "services",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-4 py-3 rounded-xl capitalize transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? "text-gray-300 hover:bg-gray-800"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm ${
                  darkMode
                    ? "bg-gray-800/80 text-cyan-400 border border-cyan-500/20"
                    : "bg-white/80 text-cyan-700 border border-cyan-200"
                }`}
              >
                🚀 Full-Stack Developer
              </span>
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm ${
                  darkMode
                    ? "bg-gray-800/80 text-teal-400 border border-teal-500/20"
                    : "bg-white/80 text-teal-700 border border-teal-200"
                }`}
              >
                ⚡ Performance Expert
              </span>
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm ${
                  darkMode
                    ? "bg-gray-800/80 text-blue-400 border border-blue-500/20"
                    : "bg-white/80 text-blue-700 border border-blue-200"
                }`}
              >
                🎨 UI/UX Engineer
              </span>
            </div>

            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Crafting{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 bg-clip-text text-transparent animate-gradient">
                Digital Excellence
              </span>
              <br />
              with Modern Tech
            </h1>

            <p
              className={`text-xl sm:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I architect and develop{" "}
              <strong>high-performance web applications</strong> that deliver
              exceptional user experiences. From{" "}
              <em>pixel-perfect frontends</em> to{" "}
              <em>scalable backend systems</em> — bringing your vision to life
              with cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button
                onClick={() => scrollToSection("projects")}
                className="group bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore My Work
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`group px-8 py-4 rounded-2xl font-semibold text-lg border-2 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 ${
                  darkMode
                    ? "border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-cyan-500"
                    : "border-gray-300 text-gray-700 hover:bg-white hover:border-cyan-500"
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  Let's Work Together
                  <Mail
                    size={20}
                    className="group-hover:rotate-12 transition-transform duration-300"
                  />
                </span>
              </button>
            </div>

            {/* Enhanced Tech Stack */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {[
                { name: "TypeScript", color: "from-blue-400 to-blue-600" },
                { name: "React", color: "from-cyan-400 to-cyan-600" },
                { name: "Next.js", color: "from-gray-700 to-gray-900" },
                { name: "Node.js", color: "from-green-400 to-green-600" },
                { name: "PostgreSQL", color: "from-blue-500 to-indigo-600" },
                { name: "AWS", color: "from-orange-400 to-orange-600" },
              ].map((tech, index) => (
                <div
                  key={tech.name}
                  className={`group p-4 rounded-xl transition-all duration-500 hover:scale-110 cursor-pointer ${
                    darkMode
                      ? "bg-gray-800/60 hover:bg-gray-700/80"
                      : "bg-white/60 hover:bg-white/80"
                  } backdrop-blur-sm shadow-lg hover:shadow-xl`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`w-full h-2 bg-gradient-to-r ${tech.color} rounded-full mb-2 transform group-hover:scale-105 transition-transform duration-300`}
                  ></div>
                  <span
                    className={`text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={(el) => (sectionRefs.current.about = el)}
        className={`relative z-10 py-24 px-4 sm:px-6 lg:px-8 ${
          darkMode ? "bg-gray-800/30" : "bg-white/30"
        } backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              visibleSections.has("about")
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2
                  className={`text-4xl font-bold mb-8 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Hi, I'm Ahmed —
                  <span className="block mt-2 bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
                    I turn ideas into polished products.
                  </span>
                </h2>
                <p
                  className={`text-lg mb-8 leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  I focus on building web applications that are fast,
                  accessible, and easy to use. I enjoy working across the stack,
                  from designing smooth user interfaces to writing clean,
                  maintainable back-end code.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    {
                      icon: Zap,
                      title: "Lightning Fast",
                      desc: "98% avg Lighthouse score",
                    },
                    {
                      icon: Shield,
                      title: "Secure & Reliable",
                      desc: "99.9% uptime guarantee",
                    },
                    {
                      icon: Users,
                      title: "User-Centered",
                      desc: "Accessibility-first approach",
                    },
                    {
                      icon: Award,
                      title: "Quality Driven",
                      desc: "95%+ code coverage",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className={`group p-4 rounded-xl transition-all duration-500 hover:scale-105 ${
                        darkMode
                          ? "bg-gray-800/50 hover:bg-gray-700/60"
                          : "bg-white/50 hover:bg-white/70"
                      } backdrop-blur-sm`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <item.icon className="w-6 h-6 text-cyan-500 mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <h4
                        className={`font-semibold mb-1 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {item.title}
                      </h4>
                      <p
                        className={`text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg"></div>
                  <span
                    className={`font-semibold text-lg ${
                      darkMode ? "text-green-400" : "text-green-600"
                    }`}
                  >
                    Available for new projects
                  </span>
                </div>
              </div>

              <div className="relative">
                <div
                  className={`relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 ${
                    darkMode ? "bg-gray-800" : "bg-gray-100"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-teal-500 opacity-90"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-white text-6xl font-bold mb-4 animate-bounce">
                        AS
                      </div>
                      <div className="text-white/80 text-lg font-medium">
                        Full-Stack Developer
                      </div>
                    </div>
                  </div>
                  {/* Floating code elements */}
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-2 text-white text-xs font-mono">
                    &lt;/&gt; Clean Code
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg p-2 text-white text-xs font-mono">
                    ⚡ Fast Performance
                  </div>
                </div>

                {/* Floating achievement cards */}
                <div className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl transform -rotate-6 hover:rotate-0 transition-all duration-300">
                  <div className="text-2xl font-bold text-cyan-500">120+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Projects
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl transform rotate-6 hover:rotate-0 transition-all duration-300">
                  <div className="text-2xl font-bold text-teal-500">98%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Performance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={(el) => (sectionRefs.current.skills = el)}
        className={`relative z-10 py-24 px-4 sm:px-6 lg:px-8 ${
          darkMode ? "bg-gray-900/40" : "bg-gray-50/40"
        } backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              visibleSections.has("skills")
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h2
              className={`text-4xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              My Technical Arsenal
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              A comprehensive toolkit spanning frontend, backend, mobile, and
              DevOps technologies. Constantly evolving with the latest industry
              trends and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group relative p-6 rounded-2xl transition-all duration-700 hover:scale-105 cursor-pointer ${
                  darkMode
                    ? "bg-gray-800/60 hover:bg-gray-700/80 border border-gray-700 hover:border-cyan-500/50"
                    : "bg-white/60 hover:bg-white/90 border border-gray-200 hover:border-cyan-500/50"
                } backdrop-blur-sm shadow-lg hover:shadow-2xl ${
                  visibleSections.has("skills")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-xl mr-4 transition-all duration-300 group-hover:scale-110 ${
                      darkMode
                        ? "bg-gray-700 group-hover:bg-cyan-500/20"
                        : "bg-gray-100 group-hover:bg-cyan-500/20"
                    }`}
                  >
                    <skill.icon className="w-6 h-6 text-cyan-500" />
                  </div>
                  <div>
                    <h3
                      className={`font-bold text-lg ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {skill.name}
                    </h3>
                    <span
                      className={`text-sm px-2 py-1 rounded-full ${
                        darkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {skill.category}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className={`text-sm font-medium ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {skill.level}
                    </span>
                    <span
                      className={`text-sm font-bold ${
                        darkMode ? "text-cyan-400" : "text-cyan-600"
                      }`}
                    >
                      {skill.percentage}%
                    </span>
                  </div>
                  <div
                    className={`w-full h-3 rounded-full ${
                      darkMode ? "bg-gray-700" : "bg-gray-200"
                    } overflow-hidden`}
                  >
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full transition-all duration-1500 ease-out relative overflow-hidden"
                      style={{
                        width: visibleSections.has("skills")
                          ? `${skill.percentage}%`
                          : "0%",
                        transitionDelay: `${index * 150 + 300}ms`,
                      }}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                <div
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  } group-hover:text-cyan-500 transition-colors duration-300`}
                >
                  Proven in {skill.category.toLowerCase()} development
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section
        id="stats"
        ref={(el) => (sectionRefs.current.stats = el)}
        className={`relative z-10 py-24 px-4 sm:px-6 lg:px-8 ${
          darkMode ? "bg-gray-800/30" : "bg-white/30"
        } backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                label: "Projects Delivered",
                value: animatedCounts.projects,
                suffix: "+",
                icon: Award,
                color: "from-cyan-500 to-blue-500",
                description: "Successfully completed projects",
              },
              {
                label: "Performance Score",
                value: animatedCounts.performance,
                suffix: "%",
                icon: Zap,
                color: "from-green-500 to-emerald-500",
                description: "Average Lighthouse score",
              },
              {
                label: "Happy Clients",
                value: animatedCounts.clients,
                suffix: "+",
                icon: Users,
                color: "from-teal-500 to-cyan-500",
                description: "Satisfied customers worldwide",
              },
              {
                label: "Years Experience",
                value: animatedCounts.experience,
                suffix: "+",
                icon: Globe,
                color: "from-blue-500 to-indigo-500",
                description: "Professional development",
              },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`group text-center p-8 rounded-2xl transition-all duration-700 hover:scale-110 cursor-pointer ${
                  darkMode
                    ? "bg-gray-800/60 hover:bg-gray-700/80 border border-gray-700"
                    : "bg-white/60 hover:bg-white/90 border border-gray-200"
                } backdrop-blur-sm shadow-lg hover:shadow-2xl ${
                  visibleSections.has("stats")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`inline-flex p-4 rounded-2xl mb-4 bg-gradient-to-br ${stat.color} group-hover:scale-110 transition-all duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                <div
                  className={`text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.value}
                  {stat.suffix}
                </div>

                <div
                  className={`text-lg font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {stat.label}
                </div>

                <div
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  } group-hover:text-cyan-500 transition-colors duration-300`}
                >
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section - Complete Final Version */}
      <section
        id="projects"
        ref={(el) => (sectionRefs.current.projects = el)}
        className={`relative z-10 py-24 px-4 sm:px-6 lg:px-8 ${
          darkMode ? "bg-gray-900/40" : "bg-gray-50/40"
        } backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              visibleSections.has("projects")
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h2
              className={`text-4xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Featured Projects
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Showcase of innovative solutions built with cutting-edge
              technologies. Each project represents a unique challenge solved
              with creative engineering.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-105 cursor-pointer ${
                  darkMode
                    ? "bg-gray-800/60 hover:bg-gray-700/80 border border-gray-700"
                    : "bg-white/60 hover:bg-white/90 border border-gray-200"
                } backdrop-blur-sm shadow-xl hover:shadow-2xl ${
                  visibleSections.has("projects")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                } flex flex-col h-full`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Project Image Section */}
                <div className="relative h-48 overflow-hidden flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-200">
                  {project.image ? (
                    <>
                      {/* Optimized Image with Lazy Loading */}
                      <img
                        src={project.image}
                        alt={`${project.title} - Project Screenshot`}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to gradient background if image fails to load
                          e.target.style.display = "none";
                          e.target.nextElementSibling.style.display = "block";
                        }}
                      />

                      {/* Fallback Gradient (hidden by default) */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${
                          project.color || "from-gray-400 to-gray-600"
                        } flex items-center justify-center`}
                        style={{ display: "none" }}
                      >
                        <div className="text-white text-4xl font-bold opacity-20">
                          {project.title.charAt(0)}
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Default Gradient Background */
                    <div
                      className={`w-full h-full bg-gradient-to-br ${
                        project.color || "from-gray-400 to-gray-600"
                      } flex items-center justify-center transition-all duration-500 group-hover:scale-110`}
                    >
                      <div className="text-white text-4xl font-bold opacity-30">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                  )}

                  {/* Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent group-hover:from-black/40 transition-all duration-500"></div>

                  {/* Project Category Badge */}
                  {project.category && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-cyan-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                        {project.category}
                      </span>
                    </div>
                  )}

                  {/* Floating Metrics */}
                  <div className="absolute top-4 right-4 space-y-2 z-10">
                    {Object.entries(project.metrics || {})
                      .slice(0, 2)
                      .map(([key, value]) => (
                        <div
                          key={key}
                          className="bg-white/20 backdrop-blur-md rounded-lg px-3 py-1 text-white text-sm font-medium shadow-lg border border-white/10"
                        >
                          {value}
                        </div>
                      ))}
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Project Title */}
                  <div className="mb-4 min-h-[3rem] flex items-start">
                    <h3
                      className={`text-xl font-bold leading-tight ${
                        darkMode ? "text-white" : "text-gray-900"
                      } group-hover:text-cyan-500 transition-colors duration-300`}
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* Project Description */}
                  <div className="mb-4 min-h-[4.5rem] flex items-start">
                    <p
                      className={`text-sm leading-relaxed ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      } line-clamp-3`}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4 min-h-[4rem]">
                    <div className="grid grid-cols-2 gap-2">
                      {(project.features || []).slice(0, 4).map((feature) => (
                        <div
                          key={feature}
                          className={`text-xs px-2 py-1 rounded-full text-center transition-colors duration-300 ${
                            darkMode
                              ? "bg-gray-700 text-gray-300 group-hover:bg-gray-600"
                              : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                          }`}
                        >
                          ✓ {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="mb-6 min-h-[3rem]">
                    <div className="flex flex-wrap gap-1.5">
                      {(project.tech || []).slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 text-xs rounded-full font-medium transition-all duration-300 ${
                            darkMode
                              ? "bg-gray-700 text-cyan-400 border border-gray-600 group-hover:bg-cyan-900/50 group-hover:border-cyan-500"
                              : "bg-cyan-50 text-cyan-700 border border-cyan-200 group-hover:bg-cyan-100 group-hover:border-cyan-300"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto space-y-3">
                    {/* Primary CTA Button */}
                    <button
                      className={`w-full text-sm font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 group-hover:gap-4 ${
                        darkMode
                          ? "bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white"
                          : "bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white"
                      } shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                      onClick={() => {
                        if (project.liveUrl) {
                          window.open(project.liveUrl, "_blank");
                        }
                      }}
                    >
                      {project.liveUrl ? "View Live Demo" : "View Case Study"}
                      <ArrowRight size={16} />
                    </button>

                    {/* Secondary Action Buttons */}
                    {(project.githubUrl || project.caseStudyUrl) && (
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <button
                            className={`flex-1 text-sm py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                              darkMode
                                ? "bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white border border-gray-600"
                                : "bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 border border-gray-200"
                            }`}
                            onClick={() =>
                              window.open(project.githubUrl, "_blank")
                            }
                          >
                            <Github size={14} />
                            Code
                          </button>
                        )}
                        {project.caseStudyUrl && (
                          <button
                            className={`flex-1 text-sm py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                              darkMode
                                ? "bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white border border-gray-600"
                                : "bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 border border-gray-200"
                            }`}
                            onClick={() =>
                              window.open(project.caseStudyUrl, "_blank")
                            }
                          >
                            <ExternalLink size={14} />
                            Details
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Hover Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {(!projects || projects.length === 0) && (
            <div className="text-center py-12">
              <div
                className={`text-lg ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                No projects to display yet. Check back soon!
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section
        id="experience"
        ref={(el) => (sectionRefs.current.experience = el)}
        className={`relative z-10 py-24 px-4 sm:px-6 lg:px-8 ${
          darkMode ? "bg-gray-800/30" : "bg-white/30"
        } backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              visibleSections.has("experience")
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h2
              className={`text-4xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Professional Journey
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              A timeline of growth, innovation, and impact across diverse
              technology organizations.
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={exp.title}
                className={`group relative transition-all duration-700 hover:scale-105 ${
                  visibleSections.has("experience")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div
                  className={`relative p-8 rounded-3xl ${
                    darkMode
                      ? "bg-gray-800/60 hover:bg-gray-700/80 border border-gray-700"
                      : "bg-white/60 hover:bg-white/90 border border-gray-200"
                  } backdrop-blur-sm shadow-xl hover:shadow-2xl`}
                >
                  {/* Timeline connector */}
                  {index !== experience.length - 1 && (
                    <div
                      className={`absolute left-1/2 -bottom-4 w-px h-8 ${
                        darkMode ? "bg-gray-600" : "bg-gray-300"
                      } transform -translate-x-1/2`}
                    ></div>
                  )}

                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 text-white font-bold text-xl mb-4 group-hover:scale-110 transition-all duration-300`}
                      >
                        {exp.company
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </div>

                      <h3
                        className={`text-xl font-bold mb-2 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {exp.title}
                      </h3>

                      <div className={`text-cyan-500 font-semibold mb-2`}>
                        {exp.company}
                      </div>

                      <div
                        className={`text-sm mb-2 ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {exp.period}
                      </div>

                      <div
                        className={`text-sm flex items-center gap-1 ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description & Achievements */}
                    <div className="lg:col-span-2">
                      <p
                        className={`text-lg mb-6 leading-relaxed ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {exp.description}
                      </p>

                      <div className="mb-6">
                        <h4
                          className={`text-sm font-semibold mb-3 uppercase tracking-wide ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className={`flex items-start gap-3 ${
                                darkMode ? "text-gray-300" : "text-gray-600"
                              }`}
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4
                          className={`text-sm font-semibold mb-3 uppercase tracking-wide ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1 text-sm rounded-full ${
                                darkMode
                                  ? "bg-gray-700 text-cyan-400 border border-gray-600"
                                  : "bg-cyan-50 text-cyan-700 border border-cyan-200"
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        ref={(el) => (sectionRefs.current.services = el)}
        className={`relative z-10 py-24 px-4 sm:px-6 lg:px-8 ${
          darkMode ? "bg-gray-900/40" : "bg-gray-50/40"
        } backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              visibleSections.has("services")
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h2
              className={`text-4xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Services I Offer
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Comprehensive digital solutions from concept to deployment,
              ensuring your project succeeds at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group p-8 rounded-3xl transition-all duration-700 hover:scale-105 cursor-pointer ${
                  darkMode
                    ? "bg-gray-800/60 hover:bg-gray-700/80 border border-gray-700"
                    : "bg-white/60 hover:bg-white/90 border border-gray-200"
                } backdrop-blur-sm shadow-xl hover:shadow-2xl ${
                  visibleSections.has("services")
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br from-cyan-500 to-teal-500 group-hover:scale-110 transition-all duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3
                  className={`text-xl font-bold mb-4 ${
                    darkMode ? "text-white" : "text-gray-900"
                  } group-hover:text-cyan-500 transition-colors duration-300`}
                >
                  {service.title}
                </h3>

                <p
                  className={`text-sm mb-6 leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-2 text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section
        className={`relative z-10 py-24 px-4 sm:px-6 lg:px-8 ${
          darkMode ? "bg-gray-800/30" : "bg-white/30"
        } backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Client Success Stories
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Real feedback from amazing clients who trusted me with their
              vision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl transition-all duration-700 hover:scale-105 ${
                  darkMode
                    ? "bg-gray-800/60 hover:bg-gray-700/80 border border-gray-700"
                    : "bg-white/60 hover:bg-white/90 border border-gray-200"
                } backdrop-blur-sm shadow-xl hover:shadow-2xl`}
              >
                {/* Quote mark */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">"</span>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-sm flex items-center justify-center"
                    >
                      <span className="text-white text-xs">★</span>
                    </div>
                  ))}
                </div>

                <p
                  className={`text-lg mb-6 leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {testimonial.text}
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div
                      className={`font-semibold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {testimonial.author}
                    </div>
                    <div
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section
        id="contact"
        ref={(el) => (sectionRefs.current.contact = el)}
        className={`relative z-10 py-24 px-4 sm:px-6 lg:px-8 ${
          darkMode ? "bg-gray-900/40" : "bg-gray-50/40"
        } backdrop-blur-sm`}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              visibleSections.has("contact")
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h2
              className={`text-4xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Let's Create Something Amazing Together
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Ready to bring your vision to life? Let's discuss your project and
              explore the possibilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div
              className={`transform transition-all duration-1000 ${
                visibleSections.has("contact")
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div
                className={`p-8 rounded-3xl ${
                  darkMode
                    ? "bg-gray-800/60 border border-gray-700"
                    : "bg-white/60 border border-gray-200"
                } backdrop-blur-sm shadow-xl`}
              >
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        className={`block text-sm font-semibold mb-3 ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className={`w-full px-6 py-4 rounded-2xl border-2 transition-all duration-300 focus:scale-105 ${
                          darkMode
                            ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500 focus:bg-gray-700"
                            : "bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:bg-white"
                        } focus:outline-none backdrop-blur-sm`}
                      />
                    </div>

                    <div>
                      <label
                        className={`block text-sm font-semibold mb-3 ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className={`w-full px-6 py-4 rounded-2xl border-2 transition-all duration-300 focus:scale-105 ${
                          darkMode
                            ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500 focus:bg-gray-700"
                            : "bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:bg-white"
                        } focus:outline-none backdrop-blur-sm`}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-semibold mb-3 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Project Budget
                    </label>
                    <select
                      className={`w-full px-6 py-4 rounded-2xl border-2 transition-all duration-300 focus:scale-105 ${
                        darkMode
                          ? "bg-gray-700/50 border-gray-600 text-white focus:border-cyan-500 focus:bg-gray-700"
                          : "bg-white/50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:bg-white"
                      } focus:outline-none backdrop-blur-sm`}
                    >
                      <option>Select budget range</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000 - $50,000</option>
                      <option>$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-semibold mb-3 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Project Details *
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Tell me about your project vision, goals, and timeline..."
                      className={`w-full px-6 py-4 rounded-2xl border-2 transition-all duration-300 focus:scale-105 resize-none ${
                        darkMode
                          ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500 focus:bg-gray-700"
                          : "bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:bg-white"
                      } focus:outline-none backdrop-blur-sm`}
                    ></textarea>
                  </div>

                  <div
                    className={`text-sm flex items-center gap-2 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Typically respond within 2-4 hours
                  </div>

                  <button
                    type="submit"
                    className="group w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-500 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Send Message
                      <ArrowRight
                        size={20}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div
              className={`space-y-8 transform transition-all duration-1000 ${
                visibleSections.has("contact")
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              {/* Contact Methods */}
              <div
                className={`p-8 rounded-3xl ${
                  darkMode
                    ? "bg-gray-800/60 border border-gray-700"
                    : "bg-white/60 border border-gray-200"
                } backdrop-blur-sm shadow-xl`}
              >
                <h3
                  className={`text-2xl font-bold mb-6 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Get in Touch
                </h3>

                <div className="space-y-4">
                  <a
                    href="tel:01201225850"
                    className={`group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                      darkMode
                        ? "hover:bg-gray-700/60 text-gray-300"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-sm opacity-75">+20 120 122 5850</div>
                    </div>
                  </a>

                  <a
                    href="mailto:ahmedalaaseleem989@gmail.com"
                    className={`group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                      darkMode
                        ? "hover:bg-gray-700/60 text-gray-300"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-sm opacity-75">
                        ahmedalaaseleem989@gmail.com
                      </div>
                    </div>
                  </a>

                  <div
                    className={`flex items-center gap-4 p-4 rounded-2xl ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Location</div>
                      <div className="text-sm opacity-75">
                        Cairo, Egypt · Remote Worldwide
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div
                className={`p-8 rounded-3xl ${
                  darkMode
                    ? "bg-gray-800/60 border border-gray-700"
                    : "bg-white/60 border border-gray-200"
                } backdrop-blur-sm shadow-xl`}
              >
                <h3
                  className={`text-2xl font-bold mb-6 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Follow My Work
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://github.com/ahmed12g4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                      darkMode
                        ? "hover:bg-gray-700/60 text-gray-300"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Github size={18} className="text-white" />
                    </div>
                    <span className="font-medium">GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ahmed-seleem-6337b4333/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                      darkMode
                        ? "hover:bg-gray-700/60 text-gray-300"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Linkedin size={18} className="text-white" />
                    </div>
                    <span className="font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div
                className={`p-8 rounded-3xl ${
                  darkMode
                    ? "bg-gradient-to-br from-cyan-900/50 to-teal-900/50 border border-cyan-800"
                    : "bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-200"
                } backdrop-blur-sm shadow-xl`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg"></div>
                  <span
                    className={`font-bold text-lg ${
                      darkMode ? "text-green-400" : "text-green-600"
                    }`}
                  >
                    Currently Available
                  </span>
                </div>

                <div
                  className={`space-y-2 text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <div>🌍 Remote-first approach</div>
                  <div>🕐 UTC+2 / UTC+3 timezone</div>
                  <div>🗣️ English & Arabic fluent</div>
                  <div>⚡ Quick response guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer
        className={`relative z-10 py-16 px-4 sm:px-6 lg:px-8 border-t ${
          darkMode
            ? "bg-gray-900/60 border-gray-800"
            : "bg-white/60 border-gray-200"
        } backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Logo & Description */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <AnimatedLogo />
                <span
                  className={`text-2xl font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Ahmed Seleem
                </span>
              </div>
              <p
                className={`mb-6 leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Full-stack developer passionate about creating exceptional
                digital experiences with modern technologies and clean,
                maintainable code.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/ahmed12g4"
                  className="group p-3 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 hover:scale-110 transition-all duration-300"
                >
                  <Github size={20} className="text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmed-seleem-6337b4333/"
                  className="group p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 hover:scale-110 transition-all duration-300"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
                <a
                  href="mailto:ahmedalaaseleem989@gmail.com"
                  className="group p-3 rounded-xl bg-gradient-to-br from-red-500 to-pink-600 hover:scale-110 transition-all duration-300"
                >
                  <Mail size={20} className="text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className={`font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Quick Links
              </h4>
              <div className="space-y-3">
                {[
                  "About",
                  "Skills",
                  "Projects",
                  "Experience",
                  "Services",
                  "Contact",
                ].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className={`block text-left transition-colors hover:text-cyan-500 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4
                className={`font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Get In Touch
              </h4>
              <div className="space-y-3">
                <div
                  className={`flex items-center gap-3 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <Phone size={16} />
                  <span>+20 120 122 5850</span>
                </div>
                <div
                  className={`flex items-center gap-3 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <Mail size={16} />
                  <span>ahmedalaaseleem989@gmail.com</span>
                </div>
                <div
                  className={`flex items-center gap-3 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <MapPin size={16} />
                  <span>Cairo, Egypt</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`pt-8 border-t text-center ${
              darkMode
                ? "border-gray-800 text-gray-400"
                : "border-gray-200 text-gray-600"
            }`}
          >
            <p>
              © 2025 Ahmed Seleem. Crafted with 💙 using React, Tailwind CSS,
              and modern web technologies.
            </p>
          </div>
        </div>
      </footer>

      {/* Enhanced Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 p-4 rounded-2xl shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 z-50 ${
          darkMode
            ? "bg-gradient-to-br from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500"
            : "bg-gradient-to-br from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600"
        } text-white`}
      >
        <ChevronDown size={24} className="transform rotate-180" />
      </button>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1.2s ease-out;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animation-delay-500 {
          animation-delay: 500ms;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        .animation-delay-1500 {
          animation-delay: 1500ms;
        }
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Enhanced Scrollbar */
        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: ${darkMode
            ? "linear-gradient(180deg, #1f2937, #111827)"
            : "linear-gradient(180deg, #f8fafc, #e2e8f0)"};
          border-radius: 6px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #06b6d4, #0891b2);
          border-radius: 6px;
          border: 2px solid transparent;
          background-clip: content-box;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #0891b2, #0e7490);
          background-clip: content-box;
        }

        /* Glassmorphism effects */
        .backdrop-blur-sm {
          backdrop-filter: blur(8px);
        }

        .backdrop-blur-md {
          backdrop-filter: blur(12px);
        }

        .backdrop-blur-xl {
          backdrop-filter: blur(24px);
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
