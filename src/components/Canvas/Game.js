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
            1.  Ajax requests to get rooms
            2.  call 'this assignCordinatesToRooms(rooms_from_axios)'
        
        */

    }

    addPlayer = (playerInfo) => {
        const newPlayer = new Player(playerInfo);
        const newPlayers = this.state.players.concat(newPlayer);
        this.setState({players: newPlayers});
    }

    assignCordinatesToRooms = (rooms) => {
        /*
            1.  Take in the rooms gotten from axios request.
            2.  Setup an algorithm that will assign points to them based on the linking of the rooms
            3.  Set the rooms to the room 'state'

        */
    }

    assignCordinatesToRooms = () => {

    }

    render(){
        return <div>hello</div>
    }
}

export default Player;