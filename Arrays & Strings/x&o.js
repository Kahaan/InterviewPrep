function XO(str) {
  let result = {};
  str = str.toLowerCase();
  for (let el of str) {
    result[el] ? (result[el] += 1) : (result[el] = 1);
  }
  return result["x"] === result["o"];
}
