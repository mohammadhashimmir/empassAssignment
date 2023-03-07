import Login from "./Components/Login"
import Stats from './Components/Stats' 
import Book from './Components/Book'
import More from './Components/More'
import { Route, Routes } from "react-router-dom"
const App=()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/stats" element={<Stats/>}/>
                <Route path="/book" element={<Book/>}/>
                <Route path="/more" element={<More/>}/>
            </Routes>
  
        </div>
    )
};
export default App;