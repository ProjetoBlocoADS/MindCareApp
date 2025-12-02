import "./descricao.css"

export default function Descricao({titulo, descricao}) {
    return (
        <div className="flex flex-col items-center my-4">
            <h2 className="text-[#4682b4] text-[1.3rem] font-bold">{titulo}</h2>
            <p className="max-w-[900px] mx-10">{descricao}</p>
        </div>
    );
}