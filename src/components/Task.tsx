import styles from './Task.module.css';

import { TrashIcon } from '@phosphor-icons/react';


export function Task(){
    return(
        <div className={styles.taskContent}>
            <div className={styles.imgContent}>
                <input className={styles.taskCheckbox}></input>
            </div>

            <p className={styles.taskText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorum quidem dolores obcaecati laudantium ratione, nulla aliquid, optio, suscipit </p>

            <button>
                <TrashIcon/>
            </button>
        </div>
    )
}