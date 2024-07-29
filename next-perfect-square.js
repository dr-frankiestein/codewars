function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  const sqrt = Math.sqrt(sq)
  if(sqrt % 1 !==0) return -1
  return (sqrt + 1) ** 2
}