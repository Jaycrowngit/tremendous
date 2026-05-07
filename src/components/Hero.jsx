import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/image/background.jpg')` }}
      />

      {/* White Gradient Overlays — keeps it bright and clean */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-white/70" />

      {/* Subtle Gold Radials */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 15% 85%, rgba(212, 175, 55, 0.15) 0%, transparent 50%),
                          radial-gradient(circle at 85% 20%, rgba(212, 175, 55, 0.1) 0%, transparent 40%)`,
      }} />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-10 text-center px-4 md:px-8 max-w-5xl mx-auto pt-24"
      >
        {/* Welcome Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-block mb-8"
        >
          <div className="border border-navy-900/15 rounded-full px-7 py-2.5 bg-white/60 backdrop-blur-sm shadow-sm">
            <p className="text-navy-900/60 text-xs font-semibold tracking-[0.3em] uppercase">
              Welcome to
            </p>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-serif font-bold leading-[0.95] mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <span className="text-navy-900">Tremendous</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 via-gold-dust to-tan-600">
            Voices
          </span>
        </motion.h1>

        {/* Accent Line */}
        <motion.div
          className="h-[3px] w-20 bg-gradient-to-r from-gold-500 to-tan-600 mx-auto mb-8 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        />

        {/* Subtitle */}
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <p className="text-navy-900/70 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
            A Ministry of{' '}
            <span className="text-navy-900 font-semibold">Prophetic Worship</span>
            {' '}&{' '}
            <span className="text-navy-900 font-semibold">Divine Presence</span>
          </p>

          <motion.p
            className="text-navy-900/50 text-base md:text-lg italic max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            "I will sing to the Lord as long as I live; I will sing praise to my God while I have my being."
          </motion.p>
          <p className="text-gold-500 text-sm font-serif tracking-widest font-semibold">PSALM 104:33</p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="pt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#volunteer-section"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(212, 175, 55, 0.3)' }}
            whileTap={{ scale: 0.96 }}
            className="group px-10 py-4 bg-gradient-to-r from-navy-900 to-navy-900/90 text-white text-base font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            Join the Team
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="px-10 py-4 bg-white/70 backdrop-blur-sm border border-navy-900/15 text-navy-900 text-base font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-white transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            Our Story
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-navy-900/30 text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
          <motion.div
            className="w-6 h-10 border-2 border-navy-900/20 rounded-full flex justify-center pt-2"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-gold-500 rounded-full"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;
