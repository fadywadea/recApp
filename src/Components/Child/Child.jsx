import React, { Component } from "react";

export default class Child extends Component {
  render() {
    return <h5 className="text-white text-center">hello {this.props.brand}</h5>;
  }
}
