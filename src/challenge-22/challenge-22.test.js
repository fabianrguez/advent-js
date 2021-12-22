import countDecorations from './challenge-22';

describe('[challenge-22] - How many ornaments does the christmas tree need?', () => {
  const tree = {
    value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
    left: {
      value: 2, // el nodo izquierdo necesita dos decoraciones
      left: null, // no tiene más ramas
      right: null, // no tiene más ramas
    },
    right: {
      value: 3, // el nodo de la derecha necesita tres decoraciones
      left: null, // no tiene más ramas
      right: null, // no tiene más ramas
    },
  };
  const bigTree = {
    value: 1,
    left: {
      value: 5,
      left: {
        value: 7,
        left: {
          value: 3,
          left: null,
          right: null,
        },
        right: null,
      },
      right: null,
    },
    right: {
      value: 6,
      left: {
        value: 5,
        left: null,
        right: null,
      },
      right: {
        value: 1,
        left: null,
        right: null,
      },
    },
  };

  test('normal tree ornaments', () => {
    const ornaments = countDecorations(tree);
    expect(ornaments).toBe(6);
  });

  test('big tree ornaments', () => {
    const ornaments = countDecorations(bigTree);
    expect(ornaments).toBe(28);
  });
});
