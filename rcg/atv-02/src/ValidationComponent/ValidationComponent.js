import React, { Component } from 'react';

class ValidationComponent extends Component {
    render () {
        let textEval = "Text is too short";
        if (this.props.length > 5) {
            textEval = "Text is long enough";
        }
        return (
            <p>
                {textEval}
            </p>
        );
    }
}

export default ValidationComponent;