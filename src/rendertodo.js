import { FaTrash } from 'react-icons/fa';
import { useContext } from "react"

import DataContext from "./Context/context";

function Todo({todo}){
    const {handelCompleted,handelDelete, mode} = useContext(DataContext)
        
    return(
            <li className={`details ${mode!=='light'?'details-dark': ''}`}>
                <input type="checkbox" id={todo.id} onChange={()=>handelCompleted(todo.id)} checked = {todo.status==='C'} className = "checkedBox" />
                <label style={{textDecoration: todo.status==='C'?'line-through': 'none'}} className= "label" htmlFor={todo.id}>{todo.todo}</label>
                <FaTrash style={{display: todo.status==='C'?'block': 'none' }} id={todo.id} className="deleteIcon" onClick={()=>handelDelete(todo.id)} />
            </li>
    )
}
export default Todo