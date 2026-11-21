import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ChevronDown, ChevronUp, AlertTriangle, Search, CheckCircle, Lightbulb, ShieldCheck } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { caseStudies } from '../../data/portfolio';

export default function CaseStudies() {
  const [expandedId, setExpandedId] = useState<string | null>(caseStudies[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="case-studies" className="py-24 bg-[#101522] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Technical Problem Solving"
          subtitle="Real-world engineering investigations, root cause analyses, and architectural solutions"
        />

        <div className="space-y-6 max-w-5xl mx-auto">
          {caseStudies.map((study, idx) => {
            const isExpanded = expandedId === study.id;

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#131B2A] border-blue-500/50 shadow-xl shadow-blue-900/10'
                    : 'bg-[#131B2A]/70 border-[#1E293B] hover:border-[#334155]'
                }`}
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleExpand(study.id)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0 mt-0.5">
                      <Terminal size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                          Case Study #{idx + 1}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#080B12] text-[#6B7A94] border border-[#1E293B]">
                          Backend Engineering
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#F4F7FC]">
                        {study.title}
                      </h3>
                      {!isExpanded && (
                        <p className="text-[#A2AEC2] text-sm mt-2 line-clamp-2">
                          {study.problem}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-[#080B12] border border-[#1E293B] text-[#A2AEC2] shrink-0">
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-[#1E293B]"
                    >
                      <div className="p-6 lg:p-8 space-y-6">
                        {/* Problem & Context */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-[#080B12] border border-red-500/20 rounded-xl p-4">
                            <div className="flex items-center gap-2 text-red-400 font-medium text-xs uppercase tracking-wider mb-2">
                              <AlertTriangle size={15} /> Observed Problem
                            </div>
                            <p className="text-sm text-[#A2AEC2] leading-relaxed">
                              {study.problem}
                            </p>
                          </div>

                          <div className="bg-[#080B12] border border-[#1E293B] rounded-xl p-4">
                            <div className="flex items-center gap-2 text-cyan-400 font-medium text-xs uppercase tracking-wider mb-2">
                              <Search size={15} /> Technical Context
                            </div>
                            <p className="text-sm text-[#A2AEC2] leading-relaxed">
                              {study.context}
                            </p>
                          </div>
                        </div>

                        {/* Investigation & Root Cause */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-[#080B12] border border-[#1E293B] rounded-xl p-4">
                            <div className="text-[#F4F7FC] font-medium text-xs uppercase tracking-wider mb-2">
                              Investigation Steps
                            </div>
                            <p className="text-sm text-[#A2AEC2] leading-relaxed">
                              {study.investigation}
                            </p>
                          </div>

                          <div className="bg-[#080B12] border border-amber-500/20 rounded-xl p-4">
                            <div className="text-amber-400 font-medium text-xs uppercase tracking-wider mb-2">
                              Root Cause Identified
                            </div>
                            <p className="text-sm text-[#A2AEC2] leading-relaxed">
                              {study.rootCause}
                            </p>
                          </div>
                        </div>

                        {/* Solution & Implementation */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-emerald-400 font-medium text-xs uppercase tracking-wider">
                            <CheckCircle size={15} /> Engineered Solution & Architectural Pattern
                          </div>
                          <p className="text-sm text-[#A2AEC2] leading-relaxed">
                            {study.solution}
                          </p>

                          {/* Code Implementation */}
                          <div className="bg-[#080B12] border border-[#1E293B] rounded-xl p-4 font-mono text-xs overflow-x-auto">
                            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1E293B] text-[#6B7A94]">
                              <span className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                                <span className="ml-2 text-xs">Educational Snippet</span>
                              </span>
                              <span className="text-[11px]">Java / Spring Boot / SQL</span>
                            </div>
                            <pre className="text-[#A2AEC2] leading-relaxed whitespace-pre font-mono">
                              <code>{study.implementation}</code>
                            </pre>
                          </div>
                        </div>

                        {/* Key Takeaways */}
                        <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
                          <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs uppercase tracking-wider mb-3">
                            <Lightbulb size={16} /> Key Engineering Lessons
                          </div>
                          <ul className="grid sm:grid-cols-2 gap-2.5">
                            {study.lessons.map((lesson, lIdx) => (
                              <li key={lIdx} className="flex items-start gap-2 text-xs text-[#A2AEC2]">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                                <span>{lesson}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-xs text-[#6B7A94] flex items-center justify-center gap-1.5">
          <ShieldCheck size={14} className="text-green-500" />
          <span>All case studies are sanitized and based on generalized software engineering problem patterns.</span>
        </div>
      </div>
    </section>
  );
}

