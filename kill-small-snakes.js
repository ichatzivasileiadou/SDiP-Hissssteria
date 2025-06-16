/*
Returns the snake that its head is closest to my snakes head and the other snakes head is smaller than mine
**/
function manhattan_nearest_snake(gameState){
    const myHead = gameState.you.body[0];
    let minimum_distance=100000;
    let minimum_snake=null;
    gameState.board.snakes.forEach(snake => {
        snakePositions.set(`${snake.body[0].x},${snake.body[0].y}`, chalk.bgHex('#ff9671')('F')); // Mark snake with 'F' at the position (x,y)
        let manhattan_distance=Math.abs(myHead.x-snake.body[0].x)+Math.abs(myHead.y-snake.body[0].y); //The difference of the absolute values of x plus the difference of the absolute values of y of the two points(The head and each snake are the two points)
        if(manhattan_distance<minimum_distance && snake.body.length<gameState.you.body.length){
            minimum_snake=snake;
        }
    });

    return minimum_snake;
}

/*
Locate the nearest (with manhattan distance) and smaller snake closest to my snake and 
return json with key "move" and value "up","left","right","down".
so my head can move to the closest snakes head.
**/

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