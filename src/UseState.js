import React, { useState, useEffect } from "react";

export function UseState({ name }) {
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Empezando el efecto");
    if (!!loading) {
      setTimeout(() => {
        console.log("Haciendo la validación");
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
      <input type="text" placeholder="Código de seguridad" />
      <button onClick={() => setLoading(true)}>Comprobar</button>
    </div>
  );
}
