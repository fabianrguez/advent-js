import learn from './challenge-19';

describe('[challenge-19] - What should be learn in Platzi?', () => {
  test('with 10 hours available, courses [2, 3, 8, 1, 4] ', () => {
    const chapters = learn(10, [2, 3, 8, 1, 4]);
    expect(chapters).toStrictEqual([0, 2]);
  });

  test('with 15 hours available, courses [2, 10, 4, 1]', () => {
    const chapters = learn(15, [2, 10, 4, 1]);
    expect(chapters).toStrictEqual([1, 2]);
  });

  test('with 25 hours available, courses [10, 15, 20, 5]', () => {
    const chapters = learn(25, [10, 15, 20, 5]);
    expect(chapters).toStrictEqual([0, 1]);
  });

  test('with 8 hours available, courses [8, 2, 1]', () => {
    const chapters = learn(8, [8, 2, 1]);
    expect(chapters).toStrictEqual([1, 2]);
  });

  test('with 8 hours available, courses [8, 2, 1, 4, 3]', () => {
    const chapters = learn(8, [8, 2, 1, 4, 3]);
    expect(chapters).toStrictEqual([3, 4]);
  });

  test('with 4 hours available, courses [10, 14, 20]', () => {
    const chapters = learn(4, [10, 14, 20]);
    expect(chapters).toBeNull();
  });

  test('with 5 hours available, courses [5, 5, 5]', () => {
    const chapters = learn(5, [5, 5, 5]);
    expect(chapters).toBeNull();
  });
});
