import {Todo,ToDoLists} from '../type';
import {
    FILTER_FINISHED_TODO,
    FILTER_UNFINISHED_TODO,
    FILTER_ALL_TODO,
  } from "../store/constants/index";
  

const useFilterCounter = (allToDoLists: ToDoLists,filterType:string): ToDoLists => {
  
  const filterTodo =  allToDoLists.filter((ele:Todo) => {
    if(filterType===FILTER_FINISHED_TODO  ){
      return ele.finished === true
    } else if (filterType===FILTER_UNFINISHED_TODO ){
      return ele.finished===false && ele.key>=1
    }else if(filterType===FILTER_ALL_TODO ){
      return ele && ele.key>=1
    }
  })
  return filterTodo
  };

  export default useFilterCounter