import banner from "../../assets/home/ilustraHome.png";
import acompanhamento from "../../assets/home/acompanhamento.jpg";
import tratamento from "../../assets/home/tratamento.jpg";
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
      { image: acompanhamento, label: "Acompanhamento", alt: "ilustração" },
      { image: tratamento, label: "Tratamento", alt: "ilustração" },
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
        className="md:w-[350px] mx-auto mt-10"
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

        <div className="md:flex md:flex-col md:items-center md:justify-center w-8/10 mt-0">
          <Descricao
            titulo={conteudo.home.descricao[0].titulo}
            descricao={conteudo.home.descricao[0].descricao}
          />
          <Descricao
            titulo={conteudo.home.descricao[1].titulo}
            descricao={conteudo.home.descricao[1].descricao}
          />
        </div>

        <div className="carrossel flex flex-wrap justify-center gap-4 mt-4">
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
