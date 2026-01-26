// // src/components/PopularDestinations.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const destinations = [
//   {
//     id: 1,
//     name: "Paris",
//     country: "France",
//     image: "/images/paris.jpg",
//     description: "The city of love, Eiffel Tower, cafes, and art museums.",
//   },
//   {
//     id: 2,
//     name: "Bali",
//     country: "Indonesia",
//     image: "/images/bali.jpg",
//     description: "Tropical paradise with beaches, temples, and nightlife.",
//   },
//   {
//     id: 3,
//     name: "New York",
//     country: "USA",
//     image: "/images/newyork.jpg",
//     description: "The city that never sleeps, skyscrapers, and Times Square.",
//   },
// ];

// const PopularDestinations = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section Title */}
//         <h2 className="text-3xl font-bold text-gray-800 text-center">
//           Popular Destinations
//         </h2>

//         {/* Grid of cards */}
//         <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {destinations.map((dest, index) => (
//             <motion.div
//               key={dest.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.8 }}
//               className="relative bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
//               onClick={() =>
//                 navigate(`/destination/${dest.id}`, { state: dest })
//               }
//             >
//               {/* Image */}
//               <img
//                 src={dest.image}
//                 alt={dest.name}
//                 className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
//               />

//               {/* Hover Overlay with Book Now */}
//               <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation(); // prevent card click
//                     navigate("/book-now"); // go to booking page
//                   }}
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl shadow-md"
//                 >
//                   Book Now
//                 </button>
//               </div>

//               {/* Card Content */}
//               <div className="p-5">
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   {dest.name}
//                 </h3>
//                 <p className="text-gray-600">{dest.country}</p>
//                 <p className="text-sm text-gray-500 mt-2">
//                   {dest.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* View More Destinations button */}
//         <div className="mt-12 text-center">
//           <button
//             onClick={() => navigate("/destinations")}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-md transition font-semibold"
//           >
//             View More Destinations
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PopularDestinations;










// // src/pages/PopularDestinations.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const allDestinations = [
//   { id: 1, name: "Goa", category: "Beach", image: "/images/goa.jpg" },
//   { id: 2, name: "Manali", category: "Mountain", image: "/images/manali.jpg" },
//   { id: 3, name: "Jaipur", category: "City", image: "/images/jaipur.jpg" },
//   { id: 4, name: "Kerala", category: "Beach", image: "/images/kerala.jpg" },
//   { id: 5, name: "Shimla", category: "Mountain", image: "/images/shimla.jpg" },
//   { id: 6, name: "Delhi", category: "City", image: "/images/delhi.jpg" },
// ];

// const PopularDestinations = () => {
//   const [showMore, setShowMore] = useState(false);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");
//   const navigate = useNavigate();

//   const displayedDestinations = showMore ? allDestinations : allDestinations.slice(0, 3);

//   const filteredDestinations = displayedDestinations.filter((d) => {
//     return (
//       d.name.toLowerCase().includes(search.toLowerCase()) &&
//       (filter === "All" || d.category === filter)
//     );
//   });

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
//         Popular Destinations
//       </h1>

//       {/* Search + Filter (only when showMore is true) */}
//       {showMore && (
//         <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center">
//           <input
//             type="text"
//             placeholder="Search destination..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="border px-4 py-2 rounded-lg focus:outline-none w-full md:w-1/3"
//           />
//           <select
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//             className="border px-4 py-2 rounded-lg focus:outline-none w-full md:w-1/4"
//           >
//             <option value="All">All Categories</option>
//             <option value="Beach">Beaches</option>
//             <option value="Mountain">Mountains</option>
//             <option value="City">Cities</option>
//           </select>
//         </div>
//       )}

//       {/* Destinations */}
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {filteredDestinations.map((dest) => (
//           <div
//             key={dest.id}
//             className="bg-white shadow-lg rounded-xl overflow-hidden"
//           >
//             <img src={dest.image} alt={dest.name} className="h-40 w-full object-cover" />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold">{dest.name}</h2>
//               <p className="text-gray-600">{dest.category}</p>
//               <button
//                 onClick={() => navigate("/book-now")}
//                 className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
//               >
//                 Book Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* More/Less Button */}
//       <div className="flex justify-center mt-6">
//         <button
//           onClick={() => setShowMore(!showMore)}
//           className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg"
//         >
//           {showMore ? "Show Less" : "View More Destinations"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PopularDestinations;


















// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { TripContext } from "../context/TripContext";

// const popularDestinations = [
//   { name: "Goa", image: "/images/goa.jpg", description: "Beautiful beaches and vibrant nightlife.", country: "India", category: "Beach" },
//   { name: "Manali", image: "/images/manali.jpg", description: "Snow-capped mountains and adventure sports.", country: "India", category: "Mountain" },
//   { name: "Paris", image: "/images/paris.jpg", description: "The city of love and lights.", country: "France", category: "City" },
//   { name: "New York", image: "/images/newyork.jpg", description: "The city that never sleeps.", country: "USA", category: "City" },
//   { name: "Kerala", image: "/images/kerala.jpg", description: "Backwaters and lush greenery.", country: "India", category: "Nature" },
//   { name: "Dubai", image: "/images/dubai.jpg", description: "Luxury shopping and modern architecture.", country: "UAE", category: "City" }
// ];

// const PopularDestinations = () => {
//   const navigate = useNavigate();
//   const { addTrip } = useContext(TripContext);

//   const handleBookNow = (destination) => {
//     const today = new Date().toISOString().split("T")[0];
//     addTrip({ destination, people: 1, date: today });
//     navigate("/mytrips");
//   };

//   const goToDetails = (place) => {
//     navigate("/destination-details", { state: place });
//   };

//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {popularDestinations.map((place, idx) => (
//             <div
//               key={idx}
//               className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
//               onClick={() => goToDetails(place)}
//             >
//               <img src={place.image} alt={place.name} className="h-48 w-full object-cover" />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold">{place.name}</h3>
//                 <p className="text-gray-600 text-sm mb-3">{place.description}</p>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleBookNow(place.name);
//                   }}
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//          {/* View More Destinations */}
//       <div className="text-center mt-8">
//   <button
//     onClick={() => navigate("/destination")}
//     className="bg-gray-200 px-6 py-3 rounded-xl shadow hover:bg-gray-300"
//   >
//     View More Destinations
//   </button>
// </div>
// </div>
//     </section>
    
//   );
// };

// export default PopularDestinations;

































import React from "react";
import { useNavigate } from "react-router-dom";

const popularDestinations = [
  { name: "Goa", image: "/images/goa.jpg", description: "Beautiful beaches and vibrant nightlife." },
  { name: "Paris", image: "/images/paris.jpg", description: "The city of love and lights." },
  { name: "Manali", image: "/images/manali.jpg", description: "Snow-capped mountains and adventure sports." },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>

        {/* Popular Destination Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {popularDestinations.map((place, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
              onClick={() => navigate("/destination-details", { state: place })}
            >
              <img src={place.image} alt={place.name} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{place.name}</h3>
                <p className="text-gray-600 text-sm">{place.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button
            onClick={() => navigate("/destinations")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            View More Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
