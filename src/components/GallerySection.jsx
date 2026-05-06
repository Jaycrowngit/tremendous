import { motion } from 'framer-motion';
import { useState } from 'react';

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { id: 1, img: "/image/gly-0.jpg" }, { id: 2, img: "/image/gly-1.jpg" },
    { id: 3, img: "/image/gly-2.jpg" }, { id: 4, img: "/image/gly-3.jpg" },
    { id: 5, img: "/image/gly-4.jpg" }, { id: 6, img: "/image/gly-5.jpg" },
    { id: 7, img: "/image/gly-6.jpg" }, { id: 8, img: "/image/gly-7.jpg" },
    { id: 9, img: "/image/gly-8.jpg" }, { id: 10, img: "/image/gly-9.jpg" },
    { id: 11, img: "/image/gly-10.jpg" }, { id: 12, img: "/image/gly-11.jpg" },
    { id: 13, img: "/image/gly-12.jpg" },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-gradient-to-b from-white via-cream/20 to-white px-4 md:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-gold-500/[0.03] to-transparent rounded-full -mr-64 -mt-64" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-semibold">Our Moments</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy-900 mt-3 mb-5">Gallery</h2>
          <div className="h-[3px] w-16 bg-gradient-to-r from-gold-500 to-tan-600 mx-auto mb-8 rounded-full" />
          <p className="text-navy-900/40 text-base max-w-2xl mx-auto font-light">
            Moments of praise, ministry, and divine presence captured through our lens.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(item)}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] cursor-pointer transition-all duration-400 border border-navy-900/5 ${
                i === 0 || i === 5 || i === 9 ? 'row-span-2 h-[320px] sm:h-[400px] md:h-[500px]' : 'h-[150px] sm:h-[200px] md:h-[240px]'
              }`}
            >
              <motion.img src={item.img} alt="Gallery" className="w-full h-full object-cover" whileHover={{ scale: 1.08 }} transition={{ duration: 0.5 }} />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              
              {/* View Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setSelectedImage(null)} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} onClick={(e) => e.stopPropagation()} className="relative max-w-4xl w-full">
            <img src={selectedImage.img} alt="Gallery" className="w-full h-auto rounded-2xl shadow-2xl" />
            <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-navy-900 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white transition-colors shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
