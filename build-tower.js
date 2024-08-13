function towerBuilder(nFloors) {
  // build here
  let pyramid = []
  let totalWidth = nFloors+nFloors-1
  for (let i=nFloors; i>0; i--) {
    let floor = "*".repeat(i+i-1).padStart(i-1+nFloors).padEnd(totalWidth)
    pyramid.unshift(floor)
  }
  return pyramid
}

// top soln not much better than mine, if looks better
// padding soln much less clunky than mine
// function towerBuilder(nFloors) {
//   var tower = [];
//   for (var i = 0; i < nFloors; i++) {
//     tower.push(" ".repeat(nFloors - i - 1)
//              + "*".repeat((i * 2)+ 1)
//              + " ".repeat(nFloors - i - 1));
//   }
//   return tower;
// }