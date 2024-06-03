import React, { useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import './FoodCategoryCarousel.css'; // Asegúrate de importar tu archivo de estilos CSS

const FoodCategoryCarousel = ({ filtros }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right')
  });

  const handleSwipe = (direction) => {
    if (direction === 'left' && currentIndex < filtros.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === 'right' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="carrusel-filtros" ref={carouselRef} {...handlers}>
      <div className="filtros-basicos-div">
        <div className="filtro-basicos">
          {filtros.map((filtro, index) => (
            <button
              key={index}
              className={`home-button-${index === currentIndex ? 'primero' : 'secundario'}`}
              onClick={() => setCurrentIndex(index)}
            >
              <span className={`home-text-${index === currentIndex ? 'primero' : 'secundario'}`}>
                <span>{filtro}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCategoryCarousel;
