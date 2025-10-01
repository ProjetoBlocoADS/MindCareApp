import "./header.css"
import LogoMindCare from "../logoMindCare/LogoMindCare";
import { Menu } from 'lucide-react';

export default function Header() {
    return (
        <header className="header">
            <LogoMindCare />
            <Menu size={30} />
        </header>
    );
}