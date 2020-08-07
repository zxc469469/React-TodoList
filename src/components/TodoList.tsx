import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../store/reducers/index";
import {
  DELETE_TODO,
  FINISHED_TODO,
  SORT_TODO,
} from "../store/constants/index";
import { Card, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import useFilter from "../hooks/useFilter";
import { deleteToDoApi } from "../common/utility";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

type ToDoTextProp = {
  isfinished: Boolean;
};
type ToDoListContainerProp = {
  length: Number;
};
const ToDoListContainer = styled.div<ToDoListContainerProp>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(50px, auto);

  @media ${device.tablet} {
    grid-template: 1fr /1fr 1fr;
  }
  width: calc(100% - 100px);
  min-height: 200px;
  padding: 50px;
  box-sizing: border-box;
  margin: 0 50px;
  max-height: calc(100vh - 300px);
  overflow: auto;

  ${(props) =>
    props.length >= 1 &&
    css`
      background-color: #f1f1f1;
      border-radius: 5px;
    `}
`;

const ToDoCard = styled(Card)`
  display: flex;
  min-height: 200px;
  margin: 20px 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  padding-bottom: 30px;
  color: #2c2c2c;
`;

const ToDoText = styled.div<ToDoTextProp>`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  text-decoration: ${(props) => (props.isfinished ? "line-through" : "none")};
  word-break: break-all;
`;

const ToDoTextTitle = styled("div")``;

const ToDoDeleteBtn = styled(Button)`
  width: 50%;
  margin: 0 auto;
  border: 1px solid #1c1c1c;
  border-radius: 3px;
  height: 40px;
  background: #fff;
`;

interface Todo {
  name: string;
  key: number;
  finished: boolean;
}

export default function DisplayToDoList() {
  const ToDoList = useSelector((state: rootState) => state.ToDoList.ToDoList);
  const lastKey = ToDoList.slice(-1)[0].key;

  const filterType = useSelector(
    (state: rootState) => state.filterReducer.filterType
  );
  const dispatch = useDispatch();
  const filteredToDoList = useFilter(ToDoList, filterType);
  console.log(filteredToDoList)
  const handleToDoDelete = (toDeleteKey: number) => {
    dispatch({ type: DELETE_TODO, payload: { toDeleteKey: toDeleteKey } });
  };

  const handleToDoFinished = (toFinishKey: Number) => {
    dispatch({ type: FINISHED_TODO, payload: { toFinishKey: toFinishKey } });
  };

  return (
    <ToDoListContainer length={filteredToDoList.length}>
      {filteredToDoList.map((ele: Todo, index) => {
        
          return (
            <ToDoCard
              key={ele.key}
              onClick={() => {
                handleToDoFinished(ele.key);
              }}
            >
              <ToDoTextTitle>
                第{index + 1}項：
              </ToDoTextTitle>
              <ToDoText isfinished={ele.finished} data-testid={ele.key}>
                {ele.name}
              </ToDoText>
              <ToDoDeleteBtn
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                onClick={() => {
                  handleToDoDelete(ele.key);
                  deleteToDoApi(`http://localhost:9010/ToDoApi/key/${ele.key}`);
                }}
              >
                刪除
              </ToDoDeleteBtn>
            </ToDoCard>
          );
      })}
    </ToDoListContainer>
  );
}
