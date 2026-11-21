import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';
import { projects } from '../../data/portfolio';

export default function Projects() {
  const professional = projects.filter((p) => p.category === 'professional');
  const academic = projects.filter((p) => p.category === 'academic');

  return (
    <section id="projects" className="py-24 bg-[#101522]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Featured Projects" subtitle="Professional and academic project contributions" />

        {/* Professional Projects */}
        <div className="mb-14">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-6">
            Professional Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {professional.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* Academic Projects */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-6">
            Academic Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {academic.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-[#131B2A] border border-[#1E293B] hover:border-blue-500/30 rounded-xl p-6 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="text-[#F4F7FC] font-bold text-lg group-hover:text-blue-400 transition-colors">
            {project.title}
          </h4>
          <p className="text-[#6B7A94] text-sm">{project.subtitle}</p>
        </div>
        <span className={`shrink-0 px-2.5 py-1 text-xs font-medium rounded-full border ${
          project.category === 'professional'
            ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
            : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
        }`}>
          {project.category === 'professional' ? 'Professional' : 'Academic'}
        </span>
      </div>

      <span className="inline-block px-2 py-0.5 text-xs bg-violet-500/10 text-violet-400 border border-violet-500/20 rounded mb-3">
        {project.domain}
      </span>

      <p className="text-[#A2AEC2] text-sm leading-relaxed mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.technologies.map((t) => (
          <span key={t} className="px-2 py-0.5 text-xs bg-[#080B12] border border-[#1E293B] rounded text-[#6B7A94]">
            {t}
          </span>
        ))}
      </div>

      {project.hasDetailPage ? (
        <Link
          to={`/project/${project.id}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
        >
          View Case Study
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      ) : (
        <span className="inline-flex items-center gap-2 text-sm text-[#6B7A94]">
          <ExternalLink size={14} />
          Limited disclosure — professional project
        </span>
      )}
    </motion.div>
  );
}

