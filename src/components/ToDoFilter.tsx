import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../store/constants/index";
import styled from "@emotion/styled";
import { Button} from '@material-ui/core';

const FilterBtn = styled(Button)`
  width: 30%;
  min-width: 200px;
  height: 40px;
`;


export default function ToDoFilter() {
    return(
       <>
       <FilterBtn>
           filter
       </FilterBtn>
       </>
    )
}