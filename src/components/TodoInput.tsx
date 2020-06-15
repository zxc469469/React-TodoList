import React ,{useState}from 'react';
import {initState} from '../store/reducer'
import { useSelector, useDispatch } from 'react-redux';


type state={
    name:string,
    key:number
}

export default function TodoInput() {

    const todoList = useSelector((state:initState )=> state.TodoList);
    const dispatch = useDispatch();
    const [state, setState] = useState({name:"",key:0})
    console.log(todoList);
    const addTodo = () => {
        if(state.name){
            dispatch({ type: 'ADD', payload: { TodoList: {name:state.name,key:state.key}
            ,count:state.key} })
            setState({key:state.key,name:""})
        }
    }

   
    return (
        <div>
            <input data-testid="Input" type="text" value={state.name}
            onChange={e => setState({key:state.key,name:e.target.value})}
            />
            <button onClick={addTodo}>新增</button>
            
        </div>
    )
}
