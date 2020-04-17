import React, { Component } from 'react';
import './App.css';

import InputText from './InputText/InputText'
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    length: 0,
    text: ""
  }

  onTextChangeHandler = (event) => {
    this.setState({
      text: event.target.value,
      length: event.target.value.length
    });
  }

  removeCharHandler = (charIndex) => {
    let currText = this.state.text;
    currText = currText.slice(0, charIndex) + currText.slice(charIndex + 1);
    this.setState({
      length: currText.length,
      text: currText
    });
  }

  render() {
    const charList = this.state.text.split('').map((charElem, charIndex) => {
        return (
          <CharComponent
            key={charIndex + charIndex}
            charElem={charElem}
            click={() => this.removeCharHandler(charIndex)} />
        );
    })

    return (
      <div>
        <InputText 
          changed={this.onTextChangeHandler}
          length={this.state.length}
          text={this.state.text} />
        <ValidationComponent 
          length={this.state.length} />
        {charList}
      </div>

    );
  }
}

export default App;
