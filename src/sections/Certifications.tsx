import { GlassCard } from '../components/ui/GlassCard';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, textReveal } from '../utils/animations';

const CERTIFICATIONS = [
  {
    name: "Certificate of Completion",
    issuer: "DataCrumbs",
    year: "Oct 2025",
    logo: "📊"
  },
  {
    name: "Cyber Security 101 Certificate",
    issuer: "TryHackMe",
    year: "Oct 2025",
    logo: "🔐",
    id: "THM-WY35ISBAWY"
  },
  {
    name: "JavaScript (Basic)",
    issuer: "HackerRank",
    year: "Aug 2025",
    logo: "💻",
    id: "41C06C407D4F"
  },
  {
    name: "LFS101: Introduction to Linux",
    issuer: "The Linux Foundation",
    year: "Aug 2025",
    logo: "🐧"
  },
  {
    name: "Pre Security Certificate",
    issuer: "TryHackMe",
    year: "Aug 2025",
    logo: "🛡️",
    id: "THM-DHJSU5JVRC"
  },
  {
    name: "Complete Linux Training Course",
    issuer: "Udemy",
    year: "Aug 2025",
    logo: "🎓",
    id: "UC-93988618-77fb-4a6e-a633-8f8ec443870"
  },
  {
    name: "App development",
    issuer: "Bano Qabil Khyber Pakhtunkhwa",
    year: "Jul 2025",
    logo: "📱"
  },
  {
    name: "Cybersecurity Bootcamp: The Ultimate Beginner's Course",
    issuer: "CyberProStudy Ltd.",
    year: "Jul 2025",
    logo: "🛡️"
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 p-6 flex flex-col items-center justify-center relative z-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="overflow-hidden mb-12 relative z-10">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textReveal}
          className="text-4xl font-bold text-gray-900 dark:text-white text-center"
        >
          Professional <span className="text-yellow-600 dark:text-yellow-400">Certifications</span>
        </motion.h2>
      </div>
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10"
      >
        {CERTIFICATIONS.map((cert, index) => (
          <GlassCard key={index} variants={fadeInUp} className="flex flex-col items-center text-center hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
            <div className="text-4xl mb-4 bg-gray-100 dark:bg-white/5 p-4 rounded-full w-20 h-20 flex items-center justify-center">
                {cert.logo}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{cert.name}</h3>
            <p className="text-gray-600 dark:text-white/60 text-sm mb-2">{cert.issuer}</p>
            {/* @ts-ignore */}
            {cert.id && (
              <p className="text-gray-400 dark:text-white/40 text-xs font-mono mb-2">ID: {cert.id}</p>
            )}
            <span className="text-blue-600 dark:text-blue-400 text-xs font-mono px-2 py-1 bg-blue-500/10 rounded border border-blue-500/20">
              {cert.year}
            </span>
          </GlassCard>
        ))}
      </motion.div>
    </section>
  );
}
