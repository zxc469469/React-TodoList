import { ADD_TODO, DELETE_TODO ,FINISHED_TODO } from '../constants/index';


export interface AddToDoAction {
        type: ADD_TODO;
        payload: {
          ToDoList: {
            name: string;
            key: number;
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

  export type ToDoAction = AddToDoAction |  DeleteToDoAction|FinishToDoAction ;
