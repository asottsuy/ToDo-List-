import styles from './NoTaskBoard.module.css';
import clipboard from '../assets/Clipboard.png'

export function NoTaskBoard(){
    return(
    <div className={styles.content}>
        <main>
            <img src={clipboard}/>
            <p className={styles.firstText}>Você ainda não tem tarefas cadastradas</p>

            <p className={styles.secondText}>Crie tarefas e organize seus itens a fazer</p>
        </main>
    </div>
    )
}