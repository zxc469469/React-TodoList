import { FILTER_FINISHED_TODO ,FILTER_UNFINISHED_TODO} from "../constants/index";
import { FilterAction } from "../actions/index";

const FilterInitState = {
  filterType: "UnFinished",
};
interface FilterInitState {
  filterType: string;
}
const FilterReducer = (state = FilterInitState,action: FilterAction): FilterInitState => {
  switch (action.type) {
    case FILTER_FINISHED_TODO: {
      return Object.assign({}, state, {
        filterType: "Finished",
      });
    }
    case FILTER_UNFINISHED_TODO: {
      return Object.assign({}, state, {
        filterType: "UnFinished",
      });
    }
    default:
        return state;
    
  }
};

export default FilterReducer;
