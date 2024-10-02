function isTriangular(t) {
  root = -1 / 2 + Math.sqrt(1 + 8 * t) / 2;
  return root % 1 == 0;
}
