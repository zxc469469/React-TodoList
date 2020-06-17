import { ADD_TODO, DELETE_TODO, FINISHED_TODO } from "../store/constants/index";
import { TodoAction } from "../store/actions/index";

export interface initState {
  TodoList: { name: string; key: number; finished: boolean }[];
  count: number;
}

const initState = {
  TodoList: [{ name: "first", key: 0, finished: false }],
  count: 0,
};

const rootReducer = (state = initState, action: TodoAction): initState => {
  switch (action.type) {
    case ADD_TODO: {
      return Object.assign({}, state, {
        TodoList: state.TodoList.concat({
          name: action.payload.TodoList.name,
          key: action.payload.TodoList.key,
          finished: false,
        }),
        count: state.TodoList.length,
      });
    }
    case DELETE_TODO: {
      const cloneTodo = state.TodoList.slice();
      cloneTodo.splice(action.payload.toDeleteKey, 1);
      return {
        ...state,
        TodoList: cloneTodo,
        count: cloneTodo.length - 1,
      };
    }
    case FINISHED_TODO: {
      const cloneTodo = state.TodoList.slice();
      cloneTodo[action.payload.toFinishKey].finished =
      ! cloneTodo[action.payload.toFinishKey].finished;
      return {
        ...state,
        TodoList:cloneTodo,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
