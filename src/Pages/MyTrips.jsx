// src/pages/MyTrips.jsx
import React, { useContext } from "react";
import { TripContext } from "../context/TripContext";

const MyTrips = () => {
  const { trips } = useContext(TripContext);

  const upcomingTrips = trips.filter(t => t.status === "Upcoming");
  const completedTrips = trips.filter(t => t.status === "Completed");

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Trips</h2>

        {trips.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            You don’t have any trips yet — plan your next adventure!
          </p>
        ) : (
          <>
            {upcomingTrips.length > 0 && (
              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  ✈️ Upcoming Trips
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingTrips.map((trip, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-md p-5"
                    >
                      <h4 className="text-xl font-semibold mb-2">
                        {trip.destination}
                      </h4>
                      <p className="text-gray-600">Date: {trip.date}</p>
                      <p className="text-gray-600">People: {trip.people}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {completedTrips.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-green-600">
                  🏖 Completed Trips
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {completedTrips.map((trip, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-md p-5"
                    >
                      <h4 className="text-xl font-semibold mb-2">
                        {trip.destination}
                      </h4>
                      <p className="text-gray-600">Date: {trip.date}</p>
                      <p className="text-gray-600">People: {trip.people}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default MyTrips;
