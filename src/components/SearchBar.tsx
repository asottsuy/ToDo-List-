import styles from './SearchBar.module.css';
import '../global.css';

import { PlusCircleIcon } from '@phosphor-icons/react';

export function SearchBar(){
    return(
        <div className={styles.container}>
            <input className={styles.searchBar} placeholder='Adicione uma nova tarefa'></input>
            <button className={styles.createTask}>
                Criar 
                <PlusCircleIcon size='1rem'/>
            </button>
        </div>
    )
}