import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home"
import Login from "./Components/SignIn-Up/Login"
import Signup from "./Components/SignIn-Up/Signup"
import Error from './Components/Error';
import 'react-toastify/dist/ReactToastify.css';
import CartPage from './Components/Cart/CartPage';
import Checkout from './Components/Cart/Checkout';
import ProductDetails from './Components/Products/ProductDetails';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/productdetails" element={<ProductDetails/>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}



export default App;
