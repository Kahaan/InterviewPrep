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

// By using a hash we are able to create a count of the number of characters in the string
// Just by knowing the count of the number of even and odd chars we can tell whether or not
// it is possible to have a palindrome since a palindrome requires equal chars on each side and
// can accomodate one single char with an odd count.
// Therefore by reducing the problem to what is absolutely required
// we are able to avoid writing a nested loop with quadratic time complexity

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
