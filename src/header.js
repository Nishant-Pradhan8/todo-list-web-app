import { FaMoon, FaSun } from "react-icons/fa";

import DataContext from "./Context/context";
import { useContext, useEffect } from 'react';
function Header(){
  const {mode, setMode} = useContext(DataContext)
  useEffect(()=>{
    localStorage.setItem('Mode',mode)
  },[mode])
    return(
      <header>
          <div className="logo-div">
             <h1 className="logo">TODO</h1>
             {
              mode==='light'?(<FaMoon style={{cursor:'pointer'}} className="mode" onClick={()=>mode==='light'?setMode('dark'):setMode('light')} />): (<FaSun className="mode" style={{cursor:'pointer'}} onClick={()=>mode==='dark'?setMode('light'):setMode('dark')} />)
             }
             
          </div>
      </header>
    )
}
export default Header;