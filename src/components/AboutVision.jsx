import { motion } from 'framer-motion';

export const AboutVision = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-white px-4 md:px-8 relative overflow-hidden">
      {/* Subtle Decorative Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-gold-500/[0.03] to-transparent rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-navy-900/[0.02] to-transparent rounded-full -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-semibold">Our Heart</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy-900 mt-3 mb-5">
            Vision & Mission
          </h2>
          <div className="h-[3px] w-16 bg-gradient-to-r from-gold-500 to-tan-600 mx-auto mb-8 rounded-full" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-navy-900/40 text-base md:text-lg max-w-2xl mx-auto italic font-light"
          >
            "Sing to the Lord a new song; sing to the Lord, all the earth." — Psalm 96:1
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {/* Vision Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="group relative bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-400 border border-navy-900/5 overflow-hidden"
          >
            {/* Top Accent */}
            <div className="h-1 bg-gradient-to-r from-gold-500 to-tan-600" />

            <div className="p-8 md:p-10">
              {/* Icon */}
              <motion.div className="mb-6" whileHover={{ rotate: 8 }}>
                <div className="w-14 h-14 bg-gradient-to-br from-gold-500/10 to-gold-500/5 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-serif text-navy-900 mb-4">Vision</h3>
              <div className="h-[2px] w-10 bg-gradient-to-r from-gold-500 to-tan-600 mb-6 rounded-full" />

              <p className="text-navy-900/55 text-base leading-relaxed mb-8 font-light">
                To raise a generation of worshippers who minister in spirit and truth, becoming vessels through which the divine presence flows into the earth.
              </p>

              <motion.div
                className="pt-6 border-t border-navy-900/5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-gold-500/80 font-serif italic text-sm leading-relaxed">
                  "He chose David his servant... to shepherd Jacob his people."
                  <br />
                  <span className="text-navy-900/30 text-xs not-italic">— Psalm 78:70-71</span>
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="group relative bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-400 border border-navy-900/5 overflow-hidden"
          >
            {/* Top Accent */}
            <div className="h-1 bg-gradient-to-r from-tan-600 to-gold-500" />

            <div className="p-8 md:p-10">
              {/* Icon */}
              <motion.div className="mb-6" whileHover={{ rotate: 8 }}>
                <div className="w-14 h-14 bg-gradient-to-br from-gold-500/10 to-gold-500/5 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-serif text-navy-900 mb-4">Mission</h3>
              <div className="h-[2px] w-10 bg-gradient-to-r from-tan-600 to-gold-500 mb-6 rounded-full" />

              <p className="text-navy-900/55 text-base leading-relaxed mb-8 font-light">
                Spreading the gospel through prophetic melodies and scriptural praise, colonizing the earth with the atmosphere of heaven through the instrumentality of worship.
              </p>

              <motion.div
                className="pt-6 border-t border-navy-900/5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-gold-500/80 font-serif italic text-sm leading-relaxed">
                  "Sing to the Lord, all the earth."
                  <br />
                  <span className="text-navy-900/30 text-xs not-italic">— Psalm 96:1</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutVision;
