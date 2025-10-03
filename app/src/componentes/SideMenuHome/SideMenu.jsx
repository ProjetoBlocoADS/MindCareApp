import "./SideMenu.css"
import { Brain } from 'lucide-react';
import { ChevronsRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function SideMenu({ menuOpen, closeMenu }) {
    const navigate = useNavigate();

    return (
        <nav className={`menuNav ${menuOpen ? "Open" : ""}`}>
            <Brain size={35} color="white" />
            <ul className="lista">
                <li onClick={() => navigate("/login")}><a href="">Logar</a></li>
                <li onClick={() => navigate("/cadastro")}><a href="">Cadastre-se</a></li>
                <li onClick={() => navigate("/sobre")}><a href="">Sobre</a></li>
                <li onClick={() => navigate("/projeto")}><a href="">Projeto</a></li>
                <li onClick={() => navigate("/cadastro")}><a href="">Mental Care</a></li>
                <li onClick={() => navigate("/cadastro")}><a href="">Preciso de Ajuda</a></li>
                <li onClick={() => navigate("/cadastro")}><a href="">FAQ</a></li>
            </ul>
            <div className="div-chevron" onClick={() => closeMenu()}>
                <ChevronsRight color="white" size={48} />
            </div>
        </nav>
    )
}