import { GlassCard } from '../components/ui/GlassCard';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, textReveal } from '../utils/animations';
import bloodDonationImg from '../assets/project_blood_donation.png';
import gadgetHubImg from '../assets/project_gadget_hub.png';
import calculatorImg from '../assets/project_calculator.png';

const PROJECTS = [
  {
    title: "Blood Donation App",
    category: "Mobile App",
    desc: "A mobile application designed to streamline the blood donation process by connecting donors, recipients, and hospitals on a unified digital platform. The app enables users to register as donors, request blood, track donation history, and receive real-time notifications about urgent blood needs. Integrated features include donor eligibility checks, location-based matching, appointment scheduling, and secure profile management. The project improves the efficiency of blood supply management and enhances accessibility for individuals in need. Developed with a focus on user-friendly UI/UX, data security, and reliable backend communication.",
    tags: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    image: bloodDonationImg
  },
  {
    title: "Gadget Hub",
    category: "E-Commerce App",
    desc: "Built a cross-platform mobile app for browsing electronics and accessories with live price drops, stock updates, and trending products. Integrated real-time data streams to auto-refresh product lists, user reviews, and wishlists without manual reloads. Implemented search, filters, categories, product comparison, and push notifications for price alerts. Focused on clean architecture, efficient state management (Provider/Bloc/Riverpod), and secure user auth with Firebase Authentication.",
    tags: ["Flutter", "Dart", "Firebase", "REST APIs", "Bloc/Riverpod"],
    image: gadgetHubImg
  },
  {
    title: "Calculator App",
    category: "Utility",
    desc: "A sleek, scientific calculator developed with Flutter. Features a modern UI, history tracking, and advanced mathematical functions with high precision.",
    tags: ["Flutter", "Dart", "Math Expressions", "UI/UX"],
    image: calculatorImg
  }
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 p-6 flex flex-col items-center justify-center relative z-10 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="overflow-hidden mb-12">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textReveal}
          className="text-4xl font-bold text-gray-900 dark:text-white text-center"
        >
          Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </motion.h2>
      </div>
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {PROJECTS.map((project, index) => (
          <GlassCard key={index} variants={fadeInUp} className="flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 p-0 overflow-hidden group">
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute bottom-4 left-4 z-20 text-blue-200 text-xs font-mono px-2 py-1 bg-blue-500/20 backdrop-blur-md rounded border border-blue-500/30">
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
