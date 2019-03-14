var lengthOfLongestSubstring = function(s) {
  if (s == "") return 0;
  let combos = {};
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      subString = s.slice(i, j + 1);
      combos[subString] !== undefined
        ? (combos[subString] += 1)
        : (combos[subString] = 1);
    }
  }
  return Object.keys(combos)
    .filter(el => uniques(el))
    .sort((a, b) => b.length - a.length)[0].length;
};

function uniques(str) {
  let chars = {};
  for (let el of str) {
    chars[el] ? (chars[el] += 1) : (chars[el] = 1);
  }
  for (let key in chars) {
    if (chars[key] > 1) return false;
  }
  return true;
}
