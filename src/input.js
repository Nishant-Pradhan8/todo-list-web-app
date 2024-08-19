import { useContext} from "react";
import DataContext from "./Context/context";
function Input(){
  const {todos,setTodos,mode} = useContext(DataContext)
  function handelInput(e){
    if(e.key==='Enter'){
      let inputValue = e.target.value;
      let finalValue = inputValue.trim()
      if(finalValue){
        const id = todos.length? todos[todos.length-1].id+1: 1;
        const status = 'NC'
        const newTodo = {id,todo:finalValue,status};
        const latestTodo = [...todos,newTodo];
        setTodos(latestTodo)
        localStorage.setItem('Todos', JSON.stringify(latestTodo));
        e.target.value = "";
      }
    }
  }
    return(
      <div className="input-div">
         <input className={`input ${mode !== 'light' ? 'input-dark' : ''}`}
 type="text" placeholder="Create a new todo..." 
         onKeyDown={handelInput}
         />
       </div>
    )
}
export default Input;