import React ,{useReducer,useState, useEffect}from 'react';
import reducer from '../store/store';

type state={
    name:string,
    key:number
}
const initState ={
    TodoList:[{name:"",key:0}],
    count:0,
}

export default function TodoInput() {
    const [state,dispatch] = useReducer(reducer,initState);
    
    const [listName, setListName] = useState('')
    
    const addTodo = () => {
        if(listName){
            dispatch({ type: 'ADD', payload: { TodoList: {name:listName,key:state.count}
            ,count:state.count} })
           setListName('')
        }
    }

    useEffect(()=>{
        console.log(state.TodoList)
    },[state])
    
    return (
        <div>
            <input  type="text" value={listName}
            onChange={e => setListName(e.target.value)}
            />
            <button onClick={addTodo}>新增</button>
            {state.TodoList.map((ele:state) => {
                return (
                    <p key={ele.key} >
                       
                第{ele.key}項：{ele.name}
                    </p>
                )
            })}
        </div>
    )
}
