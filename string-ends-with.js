function solution(str, ending){
  const strEnd = str.slice(str.length-ending.length, str.length)
  return strEnd == ending ? true : false
}

// apparently there's an actual string method for this
// function solution(str, ending){
//   return str.endsWith(ending);
// }