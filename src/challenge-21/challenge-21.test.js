import canCarry from './challenge-21';

describe('[challenge-21] - The route of gifts', () => {
  test('Capacity 4, route => [[2, 5, 8], [3, 6, 10]]', () => {
    const isPossible = canCarry(4, [
      [2, 5, 8],
      [3, 6, 10],
    ]);
    expect(isPossible).toBeFalsy();
  });

  test('Capacity 3, route => [[1, 1, 5], [2, 2, 10]]', () => {
    const isPossible = canCarry(3, [
      [1, 1, 5],
      [2, 2, 10],
    ]);
    expect(isPossible).toBeTruthy();
  });

  test('Capacity 3, route => [[2, 1, 5],[3, 5, 7]]', () => {
    const isPossible = canCarry(3, [
      [2, 1, 5],
      [3, 5, 7],
    ]);
    expect(isPossible).toBeTruthy();
  });

  test('Capacity 4, route => [[2, 3, 8],[2, 5, 7]]', () => {
    const isPossible = canCarry(4, [
      [2, 3, 8],
      [2, 5, 7],
    ]);
    expect(isPossible).toBeTruthy();
  });

  test('Capacity 1, route => [[2, 3, 8]]', () => {
    const isPossible = canCarry(1, [[2, 3, 8]]);
    expect(isPossible).toBeFalsy();
  });

  test('Capacity 2, route => [[1, 2, 4], [2, 3, 8]]', () => {
    const isPossible = canCarry(2, [
      [1, 2, 4],
      [2, 3, 8],
    ]);
    expect(isPossible).toBeFalsy();
  });

  test('Capacity 11, route => [[3, 2, 7],[3, 7, 9],[8, 3, 9]]', () => {
    const isPossible = canCarry(11, [
      [3, 2, 7],
      [3, 7, 9],
      [8, 3, 9],
    ]);
    expect(isPossible).toBeTruthy();
  });

  test('Capacity 9999, route => [v]', () => {
    const isPossible = canCarry(9999, [
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
      [4, 5, 6],
      [5, 6, 7],
      [6, 7, 8],
    ]);
    expect(isPossible).toBeTruthy();
  });

  test('Capacity 5, route => [[1, 2, 3],[2, 3, 4],[3, 4, 5],[4, 5, 6],[5, 6, 7],[6, 7, 8]]', () => {
    const isPossible = canCarry(5, [
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
      [4, 5, 6],
      [5, 6, 7],
      [6, 7, 8],
    ]);
    expect(isPossible).toBeFalsy();
  });
});
