import ListaPsicologos from "./components/ListaPsicologos"
import styles from "./HomePaciente.module.css"


export default function HomePaciente() {
    return(
        <div className={styles.container}>
        <div>
        <h4>Seja Bem Vindo!</h4>
        <h2>
          Consultas
        </h2>
      </div>
       <ListaPsicologos/>
        </div>
       
    )
}