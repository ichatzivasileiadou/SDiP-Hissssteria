import floodFill from '../floodFill/floodFill.js'; 
// test 1
test('basic flood fill test', () => {
  const grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  floodFill(grid, 1, 1, 1);
  const expected = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];
  expect(grid).toEqual(expected);
});

//test 2
test('only fills connected area and stops at different colors', () => {
  const grid = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 0, 0],
  ];
  floodFill(grid, 0, 0, 9);
  const expected = [
  [9, 1, 9],
  [9, 1, 9],
  [9, 9, 9],
];

  expect(grid).toEqual(expected);
});
//test 3
test('does nothing if newColor is the same as original color', () => {
  const grid = [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2],
  ];
  floodFill(grid, 1, 1, 2); 
  const expected = [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2],
  ];
  expect(grid).toEqual(expected);
});
//test 4
test('does not fill diagonally connected cells', () => {
  const grid = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ];
  floodFill(grid, 1, 1, 9); 
  const expected = [
    [1, 0, 1],
    [0, 9, 0],
    [1, 0, 1],
  ];
  expect(grid).toEqual(expected);
});
//test 5
test('fills only one isolated cell with no neighbors', () => {
  const grid = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  floodFill(grid, 1, 1, 9);
  const expected = [
    [1, 1, 1],
    [1, 9, 1],
    [1, 1, 1],
  ];
  expect(grid).toEqual(expected);
});
//test 6 
test('fills a narrow winding path correctly', () => {
  const grid = [
    [0, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 0, 0],
  ];
  floodFill(grid, 0, 0, 9);
  const expected = [
  [9, 1, 1, 1, 1],
  [9, 9, 1, 9, 9],
  [1, 9, 1, 9, 1],
  [1, 9, 9, 9, 1],
  [1, 1, 1, 9, 9],
];
  expect(grid).toEqual(expected);
});

//test 7
test('counts filled area in a 3x3 grid with all 0s', () => {
  const grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const startX = 1;
  const startY = 1;
  const fillValue = 9;

  const filledCount = floodFill(grid, startX, startY, fillValue);

  const expectedGrid = [
    [9, 9, 9],
    [9, 9, 9],
    [9, 9, 9],
  ];

  expect(grid).toEqual(expectedGrid);
  expect(filledCount).toBe(9); 
});
