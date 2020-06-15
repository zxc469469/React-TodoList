
type action = {
    type:"ADD",
    payload:{
        TodoList:{
            name:string,
            key:number
        },
        count:number
    }
}

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
            console.log("ADD!")
            if(state.TodoList[0].name===""){
                state.TodoList[0].name=action.payload.TodoList.name;
               state.TodoList[0].key=action.payload.TodoList.key;
            }
            return Object.assign({}, state, {
                TodoList: state.TodoList.concat({
                    name:action.payload.TodoList.name,
                    key:state.count+1
                }),
                count:state.count+1
            })
        }
        
        default:
            return state;
        }
}

    
export default rootReducer;