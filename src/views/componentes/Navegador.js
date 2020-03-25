import React, { Component } from "react";
import { CardFooter, Button } from "reactstrap";

class Navegador extends Component {
  state = {
    index: 0
  };

  constructor() {
    super();
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleBack(event) {
    this.setState(
      {
        index: this.state.index - 1
      },
      () => {
        this.props.handleNavigation(this.state.index);
      }
    );
  }

  handleNext(event) {
    this.setState(
      {
        index: this.state.index + 1
      },
      () => {
        this.props.handleNavigation(this.state.index);
      }
    );
  }

  render() {
    return (
      <CardFooter className="text-center">
        {this.state.index === 0 ? null : (
          <Button style={{ width: 100 }} onClick={this.handleBack}>
            Atras
          </Button>
        )}

        {"Hola, el index es " + this.state.index}
        {this.state.index >= this.props.maxIndex ? null : (
          <Button style={{ width: 100 }} onClick={this.handleNext}>
            Adelante
          </Button>
        )}
      </CardFooter>
    );
  }
}

export default Navegador;
