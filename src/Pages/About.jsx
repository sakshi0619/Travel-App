
// // import React from "react";

// import { code } from "framer-motion/client"

// // const About = () => {
// //   return (
// //     <div className="min-h-screen bg-gray-100 flex flex-col items-center py-16 px-4">
// //       <h1 className="text-4xl font-bold mb-8">About Us / Plan Your Trip</h1>

// //       {/* Form container */}
// //       <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl">
// //         <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

// //           {/* Destination */}
// //           <div className="flex flex-col">
// //             <label className="mb-2 font-semibold text-gray-700">Destination</label>
// //             <input
// //               type="text"
// //               placeholder="Enter Destination"
// //               className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
// //             />
// //           </div>

// //           {/* Number of People */}
// //           <div className="flex flex-col">
// //             <label className="mb-2 font-semibold text-gray-700">No. of People</label>
// //             <input
// //               type="number"
// //               placeholder="Number of People"
// //               className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
// //             />
// //           </div>

// //           {/* Check-in Date */}
// //           <div className="flex flex-col">
// //             <label className="mb-2 font-semibold text-gray-700">Check-in Date</label>
// //             <input
// //               type="date"
// //               className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
// //             />
// //           </div>

// //           {/* Check-out Date */}
// //           <div className="flex flex-col">
// //             <label className="mb-2 font-semibold text-gray-700">Check-out Date</label>
// //             <input
// //               type="date"
// //               className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
// //             />
// //           </div>

// //           {/* Submit Button */}
// //           <div className="md:col-span-2 text-center mt-4">
// //             <button
// //               type="submit"
// //               className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-full shadow-lg hover:from-yellow-500 hover:to-orange-600 transition duration-300"
// //             >
// //               Submit Inquiry
// //             </button>
// //           </div>

// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default About;




































// // updated code
// // src/pages/About.jsx
// import React from "react";
// import { Globe, Users, Map, Compass } from "lucide-react";

// const About = () => {
//   return (
//     <div className="pt-20">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">About TravelPlanner</h1>
//         <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90">
//           Your journey starts here — we make travel simple, fun, and unforgettable.
//         </p>
//       </section>

//       {/* Story Section */}
//       <section className="py-16 px-6 md:px-20 text-center md:text-left">
//         <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//           <img
//             src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
//             alt="Travel"
//             className="rounded-2xl shadow-lg"
//           />
//           <div>
//             <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Story</h2>
//             <p className="text-gray-700 leading-relaxed mb-4">
//               At <span className="font-semibold">TravelPlanner</span>, we believe
//               that travel is more than just visiting places — it’s about creating
//               memories that last a lifetime. Founded with a vision to make
//               travel easy and accessible, we’ve helped thousands of explorers
//               plan their dream trips worldwide.
//             </p>
//             <p className="text-gray-700 leading-relaxed">
//               From personalized itineraries to affordable packages, our goal is
//               to ensure you travel with comfort, joy, and confidence.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="bg-gray-100 py-16 px-6 md:px-20 text-center">
//         <h2 className="text-3xl font-bold text-blue-600 mb-12">Why Choose Us?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
//           <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//             <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
//             <h3 className="font-semibold text-lg mb-2">Worldwide Destinations</h3>
//             <p className="text-gray-600 text-sm">
//               Explore the most beautiful locations across the globe.
//             </p>
//           </div>
//           <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//             <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
//             <h3 className="font-semibold text-lg mb-2">Trusted by Travelers</h3>
//             <p className="text-gray-600 text-sm">
//               Thousands of happy customers trust us for their journeys.
//             </p>
//           </div>
//           <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//             <Map className="w-12 h-12 text-blue-600 mx-auto mb-4" />
//             <h3 className="font-semibold text-lg mb-2">Custom Itineraries</h3>
//             <p className="text-gray-600 text-sm">
//               Tailored travel plans designed just for you.
//             </p>
//           </div>
//           <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//             <Compass className="w-12 h-12 text-blue-600 mx-auto mb-4" />
//             <h3 className="font-semibold text-lg mb-2">Expert Guidance</h3>
//             <p className="text-gray-600 text-sm">
//               Get travel tips and guidance from experienced professionals.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       {/* <section className="py-16 px-6 md:px-20 text-center bg-blue-600 text-white">
//         <h2 className="text-3xl font-bold mb-4">Start Your Journey Today!</h2>
//         <p className="max-w-2xl mx-auto mb-6 opacity-90">
//           Let us help you plan the perfect trip. Book now and turn your travel
//           dreams into reality.
//         </p>
//         <a
//           href="/booknow"
//           className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition"
//         >
//           Book Now
//         </a>
//       </section> */}
//     </div>
//   );
// };

// export default About;
