import React from "react";

export default function AppointmentList({ appointments, onCancel, onAlter }) {
  if (!appointments || appointments.length === 0) {
    return (
      <div className="p-4 mt-8 max-w-[359px] mx-auto text-center text-gray-500">
        Nenhum agendamento pendente.
      </div>
    );
  }

  return (
    <div
      className="mb-5 p-4 bg-white rounded-lg 
                        shadow-lg border-2 border-gray-200 
                        max-w-[359px] mx-auto"
    >
      <h3 className="text-lg font-bold mb-4 border-b pb-2 text-blue-600">
        📅 Meus Agendamentos
      </h3>

      {appointments.map((app) => (
        <div
          key={app.id}
          className="mb-4 p-3 border border-gray-300 rounded-lg 
                                            bg-gray-50 
                                            shadow-sm"
        >
          <p className="font-semibold text-gray-800">{app.profissionalNome}</p>
          <p className="text-sm text-gray-600">
            Dia: <span className="font-medium">{app.data}</span> às{" "}
            <span className="font-medium">{app.horario}</span>
          </p>

          <div className="flex gap-3 mt-3">
            <button
              className="text-sm text-yellow-700 border border-yellow-700 px-3 py-1 rounded-full hover:bg-yellow-100 transition duration-150"
              onClick={() => onAlter(app)}
            >
              Alterar
            </button>

            <button
              className="text-sm text-red-600 border border-red-600 px-3 py-1 rounded-full hover:bg-red-100 transition duration-150"
              onClick={() => onCancel(app.id, app.profissionalNome)}
            >
              Cancelar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
