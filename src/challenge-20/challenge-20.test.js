import pangram from './challenge-20';

describe('[challenge-20] - A pangram card? WHAT!', () => {
  test('contains all characters', () => {
    const isValid = pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho');
    expect(isValid).toBeTruthy();
  });

  test('including accents', () => {
    const isValid = pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!');
    expect(isValid).toBeTruthy();
  });

  test('not contains all characters', () => {
    const isValid = pangram('Esto es una frase larga pero no tiene todas las letras del abecedario');
    expect(isValid).toBeFalsy();
  });

  test('empty letter', () => {
    const isValid = pangram('');
    expect(isValid).toBeFalsy();
  });

  test('special characters', () => {
    const isValid = pangram('âbcdëfghíjklmnñópqrstúvwxyz');
    expect(isValid).toBeTruthy();
  });
});
