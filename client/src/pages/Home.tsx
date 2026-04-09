import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ExternalLink, Code2, Briefcase, Award, ChevronDown, Download } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Modern Minimalist Portfolio Design
 * Design Philosophy: Clean, professional aesthetic with smooth animations
 * Color Scheme: Deep slate blue (#1e293b) + Vibrant cyan (#06b6d4)
 * Typography: Poppins for headings, Inter for body
 */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(() => new Set());

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
      tech: ["Swift", "SwiftUI", "Combine", "GitHub Actions", "Firebase"],
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
      tech: ["Swift", "SwiftUI", "Combine", "XCTest", "Firebase"],
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
      tech: ["UIKit", "Storyboard", "MVVM", "Git"],
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
      tech: ["UIKit", "Swift", "Objective-C", "Firebase", "XCTest"],
    },
  ];

  const projects = [
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
          scrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4 md:py-6">
          <div className="text-xl font-bold text-primary">PM</div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">
              About
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-accent transition-colors">
              Skills
            </a>
            <a href="#experience" className="text-sm font-medium hover:text-accent transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
              Contact
            </a>
          </div>
          <a href="mailto:puneetonly12@gmail.com">
            <Button size="sm" className="bg-accent hover:bg-accent/90">
              Get in Touch
            </Button>
          </a>
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
        <div className="absolute inset-0 bg-white/95"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block bg-accent/10 px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-accent">Senior iOS Engineer</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
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
      <section id="about" className="py-20 md:py-32 bg-white" data-animate>
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
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a Senior iOS Developer based in Pune, India, with 9+ years of experience crafting innovative mobile applications. My expertise spans Swift, SwiftUI, UIKit, and modern architectural patterns like MVVM and Clean Architecture.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Throughout my career, I've consistently delivered high-quality products on time, achieving a 95% on-time delivery rate. I'm passionate about mentoring junior developers, optimizing performance, and implementing robust CI/CD pipelines using GitHub Actions and Fastlane.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-accent/5 rounded-lg border border-accent/20 hover:border-accent/40 transition-colors"
                >
                  <p className="text-sm font-medium text-accent">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50" data-animate>
        <div className="container">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Technical Skills</h2>
            <a href="/Puneet_Mahajan_CV.pdf" download>
              <Button className="bg-accent hover:bg-accent/90 text-white">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:border-accent/30 animate-fade-in"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-semibold text-primary">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sidx) => (
                    <span
                      key={sidx}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full hover:bg-accent/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-32 bg-white" data-animate>
        <div className="container">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Professional Experience</h2>
            <a href="/Puneet_Mahajan_CV.pdf" download>
              <Button className="bg-accent hover:bg-accent/90 text-white">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </a>
          </div>
          <div className="space-y-8">
            {experience.map((job, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-r from-white to-slate-50 rounded-lg border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{job.title}</h3>
                    <p className="text-accent font-medium">{job.company}</p>
                  </div>
                  <span className="text-sm text-foreground/60 bg-accent/10 px-3 py-1 rounded-full">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {job.highlights.map((highlight, hidx) => (
                    <li key={hidx} className="text-foreground/80 flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((tech, tidx) => (
                    <span key={tidx} className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50" data-animate>
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-lg border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg group animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Briefcase className="w-6 h-6 text-accent" />
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 text-foreground/40 group-hover:text-accent transition-colors" />
                    </a>
                  )}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, tidx) => (
                    <span key={tidx} className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 md:py-32 bg-white" data-animate>
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16">Certifications & Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg border border-accent/20 flex items-center gap-4 hover:border-accent/40 transition-colors animate-fade-in"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <Award className="w-6 h-6 text-accent flex-shrink-0" />
                <p className="font-medium text-foreground">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/90 text-white" data-animate>
        <div className="container text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Let's Work Together</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href="mailto:puneetonly12@gmail.com">
              <Button className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/puneetmahajan25" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </a>
            <a href="https://github.com/puneet2591" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white/80 py-8 border-t border-white/10">
        <div className="container text-center text-sm">
          <p>© 2025 Puneet Mahajan. All rights reserved.</p>
        </div>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDelayed {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-delayed {
          animation: fadeInDelayed 0.8s ease-out forwards;
          opacity: 0;
          animation-delay: 0.2s;
        }

        [data-animate] .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
