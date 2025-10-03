import "./header.css";
import LogoMindCare from "../logoMindCare/LogoMindCare";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SideMenu from "../SideMenuHome/SideMenu";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header onClick={() => navigate("/")} className="header">
      <LogoMindCare style="logo" />
      <Menu
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen((prev) => !prev);
        }}
        size={30}
      />
      <SideMenu menuOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
    </header>
  );
}
