import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home"
import Login from "./Components/SignIn-Up/Login"
import Signup from "./Components/SignIn-Up/Signup"
import Error from './Components/Error';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

// const RestrictedComponent = () => {
//   return <h1>Restricted Component - Only accessible if logged in</h1>;
// };

export default App;
