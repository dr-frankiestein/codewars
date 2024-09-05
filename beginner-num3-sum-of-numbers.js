function getSum(a, b) {
  let [low, high] = [a, b].sort((a, b) => a - b);
  let sum = 0;
  while (low <= high) sum += low++;
  return sum;
}
