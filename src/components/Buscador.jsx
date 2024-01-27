import React from "react";

const Buscador = ({ handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Buscar colaborador..."
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default Buscador;
