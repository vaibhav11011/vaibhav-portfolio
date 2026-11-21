import { useState } from 'react';
import { Mail, MapPin, Phone, Copy, Check, Send, AlertCircle } from 'lucide-react';
import { LinkedinIcon } from '../ui/Icons';
import SectionTitle from '../ui/SectionTitle';
import { siteConfig } from '../../data/portfolio';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    // Compose mailto
    const mailtoSubject = encodeURIComponent(
      form.subject || `Inquiry from ${form.name} via Portfolio`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#101522] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Let's Connect"
          subtitle="Open to discussing backend engineering opportunities, technical collaboration, or enterprise software development"
        />

        <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#131B2A] border border-[#1E293B] rounded-2xl p-6 lg:p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#F4F7FC] mb-2">
                  Get in Touch
                </h3>
                <p className="text-sm text-[#A2AEC2] leading-relaxed">
                  Whether you are hiring for a Java Backend Engineer role or exploring engineering talent for enterprise systems, I'd love to connect.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Email with copy button */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#080B12] border border-[#1E293B]">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                      <Mail size={16} />
                    </div>
                    <div className="truncate">
                      <p className="text-[10px] text-[#6B7A94] uppercase tracking-wider">Email</p>
                      <a href={`mailto:${siteConfig.email}`} className="text-xs text-[#F4F7FC] hover:text-blue-400 truncate block">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#131B2A] border border-[#1E293B] text-[#A2AEC2] hover:text-blue-400 transition-colors shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#080B12] border border-[#1E293B] hover:border-blue-500/40 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <LinkedinIcon size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#6B7A94] uppercase tracking-wider">LinkedIn</p>
                    <p className="text-xs text-[#F4F7FC] group-hover:text-blue-400 transition-colors">
                      vaibhav-kumar-98a9ab185
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#080B12] border border-[#1E293B]">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#6B7A94] uppercase tracking-wider">Location</p>
                    <p className="text-xs text-[#F4F7FC]">{siteConfig.location}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#080B12] border border-[#1E293B]">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#6B7A94] uppercase tracking-wider">Phone</p>
                    <p className="text-xs text-[#F4F7FC]">{siteConfig.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#131B2A] border border-[#1E293B] rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl font-bold text-[#F4F7FC] mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-[#A2AEC2] mb-6">
                Fill out the form below. It directly formats your message and launches your mail client addressed to me.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#A2AEC2] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#080B12] border border-[#1E293B] focus:border-blue-500 text-sm text-[#F4F7FC] placeholder-[#6B7A94] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#A2AEC2] mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#080B12] border border-[#1E293B] focus:border-blue-500 text-sm text-[#F4F7FC] placeholder-[#6B7A94] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#A2AEC2] mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Java Backend Engineer Inquiry"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#080B12] border border-[#1E293B] focus:border-blue-500 text-sm text-[#F4F7FC] placeholder-[#6B7A94] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#A2AEC2] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Hello Vaibhav, I came across your backend portfolio and would love to discuss..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#080B12] border border-[#1E293B] focus:border-blue-500 text-sm text-[#F4F7FC] placeholder-[#6B7A94] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
                >
                  <Send size={16} />
                  Compose & Send via Email
                </button>

                {submitted && (
                  <p className="text-xs text-green-400 text-center flex items-center justify-center gap-1.5 pt-2">
                    <Check size={14} /> Message ready! Your email client has been triggered.
                  </p>
                )}

                <div className="flex items-center gap-2 text-[11px] text-[#6B7A94] pt-2">
                  <AlertCircle size={13} className="shrink-0" />
                  <span>
                    Direct client-side connection without third-party email trackers.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
