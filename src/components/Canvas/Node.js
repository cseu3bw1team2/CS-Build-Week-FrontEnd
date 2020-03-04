import { pointDimensions, lineDimensions} from './helpers'

class Node {
    constructor(props) {
        // this will serve as x,y coords
        this.x = props.x ? props.x : null;
        this.y = props.x ? props.y : null; // This is for the room the layer belongs to
    }

    linkNodeTo = (ctx, node) => {
        const { x, y } = node;
        const { pointWidth, pointHeight } = pointDimensions;
        const {  lineWidth,lineHeight } = lineDimensions;
        const adjustedLineHeight = lineHeight + ( pointWidth / 2 );
        const startX = this.x + (pointWidth / 2);
        const startY = this.y + (pointHeight / 2);

        const endX = x + (pointWidth / 2) ;
        const endY = y + (pointHeight / 2);

//         ctx.save();

// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 100, 100);

// // Restore the default state
// ctx.restore();

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        node.highlightNode(ctx)
        console.log(`linking (${this.x},${this.y}) with (${x}, ${y})`)
    }

    highlightNode = (ctx) => {
        ctx.save();

        ctx.fillStyle = 'red';
        this.renderNode(ctx);
        
        // Restore the default state
        ctx.restore();
    }


    renderNode = (ctx) => {
        const x = this.x;
        const y = this.y;
        // alert(y)
        // console.log('x: '+x);
        // console.log('y: '+y)
        const { pointWidth, pointHeight } = pointDimensions;
        ctx.fillRect(x,y,pointWidth, pointHeight);
    }
}

export default Node;