import React from "react";
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Form from "./Form";

//PLAN:
//Act as the router for all components and provide links for them
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/form'>Form</NavLink>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/form' element={<Form />} />
          <Route path='/' element={<Home />} />

        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
