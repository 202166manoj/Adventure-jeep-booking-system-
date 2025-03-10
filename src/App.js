// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Jeeps from "./components/Jeeps";
import Booking from "./components/Booking"; // Import Booking page
import About from "./components/About";
import Admin from "./components/Admin";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div>
        {/* Header Navigation Bar */}
        <nav className="navbar">
          <h1 className="logo">Safari Jeep Booking</h1>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jeeps">Jeeps</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signout">Sign Out</Link></li>
            <li><Link to="/Admin">Admin</Link></li>
          </ul>
        </nav>

        {/* Page Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jeeps" element={<Jeeps />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking/:jeepId" element={<Booking />} /> {/* Booking Page Route */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
