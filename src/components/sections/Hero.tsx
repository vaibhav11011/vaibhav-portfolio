import { motion } from 'framer-motion';
import { ArrowRight, FileDown } from 'lucide-react';
import { LinkedinIcon } from '../ui/Icons';
import { siteConfig } from '../../data/portfolio';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E293B] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#131B2A] border border-[#1E293B] rounded-full text-xs text-[#A2AEC2] mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Available for Java Backend Roles
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F4F7FC] mb-3 leading-tight tracking-tight">
              Vaibhav Kumar
            </h1>

            <p className="text-xl sm:text-2xl font-medium bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-5">
              Java Backend Engineer
            </p>

            <h2 className="text-base sm:text-lg text-[#F4F7FC] font-semibold mb-4 leading-relaxed">
              Engineering Reliable Backend Systems with Java & Spring Boot
            </h2>

            <p className="text-sm sm:text-base text-[#A2AEC2] leading-relaxed mb-8 max-w-2xl">
              Specializing in high-throughput REST APIs, relational database optimization, and secure microservices. Currently engineering eGovernance workflows processing over 3.4M records at Sparrow Softech.
            </p>

            {/* Core Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Java 8+', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'SQL Optimization', 'Apache Kafka', 'Flyway'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono font-medium bg-[#131B2A] border border-[#1E293B] rounded-lg text-[#A2AEC2]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => scrollTo('#projects')}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20"
              >
                Explore My Work
                <ArrowRight size={16} />
              </button>

              <a
                href="/resume.pdf"
                download="Vaibhav_Kumar_Java_Backend_Engineer_Resume.pdf"
                className="px-6 py-3 bg-[#131B2A] hover:bg-[#1a2338] border border-[#1E293B] hover:border-[#334155] text-[#F4F7FC] font-medium text-sm rounded-xl transition-all flex items-center gap-2"
              >
                <FileDown size={16} />
                Download Resume
              </a>

              <button
                onClick={() => scrollTo('#contact')}
                className="px-6 py-3 bg-[#131B2A] hover:bg-[#1a2338] border border-[#1E293B] hover:border-[#334155] text-[#A2AEC2] hover:text-[#F4F7FC] font-medium text-sm rounded-xl transition-all"
              >
                Contact Me
              </button>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#131B2A] hover:bg-[#1a2338] border border-[#1E293B] hover:border-blue-500/40 rounded-xl text-[#A2AEC2] hover:text-blue-400 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right: Architecture Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative p-6 rounded-2xl bg-[#131B2A]/80 border border-[#1E293B] backdrop-blur-sm shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#1E293B]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="text-xs font-mono text-[#6B7A94] ml-2">backend-service-layer.arch</span>
                </div>
                <span className="text-[11px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                  Enterprise Flow
                </span>
              </div>

              <svg viewBox="0 0 460 380" className="w-full" fill="none">
                <defs>
                  <linearGradient id="heroBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="heroLine" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* Client Box */}
                <rect x="130" y="10" width="200" height="42" rx="8" fill="url(#heroBlue)" stroke="#3B82F6" strokeWidth="1" />
                <text x="230" y="36" textAnchor="middle" fill="#F4F7FC" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">Clients / eGov Portals</text>

                {/* Arrow 1 */}
                <line x1="230" y1="52" x2="230" y2="88" stroke="url(#heroLine)" strokeWidth="1.5" strokeDasharray="4 3" />
                <polygon points="226,86 234,86 230,94" fill="#3B82F6" />

                {/* REST Controller */}
                <rect x="100" y="96" width="260" height="50" rx="8" fill="url(#heroBlue)" stroke="#06B6D4" strokeWidth="1" />
                <text x="230" y="120" textAnchor="middle" fill="#F4F7FC" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">Spring Boot REST Controllers</text>
                <text x="230" y="136" textAnchor="middle" fill="#6B7A94" fontSize="10" fontFamily="JetBrains Mono, monospace">@Valid • DTO Serialization • RBAC</text>

                {/* Arrow 2 */}
                <line x1="230" y1="146" x2="230" y2="182" stroke="url(#heroLine)" strokeWidth="1.5" strokeDasharray="4 3" />
                <polygon points="226,180 234,180 230,188" fill="#06B6D4" />

                {/* Service Layer */}
                <rect x="80" y="190" width="300" height="58" rx="8" fill="url(#heroBlue)" stroke="#3B82F6" strokeWidth="1.2" />
                <text x="230" y="214" textAnchor="middle" fill="#F4F7FC" fontSize="12" fontWeight="bold" fontFamily="Inter, sans-serif">Service & Business Workflow Layer</text>
                <text x="230" y="234" textAnchor="middle" fill="#A2AEC2" fontSize="10" fontFamily="JetBrains Mono, monospace">State Transitions • Hierarchy Checks</text>

                {/* Branching Arrows */}
                <line x1="170" y1="248" x2="170" y2="290" stroke="url(#heroLine)" strokeWidth="1.5" strokeDasharray="4 3" />
                <polygon points="166,288 174,288 170,296" fill="#3B82F6" />

                <line x1="290" y1="248" x2="290" y2="290" stroke="url(#heroLine)" strokeWidth="1.5" strokeDasharray="4 3" />
                <polygon points="286,288 294,288 290,296" fill="#8B5CF6" />

                {/* PostgreSQL Database */}
                <rect x="90" y="298" width="160" height="52" rx="8" fill="url(#heroBlue)" stroke="#3B82F6" strokeWidth="1" />
                <text x="170" y="322" textAnchor="middle" fill="#F4F7FC" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">PostgreSQL</text>
                <text x="170" y="338" textAnchor="middle" fill="#6B7A94" fontSize="9" fontFamily="JetBrains Mono, monospace">Keyset Pagination • Indexes</text>

                {/* Kafka Cluster */}
                <rect x="260" y="298" width="140" height="52" rx="8" fill="url(#heroBlue)" stroke="#8B5CF6" strokeWidth="1" />
                <text x="330" y="322" textAnchor="middle" fill="#F4F7FC" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">Apache Kafka</text>
                <text x="330" y="338" textAnchor="middle" fill="#8B5CF6" fontSize="9" fontFamily="JetBrains Mono, monospace">Async Event Bus</text>

                {/* External Security Capsule */}
                <rect x="10" y="194" width="55" height="48" rx="6" fill="#080B12" stroke="#8B5CF6" strokeWidth="0.8" />
                <text x="37" y="218" textAnchor="middle" fill="#8B5CF6" fontSize="9" fontWeight="600">Keycloak</text>
                <text x="37" y="230" textAnchor="middle" fill="#6B7A94" fontSize="8">Auth</text>
                <line x1="65" y1="218" x2="80" y2="218" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="2 2" />
              </svg>

              <div className="pt-3 border-t border-[#1E293B] text-center">
                <p className="text-[11px] text-[#6B7A94] font-mono">
                  Conceptual Architecture — Generalized Enterprise Tier
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
