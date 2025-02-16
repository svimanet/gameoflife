import type { Cell } from "./types";

export const lifecycle = (cells: Cell[][]) => {
  cells.forEach((cellRow, y) => {
    cellRow.forEach((cell, x) => {

      let aliveNeighbors = 0;
      // Iterate through 8 possible neighbor positions
      for (let o1 = -1; o1 <= 1; o1++) {
        for (let o2 = -1; o2 <= 1; o2++) {
          if (o1 === 0 && o2 === 0) continue; // Skip the cell itself
          const ny = y + o1, nx = x + o2;
          if (ny >= 0 && ny < cells.length && nx >= 0 && nx < cellRow.length) {
            aliveNeighbors += cells[ny][nx].state; // Directly count live neighbors
          }
        }
      }

      // Apply Rules
      cell.nextState =
        (cell.state === 1 && (aliveNeighbors === 2 || aliveNeighbors === 3)) ||
        (cell.state === 0 && aliveNeighbors === 3) ? 1 : 0;
  });
});

cells.forEach((cellRow) => {
  cellRow.forEach((cell) => {
    const changes = cell.state !== cell.nextState;
    if (changes) {
      if (cell.nextState === 1) {
        cell.graphics.visible = true;
      } else {
        cell.graphics.visible = false;
      }
      cell.state = cell.nextState || 0;
    }
  })
});
}