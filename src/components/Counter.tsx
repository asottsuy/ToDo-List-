import styles from './Counter.module.css';

import { useState } from 'react';

export function Counter(){

    const [counter, setCounter] = useState(0);


    return(
        
        <span className={styles.circle} id='counter'>0</span>
        
    )
}