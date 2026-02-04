import { GlassCard } from '../components/ui/GlassCard';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, textReveal } from '../utils/animations';

const EXPERIENCES = [
  {
    role: "Director of Engineering",
    company: "Code Craft IT Solution",
    period: "Dec 2025 - Present",
    desc: "Leading engineering teams and technical strategy for full-scale software solutions. Overseeing project delivery and architecture decisions."
  },
  {
    role: "Instructor",
    company: "Access Academy",
    period: "Nov 2024 - April 2025",
    desc: "Delivered engaging and practical lessons in Python programming, simplifying complex concepts for students at various skill levels."
  },
  {
    role: "Computer Vision Intern",
    company: "Arch Technologies",
    period: "Aug 2025 - Sep 2025",
    desc: "Worked on computer vision projects and technologies during an internship at Arch Technologies."
  },
  {
    role: "Cyber Security Intern",
    company: "Microsoft Learn Student Ambassadors Pakistan",
    period: "Jul 2025 - Aug 2025",
    desc: "Gained practical experience in cybersecurity and network scanning methodologies."
  }
];

export function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 p-6 flex flex-col items-center justify-center">
      <div className="overflow-hidden mb-12">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textReveal}
          className="text-4xl font-bold text-gray-900 dark:text-white text-center"
        >
          Experience
        </motion.h2>
      </div>
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl w-full space-y-8 relative"
      >
        {/* Connection Line */}
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-8 top-0 bottom-0 w-1 bg-gray-300 dark:bg-white/10 rounded-full md:left-1/2 md:-translate-x-1/2 origin-top" 
        />

        {EXPERIENCES.map((exp, index) => (
          <motion.div key={index} variants={fadeInUp} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            {/* Timeline Dot */}
            <div className="absolute left-8 md:left-1/2 -translate-x-[19px] md:-translate-x-1/2 top-8 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-black z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            
            <div className="md:w-1/2" />
            
            <div className="md:w-1/2 pl-20 md:pl-0 md:px-8">
              <GlassCard className="relative" hoverEffect={true}>
                <span className="text-sm text-blue-500 dark:text-blue-400 font-mono mb-2 block">{exp.period}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-3">{exp.company}</h4>
                <p className="text-gray-700 dark:text-white/70 text-sm leading-relaxed">{exp.desc}</p>
              </GlassCard>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
