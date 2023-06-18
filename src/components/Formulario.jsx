import React from "react";

export const Formulario = () => {
  return (
    <>
      <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center mb-5">
          Seguimiento de <span className="text-indigo-600">Pacientes</span>
        </h2>

        {/* <p className="text-lg mt-5 mb-10 text-center">
          Añade pacientes y {""}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p> */}

        <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
          <div className="mb-5">
            <label
              className="block text-gray-700 uppercase font-bold"
              htmlFor="mascota"
            >
              Nombre Mascota
            </label>
            <input
              type="text"
              id="mascota"
              placeholder="Nombre de la mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label
              className="block text-gray-700 uppercase font-bold"
              htmlFor="propietario"
            >
              Nombre Propietario
            </label>
            <input
              type="text"
              id="propietario"
              placeholder="Nombre del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label
              className="block text-gray-700 uppercase font-bold"
              htmlFor="email"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              placeholder="Ingrese su correo electónico"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label
              className="block text-gray-700 uppercase font-bold"
              htmlFor="alta"
            >
              Fecha de alta
            </label>
            <input
              type="date"
              id="alta"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label
              className="block text-gray-700 uppercase font-bold"
              htmlFor="sintomas"
            >
              Síntomas
            </label>
            <textarea
              id="sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describe los síntomas"
            />
          </div>

          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded hover:bg-indigo-700 transition-colors cursor-pointer"
            value="Agregar Paciente"
          />
        </form>
      </div>
    </>
  );
};
