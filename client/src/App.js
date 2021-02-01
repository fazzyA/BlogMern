import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddUser from './components/users/Add';
import List from './components/users/List';
import Home from './components/Home';



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/Add'>
          <AddUser/>
        </Route>
        <Route path='/List'>
          <List/>
        </Route>
        <Route path='/Home'>
          <Home/>
          </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;