import { useState } from "react";
import { useContext } from "react";
import PsicoContext from "../../../context/PsicoContext";
import { Calendar } from "lucide-react";
import SearchBar from "../../homePsicologo/componentes/SearchBar";
import ModalFiltros from "./ModalFiltros";
import BotaoFiltrar from "../../../componentes/btn/BotaoFiltrar";

export default function ListaPsicologos() {
  const { profissionais, error, isLoading } = useContext(PsicoContext);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [especialidadeModal, setEspecialidadeModal] = useState(null);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleModal = (callback) => {
    if (typeof callback === "function") {
      setIsOpen(callback);
    } else {
      setIsOpen(callback);
    }
  };
  const handleEspecialidade = (e, psico) => {
    e.stopPropagation();
    setEspecialidadeModal(psico);
  };

  //logica para filtrar profissionais na barra de pesquisa
  const matchedProfessionals = profissionais.filter(
    (prof) =>
      prof.nome.toLowerCase().includes(inputValue.toLowerCase()) ||
      prof.especialidade
        .join(" ")
        .toLowerCase()
        .includes(inputValue.toLowerCase())
  );

  if (error) {
    return <div>Erro ao buscar os Psicologos(as)...</div>;
  }

  if (isLoading) {
    return <div>Carregando a lista de psicologos(as)...</div>;
  }

  return (
    //  <BotaoFiltrar openModal={handleModal}/>
    <div
      onClick={() => {
        setEspecialidadeModal(false);
      }}
      className="w-full max-w-[359px] h-[500px] bg-[#EEEEEE] rounded-[24px] mx-auto mb-10 flex flex-col gap-4"
    >
      <SearchBar
        onChangeValue={handleInputChange}
        value={inputValue}
        placeholder={"Pesquisar"}
      />
      {isOpen && <ModalFiltros />}

      <div
        className="flex flex-col gap-3 mx-auto items-center mt-3 overflow-y-auto flex-1 p-3   [scrollbar-width:thin] [scrollbar-color:#999_#EEEEEE]
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
                <p className="truncate w-[150px] text-start text-[10px] text-[#837878]">
                  {psico.especialidade.length > 1 ? (
                    <>
                      {psico.especialidade[0]} ...
                      <span
                        onClick={(e) => handleEspecialidade(e, psico)}
                        className="text-blue-500 font-bold"
                      >
                        ver mais
                      </span>
                    </>
                  ) : (
                    psico.especialidade[0]
                  )}
                </p>
                {especialidadeModal?.id === psico.id && (
                  <div className="bg-blue-500 w-full p-2 mt-2 rounded">
                    <p>aqui vai as especialidades por completo</p>
                  </div>
                )}
              </div>
            </div>
            <div className="  flex flex-col justify-center bg-[#6AF568] rounded-[26px] w-[89px] p-1 ">
              <div className="flex items-center justify-center  ">
                <span className="w-1 h-1 bg-black rounded-full inline-block"></span>
                <p className="text-[10px] text-black font-bold px-1">
                  {psico.horario}
                </p>
                <span className="w-1 h-1 bg-black rounded-full inline-block"></span>
              </div>
              <p className="text-[10px] text-black italic  ">{psico.data}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
