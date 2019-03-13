var sortedSquares = function(A) {
  let squares = A.map(num => num ** 2);
  return squares.sort((a, b) => a - b);
};
