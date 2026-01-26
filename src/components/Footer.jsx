// import React from "react";
// import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
//       <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        
//         {/* Brand */}
//         <div>
//           <h2 className="text-2xl font-bold text-white mb-3">TravelPlanner</h2>
//           <p className="text-gray-400">
//             Explore the world with us. Your journey, our priority.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
//           <ul className="space-y-2">
//             <li><a href="/" className="hover:text-white">Home</a></li>
//             <li><a href="/destinations" className="hover:text-white">Destinations</a></li>
//             <li><a href="/packages" className="hover:text-white">Packages</a></li>
//             <li><a href="/contact" className="hover:text-white">Contact</a></li>
//           </ul>
//         </div>

//         {/* Social Media */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
//           <div className="flex justify-center md:justify-start space-x-4">
//             <a href="#" className="hover:text-white"><Facebook /></a>
//             <a href="#" className="hover:text-white"><Twitter /></a>
//             <a href="#" className="hover:text-white"><Instagram /></a>
//             <a href="#" className="hover:text-white"><Mail /></a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom */}
//       <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500">
//         © {new Date().getFullYear()} TravelPlanner. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">TravelPlanner</h2>
          <p className="text-gray-400">
            Explore the world with us. Your journey, our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/mytrips" className="hover:text-white">My Trips</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-white"><Facebook /></a>
            <a href="#" className="hover:text-white"><Twitter /></a>
            <a href="#" className="hover:text-white"><Instagram /></a>
            <a href="mailto:travelplanner@email.com" className="hover:text-white"><Mail /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500">
        © {new Date().getFullYear()} TravelPlanner. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
