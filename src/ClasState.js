import React, { Component } from "react";

export class ClasState extends Component {
  render() {
    return (
      <div>
        <h2>Eliminar ClassState</h2>
        <p>por favor, escribe el codigo de seguridad </p>
        <input type="text" placeholder="Código de seguridad" />
        <button>Comprobar</button>
      </div>
    );
  }
}
