import { useNavigate } from "react-router-dom";
import "./cadastro.css"
import BotaoPadrao from "../../componentes/btn/BotaoPadrao";
import LogoMindCare from "../../componentes/logoMindCare/LogoMindCare";



import { useState } from "react";

function Cadastro() {
  const [perfil, setPerfil] = useState("");

  return (
    <div className="cadastro-container">
      <div className="cadastro-content">
        <h2 className="cadastro-title">Cadastro</h2>
        <div className="login-email">
          <h2>Nome Completo:</h2>
          <input
            className="campo-digitacao"
            type="text"
            placeholder="Digite seu nome completo"
            required
          />
        </div>

        <div className="campo-formulario">
          <h2>Email:</h2>
          <input
            className="campo-digitacao"
            type="email"
            placeholder="Digite seu e-mail"
            required
          />
        </div>

        <div className="campo-formulario">
          <h2>Data de Nascimento:</h2>
          <input className="campo-digitacao" type="date" required />
        </div>

        <div className="campo-formulario">
          <h2>CPF:</h2>
          <input
            className="campo-digitacao"
            type="text"
            placeholder="XXX.XXX.XXX-XX"
            required
          />
        </div>

        <div className="campo-formulario">
          <h2>Sexo:</h2>
          <div className="checkbox-container">
            <select name="sexo" id="sexo" className="campo-digitacao" required>
              <option value="">Escolha seu sexo</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </select>
          </div>
        </div>

        <div className="campo-formulario">
          <h2>Perfil:</h2>
          <div className="checkbox-container">
            <select
              name="perfil"
              id="perfil"
              className="campo-digitacao"
              value={perfil}
              onChange={(e) => setPerfil(e.target.value)}
              required
            >
              <option value="">Escolha seu perfil</option>
              <option value="psicologo">Psicólogo</option>
              <option value="paciente">Paciente</option>
            </select>
          </div>

          {perfil === "psicologo" && (
            <div>
              <br />
              <h2>CRP:</h2>
              <input
                id="crp"
                name="crp"
                className="campo-digitacao"
                type="text"
                placeholder="Digite seu número de CRP"
                required
              />
             
            </div>

          )}
        </div>
          <BotaoPadrao children={"Proximo"} style={"botaoEscuro"}/>
      </div>
    </div>
  );
}

export default Cadastro;