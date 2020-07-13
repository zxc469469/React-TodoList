export const  fetchApi = async (url="http://localhost:9010/ToDoApi/key",data={},method="GET") => {
   return fetch(url,{
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
        },
      method: method, 
      mode: 'cors', 
    }).then(res=>res.text())
}


export const  deleteToDoApi = async (url="http://localhost:9010/ToDoApi/key") => {
    return fetchApi(url,{},"DELETE")
}
export const  addToDoApi = async (url="http://localhost:9010/ToDoApi/key",data:{}) => {
    return fetchApi(url,data,"POST")
}