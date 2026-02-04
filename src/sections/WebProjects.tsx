import { GlassCard } from '../components/ui/GlassCard';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, textReveal } from '../utils/animations';
import codeCraftImg from '../assets/project_codecraft.png';
import aestheticImg from '../assets/project_aesthetic.png';
import hotelImg from '../assets/project_hotel.png';

const WEB_PROJECTS = [
  {
    title: "CodeCraftPk.com",
    category: "Agency Website",
    desc: "The official website for Code Craft It Solution, showcasing services, portfolio, and company information. Built with modern web technologies for optimal performance and SEO.",
    tags: ["React", "Tailwind CSS", "Vite", "Responsive Design"],
    image: codeCraftImg
  },
  {
    title: "Aesthetic Treatment",
    category: "Healthcare / Beauty",
    desc: "A premium website for an aesthetic clinic, featuring treatment showcases, appointment booking integration, and a visual-first design to appeal to potential clients.",
    tags: ["Next.js", "Framer Motion", "UI/UX", "Booking System"],
    image: aestheticImg
  },
  {
    title: "Hotel Management",
    category: "Enterprise Web App",
    desc: "A comprehensive hotel management system including reservation handling, room service management, billing, and staff administration dashboards.",
    tags: ["MERN Stack", "Redux", "Dashboard", "Real-time"],
    image: hotelImg
  }
];

export function WebProjects() {
  return (
    <section id="web-projects" className="min-h-screen py-20 p-6 flex flex-col items-center justify-center relative z-10 overflow-hidden">
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="overflow-hidden mb-12">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textReveal}
          className="text-4xl font-bold text-gray-900 dark:text-white text-center"
        >
          Web Development <span className="text-purple-600 dark:text-purple-400">Projects</span>
        </motion.h2>
      </div>
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {WEB_PROJECTS.map((project, index) => (
          <GlassCard key={index} variants={fadeInUp} className="flex flex-col h-full hover:scale-[1.02] transition-transform duration-300 p-0 overflow-hidden group">
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute bottom-4 left-4 z-20 text-purple-200 text-xs font-mono px-2 py-1 bg-purple-500/20 backdrop-blur-md rounded border border-purple-500/30">
                {project.category}
              </span>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
              
              <p className="text-gray-600 dark:text-white/70 text-sm mb-6 flex-grow leading-relaxed line-clamp-4">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs text-gray-500 dark:text-white/50 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        ))}
      </motion.div>
    </section>
  );
}
