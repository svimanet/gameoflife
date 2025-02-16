import { Graphics, type Application } from "pixi.js";
import type { Cell } from "./types";

/* Create a nested list of objects to represent the state of each grid cell. */
export const createCells = (props: {
    app: Application;
    cellsTall: number;
    cellsWide: number;
    minCellSize: number;
    leftoverWidth: number;
    leftoverHeight: number;
}): Cell[][] => {
    const {
        app,
        cellsTall,
        cellsWide,
        minCellSize,
        leftoverWidth,
        leftoverHeight,
    } = props;
    const cells: Cell[][] = [];

    for (let y=0; y<= cellsTall; y++) {
        const row: Cell[] = [];
        for (let x=0; x<= cellsWide; x++) {

            const xpos = (x*minCellSize)+leftoverWidth;
            const ypos = (y*minCellSize)+leftoverHeight;
            const graphic = new Graphics()
                .rect(xpos, ypos, minCellSize-1, minCellSize-1)
                .fill('black');
            const state = Math.round(Math.random()) as 1|0;
            row.push({
                graphics: graphic,
                state: state,
            });
            app.stage.addChild(graphic);
        }
        cells.push(row);
    }
    return cells;
}