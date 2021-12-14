import wrapGifts from './challenge-13,';

describe('[challenge-13] - Wrap gifts with asterisks', () => {
  test('[]', () => {
    const wrappedGift = wrapGifts([]);
    expect(wrappedGift).toStrictEqual([]);
  });
  test('["📷", "⚽️"]', () => {
    const wrappedGift = wrapGifts(['📷', '⚽️']);
    expect(wrappedGift).toStrictEqual(['****', '*📷*', '*⚽️*', '****']);
  });
  test('["🏈🎸", "🎮🧸"]', () => {
    const wrappedGift = wrapGifts(['🏈🎸', '🎮🧸']);
    expect(wrappedGift).toStrictEqual(['******', '*🏈🎸*', '*🎮🧸*', '******']);
  });
  test('["📷"]', () => {
    const wrappedGift = wrapGifts(['📷']);
    expect(wrappedGift).toStrictEqual(['****', '*📷*', '****']);
  });
  test('["📷🏈🎸⚽️", "🎮🧸📱💻"]', () => {
    const wrappedGift = wrapGifts(['📷🏈🎸⚽️', '🎮🧸📱💻']);
    expect(wrappedGift).toStrictEqual(['**********', '*📷🏈🎸⚽️*', '*🎮🧸📱💻*', '**********']);
  });
});
