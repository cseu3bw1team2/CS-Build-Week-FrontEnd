import Point from './Node'

class Room {
    constructor(props) {
        this.name = props.name;
        this.description = props.description;
        this.position = new Node(0, 0)
        this.n_to = null;
        this.s_to = null;
        this.w_to =  null;
        this.e_to =  null;

    }

    move = (directionInfo) => {

    }
}

export default Room;
