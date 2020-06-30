import React from 'react';
import { render,fireEvent, getByTestId,cleanup } from '@testing-library/react';
import reducer from '../store/reducers/ToDoReducer';
import {AddToDoAction}from '../store/actions/index'
import {ADD_TODO}from '../store/constants/index'
import { count } from 'console';


const testState ={
    ToDoList: [{ name: "first", key: 0, finished: false }],
    count: 0,
}
const expectState={
    ToDoList: [{name: "first", key: 0, finished: false},
        { name: "two", key: 1, finished: false }],
    count: 1,
}

let addAction:AddToDoAction ={
    type:ADD_TODO,
    payload:{
        ToDoList:{
            name:"two",
            key:1,
        },
    }
}
test('Dispatch ADD',()=>{
    console.log(reducer(testState,addAction));
    expect(reducer(testState,addAction)).toStrictEqual(expectState)

})

