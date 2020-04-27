import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burguer from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENTS_PRICE = {
  salad: 0.3,
  bacon: 0.4,
  cheese: 0.7,
  meat: 1.4,
};

class BurguerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };

  addIngredientHandler = (type) => {
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] += 1;
    const updatedPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
    });
  };

  render() {
    return (
      <Aux>
        <Burguer ingredients={this.state.ingredients} />
        <BuildControls ingredientsAdd={this.addIngredientHandler} />
      </Aux>
    );
  }
}

export default BurguerBuilder;
