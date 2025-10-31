
import style from "./BotaoFiltrar.module.css"


export default function BotaoFiltrar({ openModal }) {
  const handleClick = () => {
    openModal((prev) => !prev);
  };

  return (
    <button className={style.botao} onClick={handleClick}>
      FILTRAR
    </button>
  );
}