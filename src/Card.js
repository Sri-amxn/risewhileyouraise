import React from "react";
import "./Card.css";

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="cardImage" />
      <p className="cardTitle">{title}</p>
    </div>
  );
};

export default Card;
