function isTriangular(t) {
  // test for triangular number t = n * (n+1) / 2
  root = -1 / 2 + Math.sqrt(1 + 8 * t) / 2;
  return root % 1 == 0;
}
