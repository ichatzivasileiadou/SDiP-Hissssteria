/**
 * @file Provides functions for snake game strategy focusing on targeting smaller snakes.
 * @module snakeStrategies
 */
/** 
 * Returns the nearest smaller snake's head position using Manhattan distance.
 * Returns null if no valid snake is found.
 * @function  kill_small_snakes
 * @param {Object} gameState - The current game state object.
 * @param {Object} gameState.board - The game board information.
 * @param {Array} gameState.board.snakes - Array of snake objects in the game.
 * @param {Object} gameState.you - Information about your snake.
 * @param {Array} gameState.you.body - Array of body segments of your snake.
 * @param {string} gameState.you.id - Unique identifier for your snake.
 * @returns {Object|null} The nearest smaller snake object or null if none found.
 *  * Determines the best move to chase the nearest smaller snake.
 * Returns a move direction (defaults to 'up' if no target found).
 * @param {Object} gameState - The current game state object.
 * @param {Object} gameState.you - Information about your snake.
 * @param {Object} gameState.you.head - Head position of your snake.
 * @returns {Object} An object with the recommended move direction.
 * @property {string} move - The direction to move ('up', 'down', 'left', or 'right').
 */


// Returns the snake that its head is closest to my snakes head and the other snakes head is smaller than mine

function manhattan_food(gameState) {
    if (!gameState?.board?.food?.length) return null; 

    const myHead = gameState.you.body[0];
    let minimum_distance = Infinity; 
    let minimum_food = null;

    gameState.board.food.forEach(food => {
        const distance = Math.abs(myHead.x - food.x) + Math.abs(myHead.y - food.y);
        if (distance < minimum_distance) {
            minimum_distance = distance; 
            minimum_food = food;
        }
    });

    return minimum_food;
}


// Locate the nearest (with manhattan distance) and smaller snake closest to my snake and 
// return json with key "move" and value "up","left","right","down".
// so my head can move to the closest snakes head.


function kill_small_snakes(gameState) {
  const myHead = gameState.you.head;
  
  const otherHead = manhattan_nearest_snake(gameState).body[0]

  let move = 'up'; // default

  if (otherHead) {
    if (otherHead.x > myHead.x) {
      move = 'right';
    } else if (otherHead.x < myHead.x) {
      move = 'left';
    } else if (otherHead.y > myHead.y) {
      move = 'up';
    } else if (otherHead.y < myHead.y) {
      move = 'down';
    }
  }

  return {
    move: move,
  };
}

export{kill_small_snakes}