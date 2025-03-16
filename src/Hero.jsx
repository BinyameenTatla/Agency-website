'use client';

import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-[100vh] bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute w-[400px] h-[400px] bg-[#fff] rounded-full opacity-20 blur-3xl"
          initial={{ x: '-50%', y: '-50%', scale: 0 }}
          animate={{ x: ['-50%', '50%', '-50%'], y: ['-50%', '50%', '-50%'], scale: [0, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <motion.h1
          className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 mt-[5%] md:mt-[6px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        ><br></br>
          Build Stunning Websites <br />
          <span className="text-blue-500">That Convert</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl max-w-[600px] mx-auto mb-1 mt-[20px] text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        >
          We specialize in designing high-converting websites <br />  
          that attract leads and engage visitors effectively, <br />
          driving significant growth and revenue for your business.
        </motion.p><br></br>

        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-2 md:gap-4 mt-[6px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
        >
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm py-4 px-3 md:text-base md:py-3 md:px-8 rounded-xl transition duration-300 shadow-xl">
            Contact me
          </button>
        </motion.div>
      </div>
    </section>
  );
};
