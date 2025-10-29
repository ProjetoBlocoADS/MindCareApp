import { useEffect, useState } from "react";

export default function ListaPsicologos(){
    const [profissionais, setProfissionais] = useState([])
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        async function fetchPsicologos(){
        try{
            const response = await fetch ("../public/psicologos.json")
            if (!response.ok) {
          throw new Error(`Erro ao buscar dados: ${response.status}`);
        }
        const data = response.json();
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
        
    )
}