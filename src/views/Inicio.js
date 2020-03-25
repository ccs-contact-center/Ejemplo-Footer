import React, { Component } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

import withAuth from "../services/withAuth";
import Navegador from "./componentes/Navegador";
import View1 from "./View1";
import View2 from "./View2";
import { View3, View4, View5 } from "./View3_5";
class Inicio extends Component {
  state = {
    index: 0
  };
  constructor() {
    super();
    this.setIndex = this.setIndex.bind(this);
  }

  setIndex(index) {
    this.setState({
      index: index
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader className="text-center">¡Bienvenido!</CardHeader>
              <CardBody className="text-center">
                {this.state.index === 0 ? (
                  <View1 />
                ) : this.state.index === 1 ? (
                  <View2 />
                ) : this.state.index === 2 ? (
                  <View3 />
                ) : this.state.index === 3 ? (
                  <View4 />
                ) : this.state.index === 4 ? (
                  <View5 />
                ) : null}
                <br />
              </CardBody>
              <Navegador handleNavigation={this.setIndex} maxIndex={4} />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withAuth(Inicio);
