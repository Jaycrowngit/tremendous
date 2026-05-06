import { motion } from 'framer-motion';
import { useState } from 'react';

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery items with placeholder descriptions
  const galleryItems = [
    { id: 1,  img: "/image/gly-0.jpg",},
    { id: 2,  img: "/image/gly-1.jpg", },
    { id: 3,  img: "/image/gly-2.jpg", },
    { id: 4,  img: "/image/gly-3.jpg", },
    { id: 5,  img: "/image/gly-4.jpg", },
    { id: 6,  img: "/image/gly-5.jpg", },
    { id: 7,  img: "/image/gly-6.jpg", },
    { id: 8,  img: "/image/gly-7.jpg", },
    { id: 9,  img: "/image/gly-8.jpg", },
    { id: 10,  img: "/image/gly-9.jpg", },
    { id: 11,  img: "/image/gly-10.jpg", },
    { id: 12,  img: "/image/gly-11.jpg", },
    { id: 13,  img: "/image/gly-12.jpg", },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="gallery" className="py-28 bg-gradient-to-b from-cream via-white to-cream px-4 md:px-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -mr-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl -ml-48"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-gold-500 font-serif text-sm tracking-widest uppercase block mb-4">Our Moments</span>
          <h2
            className="text-5xl md:text-6xl font-serif text-navy-900 mb-6"
          >
            GALLERY
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-gold-500 to-tan-600 mx-auto mb-8"></div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg italic max-w-2xl mx-auto font-light"
          >
            Moments of praise, ministry, and divine presence captured through our lens.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onClick={() => setSelectedImage(item)}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl cursor-pointer h-96 transition-shadow duration-300"
            >
              {/* Accent Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 to-tan-600 z-20"></div>

              <motion.img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.6 }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

              {/* Text Overlay */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                initial={{ y: 20 }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl md:text-2xl font-serif font-bold text-gold-500 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-200 capitalize font-light">{item.category}</p>
              </motion.div>

              {/* View Icon */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              >
                <svg className="w-12 h-12 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 13H7" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full"
          >
            <img
              src={selectedImage.img}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />

            <div className="absolute bottom-6 left-6 right-6 bg-navy-900/90 backdrop-blur-sm rounded-lg p-4">
              <h3 className="text-gold-500 text-2xl font-serif font-bold mb-1">
                {selectedImage.title}
              </h3>
              <p className="text-white capitalize text-sm">{selectedImage.category}</p>
            </div>

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-navy-900/90 text-gold-500 rounded-full p-2 hover:bg-gold-500 hover:text-navy-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
