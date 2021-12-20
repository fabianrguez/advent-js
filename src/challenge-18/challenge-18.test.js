import fixFiles from './challenge-18';

describe('[challenge-18] - The Santa Claus operting system', () => {
  test('files [photo, postcard, photo, photo, video]', () => {
    const fixedFiles = fixFiles(['photo', 'postcard', 'photo', 'photo', 'video']);
    expect(fixedFiles).toStrictEqual(['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']);
  });

  test('files [file, file, file, game, game]', () => {
    const fixedFiles = fixFiles(['file', 'file', 'file', 'game', 'game']);
    expect(fixedFiles).toStrictEqual(['file', 'file(1)', 'file(2)', 'game', 'game(1)']);
  });

  test('files [file, file(1), icon, icon(1), icon(1)]', () => {
    const fixedFiles = fixFiles(['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']);
    expect(fixedFiles).toStrictEqual(['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']);
  });
  
  test('files [a, a, aa, a, a, a, aa]', () => {
    const fixedFiles = fixFiles(['a', 'a', 'aa', 'a', 'a', 'a', 'aa']);
    expect(fixedFiles).toStrictEqual(['a', 'a(1)', 'aa', 'a(2)', 'a(3)', 'a(4)', 'aa(1)']);
  });
});
