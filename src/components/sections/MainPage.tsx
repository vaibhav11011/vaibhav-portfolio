import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Architecture from './Architecture';
import Engineering from './Engineering';
import CaseStudies from './CaseStudies';
import Education from './Education';
import Learning from './Learning';
import ResumeSection from './Resume';
import Contact from './Contact';

export default function MainPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Architecture />
      <Engineering />
      <CaseStudies />
      <Education />
      <Learning />
      <ResumeSection />
      <Contact />
    </div>
  );
}

