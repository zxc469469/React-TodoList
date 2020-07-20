import { createStore ,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { fetchApi } from "../common/utility";
const middlewares = [thunk]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)


const store = createStore(
  rootReducer,
  {
    ToDoList: {
      ToDoList: [{ name: "asdqweqw", key: 0, finished: false }],
      count: 0,
    },
    filterReducer: { filterType: "FILTER_UNFINISHED_TODO" },
  },
  composedEnhancers,
);

export default store;
