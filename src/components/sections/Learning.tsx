import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { learningTopics } from '../../data/portfolio';

const categoryStyles: Record<string, { label: string; border: string; bg: string; text: string; dot: string }> = {
  language: { label: 'Java Ecosystem', border: 'border-blue-500/20', bg: 'bg-blue-500/10', text: 'text-blue-400', dot: 'bg-blue-400' },
  framework: { label: 'Spring Architecture', border: 'border-cyan-500/20', bg: 'bg-cyan-500/10', text: 'text-cyan-400', dot: 'bg-cyan-400' },
  architecture: { label: 'Distributed Systems', border: 'border-violet-500/20', bg: 'bg-violet-500/10', text: 'text-violet-400', dot: 'bg-violet-400' },
  database: { label: 'Storage & SQL', border: 'border-emerald-500/20', bg: 'bg-emerald-500/10', text: 'text-emerald-400', dot: 'bg-emerald-400' },
  fundamentals: { label: 'CS Foundations', border: 'border-amber-500/20', bg: 'bg-amber-500/10', text: 'text-amber-400', dot: 'bg-amber-400' },
};

export default function Learning() {
  return (
    <section id="learning" className="py-20 bg-[#101522] border-t border-b border-[#1E293B]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131B2A] border border-[#1E293B] text-xs font-mono text-cyan-400 mb-3">
            <Compass size={13} /> Continuous Professional Growth
          </div>
          <h2 className="text-3xl font-bold text-[#F4F7FC] mb-3">
            Currently Exploring & Deepening
          </h2>
          <p className="text-sm text-[#A2AEC2]">
            Engineering domains and advanced architectural patterns under active study to transition seamlessly into high-scale product engineering environments.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {learningTopics.map((item, idx) => {
            const style = categoryStyles[item.category] || categoryStyles.fundamentals;

            return (
              <motion.div
                key={item.topic}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border bg-[#131B2A] ${style.border} hover:border-[#334155] transition-all group`}
              >
                <span className={`w-2 h-2 rounded-full ${style.dot}`} />
                <span className="text-sm font-medium text-[#F4F7FC] group-hover:text-blue-400 transition-colors">
                  {item.topic}
                </span>
                <span className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded ${style.bg} ${style.text}`}>
                  {style.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
