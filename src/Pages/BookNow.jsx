// src/Pages/BookNow.jsx
// import React, { useState } from "react";

// const BookNow = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     people: "",
//     date: "",
//   });

//   // handle input change
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // ✅ Show success alert
//     alert("🎉 Booking Successful!");
//     // reset form
//     setFormData({
//       name: "",
//       email: "",
//       people: "",
//       date: "",
//     });
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
//       <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
//         Book Your Trip
//       </h1>
//       <p className="text-gray-700 text-lg max-w-2xl text-center mb-6">
//         Fill in your details to confirm your booking. We’ll take care of the
//         rest and make sure your journey is smooth and memorable.
//       </p>

//       {/* Booking Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md space-y-4"
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full border rounded-lg px-4 py-2 focus:outline-none"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full border rounded-lg px-4 py-2 focus:outline-none"
//           required
//         />
//         <input
//           type="number"
//           name="people"
//           placeholder="No. of People"
//           value={formData.people}
//           onChange={handleChange}
//           className="w-full border rounded-lg px-4 py-2 focus:outline-none"
//           required
//         />
//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           className="w-full border rounded-lg px-4 py-2 focus:outline-none"
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
//         >
//           Confirm Booking
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BookNow;

















// src/Pages/BookNow.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const destination = location.state; // comes from DestinationDetails

  // Pre-fill form with destination details
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    travelers: 1,
    date: "",
    destination: destination?.name || "",
    price: destination?.price || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking Confirmed!\nDestination: ${formData.destination}\nTravelers: ${formData.travelers}\nDate: ${formData.date}`
    );
    navigate("/"); // after booking, go back home
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Book Your Trip 🚀
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Destination Name (read-only) */}
          <div>
            <label className="block font-medium">Destination</label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              readOnly
              className="w-full p-3 border rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Price Info (read-only) */}
          {formData.price && (
            <div>
              <label className="block font-medium">Estimated Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                readOnly
                className="w-full p-3 border rounded-lg bg-gray-100 cursor-not-allowed"
              />
            </div>
          )}

          {/* Name */}
          <div>
            <label className="block font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />
          </div>

          {/* Travelers */}
          <div>
            <label className="block font-medium">Number of Travelers</label>
            <input
              type="number"
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              min="1"
              required
              className="w-full p-3 border rounded-lg"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block font-medium">Travel Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-green-600 text-white text-lg rounded-lg shadow-md hover:bg-green-700"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookNow;
