/**
     * Checks if a tail of onother snake is safe
*/

function isTailSafe(snake, food) {
    const tail = snake.body[snake.body.length - 1];
    const willEat = food.some(f => f.x === snake.body[0].x && f.y === snake.body[0].y);
    // If the snake is NOT eating, its tail will move away (safe to move into)
    return !willEat ? tail : null;
}
/**
     * Checks if my snake can move to a tail of another snake. if not returns a safe move.
     * if there is no safe move returns that the move is "down"
     * returns a json with key move and value the diraction (right,up,left,down)
*/

function snakes_movement_to_tail(gameState){
    let isMoveSafe = {
        up: true,
        down: true,
        left: true,
        right: true
    }; // json that I keep if my snake can move, initialy my snake can move to all directions

    const myHead = gameState.you.body[0];
    const myNeck = gameState.you.body[1];
    const boardWidth = gameState.board.width;
    const boardHeight = gameState.board.height;
    const myBody = gameState.you.body;
    const opponents = gameState.board.snakes;
    const food = gameState.board.food;

    // Avoid moving backwards (we are trying to avoid collision between the head and the neck of my snake)
    if (myNeck.x < myHead.x) {
        isMoveSafe.left = false;
    } else if (myNeck.x > myHead.x) {
        isMoveSafe.right = false;
    } else if (myNeck.y < myHead.y) {
        isMoveSafe.down = false;
    } else if (myNeck.y > myHead.y) {
        isMoveSafe.up = false;
    }

    // Avoid walls
    if (myHead.x === 0) isMoveSafe.left = false;
    if (myHead.x === boardWidth - 1) isMoveSafe.right = false;
    if (myHead.y === 0) isMoveSafe.down = false;
    if (myHead.y === boardHeight - 1) isMoveSafe.up = false;


    // Avoid self collision
    myBody.forEach(segment => {
        if (segment.x === myHead.x && segment.y === myHead.y + 1) isMoveSafe.up = false;
        if (segment.x === myHead.x && segment.y === myHead.y - 1) isMoveSafe.down = false;
        if (segment.x === myHead.x - 1 && segment.y === myHead.y) isMoveSafe.left = false;
        if (segment.x === myHead.x + 1 && segment.y === myHead.y) isMoveSafe.right = false;
    });


    // Avoid collisions with other snakes, except their tail if it's safe
    opponents.forEach(snake => {
        snake.body.forEach((segment, index) => {
            // Get snake's tail (last segment)
            const safeTail = isTailSafe(snake,food); //check if the snake will eat
            const isTail = index === snake.body.length - 1;

            // Skip checking this segment if it's the tail and considered safe

            if (isTail && safeTail) {
                // Can make movement 
                return;
            }

            if (segment.x === myHead.x && segment.y === myHead.y + 1) isMoveSafe.up = false;
            if (segment.x === myHead.x && segment.y === myHead.y - 1) isMoveSafe.down = false;
            if (segment.x === myHead.x - 1 && segment.y === myHead.y) isMoveSafe.left = false;
            if (segment.x === myHead.x + 1 && segment.y === myHead.y) isMoveSafe.right = false;
        });
    });

    // Are there any safe moves remaining?
    const safeMoves = Object.keys(isMoveSafe).filter(key => isMoveSafe[key]);
    if (safeMoves.length === 0) { //if there no safe moves remainin move down
        console.log(`MOVE ${gameState.turn}: No safe moves detected!`);
        return { move: 'down' };
    }
    for(const move of ['up', 'down', 'left','right']){ //there are safe move
            if(isMoveSafe[move]==true){
                return {move}; //move to the first correct position (up,down,left,right)
            }
        }
        return {move :'down'}
    }  
export default snakes_movement_to_tail;