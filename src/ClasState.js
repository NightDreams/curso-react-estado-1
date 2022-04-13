import React, { Component } from "react";

export class ClasState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: true,
    };
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>por favor, escribe el codigo de seguridad. </p>
        {this.state.error && <p> Error: el código es incorrecto</p>}
        <input type="text" placeholder="Código de seguridad" />
        <button
          onClick={() =>
            this.setState((prevState) => ({ error: !prevState.error }))
          }
        >
          Comprobar
        </button>
      </div>
    );
  }
}
