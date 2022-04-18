import React, { useEffect, useReducer } from "react";

const SEGURITY_CODE = "paradigma";
function UseReducer({ name }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    console.log("Empezando el efecto");
    if (!!state.loading) {
      // emulate backend response
      setTimeout(() => {
        console.log("Haciendo la validación");
        //check security code
        if (state.value === SEGURITY_CODE) {
          dispatch({ type: "CONFIRM" });
        } else {
          dispatch({ type: "ERROR" });
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
            dispatch({ type: "WRITE", payload: value });
            // onWrite(value);
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: "CHECK" });
            // onCheck();
          }}
        >
          Comprobar
        </button>
      </div>
    );
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <>
        <p>Pedimos confirmación ¿Estás seguro?</p>
        <button
          // Reegresar a la pantalla anterior.
          onClick={() => {
            dispatch({ type: "DELETE" });
            // onDelete();
          }}
        >
          Sí, eliminar
        </button>
        <button
          onClick={() => {
            dispatch({ type: "RESET" });
            // onReset();
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
            dispatch({ type: "RESET" });
            // onReset();
          }}
        >
          Resetear, Volver atrás
        </button>
      </>
    );
  }
}

const initialState = {
  value: "",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

export const reducerObject = (state, payload) => ({
  CONFIRM: { ...state, error: false, loading: false, confirmed: true },
  ERROR: { ...state, error: true, loading: false },
  WRITE: { ...state, value: payload },
  CHECK: { ...state, loading: true },
  DELETE: { ...state, deleted: true },
  RESET: { ...state, confirmed: false, deleted: false, value: "" },
});

export const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
};
export { UseReducer };
