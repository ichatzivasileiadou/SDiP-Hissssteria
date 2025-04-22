/**
     * Calculates the manhattan distance between snake's head and each food,
     * Finds the minimum manhattan distance and return the food that is in the minimum distance. 
*/

function manhattan_food(gameState){
    const myHead = gameState.you.body[0];
    let minimum_distance=100000;
    let minimum_food=null;
    gameState.board.food.forEach(food => {
        foodPositions.set(`${food.x},${food.y}`, chalk.bgHex('#ff9671')('F')); // Mark food with 'F' at the position (x,y)
        let manhattan_distance=Math.abs(myHead.x-food.x)+Math.abs(myHead.y-food.y); //The difference of the absolute values ​​of x plus the difference of the absolute values ​​of y of the two points(The head and each food are the two points)
        if(manhattan_distance<minimum_distance){
            minimum_food=food;
        }
    });

    return minimum_food;
}

export {manhattan_food};
