import "./header.css"
import LogoMindCare from "../logoMindCare/LogoMindCare";
import { Menu } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();

    const handleClick = () => navigate('/')


    return (
        <header onClick={handleClick} className="header">
            <LogoMindCare />
            <Menu size={30} />
        </header>
    );
}