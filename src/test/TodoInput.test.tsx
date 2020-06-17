import React from 'react';
import { render,fireEvent, getByTestId } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import TodoListInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import reducer from '../store/reducer';
import { Provider } from 'react-redux';
import store from '../store/store';

expect.extend({toBeInTheDocument});

test('renders initState', () => {
    const { getByText } = render(<Provider store={store}><TodoListInput /></Provider>);
    const button = getByText(/新增/i);
    expect(button).toBeInTheDocument();
  });


test("append new Todo ",()=>{
    const { getByText,getByTestId } = render(<Provider store={store}><TodoListInput /></Provider>);
    const button = getByText(/新增/i);
    const input = getByTestId("Input");
    fireEvent.change(input, { target: { value: '測試測試', }, });
    fireEvent.click(button);
})

test("dispatch ADD ",()=>{
  const {getByTestId } = render(<Provider store={store}><TodoList /></Provider>); 
  const todo = getByTestId('1')
  expect(todo.textContent).toBe("第1項：測試測試");

})


