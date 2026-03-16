'use client';

import { motion } from 'framer-motion';

interface SocialsSectionProps {}

export default function SocialsSection({}: SocialsSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-3xl mx-auto mt-32 px-4"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-8 h-1 bg-purple-500 rounded-full"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Connect With Me
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        <a 
          href="YOUR_DISCORD_URL_HERE"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-4
                     bg-white/5 border border-white/10 rounded-full 
                     px-6 py-5 hover:bg-white/10 
                     transition-colors duration-200 cursor-pointer"
        >
          <span className="text-2xl">🎮</span>
          <span className="text-white font-bold text-lg">Discord</span>
        </a>

        <a 
          href="https://twitter.com/sidney_dev"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-4
                     bg-white/5 border border-white/10 rounded-full 
                     px-6 py-5 hover:bg-white/10 
                     transition-colors duration-200 cursor-pointer"
        >
          <span className="text-2xl">𝕏</span>
          <span className="text-white font-bold text-lg">Twitter</span>
        </a>

        <a 
          href="https://github.com/sidneycodes1"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-4
                     bg-white/5 border border-white/10 rounded-full 
                     px-6 py-5 hover:bg-white/10 
                     transition-colors duration-200 cursor-pointer"
        >
          <span className="text-2xl">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
            </svg>
          </span>
          <span className="text-white font-bold text-lg">GitHub</span>
        </a>
      </div>
    </motion.section>
  );
}
