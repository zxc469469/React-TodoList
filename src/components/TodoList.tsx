import React from 'react'
import { useSelector } from 'react-redux';
import {initState} from '../store/reducer'


type state={
    name:string,
    key:number
}

export default function TodoList() {
    const TodoList = useSelector((state:initState) => state.TodoList)
    console.log("store:",TodoList);
    return (
        <div>
            {TodoList.map((ele:state):any => {
                if(ele.key>0)
                return (
                    <p key={ele.key} data-testid={ele.key}>
                       
                第{ele.key}項：{ele.name}
                    </p>
                )
            })}
        </div>
    )
}
