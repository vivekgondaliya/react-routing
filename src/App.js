import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Route, Link, Switch, Redirect} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Messages from './components/Messages';

function App() {
  return (
    <div className="App">
      <div className="menu">
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/messages">Messages</Link> </li>
            <li> <Link to="/about">About</Link> </li>
          </ul>
      </div>
      <div className="App-intro">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/messages" component={Messages} />
            <Route path="/about" component={About} />
            <Redirect to="/" />
          </Switch>
        </div>
    </div>
  );
}

export default App;
