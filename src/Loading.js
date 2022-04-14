import React, { Component } from "react";

export class Loading extends Component {
  componentWillUnmount() {
    console.log("Loading componentWillUnmount");
  }
  render() {
    return <p>Cargando...</p>;
  }
}
