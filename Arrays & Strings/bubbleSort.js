function bubbleSort(array) {
  let sorted = false;
  let i = 0;

  while (!sorted) {
    let j = i + 1;
    sorted = true;
    let first = array[i];
    let second = array[j];

    if (first > second) {
      array[i] = second;
      array[j] = first;
      sorted = false;
    }
    i++;
    j = i + 1;
  }
  return array;
}
