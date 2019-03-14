var numJewelsInStones = function(J, S) {
  let count = 0;
  for (let stone of S) {
    if (J.includes(stone)) count += 1;
  }
  return count;
};
