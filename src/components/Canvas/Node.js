import { pointDimensions, startPoint } from "./helpers";

class Node {
  constructor(props) {
    // this will serve as x,y coords
    this.x = props.x ? props.x : null;
    this.y = props.x ? props.y : null; // This is for the room the layer belongs to
  }

  linkNodeTo = (ctx, node) => {
    const { x, y } = node;
    const { pointWidth, pointHeight } = pointDimensions;
    const startX = this.x + pointWidth / 2;
    const startY = this.y + pointHeight / 2;

    const endX = x + pointWidth / 2;
    const endY = y + pointHeight / 2;

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    //Highlight destination node
    node.highlightNode(ctx);
  };

  highlightNode = ctx => {
    ctx.save();
    ctx.fillStyle = "green";
    this.renderNode(ctx);
    ctx.restore();
  };

  renderNode = ctx => {
    const x = this.x;
    const y = this.y;
    const { pointWidth, pointHeight } = pointDimensions;

    if (x === startPoint.x && y === startPoint.y) {

      ctx.beginPath();
      ctx.save();
      ctx.strokeStyle = "red";
      ctx.arc(startPoint.x + (pointWidth/2), startPoint.y + (pointWidth/2), (pointWidth/2), 0, 2 * Math.PI);
      ctx.fillStyle = 'red'
      ctx.fill();
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
      return;
    }
    ctx.fillRect(x, y, pointWidth, pointHeight);
  };
}

export default Node;
