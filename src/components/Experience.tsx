import React from 'react';
import { Calendar } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  companyUrl?: string;
  duration: string;
  description: string;
  technologies: string[];
  logo: string;
}

interface ExperienceProps {
  experiences: Experience[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  if (!experiences || experiences.length === 0) {
    return (
        <section className="py-16 px-4 bg-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-12">
            Professional Experience
          </h2>
            <p className="text-slate-700 dark:text-slate-300">No experience data available</p>
        </div>
      </section>
    );
  }

  return (
      <section className="py-16 px-4 bg-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 text-center mb-12">
          Professional Experience
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-indigo-300 to-purple-400"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative flex items-start group">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-slate-900 border-4 border-purple-400 rounded-full group-hover:border-indigo-300 transition-colors duration-300 z-10"></div>
                
                {/* Content */}
                <div className="ml-20 bg-[#f5f0e0] dark:bg-slate-900/70 rounded-xl shadow-lg border border-slate-200 dark:border-purple-800/60 p-6 w-full group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-1">
                        {exp.title}
                      </h3>
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1 rounded-full bg-[#6867b5] text-white text-sm font-semibold mb-2 border border-[#6867b5] hover:bg-[#5654a0] transition-colors duration-200"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#6867b5] text-white text-sm font-semibold mb-2 border border-[#6867b5]">
                          {exp.company}
                        </div>
                      )}
                      <div className="flex items-center text-slate-700 dark:text-slate-300 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">{exp.duration}</span>
                      </div>
                    </div>
                    
                    {/* Company website link replaces numeric badge (handled via company pill above) */}
                  </div>
                  
                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-300 mb-3">
                      Technologies & Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map(tech => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-[#6867b5] text-white text-sm rounded-full font-medium border border-[#6867b5] hover:bg-[#5654a0] transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Timeline end */}
          <div className="relative flex items-center mt-8">
            <div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full"></div>
            <div className="ml-20 text-slate-600 dark:text-slate-400 text-sm italic">
              Journey starts...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;