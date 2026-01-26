
// src/Pages/Destinations.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const allDestinations = [
  { name: "Goa", image: "/images/goa.jpg", description: "Beautiful beaches and vibrant nightlife.", country: "India", category: "Beach" },
  { name: "Manali", image: "/images/manali.jpg", description: "Snow-capped mountains and adventure sports.", country: "India", category: "Mountain" },
  { name: "Paris", image: "/images/paris.jpg", description: "The city of love and lights.", country: "France", category: "City" },
  { name: "New York", image: "/images/newyork.jpg", description: "The city that never sleeps.", country: "USA", category: "City" },
  { name: "Kerala", image: "/images/kerala.jpg", description: "Backwaters and lush greenery.", country: "India", category: "Nature" },
  { name: "Dubai", image: "/images/dubai.jpg", description: "Luxury shopping and modern architecture.", country: "UAE", category: "City" }
];

const Destinations = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredDestinations = allDestinations.filter(dest => {
    return (
      dest.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (selectedCategory === "" || dest.category === selectedCategory)
    );
  });

  const goToDetails = (place) => {
    navigate("/destination-details", { state: place });
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">All Destinations</h2>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <input
            type="text"
            placeholder="Search destinations..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="px-4 py-2 border rounded-lg w-full md:w-1/2"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border rounded-lg w-full md:w-1/3"
          >
            <option value="">All Categories</option>
            <option value="Beach">Beach</option>
            <option value="Mountain">Mountain</option>
            <option value="City">City</option>
            <option value="Nature">Nature</option>
          </select>
        </div>

        {/* Destination Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((place, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
              onClick={() => goToDetails(place)}
            >
              <img src={place.image} alt={place.name} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{place.name}</h3>
                <p className="text-gray-600 text-sm">{place.description}</p>
              </div>
            </div>
          ))}
          {filteredDestinations.length === 0 && (
            <p className="text-gray-500">No destinations found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
