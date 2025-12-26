import React from 'react';
import { Mail, MapPin, Globe, Linkedin } from 'lucide-react';

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
}

const Header: React.FC<HeaderProps> = ({ personal }) => {
  return (
    <header className="relative min-h-[600px] py-16 px-4 overflow-hidden">
      {/* Melbourne Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Melbourne Skyline"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-slate-800/80 to-blue-800/85"></div>
        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8">
          {/* Profile Photo */}
          <div className="relative inline-block mb-6">
            <img 
              src="/github-photo.jpeg"
              alt={`${personal.name} - Profile Photo`}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-2xl border-4 border-white mx-auto ring-4 ring-blue-200/30"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
            {personal.name}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light drop-shadow-md">
            {personal.title}
          </p>
        </div>
        
        <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          {personal.summary}
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 text-gray-100">
          <a 
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 hover:text-blue-300 transition-colors duration-200 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20"
          >
            <Mail className="w-5 h-5" />
            <span>{personal.email}</span>
          </a>
          
          <a 
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-300 transition-colors duration-200 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          
          <a 
            href={personal.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-300 transition-colors duration-200 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20"
          >
            <Globe className="w-5 h-5" />
            <span>Blog</span>
          </a>
          
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <MapPin className="w-5 h-5" />
            <span>{personal.location}</span>
          </div>
        </div>

        {/* Melbourne Badge */}
        <div className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/80 to-blue-700/80 backdrop-blur-sm text-white px-6 py-3 rounded-full shadow-lg">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium">Based in Melbourne, Australia</span>
        </div>
      </div>
    </header>
  );
};

export default Header;