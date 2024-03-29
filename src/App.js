
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
    <>
    <Router>
    <Navbar/>
    <Switch>
          <Route exact path="/general"><News  key="general" country ="in" size = {6} category="general"/></Route>
          <Route exact path="/sports"><News key="sports" country ="in" size = {6} category="sports"/></Route>
          <Route exact path="/business"><News key="business"  country ="in" size = {6} category="business"/></Route>
          <Route exact path="/technology"><News key="technology" country ="in" size = {6} category="technology"/></Route>
          <Route exact path="/health"><News key="health" country ="in" size = {6} category="health"/></Route>
          <Route exact path="/entertainment"><News key="entertainment" country ="in" size = {6} category="entertainment"/></Route>
        </Switch>
    </Router>
    </>
     
    )
  }
}

