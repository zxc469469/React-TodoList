import { ADD_TODO, DELETE_TODO, FINISHED_TODO } from "../store/constants/index";
import { ToDoAction } from "../store/actions/index";

export interface initState {
  ToDoList: { name: string; key: number; finished: boolean }[];
  count: number;
}

const initState = {
  ToDoList: [{ name: "first", key: 0, finished: false }],
  count: 0,
};

const rootReducer = (state = initState, action: ToDoAction): initState => {
  switch (action.type) {
    case ADD_TODO: {
      return Object.assign({}, state, {
        ToDoList: state.ToDoList.concat({
          name: action.payload.ToDoList.name,
          key: action.payload.ToDoList.key,
          finished: false,
        }),
        count: state.ToDoList.length,
      });
    }
    case DELETE_TODO: {
      const cloneToDo = state.ToDoList.slice();
      cloneToDo.splice(action.payload.toDeleteKey, 1);
      return {
        ...state,
        ToDoList: cloneToDo,
        count: cloneToDo.length - 1,
      };
    }
    case FINISHED_TODO: {
      const cloneToDo = state.ToDoList.slice();
      cloneToDo[action.payload.toFinishKey].finished =
      ! cloneToDo[action.payload.toFinishKey].finished;
      return {
        ...state,
        ToDoList:cloneToDo,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
