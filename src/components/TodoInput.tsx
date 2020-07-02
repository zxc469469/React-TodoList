import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../store/constants/index";
import styled from "@emotion/styled";
import {OutlinedInput , Button} from '@material-ui/core';


const ToDoInputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100px;
  margin-bottom: 10px;
`;
const ToDoListInput = styled(OutlinedInput)`
  width: 30%;
  min-width: 200px;
  height: 40px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const NewToDoBtn = styled(Button)`
  width: 30%;
  min-width: 200px;
  height: 40px;
`;

export default function ToDoInput() {
  const dispatch = useDispatch();
  const [state, setState] = useState({ name: "", key: 1 });
  const addToDo = () => {
    if (state.name) {
      dispatch({
        type: ADD_TODO,
        payload: {
          ToDoList: { name: state.name, key: state.key },
        },
      });
      setState({ key: state.key + 1, name: "" });
    }
  };

  return (
    <ToDoInputContainer>
      <ToDoListInput
      
        data-testid="Input"
        type="text"
        value={state.name}
        onChange={(e) => setState({ key: state.key, name: e.target.value })}
        onKeyDown={(e)=>e.key==='Enter' ? addToDo() :""}
      />
      <NewToDoBtn variant="contained" color="primary"
       onClick={addToDo}>新增ToDo</NewToDoBtn>
    </ToDoInputContainer>
  );
}
