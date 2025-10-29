import { useEffect, useState } from "react";
import { Calendar,Dot } from "lucide-react";
import SearchBar from "../homePsicologo/componentes/SearchBar";
import styles from "./listaPsicologos.module.css"

export default function ListaPsicologos(){
    const [profissionais, setProfissionais] = useState([])
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        async function fetchPsicologos(){
        try{
            const response = await fetch ("/psicologos.json")
            if (!response.ok) {
          throw new Error(`Erro ao buscar dados: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        setProfissionais(data)
        
        }catch(erro){
            setError(erro.message)
        }finally{
            setLoading(false)
        }
        }
      
        fetchPsicologos();
    },[])

    if(error){
        return(
            <p>Erro ao buscar os Psicologos(as)</p>
        )
    }

     if(isLoading){
        return(
            <p>Carregando a lista de psicologos(as)...</p>
        )
    }

    return(
        <div>
            <SearchBar/>
            {profissionais.map((psico)=>(
                <div key={psico.nome}>
                    <Calendar/>
                    <div className={styles.profile}>
                         <p className={styles.profileName}>{psico.nome}</p>
                        <p className={styles.profileEspecialidade}>{psico.especialidade}</p>
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