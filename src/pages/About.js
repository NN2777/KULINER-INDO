import React from "react";
import AboutImg from "../assets/img_about.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImg})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT OUR SHOP</h1>
        <center><p>
        This shop is a shop that sells various types of Indonesian food 
        with guaranteed delicious taste and suitable for all Indonesian. 
        managed by the three of us as founders of the company indo's cafeteria, 
        consisting of Abdul Rohman, Naufal Nafidiin, and Rima Dhani Aula Ma'rufa. 
        with determination and consistency we believe 
        we can provide the best dishes for all of you.
        </p></center>
      </div>
    </div>
  );
}

export default About;
