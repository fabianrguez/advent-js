const DIRECTIONS = {
  left: (position) => [position[0], position[1] - 1],
  right: (position) => [position[0], position[1] + 1],
  up: (position) => [position[0] - 1, position[1]],
  down: (position) => [position[0] + 1, position[1]],
};

export default function canMouseEat(direction, game) {
  let mousePosition = [0, 0],
    foodPosition = [];
  for (let row = 0; row < game.length; row++) {
    for (let column = 0; column < game[row].length; column++) {
      if (game[row][column] === 'm') {
        mousePosition = [row, column];
      }
      if (game[row][column] === '*') {
        foodPosition = [...foodPosition, [row, column]];
      }
    }
  }
  const [expectedRow, expectedColumn] = DIRECTIONS[direction](mousePosition);
  return foodPosition.some(([row, column]) => row === expectedRow && column === expectedColumn);
}
