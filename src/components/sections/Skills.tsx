import { motion } from 'framer-motion';
import { Coffee, Leaf, Database, Radio, Shield, Wrench, Monitor } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { skillCategories } from '../../data/portfolio';

const iconMap: Record<string, React.ReactNode> = {
  coffee: <Coffee size={20} />,
  leaf: <Leaf size={20} />,
  database: <Database size={20} />,
  radio: <Radio size={20} />,
  shield: <Shield size={20} />,
  wrench: <Wrench size={20} />,
  monitor: <Monitor size={20} />,
};

const levelLabels: Record<string, { label: string; color: string }> = {
  core: { label: 'Core Working Knowledge', color: 'text-blue-400' },
  working: { label: 'Additional Working Knowledge', color: 'text-cyan-400' },
  familiar: { label: 'Basic Familiarity', color: 'text-violet-400' },
};

export default function Skills() {
  const grouped = {
    core: skillCategories.filter((s) => s.level === 'core'),
    working: skillCategories.filter((s) => s.level === 'working'),
    familiar: skillCategories.filter((s) => s.level === 'familiar'),
  };

  return (
    <section id="skills" className="py-24 bg-[#101522]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Technical Expertise" subtitle="Technologies and tools I work with professionally" />

        {(['core', 'working', 'familiar'] as const).map((level) => (
          <div key={level} className="mb-12 last:mb-0">
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-6 ${levelLabels[level].color}`}>
              {levelLabels[level].label}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {grouped[level].map((category, i) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#131B2A] border border-[#1E293B] hover:border-[#334155] rounded-xl p-5 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400">
                      {iconMap[category.icon]}
                    </div>
                    <h4 className="text-[#F4F7FC] font-semibold">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs bg-[#080B12] border border-[#1E293B] rounded-md text-[#A2AEC2]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

