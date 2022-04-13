import React, { useState } from "react";

export function UseState({ name }) {
  const [error, setError] = useState(true);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>por favor, escribe el codigo de seguridad </p>
      {error && <p> Error: el código es incorrecto</p>}
      <input type="text" placeholder="Código de seguridad" />
      <button onClick={() => setError((prevState) => !prevState)}>
        Comprobar
      </button>
    </div>
  );
}
