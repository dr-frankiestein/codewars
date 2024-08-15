function queueTime(customers, n) {
  let qTimes = new Array(n).fill(0)

  for (time of customers) {
    let shortestLine = qTimes.indexOf(Math.min(...qTimes))
    qTimes[shortestLine] = qTimes[shortestLine] + time
  }

  return Math.max(...qTimes)

}