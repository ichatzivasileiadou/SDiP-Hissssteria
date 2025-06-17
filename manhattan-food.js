/**
     * Calculates the manhattan distance between snake's head and each food,
     * Finds the minimum manhattan distance and return the food that is in the minimum distance. 
     * @function manhattan_distance
     * @param {Object} gameState - Game state current object
     * @param {Object} game.you - Details of our snake
     * @param {Array.<{x: number, y:number}>} - Coorditates of snakes body - gameState.you.body
     * @return {{x: number, y:number}|null} - Either closest food object or null if no food id found
     * @example 
     * Returns the closest food to the snake's head using Manhattan distance:
     * const gameState = {
     *  you: {body: [{x:0 , y:0}] },
     *  board: {food: [{x:1 , y:1}, {x:5 , y:5}] }
     * });
     * // Return: {x:1 , y:1}
*/
// By importing chalk we can use its funtions
//  to add colors and style 

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

export { manhattan_food };
