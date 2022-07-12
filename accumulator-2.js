const arr = [1, 2, -34, 5, -6, 78, 12, -13, 3, 5]
let accumulator = 0
let i = 0;
while(i < arr.length) {
    if (arr[i] > 0) {
        accumulator += arr[i]
        console.log(accumulator)
    } 
    i++;
}
