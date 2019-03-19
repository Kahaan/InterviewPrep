function mergeSortArrs(a, b) {
  let merged = [];
  let aElement = a[0];
  let bElement = b[0];
  let i = 1;
  let j = 1;

  if (a.length == 0) return b;
  if (b.length == 0) return a;

  while (aElement || bElement) {
    if ((aElement && !bElement) || aElement < bElement) {
      merged.push(aElement);
      aElement = a[i++];
    } else {
      merged.push(bElement);
      bElement = b[j++];
    }
  }
  return merged;
}
