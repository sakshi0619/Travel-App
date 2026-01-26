// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
// import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Destinations from "./Pages/Destinations";
import DestinationDetails from "./Pages/DestinationDetails";
import BookNow from "./Pages/BookNow";
import MyTrips from "./Pages/MyTrips";
import PlanTrip from "./Pages/PlanTrip";
import { TripProvider } from "./context/TripContext";

function App() {
  return (
    <TripProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destination-details" element={<DestinationDetails />} />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/mytrips" element={<MyTrips />} />
          <Route path="/plantrip" element={<PlanTrip />} />

        </Routes>
        <Footer />
      </Router>
    </TripProvider>
  );
}

export default App;
 