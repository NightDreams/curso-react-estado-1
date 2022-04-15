import React, { Component } from "react";
import { Loading } from "./Loading";

const SEGURITY_CODE = "paradigma";

export class ClasState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      loading: false,
      value: ""
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
        if (SEGURITY_CODE === this.state.value) {

          this.setState({ error: false });
        } else {

          this.setState({ error: true });
        }
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
        {(this.state.error && !this.state.loading) &&
          <p> Error: el código es incorrecto</p>
        }
        {this.state.loading && <Loading />}

        <input
          type="text"
          placeholder="Código de seguridad"
          value={this.state.value}
          onChange={(event) => {
            this.setState({
              value: event.target.value
            });

          }} />
        <button onClick={() => this.setState({ loading: true })}>
          Comprobar
        </button>
      </div>
    );
  }
}
