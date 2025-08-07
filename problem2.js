
function printOdd(n) {


    let result = []
    let count = 1
    for (let i = 1; i <= n; i++) {
        result.push(count)
        count += 2
    }
    return result
}


console.log(printOdd(5))