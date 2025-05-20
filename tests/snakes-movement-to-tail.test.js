import snakes_movement_to_tail from '../snakes-movement-to-tail.js';

// Define baseState that your tests reference
const baseState = {
  turn: 1,
  you: {
    body: [{ x: 5, y: 5 }, { x: 5, y: 4 }], // Head at (5,5), neck at (5,4)
    length: 3
  },
  board: {
    width: 11,
    height: 11,
    snakes: [],
    food: [{x:0, y:0}]
  }
};


  test('should always return a move object', () => {
    const result = snakes_movement_to_tail(baseState);
    expect(result).toBeDefined();
    expect(result).toEqual({
      move: expect.stringMatching(/^(up|down|left|right)$/)
    });
  });

  test('should return down when no safe moves', () => {
    const gameState = {
      ...baseState,
      you: {
        ...baseState.you,
        body: [{x: 0, y: 0}, {x: 0, y: 1}]
      },
      board: {
        ...baseState.board,
        snakes: [{
          body: [{x: 1, y: 0}, {x: 1, y: 1}],
          length: 3
        }]
      }
    };
    const result = snakes_movement_to_tail(gameState);
    expect(result).toEqual({ move: 'down' });
  });

// Add to your test file
test('should handle safe tail movement', () => {
  const gameState = {
    ...baseState,
    board: {
      ...baseState.board,
      snakes: [{
        body: [{x: 6, y: 5}, {x: 6, y: 4}, {x: 6, y: 3}], // Tail at (6,3)
        length: 3
      }],
      food: [] // No food means tail is safe
    }
  };
  const result = snakes_movement_to_tail(gameState);
  expect(['right', 'down', 'up']).toContain(result.move); // Should move toward tail
});

test('should handle unsafe tail when snake is eating', () => {
  const gameState = {
    ...baseState,
    board: {
      ...baseState.board,
      snakes: [{
        body: [{x: 6, y: 5}, {x: 6, y: 4}, {x: 6, y: 3}],
        length: 3
      }],
      food: [{x: 6, y: 5}] // Snake is eating - tail unsafe
    }
  };
  const result = snakes_movement_to_tail(gameState);
  expect(result.move).not.toBe('right'); // Should avoid the tail
});

test('should handle corner positions', () => {
  const gameState = {
    ...baseState,
    you: {
      ...baseState.you,
      body: [{x: 0, y: 0}, {x: 0, y: 1}] // Top-left corner
    }
  };
  const result = snakes_movement_to_tail(gameState);
  expect(['right', 'down']).toContain(result.move); // Only valid moves
});
