import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burguer from "../../components/Burger/Burger";

class BurguerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };
  render() {
    return (
      <Aux>
        <Burguer ingredients={this.state.ingredients} />
        <div>Build Control</div>
      </Aux>
    );
  }
}

export default BurguerBuilder;
