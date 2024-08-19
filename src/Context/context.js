import { createContext, useEffect, useState } from 'react';

const DataContext = createContext();
export const DataProvider= ({ children }) => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('Todos')) || [])
  const [completed, setCompleted] = useState([])
  const [totalTodos, setTotalTodos] = useState(todos.length)
  const [activeTodos, setactiveTodos] = useState(0)
  const [completedTodos, setcompletedTodos] = useState(0)
  const [mode, setMode] = useState(localStorage.getItem('Mode')||'light')

  useEffect(()=>{
    const all = todos.length
    const active = todos.filter(todo=>todo.status==="NC")
    const completed = todos.filter(todo=>todo.status==="C")
    setTotalTodos(all)
    setactiveTodos(active.length)
    setcompletedTodos(completed.length)
  },[todos])

   function handelCompleted(id){
    const updatedTodo = todos.map((todo)=>{
      if(todo.id===id){
        return todo.status==='NC'? {...todo, status: "C"}: {...todo, status: "NC"}
        
      }
      else{
        return todo
      }
    })
    setTodos(updatedTodo)
    localStorage.setItem('Todos', JSON.stringify(updatedTodo));
} 
   function handelDelete(id){
  const newTodos = todos.filter(todo=>todo.id!==id);
  setTodos(newTodos)
  localStorage.setItem('Todos', JSON.stringify(newTodos));
}

  return ( 
    <DataContext.Provider value={{todos,setTodos,completed, setCompleted,handelCompleted,handelDelete, totalTodos, activeTodos,completedTodos, mode, setMode }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
