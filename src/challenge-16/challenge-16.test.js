import decodeNumber from './challenge-16';

describe('[challenge-16] - Decoding numbers...', () => {
  it('[...]', () => {
    const message = decodeNumber('...');
    expect(message).toBe(3);
  });
  it('[.,]', () => {
    const message = decodeNumber('.,');
    expect(message).toBe(4);
  });
  it('[,.]', () => {
    const message = decodeNumber(',.');
    expect(message).toBe(6);
  });
  it('[;.W]', () => {
    const message = decodeNumber(';.W');
    expect(message).toBe(NaN);
  });
  it('[.........!]', () => {
    const message = decodeNumber('.........!');
    expect(message).toBe(107);
  });
  it('[..,!]', () => {
    const message = decodeNumber('..,!');
    expect(message).toBe(95);
  });
});
