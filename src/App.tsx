import { useState, useEffect } from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

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
    duration: string;
    description: string;
    technologies: string[];
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

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        const response = await fetch('/src/data/profile.json');
        const data = await response.json();
        setProfileData(data);
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <p className="text-gray-600">Error loading profile data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header personal={profileData.personal} />
      <Skills skills={profileData.skills} />
      <Experience experiences={profileData.experiences} />
      <Projects projects={profileData.projects} />
      <Contact email={profileData.personal.email} />
      
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 {profileData.personal.name}. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;