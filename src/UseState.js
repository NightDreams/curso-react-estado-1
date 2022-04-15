import React, { useState, useEffect } from "react";

const SEGURITY_CODE = "paradigma";

export const UseState = ({ name }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(value);

  useEffect(() => {
    console.log("Empezando el efecto");
    if (!!loading) {
      // emulate backend response
      setTimeout(() => {
        console.log("Haciendo la validación");
        //check security code
        if (value !== SEGURITY_CODE) {
          setError(true);
        }
        setLoading(false);
        console.log("Terminando la validación");
      }, 3000);
    }
    console.log("Terminando el efecto");
  }, [loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>por favor, escribe el codigo de seguridad </p>
      {error && <p> Error: el código es incorrecto</p>}
      {loading && <p>Cargando... </p>}

      <input
        type="text"
        placeholder="Código de seguridad"
        onChange={({ target: { value } }) => {
          setValue(value);
          setError(false);
        }}
      />
      <button
        onClick={() => {
          setLoading(true);
          // setError(false);
        }}
      >
        Comprobar
      </button>
    </div>
  );
};
