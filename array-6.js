const arr = [-1, 2, 34, 5, 6, 78, -12, -13, 3, 5]
for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
        console.log(arr[i])
    }
}
let i = 0;
while(i < arr.length) {
    if (arr[i] % 2 !== 0) {
        console.log(arr[i])
    }
    i++;
}