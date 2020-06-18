import React from 'react';
import { render,fireEvent, getByTestId } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import ToDoListInput from '../components/ToDoInput';
import ToDoList from '../components/ToDoList';
import reducer from '../store/reducer';
import { Provider } from 'react-redux';
import store from '../store/store';

expect.extend({toBeInTheDocument});

test('renders initState', () => {
    const { getByText } = render(<Provider store={store}><ToDoListInput /></Provider>);
    const button = getByText(/新增/i);
    expect(button).toBeInTheDocument();
  });


test("append new ToDo ",()=>{
    const { getByText,getByTestId } = render(<Provider store={store}><ToDoListInput /></Provider>);
    const button = getByText(/新增/i);
    const input = getByTestId("Input");
    fireEvent.change(input, { target: { value: '測試測試', }, });
    fireEvent.click(button);
})

test("dispatch ADD ",()=>{
  const {getByTestId } = render(<Provider store={store}><ToDoList /></Provider>); 
  const todo = getByTestId('1')
  expect(todo.textContent).toBe("第1項：測試測試");

})


