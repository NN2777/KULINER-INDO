import React from "react";
import { Link } from "react-router-dom";
//import BannerImage from "../assets/pizza.jpeg";
import BannerImage from "../assets/backUtama.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Indo's Cafetaria </h1>
        <p> FOOD THAT FIT ANY TASTE</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
