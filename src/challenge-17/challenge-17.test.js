import countPackages from './challenge-17';

describe('[challenge-17] - The madness of sending package during this time of year', () => {
  const carrier1 = [
    ['dapelu', 5, ['midu', 'jelowing']],
    ['midu', 2, []],
    ['jelowing', 2, []],
  ];

  const carrier2 = [
    ['lolivier', 8, ['camila', 'jesuspoleo']],
    ['camila', 5, ['sergiomartinez', 'conchaasensio']],
    ['jesuspoleo', 4, []],
    ['sergiomartinez', 4, []],
    ['conchaasensio', 3, ['facundocapua', 'faviola']],
    ['facundocapua', 2, []],
    ['faviola', 1, []],
  ];

  test('carrier1 dapelu packages', () => {
    const numberOfPackages = countPackages(carrier1, 'dapelu');
    expect(numberOfPackages).toBe(9);
  });
  test('carrier 2 dapelu packages', () => {
    const numberOfPackages = countPackages(carrier2, 'camila');
    expect(numberOfPackages).toBe(15);
  });
  test("carrier doesn't exists", () => {
    const numberOfPackages = countPackages(null, 'test');
    expect(numberOfPackages).toBe(0);
  });
});
