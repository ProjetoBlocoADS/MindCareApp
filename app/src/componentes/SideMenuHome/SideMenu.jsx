import "./SideMenu.css";
import { Brain, ChevronsRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SideMenu({ menuOpen, closeMenu }) {
  const navigate = useNavigate();

  
  const handleNavigate = (e, path) => {
    e.stopPropagation(); 
    navigate(path);
    closeMenu(); 
  };

  return (
   
    <nav onClick={(e) => e.stopPropagation()} className={`menuNav ${menuOpen ? "Open" : ""}`}>
      <Brain size={35} color="white" />
      <ul className="lista ml-2">
        <li onClick={(e) => handleNavigate(e, "/")}><a>Home</a></li>
        <li onClick={(e) => handleNavigate(e, "/login")}><a>Logar</a></li>
        <li onClick={(e) => handleNavigate(e, "/cadastro")}><a>Cadastre-se</a></li>
        <li onClick={(e) => handleNavigate(e, "/sobre")}><a>Sobre</a></li>
        <li onClick={(e) => handleNavigate(e, "/projeto")}><a>Projeto</a></li>
        <li onClick={(e) => handleNavigate(e, "/mentalcare")}><a>Mental Care</a></li>
        <li onClick={(e) => handleNavigate(e, "/ajuda")}><a>Preciso de Ajuda</a></li>
        <li onClick={(e) => handleNavigate(e, "/faq")}><a>FAQ</a></li>
      </ul>
      <div className="div-chevron" onClick={closeMenu}>
        <ChevronsRight color="white" size={48} />
      </div>
    </nav>
  );
}