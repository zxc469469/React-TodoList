import { ADD_TODO, DELETE_TODO  } from '../constants/index';


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
      TodoList: {
        name: string;
        key: number;
      };
      toDeleteKey: number;
      count: number;
    };
  }

  export type TodoAction = AddTodoAction |  DeleteTodoAction ;
