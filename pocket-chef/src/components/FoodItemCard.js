import React from 'react';
import './FoodItemCard.css';

const FoodItemCard = ({ name, time, calories, price, rating, src }) => {
  return (
    <div className="food-item-card">
      <img src={src} alt={name} className="food-image" />
      <div className="rating-badge">{rating} ⭐</div>
      <h3>{name}</h3>
      <p className="food-info">Tiempo: {time}</p>
      <p className="food-info">Calorías: {calories}</p>
      <p className="food-info">Precio: {price}</p>
      <label htmlFor="checkboxInput" className="bookmark">
        <input type="checkbox" id="checkboxInput" />
        <svg
          width="15"
          viewBox="0 0 50 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="svgIcon"
        >
          <path
            d="M46 62.0085L46 3.88139L3.99609 3.88139L3.99609 62.0085L24.5 45.5L46 62.0085Z"
            stroke="black"
            strokeWidth="7"
          ></path>
        </svg>
      </label>
    </div>
  );
};

export default FoodItemCard;
