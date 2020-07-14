import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { fetchApi } from "../common/utility";

const store = createStore(
  rootReducer,
  {
    ToDoList: {
      ToDoList: [{ name: "asdqweqw", key: 0, finished: false }],
      count: 0,
    },
    filterReducer: { filterType: "FILTER_UNFINISHED_TODO" },
  },
  composeWithDevTools()
);

export default store;
