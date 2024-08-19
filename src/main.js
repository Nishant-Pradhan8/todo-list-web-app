import Header from './header'
import Input from './input'
import All from './all'
import Active from './active'
import Completed  from "./completed";
import Footer from './footer'
import Options  from './options';
import {Route, Routes} from 'react-router-dom';

function Main(){
    return(
        <main className='main'>
            <Header />
            <Input />
            <Routes>
                <Route path="/" element={<All />}></Route>
                <Route path="/active" element={<Active />}></Route>
                <Route path="/completed" element={<Completed />}></Route>
            </Routes>
           
            <Options />
            <Footer />
        </main>
    )
}
export default Main