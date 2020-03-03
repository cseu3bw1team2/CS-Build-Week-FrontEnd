import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Game from './components/Game';

function App() {
  return (
    <div className="app">
      <Navigation/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/register" component={SignUp}></Route>
        <Route path="/login" component={SignIn}></Route>
        <Route path="/game"><Game/></Route>
      </Switch>
    </div>
  );
}

export default App;
