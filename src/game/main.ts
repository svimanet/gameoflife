import { Application } from 'pixi.js';
import { makeGrid } from './grid';
import { createCells } from './cells';
import { lifecycle } from './lifecycle';

const canvasContainer = document.getElementById('gof-canvas-container') as HTMLDivElement;

const width = canvasContainer.clientWidth;
const height = canvasContainer.clientHeight;

const minCellSize = 5;
const cellsWide = Math.floor(width / minCellSize);
const cellsTall = Math.floor(height / minCellSize);

const leftoverWidth = width - (cellsWide*minCellSize);
const leftoverHeight = height - (cellsTall*minCellSize);
const app = new Application();
let exit = false;

// Async Immediatley Invoked Function Expression (AIIFE)
( async () => {
    await app.init({
        background: '#333333',
        resizeTo: canvasContainer
    });

    app.stage.eventMode = 'static';
    app.stage.hitArea = app.screen;

    // Render visual aid grid
    makeGrid({
        width,
        height,
        cellsWide,
        cellsTall,
        minCellSize,
        leftoverWidth,
        leftoverHeight,
        app
    });

    const cells = createCells({
        app,
        cellsTall,
        cellsWide,
        minCellSize,
        leftoverWidth,
        leftoverHeight
    });

    canvasContainer.appendChild(app.canvas as HTMLCanvasElement);

    setInterval(() => {
        lifecycle(cells);
    }, 100);
})();

