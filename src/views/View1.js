import React, { Component } from "react";

import logo from "../assets/img/brand/logo.png";

class View1 extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <img src={logo} alt="Logo CCS" className="img-fluid" />
      </div>
    );
  }
}

export default View1;
