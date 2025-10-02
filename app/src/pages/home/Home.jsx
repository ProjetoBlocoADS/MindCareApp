import banner from "../../assets/home/ilustraHome.png"
import "./home.css"
import Descricao from "../../componentes/descricao/Descricao"
import BotaoPadrao from "../../componentes/btn/BotaoPadrao"
import { useNavigate } from "react-router-dom"
import SideMenu from "../../componentes/SideMenuHome/SideMenu"


const textos = {
  home: {
    descricao: [{ titulo: 'Sua Saúde, a um click de distância', descricao: 'O MindCare é um aplicativo inovador desenvolvido para aproximar psicólogos e pacientes em um ambiente digital seguro, prático e moderno. Com ele, é possível realizar acompanhamento psicológico de forma contínua, facilitando a comunicação entre profissional e paciente, o agendamento de consultas, além de oferecer recursos que tornam o processo terapêutico mais acessível e integrado ao dia a dia. ' }, { titulo: 'Nossas Funcionalidades', descricao: 'O MindCare é um aplicativo inovador desenvolvido para aproximar psicólogos e pacientes em um ambiente digital seguro, prático e moderno. ' }]
  }
}

export default function Home({openMenu, closeSideMenu}) {
     

    const navigate = useNavigate();

    const handleClickLogin = () => navigate('/login');
    const handleClickCadastro = () => navigate('/cadastro')

    
    

    return (<div className="home">
        <SideMenu closeMenu={closeSideMenu} menuOpen={openMenu} />
        <img className="banner" src={banner} alt="Ilustração Mental Quebra-Cabeças" />
        <div className="">
            <Descricao titulo={textos.home.descricao[0].titulo} descricao={textos.home.descricao[0].descricao} />
            <div className="toolbar-botao">
                <BotaoPadrao onClick={handleClickCadastro} style="botaoEscuro">
                    Cadastro
                </BotaoPadrao>
                <BotaoPadrao onClick={handleClickLogin} style="botaoClaro">
                    Login
                </BotaoPadrao>
            </div>
            <Descricao titulo={textos.home.descricao[1].titulo} descricao={textos.home.descricao[1].descricao} />
        </div>
    </div>)
}