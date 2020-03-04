import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Game from './components/Canvas/Game'

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/">Home</Route>
        <Route path="/register" component={SignUp}></Route>
        <Route path="/login" component={SignIn}></Route>
        <Route path="/game" component={Game}></Route>
      </Switch>
    </div>
  );
}

export default App;
