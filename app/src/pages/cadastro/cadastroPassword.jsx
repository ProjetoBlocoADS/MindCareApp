import React from "react";
import "./cadastro.css";
import BotaoPadrao from "../../componentes/btn/BotaoPadrao";
import Footer from "../../componentes/footer/Footer";
import LogoMindCare from "../../componentes/logoMindCare/LogoMindCare";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CadastroPassword() {
  return (
    <div className="page-wrapper">
      <div className="cadastro-container">
        <div className="cadastro-content">
          <h2 className="cadastro-title">Cadastro</h2>
          <p>
            Sua senha deve conter no mínimo 8 caracteres, <br />
            seguindo os seguintes requisitos abaixo listados.
          </p>

          <ul >
            <li>Ao menos 1 caractere Maiúsculo</li>
            <li>Ao menos 1 caractere Minúsculo</li>
            <li>Ao menos 1 Número</li>
            <li>Ao menos 1 caractere Especial</li>
          </ul>

          <div className="campo-formulario">
            <h2>Digite sua senha:</h2>
            <input
              className="campo-digitacao"
              type="password"
              placeholder="************"
              required
            />
          </div>

          <div className="campo-formulario" style={{ marginBottom: "0.5rem" }}>
            <h2>Confirme sua senha:</h2>
            <input
              className="campo-digitacao"
              type="password"
              placeholder="************"
              required
            />
          </div>

          <BotaoPadrao children={"Finalizar Cadastro"} style={"botaoEscuro"} />
        </div>
      </div>

    </div>
  );
}
export default CadastroPassword;