import { Paciente } from "./Paciente";

export const ListadoPacientes = ({ pacientes, setPaciente }) => {
  return (
    <>
      <div className="md:w-1/2 lg:w-3/5">
        {pacientes && pacientes.length ? (
          <>
            <h2 className="font-black text-3xl text-center mb-5">
              Listado de <span className="text-indigo-600">Pacientes</span>
            </h2>

            <div className="md:h-screen md:overflow-y-scroll md:mb-10 custom-scroll px-2">
              {pacientes.map((paciente) => (
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                />
              ))}
            </div>
          </>
        ) : (
          <h2 className="font-black text-3xl text-center mb-5">
            No hay <span className="text-indigo-600">Pacientes</span>
          </h2>
        )}
      </div>
    </>
  );
};
