import sumPairs from './challenge-6';

describe('[challenge-6] - Ending final exams', () => {
  test('[3, 5, 7, 2] to sum 10', () => {
    const sum = sumPairs([3, 5, 7, 2], 10);
    expect(sum).toStrictEqual([3, 7]);
  });
  test('[-3, -2, 7, -5] to sum 10', () => {
    const sum = sumPairs([-3, -2, 7, -5], 10);
    expect(sum).toBeNull();
  });
  test('[6, 7, 1, 2] to sum 8', () => {
    const sum = sumPairs([6, 7, 1, 2], 8);
    expect(sum).toStrictEqual([6, 2]);
  });
  test('[2, 2, 3, 1] to sum 4', () => {
    const sum = sumPairs([2, 2, 3, 1], 4);
    expect(sum).toStrictEqual([2, 2]);
  });
  test('[0, 2, 2, 3, -1, 1, 5] to sum 6', () => {
    const sum = sumPairs([0, 2, 2, 3, -1, 1, 5], 6);
    expect(sum).toStrictEqual([1, 5]);
  });
});
