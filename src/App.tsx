import React, { useEffect, useState,useRef } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import ToDoFilter from "./components/ToDoFilter";
import { useSelector } from "react-redux";
import { rootState } from "./store/reducers/index";
import styled from "@emotion/styled";
import "./App.css";

const ToDoTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 300px;
`;


function App() {
  const ToDoListCount = useSelector((state: rootState) => state.ToDoList).count;
  const allToDoList = useSelector((state: rootState) => state.ToDoList).ToDoList;
  const [remainToDo, setRemainToDo] = useState(0);
  const [finishedCount, setFinishedCount] = useState(0);
  const isFinishToDoCount = useRef(0);

  useEffect(() => {
    isFinishToDoCount.current = allToDoList.filter((ele) => {
      return ele.finished === true;
    }).length;
    setFinishedCount(isFinishToDoCount.current);
    setRemainToDo(ToDoListCount - isFinishToDoCount.current);
  },[ToDoListCount,allToDoList]);
  return (
    <div className="App">
      <InputContainer>
        <ToDoTitle>
          {"ToDoList"}
          {remainToDo > 0 ? `剩餘${remainToDo}項` : ""}
          {`已完成${finishedCount}`}
        </ToDoTitle>
        <ToDoInput />
        <ToDoFilter />
      </InputContainer>

      <ToDoList />
    </div>
  );
}

export default App;
