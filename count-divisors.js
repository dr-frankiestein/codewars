// counting this as working soln even though didn't work for codewars bc of the 'big test' - should be most efficient for arrays less than millions tho

function getDivisorsCnt(n){
  //create hash of primes, ie array where arr[p] = true if p is prime
  const primes = getPrimesLessThan(n)

  // formula to calc num of divisors is:
  // if prime factorization of n = p1^2 * p2^3 * p3^1
  // or in general, p1^f1 * p2^f2 * p3^f3 * ... * pm^fi
  // where p are the prime factors and f are the frequency of those factors
  // then number of divisors of n = (f1+1)*(f2+1)*(f3+1)*...*(fi+1)

  // so we need to go through each prime p, test if it's a factor of n
  // if it is a factor, count times n is divisible by p to get frequency f
  // then, for each prime factor, add 1 + fi and multiply to running product

  // create running total product to multiply freq +1 by in each loop
  let totalProduct = 1;
  // for each prime (ie true val in primes array, starting with 2)
  for (let p=2; p<=n; p++) {
    if (primes[p]) {
      // create freq var to count num of times n divisible by prime p
      let freq = 0
      // if n is divisible by prime p
      if (n%p == 0) {
        // divide n by p until result is no longer an integer
        while (n%p ==0) {
          n = n/p
          // increase freq count for each time n divisible by p
          freq++
        }
        // multiply running total by freq+1
        totalProduct = totalProduct * (freq+1)
      }
    }
  }

  return totalProduct

}

function getPrimesLessThan(n){
  // note this is easier way...
  // sieve method for prime calculation 
  let primeHash = Array(n+1).fill(true); 
  for (let p = 2; p * p < n; p++) {
    if (primeHash[p] == true) {
      for (let i = p * 2; i < n; i += p) {
        primeHash[i] = false; 
      }
    }
  }
  return primeHash  

}

