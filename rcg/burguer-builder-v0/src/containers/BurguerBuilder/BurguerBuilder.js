import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burguer from "../../components/Burger/Burger";

class BurguerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burguer />
        <div>Build Control</div>
      </Aux>
    );
  }
}

export default BurguerBuilder;
