function canTwoMoviesFillFlight(movieLengths, flightLength) {
  let movieHsh = {};
  movieLengths.forEach((movie, idx) => (movieHsh[movie] = idx));
  let i = 0;
  if (movieLengths.length === 1) return false;
  while (i < movieLengths.length) {
    let availableTime = flightLength - movieLengths[i];
    if (
      movieLengths[availableTime] !== null &&
      i !== movieLengths[availableTime]
    ) {
      return true;
    }
    i++;
  }
  return false;
}
