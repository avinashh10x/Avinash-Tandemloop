

function getMultiples(arr) {
    let output = {}
    for (let i = 1; i <= 9; i++) {
        output[i] = arr.filter((item) => item % i === 0).length
    }
    console.log(output)
}

getMultiples([1, 3, 6, 8, 5, 3, 9, 7])