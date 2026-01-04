import React from 'react';

interface Skill {
  name: string;
  years: number;
  category: string;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const preferredCategoryOrder = ['Backend', 'Frontend', 'Tools'];

  const getDisplayCategory = (category: string) => {
    if (category === 'Frontend') return 'Front-end';
    return category;
  };

  const skillsByCategory = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const sortedCategories = Object.entries(skillsByCategory).sort(([catA, aSkills], [catB, bSkills]) => {
    const indexA = preferredCategoryOrder.indexOf(catA);
    const indexB = preferredCategoryOrder.indexOf(catB);

    const inPreferredA = indexA !== -1;
    const inPreferredB = indexB !== -1;

    if (inPreferredA && inPreferredB) {
      return indexA - indexB;
    }
    if (inPreferredA) return -1;
    if (inPreferredB) return 1;

    const maxA = Math.max(...aSkills.map((s) => s.years));
    const maxB = Math.max(...bSkills.map((s) => s.years));
    return maxB - maxA;
  });

  return (
    <section className="py-16 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 text-center mb-12">
          Skills & Expertise
        </h2>
        <div className="bg-[#f5f0e0] dark:bg-slate-900/70 rounded-2xl shadow-md border border-slate-200 dark:border-purple-800/50 p-6">
          <div className="space-y-6">
            {sortedCategories.map(([category, categorySkills]) => {
              const maxYears = Math.max(...categorySkills.map((s) => s.years));

              return (
                <div key={category} className="space-y-2">
                  <h3 className="inline-flex items-center gap-3 rounded-full bg-purple-100 dark:bg-slate-800/80 px-4 py-1 shadow-sm border border-purple-300 dark:border-purple-600">
                    <span className="text-sm md:text-base font-semibold text-slate-900 dark:text-slate-50 tracking-wide">
                      {getDisplayCategory(category)}
                    </span>
                    <span
                      className="w-1 h-1 rounded-full bg-slate-500/70 dark:bg-slate-300/70"
                      aria-hidden="true"
                    />
                    <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300">
                      {maxYears}+ years
                    </span>
                  </h3>
                  <div className="flex flex-wrap gap-2 pl-1 md:pl-2">
                    {categorySkills                      
                      .map((skill) => (
                        <span
                          key={skill.name}
                          className="inline-flex items-center rounded-full bg-[#6867b5] dark:bg-[#6867b5] px-3 py-1 text-xs font-medium text-slate-50"
                        >
                          {skill.name}
                        </span>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;