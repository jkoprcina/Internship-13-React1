import React, { Component } from 'react';

class ColoredText extends Component{
  render(){
    return (
      <p 
        style= {{color: this.props.color}}>
        {this.props.label}
      </p>
    );
  }
}

export default ColoredText;