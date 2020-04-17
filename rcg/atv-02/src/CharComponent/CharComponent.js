import React, { Component } from 'react';

class CharComponent extends Component {
    style = {
        charComponent : {
            display: 'inline-block',
            padding: '16px',
            margin: '16px',
            border: '1px solid black',
            textAlign: 'center'
        }
    }
    render () {
        return (
            <div 
                style={this.style.charComponent}
                onClick={this.props.click} >
                {this.props.charElem}
            </div>
        );
    }
}

export default CharComponent;