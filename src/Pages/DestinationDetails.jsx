
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TripContext } from "../context/TripContext";

const DestinationDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { addTrip } = useContext(TripContext);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    destination: state?.name || "",
    people: state?.people || "",
    date: state?.date || "",
  });

  if (!state) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-red-600">No trip data found!</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  const { name, image, description, country, category, tripDetails } = state;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const tripData = {
      name: formData.destination,
      image,
      description,
      country,
      category,
      people: formData.people,
      date: formData.date,
      userName: formData.name,
      tripDetails,
      status: "Upcoming",
    };

    addTrip(tripData);
    alert("✅ Trip booked successfully!");
    setShowForm(false);
    navigate("/mytrips");
  };

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        {/* Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover rounded-2xl shadow-md"
        />

        {/* Info */}
        <h1 className="text-4xl font-bold mt-6 text-gray-800">{name}</h1>
        <p className="text-lg text-gray-600 mt-3">{description}</p>
        <p className="mt-2 text-blue-600 font-semibold">
          {country} • {category}
        </p>

        {/* Itinerary */}
        {tripDetails ? (
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Recommended Itinerary
            </h2>
            {tripDetails.attractions.map((attr, i) => (
              <p key={i} className="mt-2">• {attr}</p>
            ))}
            <p className="mt-2">
              <strong>Activities:</strong> {tripDetails.activities.join(", ")}
            </p>
            <p className="mt-2">
              <strong>Budget:</strong> {tripDetails.budget}
            </p>
            <p className="mt-2 text-gray-700">
              <strong>Tip:</strong> {tripDetails.tips}
            </p>
          </div>
        ) : (
          <p className="mt-4 text-gray-500">Trip details coming soon...</p>
        )}

        {/* Book Now Button */}
        <button
          onClick={() => setShowForm(true)}
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
        >
          🧳 Book Now
        </button>

        {/* Booking Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg w-96">
              <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
                Book Your Trip
              </h2>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
                <input
                  type="text"
                  placeholder="Destination"
                  value={formData.destination}
                  onChange={(e) =>
                    setFormData({ ...formData, destination: e.target.value })
                  }
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
                <input
                  type="number"
                  placeholder="No. of People"
                  value={formData.people}
                  onChange={(e) =>
                    setFormData({ ...formData, people: e.target.value })
                  }
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                />

                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DestinationDetails;









