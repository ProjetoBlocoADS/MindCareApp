import { useNavigate } from "react-router-dom";
import "./login.css"
import BotaoPadrao from "../../componentes/btn/BotaoPadrao";
import LogoMindCare from "../../componentes/logoMindCare/LogoMindCare";


export default function Login() {

    return (
        <div className="login-container">

            <div className="login-content">
                <div className="logo-login">
                    <LogoMindCare style="logo-branco" />
                </div>
                <div className="login-email">
                    <h2 className="label">E-mail/CFP:</h2>
                    <input className="campo-digitacao"
                        type="email"
                        placeholder="Digite seu e-mail"
                        required
                    />
                </div>
                <div className="login-senha">
                    <h2 className="label">Senha:</h2>
                    <input className="campo-digitacao"
                        type="password"
                        placeholder="Digite sua senha"
                        required
                    />
                </div>
                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        id="remember"
                    />
                    <label htmlFor="remember"> Lembrar-me</label>
                </div>
                <BotaoPadrao style="botaoEscuro">Logar</BotaoPadrao>
            </div>

        </div>
    );
}