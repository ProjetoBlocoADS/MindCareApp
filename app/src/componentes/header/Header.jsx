import "./header.css"
import LogoMindCare from "../logoMindCare/LogoMindCare";
import { Menu } from 'lucide-react';
import { useNavigate } from "react-router-dom";


export default function Header({alterMenu}) {

    const navigate = useNavigate();

    const handleClick = () => navigate('/')


    return (
        <header onClick={handleClick} className="header">
            <LogoMindCare style="logo"/>
            <Menu onClick={(e) => { e.stopPropagation(); alterMenu(); }} size={30} />
        </header>
    );
}