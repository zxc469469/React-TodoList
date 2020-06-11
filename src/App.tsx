import React from 'react';
import TodoInput from './components/TodoInput';
import Todolist from './components/TodoList';
import './App.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <TodoInput/>
        <Todolist/>
      </header>
    </div>
  );
}

export default App;
