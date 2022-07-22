import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { Navbar, Home, Other } from "./components/index";
// import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Router>
        <header>
          <Navbar />
          <Home/>
        </header>
        {/* <Switch>
          <Route path="/Other">
            <Other />
          </Route>
          <Route path="/Other">
            <Other />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */}
      </Router>
    </>
  );
}

export default App;
