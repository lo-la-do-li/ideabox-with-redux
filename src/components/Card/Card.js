import React from "react";
import "./Card.css";

const Card = ({ id, title, description }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      {/* <button onClick={() => props.deleteIdea(props.id)}>🗑️</button> */}
    </div>
  );
};

export default Card;
