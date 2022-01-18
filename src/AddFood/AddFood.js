import React from 'react';
import './AddFood.css';

class AddFood extends React.Component {
    constructor() {
        super()
            this.state = {
               click: false,
               name: "",
               calories: 0,
               image: "",
               quantity: 0,
            }
    }

    addFood = () => {
        this.setState({
            click: !this.state.click
        })
    }

    handleChange = (e) => {
        let { name, value } = e.currentTarget

        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addFood({
            name: this.state.name,
            image: this.state.image,
            calories: this.state.calories,
            quantity: this.state.quantity,
        })
    }

    render() {
        return (
            <div>
            <button onClick={this.addFood}>New Product</button>
           
                <form  class='AddFood' onSubmit={this.handleSubmit}>
                    <label>
                        Image: <input onChange={this.handleChange} value={this.state.image} type="text" name="image" ></input>
                    </label>

                    <label>
                        Name: <input onChange={this.handleChange} value={this.state.name} type="text" name="name" ></input>
                    </label>

                    <label>
                       Calories: <input onChange={this.handleChange} value={this.state.calories} type="number" name="calories" ></input>
                    </label>

                    <label>
                       Quantity: <input onChange={this.handleChange} value={this.state.quantity} type="number" name="quantity" ></input>
                    </label>

                    <button type="submit">Submit value="Crear Comida"</button>
                </form>
          
            </div>
        )
    }
}

export default AddFood;