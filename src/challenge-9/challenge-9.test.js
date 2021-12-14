import groupBy from './challenge-9';

describe('[challenge-9] - Automatically grouping things together', () => {
  test('No groupBy option passed', () => {
    const grouped = groupBy([6.1, 4.2, 6.3]);
    expect(grouped).toStrictEqual([6.1, 4.2, 6.3]);
  });
  test('By Math.floor [6.1, 4.2, 6.3]', () => {
    const grouped = groupBy([6.1, 4.2, 6.3], Math.floor);
    expect(grouped).toStrictEqual({ 6: [6.1, 6.3], 4: [4.2] });
  });
  test('By length ["one", "two", "three"]', () => {
    const grouped = groupBy(['one', 'two', 'three'], 'length');
    expect(grouped).toStrictEqual({ 3: ['one', 'two'], 5: ['three'] });
  });
  test('By full year [1397639141184, 1363223700000]', () => {
    const grouped = groupBy([1397639141184, 1363223700000], (timestamp) => new Date(timestamp).getFullYear());

    expect(grouped).toStrictEqual({ 2013: [1363223700000], 2014: [1397639141184] });
  });
  test('By rating', () => {
    const grouped = groupBy(
      [
        { title: 'JavaScript: The Good Parts', rating: 8 },
        { title: 'Aprendiendo Git', rating: 10 },
        { title: 'Clean Code', rating: 9 },
      ],
      'rating'
    );
    expect(grouped).toStrictEqual({
      8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
      9: [{ title: 'Clean Code', rating: 9 }],
      10: [{ title: 'Aprendiendo Git', rating: 10 }],
    });
  });
});
