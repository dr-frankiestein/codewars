function nbYear(p0, percent, aug, p) {
  // your code
let pop = p0
let i = 0
while (pop < p) {
  popGrowth = pop*(percent/100) + aug
  pop = Math.floor(pop + popGrowth)
  
  i++
}
return i
}