// // src/pages/PlanTrip.jsx
// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { TripContext } from "../context/TripContext";

// const PlanTrip = () => {
//   const { addTrip } = useContext(TripContext);
//   const navigate = useNavigate();

//   const [destination, setDestination] = useState("");
//   const [date, setDate] = useState("");
//   const [people, setPeople] = useState("");

//   const handlePlan = () => {
//     if (!destination || !date || !people) {
//       alert("Please fill all fields!");
//       return;
//     }

//     const today = new Date();
//     const tripDate = new Date(date);
//     const status = tripDate >= today ? "Upcoming" : "Completed";

//     addTrip({ destination, date, people, status });
//     navigate("/mytrips");
//   };

//   return (
//     <section className="py-12 bg-gray-50 min-h-screen flex justify-center items-center">
//       <div className="max-w-lg w-full bg-white p-8 rounded-2xl shadow-lg">
//         <h2 className="text-3xl font-bold text-center mb-6">Plan Your Trip</h2>

//         <label className="block mb-4">
//           Destination:
//           <select
//             value={destination}
//             onChange={(e) => setDestination(e.target.value)}
//             className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none"
//           >
//             <option value="">Select Destination</option>
//             <option value="Goa">Goa</option>
//             <option value="Manali">Manali</option>
//             <option value="Paris">Paris</option>
//             <option value="New York">New York</option>
//             <option value="Dubai">Dubai</option>
//           </select>
//         </label>

//         <label className="block mb-4">
//           Date:
//           <input
//             type="date"
//             value={date}
//             min={new Date().toISOString().split("T")[0]}
//             onChange={(e) => setDate(e.target.value)}
//             className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none"
//           />
//         </label>

//         <label className="block mb-6">
//           Number of People:
//           <input
//             type="number"
//             min="1"
//             value={people}
//             onChange={(e) => setPeople(e.target.value)}
//             className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none"
//           />
//         </label>

//         <button
//           onClick={handlePlan}
//           className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-lg font-semibold transition"
//         >
//           Confirm Plan
//         </button>
//       </div>
//     </section>
//   );
// };

// export default PlanTrip;





// src/pages/PlanTrip.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TripContext } from "../context/TripContext";
import { useContext } from "react";

const tripSuggestions = {
  Goa: {
    duration: "4-5 days",
    attractions: ["Baga Beach", "Fort Aguada", "Dudhsagar Waterfalls"],
    activities: ["Water Sports", "Beach Parties", "Cruise Dinner"],
    budget: "₹20,000 - ₹30,000 per person",
    tips: "Best visited between November to February.",
  },
  Manali: {
    duration: "5-6 days",
    attractions: ["Solang Valley", "Rohtang Pass", "Hadimba Temple"],
    activities: ["Skiing", "Paragliding", "Local Market Visit"],
    budget: "₹15,000 - ₹25,000 per person",
    tips: "Carry warm clothes, best for snow lovers.",
  },
  // ... add more destinations here
};

const PlanTrip = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { addTrip } = useContext(TripContext);

  if (!state) {
    return <p className="text-center mt-10 text-gray-600">No trip selected.</p>;
  }

  const { destination, people, date } = state;
  const suggestion = tripSuggestions[destination];

  const handleSaveTrip = () => {
    const tripData = {
      destination,
      people,
      date,
      status: "Upcoming",
      ...suggestion,
    };
    addTrip(tripData);
    alert("Trip saved successfully!");
    navigate("/mytrips");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <div className="max-w-3xl bg-white shadow-xl rounded-2xl p-8 w-full">
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          ✈️ Your Planned Trip to {destination}
        </h1>

        <p><strong>Date:</strong> {date}</p>
        <p><strong>People:</strong> {people}</p>

        {suggestion ? (
          <>
            <p className="mt-3"><strong>Duration:</strong> {suggestion.duration}</p>
            <p className="mt-2"><strong>Top Attractions:</strong> {suggestion.attractions.join(", ")}</p>
            <p className="mt-2"><strong>Activities:</strong> {suggestion.activities.join(", ")}</p>
            <p className="mt-2"><strong>Estimated Budget:</strong> {suggestion.budget}</p>
            <p className="mt-2 text-gray-700"><strong>Tip:</strong> {suggestion.tips}</p>
          </>
        ) : (
          <p className="mt-3 text-gray-600">No suggestions found for this destination.</p>
        )}

        <button
          onClick={handleSaveTrip}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl w-full font-semibold transition"
        >
          💾 Save to My Trips
        </button>
      </div>
    </div>
  );
};

export default PlanTrip;
