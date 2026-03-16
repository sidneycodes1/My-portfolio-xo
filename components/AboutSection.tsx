'use client';

import { motion } from 'framer-motion';
import { PROFILE } from '@/constants';
import Image from 'next/image';

interface AboutSectionProps {}

export default function AboutSection({}: AboutSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto mt-32 glass-card p-6 md:p-10 mx-4 md:mx-auto flex flex-col md:flex-row items-center gap-10"
    >
      <div 
        className="relative w-36 h-36 md:w-48 md:h-48 shrink-0 rounded-full overflow-hidden"
        style={{ 
          boxShadow: '0 0 30px 8px rgba(147, 51, 234, 0.5)',
          border: '3px solid #9333ea'
        }}
      >
        <Image 
          src="/profile.jpg"
          alt={PROFILE.name} 
          fill 
          className="object-cover"
        />
      </div>
      
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{PROFILE.name}</h1>
        <h2 className="text-lg md:text-xl font-medium text-purple-500 mb-4">{PROFILE.role}</h2>
        <p className="text-base text-gray-400 leading-relaxed mt-4">
          {PROFILE.bio}
        </p>
      </div>
    </motion.section>
  );
}
