import React, { Component } from 'react';

class UserInput extends Component {
    style = {
        paragraph: {
            display: "inline-block",
        },
        div: {
            width: "40%",
            display: "inline-block",
            textAlign: "left",
            margin: "16px",
            padding: "16px"
        }
    }

    render () {
        return (
            <div style={this.style.div}>
                <p style={this.style.paragraph}>Username: </p>
                <p style={this.style.paragraph}>{this.props.username}</p>
            </div>
        );
    }
}

export default UserInput