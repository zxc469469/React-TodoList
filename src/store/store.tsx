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



interface initState {
    TodoList:{name:string,key:number}[],
    count:number;
}

const reducer = (state:initState,action:action):initState => {
    switch (action.type) {
        case "ADD":{
            
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

export default reducer;