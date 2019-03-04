function getMaxProfit(stockPrices) {
  let maxProfit = 0;

  for (let i = 0; i < stockPrices.length; i++) {
    let subset = stockPrices.slice(0, i + 1);
    let high = Math.max(subset);
    let low = Math.min(subset);
    let currMax = high - low;
    if (currMax > maxProfit) {
      maxProfit = currMax;
    }
  }
  return maxProfit;
}
