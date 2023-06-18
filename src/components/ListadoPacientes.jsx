import React from "react";
import { Paciente } from "./Paciente";

export const ListadoPacientes = () => {
  return (
    <>
      <div className="md:w-1/2 lg:w-3/5">
        <h2 className="font-black text-3xl text-center mb-5">
          Listado de <span className="text-indigo-600">Pacientes</span>
        </h2>

        {/* <p className="text-lg mt-5 mb-10 text-center">
          Lista tus {""}
          <span className="text-indigo-600 font-bold">Pacientes</span>
        </p> */}

        <div className="md:h-screen md:overflow-y-scroll md:mb-10">
          <Paciente />
          <Paciente />
          <Paciente />
          <Paciente />
        </div>
      </div>
    </>
  );
};
