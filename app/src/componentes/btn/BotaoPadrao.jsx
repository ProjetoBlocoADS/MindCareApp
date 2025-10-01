import "./botaoPadrao.css"

export default function BotaoPadrao({children, style}) {
    return (
        <button className={style}>
            {children}
        </button>
    );
}