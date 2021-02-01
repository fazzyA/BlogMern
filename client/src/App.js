import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddUser from './components/users/Add';
import List from './components/users/List';
import PostList from './components/posts/List';
import Home from './components/Home';
import Layout from './components/Layout/Layout';
import AddPost from './components/posts/Add';



function App() {
  return (
    <Router>
      <Layout>
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
          <Route path='/PostList'>
          <PostList/>
          </Route>
          <Route path='/AddPost'>
          <AddPost/>
          </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </Layout>
    </Router>
  );
}

export default App;