import styles from './SearchBar.module.css';
import '../global.css';
import plus from '../assets/plus.png';

export function SearchBar(){
    return(
        <div className={styles.container}>
            <input className={styles.searchBar} placeholder='Adicione uma nova tarefa'></input>
            <button className={styles.createTask}>
                Criar 
                <img src={plus} className={styles.plus}/>
            </button>
        </div>
    )
}