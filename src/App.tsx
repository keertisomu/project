import { useState, useEffect } from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import profileDataJson from './data/profile.json';

interface ProfileData {
  personal: {
    name: string;
    title: string;
    email: string;
    linkedin: string;
    website: string;
    location: string;
    summary: string;
  };
  skills: Array<{
    name: string;
    years: number;
    category: string;
  }>;
  experiences: Array<{
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
  }>;
  projects: Array<{
    id: number;
    name: string;
    description: string;
    technologies: string[];
    company: string;
    image: string;
  }>;
}

function App() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = window.localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return 'dark';
  });

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        // Import the JSON data directly instead of fetching
        setProfileData(profileDataJson as ProfileData);
      } catch (error) {
        console.error('Error loading profile data:', error);
        // Fallback data in case of error
        setProfileData({
          personal: {
            name: "Keerti Somasundaram",
            title: "Staff Engineer",
            email: "maverick.somu@gmail.com",
            linkedin: "https://www.linkedin.com/in/keerti-somasundaram-17199912",
            website: "http://keertisomu.blogspot.com",
            location: "Australia",
            summary: "Versatile software engineer with a passion for building scalable applications."
          },
          skills: [],
          experiences: [],
          projects: []
        });
      } finally {
        setLoading(false);
      }
    };

    loadProfileData();
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fcf9ee] dark:bg-[#1c1c20]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-slate-800 dark:border-slate-200 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-700 dark:text-slate-200">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fcf9ee] dark:bg-[#1c1c20]">
        <div className="text-center">
          <p className="text-slate-700 dark:text-slate-200">Error loading profile data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Header
        personal={profileData.personal}
        theme={theme}
        onToggleTheme={() =>
          setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
        }
      />
      <Skills skills={profileData.skills} />
      <Experience experiences={profileData.experiences} />
      <Projects projects={profileData.projects} />
      <Contact email={profileData.personal.email} />
      
      <footer className="bg-transparent text-slate-500 dark:text-slate-400 py-8 px-4 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <p>
            © 2025 {profileData.personal.name}.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;