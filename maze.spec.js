const Maze = require('./maze');


// mazes are provided.  Write your own tests!


const SIMPLE_MAZE = [
  ['S', '0', '1'],
  ['1', '0', '1'],
  ['1', '0', 'E'],
];

const MODERATE_MAZE = [
  ['S', '0', '0', '1', 'E'],
  ['1', '0', '1', '1', '0'],
  ['1', '0', '0', '1', '0'],
  ['0', '0', '1', '0', '0'],
  ['1', '0', '0', '0', '0'],
];

const LARGE_MAZE = [
  ['S','1','1','0','1','1','0','0','0','1','1','1','1'],
  ['1','0','1','1','1','0','1','1','1','1','0','0','1'],
  ['0','0','0','0','1','0','1','0','1','0','1','0','0'],
  ['1','1','1','0','1','1','1','0','1','0','1','1','1'],
  ['1','0','1','0','0','0','0','1','1','1','0','0','1'],
  ['1','0','1','1','1','1','1','1','0','1','1','1','1'],
  ['1','0','0','0','0','0','0','0','0','0','0','0','0'],
  ['1','1','1','1','1','1','1','1','1','1','1','1','E'],
];

describe('Maze business class can', () => {
  test('return an instance of the Maze class', () => {
    const maze = new Maze();
    expect(maze.constructor.name).toEqual('Maze');
  });

  test('solve returns the solution', () => {
    const maze = new Maze(SIMPLE_MAZE);
    expect(maze.solve()).toEqual('you wish!');
  });

  xtest('skip a test marked with "xtest" instead of "test"', () => {
    expect(null).toEqual(null);
  });
});
