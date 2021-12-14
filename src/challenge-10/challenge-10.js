const COINS = [1, 2, 5, 10, 20, 50];

export default function getCoins(change) {
  let coins = [0, 0, 0, 0, 0, 0];
  for (let index = COINS.length - 1; index >= 0; index--) {
    const coinValue = COINS[index];
    if (coinValue <= change) {
      const numberOfCoins = Math.floor(change / coinValue);
      coins[index] = numberOfCoins;
      change -= numberOfCoins * coinValue;
    }
  }
  return coins;
}
