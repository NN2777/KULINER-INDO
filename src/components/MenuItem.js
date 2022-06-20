import React from "react";
import { Link, useLocation } from "react-router-dom";

function MenuItem({ image, name, price }) {
  let { path } = useLocation();
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <Link to={`${path}/${name}`}> {name} </Link>
      <p> Rp {price} </p>
    </div>
  );
}

export default MenuItem;
