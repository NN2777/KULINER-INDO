import React from "react";
import LoginImg from "../assets/login_img.jpg";
import "../styles/Login.css";

function Login() {
  return (
    <div className="login">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${LoginImg})` }}
      ></div>
      <div className="rightSide">
        <h1> Login Page </h1>

        <form id="login-form" method="POST">
          <label htmlFor="name">Email</label>
          <input name="name" placeholder="Enter your email..." type="text" />
          <label htmlFor="email">Password</label>
          <input name="email" placeholder="Enter your password..." type="email" />
          <button type="submit"> LOGIN </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
