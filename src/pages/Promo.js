import React from "react";
import LoginImg from "../assets/login_img.jpg";
import "../styles/Login.css";

function Promo() {
  return (
    <div className="login">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${LoginImg})` }}
      ></div>
      <div className="rightSide">
        <h1> SELAMAT ANDA DAPAT PROMO </h1>
      </div>
    </div>
  );
}

export default Promo;
