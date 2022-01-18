import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './FoodBox/FoodBox';
import foods from './foods.json';
import AddFood from './AddFood/AddFood';
import Search from './SearchBar/SearchBar';
import SearchBar from './SearchBar/SearchBar';


class App extends Component {

  state = {
    foods: foods
  }

  addFood = (newFood) => {
    console.log(newFood)
    
    this.setState({foods: [...this.state.foods, newFood]})
    console.log(this.state.foods)

  }

  render() {
  return (

    
    <div className="App">

  <AddFood addFood={this.addFood}/>
  <SearchBar/>
    {
      this.state.foods.map(el =>{
        return  <FoodBox name={el.name} calories={el.calories} image={el.image}/>
      })// mapper le tableau foods
      // afficher FoodBox pour chaque food
     
    }
    
    </div>

 
  );
  }

}

export default App;
