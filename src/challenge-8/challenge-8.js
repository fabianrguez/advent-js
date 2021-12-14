function getLowestPrice(prices) {
  return prices.sort((a, b) => a - b)[0];
}

function getHighestPrice(prices) {
  return prices.sort((a, b) => b - a)[0];
}

export default function maxProfit(prices) {
  const middle = Math.ceil(prices.length / 2);
  const purchasePrices = prices.splice(0, middle);
  const sellPrices = prices.splice(-middle)

  const lowestPurchasePrice = getLowestPrice(purchasePrices);
  const highestSellPrice = getHighestPrice(sellPrices);
  const profit = highestSellPrice - lowestPurchasePrice;

  return profit > 0 ? profit : -1;
}