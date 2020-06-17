import React,{useEffect} from "react";
import { css, jsx } from '@emotion/core'
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import { initState } from "../store/reducer";
import { DELETE_TODO, FINISHED_TODO } from "../store/constants/index";

const TodoListContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 400px;
`;

const TodoCard = styled.div`
  display: flex;
  height: 200px;
  width: 30vw;
  margin: 20px 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #111;
  border-radius: 4px;
  padding-bottom: 30px;
`;
const TodoText = styled.div`
  display: flex;
  height: 175px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  text-decoration: ${(props :any)=>props.isfinished ? 'line-through': 'none'}
  `;


const TodoTextTitle = styled("div")``

const TodoDeleteBtn = styled.button`
  width: 50%;
  margin: 0 auto;
  border: 1px solid #fff;
  border-radius: 3px;
  height: 40px;
  background:#fff;
`;

export default function TodoList() {
  const TodoList = useSelector((state: initState) => state.TodoList);
  const dispatch = useDispatch();

  const Delete = (toDeleteKey: number) => {
    dispatch({ type: DELETE_TODO, payload: { toDeleteKey: toDeleteKey } });
  };

  const finished = (toFinishKey: Number) => {
    dispatch({ type: FINISHED_TODO, payload: { toFinishKey: toFinishKey } });
  };
  
  useEffect(() => {
    console.log(TodoList);
   
  })

  return (
    <TodoListContainer>
      {TodoList.map((ele: { name: string; key: number; finished:boolean }, i) => {
        return (
          <TodoCard key={ele.key} > 
            <TodoTextTitle>第{ele.key}項：</TodoTextTitle>
            <TodoText  
              onClick={() => {
                finished(ele.key);
              }}
              data-testid={ele.key}
              
            >
              {ele.name}
            </TodoText>
            <TodoDeleteBtn
              onClick={() => {
                Delete(i);
              }}
            >
              刪除
            </TodoDeleteBtn>
          </TodoCard>
        );
      })}
    </TodoListContainer>
  );
}
