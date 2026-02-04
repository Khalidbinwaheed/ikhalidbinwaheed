import { motion } from 'framer-motion';
import { ShoppingBag, Search, User, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export function VRFashion() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans relative selection:bg-purple-500/30">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-black" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,50,255,0.1),transparent_70%)]" />
        {/* Placeholder for the immersive background image if available, otherwise using gradients */}
         <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1624523996537-88540854b458?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-600 blur-[2px] group-hover:blur-none transition-all duration-300" />
          <span className="text-xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            VR.FASHION
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <a href="#" className="hover:text-white transition-colors">Collection</a>
          <a href="#" className="text-white">VR Experience</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="relative text-gray-400 hover:text-white transition-colors">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] text-center px-4">
        
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
        >
             <div className="text-cyan-400 mb-4 tracking-[0.2em] text-sm uppercase"> immersive shopping</div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 relative"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-purple-300 via-purple-500 to-indigo-600 filter drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            VR FASHION
          </span>
          <br />
          <span className="text-white filter drop-shadow-2xl">
            EXPERIENCE
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed"
        >
          Step into the future of fashion with our immersive VR shopping experience. 
          Discover premium clothing in a whole new dimension.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
            <button className="group relative px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-bold tracking-wide overflow-hidden transition-all shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_40px_rgba(147,51,234,0.7)]">
                <span className="relative z-10 flex items-center gap-2">
                    Explore Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
            </button>
            
            <button className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full text-white font-medium border border-white/10 transition-all">
                <Play className="w-4 h-4 fill-white" />
                Try VR Experience
            </button>
        </motion.div>

        {/* Floating Elements (Decorative) */}
        <div className="absolute top-1/4 left-10 w-24 h-48 border border-white/10 rounded-full animate-float hidden lg:block" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-purple-500/20 rounded-full animate-float delay-1000 hidden lg:block" />

      </main>

       {/* Scroll Indicator */}
       <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowRight className="w-6 h-6 rotate-90 text-white" />
      </motion.div>
    </div>
  );
}
