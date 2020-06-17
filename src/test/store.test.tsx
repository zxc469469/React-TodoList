import React from 'react';
import { render,fireEvent, getByTestId,cleanup } from '@testing-library/react';
import reducer from '../store/reducer';
import {AddTodoAction}from '../store/actions/index'
import {ADD_TODO}from '../store/constants/index'
import { count } from 'console';


const testState ={
    TodoList: [{ name: "first", key: 0, finished: false }],
    count: 0,
}
const expectState={
    TodoList: [{name: "first", key: 0, finished: false},
        { name: "two", key: 1, finished: false }],
    count: 1,
}

let addAction:AddTodoAction ={
    type:ADD_TODO,
    payload:{
        TodoList:{
            name:"two",
            key:1,
        },
    }
}
test('Dispatch ADD',()=>{
    console.log(reducer(testState,addAction));
    expect(reducer(testState,addAction)).toStrictEqual(expectState)

})

