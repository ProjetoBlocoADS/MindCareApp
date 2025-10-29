import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css"
import BotaoPadrao from "../../componentes/btn/BotaoPadrao";
import LogoMindCare from "../../componentes/logoMindCare/LogoMindCare";


export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    const handleLogin = () => {
        if (email === "psicologo@teste.com" && senha === "Psicologo@777") {
            navigate("/home-psicologo");
        } else if (email === "paciente@teste.com" && senha === "Paciente@777") {
            navigate("/home-paciente");
        } else {
            setErro("Email ou senha inválidos");
        }
    };

    return (
        <div className="login-container">

            <div className="login-content">
                <div className="logo-login">
                    <LogoMindCare style="logo-branco" />
                </div>
                <div className="login-email">
                    <h2 className="label">E-mail/CFP:</h2>
                    <input 
                        className="campo-digitacao"
                        type="email"
                        placeholder="Digite seu e-mail"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="login-senha">
                    <h2 className="label">Senha:</h2>
                    <input 
                        className="campo-digitacao"
                        type="password"
                        placeholder="Digite sua senha"
                        required
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                {erro && <p className="erro-mensagem">{erro}</p>}
                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        id="remember"
                    />
                    <label htmlFor="remember">Lembrar-me</label>
                </div>
                <BotaoPadrao style="botaoEscuro" onClick={handleLogin}>Logar</BotaoPadrao>
            </div>

        </div>
    );
}