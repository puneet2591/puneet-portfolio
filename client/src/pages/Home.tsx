import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ExternalLink, Code2, Briefcase, Award, ChevronDown, Download, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

/**
 * Modern Minimalist Portfolio Design
 * Design Philosophy: Clean, professional aesthetic with smooth animations
 * Color Scheme: Deep slate blue (#1e293b) + Vibrant cyan (#06b6d4)
 * Typography: Poppins for headings, Inter for body
 * Dark Mode: Full support with theme toggle in navigation
 */

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(() => new Set());
  const [isThemeTransitioning, setIsThemeTransitioning] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleThemeToggle = () => {
    setIsThemeTransitioning(true);
    if (toggleTheme) {
      toggleTheme();
    }
    setTimeout(() => setIsThemeTransitioning(false), 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(Array.from(prev).concat(entry.target.id)));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { category: "Languages", items: ["Swift", "Objective-C", "UIKit", "SwiftUI"] },
    { category: "Architecture", items: ["MVVM", "Clean Architecture", "SOLID Principles", "MVC"] },
    { category: "Concurrency", items: ["Async/Await", "Grand Central Dispatch", "Combine"] },
    { category: "Networking", items: ["REST APIs", "URLSession", "Codable", "JSON Parsing"] },
    { category: "Data Storage", items: ["Core Data", "UserDefaults", "Keychain"] },
    { category: "DevOps", items: ["GitHub Actions", "Fastlane", "GitFlow", "CI/CD"] },
  ];

  const experience = [
    {
      title: "Senior iOS Engineer",
      company: "Tata Consultancy Service",
      period: "Jul 2023 - Jun 2025",
      highlights: [
        "Developed scalable iOS applications using Swift and SwiftUI",
        "Reduced API latency by 25% through optimization",
        "Implemented Swift Concurrency (async/await) and Combine",
      ],
      tech: ["Swift", "SwiftUI", "Combine", "Async/Await", "GitHub Actions", "Firebase", "REST APIs", "URLSession", "MVVM", "Core Data", "Fastlane", "XCTest"],
    },
    {
      title: "Senior Software Engineer iOS",
      company: "Forgeahead Solutions Pvt Ltd",
      period: "Nov 2020 - May 2023",
      highlights: [
        "Designed modular architecture using MVVM and Clean Architecture",
        "Architected CI pipelines using GitHub Actions",
        "Managed dependencies with SPM and CocoaPods",
      ],
      tech: ["Swift", "SwiftUI", "Combine", "XCTest", "Firebase", "MVVM", "Clean Architecture", "SPM", "CocoaPods", "GitHub Actions", "Fastlane", "GitFlow", "CI/CD"],
    },
    {
      title: "iOS Developer",
      company: "iMouns Web Solutions",
      period: "Mar 2020 - Nov 2020",
      highlights: [
        "Engineered high-performance native iOS applications",
        "Collaborated with product and design teams",
        "Integrated RESTful APIs and cloud-based solutions",
      ],
      tech: ["UIKit", "Storyboard", "MVVM", "Git", "REST APIs", "URLSession", "Core Data", "Codable", "JSON Parsing", "Xcode", "Agile"],
    },
    {
      title: "iOS Developer",
      company: "Biz4Solutions Pvt Ltd",
      period: "Mar 2016 - Dec 2019",
      highlights: [
        "Managed end-to-end App Store release cycles",
        "Implemented CI/CD pipelines and automated testing",
        "Followed Agile/Scrum methodologies",
      ],
      tech: ["UIKit", "Swift", "Objective-C", "Firebase", "XCTest", "MVC", "Git", "App Store Connect", "Instruments", "Debugging", "Performance Optimization", "Agile/Scrum"],
    },
  ];

  const projects = [
    {
      title: "Sayge",
      description: "A new way to learn. Sayge is a peer-to-peer learning app on iOS and Android that allows people to teach, learn, and make money. Built with modern iOS architecture and real-time synchronization.",
      tech: ["Swift", "SwiftUI", "Firebase", "Real-time Database"],
    },
    {
      title: "BoomID",
      description: "The BoomID platform employs cutting-edge Identity Assurance measures to safeguard businesses and consumers from threats. It offers robust protection, ensuring security and trust in digital interactions.",
      tech: ["Swift", "Security", "Authentication", "Encryption"],
    },
    {
      title: "Citi Bank",
      description: "Citi Mobile app provides the joy of banking at your fingertips. It is a one-stop solution to manage your accounts, investments and credit cards on your iPhone with seamless UX.",
      tech: ["Swift", "UIKit", "Core Data", "REST APIs"],
    },
    {
      title: "Ember",
      description: "Powered by AI, EMBER is a mobile telehealth platform that connects patients with medical professionals within minutes. It offers quick, personalized care through a simple, easy-to-use app.",
      tech: ["Swift", "SwiftUI", "AI Integration", "Real-time Communication"],
    },
    {
      title: "Harmony Decision Maker",
      description: "HARMONY Decision Maker guides you through the 5 Steps of the ProConCloud process to help you make better faster decisions when it really matters.",
      tech: ["Swift", "MVVM", "Core Data", "Analytics"],
    },
    {
      title: "ZeCharger",
      description: "Find a phone charger within 5 minutes wherever you are (A 100% free service). ZeCharger recharges your smartphones in more than 1000 locations and makes your connected life more beautiful.",
      tech: ["Swift", "Maps API", "Location Services", "Networking"],
    },
    {
      title: "CI Pipeline for iOS App",
      description: "Automated CI pipeline using GitHub Actions with build, test, and deployment workflows. Integrated Fastlane for build automation and improved release reliability.",
      tech: ["GitHub Actions", "Fastlane", "Swift", "CI/CD"],
      link: "https://github.com/puneet2591/Combine",
    },
  ];

  const certifications = [
    "Github Actions for CI/CD - Build, Test and Deploy",
    "SwiftUI Masterclass",
    "AWS Cloud Computing",
    "Java Masterclass Certification",
  ];

  const achievements = [
    "95% on-time delivery rate",
    "40% increase in team productivity",
    "50% reduction in production issues",
    "25% reduction in API latency",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? (theme === "dark" ? "bg-slate-900 shadow-lg" : "bg-white shadow-lg") : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4 md:py-6">
          <div className="text-xl font-bold text-primary">PM</div>
          <div className="hidden md:flex gap-8">
            <a href="#about" onClick={handleSmoothScroll} className="text-sm font-medium hover:text-accent transition-colors cursor-pointer">
              About
            </a>
            <a href="#skills" onClick={handleSmoothScroll} className="text-sm font-medium hover:text-accent transition-colors cursor-pointer">
              Skills
            </a>
            <a href="#experience" onClick={handleSmoothScroll} className="text-sm font-medium hover:text-accent transition-colors cursor-pointer">
              Experience
            </a>
            <a href="#projects" onClick={handleSmoothScroll} className="text-sm font-medium hover:text-accent transition-colors cursor-pointer">
              Projects
            </a>
            <a href="#contact" onClick={handleSmoothScroll} className="text-sm font-medium hover:text-accent transition-colors cursor-pointer">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleThemeToggle}
              className={`p-2 rounded-lg hover:bg-accent/10 transition-all duration-300 ${
                isThemeTransitioning ? "scale-110 rotate-180" : "scale-100 rotate-0"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-accent transition-all duration-300" />
              ) : (
                <Moon className="w-5 h-5 text-primary transition-all duration-300" />
              )}
            </button>
            <a href="mailto:puneetonly12@gmail.com">
              <Button size="sm" className="bg-accent hover:bg-accent/90">
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663533413802/MykXYinYPSXxGYFdbcxT8L/hero-gradient-bg-bP39dWrrao8rjQPga36yte.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={`absolute inset-0 ${theme === "dark" ? "bg-slate-900/90" : "bg-white/95"}`}></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block bg-accent/10 px-4 py-2 rounded-full">
                <span className={`text-base md:text-lg font-semibold ${
                  theme === "dark" 
                    ? "bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent" 
                    : "text-accent"
                }`}>
                  Senior iOS Engineer
                </span>
              </div>
              <h1 className={`text-6xl md:text-7xl font-bold leading-tight ${
                theme === "dark"
                  ? "bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent"
                  : "text-primary"
              }`}>
                Puneet Mahajan
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
                Building scalable, high-performance iOS applications with 9+ years of expertise in Swift, SwiftUI, and modern architecture patterns. Passionate about clean code and exceptional user experiences.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="mailto:puneetonly12@gmail.com">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </Button>
                </a>
                <a href="https://github.com/puneet2591" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </a>
              </div>
              <div className="flex gap-6 pt-4">
                <a
                  href="https://www.linkedin.com/in/puneetmahajan25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/puneet2591"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Profile Image */}
            <div className="flex justify-center animate-fade-in-delayed">
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl"></div>
                <img
                  src="https://puneet2591.github.io/assets/img/prof_pic.jpg?aa85aa93814f3ce7c79f73eb912d9ab3"
                  alt="Puneet Mahajan"
                  className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-accent" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 md:py-32 ${theme === "dark" ? "bg-slate-950" : "bg-white"}`} data-animate>
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">About Me</h2>
              <a href="/Puneet_Mahajan_CV.pdf" download>
                <Button className="bg-accent hover:bg-accent/90 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </a>
            </div>
            <p className={`text-lg leading-relaxed ${theme === "dark" ? "text-slate-200" : "text-foreground/80"}`}>
              I'm a Senior iOS Developer based in Pune, India, with 9+ years of experience crafting innovative mobile applications. My expertise spans Swift, SwiftUI, UIKit, and modern architectural patterns like MVVM and Clean Architecture.
            </p>
            <p className={`text-lg leading-relaxed ${theme === "dark" ? "text-slate-200" : "text-foreground/80"}`}>
              Throughout my career, I've consistently delivered high-quality products on time, achieving a 95% on-time delivery rate. I'm passionate about mentoring junior developers, optimizing performance, and implementing robust CI/CD pipelines using GitHub Actions and Fastlane.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {achievements.map((achievement, idx) => (
                <div key={idx} className={`p-4 rounded-lg ${theme === "dark" ? "bg-slate-800 border border-slate-700" : "bg-slate-100"}`}>
                  <p className={`text-sm font-medium ${theme === "dark" ? "text-slate-100" : "text-accent"}`}>{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 md:py-32 ${theme === "dark" ? "bg-slate-900" : "bg-slate-50"}`} data-animate>
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-12 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">Technical Skills</h2>
              <a href="/Puneet_Mahajan_CV.pdf" download>
                <Button className="bg-accent hover:bg-accent/90 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.category}
                  className={`p-6 rounded-lg border ${
                    theme === "dark"
                      ? "bg-slate-800 border-slate-700"
                      : "bg-white border-slate-200"
                  } hover:shadow-lg transition-shadow`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 className="w-5 h-5 text-accent" />
                    <h3 className={`font-bold text-lg ${theme === "dark" ? "text-slate-100" : "text-foreground"}`}>{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          theme === "dark"
                            ? "bg-cyan-500/20 text-cyan-300"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 md:py-32 ${theme === "dark" ? "bg-slate-950" : "bg-white"}`} data-animate>
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">Professional Experience</h2>
              <a href="/Puneet_Mahajan_CV.pdf" download>
                <Button className="bg-accent hover:bg-accent/90 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </a>
            </div>
            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-lg border ${
                    theme === "dark"
                      ? "bg-slate-800 border-slate-700"
                      : "bg-slate-50 border-slate-200"
                  } hover:shadow-lg transition-shadow`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-blue-400" : "text-primary"}`}>{exp.title}</h3>
                      <p className={`font-medium ${theme === "dark" ? "text-cyan-400" : "text-accent"}`}>{exp.company}</p>
                      <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>{exp.period}</p>
                    </div>
                    <Briefcase className="w-6 h-6 text-accent flex-shrink-0" />
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, hidx) => (
                      <li key={hidx} className={`text-sm flex gap-3 ${theme === "dark" ? "text-slate-200" : "text-slate-700"}`}>
                        <span className={theme === "dark" ? "text-cyan-400" : "text-accent"}>•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          theme === "dark"
                            ? "bg-cyan-500/20 text-cyan-300"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 md:py-32 ${theme === "dark" ? "bg-slate-800" : "bg-slate-50"}`} data-animate>
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className={`rounded-lg overflow-hidden border transition-all hover:shadow-xl hover:-translate-y-1 ${
                    theme === "dark"
                      ? "bg-slate-900 border-slate-700"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-primary flex-1">{project.title}</h3>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            theme === "dark"
                              ? "bg-accent/20 text-accent"
                              : "bg-accent/10 text-accent"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className={`py-20 md:py-32 ${theme === "dark" ? "bg-slate-900" : "bg-white"}`} data-animate>
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Certifications & Awards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-lg flex items-start gap-4 border ${
                    theme === "dark"
                      ? "bg-slate-800 border-slate-700"
                      : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <Award className={`w-6 h-6 flex-shrink-0 mt-1 ${theme === "dark" ? "text-cyan-400" : "text-accent"}`} />
                  <p className={`font-medium ${theme === "dark" ? "text-slate-100" : "text-foreground"}`}>{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 md:py-32 ${theme === "dark" ? "bg-slate-800" : "bg-slate-50"}`} data-animate>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">Let's Work Together</h2>
              <p className={`text-lg ${theme === "dark" ? "text-slate-200" : "text-slate-600"}`}>
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:puneetonly12@gmail.com">
                <Button className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/puneetmahajan25" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className={`border-2 w-full sm:w-auto ${
                  theme === "dark"
                    ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
                    : "border-accent text-accent hover:bg-accent/10"
                }`}>
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </a>
              <a href="https://github.com/puneet2591" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className={`border-2 w-full sm:w-auto ${
                  theme === "dark"
                    ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
                    : "border-accent text-accent hover:bg-accent/10"
                }`}>
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${theme === "dark" ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`}>
        <div className="container text-center">
          <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
            © 2025 Puneet Mahajan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
