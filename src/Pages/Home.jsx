
// updated gpt Home.jsx
import React from "react";
import Hero from "../components/Hero";
import PopularDestinations from "../components/PopularDestinations";
import CTA from "../components/CTA";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* {Popular Destinations */}
      <section className="py-16">
        <PopularDestinations />
      </section>


     
       {/* Gallery */}
      <section className="py-16 bg-gray-50">
         <Gallery />

         {/* Testimonials */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-blue-100">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
          What Our Travelers Say
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-600 mb-4">
              “Best trip planning experience ever! TravelPlanner made everything
              super easy and affordable.”
            </p>
            <h3 className="font-semibold text-blue-600">— Aditi Sharma</h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-600 mb-4">
              “I loved the custom itineraries. It felt like the trip was designed
              just for me.”
            </p>
            <h3 className="font-semibold text-blue-600">— Rohan Mehta</h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-600 mb-4">
              “Highly recommend! Great deals, smooth booking process, and amazing
              destinations.”
            </p>
            <h3 className="font-semibold text-blue-600">— Priya Patel</h3>
          </div>
        </div>
      </section>
             </section>   
             </div>
  );
};

export default Home;


















    

     

     

     
 
