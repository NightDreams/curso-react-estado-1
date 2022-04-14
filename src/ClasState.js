import React, { Component } from "react";
import { Loading } from "./Loading";
export class ClasState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: true,
      loading: false,
    };
  }

  // componentWillMount() {
  //   UNSAFE_componentWillMount(){
  //     console.log("componentWillUnmount");
  //   }

  // componentDidMount() {
  //   console.log("componentDidMount");
  // }
  componentDidUpdate() {
    console.log("actualizacion");
    if (!!this.state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validación");
        this.setState({ loading: false });
        console.log("Terminando la validación");
      }, 3000);
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>por favor, escribe el codigo de seguridad. </p>
        {this.state.error && <p> Error: el código es incorrecto</p>}
        {this.state.loading && <Loading />}
        <input type="text" placeholder="Código de seguridad" />
        <button onClick={() => this.setState({ loading: true })}>
          Comprobar
        </button>
      </div>
    );
  }
}
