function countSheeps(sheep) {
  return sheep.reduce((acc, current) => {
    return current ? ++acc : acc
  }, 0)
}