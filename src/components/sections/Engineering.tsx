import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Leaf, Database, Globe, CheckCircle2, Code2, AlertCircle } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { engineeringTopics } from '../../data/portfolio';

const categoryIcons: Record<string, React.ReactNode> = {
  java: <Coffee size={22} className="text-amber-400" />,
  spring: <Leaf size={22} className="text-emerald-400" />,
  database: <Database size={22} className="text-blue-400" />,
  api: <Globe size={22} className="text-cyan-400" />,
};

const categoryBadges: Record<string, { label: string; border: string; bg: string; text: string }> = {
  java: { label: 'Java 8+ / Core Java', border: 'border-amber-500/20', bg: 'bg-amber-500/10', text: 'text-amber-400' },
  spring: { label: 'Spring Boot 3.x / JPA', border: 'border-emerald-500/20', bg: 'bg-emerald-500/10', text: 'text-emerald-400' },
  database: { label: 'Relational / SQL', border: 'border-blue-500/20', bg: 'bg-blue-500/10', text: 'text-blue-400' },
  api: { label: 'HTTP / REST Standards', border: 'border-cyan-500/20', bg: 'bg-cyan-500/10', text: 'text-cyan-400' },
};

export default function Engineering() {
  const [expandedCategory, setExpandedCategory] = useState<string>('java');
  const [selectedTopic, setSelectedTopic] = useState<number>(0);

  const categories = Object.entries(engineeringTopics) as [
    keyof typeof engineeringTopics,
    (typeof engineeringTopics)[keyof typeof engineeringTopics]
  ][];

  const currentCategoryData = engineeringTopics[expandedCategory as keyof typeof engineeringTopics];
  const activeTopic = currentCategoryData?.topics[selectedTopic] || currentCategoryData?.topics[0];

  return (
    <section id="engineering" className="py-24 bg-[#080B12] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-48 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Engineering Under the Hood"
          subtitle="A deep dive into backend engineering paradigms, internal mechanisms, and architectural decisions"
        />

        {/* Category Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {categories.map(([key, data]) => {
            const isSelected = expandedCategory === key;
            const badge = categoryBadges[key];

            return (
              <button
                key={key}
                onClick={() => {
                  setExpandedCategory(key);
                  setSelectedTopic(0);
                }}
                className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#131B2A] border-blue-500 shadow-lg shadow-blue-500/10'
                    : 'bg-[#0E1422] border-[#1E293B] hover:border-[#334155] hover:bg-[#131B2A]/60'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-lg bg-[#080B12] border border-[#1E293B]">
                    {categoryIcons[key]}
                  </div>
                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded border ${badge.bg} ${badge.border} ${badge.text}`}>
                    {data.topics.length} Concepts
                  </span>
                </div>
                <div>
                  <h3 className="text-[#F4F7FC] font-semibold text-base mb-1">{data.title}</h3>
                  <p className="text-xs text-[#6B7A94] line-clamp-1">{badge.label}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Interactive Inspector */}
        <div className="bg-[#131B2A] border border-[#1E293B] rounded-2xl p-6 lg:p-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left: Topics List in Category */}
            <div className="lg:col-span-4 space-y-2 border-b lg:border-b-0 lg:border-r border-[#1E293B] pb-6 lg:pb-0 lg:pr-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7A94]">
                  Key Focus Areas
                </span>
                <span className="text-xs text-blue-400 font-mono">
                  {currentCategoryData?.title}
                </span>
              </div>

              {currentCategoryData?.topics.map((t, idx) => (
                <button
                  key={t.name}
                  onClick={() => setSelectedTopic(idx)}
                  className={`w-full text-left px-3.5 py-3 rounded-lg text-sm transition-all flex items-center justify-between group ${
                    selectedTopic === idx
                      ? 'bg-blue-600/15 border border-blue-500/40 text-blue-400 font-medium'
                      : 'hover:bg-[#0E1422] text-[#A2AEC2] hover:text-[#F4F7FC] border border-transparent'
                  }`}
                >
                  <span className="truncate pr-2">{t.name}</span>
                  <CheckCircle2
                    size={14}
                    className={`shrink-0 transition-opacity ${
                      selectedTopic === idx ? 'opacity-100 text-blue-400' : 'opacity-0 group-hover:opacity-40'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Right: Topic Detailed Explanation & Practical Relevance */}
            <div className="lg:col-span-8 min-h-[300px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${expandedCategory}-${selectedTopic}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#080B12] border border-[#1E293B] text-xs font-mono text-cyan-400 mb-3">
                      <Code2 size={13} />
                      Concept Breakdown
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-[#F4F7FC]">
                      {activeTopic?.name}
                    </h4>
                  </div>

                  <div className="bg-[#080B12] border border-[#1E293B] rounded-xl p-5">
                    <h5 className="text-xs font-mono text-[#6B7A94] uppercase tracking-wider mb-2">
                      Core Technical Explanation
                    </h5>
                    <p className="text-[#A2AEC2] text-sm leading-relaxed">
                      {activeTopic?.explanation}
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-950/20 to-transparent border-l-2 border-blue-500 pl-4 py-2">
                    <h5 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <CheckCircle2 size={14} /> Practical Enterprise Application
                    </h5>
                    <p className="text-[#F4F7FC] text-sm leading-relaxed">
                      {activeTopic?.relevance}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Disclaimer */}
              <div className="mt-8 pt-4 border-t border-[#1E293B] flex items-center gap-2 text-[11px] text-[#6B7A94]">
                <AlertCircle size={13} className="shrink-0" />
                <span>
                  Conceptual analysis independent of proprietary client source code. Demonstrated strictly for technical evaluation.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
