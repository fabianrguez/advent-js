import checkSledJump from './challenge-15';

describe('[challenge-15] - The perfect jump', () => {
  test('up and down [1, 2, 3, 2, 1]', () => {
    const isCorrect = checkSledJump([1, 2, 3, 2, 1]);
    expect(isCorrect).toBeTruthy();
  });
  test('up and down [0, 1, 0]', () => {
    const isCorrect = checkSledJump([0, 1, 0]);
    expect(isCorrect).toBeTruthy();
  });
  test('repeating jump [2, 4, 4, 6, 2]', () => {
    const isCorrect = checkSledJump([2, 4, 4, 6, 2]);
    expect(isCorrect).toBeFalsy();
  });
  test('up and down [0, 1000, 1]', () => {
    const isCorrect = checkSledJump([0, 1000, 1]);
    expect(isCorrect).toBeTruthy();
  })
  test('just up [1, 2, 3]', () => {
    const isCorrect = checkSledJump([1, 2, 3]);
    expect(isCorrect).toBeFalsy();
  })
});
