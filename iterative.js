const increasingSubsequence = (A) => {
    n=A.length - 1
    let D = []
    let P = []
    D[0] = 1
    P[0] = 0
    for( let i=1; i<=n; i++) {
      D[i] = 1
      P[i] = 0
      for(let j=i-1; j>=0; j--) {
        if(A[j] < A[i] && D[j] + 1 > D[i]) {
          D[i] = D[j] + 1
          P[i] = j
        }
      }
    }
    let l = 0
    let k = 0
    for(let i=0; i<=n; i++) {
      if (D[i] > l) {
        l = D[i]
        k= i
      }
    }
    return l
  }

  module.exports = {
      increasingSubsequence
  }