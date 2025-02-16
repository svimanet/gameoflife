import { Graphics, Texture, type Application } from "pixi.js";

/**
* Create and render grid for visual aid.
* Only renders once.
*/
export const makeGrid = (props: {
  width: number;
  height: number;
  cellsWide: number;
  cellsTall: number;
  minCellSize: number;
  leftoverWidth: number;
  leftoverHeight: number;
  app: Application;
}) => {
  const {
    width,
    height,
    cellsWide,
    cellsTall,
    minCellSize,
    leftoverWidth,
    leftoverHeight,
    app
  } = props;

  const grid = new Graphics();
  app.stage.addChild(grid); 

  // Vertical grid lines
  for (let i=0; i<=cellsWide; i++) {
    grid.moveTo((i*minCellSize)+(leftoverWidth/2), 0+(leftoverHeight/2));
    grid.stroke({ texture: Texture.WHITE, color: "black", width: 2 });
    grid.lineTo((i*minCellSize)+(leftoverWidth/2), (height)-(leftoverHeight/2));
  }

  // Horizontal grid lines
  for (let i=0; i<=cellsTall+1; i++) {
    grid.moveTo(0+(leftoverWidth/2), (i*minCellSize)+(leftoverHeight/2));
    grid.stroke({ texture: Texture.WHITE, color: "black", width: 2 });
    grid.lineTo((width)-(leftoverWidth/2), (i*minCellSize)+(leftoverHeight/2));
  }
}