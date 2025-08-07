
function printOdd(n) {

    let num = n

    if (n % 2 === 0) num -= 1


    let result = []
    let count = 1
    for (let i = 1; i <= num; i++) {
        result.push(count)
        count += 2
    }
    return result
}


console.log(printOdd(4))