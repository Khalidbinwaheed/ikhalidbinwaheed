import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import khalidPic from '../assets/khalid.jpeg';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10"
      >
        <div className="mb-6 inline-block">
          <motion.div 
            className="w-32 h-32 rounded-full overflow-hidden mx-auto ring-4 ring-white/10 dark:ring-white/10 ring-blue-500/20 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={khalidPic} 
              alt="Khalid bin Waheed" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white drop-shadow-lg">
          Khalid bin <span className="text-gradient">Waheed</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
          Crafting digital experiences with meaningful interactions.
          <br />
          Full Stack Developer & UI/UX Enthusiast.
        </p>
      </motion.div>

      <motion.div 
        className="absolute bottom-32 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-8 h-8 text-gray-400 dark:text-white/50" />
      </motion.div>
    </section>
  );
}
