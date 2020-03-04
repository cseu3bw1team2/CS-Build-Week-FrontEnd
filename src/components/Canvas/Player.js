class Player {
    constructor(props) {
        this.name = props.name;
        this.current_room = props.room;

    }

    move(ctx,direction, rooms) {
        let next_room_name  = "";
        
        switch(direction) {
            case 'n':
                next_room_name = this.current_room.n_to;
                break;
            case 's':
                next_room_name = this.current_room.s_to;
                break;
            case 'e':
                next_room_name = this.current_room.e_to;
                break;
            case 'w':
                    next_room_name = this.current_room.w_to;
                break;
        }
    
        if(next_room_name) {
            // remove this player form the current room
            if(this.current_room.players.length !== 0) {
                this.current_room.players = this.current_room.players.filter(el => el.uuid !== this.uuid);
            }

            const new_room =  rooms.find(el => el.name === next_room_name);
            //Add player to the players in the new room
            new_room.players.push(this);
            //Draw a line to link both rooms
            // console.log(new_room)
            this.current_room.linkTo(ctx, new_room);
            // set players current room to the new room
            this.current_room =  new_room;  
            
        } else {
            
            alert("YOu cant move here")
        }

        
    }
}

export default Player;