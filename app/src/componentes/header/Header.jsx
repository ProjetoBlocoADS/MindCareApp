import LogoMindCare from "../logoMindCare/LogoMindCare";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNav = (path) => {
    navigate(path);
    setOpen(false); // fecha no mobile
  };

  return (
    <header className="w-full bg-white text-white shadow-md">
      <div className="flex justify-between items-center px-3 py-3">
        
        {/* LOGO */}
        <div className="cursor-pointer select-none" onClick={() => handleNav("/")}>
          <LogoMindCare style="logo" />
        </div>

        {/* Botão Mobile */}
        <button
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="text-blue-500" size={30} /> : <Menu className="text-blue-500" size={30} />}
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-6 font-medium px-6">
          <p onClick={() => handleNav("/")} className="cursor-pointer text-blue-400  hover:text-blue-300 ">Home</p>
          <p onClick={() => handleNav("/login")} className="cursor-pointer text-blue-400 hover:text-gray-300">Logar</p>
          <p onClick={() => handleNav("/cadastro")} className="cursor-pointer text-blue-400 hover:text-gray-300">Cadastre-se</p>
          <p onClick={() => handleNav("/sobre")} className="cursor-pointer text-blue-400  hover:text-gray-300">Sobre</p>
          <p onClick={() => handleNav("/projeto")} className="cursor-pointer text-blue-400  hover:text-gray-300">Projeto</p>
          <p onClick={() => handleNav("/mentalcare")} className="cursor-pointer text-blue-400 hover:text-gray-300">Mental Care</p>
          <p onClick={() => handleNav("/ajuda")} className="cursor-pointer text-blue-400  hover:text-gray-300">Preciso de Ajuda</p>
          <p onClick={() => handleNav("/faq")} className="cursor-pointer text-blue-400 hover:text-gray-300">FAQ</p>
        </nav>
      </div>

      {/* Menu Mobile (Dropdown) */}
      {open && (
        <nav className="md:hidden flex flex-col bg-[#0F387A] text-white px-6 py-4 gap-4 text-lg font-medium border-t border-white/20">
          <p onClick={() => handleNav("/")}>Home</p>
          <p onClick={() => handleNav("/login")}>Logar</p>
          <p onClick={() => handleNav("/cadastro")}>Cadastre-se</p>
          <p onClick={() => handleNav("/sobre")}>Sobre</p>
          <p onClick={() => handleNav("/projeto")}>Projeto</p>
          <p onClick={() => handleNav("/mentalcare")}>Mental Care</p>
          <p onClick={() => handleNav("/ajuda")}>Preciso de Ajuda</p>
          <p onClick={() => handleNav("/faq")}>FAQ</p>
        </nav>
      )}
    </header>
  );
}
