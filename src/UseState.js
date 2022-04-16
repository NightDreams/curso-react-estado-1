import React, { useState, useEffect } from "react";

const SEGURITY_CODE = "paradigma";

export const UseState = ({ name }) => {
  const [state, setState] = useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  console.log(state);

  useEffect(() => {
    console.log("Empezando el efecto");
    if (!!state.loading) {
      // emulate backend response
      setTimeout(() => {
        console.log("Haciendo la validación");
        //check security code
        if (state.value === SEGURITY_CODE) {
          setState({ ...state, error: false, loading: false, confirmed: true });
        } else {
          setState({ ...state, error: true, loading: false });
        }

        console.log("Terminando la validación");
      }, 3000);
    }
    console.log("Terminando el efecto");
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>por favor, escribe el codigo de seguridad </p>
        {state.error && !state.loading && (
          <p> Error: el código es incorrecto</p>
        )}
        {state.loading && <p>Cargando... </p>}

        <input
          type="text"
          placeholder="Código de seguridad"
          value={state.value}
          onChange={({ target: { value } }) => {
            setState({ ...state, value: value });
          }}
        />
        <button
          onClick={() => {
            setState({ ...state, loading: true });
          }}
        >
          Comprobar
        </button>
      </div>
    );
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <>
        <p>Pedimos configimacion ¿Estás seguro?</p>
        <button
          // Reegresar a la pantalla anterior.
          onClick={() => {
            setState({ ...state, deleted: true });
          }}
        >
          Sí, eliminar
        </button>
        <button
          onClick={() => {
            setState({ ...state, confirmed: false, value: "" });
          }}
        >
          No, me arrepenti
        </button>
      </>
    );
  } else {
    return (
      <>
        <p>Eliminado con éxito </p>
        <button
          // Reegresar a la pantalla anterior.
          onClick={() => {
            setState({ ...state, confirmed: false, deleted: false, value: "" });
          }}
        >
          Resetear, Volver atrás
        </button>
      </>
    );
  }
};
