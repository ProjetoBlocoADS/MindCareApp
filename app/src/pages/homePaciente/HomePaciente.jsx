import React, { useState, useContext } from "react";
import ListaPsicologos from "./components/ListaPsicologos";
import CardUser from "../homePsicologo/componentes/CardUser";
import ilustraHome from "../../assets/home/ilustraHome.png";
import CalendarModal from "./components/CalendarModal";
import AppointmentList from "./components/AppointmentList";
import PsicoContext from "../../context/PsicoContext";

export default function HomePaciente() {
  const { profissionais } = useContext(PsicoContext) || {};

  const [userAppointments, setUserAppointments] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPsico, setSelectedPsico] = useState(null);
  const [initialAppointment, setInitialAppointment] = useState(null);

  const handleCloseCalendar = () => {
    setIsOpen(false);
    setSelectedPsico(null);
    setInitialAppointment(null);
  };

  const handleOpenCalendar = (profissionalOrAppointment) => {
    const profissionaisList = profissionais || [];

    if (
      profissionalOrAppointment.id &&
      profissionalOrAppointment.profissionalId
    ) {
      const originalPsico = profissionaisList.find(
        (p) => p.id === profissionalOrAppointment.profissionalId
      );

      if (originalPsico) {
        setSelectedPsico(originalPsico);
        setInitialAppointment(profissionalOrAppointment);
        setIsOpen(true);
      } else {
        alert("Erro: Profissional não encontrado para alteração.");
      }
    } else {
      setSelectedPsico(profissionalOrAppointment);
      setInitialAppointment(null);
      setIsOpen(true);
    }
  };

  const handleSaveAppointment = (details) => {
    if (details.id) {
      setUserAppointments((prev) =>
        prev.map((app) => (app.id === details.id ? details : app))
      );
      alert(
        `Alteração realizada com sucesso para ${details.data} às ${details.horario}.`
      );
    } else {
      const newId = Date.now();
      const newAppointment = { ...details, id: newId };
      setUserAppointments((prev) => [...prev, newAppointment]);
      alert(
        `Agendamento confirmado com ${details.profissionalNome} para ${details.data} às ${details.horario}.`
      );
    }
    handleCloseCalendar();
  };

  const handleCancelAppointment = (appointmentId, profissionalNome) => {
    if (
      window.confirm(
        `Tem certeza que deseja cancelar o agendamento com ${profissionalNome}?`
      )
    ) {
      setUserAppointments((prev) =>
        prev.filter((app) => app.id !== appointmentId)
      );
      alert("Agendamento cancelado com sucesso.");
    }
  };

  return (
    <div className="flex flex-col">
      <CardUser
        avatar={ilustraHome}
        nome="Daniel Marini"
        profissao="Homem - 30 anos - Bancário"
      />
      <div className="ml-6 mt-5">
        <h4 className="text-[12px] text-[#22318E]">Seja Bem Vindo!</h4>
        <h2 className="text-[34px] text-[#4483CC] font-semibold relative -top-2">
          Consultas
        </h2>
      </div>

      <ListaPsicologos onOpenCalendar={handleOpenCalendar} />

      <AppointmentList
        appointments={userAppointments}
        onCancel={handleCancelAppointment}
        onAlter={handleOpenCalendar}
      />

      {isOpen && selectedPsico && (
        <CalendarModal
          onClose={handleCloseCalendar}
          profissional={selectedPsico}
          onConfirm={handleSaveAppointment}
          initialAppointment={initialAppointment}
        />
      )}
    </div>
  );
}
