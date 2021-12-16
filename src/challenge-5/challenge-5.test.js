import daysToXmas from './challenge-5';

describe('[challenge-5] - Counting the days until christmas', () => {
  test('Dec 1, 2021', () => {
    const date1 = new Date('Dec 1, 2021');
    const daysTo = daysToXmas(date1);
    expect(daysTo).toBe(24);
  });
  test('Dec 24, 2021 00:00:01', () => {
    const date1 = new Date('Dec 24, 2021 00:00:01');
    const daysTo = daysToXmas(date1);
    expect(daysTo).toBe(1);
  });
  test('December 20, 2021 03:24:00', () => {
    const date1 = new Date('December 20, 2021 03:24:00');
    const daysTo = daysToXmas(date1);
    expect(daysTo).toBe(5);
  });
  test('Dec 31, 2021', () => {
    const date1 = new Date('Dec 31, 2021');
    const daysTo = daysToXmas(date1);
    expect(daysTo).toBe(-6);
  });
  test('Jan 1, 2022 23:59:59', () => {
    const date1 = new Date('Jan 1, 2022 23:59:59');
    const daysTo = daysToXmas(date1);
    expect(daysTo).toBe(-7);
  });
});
