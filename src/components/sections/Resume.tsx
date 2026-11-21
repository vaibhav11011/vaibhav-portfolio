import { FileDown, ExternalLink, ShieldCheck, Mail, MapPin, Briefcase } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

export default function ResumeSection() {
  return (
    <section id="resume" className="py-24 bg-[#080B12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Curriculum Vitae"
          subtitle="Download or preview my verified engineering resume for recruiters and hiring managers"
        />

        <div className="max-w-4xl mx-auto bg-[#131B2A] border border-[#1E293B] rounded-2xl p-8 lg:p-12 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-medium">
                <ShieldCheck size={14} /> Recruiter-Ready Verified Document
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#F4F7FC]">
                Vaibhav Kumar — Resume
              </h3>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-[#A2AEC2]">
                <span className="flex items-center gap-1.5">
                  <Briefcase size={14} className="text-blue-400" />
                  Java Backend Engineer
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-cyan-400" />
                  Delhi, India
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail size={14} className="text-emerald-400" />
                  vk01398@gmail.com
                </span>
              </div>

              <p className="text-sm text-[#6B7A94] max-w-lg">
                Includes full details on eGovernance backend development, Spring Boot microservices, PostgreSQL query optimizations, Wipro engineering tenure, and CDAC training.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3.5 w-full md:w-auto shrink-0">
              <a
                href="/resume.pdf"
                download="Vaibhav_Kumar_Java_Backend_Engineer_Resume.pdf"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
              >
                <FileDown size={17} />
                Download PDF
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#080B12] hover:bg-[#0E1422] border border-[#1E293B] hover:border-[#334155] text-[#F4F7FC] font-medium text-sm transition-all flex items-center justify-center gap-2"
              >
                <ExternalLink size={16} />
                View in Browser
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#1E293B] flex items-center justify-between text-xs text-[#6B7A94] flex-wrap gap-2">
            <span>Direct file link: <code className="text-blue-400 font-mono">/resume.pdf</code></span>
            <span>PDF format • Clean single-page ATS-optimized format</span>
          </div>
        </div>
      </div>
    </section>
  );
}
