import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { Select } from "@material-ui/core";
import {
  FILTER_FINISHED_TODO,
  FILTER_UNFINISHED_TODO,
  FILTER_ALL_TODO,
} from "../store/constants/index";

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

  const filterDispatch = (type: String) => {
    dispatch({ type: type });
  };
  const handleFilterSelect = (e: any) => {
    setFilterType(e.target.value);
    filterDispatch(e.target.value);
  };
  
  return (
    <>
      <FilterSelect value={filterType} onChange={(e)=>{handleFilterSelect(e)}}>
        {optionMap.map((ele) => {
          return <option key={ele.text} value={ele.value}>顯示{ele.text}</option>;
        })}
      </FilterSelect>
    </>
  );
}
