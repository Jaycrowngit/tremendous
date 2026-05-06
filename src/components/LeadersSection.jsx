import { motion } from 'framer-motion';
import { useState } from 'react';

export const LeadersSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const leaders = [
    {
      id: 1,
      name: "Min. John Doe",
      role: "Visionary Lead",
      scripture: "Lead with vision and faith",
      img: "/image/background.jpg"
    },
    {
      id: 2,
      name: "Min. Jane Smith",
      role: "Manager",
      scripture: "Direct worship with excellence",
      img: "/image/gly-4.jpg"
    },
    {
      id: 3,
      name: "Deacon James",
      role: "Techincal & Event Lead",
      scripture: "Amplify the message of truth",
      img: "/image/gly-01.jpg"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="leaders" className="py-28 bg-gradient-to-b from-white via-cream to-white px-4 md:px-8 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -ml-48 -mt-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl -mr-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-gold-500 font-serif text-sm tracking-widest uppercase block mb-4">Our Excellence</span>
          <h2
            className="text-5xl md:text-6xl font-serif text-navy-900 mb-6"
          >
            Meet Our Leadership Team
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-gold-500 to-tan-600 mx-auto mb-8"></div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg italic max-w-2xl mx-auto font-light"
          >
            Our leaders are dedicated to guiding our congregation with wisdom, faith, and a heart for service. Each one brings a unique gift to our ministry, working together to fulfill our mission and vision.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {leaders.map((leader) => (
            <motion.div
              key={leader.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredId(leader.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 h-[550px] md:h-[600px]">
                {/* Leader Image */}
                <motion.img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Gradient Overlays */}
                <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-navy-900 via-navy-900/70 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 via-transparent to-navy-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5"></div>

                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 to-tan-600 z-20"></div>

                {/* Leader Info - Bottom */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20"
                  animate={{ y: hoveredId === leader.id ? -15 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-gold-500 text-2xl md:text-3xl font-serif font-bold mb-2 leading-tight">
                    {leader.name}
                  </h3>
                  <p className="text-white/90 text-sm tracking-widest uppercase font-semibold">
                    {leader.role}
                  </p>
                </motion.div>

                {/* Hover Scripture Overlay */}
                <motion.div
                  className="absolute inset-0 bg-navy-900/95 backdrop-blur-sm flex items-center justify-center p-6 md:p-8 z-30 rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === leader.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  pointerEvents={hoveredId === leader.id ? 'auto' : 'none'}
                >
                  <div className="text-center">
                    <div className="mb-4 p-3 bg-gold-500/20 rounded-full w-fit mx-auto">
                      <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-gold-500 text-lg md:text-xl italic font-light leading-relaxed">
                      "{leader.scripture}"
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scripture Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-28 pt-16 border-t border-gold-500/30 text-center"
        >
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
            <span className="text-gold-500 font-serif text-4xl">"</span>
            He chose David his servant... to shepherd Jacob his people.
            <span className="text-gold-500 font-serif text-4xl">"</span>
          </p>
          <p className="text-gray-600 italic mt-4">— Psalm 78:70-71</p>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadersSection;
