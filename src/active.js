import { useContext } from "react"
import DataContext from "./Context/context";

function Active(){
    const {todos, handelCompleted,mode} = useContext(DataContext)
    const activeFilter = todos.filter(todo=>todo.status==="NC");
    

    return(
        <div className="todo-div">
            <ul className="todoListDiv"  >
                {activeFilter.length?
                (
                    activeFilter.map((todo)=>{
                        return (
                        <li className={`details ${mode!=='light'?'details-dark': ''}`} key={todo.id} draggable="true">
                             <input type="checkbox" id={todo.id} onChange={()=>handelCompleted(todo.id)} checked = {todo.status==='C'} className = "checkedBox" />
                             <label style={{textDecoration: todo.status==='C'?'line-through': 'none' }} className= "label" htmlFor={todo.id}>{todo.todo}</label>
                        </li>)
                    })
                   
                )   : <p style={{padding: '1rem', backgroundColor:mode==='dark'?'var(--VERY-DARK-BLUE)':'white', color: mode==='dark'?'white':'var(--VERY-DARK-BLUE)', }}>No activities to complete</p>
            }
            </ul>
        </div>
    )
}
export default Active