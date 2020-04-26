import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burguer from "../../components/Burger/Burger";

class BurguerBuilder extends Component {
  state = {
    ingredients: {
      salad: 2,
      bacon: 2,
      cheese: 2,
      meat: 1,
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
