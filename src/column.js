import { useContext } from "react"
import DataContext from "./Context/context";
import Todo from './rendertodo'



function Columns(){
    const {todos, mode} = useContext(DataContext)
    return(
        <ul className="todoListDiv"  >
                { todos.length?
                ( todos.map((todo)=>{
                    return <Todo todo = {todo} key={todo.id} id={todo.id} />
                })
                ): <p style={{padding: '1rem', backgroundColor:mode==='dark'?'var(--VERY-DARK-BLUE)':'white', color: mode==='dark'?'white':'var(--VERY-DARK-BLUE)' }}>No activities to complete</p>

                }
    </ul>
    )
}
export default Columns