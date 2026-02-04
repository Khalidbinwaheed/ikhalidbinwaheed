import { GlassCard } from '../components/ui/GlassCard';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, slideInLeft, textReveal } from '../utils/animations';

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-6 bg-transparent">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <GlassCard variants={slideInLeft} className="flex flex-col justify-center">
          <div className="overflow-hidden mb-6">
            <motion.h2 variants={textReveal} className="text-4xl font-bold text-gray-900 dark:text-white">About Me</motion.h2>
          </div>
          <p className="text-gray-700 dark:text-white/80 leading-relaxed text-lg">
            Frontend developer with a passion for cybersecurity, digital forensics, and cross-platform app development. 
            Skilled in Flutter, Dart, JavaScript, and forensic tooling across multi-OS labs. I blend creative UI/UX design 
            with technical rigor automating workflows, documenting red teaming tools, and building secure, resilient systems.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <div className="glass px-4 py-2 rounded-full text-sm font-medium text-gray-800 dark:text-white/90 bg-white/50 dark:bg-white/10">React</div>
            <div className="glass px-4 py-2 rounded-full text-sm font-medium text-gray-800 dark:text-white/90 bg-white/50 dark:bg-white/10">TypeScript</div>
            <div className="glass px-4 py-2 rounded-full text-sm font-medium text-gray-800 dark:text-white/90 bg-white/50 dark:bg-white/10">Flutter</div>
          </div>
        </GlassCard>

        <GlassCard variants={fadeInUp} className="p-6">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-white/90 text-sm">Python programming</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '40%' }} transition={{ duration: 1, delay: 0.5 }} className="bg-blue-500 h-2 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-white/90 text-sm">Problem-solving skills</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '65%' }} transition={{ duration: 1, delay: 0.6 }} className="bg-blue-500 h-2 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-white/90 text-sm">TypeScript</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '60%' }} transition={{ duration: 1, delay: 0.7 }} className="bg-blue-500 h-2 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-white/90 text-sm">Dart</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '90%' }} transition={{ duration: 1, delay: 0.8 }} className="bg-blue-500 h-2 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-white/90 text-sm">Wireshark</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '65%' }} transition={{ duration: 1, delay: 0.9 }} className="bg-blue-500 h-2 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-white/90 text-sm">Angry IP / Spider Foot</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '75%' }} transition={{ duration: 1, delay: 1.0 }} className="bg-blue-500 h-2 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-white/90 text-sm">Firebase / Firestore</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '55%' }} transition={{ duration: 1, delay: 1.1 }} className="bg-blue-500 h-2 rounded-full" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-white/90 text-sm">Student mentorship</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '95%' }} transition={{ duration: 1, delay: 1.2 }} className="bg-blue-500 h-2 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-white/90 text-sm">HTML, CSS, Bootstrap, JS</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '70%' }} transition={{ duration: 1, delay: 1.3 }} className="bg-blue-500 h-2 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-white/90 text-sm">Flutter</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '65%' }} transition={{ duration: 1, delay: 1.4 }} className="bg-blue-500 h-2 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-white/90 text-sm">Recon-ng </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '75%' }} transition={{ duration: 1, delay: 1.5 }} className="bg-blue-500 h-2 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-white/90 text-sm">Packet Tracer</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '75%' }} transition={{ duration: 1, delay: 1.5 }} className="bg-blue-500 h-2 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-white/90 text-sm">Hunter.io / OSINT Framework</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '60%' }} transition={{ duration: 1, delay: 1.6 }} className="bg-blue-500 h-2 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}
