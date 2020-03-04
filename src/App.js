import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import SignUp from './view/SignUp';
import SignIn from './view/SignIn';
import Home from './view/Home';
// import Navigation from './components/Navigation';
import Game from './view/Game';
import PrivateRoute from './components/PrivateRoute';
import styled from 'styled-components';

function App() {
  return (
    <AppStyle>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/register" component={SignUp}></Route>
        <Route path="/login" component={SignIn}></Route>
        <PrivateRoute path="/game" component={Game}></PrivateRoute>
        {/* <Route path="/game" component={Game}></Route> */}

      </Switch>
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  display: flex;
  justify-content: center;
`;

// function update(e){
//   var x = e.clientX || e.touches[0].clientX
//   var y = e.clientY || e.touches[0].clientY

//   document.documentElement.style.setProperty('--cursorX', x + 'px')
//   document.documentElement.style.setProperty('--cursorY', y + 'px')
// }

// document.addEventListener('mousemove',update)
// document.addEventListener('touchmove',update)