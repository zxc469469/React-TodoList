import { ADD_TODO, DELETE_TODO, FINISHED_TODO,UPDATE_TODO ,SORT_TODO} from "../constants/index";
import { ToDoAction } from "../actions/index";

export interface initState {
  ToDoList: { name: string; key: number; finished: boolean ,isInit?: boolean }[];
  count: number;
}

const initState = {
  ToDoList: [{ name: "first", key: 0, finished: false }],
  count: 0,
};

const ToDoReducer = (state:initState|undefined = initState, action: ToDoAction): initState => {
  switch (action.type) {
    case ADD_TODO: {
      return Object.assign({}, state, {
        ToDoList: state.ToDoList.concat({
          name: action.payload.ToDoList.name,
          key: action.payload.ToDoList.key,
          finished: action.payload.ToDoList.finished||false,
        }),
        count: state.ToDoList.length,
      });
    }
    case DELETE_TODO: {
      const cloneToDo = state.ToDoList.slice().filter(
        (ele) => ele.key !== action.payload.toDeleteKey
      );

      return {
        ...state,
        ToDoList: cloneToDo,
        count: cloneToDo.length - 1,
      };
    }
    case FINISHED_TODO: {
      const cloneToDo = state.ToDoList.slice().map((ele)=>{
        if(ele.key===action.payload.toFinishKey){
          ele.finished = !ele.finished
        }
        return ele
      });
      
      return {
        ...state,
        ToDoList: cloneToDo,
      };
    }
    case UPDATE_TODO: {
      state.ToDoList.map(ele=>{
        if(ele.key===action.payload.ToDoList.key)
        ele.name=action.payload.ToDoList.name;
        ele.finished=action.payload.ToDoList.finished||false;
      })
      const cloneToDo = state.ToDoList.slice()
      
      return {
        ...state,
        ToDoList: cloneToDo,
      };
    }

    case SORT_TODO: {
      const cloneToDo = state.ToDoList.slice()
      cloneToDo.forEach((ele,i)=>ele.key=i+1)
      return {
        ...state,
        ToDoList: cloneToDo,
      };
    }

    default:
      return state;
  }
};

export default ToDoReducer;
