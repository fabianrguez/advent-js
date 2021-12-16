import createXmasTree from './challenge-4';

describe("[challenge-4 - It's time to put Christmas in the house", () => {
  test('Tree height : 5', () => {
    const xmasTree = createXmasTree(5);
    expect(xmasTree).toBe([
      '____*____',
      '___***___',
      '__*****__',
      '_*******_',
      '*********',
      '____#____',
      '____#____',
    ].join('\n'));
  });
  test('Tree height : 3', () => {
    const xmasTree = createXmasTree(3);
    expect(xmasTree).toBe([
      '__*__',
      '_***_',
      '*****',
      '__#__',
      '__#__',
    ].join('\n'));
  });
});
