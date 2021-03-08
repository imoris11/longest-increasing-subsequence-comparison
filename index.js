const { increasingSubsequence } =  require('./iterative');
const { recursiveLongestSub } = require('./recursive');
const { performance } = require('perf_hooks');
const fs = require('fs')

const createResultFile = () => {
    try {
        const data = fs.writeFileSync('./result.csv', 'size, iterative, recursive\n')
        //file written successfully
      } catch (err) {
        console.error(err)
      }
}

const printLogs = (A) => {
    console.log(`\n Comparing array ${A}`)
    let t3 = performance.now()
    console.log(increasingSubsequence(A))
    let t4 = performance.now()
    console.log("Iterative: " + (t4 - t3) + " milliseconds.")
    let t0 = performance.now()
    console.log(recursiveLongestSub(A, 0, [], -1))
    let t1 = performance.now()
    console.log("Recursive: " + (t1 - t0) + " milliseconds.")
     //create csv
     try {
        const data = fs.writeFileSync('./result.csv', `${A.length}, ${t4-t3}, ${t1-t0}\n`, {flag: 'a+'})
        //file written successfully
      } catch (err) {
        console.error(err)
      }
  }

  const showLogs = () => {
      printLogs([45, 23, 90])
      printLogs([45, 23, 90, 3, 99, 108])
      printLogs([45, 23, 90, 3, 99, 108, 76, 12])
      printLogs([45, 23, 90, 3, 99, 108, 76, 12, 77, 16, 18])
      printLogs([45, 23, 90, 3, 99, 108, 76, 12, 77, 16, 18, 21, 23, 34])
      printLogs([45, 23, 90, 3, 99, 108, 76, 12, 77, 16, 18, 21, 23, 34, 35])
      printLogs([45, 23, 90, 3, 99, 108, 76, 12, 77, 16, 18, 21, 23, 34, 35, 37, 38])
      printLogs([45, 23, 90, 3, 99, 108, 76, 12, 77, 16, 18, 21, 23, 34, 35, 37, 38, 39, 45])
      printLogs([45, 23, 90, 3, 99, 108, 76, 12, 77, 16, 18, 21, 23, 34, 35, 37, 38, 39, 45, 46, 50, 45])
      printLogs([45, 23, 90, 3, 99, 108, 76, 12, 77, 16, 18, 21, 23, 34, 35, 37, 38, 39, 45, 46, 50, 45, 46, 47, 48])
      printLogs([45, 23, 90, 3, 99, 108, 76, 12, 77, 16, 18, 21, 23, 34, 35, 37, 38, 39, 45, 46, 50, 51, 52, 53, 54, 55, 56])

  }

  createResultFile()
  showLogs()

