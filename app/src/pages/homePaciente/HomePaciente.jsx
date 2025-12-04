import { useState } from "react";
import ListaPsicologos from "./components/ListaPsicologos";
import CardUser from "../homePsicologo/componentes/CardUser";
import ilustraHome from "../../assets/home/ilustraHome.png";
import AppointmentList from "./components/AppointmentList";

export default function HomePaciente() {
  const [appointments, setAppointments] = useState([]);

  function handleAddAppointment(novo) {
    setAppointments((prev) => [...prev, novo]);
  }

  function handleCancel(agendamento) {
    setAppointments((prev) =>
      prev.filter((item) => item.id !== agendamento.id)
    );
  }

  return (
    <div
      className="
        flex flex-col 
        mx-auto w-full 
        px-4 
        max-w-[480px]        /* mobile e tablets pequenos */
        sm:max-w-[640px]     /* tablets */
        md:max-w-[768px]     /* telas médias */
        lg:max-w-[900px]     /* desktop compacto */
        xl:max-w-[1100px]    /* desktop grande */
      "
    >
      {/* CARD DO USUÁRIO */}
      <div className="mt-6 flex justify-center">
        <CardUser
          avatar={ilustraHome}
          nome="Daniel Marini"
          profissao="Homem - 30 anos - Bancário"
        />
      </div>

      {/* TÍTULO */}
      <div className="flex flex-col items-center mt-6 px-2 sm:px-4">
        <h4 className="text-[12px] sm:text-[14px] text-[#22318E]">
          Seja Bem Vindo!
        </h4>

        <h2
          className="
            text-[30px] sm:text-[36px] 
            text-[#4483CC] font-semibold
            leading-tight
          "
        >
          Consultas
        </h2>
      </div>

      {/* LISTA DE PSICÓLOGOS */}
      <div className="mt-6 flex justify-center" data-testid="lista-psicologos">
        <ListaPsicologos onAddAppointment={handleAddAppointment} />
      </div>

      {/* LISTA DE AGENDAMENTOS */}
      <div className="mb-8 px-2 sm:px-4" data-testid="lista-agendamentos">
        <AppointmentList
          appointments={appointments}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
}
