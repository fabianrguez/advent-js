import getCoins from './challenge-10';

describe('[challenge-10] - The change machine', () => {
  test('51', () => {
    const change = getCoins(51);
    expect(change).toStrictEqual([1, 0, 0, 0, 0, 1]);
  });
  test('3', () => {
    const change = getCoins(3);
    expect(change).toStrictEqual([1, 1, 0, 0, 0, 0]);
  });
  test('5', () => {
    const change = getCoins(5);
    expect(change).toStrictEqual([0, 0, 1, 0, 0, 0]);
  });
  test('100', () => {
    const change = getCoins(100);
    expect(change).toStrictEqual([0, 0, 0, 0, 0, 2]);
  });
});
