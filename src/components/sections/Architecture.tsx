import { motion } from 'framer-motion';
import { Server, Database, Radio, Shield, Info } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const platformConcepts = [
  'Microservice-oriented architecture',
  'Spring Boot backend services',
  'REST API communication between services',
  'PostgreSQL persistence layer',
  'Apache Kafka event messaging',
  'Flyway database migrations',
  'Keycloak-based authentication',
  'MDMS configuration management',
];

const workedWith = [
  'Java / Spring Boot backend service development',
  'REST API design and implementation',
  'PostgreSQL query development and optimization',
  'Kafka consumer implementation',
  'Flyway migration scripts',
  'Backend debugging and production issue resolution',
  'API integration with external services',
];

const conceptual = [
  'Overall microservice orchestration patterns',
  'Service discovery and gateway routing',
  'Event-driven architecture at platform level',
  'Container orchestration with Kubernetes',
  'Distributed system considerations',
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 bg-[#101522]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Backend Architecture"
          subtitle="Professional exposure to the UPYOG / eGov platform ecosystem"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#A2AEC2] text-center max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Through my work at Sparrow Softech, I have professional exposure to the UPYOG platform — an
          open-source eGovernance ecosystem built on microservice principles. Below is a generalized
          overview of the architecture concepts and the specific areas I work with.
        </motion.p>

        {/* Three cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#131B2A] border border-[#1E293B] rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <Server size={18} className="text-blue-400" />
              </div>
              <h3 className="text-[#F4F7FC] font-semibold">Platform Architecture</h3>
            </div>
            <ul className="space-y-2">
              {platformConcepts.map((c) => (
                <li key={c} className="text-sm text-[#A2AEC2] flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#131B2A] border border-blue-500/20 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                <Database size={18} className="text-cyan-400" />
              </div>
              <h3 className="text-[#F4F7FC] font-semibold">Components I Work With</h3>
            </div>
            <ul className="space-y-2">
              {workedWith.map((c) => (
                <li key={c} className="text-sm text-[#A2AEC2] flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#131B2A] border border-[#1E293B] rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-violet-500/10 rounded-lg flex items-center justify-center">
                <Radio size={18} className="text-violet-400" />
              </div>
              <h3 className="text-[#F4F7FC] font-semibold">Conceptual Understanding</h3>
            </div>
            <ul className="space-y-2">
              {conceptual.map((c) => (
                <li key={c} className="text-sm text-[#A2AEC2] flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#131B2A] border border-[#1E293B] rounded-xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-[#F4F7FC] font-semibold text-center mb-6">Generalized Platform Architecture</h3>

          <div className="flex flex-col items-center gap-4">
            {/* API Gateway */}
            <div className="w-full max-w-md px-6 py-3 bg-[#080B12] border border-blue-500/30 rounded-lg text-center">
              <span className="text-sm font-medium text-blue-400">API Gateway</span>
            </div>
            <div className="w-px h-6 bg-gradient-to-b from-blue-500/50 to-cyan-500/50" />

            {/* Microservices */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg">
              {['Service A', 'Service B', 'Service C'].map((s, i) => (
                <div
                  key={s}
                  className={`px-4 py-3 rounded-lg text-center border ${
                    i === 0
                      ? 'bg-blue-500/5 border-blue-500/30'
                      : 'bg-[#080B12] border-[#1E293B]'
                  }`}
                >
                  <Server size={16} className={`mx-auto mb-1 ${i === 0 ? 'text-blue-400' : 'text-[#6B7A94]'}`} />
                  <span className={`text-xs font-medium ${i === 0 ? 'text-blue-400' : 'text-[#6B7A94]'}`}>{s}</span>
                  <p className="text-[10px] text-[#6B7A94] mt-0.5">Spring Boot</p>
                </div>
              ))}
            </div>
            <div className="w-px h-6 bg-gradient-to-b from-cyan-500/50 to-[#1E293B]" />

            {/* Data Layer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-sm">
              <div className="px-4 py-3 bg-blue-500/5 border border-blue-500/30 rounded-lg text-center">
                <Database size={16} className="mx-auto mb-1 text-blue-400" />
                <span className="text-xs font-medium text-blue-400">PostgreSQL</span>
              </div>
              <div className="px-4 py-3 bg-cyan-500/5 border border-cyan-500/30 rounded-lg text-center">
                <Radio size={16} className="mx-auto mb-1 text-cyan-400" />
                <span className="text-xs font-medium text-cyan-400">Kafka</span>
              </div>
            </div>

            {/* Auth sidebar */}
            <div className="flex items-center gap-3 mt-2">
              <Shield size={14} className="text-violet-400" />
              <span className="text-xs text-[#6B7A94]">Keycloak Authentication</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-[#1E293B]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500/30 border border-blue-500" />
              <span className="text-xs text-[#6B7A94]">Components I work with</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#080B12] border border-[#1E293B]" />
              <span className="text-xs text-[#6B7A94]">Conceptual understanding</span>
            </div>
          </div>

          <p className="text-center text-xs text-[#6B7A94] mt-4 flex items-center justify-center gap-1">
            <Info size={12} />
            Generalized UPYOG Architecture — Educational Representation
          </p>
        </motion.div>

        <p className="text-center text-xs text-[#6B7A94] mt-6 max-w-2xl mx-auto">
          This represents a generalized understanding of the platform architecture, not proprietary implementation details.
        </p>
      </div>
    </section>
  );
}

