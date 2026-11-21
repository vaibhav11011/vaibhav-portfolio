import { motion } from 'framer-motion';
import { CheckCircle, MapPin, Briefcase, GraduationCap, Calendar } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { aboutData } from '../../data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#080B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="My journey, specialization, and engineering philosophy" />

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-[#A2AEC2] leading-relaxed text-lg">{aboutData.intro}</p>
            <p className="text-[#A2AEC2] leading-relaxed">{aboutData.journey}</p>
            <p className="text-[#A2AEC2] leading-relaxed">{aboutData.current}</p>

            <div className="pt-4">
              <h3 className="text-[#F4F7FC] font-semibold text-lg mb-4">Engineering Philosophy</h3>
              <div className="space-y-3">
                {aboutData.philosophy.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle size={18} className="text-blue-500 mt-0.5 shrink-0" />
                    <span className="text-[#A2AEC2]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Facts sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[#131B2A] border border-[#1E293B] rounded-2xl p-6 space-y-5 sticky top-24">
              <h3 className="text-[#F4F7FC] font-semibold text-sm uppercase tracking-wider">Quick Facts</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Calendar size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7A94]">Experience</p>
                    <p className="text-sm text-[#F4F7FC] font-medium">4+ Years</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <Briefcase size={16} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7A94]">Current Focus</p>
                    <p className="text-sm text-[#F4F7FC] font-medium">Java Backend Engineering</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-violet-500/10 rounded-lg flex items-center justify-center">
                    <MapPin size={16} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7A94]">Location</p>
                    <p className="text-sm text-[#F4F7FC] font-medium">Delhi, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <GraduationCap size={16} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7A94]">Education</p>
                    <p className="text-sm text-[#F4F7FC] font-medium">B.Tech IT + PG-DAC</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

