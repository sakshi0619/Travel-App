// import React from "react";

// import { code } from "framer-motion/client"

// const Gallery = () => {
//   return (
//     <div className="text-center py-10">
//       <h2 className="text-3xl font-bold mb-6">Travel Gallery</h2>
//       <p className="text-gray-600">Beautiful moments from our trips will be shown here.</p>
//     </div>
//   );
// };

// export default Gallery;












import React, { useState } from "react";

const images = [
  "/images/paris.jpg",
  "/images/dubai.jpg",
  "/images/bali.jpg",
  "/images/london.jpg",
  "/images/italy.jpg",
  "/images/japan.jpg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-bold mb-6">Travel Gallery</h2>
      <p className="text-gray-600">Beautiful moments from our trips will be shown here.</p>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Gallery ${idx}`}
            className="h-40 w-full object-cover rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
