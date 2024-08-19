import { useContext } from "react";
import DataContext from "./Context/context";
function Footer(){
    const {mode} = useContext(DataContext)
    return(
        <footer>
         <h1 className={`message ${mode!=='light'?'message-dark':''}`}>We remember, So you don't have to!</h1>
        </footer>
    )
}
export default Footer;