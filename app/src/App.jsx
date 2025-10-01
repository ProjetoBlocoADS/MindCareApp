import banner from "../src/assets/home/ilustraHome.png"
import Header from "./componentes/header/Header"
import Descricao from "./componentes/descricao/Descricao"
import BotaoPadrao from "./componentes/btn/BotaoPadrao"

const textos = {
  home: {
    descricao: [{ titulo: 'Sua Saúde, a um click de distância', descricao: 'O MindCare é um aplicativo inovador desenvolvido para aproximar psicólogos e pacientes em um ambiente digital seguro, prático e moderno. Com ele, é possível realizar acompanhamento psicológico de forma contínua, facilitando a comunicação entre profissional e paciente, o agendamento de consultas, além de oferecer recursos que tornam o processo terapêutico mais acessível e integrado ao dia a dia. ' }, { titulo: 'Nossas Funcionalidades', descricao: 'O MindCare é um aplicativo inovador desenvolvido para aproximar psicólogos e pacientes em um ambiente digital seguro, prático e moderno. ' }]
  }
}



function App() {

  return (
    <div className="app-container" >
      <Header />
      <img className="banner" src={banner} alt="Ilustração Mental Quebra-Cabeças" />

      <div className="">
        <Descricao titulo={textos.home.descricao[0].titulo} descricao={textos.home.descricao[0].descricao} />

      <div className="toolbar-botao">
        <BotaoPadrao style="botaoEscuro">
          Participe
        </BotaoPadrao>
        <BotaoPadrao style="botaoClaro">
          Saiba Mais
        </BotaoPadrao>
      </div>
        
        <Descricao titulo={textos.home.descricao[1].titulo} descricao={textos.home.descricao[1].descricao} />
      </div>
    </div >
  )
}

export default App
