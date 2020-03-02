import React from 'react';
import bg from '../../images/bg.png'

class Canvas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms:[
                {
                    name: 'foyer',
                    description:'',
                    n_to: 'outside',
                    s_to: 'overview',
                    w_to: null,
                    e_to:null,
                },
                {
                    name: 'outside',
                    description:'',
                    n_to: null,
                    e_to: 'overview',
                    w_to: null,
                    e_to:null,
                },
    
            ],
            player:{
                uuid: 1,
                name:'test1',
                title: 'foyer',
                s_to: 'overview',
                w_to: null,
                e_to:null,
            },
            players:[
                {
                    uuid: 1,
                    name:'test1',
                    title: 'foyer',
                    s_to: 'overview',
                    w_to: null,
                    e_to:null,
                },
                // {
                //     name: 2,
                //     name:'test2',
                //     n_to: null,
                //     e_to: 'overview',
                //     w_to: null,
                //     e_to:null,
                // },
    
            ]
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
    }

    componentDidMount() {
        this.canvas = this.refs.canvas

      //   const ctx = canvas.getContext("2d");
      //   ctx.fillText('this.props.text', 210, 75)
      //   const img = this.refs.image
      //   img.onload = () => {
      //     ctx.drawImage(img, 0, 0)
      //     ctx.font = "40px Courier"
      //     ctx.fillText('this.props.text', 210, 75)
      //   }
  
      
      if (this.canvas.getContext) {
          this.ctx = this.canvas.getContext('2d');
     
          this.ctx.beginPath();
          this.ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
          this.ctx.moveTo(110, 75);
          this.ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
          this.ctx.moveTo(65, 65);
          this.ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
          this.ctx.moveTo(95, 65);
          this.ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
          this.ctx.stroke();
  
          this.drawLineFromPoint({x: 10, y: 10})
          this.placePoint({x: 30, y: 30})
  
          // this.ctx.fillRect(10,10,6,6)
          // this.ctx.fillRect(16,12.5,80, 1);
       }
      }

      renderRoomsToMap = () => {
        const coord = {
            x: 320,
            y: 200
        }

        this.placePoint()

      }

    move = () => {
        setTimeout(()=> {
            const res = {
            name: "testuser", 
            title: "Foyer", 
            description: "Dim light filters in from the south. Dusty\npassages run north and east.",
            players: [{
                uuid: 1,
                name:'test1',
                title: 'foyer',
                s_to: 'overview',
                w_to: null,
                e_to:null,
            }], 
            error_msg: "",
        }
        const {players} = res;
        this.setState({players});
        delete res.players
        this.setState({player})

        },1000)
    }



    drawLineFromPoint = (point, direction) => {
        
        // switch(direction) {
        //     case 'n':

        // }

        const { x, y } = point;
        const { lineWidth, lineHeight } = this.lineDimensions;
        const { pointWidth, pointHeight } = this. pointDimensions;
        const startX = x + pointWidth;
        const startY = y + (pointHeight/2) - lineHeight;

        const endX = startX + lineWidth
        const endY = startY + lineHeight
        this.ctx.beginPath();
        this.ctx.strokeStyle = "green"; // Purple path
        this.ctx.moveTo(startX,startY);
        this.ctx.lineTo(endX, startY);
        // ctx.fill();
        this.ctx.stroke(); // Draw it
        this.ctx.closePath();
       

    }

    placePoint = (position) => {
        const {x, y} = position;
        const {pointHeight: height, pointWidth: width} =  this.pointDimensions;
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'red'
        this.ctx.fillRect(x,y,width, height);
        // this.ctx.stroke()
        this.ctx.closePath();


    }

    render() {
      return(
        <div>
          <canvas  ref="canvas" width={640} height={400} />
          {/* <img ref="image" src={bg} className="hidden" /> */}
        </div>
      )
    }
  }
  export default Canvas