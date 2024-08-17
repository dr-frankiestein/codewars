function arrayDiff(a, b) {
  for (i of b) a = a.filter(j => j!=i)
  return a
}