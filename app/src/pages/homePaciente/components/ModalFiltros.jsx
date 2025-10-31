import { ChevronRight } from 'lucide-react';
import styles from "./ModalFiltros.module.css"

export default function ModalFitros(){
    return(
        <div className={styles.containerModal}> 
            <div className={styles.linkFiltro}>
                <h2>VALOR DA SESSÃO</h2> 
                <ChevronRight/>
            </div>
            <div className={styles.linkFiltro}>
                <h2>ESPECIALIDADE</h2>
                <ChevronRight/>
            </div>
            <div className={styles.linkFiltro}>
                <h2>ABORDAGEM</h2>
                <ChevronRight/>
            </div>
            <div className={styles.linkFiltro}>
                <h2>GÊNERO</h2>
                <ChevronRight/>
            </div>
        </div>
    )
}