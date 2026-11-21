import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Shield, 
  CheckCircle2, 
  Cpu, 
  FileCode2,
  Lock,
  Zap,
  Info
} from 'lucide-react';
import { projects } from '../data/portfolio';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-4 bg-[#080B12]">
        <h1 className="text-2xl font-bold text-[#F4F7FC] mb-4">Project Not Found</h1>
        <p className="text-[#A2AEC2] mb-6">The requested case study could not be located.</p>
        <button
          onClick={() => navigate('/')}
          className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors"
        >
          Return to Portfolio
        </button>
      </div>
    );
  }

  const isDjb = project.id === 'djb-ekyc';

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#080B12]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#6B7A94] mb-8">
          <Link to="/" className="hover:text-[#F4F7FC] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/#projects" className="hover:text-[#F4F7FC] transition-colors">Projects</Link>
          <span>/</span>
          <span className="text-blue-400 font-medium">{project.title}</span>
        </div>

        {/* Back Link */}
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-[#A2AEC2] hover:text-[#F4F7FC] transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Overview
        </Link>

        {/* Header Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#131B2A] border border-[#1E293B] rounded-2xl p-6 sm:p-10 mb-10"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`text-xs px-3 py-1 rounded-full font-medium border ${
              project.category === 'professional'
                ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
            }`}>
              {project.category === 'professional' ? 'Professional Case Study' : 'Academic / Team Project'}
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 font-medium">
              {project.domain}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#F4F7FC] mb-3">
            {project.title}
          </h1>
          <p className="text-lg text-blue-400 font-medium mb-6">
            {project.subtitle}
          </p>

          <p className="text-base text-[#A2AEC2] leading-relaxed max-w-3xl mb-8">
            {project.description}
          </p>

          <div className="pt-6 border-t border-[#1E293B]">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6B7A94] mb-3">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-[#080B12] border border-[#1E293B] text-[#F4F7FC]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Detailed Sections */}
        {isDjb ? <DjbDetailContent /> : <RetailEaseDetailContent />}
      </div>
    </div>
  );
}

function DjbDetailContent() {
  return (
    <div className="space-y-12">
      {/* Confidentiality Notice */}
      <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 flex items-start gap-3 text-xs text-[#A2AEC2]">
        <Lock size={18} className="text-blue-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-blue-400 block mb-0.5">Confidentiality & Compliance Notice</span>
          This case study presents a high-level architectural and technical summary of verified engineering contributions. Internal database schemas, private endpoint URLs, and proprietary client workflows have been intentionally excluded or generalized.
        </div>
      </div>

      {/* Role & Core Contributions */}
      <div className="bg-[#131B2A] border border-[#1E293B] rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-[#F4F7FC] mb-4 flex items-center gap-2.5">
          <Cpu className="text-blue-400" size={20} /> Verified Backend Engineering Responsibilities
        </h2>
        <ul className="space-y-3">
          {[
            'Optimized PostgreSQL queries, index strategies, and pagination mechanics for workflows processing over 3.4M consumer records.',
            'Architected and implemented secure Spring Boot REST APIs for citizen-related verification workflows across multi-tier operational hierarchies.',
            'Engineered hierarchy-aware authorization checks, UUID ownership validation, and token-based access control across Surveyor, Supervisor, Vendor, and Administrative tiers.',
            'Built Kafka consumers for asynchronous event processing, audit trail synchronization, and background state transitions.',
            'Penned idempotent Flyway database migration scripts to manage forward-compatible schema evolution.',
            'Delivered backend endpoints for workflow automation, bulk assignments, multi-level hierarchy reporting, and indexed search.',
            'Diagnosed and rectified production exceptions across Spring Boot, PostgreSQL, Kafka, and Kubernetes environments.',
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-[#A2AEC2] leading-relaxed">
              <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Conceptual Architecture Diagram */}
      <div className="bg-[#131B2A] border border-[#1E293B] rounded-2xl p-6 sm:p-8">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-[#F4F7FC] mb-1">
            Generalized System Architecture
          </h2>
          <p className="text-xs text-[#6B7A94]">
            Conceptual multi-tier backend request & event lifecycle (Generalized Representation)
          </p>
        </div>

        <div className="bg-[#080B12] border border-[#1E293B] rounded-xl p-6 overflow-x-auto">
          <svg viewBox="0 0 760 380" className="w-full min-w-[680px]" fill="none">
            <defs>
              <linearGradient id="djbGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* Clients */}
            <rect x="20" y="40" width="160" height="60" rx="10" fill="url(#djbGrad1)" stroke="#3B82F6" strokeWidth="1.2" />
            <text x="100" y="66" textAnchor="middle" fill="#F4F7FC" fontSize="12" fontWeight="600">Client / Portal</text>
            <text x="100" y="84" textAnchor="middle" fill="#6B7A94" fontSize="10">Surveyor • Supervisor • Admin</text>

            {/* Arrow 1 */}
            <path d="M 180 70 L 250 70" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="215" y="62" textAnchor="middle" fill="#6B7A94" fontSize="9" fontFamily="monospace">HTTPS / JWT</text>

            {/* Gateway & Auth */}
            <rect x="250" y="30" width="180" height="80" rx="10" fill="url(#djbGrad1)" stroke="#06B6D4" strokeWidth="1.2" />
            <text x="340" y="60" textAnchor="middle" fill="#F4F7FC" fontSize="12" fontWeight="600">API Gateway / Auth</text>
            <text x="340" y="78" textAnchor="middle" fill="#06B6D4" fontSize="10">Token Validation & RBAC</text>
            <text x="340" y="94" textAnchor="middle" fill="#6B7A94" fontSize="9">Keycloak Context / MDMS</text>

            {/* Arrow 2 */}
            <path d="M 430 70 L 500 70" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="465" y="62" textAnchor="middle" fill="#6B7A94" fontSize="9" fontFamily="monospace">Internal</text>

            {/* Spring Boot Service */}
            <rect x="500" y="20" width="230" height="100" rx="10" fill="url(#djbGrad1)" stroke="#3B82F6" strokeWidth="1.5" />
            <text x="615" y="48" textAnchor="middle" fill="#F4F7FC" fontSize="13" fontWeight="bold">Spring Boot Service</text>
            <text x="615" y="68" textAnchor="middle" fill="#A2AEC2" fontSize="11">Controller → Validation Layer</text>
            <text x="615" y="86" textAnchor="middle" fill="#A2AEC2" fontSize="11">Workflow Service & State Machine</text>
            <text x="615" y="104" textAnchor="middle" fill="#6B7A94" fontSize="10">Spring Data JPA / Flyway</text>

            {/* Downward Arrows from Service */}
            <path d="M 570 120 L 570 210" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="540" y="170" textAnchor="middle" fill="#6B7A94" fontSize="9" fontFamily="monospace">JPA / SQL</text>

            <path d="M 660 120 L 660 210" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="695" y="170" textAnchor="middle" fill="#8B5CF6" fontSize="9" fontFamily="monospace">Async Events</text>

            {/* Database */}
            <rect x="490" y="220" width="160" height="70" rx="10" fill="url(#djbGrad1)" stroke="#3B82F6" strokeWidth="1.2" />
            <text x="570" y="250" textAnchor="middle" fill="#F4F7FC" fontSize="12" fontWeight="600">PostgreSQL DB</text>
            <text x="570" y="268" textAnchor="middle" fill="#6B7A94" fontSize="10">Optimized Keyset Pagination</text>
            <text x="570" y="280" textAnchor="middle" fill="#6B7A94" fontSize="9">Composite Indexes / Audit Logs</text>

            {/* Kafka */}
            <rect x="670" y="220" width="150" height="70" rx="10" fill="url(#djbGrad1)" stroke="#8B5CF6" strokeWidth="1.2" />
            <text x="745" y="250" textAnchor="middle" fill="#F4F7FC" fontSize="12" fontWeight="600">Apache Kafka</text>
            <text x="745" y="268" textAnchor="middle" fill="#8B5CF6" fontSize="10">Event Consumers</text>
            <text x="745" y="280" textAnchor="middle" fill="#6B7A94" fontSize="9">Audit Sync & Transitions</text>

            {/* Return Loop */}
            <path d="M 745 290 L 745 330 L 615 330 L 615 120" stroke="#8B5CF6" strokeWidth="1.2" strokeDasharray="3 3" />
            <text x="680" y="345" textAnchor="middle" fill="#6B7A94" fontSize="9" fontFamily="monospace">Consumer processing loop</text>
          </svg>
        </div>

        <p className="text-center text-xs text-[#6B7A94] mt-4 flex items-center justify-center gap-1.5">
          <Info size={13} />
          Architectural abstraction illustrating layered separation of concerns and decoupled messaging.
        </p>
      </div>

      {/* Engineering Takeaways */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#131B2A] border border-[#1E293B] rounded-2xl p-6">
          <h3 className="text-base font-bold text-[#F4F7FC] mb-3 flex items-center gap-2">
            <Zap size={18} className="text-amber-400" /> Performance & Scalability
          </h3>
          <p className="text-sm text-[#A2AEC2] leading-relaxed">
            Handling 3.4M+ citizen records demonstrated that deep pagination queries must abandon naive OFFSET operations in favor of indexed keyset lookups. Pairing efficient indexing with connection pool tuning ensures predictable latencies under high request volume.
          </p>
        </div>

        <div className="bg-[#131B2A] border border-[#1E293B] rounded-2xl p-6">
          <h3 className="text-base font-bold text-[#F4F7FC] mb-3 flex items-center gap-2">
            <Shield size={18} className="text-cyan-400" /> Security & Role Governance
          </h3>
          <p className="text-sm text-[#A2AEC2] leading-relaxed">
            Multi-tier administrative roles require strict server-side validation. Enforcing UUID ownership checks and scoping records to supervisor hierarchies at the data access layer eliminates unauthorized resource access vulnerabilities.
          </p>
        </div>
      </div>
    </div>
  );
}

function RetailEaseDetailContent() {
  return (
    <div className="space-y-12">
      {/* Problem & Solution */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#131B2A] border border-[#1E293B] rounded-2xl p-6 sm:p-8">
          <h2 className="text-lg font-bold text-[#F4F7FC] mb-3">
            Problem Statement
          </h2>
          <p className="text-sm text-[#A2AEC2] leading-relaxed">
            Small and medium retail establishments frequently struggle with fragmented inventory tracking, delayed billing operations, and manual sales reconciliations. RetailEase was designed to provide an unified, modular platform connecting sales counters to backend stock repositories in real-time.
          </p>
        </div>

        <div className="bg-[#131B2A] border border-[#1E293B] rounded-2xl p-6 sm:p-8">
          <h2 className="text-lg font-bold text-[#F4F7FC] mb-3 text-emerald-400">
            Engineered Solution
          </h2>
          <p className="text-sm text-[#A2AEC2] leading-relaxed">
            Developed a decoupled full-stack architecture featuring a React.js administrative and counter interface powered by a high-throughput Spring Boot 3 REST API backend backed by PostgreSQL, ensuring transactional integrity during concurrent billing operations.
          </p>
        </div>
      </div>

      {/* Backend Responsibilities */}
      <div className="bg-[#131B2A] border border-[#1E293B] rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-[#F4F7FC] mb-4 flex items-center gap-2.5">
          <FileCode2 className="text-blue-400" size={20} /> My Backend Contributions
        </h2>
        <ul className="space-y-3">
          {[
            'Architected layered Controller-Service-Repository pattern using Spring Boot 3.4.4.',
            'Engineered RESTful endpoints for Product Catalog management, Stock updates, and Category filtering.',
            'Implemented transactional Order Processing and Invoice generation routines ensuring atomic stock decrement.',
            'Structured PostgreSQL relational entities with foreign key constraints, composite keys, and indexing on barcode/SKU fields.',
            'Built centralized exception handling and unified API error response contracts for frontend consumption.',
            'Configured CORS headers and integrated endpoints with the React.js client interface.',
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-[#A2AEC2] leading-relaxed">
              <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Conceptual Diagram */}
      <div className="bg-[#131B2A] border border-[#1E293B] rounded-2xl p-6 sm:p-8">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-[#F4F7FC] mb-1">
            RetailEase Architecture Flow
          </h2>
          <p className="text-xs text-[#6B7A94]">
            Layered request lifecycle from React client to relational persistence
          </p>
        </div>

        <div className="bg-[#080B12] border border-[#1E293B] rounded-xl p-6 overflow-x-auto">
          <svg viewBox="0 0 700 240" className="w-full min-w-[600px]" fill="none">
            <defs>
              <linearGradient id="reGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* React Frontend */}
            <rect x="20" y="80" width="140" height="80" rx="10" fill="url(#reGrad)" stroke="#06B6D4" strokeWidth="1.2" />
            <text x="90" y="115" textAnchor="middle" fill="#F4F7FC" fontSize="12" fontWeight="600">React.js Client</text>
            <text x="90" y="135" textAnchor="middle" fill="#06B6D4" fontSize="10">Admin & Sales UI</text>

            <path d="M 160 120 L 220 120" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="190" y="112" textAnchor="middle" fill="#6B7A94" fontSize="9" fontFamily="monospace">JSON / REST</text>

            {/* Controller */}
            <rect x="220" y="80" width="130" height="80" rx="10" fill="url(#reGrad)" stroke="#3B82F6" strokeWidth="1.2" />
            <text x="285" y="115" textAnchor="middle" fill="#F4F7FC" fontSize="12" fontWeight="600">Controller Layer</text>
            <text x="285" y="135" textAnchor="middle" fill="#A2AEC2" fontSize="10">DTO & Validation</text>

            <path d="M 350 120 L 400 120" stroke="#3B82F6" strokeWidth="1.5" />

            {/* Service */}
            <rect x="400" y="80" width="130" height="80" rx="10" fill="url(#reGrad)" stroke="#3B82F6" strokeWidth="1.2" />
            <text x="465" y="115" textAnchor="middle" fill="#F4F7FC" fontSize="12" fontWeight="600">Service Layer</text>
            <text x="465" y="135" textAnchor="middle" fill="#A2AEC2" fontSize="10">@Transactional Logic</text>

            <path d="M 530 120 L 580 120" stroke="#3B82F6" strokeWidth="1.5" />

            {/* Repository & DB */}
            <rect x="580" y="80" width="110" height="80" rx="10" fill="url(#reGrad)" stroke="#3B82F6" strokeWidth="1.2" />
            <text x="635" y="115" textAnchor="middle" fill="#F4F7FC" fontSize="12" fontWeight="600">Repository / DB</text>
            <text x="635" y="135" textAnchor="middle" fill="#6B7A94" fontSize="10">PostgreSQL</text>
          </svg>
        </div>
      </div>
    </div>
  );
}
