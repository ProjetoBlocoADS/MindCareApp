import SearchBar from "./SearchBar";
import avatar from "../../../assets/home/ilustraHome.png";
import { useEffect, useState } from "react";

export default function ListaPacientes() {
  const [pacientes, setPacientes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

 useEffect(() => {
  fetch("/pacientes.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Erro ao carregar os dados");
      }
      return res.json();
    })
    .then((data) => {
      setPacientes(data.pacientes);
      setIsLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setIsLoading(false);
    });
}, []);


  if (isLoading) return <p>Carregando pacientes...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="w-full max-w-[359px] h-[500px] bg-[#EEEEEE] rounded-[24px] mx-auto mb-10 md:max-w-[500px]">
      <SearchBar placeholder={"Search"} />
      <div className="flex flex-col gap-2 mx-auto items-center mt-3">
        {pacientes.map((paciente) => (
          <div
            key={paciente.id}
            className="w-[90%] max-w-[308px] h-[51px] bg-[#FFF8F8] rounded-[26px] md:max-w-[450px]"
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
