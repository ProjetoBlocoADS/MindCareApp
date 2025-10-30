import {useEffect, useState } from "react";
import PsicoContext from "../context/PsicoContext";

export default function PsicoProvider({children}){
    const [profissionais, setProfissionais] = useState([])
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    // const [inputValue, setInputValue] = useState("");

// const handleInputChange = (value) => {
//   setInputValue(value);
// };

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

    const values = {profissionais, error, isLoading}

    return(
        <PsicoContext.Provider value={values}>{children}</PsicoContext.Provider>
    )
}