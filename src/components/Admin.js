import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Admin.css"; // Admin specific styles

const Admin = () => {
  const [bookings, setBookings] = useState([
    { id: 1, name: "John Doe", jeep: "Safari Cruiser", date: "2025-03-12", status: "Pending" },
    { id: 2, name: "Jane Smith", jeep: "Explorer 4x4", date: "2025-03-14", status: "Confirmed" },
    { id: 3, name: "Emily Davis", jeep: "Adventure X", date: "2025-03-15", status: "Pending" },
  ]);

  const handleConfirm = (id) => {
    // Logic to confirm booking
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking.id === id ? { ...booking, status: "Confirmed" } : booking
      )
    );
  };

  const handleCancel = (id) => {
    // Logic to cancel booking
    setBookings((prevBookings) =>
      prevBookings.filter((booking) => booking.id !== id)
    );
  };

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <div className="booking-management">
        <h2>Booking Requests</h2>
        <table className="booking-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Jeep</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.name}</td>
                <td>{booking.jeep}</td>
                <td>{booking.date}</td>
                <td>{booking.status}</td>
                <td>
                  {booking.status === "Pending" ? (
                    <button onClick={() => handleConfirm(booking.id)}>Confirm</button>
                  ) : (
                    <span>Confirmed</span>
                  )}
                  <button onClick={() => handleCancel(booking.id)}>Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="admin-links">
        <Link to="/jeeps">Manage Jeeps</Link>
        <Link to="/users">Manage Users</Link>
      </div>
    </div>
  );
};

export default Admin;
