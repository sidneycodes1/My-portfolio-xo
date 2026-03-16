'use client';

import { motion } from 'framer-motion';
import { BarChart3, Users, Settings } from 'lucide-react';

export default function ManagementSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl mx-auto mt-32 flex flex-col gap-6"
    >
      <div className="glass-card p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-1 bg-purple-500 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Server Management & Administration
            </h2>
          </div>
          <p className="text-textSecondary">Manage your portfolio entities and analytics.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: <BarChart3 />, label: 'Analytics', value: '12.4k' },
          { icon: <Users />, label: 'Visitors', value: '4,289' },
          { icon: <Settings />, label: 'Settings', value: 'Active' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 + 0.3 }}
            className="glass-card p-6 flex items-center gap-4"
          >
            <div className="p-4 rounded-xl bg-black/40 text-primary">
              {stat.icon}
            </div>
            <div>
              <p className="text-textSecondary text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
