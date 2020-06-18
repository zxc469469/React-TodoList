import React from "react";
import styled from "@emotion/styled";
import {css} from "@emotion/core";
import { useSelector, useDispatch } from "react-redux";
import { initState } from "../store/reducer";
import { DELETE_TODO, FINISHED_TODO } from "../store/constants/index";
import {Card ,Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};

const TodoListContainer = styled.div`
  display: grid;
  grid-template: 1fr /1fr 1fr 1fr;

  @media ${device.tablet}{
    grid-template: 1fr /1fr 1fr ;
  }
  width: 100%;
  min-height: 400px;
  padding:50px;
  box-sizing:border-box;
`;

const TodoCard = styled(Card)`
  display: flex;
  min-height: 200px;
  margin: 20px 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  padding-bottom: 30px;
  color:#2c2c2c;
`;
type TodoTextProp={
  isfinished:Boolean;
}
const TodoText = styled.div<TodoTextProp>`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  text-decoration: ${(props)=>props.isfinished ? 'line-through': 'none'};
  word-break: break-all;
  `;


const TodoTextTitle = styled("div")``

const TodoDeleteBtn = styled(Button)`
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
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
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
