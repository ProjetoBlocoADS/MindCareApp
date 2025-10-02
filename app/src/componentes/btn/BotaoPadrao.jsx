import "./botaoPadrao.css"

export default function BotaoPadrao({children, style, onClick}) {
    return (
        <button onClick={onClick} className={style}>
            {children}
        </button>
    );
}