import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">Home</Route>
        <Route path="/register">Register</Route>
        <Route path="/login">Login</Route>
        <Route path="/game">Game</Route>
      </Switch>
    </div>
  );
}

export default App;
