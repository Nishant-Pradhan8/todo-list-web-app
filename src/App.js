
import TopBg from './top'
import Main from './main'
import { useContext } from "react"
import DataContext from "./Context/context";

function App() {
  const{mode} = useContext(DataContext)
  return (
    <div className={mode==='light'? 'App': 'App-dark'}>
        <TopBg />
        <Main />
    </div>
  );
}

export default App;
