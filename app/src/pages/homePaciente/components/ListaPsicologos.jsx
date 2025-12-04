import { useState, useContext } from "react";
import PsicoContext from "../../../context/PsicoContext";
import { Calendar } from "lucide-react";
import SearchBar from "../../homePsicologo/componentes/SearchBar";
import AgendamentoModal from "./AgendamentoModal";

export default function ListaPsicologos({ onAddAppointment }) {
  const { profissionais, error, isLoading } = useContext(PsicoContext);

  const [inputValue, setInputValue] = useState("");
  const [psicoParaAgendar, setPsicoParaAgendar] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (value) => setInputValue(value);

  const handleAgendamento = (profissional) => {
    setPsicoParaAgendar(profissional);
    setIsOpen(true);
  };

  const matchedProfessionals = profissionais.filter(
    (prof) =>
      prof.nome.toLowerCase().includes(inputValue.toLowerCase()) ||
      prof.especialidade
        .join(" ")
        .toLowerCase()
        .includes(inputValue.toLowerCase())
  );

  if (error) return <div>Erro ao buscar psicólogos...</div>;
  if (isLoading) return <div>Carregando psicólogos...</div>;

  return (
    <div
      className="
        w-full  
        max-w-full
        bg-[#EEEEEE]
        rounded-[24px]
        mx-auto 
        mb-10 
        flex flex-col 
        gap-4 
        p-4
        h-[480px]
        sm:max-w-[500px]
        md:max-w-[600px]
        lg:max-w-[700px]
      "
    >
      <SearchBar
        onChangeValue={handleInputChange}
        value={inputValue}
        placeholder={"nome | especialidade"}
      />

      <div
        className="
          flex flex-col 
          gap-3 
          items-center 
          mt-3 
          overflow-y-auto 
          flex-1 
          p-1
          w-full
        "
      >
        {matchedProfessionals.map((psico) => (
          <div
            key={psico.nome}
            onClick={() => handleAgendamento(psico)}
            className="
              w-full
              min-h-[60px]
              bg-[#FFF8F8] 
              rounded-[20px] 
              flex 
              items-center 
              shadow 
              px-3 
              border 
              cursor-pointer
              hover:shadow-md 
              transition
            "
            data-testid="profissional-card"
          >
            <Calendar className="text-blue-500" />

            <div className="flex flex-col ml-3 flex-1">
              <h4 className="text-[14px] font-semibold">{psico.nome}</h4>
              <p
                className="
                  text-[12px] 
                  text-[#837878] 
                  truncate 
                  max-w-[200px]
                  sm:max-w-[250px]
                "
              >
                {psico.especialidade[0]}
              </p>
            </div>

            <div
              className="
                bg-[#6AF568] 
                rounded-[20px] 
                px-4 py-1 
                flex 
                items-center 
                justify-center
                whitespace-nowrap
              "

            >
              <p className="text-black text-[13px] font-semibold">
                Agendar
              </p>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <AgendamentoModal
          psicologos={psicoParaAgendar}
          closeModal={() => setIsOpen(false)}
          onAddAppointment={onAddAppointment}
          id={"modal-agendar"}
          testTitle = {"modal-title"}
        />
      )}
    </div>
  );
}
