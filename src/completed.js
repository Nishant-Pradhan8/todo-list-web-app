import { useContext } from "react";
import DataContext from "./Context/context";
import { FaTrash } from 'react-icons/fa';

function Completed(){
    const {todos,mode,handelCompleted,handelDelete} = useContext(DataContext)
    const completedFilter = todos.filter(todo=>todo.status==="C")
    
    return(
        <div className="todo-div">
        <ul className="todoListDiv" >
            {completedFilter.length?
            (
                completedFilter.map((todo)=>{
                    return (
                    <li className={`details ${mode!=='light'?'details-dark': ''}`} key={todo.id} draggable="true">
                         <input checked  type="checkbox" id={todo.id} onChange={()=>handelCompleted(todo.id)} className = "checkedBox" />
                         <label style={{textDecoration: todo.status==='C'?'line-through': 'none' }} className= "label" htmlFor={todo.id}>{todo.todo}</label>
                         <FaTrash style={{display: todo.status==='C'?'block': 'none' }} id={todo.id} className="deleteIcon" onClick={()=>handelDelete(todo.id)} />
                    </li>)
                })
               
            )   : <p style={{padding: '1rem', backgroundColor:mode==='dark'?'var(--VERY-DARK-BLUE)':'white', color: mode==='dark'?'white':'var(--VERY-DARK-BLUE)', }}>No Completed Activities</p>
        }
        </ul>
    </div>
    )
}
export default Completed