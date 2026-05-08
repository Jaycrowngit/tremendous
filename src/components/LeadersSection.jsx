import { motion } from 'framer-motion';
import { useState } from 'react';

export const LeadersSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const leaders = [
    { id: 1, name: "Oladokun Oluwabukunmi", role: "Visionary Lead", scripture: "Lead with vision and faith", img: "/image/background.jpg" },
    { id: 2, name: "Oladokun Victoria", role: "Secretary", scripture: "Direct worship with excellence", img: "/image/secretary.jpg" },
    { id: 3, name: "John Adeoye", role: "Media Lead", scripture: "Amplify the message of truth", img: "/image/jayc.jpg" },
  ];

  return (
    <section id="leaders" className="py-24 md:py-32 bg-gradient-to-b from-white via-cream/30 to-white px-4 md:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-gold-500/[0.03] to-transparent rounded-full -ml-64 -mt-64" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-semibold">Our Excellence</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy-900 mt-3 mb-5">Meet Our Leadership</h2>
          <div className="h-[3px] w-16 bg-gradient-to-r from-gold-500 to-tan-600 mx-auto mb-8 rounded-full" />
          <p className="text-navy-900/40 text-base max-w-2xl mx-auto font-light leading-relaxed">
            Our leaders are dedicated to guiding our congregation with wisdom, faith, and a heart for service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <motion.div key={leader.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15, duration: 0.6 }} viewport={{ once: true }}
              onHoverStart={() => setHoveredId(leader.id)} onHoverEnd={() => setHoveredId(null)} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-all duration-400 h-[400px] sm:h-[480px] md:h-[540px] border border-navy-900/5">
                <motion.img src={leader.img} alt={leader.name} className="w-full h-full object-cover" whileHover={{ scale: 1.06 }} transition={{ duration: 0.5 }} />
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-navy-900/80 via-navy-900/40 to-transparent z-10" />
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-500 to-tan-600 z-20" />
                <motion.div className="absolute bottom-0 left-0 right-0 p-6 z-20" animate={{ y: hoveredId === leader.id ? -10 : 0 }} transition={{ duration: 0.3 }}>
                  <h3 className="text-white text-xl md:text-2xl font-serif font-bold mb-1">{leader.name}</h3>
                  <p className="text-gold-500 text-xs tracking-[0.15em] uppercase font-semibold">{leader.role}</p>
                </motion.div>
                <motion.div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center p-8 z-30" initial={{ opacity: 0 }} animate={{ opacity: hoveredId === leader.id ? 1 : 0 }} transition={{ duration: 0.3 }} style={{ pointerEvents: hoveredId === leader.id ? 'auto' : 'none' }}>
                  <div className="text-center">
                    <h4 className="text-navy-900 font-serif text-xl font-bold mb-2">{leader.name}</h4>
                    <p className="text-gold-500 text-xs tracking-widest uppercase font-semibold mb-4">{leader.role}</p>
                    <div className="h-[2px] w-10 bg-gradient-to-r from-gold-500 to-tan-600 mx-auto mb-4 rounded-full" />
                    <p className="text-navy-900/50 text-sm italic font-light">"{leader.scripture}"</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} viewport={{ once: true }} className="mt-20 pt-16 border-t border-navy-900/5 text-center">
          <p className="text-lg md:text-xl text-navy-900/45 max-w-3xl mx-auto leading-relaxed font-light">
            <span className="text-gold-500 font-serif text-3xl">"</span>
            He chose David his servant... to shepherd Jacob his people.
            <span className="text-gold-500 font-serif text-3xl">"</span>
          </p>
          <p className="text-navy-900/30 italic mt-4 text-sm">— Psalm 78:70-71</p>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadersSection;
