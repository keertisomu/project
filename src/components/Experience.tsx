import React, { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import Modal from './Modal';

interface Experience {
  id: number;
  title: string;
  company: string;
  companyUrl?: string;
  duration: string;
  scope: string;
  tagline: string;
  whatIOwned: string[];
  impact: string[];
  howIBuiltIt: string[];
  technicalDeepDive: string;
  logo: string;
}

interface ExperienceProps {
  experiences: Experience[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  const openModal = (exp: Experience) => {
    setSelectedExperience(exp);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedExperience(null);
  };

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
        
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-[#f5f0e0] dark:bg-slate-900/70 rounded-xl shadow-lg border border-slate-200 dark:border-purple-800/60 p-6 hover:shadow-xl transition-all duration-300">
              {/* Header - Role Title and Company */}
              <div className="mb-3">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 inline">
                  {exp.title}
                </h3>
                <span className="text-slate-600 dark:text-slate-400 mx-2">·</span>
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1 rounded-full bg-[#6867b5] text-white text-sm font-semibold border border-[#6867b5] hover:bg-[#5654a0] transition-colors duration-200"
                  >
                    {exp.company}
                  </a>
                ) : (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#6867b5] text-white text-sm font-semibold border border-[#6867b5]">
                    {exp.company}
                  </span>
                )}
              </div>

              {/* Tagline */}
              <p className="text-slate-700 dark:text-slate-300 italic mb-4">
                {exp.tagline}
              </p>

              {/* Years and Scope */}
              <div className="flex items-center text-slate-600 dark:text-slate-400 mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">{exp.duration} · {exp.scope}</span>
              </div>

              {/* What I owned */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  What I owned
                </h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                  {exp.whatIOwned.map((item, index) => (
                    <li key={index} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  Impact
                </h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                  {exp.impact.map((item, index) => (
                    <li key={index} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>

              {/* How I built it */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  How I built it
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.howIBuiltIt.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-[#6867b5] text-white text-sm rounded-full font-medium border border-[#6867b5] hover:bg-[#5654a0] transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Details Button */}
              <button
                onClick={() => openModal(exp)}
                className="inline-flex items-center px-4 py-2 bg-[#6867b5] text-white rounded-lg font-medium hover:bg-[#5654a0] transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Read more
                <ChevronDown className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedExperience && (
        <Modal
          isOpen={modalOpen}
          onClose={closeModal}
          title={`${selectedExperience.title} · ${selectedExperience.company}`}
          content={selectedExperience.technicalDeepDive}
        />
      )}
    </section>
  );
};

export default Experience;