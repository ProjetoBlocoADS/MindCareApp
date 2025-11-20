import React, { useState } from "react";
import styles from "./calendarioModal.module.css";
import { X } from "lucide-react";

const formatDMY = (date) => {
  if (!date) return "";
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const groupTimesByPeriod = (timesArray) => {
  const periods = {
    manha: [],
    tarde: [],
    noite: [],
  };

  if (!timesArray || timesArray.length === 0) return periods;

  timesArray.forEach((time) => {
    const hour = parseInt(time.split(":")[0]);

    if (hour >= 0 && hour <= 11) {
      periods.manha.push(time);
    } else if (hour >= 12 && hour <= 17) {
      periods.tarde.push(time);
    } else if (hour >= 18 && hour <= 23) {
      periods.noite.push(time);
    }
  });

  return periods;
};

export default function CalendarModal({
  onClose,
  profissional,
  onConfirm,
  initialAppointment = null,
}) {
  const [selectedDate, setSelectedDate] = useState(
    initialAppointment
      ? new Date(initialAppointment.data.split("/").reverse().join("-"))
      : null
  );
  const [selectedTime, setSelectedTime] = useState(
    initialAppointment?.horario || null
  );

  const diasDisponiveis = Object.keys(profissional.agenda || {});

  const year = 2025;
  const month = 11;
  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const emptyCellsBefore = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

  const daysInMonth = [];
  for (let i = 1; i <= lastDayOfMonth; i++) {
    daysInMonth.push(new Date(year, month, i));
  }

  const calendarCells = [...Array(emptyCellsBefore).fill(null), ...daysInMonth];

  const handleConfirmAppointment = () => {
    if (!selectedDate || !selectedTime) {
      alert("Por favor, selecione a data e o horário.");
      return;
    }

    const appointmentDetails = {
      id: initialAppointment?.id,
      profissionalId: profissional.id,
      profissionalNome: profissional.nome,
      data: formatDMY(selectedDate),
      horario: selectedTime,
    };

    onConfirm(appointmentDetails);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const renderWeeks = () => {
    const weeks = [];
    let dayIndex = 0;

    while (dayIndex < calendarCells.length) {
      const week = calendarCells.slice(dayIndex, dayIndex + 7);
      dayIndex += 7;

      weeks.push(
        <tr key={`week-${dayIndex}`}>
          {week.map((dateObj, index) => {
            if (!dateObj) {
              return <td key={`empty-${dayIndex}-${index}`}></td>;
            }

            const currentDayString = formatDMY(dateObj);
            const isAvailable = diasDisponiveis.includes(currentDayString);
            const isSelected =
              selectedDate && formatDMY(selectedDate) === currentDayString;

            const dayClass = isAvailable
              ? isSelected
                ? styles.diaSelecionado
                : styles.diaDisponivel
              : "";

            return (
              <td
                key={currentDayString}
                className={dayClass}
                onClick={
                  isAvailable
                    ? () => {
                        setSelectedDate(dateObj);
                        setSelectedTime(null);
                      }
                    : undefined
                }
              >
                {dateObj.getDate()}
              </td>
            );
          })}
        </tr>
      );
    }
    return weeks;
  };

  const selectedDayString = formatDMY(selectedDate);
  const availableTimes = profissional.agenda[selectedDayString] || [];
  const groupedTimes = groupTimesByPeriod(availableTimes);

  return (
    <div className={styles.containerCalendario}>
      <div className={styles.boxCalendario}>
        <div onClick={onClose} className={styles.closeButton}>
          <X />
        </div>

        <h2 className={styles.nomeProfissional}>
          Agendar com {profissional.nome}
        </h2>
        <h2 className={styles.mes}>
          {new Date(year, month, 1).toLocaleDateString("pt-BR", {
            month: "long",
            year: "numeric",
          })}
        </h2>

        <table className={styles.boxTabela}>
          <thead>
            <tr>
              <th>Dom</th>
              <th>Seg</th>
              <th>Ter</th>
              <th>Qua</th>
              <th>Qui</th>
              <th>Sex</th>
              <th>Sáb</th>
            </tr>
          </thead>

          <tbody>{renderWeeks()}</tbody>
        </table>

        {selectedDate && (
          <div className={styles.timeSelector}>
            <h3 className={styles.timeTitle}>
              Escolher o melhor horário para {selectedDayString}
            </h3>

            {Object.entries(groupedTimes).map(
              ([period, times]) =>
                times.length > 0 && (
                  <div key={period} className={styles.timePeriod}>
                    <h4>{period.charAt(0).toUpperCase() + period.slice(1)}</h4>
                    <div className={styles.timeSlots}>
                      {times.map((time) => (
                        <button
                          key={time}
                          className={`${styles.timeButton} ${
                            selectedTime === time ? styles.timeSelected : ""
                          }`}
                          onClick={() => handleTimeSelection(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )
            )}

            {availableTimes.length === 0 && (
              <p>Nenhum horário disponível neste dia.</p>
            )}

            {selectedTime && (
              <button
                className={styles.confirmButton}
                onClick={handleConfirmAppointment}
              >
                {initialAppointment
                  ? "Confirmar Alteração"
                  : "Confirmar Agendamento"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
