import banner from "../../assets/home/ilustraHome.png";
import "./home.css";
import Descricao from "../../componentes/descricao/Descricao";
import BotaoPadrao from "../../componentes/btn/BotaoPadrao";
import { useNavigate } from "react-router-dom";
import CardHome from "../../componentes/card/CardHome";

const conteudo = {
  home: {
    descricao: [
      {
        titulo: "Sua Saúde, a um click de distância",
        descricao:
          "O MindCare é um aplicativo inovador desenvolvido para aproximar psicólogos e pacientes em um ambiente digital seguro, prático e moderno. Com ele, é possível realizar acompanhamento psicológico de forma contínua, facilitando a comunicação entre profissional e paciente, o agendamento de consultas, além de oferecer recursos que tornam o processo terapêutico mais acessível e integrado ao dia a dia. ",
      },
      {
        titulo: "Nossas Funcionalidades",
        descricao:
          "O MindCare é um aplicativo inovador desenvolvido para aproximar psicólogos e pacientes em um ambiente digital seguro, prático e moderno. ",
      },
    ],
    cards: [
      { image: banner, label: "Acompanhamento", alt: "ilustração" },
      { image: banner, label: "Acompanhamento", alt: "ilustração" },
    ],
  },
};

export default function Home() {
  const navigate = useNavigate();

  const handleClickLogin = () => navigate("/login");
  const handleClickCadastro = () => navigate("/cadastro");

  return (
    <div className="home">
      <img
        className="banner"
        src={banner}
        alt="Ilustração Mental Quebra-Cabeças"
      />
      <div>
        <div className="toolbar-botao">
          <BotaoPadrao onClick={handleClickCadastro} style="botaoEscuro">
            Cadastro
          </BotaoPadrao>
          <BotaoPadrao onClick={handleClickLogin} style="botaoClaro">
            Login
          </BotaoPadrao>
        </div>

        <Descricao
          titulo={conteudo.home.descricao[0].titulo}
          descricao={conteudo.home.descricao[0].descricao}
        />
        <Descricao
          titulo={conteudo.home.descricao[1].titulo}
          descricao={conteudo.home.descricao[1].descricao}
        />

        <div className="carrossel">
          {conteudo.home.cards.map((card, i) => (
            <CardHome
              key={i}
              image={card.image}
              label={card.label}
              alt={card.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
