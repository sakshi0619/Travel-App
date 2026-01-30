

// update code
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check login state
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    setLoggedInUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    alert("Logged out successfully ✅");
    navigate("/login");
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-700"
        >
          TravelPlanner
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600 transition duration-300">
              Home
            </Link>
          </li>
          {/* <li>
            <Link to="/about" className="hover:text-blue-600 transition duration-300">
              About
            </Link>
          </li>
           */}
         
          
          <li>
            <Link to="/contact" className="hover:text-blue-600 transition duration-300">
              Contact
            </Link>
          </li>


          <Link to="/mytrips" className="hover:text-blue-600">My Trips</Link>

          {/* Auth Section */}
          {loggedInUser ? (
            <>
              <li className="text-blue-600">Hi, {loggedInUser.name}</li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="hover:text-blue-600 transition duration-300"
                >
                  Login
                </Link>
              </li>
              
            </>
          )}
        </ul>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-2xl">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
