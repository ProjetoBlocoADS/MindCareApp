export default function AppointmentList({ appointments, onCancel }) {
  return (
    <div className="mt-6 flex flex-col items-center bg-[#EEEEEE] py-6 px-4 rounded-2xl w-full">
      <h3 className="text-xl font-semibold text-black mb-4">
        Agendamentos Confirmados
      </h3>

      {appointments.length === 0 && (
        <p className="text-gray-600 text-sm">
          Nenhum agendamento realizado.
        </p>
      )}

      <div className="w-full flex flex-col gap-4 max-w-md">
        {appointments.map((app) => (
          <div
            key={app.id}
            className="
              p-4 bg-white rounded-xl shadow 
              border border-gray-200
              flex flex-col gap-2
              transition hover:shadow-md
            "
          >
            <p className="font-semibold text-blue-700 text-center">
              Agendado com {app.psicologoNome}
            </p>

            <div className="text-sm text-gray-800 flex flex-col items-center gap-1">
              <p className="text-black">
                <strong>Data:</strong> {app.data}
              </p>
              <p className="text-black">
                <strong>Horário:</strong> {app.horario}
              </p>
            </div>

            <button
              onClick={() => onCancel(app)}
              className="
                mt-3 w-full bg-red-500 text-white 
                py-2 rounded-lg text-sm font-medium
                hover:bg-red-600 transition
              "
            >
              Cancelar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
