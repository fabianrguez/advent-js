import maxProfit from './challenge-8';

describe('[challenge-8] - Criptocurrency madness', () => {
  test('Bitcoin max profif', () => {
    const profit = maxProfit([39, 18, 29, 25, 34, 32, 5]);
    expect(profit).toBe(16);
  });
  test('Etherum max profif', () => {
    const profit = maxProfit([10, 20, 30, 40, 50, 60, 70]);
    expect(profit).toBe(60);
  });
  test('Dogecoin max profif', () => {
    const profit = maxProfit([18, 15, 12, 11, 9, 7]);
    expect(profit).toBe(-1);
  });
  test('DogeDash max profif', () => {
    const profit = maxProfit([3, 3, 3, 3, 3]);
    expect(profit).toBe(-1);
  });
});
