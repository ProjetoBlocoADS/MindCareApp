import { useNavigate } from "react-router-dom";
import { Brain, ChevronsRight } from "lucide-react";

export default function SideMenu({ menuOpen, closeMenu }) {
  const navigate = useNavigate();

  const handleNavigate = (e, path) => {
    e.stopPropagation();
    navigate(path);
    closeMenu();
  };

  return (
    <nav
      onClick={(e) => e.stopPropagation()}
      className={`
        /* MOBILE: menu lateral */
        fixed top-0 right-0 h-full w-[260px] bg-[#134496] shadow-xl flex flex-col items-start p-6 z-50
        transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}

        /* DESKTOP: vira barra horizontal */
        md:static md:h-auto md:w-full md:flex md:flex-row md:items-center md:justify-between
        md:translate-x-0 md:bg-[#134496] md:p-4 md:shadow-none
      `}
    >
      {/* Ícone + Lista */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-6 w-full">
        {/* Ícone mostrado só no mobile (se quiser manter no desktop pode ajustar) */}
        <div className="md:hidden">
          <Brain size={35} color="white" />
        </div>

        <ul
          className="
            mt-6 space-y-4 text-white text-[18px] font-medium ml-2
            md:mt-0 md:ml-0 md:space-y-0 md:flex md:gap-6 md:items-center
          "
        >
          <li onClick={(e) => handleNavigate(e, "/")} className="cursor-pointer hover:text-gray-300">
            <a>Home</a>
          </li>
          <li onClick={(e) => handleNavigate(e, "/login")} className="cursor-pointer hover:text-gray-300">
            <a>Logar</a>
          </li>
          <li onClick={(e) => handleNavigate(e, "/cadastro")} className="cursor-pointer hover:text-gray-300">
            <a>Cadastre-se</a>
          </li>
          <li onClick={(e) => handleNavigate(e, "/sobre")} className="cursor-pointer hover:text-gray-300">
            <a>Sobre</a>
          </li>
          <li onClick={(e) => handleNavigate(e, "/projeto")} className="cursor-pointer hover:text-gray-300">
            <a>Projeto</a>
          </li>
          <li onClick={(e) => handleNavigate(e, "/mentalcare")} className="cursor-pointer hover:text-gray-300">
            <a>Mental Care</a>
          </li>
          <li onClick={(e) => handleNavigate(e, "/ajuda")} className="cursor-pointer hover:text-gray-300">
            <a>Preciso de Ajuda</a>
          </li>
          <li onClick={(e) => handleNavigate(e, "/faq")} className="cursor-pointer hover:text-gray-300">
            <a>FAQ</a>
          </li>
        </ul>
      </div>

      {/* Botão de fechar — só mobile */}
      <div
        className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-[#134496] p-2 rounded-l-xl cursor-pointer hover:bg-[#0f3577] md:hidden"
        onClick={closeMenu}
      >
        <ChevronsRight color="white" size={48} />
      </div>
    </nav>
  );
}
