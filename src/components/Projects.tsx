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
	    <section className="py-16 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Projects section - to be added later */}
      </div>
    </section>
  );
};

export default Projects;