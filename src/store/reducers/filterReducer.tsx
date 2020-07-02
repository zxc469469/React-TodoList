import { FILTER_FINISHED_TODO ,FILTER_UNFINISHED_TODO,FILTER_ALL_TODO} from "../constants/index";
import { FilterAction } from "../actions/index";

const FilterInitState = {
  filterType:FILTER_UNFINISHED_TODO ,
};
interface FilterInitState {
  filterType: string;
}
const FilterReducer = (state = FilterInitState,action: FilterAction): FilterInitState => {
  switch (action.type) {
    case FILTER_FINISHED_TODO: {
      return Object.assign({}, state, {
        filterType: FILTER_FINISHED_TODO,
      });
    }
    case FILTER_UNFINISHED_TODO: {
      return Object.assign({}, state, {
        filterType: FILTER_UNFINISHED_TODO,
      });
    }
    case FILTER_ALL_TODO: {
      return Object.assign({}, state, {
        filterType: FILTER_ALL_TODO,
      });
    }
    default:
        return state;
    
  }
};

export default FilterReducer;
