function hasPalindromePermutation(theString) {
  let counterHsh = {};
  for (let el of theString) {
    counterHsh[el] != null ? (counterHsh[el] += 1) : (counterHsh[el] = 1);
  }

  let values = Object.keys(counterHsh);
  let numberOfOdds = values.filter(el => el % 2 != 0).length;
  if (numberOfOdds <= 1) return true;

  return false;
}
