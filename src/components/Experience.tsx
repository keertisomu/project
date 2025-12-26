import React from 'react';
import { Calendar, Building2 } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Professional Experience
          </h2>
          <p className="text-gray-600">No experience data available</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Professional Experience
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex items-start group">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full group-hover:border-purple-500 transition-colors duration-300 z-10"></div>
                
                {/* Content */}
                <div className="ml-20 bg-white rounded-xl shadow-lg border border-gray-100 p-6 w-full group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <img 
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-16 h-16 rounded-lg object-cover shadow-md"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
                          <Building2 className="w-3 h-3 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-blue-600 font-semibold mb-2">
                        {exp.company}
                      </p>
                      <div className="flex items-center text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">{exp.duration}</span>
                      </div>
                    </div>
                    
                    {/* Timeline indicator */}
                    <div className="hidden md:flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full">
                      <span className="text-sm font-bold text-blue-600">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-3">
                      Technologies & Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map(tech => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-sm rounded-full font-medium border border-blue-200 hover:from-blue-100 hover:to-purple-100 transition-colors duration-200"
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
            <div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
            <div className="ml-20 text-gray-500 text-sm italic">
              Journey continues...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;