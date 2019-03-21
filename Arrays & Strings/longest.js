function longest(s1, s2) {
  let s3 = s1 + s2;
  let hsh = {};
  for (let el of s3) {
    hsh[el] = 1;
  }
  return Object.keys(hsh)
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join("");
}
