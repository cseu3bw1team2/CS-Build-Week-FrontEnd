import React, { Component } from 'react';
import Room from './Room';
import Player from './Player'

class Game extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            players: [],
            rooms:[],
        }    

    }

    componentDidMount() {
        /*
            1.  Ajax requests to get rooms and set to 'rooms' state

        
        */

    }

    addPlayer = (playerInfo) => {
        const newPlayer = new Player(playerInfo);
        const newPlayers = this.state.players.concat(newPlayer);
        this.setState({players: newPlayers});
    }

    setPositionToRooms = (rooms) => {
        /*
            1.  Take in the rooms gotten from axios request.
            2.  

        */
    }

    assignCordinatesToRooms = () => {

    }

    render(){
        return <div>hello</div>
    }
}

export default Player;