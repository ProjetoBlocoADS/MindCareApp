import { useState, useContext } from "react";
import PsicoContext from "../../../context/PsicoContext";
import { Calendar } from "lucide-react";
import SearchBar from "../../homePsicologo/componentes/SearchBar";
import { X } from "lucide-react";

export default function ListaPsicologos({ onOpenCalendar }) {
  const { profissionais, error, isLoading } = useContext(PsicoContext) || {};
  const [inputValue, setInputValue] = useState("");

  const [especialidadeModal, setEspecialidadeModal] = useState(null);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleEspecialidade = (e, psico) => {
    e.stopPropagation();
    setEspecialidadeModal(psico);
  };

  const profissionaisToFilter = profissionais || [];

  const matchedProfessionals = profissionaisToFilter.filter(
    (prof) =>
      (prof.nome &&
        prof.nome.toLowerCase().includes(inputValue.toLowerCase())) ||
      (prof.especialidade &&
        Array.isArray(prof.especialidade) &&
        prof.especialidade
          .join(" ")
          .toLowerCase()
          .includes(inputValue.toLowerCase()))
  );

  if (error) {
    return <div>Erro ao buscar os Psicologos(as)...</div>;
  }

  if (isLoading) {
    return <div>Carregando a lista de psicologos(as)...</div>;
  }

  return (
    <div className="w-full max-w-[359px] mx-auto mb-10 flex flex-col gap-4">
      <div className="bg-[#EEEEEE] rounded-[24px] flex flex-col gap-4 p-4 min-h-[400px]">
        <SearchBar
          onChangeValue={handleInputChange}
          value={inputValue}
          placeholder={"Pesquisar"}
        />

        <div
          className="flex flex-col gap-3 mx-auto items-center mt-3 overflow-y-auto flex-1 p-3  [scrollbar-width:thin] [scrollbar-color:#999_#EEEEEE]
                        [&::-webkit-scrollbar]:w-2
                        [&::-webkit-scrollbar-track]:bg-[#EEEEEE]
                        [&::-webkit-scrollbar-thumb]:bg-[#bdbdbd] [&::-webkit-scrollbar-thumb]:rounded-full"
        >
          {matchedProfessionals.map((psico) => (
            <div
              key={psico.nome}
              className="min-w-[308px] min-h-[51px] bg-[#FFF8F8] rounded-[26px] flex items-center shadow-[0_4px_4px_0_#C5B4B4] px-3 border border-[#C5B4B4] cursor-pointer "
            >
              <Calendar color="#468BFC" />
              <div className="flex flex-col items-start ml-2 flex-1 p-1">
                <h4 className="text-[14px] font-semibold">{psico.nome}</h4>
                <div className="text-[12px]">
                  <p className="truncate w-[180px] text-start text-[10px] text-[#837878]">
                    {psico.especialidade && psico.especialidade.length > 1 ? (
                      <>
                        {psico.especialidade[0]} ...
                        <span
                          onClick={(e) => handleEspecialidade(e, psico)}
                          className="text-blue-500 font-bold"
                        >
                          ver mais
                        </span>
                      </>
                    ) : psico.especialidade ? (
                      psico.especialidade[0]
                    ) : (
                      "N/A"
                    )}
                  </p>
                  {especialidadeModal?.id === psico.id && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex flex-col  justify-center px-4">
                      <div className=" w-full min-h-[51px] bg-[#FFF8F8] rounded-[26px] flex flex-col items-center px-3 border-[5px] border-blue-500 cursor-pointer p-3 gap-4 ">
                        <X
                          onClick={() => {
                            setEspecialidadeModal(false);
                          }}
                          className=""
                          color="red"
                        />
                        <h2 className="text-[18px] text-center">
                          Especialidades de {especialidadeModal.nome}
                        </h2>
                        <div className="flex  gap-3">
                          {especialidadeModal.especialidade &&
                            especialidadeModal.especialidade.length > 0 &&
                            especialidadeModal.especialidade.map(
                              (especialidade) => (
                                <div
                                  className="border border-blue-500 rounded-[10px] p-2 break flex items-center"
                                  key={especialidade}
                                >
                                  <p className="text-black text-[12px] ">
                                    {especialidade}
                                  </p>
                                </div>
                              )
                            )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div
                onClick={() => onOpenCalendar(psico)}
                className="flex flex-col justify-center bg-[#6AF568] rounded-[26px] p-1 hover:bg-blue-400"
              >
                <p className="text-[13px] text-black leading-tight font-semibold font-sans">
                  Agendar Sessão
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
