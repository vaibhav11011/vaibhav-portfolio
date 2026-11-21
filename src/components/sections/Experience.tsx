import { motion } from 'framer-motion';
import { Building2, MapPin, Calendar, Circle } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { experiences } from '../../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#080B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Professional Experience" subtitle="My career journey in backend engineering" />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-[#1E293B] to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className={`absolute left-2.5 md:left-6.5 top-6 w-3 h-3 rounded-full border-2 ${
                  exp.type === 'current' 
                    ? 'bg-blue-500 border-blue-500 shadow-lg shadow-blue-500/30' 
                    : 'bg-[#131B2A] border-[#334155]'
                }`} />

                <div className="bg-[#131B2A] border border-[#1E293B] hover:border-[#334155] rounded-xl p-6 transition-colors">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Building2 size={16} className="text-blue-400" />
                        <h3 className="text-[#F4F7FC] font-bold text-lg">{exp.company}</h3>
                        {exp.type === 'current' && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-blue-400 font-medium">{exp.role}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-sm text-[#6B7A94]">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Projects */}
                  {exp.projects && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.projects.map((p) => (
                        <span key={p} className="px-2.5 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md">
                          {p}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#A2AEC2]">
                        <Circle size={5} className="mt-2 shrink-0 text-[#334155] fill-[#334155]" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-xs bg-[#080B12] border border-[#1E293B] rounded text-[#6B7A94]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

