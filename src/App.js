import React from 'react';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';
import { CompleteList } from './components/CompleteList';
import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <AddTask/>
      <div className = 'parent-container'>
        <div className = 'container1'>
          <TaskList/>
        </div>
        <div className = 'container2'>
          <CompleteList/>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
