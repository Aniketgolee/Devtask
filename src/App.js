import React from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/signup" Component={SignUp}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
