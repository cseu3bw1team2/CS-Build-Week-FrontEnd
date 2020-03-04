import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import SignUp from './view/SignUp';
import SignIn from './view/SignIn';
import Home from './view/Home';
// import Navigation from './components/Navigation';
import Game from './view/Game';
// import PrivateRoute from './components/PrivateRoute';
import styled from 'styled-components';

function App() {
  return (
    <AppStyle>
      {/* <Navigation/> */}
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/register" component={SignUp}></Route>
        <Route path="/login" component={SignIn}></Route>
        {/* <PrivateRoute path="/game" component={Game}></PrivateRoute> */}
        <Route path="/game" component={Game}></Route>

      </Switch>
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
// background-image: url("https://cdn1.epicgames.com/ue/product/Screenshot/Cave_screenshot_03-1920x1080-a51d4675f0f3f82213543dd937ec5a97.png");
// background-color: #cccccc;
// // height: 100%;
`;

