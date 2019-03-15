function generateName() {
  // make sure to check the name is unique via the photoManager object
  let str = `${Date.now()}`;
  let mid = str.length / 2 + 1;
  str = str.slice(mid, str.length);
  return photoManager.nameExists(str) ? str : str;
}
