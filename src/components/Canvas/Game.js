import React, { Component } from "react";
import Player from "./Player";
import { lineDimensions, getRooms, getGameInitData, initCanvas, startPoint } from "./helpers";
import "./index.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      player: {},
      rooms: [],
      room: {}
    };

    this.handleKeyDownEvent = this.handleKeyDownEvent.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.addCoordsToRoom =  this.addCoordsToRoom.bind(this);
    this.assignRoomsCoords = this.assignRoomsCoords.bind(this);
    this.drawRoomsOnCanvas = this.drawRoomsOnCanvas.bind(this);
    this.placePoint = this.placePoint.bind(this);
    this.movePlayer = this.movePlayer.bind(this);
  }

  async componentDidMount() {
      // Get Init Data
    const init = await getGameInitData();
    const rooms = await getRooms();
    this.rooms = rooms;
    this.setState({ players: init.data.players });
    //Init Canvas
    const canvas = this.refs.canvas;
    this.ctx = initCanvas(canvas)
    this.assignRoomsCoords();

    // Init a new player in the first room
    const start_room = this.rooms[0];
    const player = new Player({ name: init.data.name, room: start_room });
    this.setState({ player });
    this.drawRoomsOnCanvas(this.rooms);

    // Bind Keys for arrow button usage
    document.addEventListener('keydown', this.handleKeyDownEvent)
  }

  componentWillUnmount() {
      //Clean up the event listener before componnet unmounts.
    document.removeEventListener('keydown', this.handleKeyDownEvent)
  }

  handleKeyDownEvent(e) {
    e.preventDefault();
    switch(e.which) {
        case 37: // left
        this.movePlayer('w')
        break;

        case 38: // up
        this.movePlayer('n')
        break;

        case 39: // right
        this.movePlayer('e')
        break;

        case 40: // down
        this.movePlayer('s')
        break;

        default: return; // exit this handler for other keys
    }
}

  addPlayer(playerInfo) {
    const newPlayer = new Player(playerInfo);
    const newPlayers = this.state.players.concat(newPlayer);
    this.setState({ players: newPlayers });
  };

  addCoordsToRoom(room, referenceRoom) {
    const { lineWidth } = lineDimensions;
    let x = null;
    let y = null;
    const { n_to, s_to, e_to, w_to } = referenceRoom;

    if (room.name === n_to) {
      x = referenceRoom.position.x;
      y = referenceRoom.position.y - lineWidth;
    } else if (room.name === s_to) {
      x = referenceRoom.position.x;
      y = referenceRoom.position.y + lineWidth;
    } else if (room.name === e_to) {
      x = referenceRoom.position.x + lineWidth;
      y = referenceRoom.position.y;
    } else if (room.name === w_to) {
      x = referenceRoom.position.x - lineWidth;
      y = referenceRoom.position.y;
    }

    return {
      x,
      y
    };
  };

  assignRoomsCoords() {
    let cOfRooms = [...this.rooms];
    const assigned = [];
    let count = 0;
    let firstPass = false;
    while (cOfRooms.length > 0) {
      let newRoom = null;
      let refRoom = null;
      newRoom = cOfRooms[count];
      if (!firstPass) {
        newRoom.position.x = startPoint.x;
        newRoom.position.y = startPoint.y;
        assigned.push(newRoom);
        cOfRooms = cOfRooms.filter(el => el.name !== newRoom.name);
        count--;
      }

      refRoom = assigned.find(el => {
        return (
          newRoom.name === el.n_to ||
          newRoom.name === el.s_to ||
          newRoom.name === el.e_to ||
          newRoom.name === el.w_to
        );
      });

      count++;
      firstPass = true;

      if (!refRoom) {
        continue;
      }

      //Assign room
      if (refRoom && refRoom.n_to) {
        //Assing position
        const { x, y } = this.addCoordsToRoom(newRoom, refRoom);
        newRoom.position.x = x;
        newRoom.position.y = y;
        cOfRooms = cOfRooms.filter(el => el.name !== newRoom.name);
        assigned.push(newRoom);
        count = 0;
        continue;
      }
      if (refRoom && refRoom.s_to) {
        const { x, y } = this.addCoordsToRoom(newRoom, refRoom);
        newRoom.position.x = x;
        newRoom.position.y = y;
        cOfRooms = cOfRooms.filter(el => el.name !== newRoom.name);
        assigned.push(newRoom);
        count = 0;
        continue;
      }
      if (refRoom && refRoom.e_to) {
        const { x, y } = this.addCoordsToRoom(newRoom, refRoom);
        newRoom.position.x = x;
        newRoom.position.y = y;
        cOfRooms = cOfRooms.filter(el => el.name !== newRoom.name);
        assigned.push(newRoom);
        count = 0;
        continue;
      }

      if (refRoom && refRoom.w_to) {
        const { x, y } = this.addCoordsToRoom(newRoom, refRoom);
        newRoom.position.x = x;
        newRoom.position.y = y;
        cOfRooms = cOfRooms.filter(el => el.name !== newRoom.name);
        assigned.push(newRoom);
        count = 0;
        continue;
      }
    }
    this.rooms = assigned;
  };

  drawRoomsOnCanvas(rooms) {
    rooms.forEach(eachRoom => {
      eachRoom.drawRoomOnNode(this.ctx);
    });
  };

  placePoint(position) {
    const { x, y } = position;
    const { pointHeight: height, pointWidth: width } = this.pointDimensions;
    this.ctx.beginPath();
    this.ctx.fillRect(x, y, width, height);
    this.ctx.closePath();
  };

  movePlayer(direction) {
    this.state.player.move(this.ctx, direction, this.rooms);
    const newRoom = this.state.player.current_room
    this.setState({ room: newRoom })
  };
  
  renderRoomsToMap = () => {};
  
  render() {
    return (
      <div>
          <canvas className="canvas" ref="canvas" width={1150} height={600} />
          <div className="controller">
            {this.state.player.current_room === undefined ? null : 
              <div className="text">
                  <h4 className="card-title"><strong>Your position</strong></h4>
                  <h6 className="font-weight-bold indigo-text py-2">Room: {this.state.player.current_room.name}</h6>
                  <p className="font-weight-bold black-text">Description: {this.state.player.current_room.description} </p>
                  <p className="card-text">Where do you want to move next?<br></br>Use your keys or hit the buttons to move to the next room</p>
                </div>
              }
              <div className="btn-container">
                  <div className="north">
                    <button className="button brown" onClick={() => this.movePlayer("n")}>North</button>
                  </div>
                  <div className="left-right">
                    <div>
                      <button className="button brown" onClick={() => this.movePlayer("w")}>West</button>
                    </div>
                    <div>
                      <button className="button brown" onClick={() => this.movePlayer("e")}>East</button>
                    </div>
                  </div>
                  <div className="south">
                    <button className="button brown" onClick={() => this.movePlayer("s")}>South</button>
                  </div>
              </div>
            </div>
         </div>
    );
  }
}

export default Game;

//render algorithm
