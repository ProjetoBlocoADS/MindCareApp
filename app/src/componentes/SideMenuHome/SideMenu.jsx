import "./SideMenu.css"
import LogoMindCare from "../logoMindCare/LogoMindCare"
import { Brain } from 'lucide-react';
import { ChevronsRight } from 'lucide-react';

export default function SideMenu({menuOpen, closeMenu}){
    
    return(
        <nav className={`menuNav ${menuOpen? "Open": ""}`}>
            <Brain size={35} color="white" />
            <ul className="lista">
                <li><a href="">Logar</a></li>
                <li><a href="">Cadastre-se</a></li>
                <li><a href="">Sobre</a></li>
                <li><a href="">Projeto</a></li>
                <li><a href="">Mental Care</a></li>
                <li><a href="">Preciso de Ajuda</a></li>
                <li><a href="">FAQ</a></li>
            </ul>
            <div className="div-chevron" onClick={()=>closeMenu()}>
                 <ChevronsRight color="white" size={48} />
            </div>
        </nav>
    )
}