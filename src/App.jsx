import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Successful from "./pages/Successful";

function App() {
  return (
<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Successful" element={<Successful />} />
      </Routes>
    </Router>

  )
}

export default App
