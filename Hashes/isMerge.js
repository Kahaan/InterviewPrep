function isMerge(s, part1, part2) {
  let CombinedletterCount = {};
  let combined = part1 + part2;
  for (let l of combined) {
    CombinedletterCount[l]
      ? (CombinedletterCount[l] += 1)
      : (CombinedletterCount[l] = 1);
  }

  let strLetterCount = {};
  for (let l of s) {
    strLetterCount[l] ? (strLetterCount[l] += 1) : (strLetterCount[l] = 1);
  }

  let result = true;
  for (let l in s) {
    if (strLetterCount[l] < CombinedletterCount[l]) {
      console.log(strLetterCount, CombinedletterCount);
      result = false;
    }
  }
  return result;
}

isMerge("abc23", "abc", "123");

// INCORRECT, find solution here: https://www.codewars.com/kata/merged-string-checker/solutions?show-solutions=1
