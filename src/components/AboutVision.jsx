import { motion } from 'framer-motion';

export const AboutVision = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-28 bg-gradient-to-b from-cream via-white to-cream px-4 md:px-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -mr-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl -ml-48"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-gold-500 font-serif text-sm tracking-widest uppercase">Our Heart</span>
          </div>
          <h2 
            className="text-5xl md:text-6xl font-serif text-navy-900 mb-6"
          >
            Vision & Mission
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-gold-500 to-tan-600 mx-auto mb-8"></div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600 text-xl max-w-2xl mx-auto italic font-light"
          >
            "Sing to the Lord a new song; sing to the Lord, all the earth." — Psalm 96:1
          </motion.p>
        </motion.div>

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
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 bg-white backdrop-blur-sm border border-gold-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Accent Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 to-tan-600"></div>
            
            <div className="relative p-8 md:p-12 z-10">
              <motion.div 
                className="mb-6 inline-block"
                whileHover={{ rotate: 10 }}
              >
                <div className="p-4 bg-gold-500/10 rounded-xl">
                  <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-serif text-navy-900 mb-4 leading-tight">
                Vision
              </h3>
              
              <div className="w-12 h-1 bg-gradient-to-r from-gold-500 to-tan-600 mb-6"></div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6 font-light">
                To raise a generation of worshippers who minister in spirit and truth, becoming vessels through which the divine presence flows into the earth.
              </p>

              <motion.p 
                className="text-gold-500 font-serif italic text-base leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                "He chose David his servant... to shepherd Jacob his people."
                <br />
                <span className="text-sm">— Psalm 78:70-71</span>
              </motion.p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 bg-white backdrop-blur-sm border border-gold-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Accent Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tan-600 to-gold-500"></div>
            
            <div className="relative p-8 md:p-12 z-10">
              <motion.div 
                className="mb-6 inline-block"
                whileHover={{ rotate: 10 }}
              >
                <div className="p-4 bg-gold-500/10 rounded-xl">
                  <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-serif text-navy-900 mb-4 leading-tight">
                Mission
              </h3>
              
              <div className="w-12 h-1 bg-gradient-to-r from-tan-600 to-gold-500 mb-6"></div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6 font-light">
                Spreading the gospel through prophetic melodies and scriptural praise, colonizing the earth with the atmosphere of heaven through the instrumentality of worship.
              </p>

              <motion.p 
                className="text-gold-500 font-serif italic text-base leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                "Sing to the Lord, all the earth."
                <br />
                <span className="text-sm">— Psalm 96:1</span>
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutVision;
