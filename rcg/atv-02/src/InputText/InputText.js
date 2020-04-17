import React, { Component } from 'react';

class InputText extends Component {
    render () {
        return (
            <div>
                <input 
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.text} ></input>
                <p>
                    Text Length:
                </p>
                <p>
                    {this.props.length}
                </p>
            </div>
        );
    }
}

export default InputText;