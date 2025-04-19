/**
 * Checks if my snake is close with other snakes, and if it is, we check that our length is bigger than them.
 * Returns true if there is no snake nearby, and if there is if our snakes length is bigger that the enemys length.
 * Returns false if there is a snake nearby and their length is >= than our snake.
 */

function head_to_head_mov(gameState) {
  const mySnake = gameState.you.body;

  gameState.board.snakes.forEach((snake) => {
    const isAdjacent =
      Math.abs(snake.body[0].x - mySnake[0].x) +
        Math.abs(snake.body[0].y - mySnake[0].y) ===
      1;
    if (isAdjacent) {
      if (mySnake.length < snake.body.length) {
        return false;
      }
    }
  });
  return true;
}
export { head_to_head_mov };
