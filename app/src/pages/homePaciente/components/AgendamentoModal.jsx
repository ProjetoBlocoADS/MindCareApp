import { useReducer, useEffect, useState } from "react";
import { DatePicker, PickersDay } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { X } from "lucide-react";

// normalize helper
const normalizeDMY = (dateStr) => {
  if (!dateStr) return dateStr;
  if (dateStr.includes("-")) return dateStr;
  const [day, month, year] = dateStr.split("/");
  return `${year}-${month}-${day}`;
};

const initialState = {
  psicologo: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INITIAL_STATE": {
      const p = action.payload;
      const disponibilidadeNormalizada = (p.disponibilidade || []).map(
        (item) => ({
          data: normalizeDMY(item.data),
          horarios: [...item.horarios],
        })
      );

      return {
        ...state,
        psicologo: { ...p, disponibilidade: disponibilidadeNormalizada },
      };
    }

    default:
      return state;
  }
};

export default function AgendamentoModal({
  psicologos,
  closeModal,
  onAddAppointment,
  id,
  testTitle
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [selectedDate, setSelectedDate] = useState(null);
  const [horariosDoDia, setHorariosDoDia] = useState([]);
  const [selectedHorario, setSelectedHorario] = useState(null);

  useEffect(() => {
    if (psicologos)
      dispatch({ type: "SET_INITIAL_STATE", payload: psicologos });
  }, [psicologos]);

  const handleSelectDate = (dateObj) => {
    setSelectedHorario(null);
    setSelectedDate(dateObj);

    if (!dateObj) return;

    const dateStr = dateObj.format("YYYY-MM-DD");
    const found = state.psicologo?.disponibilidade.find(
      (d) => d.data === dateStr
    );
    setHorariosDoDia(found?.horarios || []);
  };

  const handleConfirmar = () => {
    if (!selectedDate || !selectedHorario) return;

    const appointment = {
      id: Date.now(),
      data: selectedDate.format("YYYY-MM-DD"),
      horario: selectedHorario,
      psicologoNome: state.psicologo?.nome,
    };

    onAddAppointment(appointment);

    alert("Agendamento confirmado!");
    closeModal(false);
  };

  const availableDates = new Set(
    (state.psicologo?.disponibilidade || [])
      .filter((d) => d.horarios.length > 0)
      .map((d) => d.data)
  );

  const renderDay = (props) => {
    const { day, ...other } = props;
    const dateStr = day.format("YYYY-MM-DD");
    const isAvailable = availableDates.has(dateStr);

    return (
      <PickersDay
        {...other}
        day={day}
        sx={
          isAvailable
            ? { backgroundColor: "#86efac", color: "black" }
            : {}
        }
      />
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div data-testid={id}  className="fixed inset-0 z-[999] flex items-center justify-center p-4">
        {/* Fundo escuro */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => closeModal(false)}
        />

        {/* Modal */}
        <div
          className="
            relative z-10 w-full max-w-md 
            bg-white rounded-2xl shadow-xl 
            p-6 flex flex-col items-center
            animate-[slideUp_0.25s_ease-out]
          "
        >
          {/* Botão fechar */}
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
            onClick={() => closeModal(false)}
          >
            <X />
          </button>

          <h2 data-testid={testTitle} className="text-xl font-semibold text-center mt-4 mb-4">
            Agendar com {state.psicologo?.nome}
          </h2>

          {/* Calendário */}
          <div className="w-full">
            <DatePicker
              label="Selecione uma data"
              value={selectedDate}
              onChange={handleSelectDate}
              slots={{ day: renderDay }}
              className="w-full"
            />
          </div>

          {/* Horários */}
          {selectedDate && (
            <div className="mt-6 w-full">
              <h3 className="text-lg font-medium mb-2 text-center">
                Horários disponíveis
              </h3>

              <div className="flex flex-wrap gap-2 justify-center">
                {horariosDoDia.length === 0 ? (
                  <p className="text-gray-600 text-sm">
                    Nenhum horário disponível.
                  </p>
                ) : (
                  horariosDoDia.map((hora) => (
                    <button
                      key={hora}
                      onClick={() => setSelectedHorario(hora)}
                      className={`
                        px-4 py-2 rounded-xl  
                        transition text-sm
                        ${selectedHorario === hora ? "bg-blue-400 text-white" : "bg-green-600"}
                      `}
                    >
                      {hora}
                    </button>
                  ))
                )}
              </div>

              {selectedHorario && (
                <button
                  onClick={handleConfirmar}
                  className="
                    mt-6 w-full bg-green-600 text-white 
                    py-3 rounded-xl shadow 
                    hover:bg-green-700 
                    transition font-medium
                  "
                >
                  Confirmar Agendamento
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </LocalizationProvider>
  );
}
