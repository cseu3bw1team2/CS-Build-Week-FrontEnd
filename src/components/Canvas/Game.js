import React, { Component } from 'react';
import Room from './Room';
import Player from './Player';

import { get } from '../../util/controllers/data';
import { getUrl } from '../../util/url';
import { lineDimensions } from './helpers';
import './index.css'

class Game extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            players: [],
            player:{},
            rooms:[],
        }  
        
        this.step = 20;
        this.pointDimensions = {
            pointWidth: 10,
            pointHeight:10,
        }
        this.pointHeight = 10;
        this.pointWidth = 10;
        this.lineThickness = 1
        this.lineDimensions = {
            lineWidth: 80,
            lineHeight: 1
        }
        this.count = 0;
        

    }

    componentDidMount() {
        const canvas = this.refs.canvas;
        this.ctx = canvas.getContext('2d');
        this.ctx.fillStyle = "#fff";
        this.ctx.strokeStyle = "#fff";
        const obj = { description:'hello', name: 'foyer' }
        const new_r = new Room(obj)
        new_r.linkTo(this.ctx)
        const url = getUrl('GET_ROOMS');
        get(url)
        .then(async res => {
                             const data = res.data;
                             const rooms = data.map(roomEl => {
                                 const room = new Room(roomEl);
                                 let players = [];
                                 if (roomEl.players.length !== 0 )  {
                                     //convert each literal object to Player instance object
                                     players = room.players.map(el => {
                                        const player = new Player(el);
                                        player.current_room = room;
                                        return player;
                                     });
                                 }
                                 room.players = players;
                                 return room;
                                 
                             });
                            this.rooms = rooms;
                            //1.
                            //  const modified_rooms = this.assignCordinatesToRooms(
                            //    rooms
                            //  );

                            //  this.drawRoomsOnCanvas(modified_rooms);
                            //2.
                            // this.initialRoom = this.rooms[0];
                            // const startX = 500;
                            // const startY = 500;
                            // this.initialRoom.position.x = startX;
                            // this.initialRoom.position.y = startY;
                            // this.initRoomPosition(this.initialRoom,'n_to')
                            //3.
                            this.assignRoomsMod();
                            

                             const players_url = getUrl("GET_PLAYERS");
                             const players_data = await get(players_url);
                             const uuid = 1;
                             const d_player = players_data.data.find(
                               el => el.uuid === uuid
                             );

                             // get a room, TODO: make it random
                             const start_room = this.rooms[0];
                             d_player.room = start_room;
                             const player = new Player(d_player);
                             console.log(start_room)
                             console.log(player)
                             this.setState({ player });
                             this.drawRoomsOnCanvas(this.rooms);
                            //  player.title
                           })

        


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
       let startX =100;
       let startY = 300;
       const mod_rooms = rooms.map(el => {
           el.position.x = startX;
           el.position.y = startY;
           startX += lineDimensions.lineWidth;
           return el;
       });

       return mod_rooms;
    }

    addPositionToRoomMod = (room,referenceRoom) => {
        const {  lineWidth } = lineDimensions;
        let x = null;
        let y = null
        const {n_to, s_to, e_to, w_to } = referenceRoom;

        if(room.name === n_to) {
            // console.log(`moving n_to from ${referenceRoom.name} to ${room.name} adding ${lineWidth} to  y:${referenceRoom.position.y}`)
            x = referenceRoom.position.x;
            y = referenceRoom.position.y + lineWidth;     
        } else if (room.name === s_to) {
            x = referenceRoom.position.x;
            y = referenceRoom.position.y - lineWidth;
        } else if(room.name === e_to) {
            x = referenceRoom.position.x + lineWidth;
            y = referenceRoom.position.y;
        } else if (room.name === w_to) {
            x = referenceRoom.position.x - lineWidth;
            y = referenceRoom.position.y;
        }

        return {
            x,y
        }
    }

    

    assignRoomsMod = () => {
       let cOfRooms =  [...this.rooms];
       const assigned = [];
       let count = 0;
       let firstPass =  false;
       while(cOfRooms.length > 0) {

           console.log('called')
           let newRoom = null;
           let refRoom = null
           newRoom = cOfRooms[count];
           if(!firstPass) {
            newRoom.position.x = 200;
            newRoom.position.y = 200;
            assigned.push(newRoom);
            cOfRooms = cOfRooms.filter(el => el.name !== newRoom.name);
            count--;
           }

           
           refRoom = assigned.find(el => 
            {
                return (
                    (newRoom.name === el.n_to) ||
                    (newRoom.name === el.s_to) || 
                    (newRoom.name === el.e_to) ||
                    (newRoom.name === el.w_to)
                    );
            }
            )

            // if(!firstPass) {
            //     refRoom = newRoom;
            // } 

           count++;
           firstPass = true

           if(!refRoom) {
               continue;
           } 
            
            //Assign room
            if(refRoom && refRoom.n_to) {
                //Assing position
                const {x, y} = this.addPositionToRoomMod(newRoom,refRoom);
                newRoom.position.x = x;
                newRoom.position.y = y;
                cOfRooms = cOfRooms.filter(el => el.name !== newRoom.name);
                assigned.push(newRoom);
                count = 0;
                continue;

            }
            if(refRoom && refRoom.s_to) {
                const {x, y} = this.addPositionToRoomMod(newRoom,refRoom);
                newRoom.position.x = x;
                newRoom.position.y = y
                cOfRooms = cOfRooms.filter(el => el.name !== newRoom.name);
                assigned.push(newRoom);
                count = 0;
                continue;
            }
            if(refRoom && refRoom.e_to) {
                const {x, y} = this.addPositionToRoomMod(newRoom,refRoom);
                newRoom.position.x = x;
                newRoom.position.y = y
                cOfRooms = cOfRooms.filter(el => el.name !== newRoom.name);
                assigned.push(newRoom);
                count = 0;
                continue;
            }

            if(refRoom && refRoom.w_to) {
                const {x, y} = this.addPositionToRoomMod(newRoom,refRoom)
                newRoom.position.x = x;
                newRoom.position.y = y
                cOfRooms = cOfRooms.filter(el => el.name !== newRoom.name);
                assigned.push(newRoom);
                count = 0;
                continue;
            }
            
       }
       this.rooms = assigned;
    }



    

    drawRoomsOnCanvas = (rooms) => {
        rooms.forEach((eachRoom)=> {
            eachRoom.drawRoomOnNode(this.ctx);
        });
    }

    placePoint = (position) => {
        const {x, y} = position;
        const {pointHeight: height, pointWidth: width} =  this.pointDimensions;
        this.ctx.beginPath();
        // this.ctx.strokeStyle = 'red'
        this.ctx.fillRect(x,y,width, height);
        // this.ctx.stroke()
        this.ctx.closePath();


    }

    movePlayer = (direction) => {
        console.log(this.state.player)
        this.state.player.move(this.ctx,direction, this.rooms)
    }
    
    renderRoomsToMap = () => {

        const coord = {
            x: 320,
            y: 200
        }

        this.placePoint({x:320, y:200})
        this.placePoint({x:370, y:200})
        this.placePoint({x:370, y:150})
        this.placePoint({x:320, y:150})


      }
    render(){
        return (
          <div >
            <canvas className="canvas" ref="canvas" width={640} height={400} />
            {/* <img ref="image" src={bg} className="hidden" /> */}
            <div className="btn-container">
                <div className="north"><button onClick={()=>this.movePlayer('n')}>North</button></div>
                <div className="left-right">
                    <div><button onClick={()=>this.movePlayer('w')}>West</button></div>
                    <div><button onClick={()=>this.movePlayer('e')}>East</button></div>
                </div>
                <div className="south"><button onClick={()=>this.movePlayer('s')}>South</button></div>
            </div>
          </div>
        );
    }
}

export default Game;

//render algorithm
