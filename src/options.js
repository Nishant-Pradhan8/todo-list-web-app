import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import DataContext from "./Context/context";
import { useContext } from 'react';
function Options(){
  const {todos, mode, setTodos, totalTodos, activeTodos,completedTodos } = useContext(DataContext)
  const location = useLocation();
  let itemsNumber = 0; 
  if (location.pathname === "/") {
    itemsNumber = totalTodos;
  } else if (location.pathname === "/active") {
    itemsNumber = activeTodos;
  } else if (location.pathname === "/completed") {
    itemsNumber = completedTodos;
  }
  
  
  return(
        <div className={`options ${mode!=='light'?'options-dark': ''}`}>
        <h2 className="heading2 left-items">{itemsNumber} items left</h2>
        <ul className={`state-div ${mode!=='light'?'state-div-dark': ''}`}>
           <li className="states">
            <Link style={{color:location.pathname==="/"? "var(--BRIGHT-BLUE)":"var(--DARK-GRAYISH-BLUE)"}} className={`clearCompleted ${mode!=='light'?'clearCompleted-dark':''}`}  to="/">All</Link>
           </li>
           <li className="states"><Link style={{color: location.pathname==="/active"? "var(--BRIGHT-BLUE)":"var(--DARK-GRAYISH-BLUE)"}} className={`clearCompleted ${mode!=='light'?'clearCompleted-dark':''}`} to="/active">Active</Link></li>
           <li className="states"><Link  style={{color: location.pathname==="/completed"? "var(--BRIGHT-BLUE)":"var(--DARK-GRAYISH-BLUE)"}} className={`clearCompleted ${mode!=='light'?'clearCompleted-dark':''}`} to="/completed">Completed</Link></li>
        </ul>
        <button className={`clearCompleted ${mode!=='light'?'clearCompleted-dark':''}`} onClick={()=>setTodos(todos.filter(todo=>todo.status!=="C"))}>Clear Completed</button>
      </div>
      
    )
}
export default Options;