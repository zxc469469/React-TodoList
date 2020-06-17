import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../store/constants/index";
import styled from "@emotion/styled";

const TodoInputContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100px;
  margin-bottom: 50px;
`;
const TodoListInput = styled.input`
  width: 30%;
  min-width: 200px;
  height: 40px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;
const NewTodoBtn = styled.button`
  width: 30%;
  min-width: 200px;
  height: 40px;
`;

export default function TodoInput() {
  const dispatch = useDispatch();
  const [state, setState] = useState({ name: "", key: 1 });
  const addTodo = () => {
    if (state.name) {
      dispatch({
        type: ADD_TODO,
        payload: {
          TodoList: { name: state.name, key: state.key },
        },
      });
      setState({ key: state.key + 1, name: "" });
    }
  };

  return (
    <TodoInputContainer>
      <TodoListInput
        data-testid="Input"
        type="text"
        value={state.name}
        onChange={(e) => setState({ key: state.key, name: e.target.value })}
      />
      <NewTodoBtn onClick={addTodo}>新增</NewTodoBtn>
    </TodoInputContainer>
  );
}
