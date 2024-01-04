import React from "react";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Signin from "./Components/Signin";
import Account from "./Components/Account"
import { BrowserRouter as Router, Navigate, Routes,Route  } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/account" element={<Account/>}/>

      </Routes>
      </Router>
    
    
    
    </div>
  );
}

export default App;
