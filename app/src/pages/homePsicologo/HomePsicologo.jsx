import CardUser from "./componentes/CardUser";
import ilustraHome from "../../assets/home/ilustraHome.png";
import ListaPacientes from "./componentes/ListaPacientes";


export default function HomePsicologo() {
  return (
    <div className="flex flex-col">
      <CardUser
        avatar={ilustraHome}
        nome="Dr. Paulo Farias"
        profissao="Psicanalista"
      />
      <div className="ml-6 mt-5">
        <h4 className="text-[12px] text-[#22318E]">Seja Bem Vindo!</h4>
        <h2 className="text-[34px] text-[#4483CC] font-semibold relative -top-2">
          Pacientes
        </h2>
      </div>
      <ListaPacientes />
    </div>
  );
}
