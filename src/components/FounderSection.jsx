import { motion } from 'framer-motion';
import { useState } from 'react';

export const FounderSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  const founders = [
    {
      id: 1,
      name: "Oladokun Oluwabukunmi",
      alaisan: "HIGHBEEKAY",
      title: "Convener & Founder",
      bio: "A man of God with over 25 years of ministry experience. Bishop David established Tremendous Voices to create a platform where worship becomes a transformative force in nations.",
      image: "/image/founder.jpg",
      quote: "Worship is not what we do; it's who we become in His presence."
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="founders" className="py-28 bg-gradient-to-b from-white via-cream to-white px-4 md:px-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl -mr-36"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-navy-900/5 rounded-full blur-3xl -ml-36"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        {/* Founders Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {founders.map((founder) => (
            <motion.div
              key={founder.id}
              variants={itemVariants}
              className="group"
            >
              <div className="relative mb-8">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl h-96 md:h-[500px]">
                  <motion.img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-navy-900/20 to-transparent"></div>

                  {/* Quote Overlay - Bottom Left */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-8"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gold-500 text-lg italic font-light">
                      "{founder.quote}"
                    </p>
                  </motion.div>
                </div>

                {/* Info Card - Positioned Over Image */}
                <motion.div
                  className="absolute -bottom-8 -right-4 lg:-right-8 w-80 bg-white rounded-2xl shadow-2xl p-8 border-2 border-gold-500/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl md:text-3xl font-serif text-navy-900 mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-gold-500 font-semibold text-sm tracking-widest uppercase mb-4">
                    {founder.title}
                  </p>
                  <div className="w-12 h-1 bg-gradient-to-r from-gold-500 to-tan-600"></div>
                </motion.div>
              </div>

              {/* Bio Section */}
              <motion.div
                className="mt-20 lg:mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setExpandedId(expandedId === founder.id ? null : founder.id)}
                  className="group/btn flex items-center gap-2 text-navy-900 hover:text-gold-500 transition-colors text-lg font-semibold mb-4"
                >
                  <span>Full Biography</span>
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: expandedId === founder.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </motion.svg>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedId === founder.id ? 'auto' : 0,
                    opacity: expandedId === founder.id ? 1 : 0
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    {founder.bio}
                  </p>
                  <motion.div
                    className="flex gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: expandedId === founder.id ? 1 : 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <button className="px-6 py-2 bg-navy-900 text-gold-500 rounded-full hover:bg-gold-500 hover:text-navy-900 transition-colors font-semibold">
                      Read More
                    </button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-32 pt-16 border-t-2 border-gold-500/30 text-center"
        >
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <span className="text-gold-500 font-serif text-3xl">"</span>
            Our founders envisioned a ministry that transcends mere performance to become a genuine encounter with the divine.
            <span className="text-gold-500 font-serif text-3xl">"</span>
          </p>
          <p className="mt-6 text-gray-600 italic">Established with the mandate to colonize the earth with heaven's worship</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
