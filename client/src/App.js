
import './App.css';



import Register from "./pages/Rigester/Register"
import Login from "./pages/Login/Login"
import Home from './pages/home/home'
import Profile from "./pages/Profile/Profile"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from 'react';
import { Authcontext } from './context/AuthContext';



function App() {
  
  const {user}=useContext(Authcontext);
  return (
    
    
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />}> </Route>
        <Route path="/login" element={user ? <Home/>: <Login/>}></Route>
          <Route path='/profile/:username' element={<Profile/>}></Route>
          <Route path='/' element={user ? <Home/>: <Register/>}></Route>

          

        
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;
