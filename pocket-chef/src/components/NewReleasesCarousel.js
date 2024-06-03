import React from 'react';
import Slider from 'react-slick';
import FoodItemCard from './FoodItemCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"


const NewReleasesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="carousel-container">
      <h2>Novedades</h2>
      <Slider {...settings}>
        <FoodItemCard name="Mac and cheese" time="20 mins" calories="1000 Kcal" price="3000$" src="https://www.pequerecetas.com/wp-content/uploads/2017/06/ensalada-de-pasta-receta.jpg" rating={5.0} />
        <FoodItemCard name="Budín de pan" time="30 mins" calories="500 Kcal" price="2000$" src="https://www.pequerecetas.com/wp-content/uploads/2017/06/ensalada-de-pasta-receta.jpg" rating={4.5} />
      </Slider>
    </div>
  );
};

export default NewReleasesCarousel;
