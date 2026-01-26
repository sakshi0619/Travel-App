
// // src/components/Hero.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Hero = () => {
//   const navigate = useNavigate();

//   const [destination, setDestination] = useState("");
//   const [people, setPeople] = useState("");
//   const [date, setDate] = useState("");

//   // Handle search button click
//   const handleSearch = () => {
//     if (!destination || !people || !date) {
//       alert("Please select destination, number of people, and date!");
//       return;
//     }

//     // Redirect to destination detail page with query parameters
//     navigate(
//       `/destination/${destination}?people=${people}&date=${date}`
//     );
//   };

//   return (
//     <section
//       className="relative min-h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/images/hero.jpg')" }}
//     >
//       <div className="absolute inset-0 bg-black/50"></div>

//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
//         <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
//           Plan Your Perfect Journey
//         </h1>
//         <p className="mt-4 text-lg md:text-2xl text-gray-200">
//           Select your destination, travel dates, and number of travelers
//         </p>

//         {/* Search Form */}
//         <div className="mt-8 bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 w-full max-w-4xl">
//           {/* Destination */}
//           <select
//             value={destination}
//             onChange={(e) => setDestination(e.target.value)}
//             className="flex-1 border rounded-xl px-4 py-2 focus:outline-none"
//           >
//             <option value="">Select Destination</option>
//             <option value="Goa">Goa</option>
//             <option value="Manali">Manali</option>
//             <option value="Paris">Paris</option>
//             <option value="New York">New York</option>
//             <option value="Dubai">Dubai</option>
//           </select>

//           {/* People */}
//           <input
//             type="number"
//             min="1"
//             placeholder="No. of People"
//             value={people}
//             onChange={(e) => setPeople(e.target.value)}
//             className="flex-1 border rounded-xl px-4 py-2 focus:outline-none"
//           />

//           {/* Date */}
//           <input
//             type="date"
//             value={date}
//             min={new Date().toISOString().split("T")[0]}
//             onChange={(e) => setDate(e.target.value)}
//             className="flex-1 border rounded-xl px-4 py-2 focus:outline-none"
//           />

//           {/* Search Button */}
//           <button
//             onClick={handleSearch}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-md transition font-semibold text-base"
//           >
//             🔍 Search Trip
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;












// src/components/Hero.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [people, setPeople] = useState("");
  const [date, setDate] = useState("");

  // Handle search button click
  const handleSearch = () => {
    if (!destination || !people || !date) {
      alert("Please select destination, number of people, and date!");
      return;
    }

    // Dummy trip data (can later be fetched from DB)
    const destinationData = {
      name: destination,
      image: `/images/${destination.toLowerCase()}.jpg`,
      description: `Explore the beauty of ${destination}! A perfect getaway filled with fun and adventure.`,
      country:
        destination === "Goa"
          ? "India"
          : destination === "Manali"
          ? "India"
          : destination === "Paris"
          ? "France"
          : destination === "Dubai"
          ? "UAE"
          : "USA",
      category: "Popular Destination",
      tripDetails: {
        duration: "5 Days / 4 Nights",
        attractions: ["Local attractions", "Cultural experiences", "Outdoor fun"],
        activities: ["Sightseeing", "Shopping", "Food tasting"],
        budget: "$1500 per person",
        tips: "Book early for the best deals!",
      },
    };

    // Navigate to DestinationDetails with all data
    navigate("/destination-details", {
      state: {
        ...destinationData,
        people,
        date,
      },
    });
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          Plan Your Perfect Journey
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200">
          Select your destination, travel dates, and number of travelers
        </p>

        {/* Search Form */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 w-full max-w-4xl">
          {/* Destination */}
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="flex-1 border rounded-xl px-4 py-2 focus:outline-none"
          >
            <option value="">Select Destination</option>
            <option value="Goa">Goa</option>
            <option value="Manali">Manali</option>
            <option value="Paris">Paris</option>
            <option value="New York">New York</option>
            <option value="Dubai">Dubai</option>
          </select>

          {/* People */}
          <input
            type="number"
            min="1"
            placeholder="No. of People"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="flex-1 border rounded-xl px-4 py-2 focus:outline-none"
          />

          {/* Date */}
          <input
            type="date"
            value={date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setDate(e.target.value)}
            className="flex-1 border rounded-xl px-4 py-2 focus:outline-none"
          />

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-md transition font-semibold text-base"
          >
            🔍 Search Trip
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
