import missingReindeer from './challenge-14';

describe('[challenge-14] - In search of the lost reindeer', () => {
  test('[0, 2, 3], lost => 1', () => {
    const lost = missingReindeer([0, 2, 3]);
    expect(lost).toBe(1);
  });
  test('[5, 6, 1, 2, 3, 7, 0], lost => 4', () => {
    const lost = missingReindeer([5, 6, 1, 2, 3, 7, 0]);
    expect(lost).toBe(4);
  });
  test ('', () => {
    const lost = missingReindeer([0, 1]);
    expect(lost).toBe(2);
  })
});
