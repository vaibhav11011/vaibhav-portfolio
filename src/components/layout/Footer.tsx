import { Mail, ArrowUp } from 'lucide-react';
import { LinkedinIcon } from '../ui/Icons';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080B12] border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                VK
              </span>
              <span className="text-[#F4F7FC] font-semibold">Vaibhav Kumar</span>
            </div>
            <p className="text-[#6B7A94] text-sm leading-relaxed">
              Java Backend Engineer specializing in Spring Boot, REST APIs, PostgreSQL, and enterprise backend systems.
            </p>
          </div>

          <div>
            <h4 className="text-[#F4F7FC] font-medium mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block text-[#6B7A94] hover:text-[#A2AEC2] text-sm transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#F4F7FC] font-medium mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:vk01398@gmail.com"
                className="flex items-center gap-2 text-[#6B7A94] hover:text-blue-400 text-sm transition-colors"
              >
                <Mail size={16} />
                vk01398@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/vaibhav-kumar-98a9ab185/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#6B7A94] hover:text-blue-400 text-sm transition-colors"
              >
                <LinkedinIcon size={16} />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#1E293B] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#6B7A94] text-xs">
            © {new Date().getFullYear()} Vaibhav Kumar. All rights reserved.
          </p>
          <p className="text-[#6B7A94] text-xs">
            Built with React, TypeScript & Tailwind CSS
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[#6B7A94] hover:text-[#A2AEC2] transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
