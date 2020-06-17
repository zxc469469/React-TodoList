import React,{useEffect} from "react";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import { initState } from "../store/reducer";
import { DELETE_TODO, FINISHED_TODO } from "../store/constants/index";

const TodoListContainer = styled.div`
  display: grid;
  grid-template: 1fr /1fr 1fr 1fr;
  width: 100vw;
  min-height: 400px;
  padding:50px;
  box-sizing:border-box;
`;

const TodoCard = styled.div`
  display: flex;
  height: 200px;
  margin: 20px 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 4px;
  padding-bottom: 30px;
  color:#2c2c2c;
  box-shadow: 5px 9px 8px rgba(20, 20, 20, 0.7);
`;
type TodoTextProp={
  isfinished:Boolean;
}
const TodoText = styled.div<TodoTextProp>`
  display: flex;
  height: 175px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  text-decoration: ${(props)=>props.isfinished ? 'line-through': 'none'}
  `;


const TodoTextTitle = styled("div")``

const TodoDeleteBtn = styled.button`
  width: 50%;
  margin: 0 auto;
  border: 1px solid #1c1c1c;
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
  


  return (
    <TodoListContainer>
      {TodoList.map((ele: { name: string; key: number; finished:boolean }, i) => {
        if(i>=1)
        return (
          <TodoCard key={ele.key} > 
            <TodoTextTitle>第{ele.key}項：</TodoTextTitle>
            <TodoText  isfinished={ele.finished}
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
