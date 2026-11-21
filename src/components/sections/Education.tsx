import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { education } from '../../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#080B12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Education & Formal Training"
          subtitle="Academic credentials and advanced postgraduate technical training"
        />

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {education.map((item, idx) => {
            const isPG = item.type === 'postgraduate';

            return (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-[#131B2A] border border-[#1E293B] hover:border-blue-500/30 rounded-2xl p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 relative group"
              >
                <div className="absolute top-6 right-6">
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full border font-medium ${
                      isPG
                        ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                        : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    }`}
                  >
                    {isPG ? 'Postgraduate Training' : 'Undergraduate Degree'}
                  </span>
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#080B12] border border-[#1E293B] flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                    {isPG ? <Award size={24} /> : <GraduationCap size={24} />}
                  </div>

                  <h3 className="text-xl font-bold text-[#F4F7FC] mb-2 pr-16 leading-snug">
                    {item.degree}
                  </h3>

                  <p className="text-blue-400 font-medium text-sm mb-4">
                    {item.institution}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#1E293B] flex items-center justify-between text-xs text-[#6B7A94]">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-blue-400" />
                    {item.period}
                  </span>

                  <span className="flex items-center gap-1 text-[#A2AEC2]">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    Verified Credential
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
