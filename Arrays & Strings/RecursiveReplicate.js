function replicate(times, number) {
  return times < 1 ? [] : [number].concat(replicate(times - 1, number));
}
