import head_to_head_mov from '../head-to-head-mov.js';

test('The snake has to avoid larger snakes', () => {
    const gameState = {
      you: {
        length: 3,
        body: [{x: 0, y: 0 }],
        health: 100
       },
       board:{ 
        snakes:[
          { length: 5,body:[{x: 0, y: 1}], health: 100}]
         
        }
      };
      // checks if opponent is larger, than return false  
    expect(head_to_head_mov(gameState)).toBe(false);
});

test('Can challange snakes with smaller length', () => {
  const gameState = {
    you: {
      length: 5,
      body: [{x: 0, y: 0 }],
      health: 100
     },
     board:{ 
      snakes:[{ length: 3, body:[{x: 0, y: 1}, {x: 0, y: 2}], health: 100}],
     
    }  
  };
  // check if our snake is larger and if so,
  // it can challangesnakes with smaller length 
  expect(head_to_head_mov(gameState)).toBe(true);
});




