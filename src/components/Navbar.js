import React, { useState } from "react";
import Logo from "../assets/IndoLogo2.png";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";
import { useUserAuth } from "../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/login"> Login </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/promo">Promo</Link>
      </div>
      <div>
        <AuthBtn />
      </div>
    </div>
  );
}

function LogoutBtn() {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

function LoginBtn() {
  return <Link to="/login">Login </Link>;
}

function AuthBtn() {
  const { user } = useUserAuth();
  if (!user) {
    return <LoginBtn />;
  } else {
    return <LogoutBtn />;
  }
}

export default Navbar;
