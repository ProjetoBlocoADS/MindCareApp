import "./descricao.css"

export default function Descricao({titulo, descricao}) {
    return (
        <div className="descricao">
            <h2 className="tituloDescricao">{titulo}</h2>
            <p className="paragrafoDescricao">{descricao}</p>
        </div>
    );
}