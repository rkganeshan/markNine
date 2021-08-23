import React from "react";

const Card = ({ title, imageUrl, rating }) => {
  return (
    <div className="card mt-3" style={{ width: "18rem" }}>
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{rating}</p>
      </div>
    </div>
  );
};

export default Card;
