'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import GamesSection from '@/components/GamesSection';
import SocialsSection from '@/components/SocialsSection';
import ManagementSection from '@/components/ManagementSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <main 
      className="min-h-screen pt-32 pb-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full flex flex-col items-center bg-[#0a0a0a] relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 20% 20%, rgba(147, 51, 234, 0.15) 0%, transparent 60%)'
      }}
    >
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div className="w-full relative mt-8">
        <AnimatePresence mode="wait">
          {activeSection === 'about' && <AboutSection key="about" />}
          {activeSection === 'games' && <GamesSection key="games" />}
          {activeSection === 'socials' && <SocialsSection key="socials" />}
          {activeSection === 'management' && <ManagementSection key="management" />}
        </AnimatePresence>
      </div>
    </main>
  );
}
