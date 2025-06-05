import {Header} from './components/Header';
import {SearchBar} from './components/SearchBar';
import {TaskSummary} from './components/TaskSummary';
import { NoTaskBoard } from './components/NoTaskBoard';
import { Task } from './components/Task';


import './global.css';

import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header/>
      <SearchBar/>

      <div className={styles.wrapper}>
        <TaskSummary/>
        
        {/* <NoTaskBoard/> */}

        <div className={styles.content}>
          <Task/>
          <Task/>
          <Task/>
          <Task/>
          <Task/>
        </div>
      </div>
    </div>
  )
}

export default App
