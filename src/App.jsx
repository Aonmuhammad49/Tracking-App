import Navbar from "./Components/Navbar"
import { Routes,Route } from "react-router-dom"
import Home from './Pages/Home/Home'
import Coin from './Pages/Coin/Coin'
import Footer from "./Components/Footer/Footer"
const App = ()=>{
      return(
        <>
        <div className="App">
            <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/coin/:coinId" element={<Coin/>}/>
        </Routes>
        <Footer/>
        </div>
        </>
      )  
}
export default App