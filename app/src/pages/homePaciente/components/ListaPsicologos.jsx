import { useState } from "react";
import { useContext } from "react";
import PsicoContext from "../../../context/PsicoContext";
import { Calendar,Dot } from "lucide-react";
import SearchBar from "../../homePsicologo/componentes/SearchBar";
import styles from "../listaPsicologos.module.css"
import ModalFiltros from "./ModalFiltros";
import BotaoFiltrar from "../../../componentes/btn/BotaoFiltrar"
export default function ListaPsicologos(){
    const {profissionais, error, isLoading} = useContext(PsicoContext)
    const [inputValue, setInputValue] = useState("");
    const [isOpen, setIsOpen] = useState(false)
    
    

const handleInputChange = (value) => {
  setInputValue(value);
};

const handleModal = (callback) => {
  if (typeof callback === "function") {
    setIsOpen(callback); 
  } else {
    setIsOpen(callback);
  }
};


    //logica para filtrar profissionais na barra de pesquisa
    const matchedProfessionals = profissionais.filter((prof) =>
        prof.nome.toLowerCase().includes(inputValue.toLowerCase()) ||
        prof.especialidade.join(" ").toLowerCase().includes(inputValue.toLowerCase())
    );

      if (error) {
    return <div>Erro ao buscar os Psicologos(as)</div>;
  }

  if (isLoading) {
    return <div>Carregando a lista de psicologos(as)...</div>;
  }

    return(
        <div className={styles.containerLista}>
            <SearchBar onChangeValue={handleInputChange} value={inputValue} placeholder={"Pesquisar"}/>
            <BotaoFiltrar openModal={handleModal}/>
            {isOpen && (<ModalFiltros/>)}
            {matchedProfessionals.map((psico)=>(
                <div key={psico.nome}>
                    <Calendar/>
                    <div className={styles.profile}>
                         <h2 className={styles.profileName}>{psico.nome}</h2>
                         {psico.especialidade && psico.especialidade.length > 0 &&(
                                psico.especialidade.map((especialidade)=>(
                                     <p  key={especialidade} className={styles.profileName}>{especialidade}</p>
                                ))   
                         )}
                         
                    </div>
                    <div className={styles.dataHora}>
                        <div className={styles.data}><Dot/>{psico.data}<Dot/></div>
                        <p className={styles.horario}>{psico.horario}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}