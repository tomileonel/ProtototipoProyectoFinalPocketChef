import React from 'react';
import FoodCategoryCarousel from './components/FoodCategoryCarousel';
import FoodItemCarousel from './components/FoodItemCarousel';
import NewReleasesCarousel from './components/NewReleasesCarousel';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hola Santiago!</h1>
        <p>¿Que vas a cocinar hoy?</p>
        <input type="text" placeholder="Busca una receta" />
      </header>
      <main>
        <FoodCategoryCarousel />
        <FoodItemCarousel />
        <NewReleasesCarousel />
      </main>
    </div>
  );
}

export default App;
