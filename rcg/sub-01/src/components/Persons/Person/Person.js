import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import classes from "./Person.css";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";

class Person extends Component {
  componentDidMount() {
    this.inputElement.focus();
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      // <div className={classes.Person}>
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I'm {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={(inputEl) => {
            this.inputElement = inputEl;
          }}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
      // </div>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
