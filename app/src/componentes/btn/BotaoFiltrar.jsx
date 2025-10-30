import style from "./BotaoFiltrar.module.css"
export default function BotaoFiltrar({onClick}){
    return <button className={style.botao} onClick={onClick}>FILTRAR</button>
}