import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent ✅`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-700">
              Send us a message
            </h3>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-6 text-gray-700">
              Get in Touch
            </h3>
            <p className="mb-4 text-gray-600">
              Have questions about your next adventure? We're here to help!
            </p>

            <p className="mb-2">
              📍 <span className="text-gray-700">Mumbai, Maharastra, India</span>
            </p>
            <p className="mb-2">
              📞 <a href="tel:+910000000000" className="text-blue-600">
                +91 00000 00000
              </a>
            </p>
            <p className="mb-6">
              📧{" "}
              <a href="mailto:support@travelplanner.com" className="text-blue-600">
                support@travelplanner.com
              </a>
            </p>

            {/* Google Map */}
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.000081202994!2d72.5713621154033!3d23.02250598495017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f31234567%3A0xabcd123456789!2sAhmedabad!5e0!3m2!1sen!2sin!4v1678888888888!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg border border-gray-300"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
