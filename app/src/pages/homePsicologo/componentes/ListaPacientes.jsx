import SearchBar from "./SearchBar";
import avatar from "../../../assets/home/ilustraHome.png";

const pacientes = [
  { id: 1, nome: "Ana Souza", patologiaMental: "Ansiedade crônica" },
  { id: 2, nome: "Bruno Lima", patologiaMental: "Depressão maior" },
  {
    id: 3,
    nome: "Carla Mendes",
    patologiaMental: "TOC",
  },
  { id: 4, nome: "Diego Ferreira", patologiaMental: "Transtorno bipolar" },
  { id: 5, nome: "Eduarda Silva", patologiaMental: "Síndrome do pânico" },
  {
    id: 6,
    nome: "Felipe Rocha",
    patologiaMental: "TEPT",
  },
  { id: 7, nome: "Gabriela Torres", patologiaMental: "Fobia social" },
];

export default function ListaPacientes() {
  return (
    <div className="w-full max-w-[359px] h-[500px] bg-[#EEEEEE] rounded-[24px] mx-auto mb-10">
      <SearchBar placeholder={"Search"} />

      <div className="flex flex-col gap-2 mx-auto items-center mt-3">
        {pacientes.map((paciente) => (
          <div
            key={paciente.id}
            className="w-[90%] max-w-[308px] h-[51px] bg-[#FFF8F8] rounded-[26px]"
          >
            <div className="flex items-center justify-between px-3 h-full">
              <img
                className="w-[39px] h-[39px] object-cover rounded-full"
                src={avatar}
                alt={paciente.nome}
              />

              <div className="flex flex-col items-start ml-2 flex-1">
                <h4 className="text-[14px] font-semibold">{paciente.nome}</h4>
                <p className="text-[12px]">{paciente.patologiaMental}</p>
              </div>

              <div className="w-[79px] h-[25px] rounded-[26px] bg-[#EBF568] px-2 py-1 flex items-center justify-center">
                <p className="text-[10px] text-black">Em análise</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
