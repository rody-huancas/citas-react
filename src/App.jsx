import { useState } from "react";
import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";
import { ListadoPacientes } from "./components/ListadoPacientes";
import { Paciente } from "./components/Paciente";

const App = () => {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  return (
    <>
      <div className="container mx-auto mt-10 ">
        <Header />
        <div className="mt-12 md:flex md:gap-5">
          <Formulario
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
          />
          <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} />
        </div>
      </div>
    </>
  );
};

export default App;
