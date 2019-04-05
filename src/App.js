import React, { Component } from 'react';
import ColoredText from "./components/ColoredText";
 
class App extends Component {
  constructor(props){ 
    super(props);

    this.state = {
      color: "",
      clicked: [ true, true, true]
    }
  }
    handleClickColor(color) {
      this.setState({color})
    };

    toggleIsIndexClicked(index){
      let clicked = this.state.clicked;
      clicked[index] = !this.state.clicked[index];
      this.setState({clicked});
    };
  render() {
    return (
      <>
        <h1>Colors</h1>
          <p 
            onClick={() => this.handleClickColor("red")}
            style={{fontWeight: this.state.color === "red" ? "bold":"normal"}}
          >Red</p>
          <p 
            onClick={() => this.handleClickColor("blue")}
            style={{fontWeight: this.state.color === "blue" ? "bold":"normal"}}
          >Blue</p>
          <p 
            onClick={() => this.handleClickColor("green")}
            style={{fontWeight: this.state.color === "green" ? "bold":"normal"}}
          >Green</p>
        <h1>Indexes</h1>
          <p
            onClick={() => this.toggleIsIndexClicked(0)}
            style={{fontWeight: this.state.clicked[0] ? "bold":"normal"}}
          >1</p>
          <p
            onClick={() => this.toggleIsIndexClicked(1)}
            style={{fontWeight: this.state.clicked[1] ? "bold":"normal"}}
          >2</p>
          <p
            onClick={() => this.toggleIsIndexClicked(2)}
            style={{fontWeight: this.state.clicked[2] ? "bold":"normal"}}
          >3</p>
        <h1>Result</h1>
          <ColoredText label="1" color={this.state.clicked[0] ? this.state.color : "black"}/>
          <ColoredText label="2" color={this.state.clicked[1] ? this.state.color : "black"}/>
          <ColoredText label="3" color={this.state.clicked[2] ? this.state.color : "black"}/>
      </>
    );
  }
}

export default App;
