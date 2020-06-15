import React from 'react';
import { render,fireEvent, getByTestId,cleanup } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import reducer from '../store/reducer';

expect.extend({toBeInTheDocument});

const initState ={
    TodoList:[{name:"",key:0}],
    count:0,
}
type action = {
    type:"ADD",
    payload:{
        TodoList:{
            name:string,
            key:number
        },
        count:number
    }
}

test('reducer',()=>{
    reducer(initState,{type:"ADD",payload:{TodoList:{name:"init",key:1},count:1}})
    
    expect(reducer(initState,{type:"ADD",payload:{TodoList:{name:"init",key:1},count:1}})).toBe()
})