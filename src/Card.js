import React from "react";
import "./App.css";
import avatar from "./Images/img_avatar.png";

const Card = () => {
  return (
    <div className="card">
      <img src={avatar} alt="Avatar" style={{ width: "100%" }} />
      <div className="container">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
};

export default Card;
