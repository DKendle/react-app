import React from "react";
import Home from "./Home";
import About from "./About";
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />

        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
