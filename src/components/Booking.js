import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the jeepId from the URL

// Dummy data for jeep availability (you can replace this with actual backend data)
const jeepAvailability = {
  "1": [
    { date: "2025-03-12", time: "10:00", available: true },
    { date: "2025-03-12", time: "14:00", available: false },
  ],
  "2": [
    { date: "2025-03-12", time: "10:00", available: true },
    { date: "2025-03-12", time: "14:00", available: true },
  ],
  // Add more jeep availability as needed
};

const Booking = () => {
  const { jeepId } = useParams(); // Get jeepId from the URL
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    address: "",
    phone: "",
    date: "",
    time: "",
  });
  const [availabilityMessage, setAvailabilityMessage] = useState("");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission to check availability
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check jeep availability for the selected date and time
    const availability = jeepAvailability[jeepId] || [];
    const booking = availability.find(
      (b) => b.date === formData.date && b.time === formData.time
    );

    if (booking && booking.available) {
      setAvailabilityMessage("Your jeep is available! You can proceed with booking.");
    } else {
      setAvailabilityMessage("Sorry, the selected jeep is not available at that time.");
    }
  };

  return (
    <div className="booking-container">
      <h1>Book Your Jeep - {`Jeep ${jeepId}`}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Check Availability</button>
      </form>

      {availabilityMessage && <p>{availabilityMessage}</p>}
    </div>
  );
};

export default Booking;
