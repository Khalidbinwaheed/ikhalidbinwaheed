import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, FileCode, Mail } from 'lucide-react';

const DOCK_ITEMS = [
  { id: 'home', label: 'Home', icon: Home, href: '#home' },
  { id: 'about', label: 'About', icon: User, href: '#about' },
  { id: 'experience', label: 'Experience', icon: Briefcase, href: '#experience' },
  { id: 'projects', label: 'Projects', icon: FileCode, href: '#projects' },
  { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
];

export function Dock() {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        className="glass-dark dark:glass-dark bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 px-4 py-3 rounded-full flex items-center gap-2 shadow-lg sm:shadow-2xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        {DOCK_ITEMS.map((item) => {
          const isHovered = hoveredTab === item.id;
          
          return (
            <a
              key={item.id}
              href={item.href}
              className="relative px-3 py-2"
              onMouseEnter={() => setHoveredTab(item.id)}
              onMouseLeave={() => setHoveredTab(null)}
            >
              {isHovered && (
                <motion.div
                  layoutId="dock-hover"
                  className="absolute inset-0 bg-gray-200 dark:bg-white/20 rounded-xl -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
              
              <div className="flex flex-col items-center gap-1">
                <motion.div
                  animate={{ scale: isHovered ? 1.2 : 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <item.icon className="w-6 h-6 text-gray-700 dark:text-white" />
                </motion.div>
              </div>

              {/* Label Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: -45 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1/2 -translate-x-1/2 px-2 py-1 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-lg text-xs text-gray-900 dark:text-white whitespace-nowrap border border-gray-200 dark:border-white/10 shadow-md"
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>
            </a>
          );
        })}
      </motion.div>
    </div>
  );
}
