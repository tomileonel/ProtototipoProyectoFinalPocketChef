import React from 'react';
import Slider from 'react-slick';
import FoodItemCard from './FoodItemCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"

const FoodItemCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,  // Change this line to show 2.5 slides
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,  // Change this line to show 2.5 slides
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,  // Adjusted for smaller screens
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,  // Adjusted for smallest screens
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <FoodItemCard name="Ensalada César" time="50 Mins" calories="1500 Kcal" price="2500$" rating={4.5} src="https://www.pequerecetas.com/wp-content/uploads/2017/06/ensalada-de-pasta-receta.jpg" />
        <FoodItemCard name="Ensalada Griega" time="15 Mins" calories="1000 Kcal" price="3000$" rating={3.5} src="https://www.pequerecetas.com/wp-content/uploads/2017/06/ensalada-de-pasta-receta.jpg"/>
        <FoodItemCard name="Ensalada China" time="10 Mins" calories="900 Kcal" price="1750$" rating={4.0} src="https://www.pequerecetas.com/wp-content/uploads/2017/06/ensalada-de-pasta-receta.jpg"/>
      </Slider>
    </div>
  );
};

export default FoodItemCarousel;
