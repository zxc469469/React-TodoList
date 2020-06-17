import React,{useEffect,useState} from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useSelector } from "react-redux";
import { initState } from "./store/reducer";
import './App.css';

function App() {
  const ToDoListCount= useSelector((state: initState) => state.count);
  const allTodoList= useSelector((state: initState) => state.TodoList);
  const [remainTodo,setRemainTodo] = useState(0)
  let isFinishTodoCount = 0;
  

  useEffect(() => {
    isFinishTodoCount= allTodoList.filter(ele=>{return ele.finished===true}).length
    setRemainTodo(ToDoListCount - isFinishTodoCount)

  }, [allTodoList])
  return (
    <div className="App">
      <header className="App-header">
          {"ToDoList"}
          {
          remainTodo>0 ? `剩餘${remainTodo}項`:"" 
          }
       
          <TodoInput/>
          <TodoList/>
      </header>
    </div>
  );
}

export default App;
