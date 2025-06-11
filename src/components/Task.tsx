import styles from './Task.module.css';

import { TrashIcon } from '@phosphor-icons/react';


export function Task(){
    return(
        <div className={styles.taskContent}>

            <label className={styles.imgContent}>
                <input 
                    className={styles.taskCheckbox} 
                    type='checkbox'>
                </input>

                <p className={styles.taskText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorum quidem dolores obcaecati laudantium ratione, nulla aliquid, optio, suscipit </p>
            </label>


            <button>
                <TrashIcon/>
            </button>
        </div>
    )
}