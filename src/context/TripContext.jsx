

// import React, { createContext, useState, useEffect } from "react";

// export const TripContext = createContext();

// export const TripProvider = ({ children }) => {
//   const [trips, setTrips] = useState(() => {
//     const savedTrips = localStorage.getItem("trips");
//     return savedTrips ? JSON.parse(savedTrips) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("trips", JSON.stringify(trips));
//   }, [trips]);

//   // ✅ Add trip with unique ID
//   const addTrip = (trip) => {
//     const newTrip = { id: Date.now() + Math.random(), completed: false, ...trip };
//     setTrips([...trips, newTrip]);
//   };

//   // ✅ Toggle completed using ONLY id
//   const toggleCompleted = (id) => {
//     setTrips(
//       trips.map((trip) =>
//         trip.id === id ? { ...trip, completed: !trip.completed } : trip
//       )
//     );
//   };

//   // ✅ Remove trip using ONLY id
//   const removeTrip = (id) => {
//     setTrips(trips.filter((trip) => trip.id !== id));
//   };

//   return (
//     <TripContext.Provider value={{ trips, addTrip, toggleCompleted, removeTrip }}>
//       {children}
//     </TripContext.Provider>
//   );
// };














// src/context/TripContext.jsx
import React, { createContext, useState } from "react";

export const TripContext = createContext();

export const TripProvider = ({ children }) => {
  const [trips, setTrips] = useState([]);

  const addTrip = (trip) => {
    setTrips((prevTrips) => [...prevTrips, trip]);
  };

  const removeTrip = (index) => {
    setTrips((prevTrips) => prevTrips.filter((_, i) => i !== index));
  };

  return (
    <TripContext.Provider value={{ trips, addTrip, removeTrip }}>
      {children}
    </TripContext.Provider>
  );
};
