import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home"
import Login from "./Components/SignIn-Up/Login"
import Signup from "./Components/SignIn-Up/Signup"
import Error from './Components/Error';
import 'react-toastify/dist/ReactToastify.css';
import CartView from './Components/Cart/CartView';
import CartPage from './Components/Cart/CartPage';
import Checkout from './Components/Cart/Checkout';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cartview" element={<CartView />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

// const RestrictedComponent = () => {
//   return <h1>Restricted Component - Only accessible if logged in</h1>;
// };

export default App;
