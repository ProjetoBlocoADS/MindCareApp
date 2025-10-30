import ListaPsicologos from "./components/ListaPsicologos"
import BotaoFiltrar from "../../componentes/btn/BotaoFiltrar"

export default function HomePaciente() {
    return(
        <div>
        <div>
        <h4>Seja Bem Vindo!</h4>
        <h2>
          Consultas
        </h2>
      </div>
      <BotaoFiltrar/>
       <ListaPsicologos/>
        </div>
       
    )
}