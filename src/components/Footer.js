import React from "react";
import "../styles/Footer.css"; // Ensure this file is styled properly

const Footer = ({ isHomePage }) => {
  return (
    <footer className={isHomePage ? "footer large-footer" : "footer"}>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Safari Jeep Booking. All Rights Reserved.</p>
        {isHomePage && (
          <div className="extra-content">
            <p>Explore the wild with our reliable safari jeeps.</p>
            <p>Contact: info@safaribooking.com | Phone: +94 77 123 4567</p>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
