import React from 'react';
import { render,fireEvent, getByTestId } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import TodoListInput from '../components/TodoInput';
import reducer from '../store/reducer';

expect.extend({toBeInTheDocument});

test('renders initState', () => {
    const { getByText } = render(<TodoListInput />);
    const button = getByText(/新增/i);
    expect(button).toBeInTheDocument();
  });


test("dispatch ADD ",()=>{
    const { getByText,getByTestId } = render(<TodoListInput />);
    const button = getByText(/新增/i);
    const input = getByTestId("Input");
    fireEvent.change(input, { target: { value: '測試測試', }, });
    fireEvent.click(button);
    fireEvent.change(input, { target: { value: '測試測試2', }, });
    fireEvent.click(button);
    expect(getByTestId("1").textContent).toBe("第1項：測試測試")
    expect(getByTestId("2").textContent).toBe("第2項：測試測試2")

})