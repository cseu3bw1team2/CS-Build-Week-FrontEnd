import React from "react";

import {GameCard} from '../../styles/GameCard';
import { Title } from '../../styles/Title';
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import styled from 'styled-components';

const Home = () => {
    return (
        <Card>
            <Div>
            <Title>Adventure Game</Title>
            <P>Log in to continue your adventure or sign up to get started!</P>
            </Div>
            <GameCard>
                <SignIn></SignIn>
                <Div1/>
                <SignUp></SignUp>
            </GameCard>
        </Card>
    );
};

export default Home;

const Card = styled.div`
    background: white  ;
    // text-align: center;
    width: 60%;
    margin: 0 auto;
    margin-top: 90px;
    // opacity: 0.7;
    height: 80%;
    border-radius: 10px
`;
const Div1 = styled.div`
    // width: 20%;
    // text-align: center;
    border-left: 3px solid grey;
    height: 500px;
    // position: absolute;
    left: 50%;
    margin: 0 40px;
    margin-bottom: 10px;
    // top: 0;
`;

const Div = styled.div`
    padding-top: 30px;
    text-align: center;
    // color: white;
`;

const P = styled.p`
    width: 80%;
    margin: 0 auto;
    text-shadow: 0.4px 1px;
    // color: red;
    padding: 30px;
`;