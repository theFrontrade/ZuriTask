import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import Houses from "./Components/Houses";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight, faBars, faCheckSquare, faCoffee, faCopyright, faLaptop, faSlidersH, faStar, faTimes, } from '@fortawesome/free-solid-svg-icons'

library.add(faLaptop, faBars, faCheckSquare, faCoffee, faAngleRight, faTimes, fab, faCopyright, faSlidersH, faStar)




const App = () => {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/placetostay' element={< Houses />} />
      </Routes>
    </Router>
  );
};

export default App;
