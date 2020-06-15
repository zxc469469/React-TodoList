
type action = {
    type:"ADD",
    payload:{
        TodoList:{
            name:string,
            key:number
        },
        count:number
    }
}|
{type:"DELETE",payload:{
    TodoList:{
        name:string,
        key:number
    },
    key:number,
    count:number
}}

export interface initState {
    TodoList:{name:string,key:number}[],
    count:number;
}

const initState = {
    TodoList:[{name:"first",key:0}]
    ,count:0
}

const rootReducer = (state = initState,action:action):initState => {
    switch (action.type) {
        case "ADD":{
            return Object.assign({}, state, {
                TodoList: state.TodoList.concat({
                    name:action.payload.TodoList.name,
                    key:action.payload.TodoList.key
                }),
                count:state.TodoList.length
            })
        }
        case "DELETE":{
            const cloneTodo = state.TodoList.slice()
            console.log("delete:",state.TodoList,action.payload.key);
            console.log("after",cloneTodo.splice(action.payload.key,1));
            return {
                ...state,
                TodoList:cloneTodo,
                count:state.TodoList.length
            }
        }
        default:
            return state;
        }
}

    
export default rootReducer;