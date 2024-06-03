import React from 'react';
import './FoodItemCard.css';

const FoodItemCard = ({ name, time, calories, price, rating,src }) => {
  return (
    <div className="food-item-card">
      <img src={src} alt={name} className="food-image" />
      <h3>{name}</h3>
      <p>Tiempo: {time}</p>
      <p>Calorías: {calories}</p>
      <p>Precio: {price}</p>
      <p>Rating: {rating} ⭐</p>
    </div>
  );
};

export default FoodItemCard;
