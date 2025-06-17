/**
 * @file Provides functions for snake game strategy focusing on targeting smaller snakes.
 * @module snakeStrategiess
 */

/**
     * The Flood fill performs operations on a 2D grid 
     * beginning with (x,y) coordinates.
     * Does the changes of all connected same-color cells to
     * new colors and returns the number of cells changed, using 
     * Depth-First Search (DFS).
     * Returns 0 in case if the new color matches the original one.
     * @function floodFill 
     * @param {Array.<Array<number|string>>} grid - element represntation of a color
     * with 2D array.
     * @param {number} x - The initial column index (x-coordinate).
     * @param {number} y - The initial row index (y-coordinate).
     * @param {number} colorTarget - The color value we want to replace
     * @param {number|string} newColor - The new color value to 
     * replacee the original region with. 
     * @returns {number[][]} - The number of cells that were changed 
     * during the operation.
     * 
     * @example
     * // Given the grid below:
     *  const grid = [
     *     [1, 1, 0],
     *     [1, 0, 1],  
     *     [0, 1, 1]  
     *  ];
     * // Calling floodFill(grid, 0, 0, 2) does the change of the
     * region of 1s starting at (0,0) to 2 and returns the count of cells 3.
     * // usage demonstation
     * const changedCount = floodFill(grid, 0, 0, 2);
     * console.log(changedCount); The return: 3
     * 
*/

function floodFill(grid, x, y, newColor) {
  const originalColor = grid[y][x];
  if (originalColor === newColor) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  function dfs(i, j) {
    if (
      i < 0 || i >= rows ||
      j < 0 || j >= cols ||
      grid[i][j] !== originalColor
    ) return;

    grid[i][j] = newColor;
    count++;

    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }

  dfs(y, x);
  return count;
}

export default floodFill;

