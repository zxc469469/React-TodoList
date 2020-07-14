import React, { useEffect, useState,useRef } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import ToDoFilter from "./components/ToDoFilter";
import { ThemeProvider } from 'emotion-theming';
import { useSelector,useDispatch } from "react-redux";
import { rootState } from "./store/reducers/index";
import {ADD_TODO,UPDATE_TODO} from './store/constants'
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

const theme: { [key: string]: {} } = {
  light: {
    backgroundColor: '#ededed',
    foregroundColor: '#f9f9f9',
    boxShadow: '0 1px 3px 0 #999999',
    titleColor: '#212121',
    temperatureColor: '#757575',
    textColor: '#828282',
  },
  dark: {
    backgroundColor: '#1F2022',
    foregroundColor: '#121416',
    boxShadow:
      '0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15)',
    titleColor: '#f9f9fa',
    temperatureColor: '#dddddd',
    textColor: '#cccccc',
  },
};
interface theme {
  [key: string]: any;
  [index: number]: any;
}
function App() {
  const ToDoListCount = useSelector((state: rootState) => state.ToDoList).count;
  const allToDoList = useSelector((state: rootState) => state.ToDoList).ToDoList;
  const [remainToDo, setRemainToDo] = useState(0);
  const [finishedCount, setFinishedCount] = useState(0);
  const [currentTheme, setCurrentTheme] = useState('light');
  const isFinishToDoCount = useRef(0);
  const dispatch = useDispatch()

  useEffect(() => {
    isFinishToDoCount.current = allToDoList.filter((ele) => {
      return ele.finished === true;
    }).length;
    setFinishedCount(isFinishToDoCount.current);
    setRemainToDo(ToDoListCount - isFinishToDoCount.current);
  },[ToDoListCount,allToDoList]);

  useEffect(()=>{
    let apiData: { name: any,key:number,finished:boolean }[] = [];
   fetch("http://localhost:9010/ToDoApi/key")
    .then((value) => value.json())
    .then((value) => {
      value.data.forEach((ele: any,i:number) => {
        const { __v, _id, create_date, ...data } = ele;
        // if(i===0)        
        // dispatch({type:UPDATE_TODO,payload: {ToDoList: data}})
        // else
        dispatch({type:ADD_TODO,payload: {ToDoList: data}})
      });
    })

  },[])
  
  return (
    <div className="App" data-testid={"App"}>
      <ThemeProvider theme={theme[currentTheme]}>
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
      </ThemeProvider>
    </div>
  );
}

export default App;
