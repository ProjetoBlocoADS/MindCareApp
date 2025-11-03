import ListaPsicologos from "./components/ListaPsicologos"
import CardUser from "../homePsicologo/componentes/CardUser"
import ilustraHome from "../../assets/home/ilustraHome.png";


export default function HomePaciente() {
    return(
        <div  className="flex flex-col">
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
       <ListaPsicologos/>
        </div>
       
    )
}