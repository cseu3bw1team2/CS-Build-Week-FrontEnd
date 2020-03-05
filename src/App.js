import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
// import SignUp from './view/SignUp';
// import SignIn from './view/SignIn';
import Home from './view/Home';
// import Navigation from './components/Navigation';
// import Game from './view/Game';
import PrivateRoute from './components/PrivateRoute';
import styled from 'styled-components';
// import SignUp from './components/SignUp';
// import SignIn from './components/SignIn';
import Game from './components/Canvas/Game'

function App() {
  return (
    <AppStyle>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        {/* <Route path="/register" component={SignUp}></Route>
        <Route path="/login" component={SignIn}></Route> */}
        {/* <PrivateRoute path="/game" component={Game}></PrivateRoute> */}
        {/* <Route path="/game" component={Game}></Route> */}
        {/* <Route exact path="/">Home</Route>
        <Route path="/register" component={SignUp}></Route>
        <Route path="/login" component={SignIn}></Route> */}
        <Route path="/game" component={Game}></Route>
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

// const W = window.innerWidth;
// const H = window.innerHeight

// function updateAnimationTiming() {
//   const animationDuration = 5 + Math.random() * 5; // [5 - 10)
//   const animationDelay = 5 + Math.random() * 10; // [5 - 15)
  
//   window.requestAnimationFrame(() => {
//     document.documentElement.style.setProperty('--animationDuration', animationDuration + 's');
//     document.documentElement.style.setProperty('--animationDelay', animationDelay + 's');
//   });
  
//   const timeout = (animationDuration + animationDelay) * 1000 - 100;
  
//   setTimeout(updateAnimationTiming, timeout);
// }

// updateAnimationTiming();

// document.addEventListener('mousemove', e => {
//   window.requestAnimationFrame(() => {
//     const X = e.clientX;
//     const Y = e.clientY;

//     document.documentElement.style.setProperty('--cursorX', X + 'px');
//     document.documentElement.style.setProperty('--cursorY', Y + 'px');

//     const X2 = X - (12 * W / 100) * (X / W - 0.5);
//     const Y2 = Y - (12 * W / 100) * (Y / H - 0.5);

//     document.documentElement.style.setProperty('--cursorX2', X2 + 'px');
//     document.documentElement.style.setProperty('--cursorY2', Y2 + 'px');
//   });
// });