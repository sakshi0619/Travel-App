// import React from "react";

import { code } from "framer-motion/client"

// const CTA = () => {
//   return (
//     <div className="bg-blue-600 text-white text-center py-12 rounded-2xl shadow-md">
//       <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
//       <p className="mb-6">Book your dream trip today and make memories for a lifetime.</p>
//       <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
//         Book Now
//       </button>
//     </div>
//   );
// };

// export default CTA;












// updated code
import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section
      className="relative h-[60vh] flex items-center justify-center bg-cover bg-center rounded-2xl shadow-lg overflow-hidden"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center text-white px-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          Discover amazing destinations and create unforgettable memories.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-md transition">
          Plan My Trip
        </button>
      </motion.div>
    </section>
  );
};

export default CTA;
