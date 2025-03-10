import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/Jeeps.css"; // Import CSS for styling

const jeeps = [
  {
    id: 1,
    name: "Safari Cruiser",
    capacity: 6,
    image: "/images/jeep1.jpg",
    description: "A comfortable 6-seater jeep, perfect for family trips.",
  },
  {
    id: 2,
    name: "Explorer 4x4",
    capacity: 4,
    image: "/images/jeep2.jpg",
    description: "A powerful 4x4 designed for rough terrains.",
  },
  {
    id: 3,
    name: "Adventure X",
    capacity: 8,
    image: "/images/jeep3.jpg",
    description: "Spacious and durable, great for large groups.",
  },
  {
    id: 4,
    name: "Adventure X",
    capacity: 4,
    image: "/images/jeep4.jpg",
    description: "Spacious and durable, great for large groups.",
  },
  {
    id: 5,
    name: "Adventure X",
    capacity: 8,
    image: "/images/jeep5.jpg",
    description: "Spacious and durable, great for large groups.",
  },
  {
    id: 6,
    name: "Adventure X",
    capacity: 8,
    image: "/images/jeep6.jpg",
    description: "Spacious and durable, great for large groups.",
  },
  {
    id: 7,
    name: "Adventure X",
    capacity: 8,
    image: "/images/jeep7.jpg",
    description: "Spacious and durable, great for large groups.",
  },
  {
    id: 8,
    name: "Jeep Camping",
    capacity: 2,
    image: "/images/jeep8.jpg",
    description: "A couple of weeks ago we had the amazing opportunity to try out one of Peak Overland‘s Jeep campers for a three-night getaway in Colorado.",
  },
  {
    id: 9,
    name: "Adventure X",
    capacity: 8,
    image: "/images/jeep9.jpg",
    description: "Spacious and durable, great for large groups.",
  },
  {
    id: 10,
    name: "Adventure XP",
    capacity: 1,
    image: "/images/jeep10.jpg",
    description: "If you consider travelling to be all about ships and planes, then you have no business stuck in an office, yet you have the opportunity to use your All-wheel-drive SUV or the almost forgotten powerful motorcycle like the one you have behind the garage.",
  },
];

const Jeeps = () => {
  return (
    <div className="jeeps-container">
      <h1>Available Jeeps</h1>
      <div className="jeep-list">
        {jeeps.map((jeep) => (
          <div key={jeep.id} className="jeep-card">
            <img src={jeep.image} alt={jeep.name} className="jeep-image" />
            <h2>{jeep.name}</h2>
            <p>{jeep.description}</p>
            <p><strong>Capacity:</strong> {jeep.capacity} passengers</p>
            {/* Add a Link to the booking page */}
            <Link to={`/booking/${jeep.id}`}>
              <button className="book-btn">Book Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jeeps;
