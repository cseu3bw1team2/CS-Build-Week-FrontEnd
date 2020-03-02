import Room from './Room'

class Player {
    constructor(props) {
        this.name = props.name;
        this.title = props.title; // This is for the room the layer belongs to
        this.position = props.position;
        this.room = new Room()

    }

    move = (directionInfo) => {

    }
}

export default Player;