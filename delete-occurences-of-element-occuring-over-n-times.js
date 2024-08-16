function deleteNth(arr,n){
  // ...Given a list and a number, 
  // create a new list that contains each number of list at most N times, 
  // without reordering.
 
  // create object to store count of each element of og array
  let freq = {}
  // create new array for list to return
  let newList = []
  // loop over each element of og array
  for (let i = 0; i <arr.length; i++) {
    // if not in freq count obj, add element and set count to 0
    if (!freq[arr[i]]) freq[arr[i]] = 0
    // add one to count
    freq[arr[i]]++
    // if count <= n add to new list
    if (freq[arr[i]] <= n) newList.push(arr[i])
  }

  return(newList)
}

// soln from codewars
// function deleteNth(arr,x) {
//   var cache = {};
//   return arr.filter(function(n) {
//     cache[n] = (cache[n]||0) + 1;
//     return cache[n] <= x;
//   });
// }