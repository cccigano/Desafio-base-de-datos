import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "./components/Alert";
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import { BaseColaboradores } from "./data/BaseColaboradores";

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const handleAgregarColaborador = (nuevoColaborador) => {
    setColaboradores([
      ...colaboradores,
      { id: (colaboradores.length + 1).toString(), ...nuevoColaborador },
    ]);
    setAlertMessage("Colaborador agregado exitosamente");
    setAlertType("success");
  };

  const handleEliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradores(nuevosColaboradores);
  };

  const handleSearch = (query) => {
    let resultados;
    if (query.trim() === "") {
      resultados = BaseColaboradores;
    } else {
      resultados = colaboradores.filter((colaborador) =>
        Object.values(colaborador).some((valor) =>
          valor.toLowerCase().includes(query.toLowerCase())
        )
      );
    }

    setColaboradores(resultados);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Lista de Colaboradores</h1>
      <Alert message={alertMessage} type={alertType} />
      <div className="row">
        <div className="col-lg-8">
          <div className="mb-4">
            <h2>Buscar Colaborador</h2>
            <Buscador handleSearch={handleSearch} />
          </div>
          <div>
            <h2>Lista de Colaboradores</h2>
            <Listado
              colaboradores={colaboradores}
              handleEliminarColaborador={handleEliminarColaborador}
            />
          </div>
        </div>
        <div className="col-lg-4 mt-4 mt-lg-0">
          <h2>Agregar Nuevo Colaborador</h2>
          <Formulario handleAgregarColaborador={handleAgregarColaborador} />
        </div>
      </div>
    </div>
  );
};

export default App;
