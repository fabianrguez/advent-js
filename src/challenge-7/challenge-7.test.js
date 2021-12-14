import contains from './challenge-7';

describe('[challenge-7] - Searching in the warehouse', () => {
  const warehouse = {
    estanteria1: {
      cajon1: {
        producto1: 'coca-cola',
        producto2: 'fanta',
        producto3: 'sprite',
      },
    },
    estanteria2: {
      cajon1: 'vacio',
      cajon2: {
        producto1: 'pantalones',
        producto2: 'camiseta',
      },
    },
  };

  const warehouse2 = {
    baul: {
      fondo: {
        objeto: 'cd-rom',
        'otro-objeto': 'disquette',
        'otra-cosa': 'mando',
      },
    },
  };

  test('is camiseta in warehouse 1?', () => {
    const isProductStored = contains(warehouse, 'camiseta');
    expect(isProductStored).toBeTruthy();
  });

  test('is camiseta in warehouse 2?', () => {
    const isProductStored = contains(warehouse2, 'camiseta');
    expect(isProductStored).toBeFalsy();
  });

  test('is gameboy in warehouse 2?', () => {
    const isProductStored = contains(warehouse2, 'gameboy');
    expect(isProductStored).toBeFalsy();
  });

  test('is mando in warehouse 2?', () => {
    const isProductStored = contains(warehouse2, 'mando');
    expect(isProductStored).toBeTruthy();
  });
});
