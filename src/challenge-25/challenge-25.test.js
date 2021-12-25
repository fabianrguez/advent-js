import canMouseEat from './challenge-25';

describe('[challenge-25] - The last game and see you next year👋', () => {
  const room1 = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    [' ', ' ', '*'],
  ];

  const room2 = [
    ['*', ' ', ' ', ' '],
    [' ', 'm', '*', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '*'],
  ];
  describe('room 1', () => {
    test('mouse eat up', () => {
      const canEat = canMouseEat('up', room1);
      expect(canEat).toBeFalsy();
    });
    test('mouse eat down', () => {
      const canEat = canMouseEat('down', room1);
      expect(canEat).toBeTruthy();
    });
    test('mouse eat right', () => {
      const canEat = canMouseEat('right', room1);
      expect(canEat).toBeFalsy();
    });
    test('mouse eat left', () => {
      const canEat = canMouseEat('left', room1);
      expect(canEat).toBeFalsy();
    });
  });
  describe('room 2', () => {
    test('mouse eat up', () => {
      const canEat = canMouseEat('up', room2);
      expect(canEat).toBeFalsy();
    });
    test('mouse eat down', () => {
      const canEat = canMouseEat('down', room2);
      expect(canEat).toBeFalsy();
    });
    test('mouse eat right', () => {
      const canEat = canMouseEat('right', room2);
      expect(canEat).toBeTruthy();
    });
    test('mouse eat left', () => {
      const canEat = canMouseEat('left', room2);
      expect(canEat).toBeFalsy();
    });
  });
});
