function countEwords(str) {
  str = str.toLowerCase();
  let words = str.split(" ");
  let count = 0;
  words.forEach(word => (word.includes("e") ? count++ : count));
  return count;
}
