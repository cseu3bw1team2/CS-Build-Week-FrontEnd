import Node from './Node';

class Room {
    constructor(props) {
        this.name = props.name;
        this.description = props.description;
        this.position = new Node(0, 0);
        this.players = props.players ? props.players : [] // an array of players cuurently in the room
        this.n_to = props.n_to ? props.n_to : null;
        this.s_to = props.s_to ? props.s_to : null;
        this.w_to =  props.w_to ? props.w_to : null;
        this.e_to =  props.e_to ? props.e_to : null;
        this.linkTo = this.linkTo.bind(this);
        //points def
        

    }

    linkTo(ctx, room) {
        // This is important for some reasons because this method is first called withan undefined room
        if(!room) return;

        // somehow calling this.position.linkNodeTo directly is causing an error.
        // position.linkNodeTo(ctx, new Room({name:'jk', description:'fdh'})); 
        this.position.linkNodeTo(ctx, room.position);        
       
        // this.position.linkNodeTo(ctx, room.position)
    }

    drawRoomOnNode(ctx) {
        const position = this.position;
        position.renderNode(ctx)
    }

    highlightRoom = (ctx) => {
        
    }
}

export default Room;
