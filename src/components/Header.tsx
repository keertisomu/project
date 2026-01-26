import React from 'react';
import { Mail, MapPin, Linkedin, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  personal: {
    name: string;
    title: string;
    email: string;
    linkedin: string;
    website: string;
    location: string;
    summary: string;
  };
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ personal, theme, onToggleTheme }) => {
  return (
	<header className="relative min-h-[600px] py-16 px-4 overflow-hidden">
      {/* Theme toggle - top right of header */}
      <div className="absolute top-6 right-6 z-20">
        <button
          type="button"
          onClick={onToggleTheme}
          className={
            `inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium shadow-lg border transition-colors duration-200 ` +
            (theme === 'dark'
              ? 'bg-white/80 hover:bg-white text-slate-900 border-slate-200'
              : 'bg-black/40 hover:bg-black/60 text-gray-100 border-white/10')
          }
        >
          {theme === 'dark' ? (
            <>
              <Sun className="w-3 h-3" />
              <span>Light mode</span>
            </>
          ) : (
            <>
              <Moon className="w-3 h-3" />
              <span>Dark mode</span>
            </>
          )}
        </button>
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="mb-8">
          {/* Profile Photo */}
          <div className="relative inline-block mb-6">
            <img 
              src="/profile-pic.jpg"
              alt={`${personal.name} - Profile Photo`}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-2xl border-4 border-white mx-auto ring-4 ring-blue-200/30"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
          </div>
          <div className="inline-block bg-white/80 dark:bg-[#26262b] px-10 py-4 rounded-2xl shadow-2xl backdrop-blur-sm border border-slate-200 dark:border-slate-700">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-2 tracking-tight">
              {personal.name}
            </h1>
            <p className="text-lg md:text-2xl text-slate-700 dark:text-purple-200 font-medium tracking-wide lg:whitespace-nowrap">
              {personal.title}
            </p>
          </div>
        </div>
        
        <p className="text-base md:text-lg text-slate-800 dark:text-slate-50 mb-8 max-w-2xl mx-auto leading-relaxed bg-white/80 dark:bg-[#26262b] px-6 py-4 rounded-2xl backdrop-blur-sm border border-slate-200 dark:border-slate-700">
          {personal.summary}
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 text-slate-800 dark:text-gray-100">
          <a 
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 transition-colors duration-200 bg-white/70 hover:bg-white text-slate-900 dark:bg-white/10 dark:hover:bg-white/20 dark:text-gray-100 backdrop-blur-sm px-4 py-2 rounded-lg"
          >
            <Mail className="w-5 h-5" />
            <span>{personal.email}</span>
          </a>
          
          <a 
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors duration-200 bg-white/70 hover:bg-white text-slate-900 dark:bg-white/10 dark:hover:bg-white/20 dark:text-gray-100 backdrop-blur-sm px-4 py-2 rounded-lg"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>         
        </div>

        {/* Location Badge */}
        <div className="mt-8 inline-flex items-center gap-2 bg-white/90 dark:bg-[#26262b] backdrop-blur-sm text-[#6867b5] px-6 py-3 rounded-full shadow-lg border border-[#6867b5]">
          <MapPin className="w-4 h-4 text-[#6867b5]" />
          <span className="text-sm font-medium">Based in Melbourne, Australia</span>
        </div>
      </div>
    </header>
  );
};

export default Header;