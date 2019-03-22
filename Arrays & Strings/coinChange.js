var coinChange = function(coins, amount) {
  let numCoins = 0;
  if (amount <= 0) return 0;
  while (amount >= 0) {
    console.log("amt", amount);
    let minCoin = Math.min(...coins);
    if (minCoin > amount) return -1;
    let closest = coins.slice().filter(el => el <= amount);
    let largest = Math.max(...closest);
    let smallest = Math.min(...closest);
    console.log(smallest);
    amount = amount - largest;
    numCoins++;
    if (amount === 0) return numCoins;
    if (amount < 0) return -1;
  }
  return -1;
};
