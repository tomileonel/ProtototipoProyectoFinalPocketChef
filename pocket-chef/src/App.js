import React from 'react';
import FoodCategoryCarousel from '../src/components/FoodCategoryCarousel/FoodCategoryCarousel.js';  

function App() {
  const filtros = ['Todo', 'India', 'Italiana', 'Asiatica', 'China', 'Frutas', 'Vegetales', 'Vegano', 'Vegetariano', 'Celiaco'];

  return (
    <div className="App">
      <FoodCategoryCarousel filtros={filtros} />
    </div>
  );
}

export default App;
