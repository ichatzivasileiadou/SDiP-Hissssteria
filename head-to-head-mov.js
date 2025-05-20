/**
     * Checks if my snake is close with other snakes, and if it is, we check that our length is bigger than them.
     * Returns true if there is no snake nearby, and if there is if our snakes length is bigger that the enemys length.
     * Returns false if there is a snake nearby and their length is >= than our snake.
*/

function head_to_head_mov(gameState){
    const myHead =gameState.you.body[0];
    const myLength = gameState.you.length;


    for (const snake of gameState.board.snakes) {
        // Skip comparing with ourselves
        if (snake.body[0].x === myHead.x && snake.body[0].y === myHead.y) {
            return;
        }
        const opponentHead = snake.body[0];
        const opponentLength = snake.length;
        // Check for manhattan distance=1
        const isAdjacent = Math.abs(opponentHead.x - myHead.x) + 
        Math.abs(opponentHead.y -  myHead.y) ===1;
        // If opponent is larger or equal to our snake return false
        if(isAdjacent){
            if(myLength <=opponentLength){
                return false;
            }
        }

    }
    return true;
}
export default head_to_head_mov;

