import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  company: string;
  image: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div 
              key={project.id}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.name}
                  </h3>
                  <Code className="w-5 h-5 text-gray-400 flex-shrink-0 ml-2" />
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-sm text-blue-600 font-medium mb-2">
                    @ {project.company}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;