import React from "react";
import styled from '@emotion/styled';
import { useSelector, useDispatch } from "react-redux";
import { initState } from "../store/reducer";
import { DELETE_TODO, FINISHED_TODO } from "../store/constants/index";

const TodoListContainer = styled.div`
display:flex;
width:100vw;
justify-content: center;
flex-wrap:wrap;
min-height:400px;
`

const TodoCard = styled.div`
  display:flex;
  height:200px;
  width:30vw;
  margin:20px 10px;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  background-color: #111;
  border-radius:4px;
  padding-bottom:30px;
`
const TodoText = styled.div`
  display:flex;
  height:175px;
  width:100%;
  padding:20px;
  box-sizing:border-box;
`
const TodoDeleteBtn = styled.button`
  width:50%;
  margin:0 auto;
  border:1px solid #fff;
  border-radius:3px;
  height:40px;
`

export default function TodoList() {
  const TodoList = useSelector((state: initState) => state.TodoList);
  const dispatch = useDispatch();

  const Delete = (toDeleteKey: number) => {
    dispatch({ type: DELETE_TODO, payload: { key: toDeleteKey } });
  };

  const finished = () => {
    console.log("isFinished");
  };
  return (
    <TodoListContainer>
      
      {TodoList.map((ele: { name: string; key: number }, i) => {
        return (
          <TodoCard key={ele.key} data-testid={ele.key}>
           
            <TodoText onClick={finished}>
              第{ele.key}項：{ele.name}
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
