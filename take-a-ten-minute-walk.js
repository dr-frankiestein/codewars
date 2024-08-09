function isValidWalk(walk) {
  if (walk.length != 10) return false
  
  const position = {x:0, y:0}

  for (dir of walk) {
    switch (dir) {
      case 'n': position['y']++; break
      case 's': position['y']--; break
      case 'e': position['x']++; break
      case 'w': position['x']--; break
    }
  }

  return position['x'] === 0 && position['y'] === 0
  
}