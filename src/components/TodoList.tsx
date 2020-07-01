import React from "react";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../store/reducers/index";
import { DELETE_TODO, FINISHED_TODO } from "../store/constants/index";
import { Card, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

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

const ToDoListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(50px, auto);

  @media ${device.tablet} {
    grid-template: 1fr /1fr 1fr;
  }
  width: 100%;
  min-height: 200px;
  padding: 50px;
  box-sizing: border-box;
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
type ToDoTextProp = {
  isfinished: Boolean;
};
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
  const filterType = useSelector(
    (state: rootState) => state.filterReducer.filterType
  );
  const dispatch = useDispatch();
  const handleToDoDelete = (toDeleteKey: number) => {
    dispatch({ type: DELETE_TODO, payload: { toDeleteKey: toDeleteKey } });
  };

  const handleToDoFinished = (toFinishKey: Number) => {
    dispatch({ type: FINISHED_TODO, payload: { toFinishKey: toFinishKey } });
  };

  const filter = (ToDo: Todo): boolean => {
    console.log(filterType);
    switch (filterType) {
      case "Finished": {
        if (ToDo.finished === true) return true;
        else return false;
      }
      case "UnFinished": {
        if (ToDo.finished === false) return true;
        else return false;
      }
      default:
        return false;
    }
  };

  return (
    <ToDoListContainer>
      {console.log(ToDoList)}
      {ToDoList.map((ele: Todo, i) => {
        if (filter(ele) && i >= 1)
          return (
            <ToDoCard key={ele.key}>
              <ToDoTextTitle>第{i}項：</ToDoTextTitle>
              <ToDoText
                isfinished={ele.finished}
                onClick={() => {
                  handleToDoFinished(i);
                }}
                data-testid={ele.key}
              >
                {ele.name}
              </ToDoText>
              <ToDoDeleteBtn
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                onClick={() => {
                  handleToDoDelete(i);
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
