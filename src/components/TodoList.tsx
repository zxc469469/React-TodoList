import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {initState} from '../store/reducer'


type state={
    name:string,
    key:number
}

export default function TodoList() {
    const TodoList = useSelector((state:initState) => state.TodoList);
    const dispatch = useDispatch();

    const Delete = (key:number) => {
            dispatch({ type: 'DELETE', payload: {TodoList: TodoList,key:key}})
    }
    return (
        <div>
            {TodoList.map((ele:state,i) => {
                
                return (
                    <p key={ele.key} data-testid={ele.key}>
                       
                第{ele.key}項：{ele.name}
                <button onClick={()=>{Delete(i)}}>刪除</button>
                    </p>
                )
            })}
        </div>
    )
}
