// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function TripPlanner() {
//   const navigate = useNavigate();

//   // form state
//   const [trip, setTrip] = useState({
//     destination: "",
//     people: "",
//     checkin: "",
//     checkout: "",
//   });

//   // handle form input
//   const handleChange = (e) => {
//     setTrip({ ...trip, [e.target.name]: e.target.value });
//   };

//   // submit planner
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // pass trip details to Book Now page
//     navigate("/booknow", { state: trip });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 py-12 px-6 flex justify-center">
//       <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl">
//         <h1 className="text-3xl font-bold text-center mb-6">Plan Your Trip</h1>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-6">

//           {/* Destination */}
//           <div>
//             <label className="block text-lg font-medium mb-2">
//               Destination
//             </label>
//             <input
//               type="text"
//               name="destination"
//               value={trip.destination}
//               onChange={handleChange}
//               placeholder="Enter Destination"
//               className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

//           {/* Number of People */}
//           <div>
//             <label className="block text-lg font-medium mb-2">
//               Number of People
//             </label>
//             <input
//               type="number"
//               name="people"
//               value={trip.people}
//               onChange={handleChange}
//               placeholder="Enter No. of People"
//               className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

//           {/* Check-in Date */}
//           <div>
//             <label className="block text-lg font-medium mb-2">
//               Check-in Date
//             </label>
//             <input
//               type="date"
//               name="checkin"
//               value={trip.checkin}
//               onChange={handleChange}
//               className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

//           {/* Check-out Date */}
//           <div>
//             <label className="block text-lg font-medium mb-2">
//               Check-out Date
//             </label>
//             <input
//               type="date"
//               name="checkout"
//               value={trip.checkout}
//               onChange={handleChange}
//               className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition"
//           >
//             Continue to Book Now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
