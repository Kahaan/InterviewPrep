var sortArrayByParity = function(A) {
  let even = A.filter(el => el % 2 === 0);
  let odd = A.filter(el => el % 2 !== 0);
  return [...even, ...odd];
};
