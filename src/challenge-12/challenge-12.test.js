import getMinJump from './challenge-12';
// Perfect way to drop off gifts
describe('[challenge-12] Perfect way to drop off gifts', () => {
  test('obstacles [5, 3, 6, 7, 9]', () => {
    const minJump = getMinJump([5, 3, 6, 7, 9]);
    expect(minJump).toBe(4);
  });
  test('obstacles [2, 4, 6, 8, 10]', () => {
    const minJump = getMinJump([2, 4, 6, 8, 10]);
    expect(minJump).toBe(7);
  });
  test('obstacles [1, 2, 3, 5]', () => {
    const minJump = getMinJump([1, 2, 3, 5]);
    expect(minJump).toBe(4);
  });
  test('obstacles [3, 7, 5]', () => {
    const minJump = getMinJump([3, 7, 5]);
    expect(minJump).toBe(2);
  });
  test('obstacles [9, 5, 1]', () => {
    const minJump = getMinJump([9, 5, 1]);
    expect(minJump).toBe(2);
  });
});
