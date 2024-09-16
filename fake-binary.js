function fakeBin(x){
  return x.split('').map(a => a < 5 ? 0 : 1).join('')
}