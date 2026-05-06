import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <header className="relative h-[90vh] md:h-screen flex items-center justify-center bg-navy-900 text-center overflow-hidden">
      {/* Animated Background Gradients */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900 to-navy-900/90"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Navy Overlay */}
      <div className="absolute inset-0 bg-navy-900/50"></div>

      {/* Premium Gold Dust Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.15) 0%, transparent 50%),
                          radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)`,
      }}></div>

      {/* Animated Accent Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 border border-gold-500/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 border border-gold-500/10 rounded-full blur-3xl opacity-30"></div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 px-4 md:px-8 space-y-8"
      >
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-block"
        >
          <div className="border border-gold-500/50 rounded-full px-6 py-2 bg-gold-500/10 backdrop-blur-sm">
            <p className="text-gold-500 text-sm font-serif tracking-widest">WELCOME TO</p>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-500 via-gold-dust to-tan-600 drop-shadow-2xl leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Tremendous
          <br />
          Voices
        </motion.h1>

        {/* Subtitle with Scripture */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-white text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
            A Ministry of <span className="text-gold-dust font-semibold">Prophetic Worship</span> & <span className="text-gold-dust font-semibold">Divine Presence</span>
          </p>
          
          <motion.p 
            className="text-gold-500/90 text-lg md:text-xl italic max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            "I will sing to the Lord as long as I live; I will sing praise to my God while I have my being."
          </motion.p>
          <p className="text-gold-dust text-sm md:text-base font-serif tracking-widest">PSALM 104:33</p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="pt-6"
        >
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 md:px-14 py-5 md:py-6 bg-gradient-to-r from-gold-500 to-tan-600 text-navy-900 text-lg md:text-xl font-bold rounded-full shadow-2xl hover:shadow-gold-500/50 transition-all duration-300 overflow-hidden"
          >
            <motion.span
              className="relative z-10 flex items-center gap-2"
              whileHover={{ gap: 8 }}
            >
              Experience the Sound
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-tan-600 to-gold-500 rounded-full"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{ zIndex: 0 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-10 z-20"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <motion.svg 
          className="w-7 h-7 text-gold-500"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </motion.div>
    </header>
  );
};

export default Hero;
