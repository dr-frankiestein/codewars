function oddOrEven(array) {
  const sum = array.reduce((acc,current) => acc+current,0)
  return sum%2==0 ? 'even' : 'odd'
}

