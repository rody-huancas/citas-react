import { useState, useEffect } from "react";
import { Error } from "./Error";

export const Formulario = ({ pacientes, setPacientes, paciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    // console.log(pacientes);
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validar
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    // Objeto de paciente
    const objPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id: generarId(),
    };

    setPacientes([...pacientes, objPaciente]);

    // reniciar el form
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <>
      <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center mb-5">
          Seguimiento de <span className="text-indigo-600">Pacientes</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        >
          {error && <Error mensaje="Todos los campos son obligatorios" />}
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
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
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
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
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
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
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
