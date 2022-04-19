import React, { useEffect, useReducer } from "react";

const SEGURITY_CODE = "paradigma";
function UseReducer({ name }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // action creators - make redux declarative
  const onConfirm = () => dispatch({ type: actionTypes.confirm });
  const onError = () => dispatch({ type: actionTypes.error });
  const onCheck = () => dispatch({ type: actionTypes.check });
  const onDelete = () => dispatch({ type: actionTypes.delete });
  const onReset = () => dispatch({ type: actionTypes.reset });
  const onWrite = ({ target: { value } }) => {
    dispatch({ type: actionTypes.write, payload: value });
  };
  console.log(state);
  useEffect(() => {
    console.log("Empezando el efecto");
    if (!!state.loading) {
      // emulate backend response
      setTimeout(() => {
        console.log("Haciendo la validación");
        //check security code
        if (state.value === SEGURITY_CODE) {
          onConfirm();
        } else {
          onError();
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
          onChange={onWrite}
        />
        <button onClick={onCheck}>Comprobar</button>
      </div>
    );
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <>
        <p>Pedimos confirmación ¿Estás seguro?</p>
        <button
          // Reegresar a la pantalla anterior.
          onClick={onDelete}
        >
          Sí, eliminar
        </button>
        <button onClick={onReset}>No, me arrepenti</button>
      </>
    );
  } else {
    return (
      <>
        <p>Eliminado con éxito </p>
        <button
          // Reegresar a la pantalla anterior.
          onClick={onReset}
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
const actionTypes = {
  confirm: "CONFIRM",
  error: "ERROR",
  delete: "DELETE",
  write: "WRITE",
  reset: "RESET",
  check: "CHECK",
};
export const reducerObject = (state, payload) => ({
  [actionTypes.confirm]: {
    ...state,
    error: false,
    loading: false,
    confirmed: true,
  },
  [actionTypes.error]: { ...state, error: true, loading: false },
  [actionTypes.write]: { ...state, value: payload },
  [actionTypes.check]: { ...state, loading: true },
  [actionTypes.delete]: { ...state, deleted: true },
  [actionTypes.reset]: {
    ...state,
    confirmed: false,
    deleted: false,
    value: "",
  },
});

export const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
};
export { UseReducer };
