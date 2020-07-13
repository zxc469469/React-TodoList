import { ADD_TODO, DELETE_TODO ,FINISHED_TODO ,FILTER_FINISHED_TODO,FILTER_UNFINISHED_TODO,FILTER_ALL_TODO} from '../constants/index';


export interface AddToDoAction {
        type: ADD_TODO;
        payload: {
          ToDoList: {
            name: string;
            key: number;
            finished?:boolean
          };
        };
}
    
export interface  DeleteToDoAction{
    type: DELETE_TODO;
    payload: {
      toDeleteKey: number;
    };
  }

export interface FinishToDoAction{
  type: FINISHED_TODO;
    payload: {
      toFinishKey: number;
    };
}
export interface FilterFinishAction{
  type: FILTER_FINISHED_TODO;
    payload: {
      filterType: string;
    };
}

export interface FilterUnfinishedAction{
  type: FILTER_UNFINISHED_TODO;
    payload: {
      filterType: string;
    };
}
export interface FilterAllAction{
  type: FILTER_ALL_TODO;
    payload: {
      filterType: string;
    };
}


  export type ToDoAction = AddToDoAction |  DeleteToDoAction | FinishToDoAction ;
  export type FilterAction = FilterFinishAction | FilterUnfinishedAction|FilterAllAction;
