import { GlassCard } from '../components/ui/GlassCard';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, textReveal } from '../utils/animations';

const CYBER_WORKS = [
  {
    title: "Vulnerability Assessment",
    role: "Security Analyst",
    desc: "Conducted comprehensive vulnerability assessments for financial institutions, identifying critical security gaps.",
    tags: ["Penetration Testing", "Nessus", "Burp Suite"]
  },
  {
    title: "Network Security Audit",
    role: "Lead Auditor",
    desc: " performed deep-dive analysis of network infrastructure, ensuring compliance with ISO 27001 standards.",
    tags: ["Network Security", "Wireshark", "Compliance"]
  },
  {
    title: "Incident Response",
    role: "Responder",
    desc: "Managed active security incidents, mitigating threats and performing root cause analysis to prevent recurrence.",
    tags: ["Forensics", "SIEM", "Splunk"]
  }
];

export function CyberWork() {
  return (
    <section id="cyber-work" className="min-h-screen py-20 p-6 flex flex-col items-center justify-center relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-green-900/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="overflow-hidden mb-12">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textReveal}
          className="text-4xl font-bold text-gray-900 dark:text-white text-center drop-shadow-md dark:drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]"
        >
          <span className="text-green-600 dark:text-green-400">Cyber</span> Work
        </motion.h2>
      </div>
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {CYBER_WORKS.map((work, index) => (
          <GlassCard key={index} variants={fadeInUp} className="hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{work.title}</h3>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-mono mb-3 block">{work.role}</span>
            <p className="text-gray-700 dark:text-white/70 text-sm mb-4 leading-relaxed">{work.desc}</p>
            <div className="flex flex-wrap gap-2">
              {work.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-300 text-xs rounded-full border border-blue-500/20">
                  {tag}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </motion.div>

      <div 
        className="mt-16 w-full flex justify-center"
      >
        <GlassCard className="w-full max-w-[365px] p-4 bg-black/40 border-blue-600/20 flex justify-center items-center overflow-hidden">
          <iframe 
            src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3265332" 
            style={{ border: 'none' }}
            className="w-full h-[90px] overflow-hidden"
            title="TryHackMe Badge"
          ></iframe>
        </GlassCard>
      </div>
    </section>
  );
}
