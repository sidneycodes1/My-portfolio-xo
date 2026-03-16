'use client';

import { motion } from 'framer-motion';
import { GAMES } from '@/constants';
import { Gamepad2 } from 'lucide-react';

interface GamesSectionProps {}

export default function GamesSection({}: GamesSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl mx-auto mt-32 px-4 md:px-16"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-8 h-1 bg-purple-500 rounded-full"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Works & Tracking
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GAMES.map((game, i) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 + 0.2 }}
            className="glass-card p-6 group hover:border-primary/50 transition-colors cursor-pointer"
          >
            <div className="w-full h-48 bg-black/40 rounded-xl mb-6 flex items-center justify-center text-primary border border-white/5 group-hover:bg-primary/5 transition-colors">
               <Gamepad2 className="w-12 h-12 opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">{game.title}</h3>
            <p className="text-textSecondary">{game.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
