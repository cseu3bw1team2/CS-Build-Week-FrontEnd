import React from 'react';
import bg from '../../images/bg.png';
import { get } from '../../util/controllers/data';
import { getUrl } from '../../util/url';
import Room from './Room';

class Canvas extends React.Component {

    constructor(props) {
        super(props);
        console.log('init componet')
        this.state = {
            rooms:[],
            player:{
                uuid: 1,
                name:'test1',
                title: 'foyer',
                n_to: null,
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
    
            ],

            mimick:false
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
        this.count = 0
    }


    componentDidMount() {
        const url = getUrl('GET_ROOMS');

        get(url)
        .then(res => {
            const rooms = res.data;
            this.setState({rooms});
        })

        this.canvas = this.refs.canvas

      if (this.canvas.getContext) {
          this.ctx = this.canvas.getContext('2d');
        //   this.renderRoomsToMap()

       }
      }

      renderRoomsToMap = () => {

        const coord = {
            x: 320,
            y: 200
        }

        // this.placePoint({x:320, y:200})
        // this.placePoint({x:370, y:200})
        // this.placePoint({x:370, y:150})
        // this.placePoint({x:320, y:150})
        // console.log(this.count)


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
        this.setState({player: res})

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
          <button onClick={this.renderRoomsToMap}>render</button>
        </div>
      )
    }
  }
  export default Canvas