import { portfolioData } from '../data';
import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  const { personalInfo } = portfolioData;
  return (
    <footer className="bg-night text-white py-12 border-t border-petrol/30">
      <div className="max-w-[1240px] mx-auto px-5 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-display font-bold text-lg mb-1">
            IT<span className="text-exec">.</span>
          </span>
          <span className="text-gray-400 text-xs font-mono">
            © {new Date().getFullYear()} {personalInfo.fullName}
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
