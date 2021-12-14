import shouldBuyFidelity from './challenge-11';

describe('[challenge-11] - Does it worth it to buy fidelity card?', () => {
  test('Buy 1 ticket', () => {
    const shouldBuy = shouldBuyFidelity(1);
    expect(shouldBuy).toBeFalsy();
  });

  test('Buy 30 tickets', () => {
    const shouldBy = shouldBuyFidelity(30);
    expect(shouldBy).toBeTruthy();
  })

  test('Buy 100 tickets', () => {
    const shouldBuy = shouldBuyFidelity(100);
    expect(shouldBuy).toBeTruthy();
  });
});
