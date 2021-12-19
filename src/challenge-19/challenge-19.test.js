import learn from './challenge-18';

describe('[challenge-19] - What should be learn in Platzi?', () => {
  test('with 10 hours available, courses [2, 3, 8, 1, 4] ', () => {
    const chapters = learn(10, [2, 3, 8, 1, 4]);
    expect(chapters).toStrictEqual([0, 2]);
  });
});
