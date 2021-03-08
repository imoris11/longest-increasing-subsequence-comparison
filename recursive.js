const BisIncreasing = (B) => {
    if(B.length <= 1) return true
    for(let i=1; i<B.length-2; i++) {
      if(B[i-1] > B[i]) {
        return false
      }
    }
    return true
  }
  
  recursiveLongestSub = (A, i, B, j) => {
    if (i > A.length) {
      if(BisIncreasing(B)) {
        return j
      }else {
        return 0
      }
    }
    let l1 = recursiveLongestSub(A, i+1, B, j)
    B[j+1] = A[i]
    let l2 = recursiveLongestSub(A, i+1, B, j+1)
    return Math.max(l1, l2)
  }

  module.exports = {
      recursiveLongestSub
  }