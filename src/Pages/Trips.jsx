// // import React, { useState } from "react";

// // const Trips = () => {
// //   const [trips, setTrips] = useState([
// //     { id: 1, destination: "Paris", date: "2025-09-10", people: 2 },
// //     { id: 2, destination: "Tokyo", date: "2025-12-15", people: 4 },
// //   ]);

// //   const [newTrip, setNewTrip] = useState({
// //     destination: "",
// //     date: "",
// //     people: "",
// //   });

// //   // Add Trip
// //   const handleAddTrip = (e) => {
// //     e.preventDefault();
// //     if (!newTrip.destination || !newTrip.date || !newTrip.people) return;

// //     const newEntry = { id: Date.now(), ...newTrip };
// //     setTrips([...trips, newEntry]);

// //     setNewTrip({ destination: "", date: "", people: "" });
// //   };

// //   // Delete Trip
// //   const handleDeleteTrip = (id) => {
// //     setTrips(trips.filter((trip) => trip.id !== id));
// //   };

// //   return (
// //     <div className="max-w-4xl mx-auto py-12 px-4">
// //       <h1 className="text-4xl font-bold text-center mb-8">My Trips</h1>

// //       {/* Add Trip Form */}
// //       <form
// //         onSubmit={handleAddTrip}
// //         className="bg-white shadow-md rounded-lg p-6 mb-8"
// //       >
// //         <h2 className="text-2xl font-semibold mb-4">Plan a New Trip</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
// //           <input
// //             type="text"
// //             placeholder="Destination"
// //             value={newTrip.destination}
// //             onChange={(e) =>
// //               setNewTrip({ ...newTrip, destination: e.target.value })
// //             }
// //             className="border rounded p-2 w-full"
// //           />
// //           <input
// //             type="date"
// //             value={newTrip.date}
// //             onChange={(e) => setNewTrip({ ...newTrip, date: e.target.value })}
// //             className="border rounded p-2 w-full"
// //           />
// //           <input
// //             type="number"
// //             placeholder="No. of People"
// //             value={newTrip.people}
// //             onChange={(e) =>
// //               setNewTrip({ ...newTrip, people: e.target.value })
// //             }
// //             className="border rounded p-2 w-full"
// //           />
// //         </div>
// //         <button
// //           type="submit"
// //           className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
// //         >
// //           Add Trip
// //         </button>
// //       </form>

// //       {/* Display Trips */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         {trips.map((trip) => (
// //           <div
// //             key={trip.id}
// //             className="bg-gray-100 shadow-md rounded-lg p-4 flex justify-between items-center"
// //           >
// //             <div>
// //               <h3 className="text-xl font-semibold">{trip.destination}</h3>
// //               <p>Date: {trip.date}</p>
// //               <p>People: {trip.people}</p>
// //             </div>
// //             <button
// //               onClick={() => handleDeleteTrip(trip.id)}
// //               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
// //             >
// //               Delete
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Trips;




// // updated code
// // import React from "react";

// // const Trips = () => {
// //   const trips = [
// //     {
// //       id: 1,
// //       destination: "Paris, France",
// //       date: "10 Oct - 20 Oct 2025",
// //       people: 2,
// //       status: "Confirmed",
// //     },
// //     {
// //       id: 2,
// //       destination: "Tokyo, Japan",
// //       date: "5 Nov - 15 Nov 2025",
// //       people: 4,
// //       status: "Pending",
// //     },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gray-50 pt-20 pb-10 px-6">
// //       <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
// //         My Trips
// //       </h2>

// //       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
// //         {trips.map((trip) => (
// //           <div
// //             key={trip.id}
// //             className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
// //           >
// //             <h3 className="text-xl font-semibold text-gray-800">
// //               {trip.destination}
// //             </h3>
// //             <p className="text-gray-600">{trip.date}</p>
// //             <p className="text-gray-600">People: {trip.people}</p>
// //             <span
// //               className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-medium ${
// //                 trip.status === "Confirmed"
// //                   ? "bg-green-100 text-green-700"
// //                   : "bg-yellow-100 text-yellow-700"
// //               }`}
// //             >
// //               {trip.status}
// //             </span>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Trips;










// // anotothr update code with booknow->savetrips   user ca add remove trip    
// // BookNow → Trips Page → Cancel Trip → Trip disappears immediately.
// import React, { useContext } from "react";
// import { TripContext } from "../context/TripContext";

// const Trips = () => {
//   const { trips, removeTrip } = useContext(TripContext);

//   return (
//     <section className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-6">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
//           My Trips 🧳
//         </h2>

//         {trips.length > 0 ? (
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {trips.map((trip) => (
//               <div
//                 key={trip.id}
//                 className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
//               >
//                 <h3 className="text-xl font-semibold text-blue-700 mb-2">
//                   {trip.destination}
//                 </h3>
//                 <p className="text-gray-600">
//                   <span className="font-medium">Date:</span> {trip.date}
//                 </p>
//                 <p className="text-gray-600">
//                   <span className="font-medium">Travelers:</span>{" "}
//                   {trip.travelers}
//                 </p>
//                 <p
//                   className={`mt-2 inline-block px-3 py-1 rounded-full text-sm font-medium ${
//                     trip.status === "Confirmed"
//                       ? "bg-green-100 text-green-700"
//                       : "bg-yellow-100 text-yellow-700"
//                   }`}
//                 >
//                   {trip.status}
//                 </p>

//                 {/* Cancel Button */}
//                 <button
//                   onClick={() => removeTrip(trip.id)}
//                   className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
//                 >
//                   Cancel Trip ❌
//                 </button>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600 mt-6">
//             You don’t have any trips yet. Book one now! ✈️
//           </p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Trips;


// ?not requere