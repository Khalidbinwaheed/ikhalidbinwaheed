import { GlassCard } from '../components/ui/GlassCard';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { textReveal, fadeInUp } from '../utils/animations';

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-6 py-20">
      <GlassCard className="max-w-lg w-full p-8 md:p-12 text-center" variants={fadeInUp}>
        <div className="overflow-hidden mb-6">
          <motion.h2 
            variants={textReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 dark:text-white"
          >
            Get In Touch
          </motion.h2>
        </div>
        <p className="text-gray-600 dark:text-white/70 mb-8">
          Have a project in mind or just want to say hi? I'm always open to new opportunities.
        </p>
        
        <form className="space-y-4 text-left">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <label className="block text-sm text-gray-500 dark:text-white/60 mb-2 pl-2">Email</label>
            <input 
              type="email" 
              className="w-full glass bg-gray-50 dark:bg-white/5 rounded-2xl px-5 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400/50 border border-gray-200 dark:border-transparent"
              placeholder="hello@example.com"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <label className="block text-sm text-gray-500 dark:text-white/60 mb-2 pl-2">Message</label>
            <textarea 
              rows={4}
              className="w-full glass bg-gray-50 dark:bg-white/5 rounded-2xl px-5 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400/50 resize-none border border-gray-200 dark:border-transparent"
              placeholder="Your message..."
            />
          </motion.div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-blue-600 dark:bg-white text-white dark:text-black font-bold py-4 rounded-2xl hover:bg-blue-700 dark:hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg"
          >
            <Send className="w-4 h-4" />
            Send Message
          </motion.button>
        </form>
      </GlassCard>
    </section>
  );
}
