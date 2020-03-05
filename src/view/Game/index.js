import React, { useState, useEffect } from "react";
import axios from "axios";
// import styled from 'styled-components';
// import {MDBContainer} from 'mdbreact';
// import GameCard from "../components/Card/GameCard";
// import { getUrl } from "../../util/url";
// import { getWithAuth } from '../../util/controllers/data';

const Game = () => {
    const [gameData, setGameData] = useState({});
    // console.log("gameData init", gameData);

    useEffect(() => {
        // async function fetchData() {
        //     try {
        //         const url = getUrl('START_GAME')
        //         console.log('url',url)
        //         // console.log('info',userInfo)
        //         const res = await getWithAuth(url);
        //         console.log('jey', res)
        //         // window.sessionStorage.setItem('token', res.key);
        //         // console.log(res)
        //         // route to the main page
                
        //     } catch(e){
        //         // TODO: Handle error using some notification system.
        //         alert('Error: '+e.message);
        //     }
        //   }
        //   fetchData();
        axios
            .create({
                headers: { 'Authorization': 'Token ' + window.sessionStorage.getItem("token") }
            })
            .get("https://lambda-mud-test.herokuapp.com/api/adv/init/")
            .then(res => {
                console.log('yo',res.data)
                setGameData(res.data)
            })
            .catch(err => console.log("Error: ", err.message));
            // console.log('hi', gameData.name)
        }, []);

        
    return (
        <div>
            {/* <h1>Hello {gameData.name}</h1> */}
             <div className="card card-cascade wider reverse">
                <div className="view view-cascade overlay">
                    <img className="card-img-top" src="https://s3.amazonaws.com/files.d20.io/marketplace/94857/OO3yVeWuCpaOrhzDStph4A/max.jpg?1447087347"
                    alt="Card image cap"/>
                </div>
                <div className="card-body card-body-cascade text-center">
                    <h4 className="card-title"><strong>Your position</strong></h4>
                    <h6 className="font-weight-bold indigo-text py-2">Room: {gameData.title}</h6>
                    <p className="font-weight-bold black-text">Description: {gameData.description}</p>
                    {/* <div className="card-body card-body-cascade text-center"> */}
                        {/* <h4 className="card-title"><strong>My adventure</strong></h4>
                        <h6 className="font-weight-bold indigo-text py-2">Room: {gameData.title}</h6>
                        <p className="card-text">Description: {gameData.description}</p> */}
                        <p className="card-text">Where do you want to move next?</p>
                        <button type="button" className="btn btn-brown">Left</button>
                        <button type="button" className="btn btn-brown">Up</button>
                        <button type="button" className="btn btn-brown">Right</button>
                        <button type="button" className="btn btn-brown">Down</button>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default Game;


// const GameDiv = styled.div`
//     // background: white;
//     height: 300px;
//     // width: 50%;
//     margin:0 auto;
//     text-align: center;
//     // margin-top: 100px
//     // display: felx;
//     // flex-direction: row;
//     // align-self: flex-end
// `;
