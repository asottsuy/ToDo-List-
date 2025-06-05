import styles from './TaskSummary.module.css';
import {Counter} from './Counter.tsx';

export function TaskSummary(){
    return(
        <div className={styles.top}>
          <p className={styles.taskText}>Tarefas criadas <Counter/></p>
         
          <p className={styles.completedText}>Concluidas <Counter/></p>
        </div>
    )
}