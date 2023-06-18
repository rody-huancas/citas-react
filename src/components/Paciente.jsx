export const Paciente = () => {
  return (
    <>
      <div className="mb-5 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre Mascota: <span className="font-normal normal-case">Xavi</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: <span className="font-normal normal-case">Rody</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Correo Electrónico:{" "}
          <span className="font-normal normal-case">rody@correo.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha de alta:{" "}
          <span className="font-normal normal-case">19-06-2023</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas: <span className="font-normal normal-case">No come</span>
        </p>
      </div>
    </>
  );
};
