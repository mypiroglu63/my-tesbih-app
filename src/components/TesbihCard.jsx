import React from "react";

const TesbihCard = ({ image, name, stone, price, description }) => {
  return (
    <div className="tesbih-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Taş: {stone}</p>
      <p>Fiyat: {price} TL</p>
      <p>{description}</p>
    </div>
  );
};

export default TesbihCard;
