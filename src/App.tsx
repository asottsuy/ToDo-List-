import {Header} from './components/Header';
import {SearchBar} from './components/SearchBar';
import './global.css';
import clipboard from '../src/assets/Clipboard.png'

import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header/>
      <SearchBar/>

      <div className={styles.wrapper}>
        <div className={styles.top}>
          <span className={styles.taskText}>Tarefas criadas</span>
         
          <span className={styles.completedText}>Concluidas</span>
        </div>
        
        <div className={styles.content}>
          <main>
            <img src={clipboard}/>
            <p className={styles.firstText}>Você ainda não tem tarefas cadastradas</p>
            <p className={styles.secondText}>Crie tarefas e organize seus itens a fazer</p>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
