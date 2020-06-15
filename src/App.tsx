import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Provider store = {store}>
          {"ToDolist"}
          <TodoInput/>
          <TodoList/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
