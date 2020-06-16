import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">
          {"ToDolist"}
          <TodoInput/>
          <TodoList/>
      </header>
    </div>
  );
}

export default App;
