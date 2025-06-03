import styles from './Header.module.css';
import rocket from '../assets/rocket.png';
import todo from '../assets/todo.png';


export function Header() {
    return (
        <header className={styles.header}>
            <img src={rocket} alt="rocket" className={styles.rocket}/>
            <img src={todo} alt="logo-todo" className={styles.todo}/>
        </header>
    );
}
