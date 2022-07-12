const arr = [1, 2, 34, 5, 6, 78, 12, -13, 3, 5]
let accumulatorOdd = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        accumulatorOdd.push(arr[i])
    }
}
console.log(accumulatorOdd)