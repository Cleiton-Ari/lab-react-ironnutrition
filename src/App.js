import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './FoodBox/FoodBox';
import foods from './foods.json';
import AddFood from './AddFood/AddFood';


function App() {
  return (
    <div className="App">
    {
      foods.map(el =>{
        return  <FoodBox name={el.name} calories={el.calories} image={el.image}/>
      })// mapper le tableau foods
      // afficher FoodBox pour chaque food
     
    }
    </div>
  );
}

export default App;
