// arguments

function findeHighest(upperLimit, firstElement, ...numList) {
    let max = 0
    console.log(firstElement)
    console.log(numList)
    numList.filter(function (n) {
        if ((n < upperLimit) && (n > max)) {
            max = n
        }
    })
    return max
}

const highest = findeHighest(80, 99, 88, 77, 87, 67, 56, 7, 87, 67, 56, 87)
console.log(highest)