function power(b, e) {
  if (e < 1) {
    return 0;
  } else if (e === 1) {
    return b;
  } else if (e > 1) {
    return b * power(b, e - 1);
  }
}
