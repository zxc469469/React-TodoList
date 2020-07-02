
import {Todo} from '../type';
import {
    FILTER_FINISHED_TODO,
    FILTER_UNFINISHED_TODO,
    FILTER_ALL_TODO,
  } from "../store/constants/index";
  

const useFilter = (ToDo: Todo,filterType:string): boolean => {
    switch (filterType) {
      case FILTER_FINISHED_TODO: {
        if (ToDo.finished === true) return true;
        else return false;
      }
      case FILTER_UNFINISHED_TODO: {
        if (ToDo.finished === false) return true;
        else return false;
      }
      case FILTER_ALL_TODO: {
        return true;
      }
      default:
        return false;
    }
  };

  export default useFilter