const arr = ['метод', 'массив', 'цикл', 'фор', 'вайл', 'тру', 'фолс', 'константа', 'строка', 'объект']
let accumulator = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
      accumulator.push(arr[i])
    }
}
console.log(accumulator)