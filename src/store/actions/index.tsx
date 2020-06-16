import { ADD_TODO, DELETE_TODO ,FINISHED_TODO } from '../constants/index';


export interface AddTodoAction {
        type: ADD_TODO;
        payload: {
          TodoList: {
            name: string;
            key: number;
            finished: boolean;
          };
          count: number;
        };
}
    

export interface  DeleteTodoAction{
    type: DELETE_TODO;
    payload: {
      toDeleteKey: number;
    };
  }

export interface FinishTodoAction{
  type: FINISHED_TODO;
    payload: {
      toDeleteKey: number;
      count: number;
    };
}

  export type TodoAction = AddTodoAction |  DeleteTodoAction|FinishTodoAction ;
