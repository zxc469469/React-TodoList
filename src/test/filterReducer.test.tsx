import React from "react";
import reducer from "../store/reducers/filterReducer";
import {
  FILTER_FINISHED_TODO,
  FILTER_UNFINISHED_TODO,
  FILTER_ALL_TODO,
} from "../store/constants/index";

const FilterInitState = {
  filterType: FILTER_UNFINISHED_TODO,
};
test("dispatch FINISHED ", () => {
  expect(
    reducer(FilterInitState, {
      type: FILTER_FINISHED_TODO,
      payload: {
        filterType: FILTER_FINISHED_TODO,
      },
    })
  ).toEqual({
    filterType: FILTER_FINISHED_TODO,
  });
});

test("dispatch FINISHED ", () => {
    expect(
      reducer(FilterInitState, {
        type: FILTER_UNFINISHED_TODO,
        payload: {
          filterType: FILTER_UNFINISHED_TODO,
        },
      })
    ).toEqual({
      filterType: FILTER_UNFINISHED_TODO,
    });
  });
  test("dispatch FINISHED ", () => {
    expect(
      reducer(FilterInitState, {
        type: FILTER_ALL_TODO,
        payload: {
          filterType: FILTER_ALL_TODO,
        },
      })
    ).toEqual({
      filterType: FILTER_ALL_TODO,
    });
  });