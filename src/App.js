import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './Routes/NavBar';
import Home from './Routes/Home';
import Maths from './Routes/Math';
import Trivia from './Routes/Trivia';
import Datea from './Routes/Date';
import Year from './Routes/Year';

function App() {
  return (
    <div>
      <NavBar/>
      <Router>
        <Route path="/home" component={Home}/>
        <Route path="/math" component={Maths}/>
        <Route path="/trivia" component={Trivia}/>
        <Route path="/date" component={Datea}/>
        <Route path="/year" component={Year}/>
      </Router>
      
    </div>
  );
}

export default App;
