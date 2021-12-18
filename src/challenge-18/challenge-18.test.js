import fixFiles from './challenge-18';

describe('[challenge-18] - The Santa Claus operting system', () => {
  test('files [photo, postcard, photo, photo, video]', () => {
    const fixedFiles = fixFiles(['photo', 'postcard', 'photo', 'photo', 'video']);
    expect(fixedFiles).toStrictEqual(['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']);
  });
});
