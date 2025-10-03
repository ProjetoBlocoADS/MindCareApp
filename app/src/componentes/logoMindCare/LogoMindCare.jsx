import { Brain } from 'lucide-react';
import "./logoMindCare.css"

export default function LogoMindCare({onClick, style}) {
    return <div onClick={onClick} className={style}><Brain size={30} />
        <h1 className='titulo'>MindCare</h1></div>
}