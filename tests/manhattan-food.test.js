import manhattan_food from '../manhattan-food.js';

describe('manhattan_food function', () => {
  // Storing thee original global state 
  let originalFoodPositions;

  // Showcasing a proper set up clean state before each test
  beforeEach(() => {
    originalFoodPositions = global.foodPositions;
    global.foodPositions = new Map();
  });

  // Restore original state after each test
  afterEach(() => {
    global.foodPositions = originalFoodPositions;
  });

  test('Finds the closest food', () => {
    const gameState = {
      you: { body: [{x: 0, y: 0}] },
      board: { 
        // Placing two different food items from coordinate 
        food: [
          {x: 1, y: 1},  // The distance from snake (Manhattan distance)
          {x: 5, y: 5}   // The distance from snake (Manhattan distance)
        ] 
      }
    };
    const result = manhattan_food(gameState);
    
    //  Clearfy the closest food 
    expect(result).toEqual({x: 1, y: 1});
    
    // State the closest food returned both (1,1) 
    // and (5,5) are tracked in global food positions
    expect(global.foodPositions.has('1,1')).toBe(true);
    expect(global.foodPositions.has('5,5')).toBe(true);
  });

  test('Handles ties by returning first closest food', () => {
    const gameState = {
      you: { body: [{x: 0, y: 0}] },
      board: { 
        food: [
          {x: 0, y: 1},  // Distance = 1
          {x: 1, y: 0}   // Distance = 1
        ]
      }
    };
    const result = manhattan_food(gameState);

    // when distance tie, the fist food tha appears in
    // the array should be returned
    expect(result).toEqual(gameState.board.food[0]);
  });

  test('Returns null when no food exists', () => {
    const gameState = {
      you: { body: [{x: 0, y: 0}] },
      board: { food: [] }
    };
    //checks if no food is found return null(empty)
    expect(manhattan_food(gameState)).toBeNull();
    //checks if there is no food than no positions 
    // are stored globally
    expect(global.foodPositions.size).toBe(0);
  });

 });


