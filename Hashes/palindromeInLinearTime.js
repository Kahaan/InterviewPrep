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

// Better solution

function hasPalindromePermutation(theString) {
  // Track characters we've seen an odd number of times
  const unpairedCharacters = new Set();

  for (let char of theString) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }

  // The string has a palindrome permutation if it
  // has one or zero characters without a pair
  return unpairedCharacters.size <= 1;
}
