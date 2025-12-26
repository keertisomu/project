import React from 'react';
import { 
  Code, 
  Globe, 
  Database, 
  Cloud, 
  Settings, 
  Terminal,
  Calendar
} from 'lucide-react';

interface Skill {
  name: string;
  years: number;
  category: string;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const getSkillIcon = (skillName: string, category: string) => {
    const iconProps = { className: "w-8 h-8 text-blue-600" };
    
    // Programming languages
    if (['JavaScript', 'Python', 'TypeScript'].includes(skillName)) {
      return <Code {...iconProps} />;
    }
    
    // Frontend frameworks
    if (['React', 'Vue.js'].includes(skillName)) {
      return <Globe {...iconProps} />;
    }
    
    // Backend/Server
    if (['Node.js', 'Express.js'].includes(skillName)) {
      return <Terminal {...iconProps} />;
    }
    
    // Databases
    if (['SQL', 'MongoDB'].includes(skillName)) {
      return <Database {...iconProps} />;
    }
    
    // Cloud/DevOps
    if (['AWS', 'Docker'].includes(skillName)) {
      return <Cloud {...iconProps} />;
    }
    
    // Default based on category
    switch (category) {
      case 'Programming':
        return <Code {...iconProps} />;
      case 'Frontend':
        return <Globe {...iconProps} />;
      case 'Backend':
        return <Terminal {...iconProps} />;
      case 'Database':
        return <Database {...iconProps} />;
      case 'Cloud':
      case 'DevOps':
        return <Cloud {...iconProps} />;
      case 'Tools':
        return <Settings {...iconProps} />;
      default:
        return <Code {...iconProps} />;
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {skills
            .sort((a, b) => b.years - a.years)
            .map(skill => (
              <div 
                key={skill.name} 
                className="relative group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Years indicator - top right corner */}
                <div className="absolute top-3 right-3 group">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center cursor-pointer">
                    <Calendar className="w-3 h-3 text-blue-600" />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute -top-8 right-0 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                    {skill.years} {skill.years === 1 ? 'year' : 'years'}
                    <div className="absolute top-full right-2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>

                {/* Skill content */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    {getSkillIcon(skill.name, skill.category)}
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 text-sm mb-2">
                    {skill.name}
                  </h3>
                  
                  <span className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded-full">
                    {skill.category}
                  </span>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;