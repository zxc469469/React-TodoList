import React from "react";
import { render } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import ToDoListInput from "../components/ToDoInput";
import reducer from "../store/reducers/ToDoReducer";
import { Provider } from "react-redux";
import store from "../store/store";
import {
  ADD_TODO,
  DELETE_TODO,
  FINISHED_TODO,
  UPDATE_TODO,
  SORT_TODO,
} from "../store/constants/index";

expect.extend({ toBeInTheDocument });

const testInItTodo = {
  ToDoList: [{ name: "test1", key: 1, finished: false }],
  count: 1,
};

const testSortTodo = {
  ToDoList: [
    { name: "test1", key: 1, finished: false },
    { name: "test2", key: 10, finished: false },
    { name: "test3", key: 11, finished: false },
  ],
  count: 3,
};

test("renders initState", () => {
  const { getByText } = render(
    <Provider store={store}>
      <ToDoListInput />
    </Provider>
  );
  const button = getByText(/新增/i);
  expect(button).toBeInTheDocument();
});

// test("append new ToDo ",()=>{
//     const { getByText,getByTestId } = render(<Provider store={store}><ToDoListInput /></Provider>);
//     const button = getByText(/新增/i);
//     const input = getByTestId("Input");
//     fireEvent.change(input, { target: { value: '測試測試', }, });
//     fireEvent.click(button);
// })

test("dispatch ADD ", () => {
  expect(
    reducer(testInItTodo, {
      type: ADD_TODO,
      payload: {
        ToDoList: { name: "TestNew", key: 2 },
      },
    })
  ).toEqual({
    ToDoList: [
      { name: "test1", key: 1, finished: false },
      { name: "TestNew", key: 2, finished: false },
    ],
    count: 1,
  });
});

test("dispatch DELETE ", () => {
  expect(
    reducer(testInItTodo, {
      type: DELETE_TODO,
      payload: {
        toDeleteKey: 1,
      },
    })
  ).toEqual({
    ToDoList: [],
    count: -1,
  });
});

test("dispatch DELETE ", () => {
  expect(
    reducer(testInItTodo, {
      type: FINISHED_TODO,
      payload: {
        toFinishKey: 1,
      },
    })
  ).toEqual({
    ToDoList: [{ name: "test1", key: 1, finished: true }],
    count: 1,
  });
});

test("dispatch UPDATE_TODO ", () => {
  expect(
    reducer(testInItTodo, {
      type: UPDATE_TODO,
      payload: {
        ToDoList: { name: "TestNew", key: 1, finished: false },
      },
    })
  ).toEqual({
    ToDoList: [{ name: "TestNew", key: 1, finished: false }],
    count: 1,
  });
});

test("dispatch SORT_TODO ", () => {
  expect(
    reducer(testSortTodo, {
      type: SORT_TODO,
    })
  ).toEqual({
    ToDoList: [
      { name: "test1", key: 1, finished: false },
      { name: "test2", key: 2, finished: false },
      { name: "test3", key: 3, finished: false },
    ],
    count: 3,
  });
});
