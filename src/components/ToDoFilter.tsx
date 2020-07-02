import React, { useState ,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import styled from "@emotion/styled";
import { Select } from "@material-ui/core";
import { rootState } from "../store/reducers/index";
import {
  FILTER_FINISHED_TODO,
  FILTER_UNFINISHED_TODO,
  FILTER_ALL_TODO,
} from "../store/constants/index";
import {Todo} from '../type';

const FilterSelect = styled(Select)`
  width: 30%;
  min-width: 200px;
  height: 40px;
`;

const optionMap = [
  { value: FILTER_UNFINISHED_TODO, text: "未完成ToDoList" },
  { value: FILTER_FINISHED_TODO, text: "完成ToDoList" },
  { value: FILTER_ALL_TODO, text: "全部ToDoList" },
];


export default function ToDoFilter() {
  const [filterType, setFilterType] = useState(FILTER_UNFINISHED_TODO);
  const dispatch = useDispatch();
  const ToDoList = useSelector((state: rootState) => state.ToDoList.ToDoList);
  const [thisTypeCounts,setThisTypeCounts] = useState(0);

  const filterDispatch = (type: String) => {
    dispatch({ type: type });
  };
  const handleFilterSelect = (e: any) => {
    setFilterType(e.target.value);
    filterDispatch(e.target.value);
  };
  const filter = (ToDo: Todo): boolean => {
    switch (filterType) {
      case FILTER_FINISHED_TODO: {
        if (ToDo.finished === true) return true;
        else return false;
      }
      case FILTER_UNFINISHED_TODO: {
        if (ToDo.finished === false) return true;
        else return false;
      }
      case FILTER_ALL_TODO: {
        return true;
      }
      default:
        return false;
    }
  };
  useEffect(() => {
    console.log(ToDoList.filter(ele=>filter(ele)===true).length);
  setThisTypeCounts(ToDoList.filter(ele=>filter(ele)===true).length)
  }, [filterType])
  return (
    <>
      <FilterSelect value={filterType} onChange={handleFilterSelect}>
        {optionMap.map((ele) => {
          return <option key={ele.text} value={ele.value}>顯示{ele.text}</option>;
        })}
      </FilterSelect>
    </>
  );
}
