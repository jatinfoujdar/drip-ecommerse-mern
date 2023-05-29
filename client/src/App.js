import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home"
import Login from "./Components/SignIn-Up/Login"
import Signup from "./Components/SignIn-Up/Signup"


function App() {
  return (
    <Router>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
       </Routes>
    </Router>
  );
}

export default App;
