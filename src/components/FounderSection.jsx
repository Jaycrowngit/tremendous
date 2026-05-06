import { motion } from 'framer-motion';
import founderImg from '../../image/founder.jpg';

export const FounderSection = () => {
  const founder = {
    name: "Oladokun Oluwabukunmi",
    alias: "HIGHBEEKAY",
    title: "Convener & Founder",
    bio: "A man of God with over 25 years of ministry experience. Bishop David established Tremendous Voices to create a platform where worship becomes a transformative force in nations. His passion for prophetic worship has ignited a movement that continues to shape communities and transform lives across the globe.",
    extendedBio: "Under his leadership, Tremendous Voices has grown from a small prayer group into a global worship movement, touching hearts in multiple nations. His unwavering commitment to excellence in worship and deep-rooted faith have become the foundation upon which this ministry stands.",
    quote: "Worship is not what we do; it's who we become in His presence.",
  };

  return (
    <section id="founders" className="py-24 md:py-32 bg-white px-4 md:px-8 relative overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-gold-500/[0.04] to-transparent rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-navy-900/[0.03] to-transparent rounded-full -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-semibold">The Visionary</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy-900 mt-3 mb-4">
            Meet the Founder
          </h2>
          <div className="h-[3px] w-16 bg-gradient-to-r from-gold-500 to-tan-600 mx-auto rounded-full" />
        </motion.div>

        {/* ===== TWO-COLUMN GRID: Image | Content ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT — Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative frame behind the image */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold-500/20 rounded-2xl" />
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-gold-500/10 to-transparent rounded-2xl" />

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <motion.img
                src={founderImg}
                alt={founder.name}
                className="w-full h-[450px] md:h-[550px] lg:h-[600px] object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
              />
              {/* Bottom gradient veil */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900/60 to-transparent" />

              {/* Quote on image */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-white/90 text-sm md:text-base italic font-light leading-relaxed">
                  "{founder.quote}"
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — Founder Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            {/* Alias Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-1.5 bg-gold-500/10 text-gold-500 text-xs font-bold tracking-[0.2em] uppercase rounded-full border border-gold-500/20">
                {founder.alias}
              </span>
            </motion.div>

            {/* Name */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-navy-900 leading-tight mb-2">
              {founder.name}
            </h3>

            {/* Title */}
            <p className="text-gold-500 font-semibold text-sm tracking-[0.15em] uppercase mb-6">
              {founder.title}
            </p>

            {/* Accent Line */}
            <div className="h-[3px] w-14 bg-gradient-to-r from-gold-500 to-tan-600 mb-8 rounded-full" />

            {/* Bio */}
            <p className="text-navy-900/60 text-base md:text-lg leading-relaxed mb-5 font-light">
              {founder.bio}
            </p>
            <p className="text-navy-900/50 text-base leading-relaxed mb-8 font-light">
              {founder.extendedBio}
            </p>

            {/* Decorative Scripture Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cream to-white p-6 rounded-xl border border-gold-500/15 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span className="text-gold-500 font-serif text-4xl leading-none mt-[-4px]">"</span>
                <div>
                  <p className="text-navy-900/70 italic text-sm md:text-base leading-relaxed">
                    Worship is not what we do; it's who we become in His presence. Every note, every melody is a bridge between heaven and earth.
                  </p>
                  <p className="text-gold-500 text-xs font-semibold mt-3 tracking-widest uppercase">
                    — {founder.name}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 pt-16 border-t border-navy-900/8 text-center"
        >
          <p className="text-lg md:text-xl text-navy-900/50 leading-relaxed max-w-3xl mx-auto font-light">
            <span className="text-gold-500 font-serif text-3xl">"</span>
            Our founder envisioned a ministry that transcends mere performance to become a genuine encounter with the divine.
            <span className="text-gold-500 font-serif text-3xl">"</span>
          </p>
          <p className="mt-5 text-navy-900/35 italic text-sm">
            Established with the mandate to colonize the earth with heaven's worship
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
