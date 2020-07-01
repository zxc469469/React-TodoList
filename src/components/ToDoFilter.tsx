import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import { Select } from "@material-ui/core";
import {
  FILTER_FINISHED_TODO,
  FILTER_UNFINISHED_TODO,
} from "../store/constants/index";


const FilterSelect = styled(Select)`
  width: 30%;
  min-width: 200px;
  height: 40px;
`;

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
      <FilterSelect value={filterType} onChange={handleFilterSelect}>
        <option value={FILTER_UNFINISHED_TODO}>顯示未完成</option>
        <option value={FILTER_FINISHED_TODO}>顯示已完成</option>
      </FilterSelect>
    </>
  );
}
