const arr = [1, 2, 34, 5, 6, 78, 12, -13, 3, 5]
let accumulator = 0
for (let i = 0; i < arr.length; i++) {
    accumulator += arr[i]
}
console.log(accumulator)
