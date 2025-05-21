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

