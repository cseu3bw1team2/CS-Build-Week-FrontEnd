import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Canvas from './components/Canvas'

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/">Home</Route>
        <Route path="/register" component={SignUp}></Route>
        <Route path="/login" component={SignIn}></Route>
        <Route path="/game">Game</Route>
        <Route path="/canvas" component={Canvas}></Route>
      </Switch>
    </div>
  );
}

export default App;
