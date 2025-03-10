import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Safari Jeep Booking</h1>
      <p style={styles.text}>Explore the wild with our best safari jeeps.</p>
      <button style={styles.button} className="book-now-btn">
        Book Now
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "100px",
    height: "100vh",
    backgroundImage: "url('/images/home-bg.jpg')", // Make sure to place the image in 'public/images/'
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: "bold",
    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
  },
  text: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    textShadow: "1px 1px 6px rgba(0, 0, 0, 0.5)",
  },
  button: {
    padding: "12px 24px",
    fontSize: "18px",
    backgroundColor: "#ff6600",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "all 0.3s ease-in-out",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
  },
};

// CSS Styles for Button Animation
const buttonStyle = document.createElement("style");
buttonStyle.innerHTML = `
  .book-now-btn:hover {
    transform: scale(1.1);
    background-color: #ff4500;
    box-shadow: 0px 4px 15px rgba(255, 102, 0, 0.8);
  }
`;
document.head.appendChild(buttonStyle);

export default Home;
