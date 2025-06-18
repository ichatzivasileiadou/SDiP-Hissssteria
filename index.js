// Welcome to
// __________         __    __  .__                               __
// \______   \_____ _/  |__/  |_|  |   ____   ______ ____ _____  |  | __ ____
//  |    |  _/\__  \\   __\   __\  | _/ __ \ /  ___//    \\__  \ |  |/ // __ \
//  |    |   \ / __ \|  |  |  | |  |_\  ___/ \___ \|   |  \/ __ \|    <\  ___/
//  |________/(______/__|  |__| |____/\_____>______>___|__(______/__|__\\_____>
//
// This file can be a nice home for your Battlesnake logic and helper functions.
//
// To get you started we've included code to prevent your Battlesnake from moving backwards.
// For more info see docs.battlesnake.com
/**
 * Main module game implementation of the BatttelSnake
 * @module BatttelSnake
 * @author Hissssteria 
 * @version 1 - version of the Battelsnake
 * @see {@link https://docs.battlesnake.com} - API additional info
 * 
 * Specifies Battlesnakes's visual style and metadata
 * @function info - Defined function information
 * @returns {Object} - Battlesnake configuration
 * @property {string} apiversion  - API version of the Battelsnake game
 * @property {string} author - Name of the auther
 * @property {string} color - The color (Hex:"25094a")
 * @property {string} head - Head apperance type ("all-seeing")
 * @property {string} tail -  Head apperance type ("cosmic-horror")
 * 
 * Beggining or "start" called of a new game
 * @function start - The start of the game  
 * @param {Object} gameState - The game's current state
 * @param {Object} gameState.board - Board dimenstions of the game and snakes
 * @param {Object} gameState.you - Our snakes information
 * 
 * End called when the game finishes
 * @function end - The start of the game  
 * @param {Object} gameState - Game state finalized
 * @param {Object} gameState.board - Final board state and dimentions
 * @param {Object} gameState.you - Final state of our snakee
 * 
 * Print a colored board representation to console for easier debugging 
 * @function printBoard - Display the board game 
 * @param {Object} gameState - Game state 
 * @param {number} gameState.board.width - The width of the board
 * @param {number} gameState.board.height - The height of the board
 * @param {Array.<Object>} gameState.board.food - Food positions in array
 * @param {Array.<Object>} gameState.board.snakes -  Snakes array
 * 
 * Decides the next move applying flood-fill for safety checks
 * @function move - Dicides the next move 
 * @param {Object} gameState - Game state 
 * @return {Object} - Decition to move 
 * @property {string} move - Direction ("up","down","left","right")
 * 
 * Clone the board to analyis flood-fill
 * @function cloneBoard - Board clone 
 * @param {Object} gameState - Game state 
 * @return {number[][]} - The 2D array distinguishing whith 0=empty, 1= occupied
 *   
 * Server to start the Battlesnake game with config handlers
 * @typedef {Object} BattlesnakeHandlers - server definition 
 * @property {Function} info - Metadate of snake
 * @property {Function} start - Handler of game start
 * @property {Function} move - Movement logic
 * @property {Function} end -  Handler of game end
 * 
 */

import runServer from './server.js';
import chalk from 'chalk';
import {manhattan_food} from './manhattan-food.js';
import {head_to_head_mov} from './head-to-head-mov.js';
import {snakes_movement_to_tail} from './snakes-movement-to-tail.js';
import floodFill from './floodFill/floodFill.js';
import {kill_small_snakes} from './kill-small-snakes.js'

// info is called when you create your Battlesnake on play.battlesnake.com
// and controls your Battlesnake's appearance
// TIP: If you open your Battlesnake URL in a browser you should see this data
//
function info() {
  console.log('INFO');

  return {
    apiversion: '1',
    author: 'Hissssteria',
    color: '#25094a', 
    head: 'all-seeing', 
    tail: 'cosmic-horror',  
  };
}

// start is called when your Battlesnake begins a game
function start(gameState) {
  console.log('GAME START');
}

// end is called when your Battlesnake finishes a game
function end(gameState) {
  console.log('GAME OVER\n');
}

function printBoard(gameState) {

  // Get the board dimensions from the game state
  const boardWidth = gameState.board.width;
  const boardHeight = gameState.board.height;

  // Create an empty board using a 2D array, initially filled with dots
  let board = Array.from({ length: boardHeight }, () => Array(boardWidth).fill(chalk.hex('#845ec2').bold('.')));

  // Create a Map to track the food positions
  const foodPositions = new Map();
  gameState.board.food.forEach(food => {
    foodPositions.set(`${food.x},${food.y}`, chalk.bgHex('#ff9671')('F')); // Mark food with 'F' at the position (x,y)
  });

  // Place food on the board
  foodPositions.forEach((symbol, position) => {
    const [x, y] = position.split(',').map(Number);
    board[y][x] = symbol;
  });

  // Place snakes on the board
  gameState.board.snakes.forEach(snake => {
    
    const head = snake.body[0];
    board[head.y][head.x] = chalk.black.bgHex('#d65db1')('H'); // Mark the head with 'H'

    // The rest of the body is marked as 'B'
    for (let i = 1; i < snake.body.length; i++) {
      const bodyPart = snake.body[i];

      //When the head and the body overlap, both are marked as 'H', else the body is marked as 'B'
      if ((head.y == bodyPart.y) && (head.x == bodyPart.x)) {
        board[bodyPart.y][bodyPart.x] = chalk.black.bgHex('#d65db1')('H'); 
      } else {
        board[bodyPart.y][bodyPart.x] = chalk.black.bgHex('#d65db1')('B'); 
      }
      
    }
  });

  console.log(chalk.hex('#f9f871').bold('Board:'));
  for (let y = (boardHeight - 1); y >= 0; y--) {
    for (let x = 0; x < boardWidth; x++) {
      process.stdout.write(chalk.bgHex('#f9f871').bold(` ${board[y][x]} `));
    }
    process.stdout.write(('\n'));
  }
};

// move is called on every turn and returns your next move
// Valid moves are "up", "down", "left", or "right"
// See https://docs.battlesnake.com/api/example-move for available data

function move(gameState) {

  console.log(gameState); 
  printBoard(gameState); 

  let isMoveSafe = {
    up: true,
    down: true,
    left: true,
    right: true
  };

  // We've included code to prevent your Battlesnake from moving backwards
  const myHead = gameState.you.body[0];
  const myNeck = gameState.you.body[1];

  if (myNeck.x < myHead.x) {        // Neck is left of head, don't move left
    isMoveSafe.left = false;

  } else if (myNeck.x > myHead.x) { // Neck is right of head, don't move right
    isMoveSafe.right = false;

  } else if (myNeck.y < myHead.y) { // Neck is below head, don't move down
    isMoveSafe.down = false;

  } else if (myNeck.y > myHead.y) { // Neck is above head, don't move up
    isMoveSafe.up = false;
  }

  // boardWidth = gameState.board.width;
  // boardHeight = gameState.board.height;

  const boardWidth=gameState.board.width;
  const boardHeight = gameState.board.height;

  if(myHead.x===0){
      isMoveSafe.left=false;      //check left edge
  }

  if(myHead.x===boardWidth-1){
      isMoveSafe.right=false;    //check right edge
  }

  if(myHead.y === 0) {
      isMoveSafe.down = false;  //check bottom edge
  }

  if(myHead.y === boardHeight - 1) {
      isMoveSafe.up = false;          //check top edge
  } 

  // myBody = gameState.you.body;

  // Step 2 - Prevent self-collision (explicit coordinate checks)
  const myBody = gameState.you.body;

  // Check all directions against body segments
  isMoveSafe.right = isMoveSafe.right && !myBody.some(segment =>
    segment.x === myHead.x + 1 && segment.y === myHead.y
  );
  isMoveSafe.left = isMoveSafe.left && !myBody.some(segment =>
    segment.x === myHead.x - 1 && segment.y === myHead.y
  );
  isMoveSafe.up = isMoveSafe.up && !myBody.some(segment =>
    segment.y === myHead.y + 1 && segment.x === myHead.x
  );
  isMoveSafe.down = isMoveSafe.down && !myBody.some(segment =>
    segment.y === myHead.y - 1 && segment.x === myHead.x
  );

  // opponents = gameState.board.snakes;

  gameState.board.snakes.forEach((snake) => {
    snake.body.forEach((body) => {
      if (body.x === myHead.x + 1 && body.y === myHead.y) {
        isMoveSafe.right = false;
      } else if (body.x === myHead.x - 1 && body.y === myHead.y){
        isMoveSafe.left = false;
      } else if (body.x === myHead.x && body.y === myHead.y + 1){
        isMoveSafe.up = false;
      } else if (body.x === myHead.x && body.y === myHead.y - 1){
        isMoveSafe.down = false;
      }
    });
  });

  // Are there any safe moves left?
  const safeMoves = Object.keys(isMoveSafe).filter(key => isMoveSafe[key]);
  if (safeMoves.length == 0) {
    console.log(`MOVE ${gameState.turn}: No safe moves detected! Moving down`);
    return { move: 'down' };
  }

 // Use flood fill to choose the move with the most reachable space
   function cloneBoard(gameState) {
     const { width, height } = gameState.board;
     const board = Array.from({ length: height }, () => Array(width).fill(0));
     gameState.board.snakes.forEach(snake => {
       snake.body.forEach(segment => {
         board[segment.y][segment.x] = 1;
       });
     });
     return board;
   }
 
   const directions = {
     up: { x: 0, y: 1 },
     down: { x: 0, y: -1 },
     left: { x: -1, y: 0 },
     right: { x: 1, y: 0 }
   };
 
   let bestMove = null;
   let bestScore = -1;
 
   safeMoves.forEach(move => {
     const offset = directions[move];
     const newX = myHead.x + offset.x;
     const newY = myHead.y + offset.y;
 
     if (newX < 0 || newX >= boardWidth || newY < 0 || newY >= boardHeight) return;
 
     const testGrid = cloneBoard(gameState);
 
     if (testGrid[newY][newX] !== 0) return;
 
     const score = floodFill(testGrid, newX, newY, 2);
 
     if (score > bestScore) {
       bestScore = score;
       bestMove = move;
     }
   });
 
   if (!bestMove) {
     bestMove = safeMoves[0];
   }
 
   console.log(`MOVE ${gameState.turn}: ${bestMove} (flood fill score: ${bestScore})`);
   return { move: bestMove };
 
 }


runServer({
  info: info,
  start: start,
  move: move,
  end: end
});
